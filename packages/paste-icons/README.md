# Icons

## Installation

```
yarn add @twilio-paste/icons
```

## Usage

```js
import AssetsIcon from '@twilio-paste/icons/react/AssetsIcon';
// For the SVG:
// import AssetsSvg from '@twilio-paste/icons/svg/assets.svg';
// Note: make sure you have the webpack loader for loading svgs.

<AssetsIcon title={string} decorative={boolean} size={number} color={token} />;
```

### Standard Props

| Prop       | Type      | Description                                                                                                                                           | Default                                                                  |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| decorative | boolean   | Whether or not the SVG is just visual flair or adds meaning to the page. Specifically for screenreaders to know whether to read out the title or not. | true                                                                     |
| title?     | string    | The accesibility text that is read when screenreaders get to this component                                                                           | Component name                                                           |
| size?      | IconSize  | The width and height value (all icons are square) in pixels                                                                                           | sizeIcon20                                                               |
| iconColor? | TextColor | The color of your icon                                                                                                                                | currentColor - whatever is the font-color inherited from up the DOM tree |

Keep in mind these props are the **Base Guarantee** for icon components. Some icons may have additional functionality as needed (a way to style two color options for example).

## Adding new icons

Please [review our documentation](https://paste.twilio.design/icon-system/how-to-add-an-icon/#exporting-and-adding-the-icon) for information on how to add new icons into Paste.

## FAQ

### Are these components as render performant as images?

[Yes!](https://github.com/TheSisb/svg-stress-test) The difference is negligable in both dev and prod. Worth it, if you consider the accessibility and usability gains.

### Why are we switching from icon fonts?

Icon fonts were a novel and useful solution for a bygone era of front-end development. [Here's a breakdown of the pros and cons.](https://github.com/twilio-labs/svg-to-react/blob/master/RATIONALE.md)

### How can I animate these icons?

Wrap these icons with a component that animates its children or pass in a className prop. See the [Spinner component](https://github.com/twilio-labs/paste/blob/master/packages/paste-core/components/spinner/src/index.tsx) for an example.

### Can I modify the template that generates these icon components?

Yes! The tooling that powers this is [seperately bundled and available for use.](https://github.com/twilio-labs/svg-to-react)
