const nextMdx = require('@next/mdx');

const headingsPlugin = require('./plugins/remark-headings-plugin');

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [headingsPlugin],
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
