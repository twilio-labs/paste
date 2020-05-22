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
        excerpt(pruneLength: 180)
        rawBody
      }
    }
  }
}`;

const handleRawBody = node => {
  const {rawBody, ...rest} = node;
  const sections = rawBody.split('\n\n');
  const records = sections.map(section => ({
    ...rest,
    content: section,
  }));
  return records;
};

const unnestFrontmatter = node => {
  const {frontmatter, ...rest} = node;

  return {
    ...frontmatter,
    ...rest,
  };
};

const settings = {
  attributesToSnippet: [`excerpt:20`],
  attributeForDistinct: 'slug',
  distinct: true,
};

const queries = [
  {
    query: pageQuery,
    transformer: ({data}) =>
      data.pages.edges
        .map(edge => edge.node)
        .map(unnestFrontmatter)
        .map(handleRawBody)
        .reduce((acc, cur) => [...acc, ...cur], []),
    indexName: process.env.ALGOLIA_INDEX_NAME,
    settings,
  },
];

module.exports = queries;
