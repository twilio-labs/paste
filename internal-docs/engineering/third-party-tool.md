# Third party tools

- [Third party tools](#third-party-tools)
  - [Chromatic](#chromatic)
  - [Percy](#percy)
  - [Cypress](#cypress)
  - [Vercel](#vercel)

We use various third party tools in order to successfully work on and deploy Paste. Each tool is used for a specific purpose, but all help make Paste a better product.

## Chromatic

Chromatic is a visual regression testing tool with a few added features. At its core, Chromatic creates visual snapshots of each Storybook story and compares them against a baseline snapshots on the main branch. Any changes are marked as regressions and will need to be reviewed/approved in order to merge the PR.

Chromatic also provides feedback via UI review. The UI review is a designer centric feedback mechanism, which we use to give designers approval responsibility to ensure design quality. Any new components or components with updated styles should be reviewed/approved by a designer before merging to the main branch

## Percy

Percy is another VRT tool, but this time it is better suited to full page tests. We can use this in conjunction with Cypress, to create visual regression tests for our hosted web properties.

## Cypress

For end to end testing, we use Cypress. Cypress makes setting up, writing, running and debugging tests easy. With Cypress, we can write and debug tests locally using the browser. We can also run Cypress via the command line as part of our CI/CD integration. Each test will need to pass before merging a PR. Currently, end to end testing is only used on the documentation site, but that may change in the future.

## Vercel

Vercel is one of the industry leaders in static site hosting. It comes with Github integration out of the box, which allows us to continuously deploy both the documentation site and theme designer site. For each site, Vercel provides a preview site for every PR. The preview sites allow us to verify any changes we’ve made to either site. We can also use these preview links to send around for reviews.
