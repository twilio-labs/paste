const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
  remarkPlugins: [],
  rehypePlugins: [],
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
