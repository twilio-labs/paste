# Icons

- [Icons](#icons)
  - [Adding Icons](#adding-icons)
  - [Generating Icons](#generating-icons)

Our icons are converted from SVG to React components at compile time using our own “svg-to-react” library: [https://github.com/twilio-labs/svg-to-react](https://github.com/twilio-labs/svg-to-react)

## Adding Icons

The process for adding icons is very simple thanks to our naming conventions and conversion library.

Any new SVG assets must be copied into the [svg](../../packages/paste-icons/svg/) folder. We often see the `viewBox` attribute missing so be sure the top level element has the following:

```html
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
```

## Generating Icons

To generate newly added icons you can use the command `yarn convert:icons:new` from the root of the repo. This will create the new React components and appends the "Icon" string to the component name.
