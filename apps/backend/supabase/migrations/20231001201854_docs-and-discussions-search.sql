set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.match_discussions(embedding vector, match_threshold double precision, match_count integer, min_content_length integer)
 RETURNS TABLE(path text, content text, similarity double precision, source text, type text, meta jsonb, heading text, slug text)
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_variable
begin
  return query
  select 
    page.path,
    page_section.content,
    (page_section.embedding <#> embedding) * -1 as similarity,
    page.source,
    page.type,
    page.meta,
    page_section.heading,
    page_section.slug
  from page_section
  join page
    on page_section.page_id = page.id

  -- We only care about sections that have a useful amount of content
  where length(page_section.content) >= min_content_length

  -- The dot product is negative because of a Postgres limitation, so we negate it
  and (page_section.embedding <#> embedding) * -1 > match_threshold

  -- Only return github discussions
  and page.type = 'github-discussions'

  -- OpenAI embeddings are normalized to length 1, so
  -- cosine similarity and dot product will produce the same results.
  -- Using dot product which can be computed slightly faster.
  --
  -- For the different syntaxes, see https://github.com/pgvector/pgvector
  order by page_section.embedding <#> embedding

  limit match_count;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.match_page_sections_for_ai(embedding vector, match_threshold double precision, match_count integer, min_content_length integer)
 RETURNS TABLE(path text, content text, similarity double precision)
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_variable
begin
  return query
  select
    page.path,
    page_section.content,
    (page_section.embedding <#> embedding) * -1 as similarity
  from page_section
  join page
    on page_section.page_id = page.id

  -- We only care about sections that have a useful amount of content
  where length(page_section.content) >= min_content_length
  
  -- we only want markdown files to feed an answer from ai
  and page.type != 'github-discussions'

  -- The dot product is negative because of a Postgres limitation, so we negate it
  and (page_section.embedding <#> embedding) * -1 > match_threshold

  -- OpenAI embeddings are normalized to length 1, so
  -- cosine similarity and dot product will produce the same results.
  -- Using dot product which can be computed slightly faster.
  --
  -- For the different syntaxes, see https://github.com/pgvector/pgvector
  order by page_section.embedding <#> embedding
  
  limit match_count;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.match_page_sections_v2(embedding vector, match_threshold double precision, match_count integer, min_content_length integer)
 RETURNS TABLE(path text, content text, similarity double precision)
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_variable
begin
  return query
  select
    page.path,
    page_section.content,
    page.path,
    page.source,
    page.type,
    page.meta,
    page_section.slug,
    page_section.heading,
    (page_section.embedding <#> embedding) * -1 as similarity
  from page_section
  join page
    on page_section.page_id = page.id

  -- We only care about sections that have a useful amount of content
  where length(page_section.content) >= min_content_length

  -- The dot product is negative because of a Postgres limitation, so we negate it
  and (page_section.embedding <#> embedding) * -1 > match_threshold

  -- OpenAI embeddings are normalized to length 1, so
  -- cosine similarity and dot product will produce the same results.
  -- Using dot product which can be computed slightly faster.
  --
  -- For the different syntaxes, see https://github.com/pgvector/pgvector
  order by page_section.embedding <#> embedding
  
  limit match_count;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.match_page_sections_v2(embedding vector, match_threshold double precision, min_content_length integer)
 RETURNS SETOF page_section
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_variable
begin
  return query
  select *
  from page_section

  -- We only care about sections that have a useful amount of content
  where length(page_section.content) >= min_content_length

  -- The dot product is negative because of a Postgres limitation, so we negate it
  and (page_section.embedding <#> embedding) * -1 > match_threshold

  -- OpenAI embeddings are normalized to length 1, so
  -- cosine similarity and dot product will produce the same results.
  -- Using dot product which can be computed slightly faster.
  --
  -- For the different syntaxes, see https://github.com/pgvector/pgvector
  order by page_section.embedding <#> embedding;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.match_page_sections_v3(embedding vector, match_threshold double precision, match_count integer, min_content_length integer)
 RETURNS TABLE(path text, content text, similarity double precision, source text, type text, meta jsonb, heading text, slug text)
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_variable
begin
  return query
  select 
    page.path,
    page_section.content,
    (page_section.embedding <#> embedding) * -1 as similarity,
    page.source,
    page.type,
    page.meta,
    page_section.heading,
    page_section.slug
  from page_section
  join page
    on page_section.page_id = page.id

  -- We only care about sections that have a useful amount of content
  where length(page_section.content) >= min_content_length

  -- The dot product is negative because of a Postgres limitation, so we negate it
  and (page_section.embedding <#> embedding) * -1 > match_threshold

  -- OpenAI embeddings are normalized to length 1, so
  -- cosine similarity and dot product will produce the same results.
  -- Using dot product which can be computed slightly faster.
  --
  -- For the different syntaxes, see https://github.com/pgvector/pgvector
  order by page_section.embedding <#> embedding

  limit match_count;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.match_page_sections_v3(embedding vector, match_threshold double precision, min_content_length integer)
 RETURNS TABLE(path text, content text, similarity double precision, source text, type text, meta jsonb, heading text, slug text)
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_variable
begin
  return query
  select 
    page.path,
    page_section.content,
    (page_section.embedding <#> embedding) * -1 as similarity,
    page.source,
    page.type,
    page.meta,
    page_section.heading,
    page_section.slug
  from page_section
  join page
    on page_section.page_id = page.id

  -- We only care about sections that have a useful amount of content
  where length(page_section.content) >= min_content_length

  -- The dot product is negative because of a Postgres limitation, so we negate it
  and (page_section.embedding <#> embedding) * -1 > match_threshold

  -- OpenAI embeddings are normalized to length 1, so
  -- cosine similarity and dot product will produce the same results.
  -- Using dot product which can be computed slightly faster.
  --
  -- For the different syntaxes, see https://github.com/pgvector/pgvector
  order by page_section.embedding <#> embedding;
end;
$function$
;


