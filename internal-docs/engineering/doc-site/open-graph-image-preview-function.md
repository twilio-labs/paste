# Open Graph Image Preview Function

When sharing a link to a component page on the internet, we supply a dynamically created [Open Graph](https://ogp.me/) image to be expanded by the service that the link is being shared on. Services can include Twitter and Slack.

**Example:**

<img width="570" alt="image" src="https://user-images.githubusercontent.com/368249/182693326-5068e8a4-1e86-432e-81ae-b19e07a53905.png">

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
