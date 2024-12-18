import { globby } from "globby-esm";
import type { GetServerSideProps } from "next";
import { unstable_noStore as noStore } from "next/cache";

const Sitemap = (): React.ReactElement | null => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  noStore();
  const BASE_URL = "https://paste.twilio.design";

  // Get a list of all pages currently in the site, must be mdx and not tsx which they all currently are
  const uncompiledPaths = await globby(["**/*.mdx", "!**/api/**", "!**/404/**", "!**/blog/001-template*"]);

  const urlPaths = uncompiledPaths.map((path) => {
    // Remove `src/pages/`
    let modifiedPath = path.replace(/^src\/pages\//, "");
    // Remove `.mdx`
    modifiedPath = modifiedPath.replace(/\.mdx$/, "");
    // Remove `/index` if it's at the end of the path
    modifiedPath = modifiedPath.replace(/\/index$/, "");
    return `${BASE_URL}/${modifiedPath}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${urlPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
