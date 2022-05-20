# Images

Images in Gatsby can be unnecessarily complicated, so we should try and keep it as simple as possible by following these guidelines.

## In MDX pages

In MDX favor Markdown syntax for including images. Let Gatsby do the rest.

```mdx
![alt text for image](../relative/path/to/image.png)
```

If you can't use Markdown because you are displaying your image inside a component, first **do not** compose your component in the MDX file. Create a component `tsx` file and import it. Inside you component file, use the [Gatsby Static Image](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/#static-images) component.

```tsx
import {StaticImage} from 'gatsby-plugin-image';

export const AwaitingDataImage: React.FC = () => {
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-awaiting-data.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
    />
  );
};
```

## Non-MDX pages

Favor using the [Gatsby Static Image](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/#static-images) component.

```tsx
import {StaticImage} from 'gatsby-plugin-image';

export const AwaitingDataImage: React.FC = () => {
  return (
    <StaticImage
      src="../../assets/images/patterns/empty-awaiting-data.png"
      alt=""
      width={150}
      placeholder="blurred"
      layout="fixed"
    />
  );
};
```

## Dynamic Images (GraphQL)

It is incredibly rare that you should need [Dynamic images](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/#dynamic-images). We aren't doing anything fancy right now, **avoid them at all costs**.
