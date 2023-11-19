# Open Graph Image Preview Function

When sharing a link to a component page on the internet, we supply a dynamically created [Open Graph](https://ogp.me/) image to be expanded by the service that the link is being shared on. Services can include Twitter and Slack.

**Example:**

<img width="570" src="https://user-images.githubusercontent.com/368249/182693326-5068e8a4-1e86-432e-81ae-b19e07a53905.png">

## The way it works

```mermaid
sequenceDiagram
    participant U as User
    participant S as Slack
    participant W as Website
    participant N as Netlify Function
    U->>S: I would like to share this URL
    note right of U: https://paste.twilio.design/components/button
    S->>W: Do you have any open graph tags?
    note right of S: https://paste.twilio.design/components/button
    W-->>S: og:image url
    note right of S: <meta property="og:image" content={openGraphServiceUrl} />
    S->>N: Can I have the image pls?
    note right of S: http://paste.twilio.design/.netlify/functions/opengraph/components/button
    loop
        N->>N: Figure out which component and build request params for opengraph page
    end
    note right of N: components/button
    N->>W: Can I have this page pls?
    note right of W: https://paste.twilio.design/opengraph/?path=components/button
    W-->>N: Here you go
    loop Screenshot
        N->>N: Screenshot the page
    end
    N-->>S: The image you requested
    S-->>U: Lovely preview of URL you shared
```

## Local development

We use [Netlify CLI](https://docs.netlify.com/cli/get-started/) to run our websites locally. This allows us to run the website and [Netlify functions](https://docs.netlify.com/functions/overview/) in parallel, and Netlify CLI proxy's both to a single port. This makes it feel like to two things are running on the same domain.

To start, run:

```
yarn start:website
```

Once both the website and netlify functions have started running, both will be available on `localhost:8888`.

Once running, the function can be reached at `localhost:8888/.netlify/functions/opengraph/` for testing.

Whilst running, changes to the function code will restart the function with the new code changes applied. (Hot reloading for Node, using Nodemon) This is all handled for us using the Netlify CLI.

The code that generates the opengraph preview page lives in:

- packages/paste-website/functions/opengraph.ts (the function code)
- packages/paste-website/src/pages/opengraph/index.tsx (the code for the UI that is screenshotted)
- packages/paste-website/stories/Opengraph.stories.tsx (a story to aid in local development for the UI)

## Technology / Stack

Netlify Functions are just AWS Lambdas in disguise. They take an incoming request and you can return a response.

Inside our function we use `@sparticuz/chromium` for grabbing the Chrome Browser binary for AWS Lambdas, and puppeteer to run and control the browser.

Using Puppeteer, we instruct Chrome to visit a url on the website, which renders a dynamic page based on the parameters we give it. We then tell puppeteer to use Chrome to take a screenshot of the page, and that image is then returned as the response of the function.

The page on the website renders a box 800px x 420px. The information is display for the component being requested comes from Airtable, via the JS client.

[Winston](https://github.com/winstonjs/winston) does our logging, so we can observe the function running in real time in the Netlify UI.

[Rollbar](https://docs.rollbar.com/docs/aws-lambda) wraps our function and helps log errors to the Rollbar service so we are alerted if it starts to break.
