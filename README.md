# Paste - Twilio Design System

Paste is a design system used to build accessible, consistent, and high quality customer experiences at Twilio. Paste is open source and contributions are welcome.

## Getting started

```
yarn
yarn bootstrap
yarn build
yarn start:all
```

Build things 🎉

## Contributing

Before contributing, please make sure that you read our [Contributing Guidelines](https://github.com/twilio-labs/paste/blob/main/CONTRIBUTING.md) and agree with our [Code of Conduct.](https://github.com/twilio-labs/.github/blob/main/CODE_OF_CONDUCT.md)

## Linking Local Paste to an Application
Sometimes you need to make changes and test them locally. Figuring out all the requirements to do this can often be challenging. To solve for this, we've set-up a small guide and some scripts to make it easier for you.

### How to link Paste:
- go to your application and follow the instructions to install paste: https://paste.twilio.design/getting-started/engineering
- go to the paste application and run:
- `yarn link-local`
- copy the output from your terminal and paste it into the application you want to link with paste

### How to unlink Paste
- go the paste application and run:
- `yarn unlink-local`
- copy the output from your terminal and paste it into the application you want to unlink from paste

## Command List

| Command                | Description                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| yarn bootstrap         | Symlinks all the local packages together so you can import package names and work with them locally.                     |
| yarn start             | Builds and starts storybook and the design tokens in dev mode                                                            |
| yarn start:all         | Builds and starts storybook,the design tokens and the website in dev mode                                                |
| yarn start:storybook   | Builds and starts storybook, the dev playground                                                                          |
| yarn start:tokens      | Builds and starts design tokens in dev mode. Loads a browsersync server and live reloads token changed in the token page |
| yarn clean             | Cleans the directories of node modules and built files                                                                   |
| yarn prettier          | Checks for un-prettier'd files in the repo. For pre-push hook and CI.                                                    |
| yarn prettier-clean    | Automatically fixes all prettier issues in the repo.                                                                     |
| yarn test              | Runs all the Jest tests, including snapshot testing.                                                                     |
| yarn test:coverage     | Similar to `yarn test`, but with coverage reporting as specified in the root `package.json`                              |
| yarn lint              | Lints the codebase and spits out any errors.                                                                             |
| yarn type-check        | Runs TS type-checker against the codebase and spits out any errors. Useful since we use babel at runtime with storybook. |
| yarn build:storybook   | Builds Storybook into static assets and places them in the /docs folder. For Github Pages hosting.                       |
| yarn build:tokens      | Builds the design tokens package under paste-tokens/                                                                     |
| yarn build:dev         | Builds the compiled JS into `/dist` in dev mode                                                                          |
| yarn build             | Builds the compiled JS into `/dist`                                                                                      |
| yarn pre-push          | A series of commands that are run as a pre-commit hook.                                                                  |
| yarn release           | Releases the main library to NPM via lerna                                                                               |
| yarn release:storybook | Releases the latest storybook to github pages                                                                            |
| yarn link-local        | Links local build                                                                                                        |
| yarn unlink-local      | Un-links local build                                                                                                     |

## Hosting Storybook

We use GitHub pages to host the Storybook instance. We use the `gh-pages` branch and the [`gh-pages` package](https://www.npmjs.com/package/gh-pages) to manage this.

### `gh-pages` branch

The `gh-pages` branch ignores _everything_ other than the built storybook instance in the root of the directory. The package handles everything.

### https://twilio-labs.github.io/paste

#### Updating

🚨🚨🚨 This is now done in our CI/CD process 🚨🚨🚨

To update this we simply run the `gh-pages` package from yarn by using the `release:storybook` task.

```bash
yarn release:storybook
```

This task will build the storybook, switch to the `gh-pages` branch, commit the changes from the storybook build and push to GitHub.

## Dependencies

Paste is a monorepo and has some specific requirements in how it handles dependencies.

### Dev Deps

Each package can have dev dep requirements, such as typescript and rollup. As this is a monorepo using yarn workspaces there is no requirement to list these as package dev deps. All dev deps are hoisted to the monorepo root. Declare them at the root package.json file.

### Peer Deps

A special note about peer deps: Peer dependencies should be hoised up the dependency tree. If `package-a` lists `package-b` as a peer dep, and `package-b` lists `package-c` as a peer dep, `package-c` must also be listed as a peer dep for `package-a`. All the way down the tree.

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

## License

[MIT](/LICENSE)
