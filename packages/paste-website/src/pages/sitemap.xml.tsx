import type { GetServerSideProps } from "next";

import { SITEMAP } from "../../../../cypress/integration/sitemap-vrt/constants"; // Import the SITEMAP used for cypress

const Sitemap = (): React.ReactElement | null => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = "https://paste.twilio.design";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${SITEMAP.map((url) => {
        return `
            <url>
              <loc>${BASE_URL}${url}</loc>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
      }).join("")}
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
