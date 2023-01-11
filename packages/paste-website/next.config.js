// eslint-disable-next-line @typescript-eslint/no-require-imports, import/no-extraneous-dependencies
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
};

module.exports = withMDX(nextConfig);
