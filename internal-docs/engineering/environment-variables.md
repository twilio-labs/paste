# Environment Variables

Full list of Environment variables and where they are needed.

| Variable                             | Description                                                           | Local | GH Secrets | Vercel paste | Vercel remix |
| ------------------------------------ | --------------------------------------------------------------------- | ----- | ---------- | ------------- | ------------- |
| AIRTABLE_APIKEY                      | Airtable API key for Next                                             | ✅    |            | ✅            |               |
| AIRTABLE_BASEID                      | Airtable Base to look up data                                         | ✅    |            | ✅            |               |
| CHROMA_APP_CODE                      | Chromatic app key                                                     | ✅    | ✅         |               |               |
| DATADOG_API_KEY                      | Datadog API key for GH actions metric tracking                        |       | ✅         |               |               |
| DATADOG_APPLICATION_ID               | Datadog application ID for remix RUM tracking                         | ✅    |            |               | ✅            |
| DATADOG_CLIENT_TOKEN                 | Datadog client token for remix RUM tracking                           | ✅    |            |               | ✅            |
| NEXT_PUBLIC_DATADOG_APPLICATION_ID   | Datadog application ID for docsite RUM tracking                       | ✅    |            | ✅            |               |
| NEXT_PUBLIC_DATADOG_CLIENT_TOKEN     | Datadog client token for docsite RUM tracking                         | ✅    |            | ✅            |               |
| NEXT_PUBLIC_ENVIRONMENT_CONTEXT      | Informs Next which deployment environment its in                      | ✅    |            | ✅            |               |
| NPM_TOKEN                            | NPM package publish token                                             |       | ✅         |               |               |
| SLACK_BOT_USER_OAUTH_ACCESS_TOKEN    | Slack app oath access token for release posting                       | ✅    | ✅         | ✅             |               |
| SLACK_RELEASE_CHANNEL_ID             | Slack app channel id for release posting in                           |       | ✅         |               |               |
| SLACK_CHANNEL_HELP_DESIGN_SYSTEM     | Slack app channel id for search usage update posting                  | ✅    | ✅         | ✅            |               |
| SLACK_CHANNEL_TMP_PASTE_ASSISTANT    | Slack app channel id for paste assistant usage tracking               | ✅    | ✅         | ✅            |               |
| STORYBOOK_GITHUB_SHA                 | Github SHA used to associate perf tracking with commit IDs            |       |            |               |               |
| CYPRESS_CACHE_FOLDER                 | Tells Cypress override where it stores its binary so it can be cached |       |            | ✅            |               |
| CYPRESS_RECORD_KEY                   | Cypress record key so we can record our cypress runs                  | ✅    | ✅         |               |               |
| PERCY_TOKEN                          | Percy.io token                                                        | ✅    | ✅         |               |               |
| USE_CYPRESS_VRT                      | Key to enable the cypress vrt integration                             | ✅    |            |               |               |
| NX_CLOUD_ACCESS_TOKEN                | Token to enable nx cloud cache for builds                             | ✅    | ✅         | ✅            | ✅            |
| OPENAI_API_KEY                       | ChatGPT4 API Key                                                      | ✅    | ✅         | ✅            |               |
| OPENAI_API_SECRET                    | To prevent unauthorized usage of OpenAI                               | ✅    | ✅         | ✅            |               |
| OPENAI_ASSISTANT_ID                  | ID of the assitant in OpenAI we use for the Paste Assistant           | ✅    | ✅         | ✅            |               |
| ROLLBAR_ACCESS_TOKEN                 | Token needed to post error messages to rollbar                        | ✅    | ✅         | ✅            |               |
| SUPABASE_URL                         | To access the Supabase API from a function or script                  | ✅    | ✅         | ✅            |               |
| SUPABASE_KEY                         | To access the Supabase API from a function or script                  | ✅    | ✅         | ✅            |               |
| SUPABASE_STAGING_URL                 | Used to run migrations on staging in CI                               |       | ✅         |               |               |
| SUPABASE_STAGING_KEY                 | Used to run migrations on staging in CI                               |       | ✅         |               |               |
| SUPABASE_STAGING_DB_PASSWORD         | Used to run migrations on staging in CI                               |       | ✅         |               |               |
| SUPABASE_STAGING_PROJECT_ID          | Used to run migrations on staging in CI                               |       | ✅         |               |               |
| SUPABASE_PRODUCTION_URL              | Used to run migrations and update embeddings in CI                    |       | ✅         |               |               |
| SUPABASE_PRODUCTION_KEY              | Used to run migrations and update embeddings in CI                    |       | ✅         |               |               |
| SUPABASE_PRODUCTION_DB_PASSWORD      | Used to run migrations and update embeddings in CI                    |       | ✅         |               |               |
| SUPABASE_PRODUCTION_PROJECT_ID       | Used to run migrations and update embeddings in CI                    |       | ✅         |               |               |
| GH_SERVICE_ACC_DISCUSSIONS_TOKEN     | Used to access GH Discussions for embedding                           | ✅    | ✅         |               |               |
