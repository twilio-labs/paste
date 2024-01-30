set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.match_weekly_search_usage()
 RETURNS TABLE(query_string character varying, count bigint)
 LANGUAGE plpgsql
AS $function$
begin
  return query
  SELECT
    queries.query_string,
    count(*) as count
  FROM
    queries
  WHERE
    type = 'docs-search'
    AND queries.query_string != 'dsys'
    AND queries.query_string != 'create a button'
    AND queries.created_at >= now() - interval '1 week'
  GROUP BY
    queries.query_string
  ORDER BY
    count DESC
  LIMIT 20;
end;
$function$
;


