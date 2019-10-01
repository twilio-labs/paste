const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({node, getNode, basePath: `pages`})
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}