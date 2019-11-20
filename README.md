# Paste - Twilio Design System

Component playground: TODO link and host

## Getting started

```
yarn
yarn bootstrap
yarn build
yarn start:all
```

Build things 🎉

## Contributing

Before contributing, please make sure that you read our [Contributing Guidelines](https://github.com/twilio-labs/paste/blob/master/CONTRIBUTING.md) and agree with our [Code of Conduct.](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md)

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

## Hosting Storybook

We use GitHub pages to host the Storybook instance. We use the `gh-pages` branch and the ![`gh-pages` package](https://www.npmjs.com/package/gh-pages) to manage this.

### `gh-pages` branch

The `gh-pages` branch ignores _everything_ other than the built storybook instance in the root of the directory. The package handles everything.

### https://twilio-labs.github.io/paste

#### Updating

To update this we simply run the `gh-pages` package from yarn by using the `release:storybook` task.

```bash
yarn release:storybook
```

This task will build the storybook, switch to the `gh-pages` branch, commit the changes from the storybook build and push to GitHub.

## License

[MIT](/LICENSE)
