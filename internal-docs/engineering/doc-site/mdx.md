# MDX

MDX is implemented by the [@next/mdx](https://nextjs.org/docs/advanced-features/using-mdx) package. To ensure your page renders correctly, supply the needed navigation data to `getStaticProps` and export the layout component as the default export:

```tsx
import DefaultLayout from '../../../layouts/DefaultLayout';
import {getNavigationData} from '../../../utils/api'; // import this last to avoid issues with the MDXProvider

export default DefaultLayout;

export const getStaticProps = async () => {
  const navigationData = await getNavigationData();
  return {
    props: {
      navigationData,
    },
  };
};
```

## Component pages

Component pages have their own Layout, `ComponentPageLayout`. This layout handles a few things for you, like positioning the Table of Contents Aside and the Component Page header.

This means you need to supply `getStaticProps` with some more data than `DefaultLayout` needs.

```tsx
import ComponentPageLayout from '../../../layouts/ComponentPageLayout';
import {getFeature, getNavigationData} from '../../../utils/api'; // import this last to avoid issues with the MDXProvider

export default ComponentPageLayout;

export const getStaticProps = async () => {
  const navigationData = await getNavigationData();
  const feature = await getFeature('Anchor');
  return {
    props: {
      data: {
        ...packageJson,
        ...feature,
      },
      // data for the side nav
      navigationData,
      // provided by a custom mdx plugin for the TOC
      mdxHeadings,
      // Everything needed to render a Page Header
      pageHeaderData: {
        categoryRoute: SidebarCategoryRoutes.COMPONENTS,
        githubUrl: 'https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/anchor',
        storybookUrl: '/?path=/story/components-anchor--default',
      },
    },
  };
};
```

`ComponentPageLayout` is designed to accomodate a three page component structure. Guidelines, API and Changelog.

When building an API page you must fetch the ComponentAPI data you are documenting and wanting to render. The full API page might look something like.

````tsx
export const meta = {
  title: 'Anchor - API',
  package: '@twilio-paste/anchor',
  description: 'The anchor can be used to hyperlink to another URL. It accepts both internal and external URLs.',
  slug: '/components/anchor/api',
};

import Changelog from '@twilio-paste/table/CHANGELOG.md';
import packageJson from '@twilio-paste/anchor/package.json';

import {SidebarCategoryRoutes} from '../../../constants';
import ComponentPageLayout from '../../../layouts/ComponentPageLayout';
import {getFeature, getNavigationData, getComponentAPI} from '../../../utils/api';

export default ComponentPageLayout;

export const getStaticProps = async () => {
  const navigationData = await getNavigationData();
  const feature = await getFeature('Anchor');
  const componentAPI = getComponentAPI('@twilio-paste/anchor');
  return {
    props: {
      data: {
        ...packageJson,
        ...feature,
      },
      componentAPI,
      mdxHeadings,
      navigationData,
      pageHeaderData: {
        categoryRoute: SidebarCategoryRoutes.COMPONENTS,
        githubUrl: 'https://github.com/twilio-labs/paste/tree/main/packages/paste-core/components/anchor',
        storybookUrl: '/?path=/story/components-anchor--default',
      },
    },
  };
};

## Installation

```bash
yarn add @twilio-paste/anchor - or - yarn add @twilio-paste/core
````

## Usage

```jsx
import {Anchor} from '@twilio-paste/core/anchor';

const Component = () => <Anchor href="https://paste.twilio.design">Go to Paste</Anchor>;
```

## Props

<PropsTable componentAPI={props.componentAPI} />
```
