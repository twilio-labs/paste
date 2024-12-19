import fs from "fs";
import path from "path";

import { globby } from "globby-esm";
import type { GetServerSideProps } from "next";

const Sitemap = (): React.ReactElement | null => {
  return null;
};

export const revalidate = "force-cache";

const getRoutes = (): void => {
  const pagesDirectory = path.join(process.cwd(), "pages");
  const fileNames = fs.readdirSync(pagesDirectory);

  const files = fileNames
    .filter((fileName) => fileName.endsWith(".js") || fileName.endsWith(".jsx"))
    .map((fileName) => {
      return fileName === "index.js" ? "/" : `/${fileName.replace(/\.js(x)?$/, "")}`;
    });

  // eslint-disable-next-line no-console
  console.log("ai generated", fileNames, files);
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = "https://paste.twilio.design";
  getRoutes();
  // Get a list of all pages currently in the site, must be mdx and not tsx which they all currently are
  const uncompiledPaths = await globby(["**/*.mdx"], { cwd: process.cwd() });

  // eslint-disable-next-line no-console
  console.log(process.cwd(), __dirname);

  const urlPaths = uncompiledPaths.map((individualPath) => {
    // Remove `src/pages/`
    let modifiedPath = individualPath.replace(/^src\/pages\//, "");
    // Remove `.mdx`
    modifiedPath = modifiedPath.replace(/\.mdx$/, "");
    // Remove `/index` if it's at the end of the path
    modifiedPath = modifiedPath.replace(/\/index$/, "");
    return `${BASE_URL}/${individualPath}`;
  });

  const paths = await globby(["**/*.mdx", "!sitemap.xml.js", "!404.js", "!_*.js"], {
    cwd: process.cwd(),
  });

  // eslint-disable-next-line no-console
  console.log("cached pages:", paths);

  const staticPaths = paths.map((staticPagePath) => {
    const otherPath = staticPagePath.replace(".js", "");
    const route = otherPath === "index" ? "" : `${otherPath}/`;

    return `${BASE_URL}/${route}`;
  });

  // eslint-disable-next-line no-console
  console.log("staticPaths pages:", staticPaths);

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
