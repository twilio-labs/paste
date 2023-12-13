create table "public"."story" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "storybook_id" text,
    "name" text
);


alter table "public"."story" enable row level security;

create table "public"."story_render" (
    "id" bigint generated by default as identity not null,
    "run_at" timestamp with time zone not null default now(),
    "commit_sha" text,
    "phase" text,
    "actual_duration" double precision,
    "base_duration" double precision,
    "core_version_number" text,
    "story_id" bigint
);


alter table "public"."story_render" enable row level security;

CREATE UNIQUE INDEX story_pkey ON public.story USING btree (id);

CREATE UNIQUE INDEX story_render_pkey ON public.story_render USING btree (id);

CREATE UNIQUE INDEX story_storybook_id_key ON public.story USING btree (storybook_id);

alter table "public"."story" add constraint "story_pkey" PRIMARY KEY using index "story_pkey";

alter table "public"."story_render" add constraint "story_render_pkey" PRIMARY KEY using index "story_render_pkey";

alter table "public"."story" add constraint "story_storybook_id_key" UNIQUE using index "story_storybook_id_key";

alter table "public"."story_render" add constraint "story_render_story_id_fkey" FOREIGN KEY (story_id) REFERENCES story(id) not valid;

alter table "public"."story_render" validate constraint "story_render_story_id_fkey";


