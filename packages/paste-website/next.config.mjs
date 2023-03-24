import nextBundleAnalyzer from '@next/bundle-analyzer';
import nextMdx from '@next/mdx';
import remarkGfm from 'remark-gfm';

import headingsPlugin from './plugins/remark-headings-plugin.mjs';

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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
  compiler: {
    emotion: true,
  },
  experimental: {
    legacyBrowsers: false,
  },
  typescript: {
    // This is because we only build JS assets in Netlify for a quicker build time.
    ignoreBuildErrors: true,
  },
  eslint: {
    // This is because we only build JS assets in Netlify for a quicker build time.
    ignoreDuringBuilds: true,
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
