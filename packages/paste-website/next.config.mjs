import nextBundleAnalyzer from "@next/bundle-analyzer";
import nextMdx from "@next/mdx";
import remarkGfm from "remark-gfm";

import headingsPlugin from "./plugins/remark-headings-plugin.mjs";

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, headingsPlugin],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    legacyBrowsers: false,
  },
  // https://nextjs.org/docs/pages/api-reference/next-config-js/headers
  async headers() {
    return [
      {
        source: "/components/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src * frame-ancestors *",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
