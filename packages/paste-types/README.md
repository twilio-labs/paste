# @twilio-paste/types

Typescript typings used in multiple Paste packages

## Notes

This package exports types mimicking the styled-system high level grouping here: https://styled-system.com/api. There are cases where we differ from styled-system due to our token implementation. Specifically:

- We don't have a `color` grouping. You can either:
  - Use the `BackgroundColor` and `TextColor` types that are exported individually
  - Use `TypographyProps` (which includes textColor) or `BackgroundProps` (which includes backgroundColor)
- The `Shadow` typing forbids `textShadow` currently, until we have tokens for those.
- The `background` and `border` shorthands are also forbidden because it makes it tough to type as tokens.
