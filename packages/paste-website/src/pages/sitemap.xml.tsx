import { globby } from 'globby-esm';
import type { GetServerSideProps } from 'next';

const Sitemap = (): React.ReactElement | null => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://paste.twilio.design';

  const paths = await globby(['**/*.js', '!sitemap.xml.js', '!404.js', '!_*.js'], {
    cwd: __dirname,
  });
  const staticPaths = paths.map((staticPagePath) => {
    const path = staticPagePath.replace('.js', '');
    const route = path === 'index' ? '' : `${path}/`;

    return `${BASE_URL}/${route}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
