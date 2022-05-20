# Applitools

- [Applitools](#applitools)
  - [Background](#background)
  - [Getting Started](#getting-started)
    - [Finding your personal Applitools API key](#finding-your-personal-applitools-api-key)
    - [Add local environment variables](#add-local-environment-variables)
  - [Run locally](#run-locally)
  - [CI workflow](#ci-workflow)
  - [Resources](#resources)
    - [Current configuration](#current-configuration)
    - [Definitions](#definitions)
    - [Helpful links](#helpful-links)

## Background

We recently added starter infrastructure for running visual regression tests (e.g. VRT) on the [Paste documentation website](https://paste.twilio.design/) using [Applitools](https://applitools.com/).

We are running these VRT in our current website tests workflow, using [Cypress.io](https://docs.cypress.io/ 'Learn more and view Cypress.io documentation') and [`@applitools/eyes-cypress`](https://www.npmjs.com/package/@applitools/eyes-cypress 'Learn more and view applitools eyes for Cypress.io documentation').

## Getting Started

Ensure you have access to Applitools and that you are added to the `Paste` team. If you do not have access, please request from one of the team leads.

### Finding your personal Applitools API key

1. Log in to your Applitools account
2. Locate the `User` menu in the top right corner of the window
3. Click the menu to open, and select the option `My API Key`
4. Copy the key and move on to adding environment variables.

![menu location](https://user-images.githubusercontent.com/18120906/153527942-75ffb375-d7bc-4b64-b877-07ac6c232dfc.png)

![location of api key in menu](https://user-images.githubusercontent.com/18120906/153527955-ee57e6a9-d3b2-4527-b125-fb20b82233d0.png)

### Add local environment variables

Add the following environment variables to your `.env` file at the root of the monorepo.

```bash
APPLITOOLS_API_KEY=__PERSONAL_API_KEY__
USE_CYPRESS_EYES=false
APPLITOOLS_SERVER_URL=https://twilioeyesapi.applitools.com
APPLITOOLS_BATCH_NAME=local-batch
```

| ENV variable            | Default                                | Description                                                                                 |
| ----------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| `APPLITOOLS_API_KEY`    | {{PERSONAL_API_KEY}}                   | This is your personal api key, which you will use only if you need to run the VRT locally.  |
| `USE_CYPRESS_EYES`      | `false`                                | This controls whether or not the VRT will run. To test locally, change this value to `true` |
| `APPLITOOLS_SERVER_URL` | `https://twilioeyesapi.applitools.com` | This is our company's Applitools. You should not need to change this value.                 |
| `APPLITOOLS_BATCH_NAME` | `local-batch`                          | This provides a batch name for local runs; you should not need to change this value         |

## Run locally

Run locally
Ensure that you have all the above required environment variables.

The Applitools VRT check runs as a part of our cypress e2e tests.

If `USE_CYPRESS_EYES` is `false`, Applitools will not check for visual regressions. The checks currently run programmatically, meaning the tool will only check for regressions if we explicitly instruct the test to do so.

1. In the root `.env` file, update the value of `USE_CYPRESS_EYES` to be `true`
2. Start Cypress.io by running `yarn test:website-gui`
3. Run selected tests by clicking on their names in the GUI

> 👉 **Tip**: In order for changes to the environment variables to take effect, you must re-start cypress. 👈

## CI workflow

Below is a flow chart illustrating possible possible results of the VRT run and actions that should be taken.

![applitools_workflow](https://user-images.githubusercontent.com/18120906/153528014-ed80ed14-fda4-4843-bcfe-890072fbe539.png)

## Resources

### Current configuration

This section is _coming soon_.

### Definitions

| Term                      | Description                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Baseline                  | As defined by Applitools, "a Baseline is a set of images that represent the expected result of a specific test that runs on a specific application on a specific environment." [Learn more about baselines](https://help.applitools.com/hc/en-us/articles/360007188691-What-is-a-baseline-and-how-is-a-baseline-created)</a> |
| Regression                | Introduction of unintended behavior from a change in the source code or configuration.                                                                                                                                                                                                                                       |
| Visual regression testing | Comparison of previous and current visual representation of a site or app in a given state; essentially we are evaluating "what users will see" after we implement changes to our source code. (e.g. VRT)                                                                                                                    |

### Helpful links

- applitools docs
- cypress docs
- gh action info
