const pageQuery = `{
  pages: allMdx(
    filter: {
      fileAbsolutePath: {regex: "/pages/"},
      frontmatter: {slug: {ne: "/404/"}}
    }) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          description
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flatten = (arr) =>
  arr.map(({node: {frontmatter, ...rest}}) => ({
    ...frontmatter,
    ...rest,
  }));

const settings = {
  attributesToSnippet: [`excerpt:20`],
};

const queries = [
  {
    query: pageQuery,
    transformer: ({data}) => flatten(data.pages.edges),
    indexName: process.env.ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = queries;
