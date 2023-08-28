<h1 align="center">Paste</h1>
<p align="center">Paste is a design system used to build accessible, consistent, and high quality customer experiences at Twilio. Paste is open source and contributions are welcome.</p>
<p align="center">
<a href="https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md"><img alt="Code of Conduct" src="https://img.shields.io/badge/%F0%9F%92%96-Code%20of%20Conduct-blueviolet.svg?style=flat-square"></a>
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
</p>
<hr>

## Usage

For usage guidelines, please see our [documentation website](https://paste.twilio.design).

## Developing on Paste

### Getting started

Clone the repo then run the following commands from within the repo's folder:

```
yarn build # builds all of Paste
```

Then you can run a local storybook instance with:

```
yarn start:storybook
```

For more commands, please reference the [package.json file](https://github.com/twilio-labs/paste/blob/main/package.json).

### Contributing

Before contributing, please make sure that you read our [Contributing Guidelines](https://github.com/twilio-labs/paste/blob/main/CONTRIBUTING.md) and agree with our [Code of Conduct.](https://github.com/twilio-labs/.github/blob/main/CODE_OF_CONDUCT.md)

### Changesets

Each change to a package must come with a [changeset](https://github.com/atlassian/changesets). You should have an individual changeset for each package you have touched.

To create a changeset you can run:

```
yarn changeset
```

Follow the prompts shown to you in your terminal.

Instructions on how to use the cli tool can be found [here](https://github.com/atlassian/changesets/blob/master/packages/cli/README.md), but all you should need to do is generate a changeset and commit it with your Pull Request.

### Hosted Storybook

[Storybook](https://main--5e53448165911c0022e68c74.chromatic.com)

We use Chromatic to host the Storybook instance.

## Dependencies

Paste is a monorepo and has some specific requirements in how it handles dependencies.

### Dev Deps

Each package can have dev dep requirements, such as typescript. As this is a monorepo using yarn workspaces there is no requirement to list these as package dev deps. All dev deps are hoisted to the monorepo root. Declare them at the root package.json file.

### Peer Deps

A special note about peer deps: Peer dependencies should be hoisted up the dependency tree. If `package-a` lists `package-b` as a peer dep, and `package-b` lists `package-c` as a peer dep, `package-c` must also be listed as a peer dep for `package-a`. All the way down the tree.

A real example might be a `Button`. `Button` may only have a peer dependency on `Box`, but `Box` has a peer dependency on `Theme`, `Design-Tokens`, and `Style-Props`. These child peer deps need to be hoisted to the `Button` package. As such `Button` deps should look like:

```
{
  "name": "button",
  "peerDependencies": {
    "@twilio-paste/box": "^0.0.1",
    "@twilio-paste/theme": "^0.0.1",
    "@twilio-paste/design-tokens": "^0.0.1",
    "@twilio-paste/style-props": "^0.0.1"
  }
}
```

### Internal Deps

When a package has a peer dependency on another internal package in the mono repo, it must also be listed as a dev dependency for compilation.

#### Example:

```
{
  "name": "button",
  "peerDependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
    "@twilio-paste/box": "^0.0.1",
    "@twilio-paste/theme": "^0.0.1",
    "@twilio-paste/design-tokens": "^0.0.1",
    "@twilio-paste/style-props": "^0.0.1"
  },
  "devDependencies": {
    "@twilio-paste/box": "^0.0.1",
    "@twilio-paste/theme": "^0.0.1",
    "@twilio-paste/design-tokens": "^0.0.1",
    "@twilio-paste/style-props": "^0.0.1"
  }
}
```

### Checking and fixing peer deps

To ensure peer dependencies are listed correctly, a check is run on the monorepo on every build.

```bash
yarn packages:check
```

If missing deps are detected you will be informed of which packages are missing what deps.

To fix missing peer deps, run the fix command.

```bash
yarn packages:fix
```

## Releasing

Releasing Paste happens via CI/CD using [Changesets](https://github.com/atlassian/changesets).

## License

[MIT](/LICENSE)
