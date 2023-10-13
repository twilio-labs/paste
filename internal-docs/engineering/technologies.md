# Technologies

- [Technologies](#technologies)
  - [Design Tokens](#design-tokens)
    - [Token transforms](#token-transforms)
  - [Components for the web](#components-for-the-web)
    - [How these work together](#how-these-work-together)
  - [Documentation site](#documentation-site)
  - [Theme designer web application](#theme-designer-web-application)
  - [Builds](#builds)
  - [Tests](#tests)
  - [Icons](#icons)
  - [Code Style](#code-style)

## Design Tokens

Design Tokens are atomic pieces of design language stored as platform-agnostic, semantically-named entities. They are the smallest piece of design—for example, a color—categorised by type and named by its application. For example $color-background-success or $shadow-focus.

We write our tokens in Yaml files.

```yml
global:
  type: color
  category: text-color
imports:
  - ../aliases/color.yml
  - ../aliases/color-palette.yml
props:
  # body text
  color-text:
    value: '{!palette-gray-100}'
    comment: Body text color
  color-text-weak:
    value: '{!palette-gray-60}'
    comment: Weak body text for visual hierarchy.
```

### Token transforms

We use [Theo](https://github.com/salesforce-ux/theo) ([https://github.com/salesforce-ux/theo](https://github.com/salesforce-ux/theo)) to transform our tokens into the following formats:

- [JSON](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.json)
- [Less](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.less)
- SCSS
  - [as individual variables](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.default.scss)
  - [as a SCSS map](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.map.scss)
- [CSS custom properties](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.custom-properties.css)
- [Android XML](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.android.xml)
- [iOS JSON](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.ios.json)
- JavaScript
  - [commonJS](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.common.js)
  - [es2015](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.es6.js)
- Typescript definitions
  - [commonJS](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.common.d.ts)
  - [es2015](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/tokens.es6.d.ts)
- [Sketch Palette](https://unpkg.com/browse/@twilio-paste/design-tokens/dist/sketch.sketchpalette)

These are then exported and distributed as an NPM package for our consumer to download and install.

## Components for the web

Paste distributes its design language and interaction design for web-based applications via components. The components are built using the following libraries:

- **Typescript**
  - Strongly typed JavaScript with exported type declarations for each component and utility
- **React**
  - Browser-based component rendering engine
- **Emotion CSS**
  - CSS styling library to apply encapsulated styles to our React components
- **Styled System**
  - Library to connect our design tokens to our components via a theme object.

### How these work together

React is a JavaScript library that enables you to create encapsulated, reusable pieces of web UI known as components. You can choose to expose some of the functionality via an interface or API, called props (short for “properties”). Setting props on a component can change how a component should behave, or render, depending on how you author the component’s functionality.

Emotion CSS is a popular CSS-in-JS styling library that allows us to co-locate our styles with our components functionality and writes our styles as unique CSS classnames for better style encapsulation and increased confidence our component styles won’t clash with, or override other components. Most importantly it allows us to write styles in JS objects for better style composition, and use a theme object that is shared via React’s context.

Connecting React components and Emotion CSS compilation is a Library called Styled System. Styled System allows you to create component APIs that map to CSS styling properties, that when set, create CSS rules for that component instance. We call them “style props.” For example, setting the `backgroundColor` React component prop would result in the background-color CSS property being created for a CSS selector that targets the HTML the React component renders.

Styled System also allows us to map CSS properties to categories of values that appear on the application’s theme object, via Emotion. For example, we can say that the CSS property background-color can be assigned a value from the colorBackground category on our theme object. This enables us to create a predefined system of available values mapped to CSS properties: A collection of text colors, background colors, border widths, font-sizes, etc.

These link very nicely to our Design Tokens. We can create a theme based on the categories we create for Design Tokens, that map directly to their intended styling use.

So now we have React components that export an interface of style props. Style props when set, generate CSS that is unique for that component instance. Those style props can be mapped to specific categories on our theme object. Our theme object is a 1-to-1 mapping of our Design Tokens and Categories.

To round it out, we use Typescript to create strongly typed style props that only export the correct, corresponding theme category as valid options. You can’t use a background-color for a text-color for example. This creates some guardrails around how you can apply our design language based on its intended use, and also some handy autocomplete features for our components when used in an IDE.

When we use Typescript, React, Emotion, and Styled System together, we encode our design language directly into our component APIs, with strict type safety to ensure we have confidence the Design Language rules are being followed, and updates are safe to make.

For more information on how to use the theme see our [Theme Package documentation](https://paste.twilio.design/tokens/theme-package) and guide on [how to compose custom UI with tokens](https://paste.twilio.design/tokens/how-to-compose-custom-ui-with-tokens).

## Documentation site

The documentation site is a [NextJS](https://nextjs.org/) website using the latest Paste components and Design language.

The content is largely written in [MDX](https://mdxjs.com/) pages.

The search is provided by [Algolia Docsearch](https://docsearch.algolia.com/).

The [roadmap](https://paste.twilio.design/roadmap/) is stored in an [Airtable](https://airtable.com/) and imported upon building the website via the [Airtable JS client](https://github.com/Airtable/airtable.js).

## Theme designer web application

The theme design web app is a [NextJS](https://nextjs.org/) application using the latest Paste components and Design Language.

## Builds

We build most of our packages using ESBuild for fast and reliable JS builds. The only exception is the ‘design-tokens’ package, which is built with gulp to work more easily with Theo.

## Tests

Our tests are written using Jest and react-testing-library ([https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)).

## Icons

Our icons are converted from SVG to React components at compile time using our own “svg-to-react” library: [https://github.com/twilio-labs/svg-to-react](https://github.com/twilio-labs/svg-to-react)

## Code Style

We use eslint (https://eslint.org/), [BiomeJS](https://biomejs.dev/), and Prettier ([https://prettier.io/](https://prettier.io/)) to maintain a consistent, readable code style throughout the entire monorepo.
