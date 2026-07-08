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
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
