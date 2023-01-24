const visit = require(`unist-util-visit`);
const toString = require(`mdast-util-to-string`);

// eslint-disable-next-line unicorn/consistent-function-scoping
module.exports = () => (tree) => {
  const headings = [];

  visit(tree, `heading`, (heading) => {
    headings.push({
      value: toString(heading),
      depth: heading.depth,
    });
  });

  tree.children.push({
    type: 'export',
    value: `export const mdxHeadings = ${JSON.stringify(headings)}`,
  });
};
