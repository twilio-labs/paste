create policy "create"
on "public"."story_render"
as permissive
for insert
to public
with check (true);


create policy "read story renders"
on "public"."story_render"
as permissive
for select
to public
using (true);



