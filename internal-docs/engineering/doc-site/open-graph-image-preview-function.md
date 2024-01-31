# Open Graph Image Preview Function

When sharing a link to a component page on the internet, we supply a dynamically created [Open Graph](https://ogp.me/) image to be expanded by the service that the link is being shared on. Services can include Twitter and Slack.

**Example:**

<img width="570" src="https://user-images.githubusercontent.com/368249/182693326-5068e8a4-1e86-432e-81ae-b19e07a53905.png">

## The way it works

We use [`@vercel/og`](https://vercel.com/docs/functions/edge-functions/og-image-generation) to generate the image via an edge function, `/api/component-og-image`.

## Local development

To start, run:

```
yarn start:website
```

Once the website have started running, you can hit the function at `/api/component-og-image`.

## Technology / Stack

The images rendered is 800px x 420px. The information is display for the component being requested comes from Airtable, via the JS client.

[Winston](https://github.com/winstonjs/winston) does our logging, so we can observe the function running in real time in the Vercel UI.
