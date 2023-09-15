# CI/CD

- [CI/CD](#cicd)
  - [Github Actions (pull request)](#github-actions-pull-request)
    - [Build system packages](#build-system-packages)
    - [Type Check](#type-check)
    - [Lint](#lint)
    - [Test React 17](#test-react-17)
    - [Test React 16](#test-react-16)
    - [Prettier checks](#prettier-checks)
    - [Categorize the PR using labels](#categorize-the-pr-using-labels)
    - [Danger checks](#danger-checks)
    - [Check package sizes](#check-package-sizes)
    - [CodeSandbox](#codesandbox)
    - [Website test(1/2/3)](#website-test123)
    - [Percy](#percy)
    - [Component Visual regression tests](#component-visual-regression-tests)
    - [Netlify](#netlify)
    - [Kodiak hq](#kodiak-hq)
    - [remove-test-label](#remove-test-label)
  - [Github Actions (main branch)](#github-actions-main-branch)
    - [Version or Publish](#version-or-publish)

CI/CD are automated tools that we use to deploy Paste packages. We deploy all Paste packages, the documentation site, the theme designer, NextJS template in this manner.

**Continuous Integration (CI)** processes run our builds and tests on all pull requests.

**Continuous Delivery/Deployment (CD)** process publishes the Paste packages. So once a PR is merged to main, that code gets deployed to npm.

All of our CI/CD tools run through either [Github Actions](https://docs.github.com/en/actions) or [Github Integrations](https://docs.github.com/en/get-started/customizing-your-github-workflow/exploring-integrations/about-integrations).

## Github Actions (pull request)

We use Github actions to run all of our CI processes. This allows us to run checks, like tests and linting, on every pull request or push to the repository. We currently run the following jobs on every pull request and push to a pull request:

### Build system packages

This job installs and builds a clean version of the monorepo and runs the full package build script `yarn build`, to build all our npm packages that we distribute to our customers.

The assets are then cached, ready to be shared with subsequent jobs.

### Type Check

This job downloads the build cache of the monorepo, and then runs the Typescript type checker.

### Lint

This job downloads the build cache of the monorepo, and then runs ESLint.

### Test React 17

This job downloads the build cache of the monorepo, and then runs our Jest test suite using React 17.

### Test React 16

This job downloads the build cache of the monorepo, and then runs our Jest test suite using React 16.

### Prettier checks

This job downloads the build cache of the monorepo, and then runs Prettier.

### Categorize the PR using labels

Based on the files changed, [using this configuration](https://github.com/twilio-labs/paste/blob/main/.github/labeler.yml), we label each PR surrounding what areas of the product it touches.

### Danger checks

[DangerJS](https://danger.systems/js/) allows use to run a number of checks on our codebase, based on the contents of a PR change list. The checks can be [found here](https://github.com/twilio-labs/paste/tree/main/.danger)

You can run Danger checks from a PR locally with the following command, replacing `<PR NUMBER>`:

```sh
yarn danger pr https://github.com/twilio-labs/paste/pull/<PR NUMBER>
```

Note: This command is heavily rate limited, so you may only get 6 attempts every few minutes.

### Check package sizes

The package size job runs on every pull request and push. It uses a [forked version of compressed-size-action](https://github.com/zahnster/compressed-size-action) Github integration. The job installs and builds all package javascript bundles, and then compares their file sizes. A comment with package size output is then published to the pull request. This comment is updated for each push.

### CodeSandbox

Each pull request gets its own CodeSandbox environment through the CodeSandbox Github integration. On each push the environment is updated with the working versions of Paste packages. This way we can actually test new components or changes to components in a production environment. Each environment gets a unique CodeSandbox URL which is left in a comment in the pull request.

### Website test(1/2/3)

Website tests is a test runner for Cypress and Percy, using the [Cypress Github Integration](https://docs.cypress.io/guides/dashboard/github-integration.html#Install-the-Cypress-GitHub-app). It will first wait for Netlify to finish deploying the preview of the website, and then run cypress against that url.

It will parallelize Cypress test suites across 3 boxes.

After the tests have run, the Cypress integration reports back the results as a comment on the pull request and as a required check.

### Percy

Percy is used for visual regression of the docs website. We use Cypress as a means to fire Percy snapshots for comparison.

This does not run by default.

To enable a website visual regression test on your PR, add the `🕵🏻‍♀️ Run website visual regression` label. This will run the Cypress tests with an environment variable set that instructs cypress to enable Percy.

### Component Visual regression tests

We use a service called [Chromatic](http://chromatic.com/) for our visual regression testing.

Chromatic looks at our Storybook stories and takes a screenshot of each one. It then compares that screenshot to a baseline set of screenshots. This gives us a good indication of a component style changing or being broken. Any new or changes to a screenshot must be accepted to the baseline before merging to main.

We also use Chromatic to review component styles with the design team. Once the stories are built they can access the build in Chromatic and leave comments if there are any changes. All new or changed component styles need to be reviewed and approved by the design team.

### Netlify

We use Netlify to host and continuously deploy the Paste documentation site as well as the Paste Remix site. Netlify deploys both the production versions of each site, as well as preview versions for each pull request. For pull requests, every push will build a new preview version of each site. The preview URLs are posted in a comment in the pull request. These preview URLs can be shared with the team if content approval is needed.

The production versions of each site are only built when a pull request is merged into the main branch.

### Kodiak hq

Kodiak is a tool that we can use to manage the merge queue. It runs off of labels applied to the PR.

By default, the `Do not merge` label is applied which blocks Kodiak from merging your PR.

Once you are ready, and have all your reviews complete, you can remove the `Do not merge` label, and apply the `🚀 Merge it` label to instruct Kodiak to take over merge responsibilities.

### remove-test-label

After any change to the PR, this action will remove the `🕵🏻‍♀️ Run website visual regression` label so that you can rerun website VRT if you wish to.

## Github Actions (main branch)

When a pull request is merged to the main branch an additional Github action is run to publish the new package versions to NPM. The Netlify action also runs to deploy the production versions of the Paste documentation site and the Paste Remix site. The Cypress and VRT actions are also run again to verify the production version of the Paste documentation site is working properly.

### Version or Publish

This job installs and builds a clean version of the monorepo, and then uses [changesets](https://github.com/atlassian/changesets) to decide if we're versioning or publishing. If we are versioning it will create a [Versioned Packages](https://github.com/twilio-labs/paste/pull/1183) pull request. Otherwise, if there is nothing left to version, if will publish any unpublished packages.
