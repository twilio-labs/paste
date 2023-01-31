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
