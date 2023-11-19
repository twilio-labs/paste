# Adding New Design Tokens

Tokens live in `packages/paste-design-tokens/tokens/global`. Dark theme tokens live in `packages/paste-design-tokens/tokens/dark/global`.

After adding a new token, bump the package and core up as a minor by running `yarn changeset`.

## Colors

When adding new color tokens, make sure the value points to an alias (e.g. `red-60`).

## Icon sizes

Make sure the new icon size points to a line height. You may have to add a new token to fit your needs. You'll also have to add the new line height to the alias file. You'll also need to add the new icon size to the `packages/paste-theme/src/generateThemeFromTokens` file and the `packages/paste-theme/src/types/GenericThemeShape` file. That will require a re-build and a snapshot update for the theme shape.
