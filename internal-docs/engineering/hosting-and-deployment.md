# Hosting and Deployment

- [Hosting and Deployment](#hosting-and-deployment)
  - [Environment variables](#environment-variables)

We use [Netlify](https://netlify.com/) to host and deploy our web site and web apps.

Because we use [NextJS](https://nextjs.org/) we take advantage of the [Essential Next.js Plugin](https://docs.netlify.com/integrations/frameworks/next-js/#essential-next-js-build-plugin).

We have a Netlify project for:

- [Paste Documentation Site](https://app.netlify.com/sites/paste-docs/overview) - [https://paste.twilio.design](https://paste.twilio.design)
- [Paste Remix](https://app.netlify.com/sites/paste-theme-designer/overview) - [https://remix.twilio.design](https://remix.twilio.design)
- [Paste Prototyping Kit](https://app.netlify.com/sites/paste-prototype-kit/overview) -

Netlify is integrated into each of the Github repositories that contain those web properties using the [GitHub integration](https://github.com/apps/netlify).

Due to the GitHub integration we get a preview deployment of the web apps in that repo for each commit in Pull Requests. We also get automatic Domain aliasing when we merge to main.

## Environment variables

The website relies on a number of environment variables to run. A list of these variables and how to grab them locally can be found in the [Developing locally](./developing-locally.md) page.
