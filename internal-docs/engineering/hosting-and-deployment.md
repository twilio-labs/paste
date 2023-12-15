# Hosting and Deployment

- [Hosting and Deployment](#hosting-and-deployment)
  - [Environment variables](#environment-variables)

We use [Vercel](https://vercel.com/) to host and deploy our web site and web apps.


- [Paste Documentation Site](https://vercel.com/twilio/paste-docs) - [https://paste.twilio.design](https://paste.twilio.design)
- [Paste Remix](https://vercel.com/twilio/paste-remix) - [https://remix.twilio.design](https://remix.twilio.design)
- [Paste Prototyping Kit](https://vercel.com/twilio/paste-prototype-kit) -

Vercel is integrated into each of the Github repositories that contain those web properties using the [GitHub integration](https://github.com/apps/vercel).

Due to the GitHub integration we get a preview deployment of the web apps in that repo for each commit in Pull Requests. We also get automatic Domain aliasing when we merge to main.

## Environment variables

The website relies on a number of environment variables to run. A list of these variables and how to grab them locally can be found in the [Developing locally](./developing-locally.md) page.
