import { toString as mdastToString } from "mdast-util-to-string";
import { visit } from "unist-util-visit-esm";

// eslint-disable-next-line unicorn/consistent-function-scoping
const transform = () => (tree) => {
  const headings = [];

  visit(tree, "heading", (heading) => {
    headings.push({
      value: mdastToString(heading),
      depth: heading.depth,
    });
  });

  tree.children.push({
    type: "export",
    value: `export const mdxHeadings = ${JSON.stringify(headings)}`,
  });
};

export default transform;
