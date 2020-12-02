/**
 * Creates slugs from file names for pages.
 * This allows us to query slug nodes within GraphQL.
 *
 * See: https://www.gatsbyjs.org/docs/creating-slugs-for-pages/
 */

const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({node, getNode, basePath: `pages`});
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /docsearch\.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
