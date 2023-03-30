# Environment Variables

Full list of Environment variables and where they are needed.

| Variable                           | Description                                                           | Local | GH Secrets | Netlify paste | Netlify remix |
| ---------------------------------- | --------------------------------------------------------------------- | ----- | ---------- | ------------- | ------------- |
| AIRTABLE_APIKEY                    | Airtable API key for Next                                             | ✅    |            | ✅            |               |
| AIRTABLE_BASEID                    | Airtable Base to look up data                                         | ✅    |            | ✅            |               |
| CHROMA_APP_CODE                    | Chromatic app key                                                     | ✅    | ✅         |               |               |
| DATADOG_API_KEY                    | Datadog API key for GH actions metric tracking                        |       | ✅         |               |               |
| DATADOG_APPLICATION_ID             | Datadog application ID for remix RUM tracking                         | ✅    |            |               | ✅            |
| DATADOG_CLIENT_TOKEN               | Datadog client token for remix RUM tracking                           | ✅    |            |               | ✅            |
| NEXT_PUBLIC_DATADOG_APPLICATION_ID | Datadog application ID for docsite RUM tracking                       | ✅    |            | ✅            |               |
| NEXT_PUBLIC_DATADOG_CLIENT_TOKEN   | Datadog client token for docsite RUM tracking                         | ✅    |            | ✅            |               |
| NEXT_PUBLIC_DOCSEARCHV3_APIKEY     | Algolia API key                                                       | ✅    |            | ✅            |               |
| NEXT_PUBLIC_DOCSEARCHV3_APPID      | Algolia app ID                                                        | ✅    |            | ✅            |               |
| NEXT_PUBLIC_DOCSEARCHV3_INDEXNAME  | Algolia Index name                                                    | ✅    |            | ✅            |               |
| NEXT_PUBLIC_ENVIRONMENT_CONTEXT    | Informs Next which deployment environment its in                      | ✅    |            | ✅            |               |
| NETLIFY_SITE_ID                    | Docsite site ID for Netlify deployment wait in GH actions             |       | ✅         |               |               |
| NETLIFY_TOKEN                      | Docsite token for Netlify deployment wait in GH actions               |       | ✅         |               |               |
| NPM_TOKEN                          | NPM package publish token                                             |       | ✅         |               |               |
| SLACK_BOT_USER_OAUTH_ACCESS_TOKEN  | Slack app oath access token for release posting                       |       | ✅         |               |               |
| SLACK_RELEASE_CHANNEL_ID           | Slack app channel id for release posting in                           |       | ✅         |               |               |
| STORYBOOK_GITHUB_SHA               | Github SHA used to associate perf tracking with commit IDs            |       |            |               |               |
| CYPRESS_CACHE_FOLDER               | Tells Cypress override where it stores its binary so it can be cached |       |            | ✅            |               |
| CYPRESS_RECORD_KEY                 | Cypress record key so we can record our cypress runs                  | ✅    | ✅         |               |               |
| PERCY_TOKEN                        | Percy.io token                                                        | ✅    | ✅         |               |               |
| USE_CYPRESS_VRT                    | Key to enable the cypress vrt integration                             | ✅    |            |               |               |
| NX_CLOUD_ACCESS_TOKEN             | Token to enable nx cloud cache for builds                             | ✅    | ✅         | ✅            | ✅            |
