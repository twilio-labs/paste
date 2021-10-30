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
exports.createSchemaCustomization = ({actions, schema}) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'Airtable',
      interfaces: ['Node'],
      fields: {
        // For airtable roadmap create a custom boolean field to use as a filter. If the release date is greater than
        // today, then it is a future release.
        isFuture: {
          type: 'Boolean!',
          resolve: (source) => {
            return new Date(source.data.Release_date) > new Date();
          },
        },
      },
    }),
  ]);
};
