# Generating Embeddings

Embeddings are what is used for our [Doc Search](./docsearch.md) functionality. OpenAI embeddings are a technique that uses machine learning and big data to convert unstructured data into structured vector spaces. 

In our use case it converts plain text such as search criteria, mdx headers and GitHub discussion titles. It uses the model `text-embedding-ada-002` and outputs a similar structure to: `[-0.005330325,0.018767769,0.00020701668,-0.0011101937, ...]`

## Local Development

In order to develop locally you will need to startup a local instance of Supabase. The code for this is found in `/apps/backend`. Follow [this](../../../apps/backend/README.md) document to get setup.

After you have it setup you should be able to access Supabase at: http://127.0.0.1:54323. If you have no tables, you have not applied migrations. You can run ```yarn workspace @twilio-paste/backend db:reset``` from the root of the project.

**Note**: if you see an error for vector packages go into [20230928013336_initial_schema](../../../apps/backend/supabase/migrations/20230928013336_initial_schema.sql) and change the following without committing:

```sql
create extension if not exists "vector" with schema "public" version '0.5.0';
/* to */
create extension if not exists "vector" with schema "public"; 
```

### Environment Variables

In order to do any GH action or assistant development on the site you will need to set environment variables in ```packages/paste-website/.env```.

```
OPENAI_API_KEY=""  // USE YOUR PERSONALTOKEN FOR LOCAL DEV
SUPABASE_URL="http://127.0.0.1:54321"  // PRINTED TO CONSOLE AFTER STARTING CONTAINER
SUPABASE_KEY="" // PRINTED TO CONSOLE AFTER STARTING CONTAINER
GH_SERVICE_ACC_DISCUSSIONS_TOKEN="" // IN 1Password UNDER github.com ENTRY
```

### Generating Data

The best way to generate data is to run the nightly embed script `generate:embeddings`. This will update the tables: `page` and `page_section`. 

## Table Structure

While there are other tables the only ones that concern the embeddings creation are:
- **page**: Stores the metadata of the entry. Key columns are the checksum (used to determine whether to update the record), path (either the url of the page or the github discussion), type (github-discussion or markdown)
- **page_sections**: contains the search embeddings. Key columns are content (plain text headings/titles), embedding (the vector spaces created from OpenAI), slug (yo string of content or the discussion/answer in GitHub).

Both tables are related with page being thge parent. They are joined by `page.id on page_section.page_id`.