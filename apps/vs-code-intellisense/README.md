# Twilio Paste Intellisense

Twilio Paste Intellisense extends the development experience of Twilio Paste by giving Visual Studio Code users additional functionality such as hover.

## About Paste

[Paste](https://paste.twilio.design/introduction/about-paste/) is a design system used to build accessible, cohesive, and high-quality customer experiences at Twilio. Paste supports Product Designers and Engineers with tooling and assets that help them build customer UIs in Figma and React.

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. — Salesforce UX, [Lightning Design System](https://www.lightningdesignsystem.com/design-tokens/)

Tokens are named for their use case, rather than their value. For example `$color-background-error` is named to indicate the appropriate background color for an error, as opposed to `$color-background-red` which is less specific and could be used in a number of ways depending on cultural context and design language. This makes their intended use clear and intentional, and allows us to develop a scalable and consistent visual language.

In Paste, 1 rem unit = 16 pixels.

## Why should we use Twilio Paste Intellisense

Twilio Paste is a great design system, but working with tokens is time consuming. Because before using the token, we need to check the list of tokens, which one suits us. For example, if we want to use a margin like 20px, we need to check what `space` token is [20px (space60 = 20px)](https://paste.twilio.design/tokens/list/#spacings). This is where Twilio Paste Intellisense comes into play. It has two features:

- `Hover preview` - check the value of the token by hovering over it;
- `Autocomplete` - use a dropdown menu with the name and value of the token when we start typing the component's paste properties.

## Installation

**[Install via the Visual Studio Code Marketplace →](https://marketplace.visualstudio.com/items?itemName=TwilioPaste.vs-code-intellisense)**

## Features

### Autocomplete

Intelligent suggestions for twilio paste token attributes.

<img src="https://raw.githubusercontent.com/twilio-labs/paste/main/apps/vs-code-intellisense/assets/completion-example.png" alt="the autocomplete suggestions include the token name with the value in rems and pixels" />

### Hover Preview

View the value and description of the Twilio Paste token property by hovering over it.

<img src="https://raw.githubusercontent.com/twilio-labs/paste/main/apps/vs-code-intellisense/assets/hover-example.png" alt="hover panel over a color token includes the rgb value of the color and a description of where the token should be used" />

### Contributing

Before contributing, please make sure that you read our [Contributing Guidelines](https://github.com/twilio-labs/paste/blob/main/CONTRIBUTING.md) and agree with our [Code of Conduct.](https://github.com/twilio-labs/.github/blob/main/CODE_OF_CONDUCT.md)
