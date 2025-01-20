create extension if not exists "vector" with schema "public" version '0.8.0';

create sequence "public"."page_id_seq";

create sequence "public"."page_section_id_seq";

create table "public"."page" (
    "id" bigint not null default nextval('page_id_seq'::regclass),
    "path" text not null,
    "checksum" text,
    "meta" jsonb,
    "parent_page_id" bigint,
    "type" text,
    "source" text,
    "version" uuid,
    "last_refresh" timestamp with time zone
);


create table "public"."page_section" (
    "id" bigint not null default nextval('page_section_id_seq'::regclass),
    "page_id" bigint not null,
    "content" text,
    "token_count" integer,
    "embedding" vector(1536),
    "slug" text,
    "heading" text
);


alter sequence "public"."page_id_seq" owned by "public"."page"."id";

alter sequence "public"."page_section_id_seq" owned by "public"."page_section"."id";

CREATE UNIQUE INDEX page_path_key ON public.page USING btree (path);

CREATE UNIQUE INDEX page_pkey ON public.page USING btree (id);

CREATE UNIQUE INDEX page_section_pkey ON public.page_section USING btree (id);

alter table "public"."page" add constraint "page_pkey" PRIMARY KEY using index "page_pkey";

alter table "public"."page_section" add constraint "page_section_pkey" PRIMARY KEY using index "page_section_pkey";

alter table "public"."page" add constraint "page_parent_page_id_fkey" FOREIGN KEY (parent_page_id) REFERENCES page(id) not valid;

alter table "public"."page" validate constraint "page_parent_page_id_fkey";

alter table "public"."page" add constraint "page_path_key" UNIQUE using index "page_path_key";

alter table "public"."page_section" add constraint "page_section_page_id_fkey" FOREIGN KEY (page_id) REFERENCES page(id) ON DELETE CASCADE not valid;

alter table "public"."page_section" validate constraint "page_section_page_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_page_parents(page_id bigint)
 RETURNS TABLE(id bigint, parent_page_id bigint, path text, meta jsonb)
 LANGUAGE sql
AS $function$
  with recursive chain as (
    select *
    from page 
    where id = page_id

    union all

    select child.*
      from page as child
      join chain on chain.parent_page_id = child.id 
  )
  select id, parent_page_id, path, meta
  from chain;
$function$
;

CREATE OR REPLACE FUNCTION public.match_page_sections(embedding vector, match_threshold double precision, match_count integer, min_content_length integer)
 RETURNS TABLE(id bigint, page_id bigint, slug text, heading text, content text, similarity double precision)
 LANGUAGE plpgsql
AS $function$
#variable_conflict use_variable
begin
  return query
  select
    page_section.id,
    page_section.page_id,
    page_section.slug,
    page_section.heading,
    page_section.content,
    (page_section.embedding <#> embedding) * -1 as similarity
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
  order by page_section.embedding <#> embedding
  
  limit match_count;
end;
$function$
;


