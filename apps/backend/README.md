# Backend

Uses Supabase. You need docker running locally to start local dev. You only need to do that when editing.

## Handy scripts:

Note: all scripts assume the backend directory is the current working directory.

Generating migrations when you've edited the DB in the console.

```
yarn supabase db diff --use-migra name_of_migration -f name_of_migration
```

Reset db after migration to test migration files

```
yarn supabase db reset
```

Link local to upstream project so you can push migrations to staging or prod projects

```
yarn supabase link --project-ref $PROJECT_REF
```

Push migrations to upstream / clooud project such as staging

```
yarn supabase db push
```

Generate db types after migrations (from root of monorepo)

```
yarn generate:db-types
```
