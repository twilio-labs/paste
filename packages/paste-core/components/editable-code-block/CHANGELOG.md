# @twilio-paste/editable-code-block

## 2.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`b48a0f4ea`](https://github.com/twilio-labs/paste/commit/b48a0f4ea67060070c9fbddc3fde505427b83eb5) [#3502](https://github.com/twilio-labs/paste/pull/3502) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Editable Code Block]: Improved TsDoc type annotations

## 2.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/badge@8.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/heading@11.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/truncate@14.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/disclosure-primitive@2.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/code-editor-library@2.0.0
  - @twilio-paste/reakit-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0
  - @twilio-paste/utils@5.0.0

## 1.1.0

### Minor Changes

- [`bb49609a7`](https://github.com/twilio-labs/paste/commit/bb49609a7a8f5dd3b18f240bd66a6a98ab2d6805) [#3332](https://github.com/twilio-labs/paste/pull/3332) Thanks [@TheSisb](https://github.com/TheSisb)! - [Editable CodeBlock] Refined the API and added a wrapper and header component.

## 1.0.0

### Major Changes

- [`61ba09fa3`](https://github.com/twilio-labs/paste/commit/61ba09fa3a66252180e9f9bdac5f81ef671db7e4) [#3309](https://github.com/twilio-labs/paste/pull/3309) Thanks [@TheSisb](https://github.com/TheSisb)! - [Editable Code Block] Add the new EditableCodeBlock component. Enables building code editors in the browser, styled with Paste default styles.

### Patch Changes

- Updated dependencies [[`61ba09fa3`](https://github.com/twilio-labs/paste/commit/61ba09fa3a66252180e9f9bdac5f81ef671db7e4)]:
  - @twilio-paste/code-editor-library@1.0.0
