# Docsearch

The search is provided a custom index hosted on Supabase and created by us on a [nightly Cron Github Action](https://github.com/twilio-labs/paste/blob/main/.github/workflows/update_docs_embed.yml).

The Supabase login is stored in OnePassword.

## Creating Embeddings

We use the same technology that powers our GPT4 powered Discussions and Chat bot, to create our Site Search.

On a nightly basis we index new or updated content in our MDX files and Github Discussions.

For MDX files we create "sections" of "pages" by chunking mdx files by headings. Those sections are then converted to OPENAI Vector embeds and stored in the Supabase Vector DB.

The same happens with Github discussions. The discussion is a page and is split into two sections, the initial post and the answer.

We can then perform a similarity search using the user input as the query.

Embeddings are generated using the the [embedding script](../../../packages/paste-website/scripts/search/). For a more detailed explanation of generating embeddings and running locally refernce [generating-embeddings](./generating-embeddings.md).

## Production vs Previews (staging)

We have two separate indexes, one for production and one for previews. This allows us to test changes to the search index without affecting production. We don't however, keep the previews index up to date with the latest content. We only update the previews index when we are testing changes to the search index.

When viewing a preview, the search will use the previews index. When viewing production, the search will use the production index.

## Returning results

We have a [NextJS API route](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) `/api/docs-search`. It will return the top 10 most similar page sections across MDX and Github discussions based on a user `prompt`.

We have another  API route `/api/dicsussions-search` that will return the top 10 most similar discussions based on a user `prompt`.
