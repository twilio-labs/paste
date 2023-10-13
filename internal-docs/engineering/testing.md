# Testing

- [Testing](#testing)
  - [Unit / Jest Testing](#unit--jest-testing)
    - [Typical things that you might test for](#typical-things-that-you-might-test-for)
    - [How to structure test files](#how-to-structure-test-files)
    - [Tests structure for component packages](#tests-structure-for-component-packages)
  - [Accessibility testing](#accessibility-testing)
  - [End-to-end testing](#end-to-end-testing)
  - [Visual Regression Testing (VRT)](#visual-regression-testing-vrt)
  - [Linting](#linting)
    - [BiomeJS and PrettierJS](#biomejs-and-prettierjs)
    - [Commit lint](#commit-lint)
  - [Running tests/checks](#running-testschecks)
    - [Locally](#locally)

Since a broken change to a Paste package can erode our customer trust, we take testing & linting very seriously. Our codebase runs a series of scans against changes in every PR to make sure we can ship with confidence.

## Unit / Jest Testing

We break our code down into small reusable pieces. We do this so that we can test logic in our code in isolation of the overall application/module/package. This is called a unit test. Writing these tests can help us find errors before our users do by:

- Making sure edge cases work correctly.
- Catching errors while making changes to code that shouldn’t affect the underlying logic.
- Expecting a specific behavior from our code so that it doesn’t end up getting changed in the future.
- Catching functionality we don’t want to allow.

To achieve all of the above, we use [Jest](https://jestjs.io/) and [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/). Jest is the most popular React testing framework, and React-Testing-Library makes writing Jest tests easier. We do not currently have code coverage requirements (i.e.: how much of our code must be tested to ship), but are currently sitting at around 85%. We strive to test all the basic functionality and edge cases.

### Typical things that you might test for

- Ensure HTML or ARIA attributes are applied correctly
- Ensure HTML or ARIA attributes are updated correctly based on interaction
- Ensure user events are correctly implemented:
  - Does clicking expand?
  - Does pressing escape close?

### How to structure test files

In general we want tests to be as close to the source code it’s testing as possible. With that in mind we create a `__tests__` folder as a sibling to the file(s) you are writing tests for. We recommend one spec file per source file. As an example:

- **tests**
  - ComponentA.spec.tsx
  - ComponentB.spec.tsx
  - Index.spec.tsx
- ComponentA.tsx
- ComponentB.tsx
- index.tsx

### Tests structure for component packages

For component packages, because the source files are limited and confined to a `src` directory, test files are put into a `__tests__` folder in the root of a package, as a sibling to the package.json file. All previous recommendations in structuring files also apply.

## Accessibility testing

To help us ensure the basics are covered with regards to accessibility we run each component through an accessibility checker called [axe-core](https://github.com/dequelabs/axe-core) via a playwright plugin called [playwright-axe](https://www.npmjs.com/package/axe-playwright). Playwright Axe is automatically run against each story we write in Storybook, via [Storybook Test Runner](https://storybook.js.org/addons/@storybook/test-runner).

If this test fails on CI, you can debug the issues by checking the output of the Accessibility Addon (Keyboard shortcut D) after running `yarn start:storybook`. Alternatively, you can use `yarn start:test:storybook` to run the exact step CI runs.

Note: This does not guarantee accessibility of our components. This merely ensures we cover the basics.

**There is no substitute for manual testing with regards to accessibility.**

## End-to-end testing

End-to-end tests (e-2-e) are a form of integration test. It helps us ensure a user flow works correctly. E-2-e tests are typically run on a full implementation that a user might interact with. For example: The built Paste doc site, running in a browser, using the latest built versions of our components.

A flow that you might test should represent something a customer might do within your software. That task is usually fundamental to being able to use your software.

- Expand side navigation and click the link and expect the page to load.
- Fill out a form with information, submit the form and see a confirmation toast.

To run our e-2-e tests we use [Cypress](https://www.cypress.io/).

## Visual Regression Testing (VRT)

Visual Regression Testing (VRT) is a form of testing that covers the visual appearance of our product. At its core it is the process of taking a screenshot of your current changes and comparing them to baseline images on the main branch.

VRT is an essential part of our testing process due to the nature of CSS and Design Systems. Often well architected systems use a mixture of inheritance, cascade and composition to achieve system wide visual cohesion. A family of UI controls that look like they belong together. It is intentional that similar UI controls share visual design properties, and changes to those properties should ripple through the system to maintain that visual cohesion.

A downside to that architecture is that a small change in one part of the system can cascade to unintended parts of the system, especially as the system grows over time. By using VRT we can make sure that the changes we make have the desired effect across the entire system as a whole, and not just on the component we are working on at the time.

VRT is run on every commit, across the entire system so we never miss a visual change. To access it, go to the

We use [Chromatic](https://www.chromatic.com/) to run our VRT, which uses [our storybook stories](https://twilio-labs.github.io/paste/?path=/story/components-alert--all-variant) to create the snapshots of each component. We try to have a story for each component, in every variant and every state, to ensure we capture every possible change.

We use [Percy](https://percy.io/) to run VRT on the docs site, which is powered by Cypress tests. Tests are split across multiple test suites so that they can run in parallel.

## Linting

Linting is the process of performing [static code analysis](https://en.wikipedia.org/wiki/Static_program_analysis) to ensure certain criteria and conditions are met with regards to how you have written your code. We use the very popular [ESLint](https://eslint.org/), which can be configured to perform a custom set of checks based on a config file. Our [config file](https://github.com/twilio-labs/paste/blob/main/.eslintrc.js) lives in the root of our monorepo.

Linting should be performed:

- In your IDE as you code. Visual Studio Code supports this out of the box (manual setup)
- Automatically in your Pull Requests, on every commit
- Automatically when a PR is merged into the `main` branch

If your code fails to meet the ESLint rules, you will “break the build”. This will prevent you from merging a PR or publishing new packages on `main`.

### BiomeJS and PrettierJS

Manually formatting code can be tiresome so we use [BiomeJS](https://biomejs.dev/) and [PrettierJS](https://prettier.io/) (Prettier) to do the leg work for you. They are both an opinionated code formatter which is configured to respect our ESLint rules.

It is configured to format your code when you commit it to git automatically. If using an IDE or Code Editor it is also recommended, if your IDE or editor supports it, to set it to “format on save”. The setting is often found in the user settings of your editor, and may require a plugin or extension.

### Commit lint

We also have linting rules for your commit messages which are enforced using [commitlint](https://commitlint.js.org/#/), to make sure commit messages are consistent and meaningful. We follow [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines when writing commit messages.

## Running tests/checks

All the above tests are run on every commit in every PR and need to pass in order for a PR to be merged back into our main branch. We run a wide range of tests in multiple areas to make sure we ship safe code, with confidence.

Since **trust** is Twilio’s number one value we rely on these tests to ensure all our code is of high quality at all times.

### Locally

To run Jest unit tests and accessibility tests on your machine, run the following terminal command:

```bash
yarn test
```

To lint your code you can run:

```bash
yarn lint
```

To running Prettier on your code you can run:

```bash
yarn prettier
```

To use Prettier to fix your code you can run:

```bash
yarn prettier-clean
```

To run our end-to-end tests you must first make sure you have built the website and run:

```bash
yarn build:website && yarn test:website
```
