# Airtable Integration

- [Airtable Integration](#airtable-integration)
  - [Overview tables](#overview-tables)
  - [Component and pattern headers](#component-and-pattern-headers)
  - [Future state](#future-state)

## Overview tables

The overview tables and component/pattern headers all use an Airtable integration to gather the data displayed in each.

The Airtable connection is done through the `Airtable JS client`. It uses an api key and allows us to query the Airtable information. We then use this to populate the component or pattern statuses. Here is an example of the query used to fetch all features:

```js
const airtable = new Airtable({apiKey: process.env.AIRTABLE_APIKEY});
const base = airtable.base(process.env.AIRTABLE_BASEID);

export const systemTable = base('System');

const features = await systemTable
  .select({
    filterByFormula: 'status',
    sort: [{field: 'Feature'}],
    fields: [
      'Component Category',
      'Feature',
      'Documentation',
      'Figma',
      'Design committee review',
      'Engineer committee review',
      'Code',
      'status',
      'Product suitability',
    ],
  })
  .all();
const items = features.map(({fields}) => fields);
```

The data is then written to a JSON file and made available via the `utils/api` helper functions. The overview pages can then access this data using Next's `getStaticProps` and pass the information to other components:

```js
import {getAllComponents} from '../../utils/api';

export const getStaticProps = async () => {
  const components = await getAllComponents(['component', 'layout']);
  return {
    props: {
      componentList: components,
    },
  };
};
```

In the query, we’re filtering all of the Airtable data by status. Then getting the Feature, Documentation, Figma, etc table data.

In the `component-overview-table` component, we either display the data, pass the data to a conditional, or pass the data to another component like `AssetStatus` or `PeerReviewStatus`.

Most of the conditional statements basically check whether to display a `SuccessIcon` or `pending`. The only difference is the conditional to display the component name or a link to the component page. This conditional checks to see if the Airtable documentation is checked, and if so it will render a link to the doc page. If it's false, then it will just render the component or pattern name.

_This can cause some issues with Cypress tests failing if you’re working on a branch that is out of date with `main` where a new doc page has been created. If that's the case, rebasing with `main` should fix the Cypress tests._

## Component and pattern headers

The component and pattern headers also get their data from Airtable. In the components, the data is passed to the `PackageStatusLegend` component, where a series of conditionals displays either a `SuccessIcon` or `pending`. The `status` and `Product suitability` data are used directly in the component or pattern header components.

Here is an example:

```js
import {getFeature} from '../../../utils/api';

export const getStaticProps = async () => {
  const feature = await getFeature('Delete');
  return {
    props: {
      data: {
        ...feature,
      },
    },
  };
};
```

This util filters all of the Airtable data by Feature name. The feature needs to match exactly what is in Airtable for the data to correctly be fetched. So in this case, if you filtered by “delete”, no data would be fetched, but “Delete” works because the feature in Aritable is “Delete”.

## Future state

We should also use the Airtable data to build the sidebar navigation. Right now that is built based on all the Paste packages. If that information is not in Airtable, the overview tables and sidebar navigation could get out of sync.
