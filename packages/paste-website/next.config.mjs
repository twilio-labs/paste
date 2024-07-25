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
  // https://vercel.com/docs/edge-network/redirects#configuration-redirects
  async redirects() {
    return [
      {
        source: "/getting-started/design",
        destination: "/introduction/for-designers/design-guidelines",
        permanent: true,
      },
      {
        source: "/getting-started/engineering",
        destination: "/introduction/for-engineers/quickstart",
        permanent: true,
      },
      {
        source: "/getting-started/manual-installation",
        destination: "/introduction/for-engineers/manual-installation",
        permanent: true,
      },
      { source: "/icons/how-to-add-an-icon", destination: "/introduction/contributing/icons", permanent: true },
      { source: "/patterns/contribute", destination: "/introduction/contributing/patterns", permanent: true },
      { source: "/principles", destination: "/introduction/about-paste", permanent: true },
      { source: "/getting-started/faqs", destination: "/introduction/about-paste", permanent: true },
      { source: "/getting-started/working-guide", destination: "/introduction/working-with-us", permanent: true },
      { source: "/content/:path*", destination: "/foundations/content/:path*", permanent: true },
      { source: "/illustrations", destination: "/foundations/illustrations", permanent: true },
      { source: "/icons/:path*", destination: "/components/icon/:path*", permanent: true },
      { source: "/components/icons/:path*", destination: "/components/icon/:path*", permanent: true },
      { source: "/layout/:path*", destination: "/components/:path*", permanent: true },
      { source: "/libraries/:path*", destination: "/core/libraries/:path*", permanent: true },
      { source: "/core/theme-package", destination: "/theme/", permanent: true },
      { source: "/tokens/theme-package", destination: "/theme/", permanent: true },
      { source: "/core/changing-theme", destination: "/theme/changing-theme", permanent: true },
      {
        source: "/tokens/how-to-compose-custom-ui-with-tokens",
        destination: "/customization/composing-custom-components-with-design-tokens",
        permanent: true,
      },
      { source: "/articles", destination: "/blog", permanent: true },
      { source: "/patterns/navigation", destination: "/experiences/navigation", permanent: true },
    ];
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
