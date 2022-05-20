# Airtable Integration

- [Airtable Integration](#airtable-integration)
  - [Overview tables](#overview-tables)
  - [Component and pattern headers](#component-and-pattern-headers)
  - [Future state](#future-state)

## Overview tables

The overview tables and component/pattern headers all use an Airtable integration to gather the data displayed in each.

The Airtable connection is done through the `gatsby-source-airtable` plugin. This uses an api key and pulls all of the Airtable information into a graphql schema. We then use this to populate the component or pattern statuses. Here is an example of the component overview page graphql query:

```js
allAirtable(
     sort: {fields: [data___Feature]}
     filter: {data: {status: {ne: null}, Component_Category: {eq: "component"}}}
   ) {
     edges {
       node {
         data {
           Feature
           Documentation
           Figma
           Design_committee_review
           Engineer_committee_review
           Code
           status
         }
       }
     }
   }
```

In the query, we’re filtering all of the Airtable data by status and Component_Category. Then getting the Feature, Documentation, Figma, etc table data.

In the `component-overview-table` component, we either display the data, pass the data to a conditional, or pass the data to another component like `AssetStatus` or `PeerReviewStatus`.

Most of the conditional statements basically check whether to display a `SuccessIcon` or `pending`. The only difference is the conditional to display the component name or a link to the component page. This conditional checks to see if the Airtable documentation is checked, and if so it will render a link to the doc page. If it's false, then it will just render the component or pattern name.

_This can cause some issues with Cypress tests failing if you’re working on a branch that is out of date with `main` where a new doc page has been created. If that's the case, rebasing with `main` should fix the Cypress tests._

## Component and pattern headers

The component and pattern headers also get their data from Airtable. In the components, the graphql data is passed to the `PackageStatusLegend` component, where a series of conditionals displays either a `SuccessIcon` or `pending`. The `status` and `Product_suitability` data are used directly in the component or pattern header components.

Here is an example of the graphql query:

```js
allAirtable(filter: {data: {Feature: {eq: "Delete"}}}) {
     edges {
       node {
         data {
           Documentation
           Figma
           Design_committee_review
           Engineer_committee_review
           Code
           status
           Product_suitability
         }
       }
     }
   }
```

This query filters all of the Airtable data by Feature name. The feature needs to match exactly what is in Airtable for the data to correctly be fetched. So in this case, if you filtered by “delete”, no data would be fetched, but “Delete” works because the feature in Aritable is “Delete”.

## Future state

We should also use the Airtable data to build the sidebar navigation. Right now that is built based on all the Paste packages. If that information is not in Airtable, the overview tables and sidebar navigation could get out of sync.
