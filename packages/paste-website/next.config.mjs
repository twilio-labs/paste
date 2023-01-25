import nextMdx from '@next/mdx';
import remarkGfm from 'remark-gfm';

import headingsPlugin from './plugins/remark-headings-plugin.mjs';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, headingsPlugin],
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

export default withMDX(nextConfig);
