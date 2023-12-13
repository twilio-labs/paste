set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.upsert_story_and_create_story_render(_storybook_id text, _story_name text, _actual_duration double precision, _base_duration double precision, _commit_sha text, _core_version text, _phase text)
 RETURNS void
 LANGUAGE plpgsql
AS $function$DECLARE
  _story_id INT;
BEGIN
  -- Upsert the story
  INSERT INTO story(storybook_id, name)
  VALUES (_storybook_id, _story_name)
  ON CONFLICT (storybook_id) DO UPDATE 
  SET name = _story_name
  RETURNING id INTO _story_id;

  -- Insert the story_render
  INSERT INTO story_render(story_id, actual_duration, base_duration, commit_sha, core_version_number, phase)
  VALUES (_story_id, _actual_duration, _base_duration, _commit_sha, _core_version, _phase);
END;$function$
;

create policy "Read and write"
on "public"."story"
as permissive
for insert
to public
with check (true);


create policy "read"
on "public"."story"
as permissive
for select
to public
using (true);


create policy "update"
on "public"."story"
as permissive
for update
to public
using (true)
with check (true);



