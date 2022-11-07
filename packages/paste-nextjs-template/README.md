# Example app with [Paste](https://paste.twilio.design) and Typescript

This example features how to use [Paste](https://paste.twilio.design) as the component library within a Next.js app with typescript.

Next.js and Paste have built-in TypeScript declarations, so we'll get autocompletion for their modules straight away.

We are connecting the Next.js `_app.tsx` with `Paste`'s Theme Provider so the pages can have app-wide styles.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Edit paste-nextjs-template in Codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/twilio-labs/paste/tree/main/packages/paste-nextjs-template)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://codesandbox.io/s/github/twilio-labs/paste/tree/main/packages/paste-nextjs-template)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://codesandbox.io/s/github/twilio-labs/paste/tree/main/packages/paste-nextjs-template)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/twilio-labs/paste/tree/main/packages/paste-nextjs-template my-paste-app
# or
yarn create next-app --example https://github.com/twilio-labs/paste/tree/main/packages/paste-nextjs-template my-paste-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
