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
