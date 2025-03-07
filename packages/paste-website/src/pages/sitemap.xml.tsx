import type { GetServerSideProps } from "next";

import { SITEMAP } from "../../../../cypress/integration/sitemap-vrt/constants"; // Import the SITEMAP used for cypress

const Sitemap = (): React.ReactElement<any> | null => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = "https://paste.twilio.design";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${SITEMAP.map((url) => {
        let fullUrl = `${BASE_URL}${url}`;

        if (!fullUrl.endsWith("/")) {
          fullUrl += "/";
        }

        return `
            <url>
              <loc>${fullUrl}</loc>
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
