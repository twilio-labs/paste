<h1 align="center">
  <img height="320px" src="https://raw.githubusercontent.com/twilio-labs/paste/main/apps/vs-code-intellisense/assets/favicon.png" alt="" />
  <br/>
  Twilio Paste Intellisense
</h1>

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

**[Install via the Visual Studio Code Marketplace →](https://marketplace.visualstudio.com/items?itemName=Gapur.twilio-paste-intellisense)**

## Features

### Autocomplete

Intelligent suggestions for twilio paste token attributes.

<img src="https://raw.githubusercontent.com/twilio-labs/paste/main/apps/vs-code-intellisense/assets/completion-example.png" alt="the autocomplete suggestions include the token name with the value in rems and pixels" />

### Hover Preview

View the value and description of the Twilio Paste token property by hovering over it.

<img src="https://raw.githubusercontent.com/twilio-labs/paste/main/apps/vs-code-intellisense/assets/hover-example.png" alt="hover panel over a color token includes the rgb value of the color and a description of where the token should be used" />

## How to contribute?

1. Fork this repo
2. Clone your fork
3. Code 🤓
4. Test your changes
5. Submit a PR!

## Publishing Extensions

We will publish the vscode extension to the [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode) so others can find, download, and use your extension.

First, We need to install the [vsce](https://github.com/microsoft/vscode-vsce) command-line tool for packaging and publishing  VS Code extensions. Let’s install it:

```sh
npm install -g vsce
```

### Security Concerns

`vsce` will not publish extensions that contain user-provided SVG images.

The publishing tool checks the following constraints:
- The icon provided in package.json may not be an SVG.
- The badges provided in the package.json may not be SVGs unless they are from [trusted badge providers](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).
- Image URLs in README.md and CHANGELOG.md need to resolve to https URLs.
- Images in README.md and CHANGELOG.md may not be SVGs unless they are from [trusted badge providers](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).

### Get a Personal Access Token

Visual Studio Code uses `Azure DevOps` for its Marketplace services. This means that authentication, hosting, and management of extensions are provided through Azure DevOps. Therefore we need to create a new account in [Azure DevOps](https://azure.microsoft.com/en-gb/services/devops/).

`vsce` can only publish extensions using Personal Access Tokens. First we need to [create your own organization](https://docs.microsoft.com/en-gb/azure/devops/organizations/accounts/create-organization?view=azure-devops) in Azure DevOps. I will create like `twilio-labs`. 

Next, from your organization's home page (for example: https://dev.azure.com/twilio-labs), open the User settings dropdown menu next to your profile image and select Personal access tokens:

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/organization-page.png" alt="Personal Access Token" />

On the `Personal Access Tokens` page, select `New Token` to create a new Personal Access Token and set the following details:
- Access Token Name
- Set Organization to All accessible organizations
- Optionally extend its expiration date
- Set Scopes to `Custom defined` and choose the `Marketplace > Manage` scope

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/create-personal-access-token.png" alt="Create Personal Access Token" />

Select `Create` and you'll be presented with your newly created Personal Access Token. Copy it, you'll need it to create a publisher.

### Create a publisher

A publisher is an identity who can publish extensions to the VS Code Marketplace. Each extension must include the publisher's name in its package.json [file](https://code.visualstudio.com/api/references/extension-manifest).

Now We need to create a new publisher through the Visual Studio Marketplace publisher [management page](https://marketplace.visualstudio.com/manage).

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/create-a-publisher.png" alt="Create a publisher" />

Last, we can test our publisher's personal access token by the following command:

```sh
vsce login <publisher name>
```

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/vsce-login-done.png" alt="vsce login" />

### Publish an extension

Now, we can publish an extension using `vsce` with the `publish` command:

```sh
vsce publish
```

We can auto-increment an extension's version number when we publish by specifying the [SemVer](https://semver.org) compatible number to increment: `major`, `minor`, or `patch`.

For example, if you want to update an extension's version from 1.0.0 to 1.1.0, you would specify `minor`:

```sh
vsce publish minor
```

Great! This will modify the extension's `package.json` version attribute before publishing the extension.

Also we can just specify the version:

```sh
vsce publish 2.0.1
```
