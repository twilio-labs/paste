# @twilio-paste/progress-steps

## 2.2.2

### Patch Changes

- [`7f39856ee`](https://github.com/twilio-labs/paste/commit/7f39856ee3697235b535ea02eaef2cb105cd4d86) [#4170](https://github.com/twilio-labs/paste/pull/4170) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [ProgressSteps] fixed an issue where progress steps was rerendering unnecessarily

## 2.2.1

### Patch Changes

- [`69d8d7c72`](https://github.com/twilio-labs/paste/commit/69d8d7c7204d672b742ce5c7eb02bf0d3b36b0a9) [#4126](https://github.com/twilio-labs/paste/pull/4126) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Progress Steps]: remove unnecessary space

## 2.2.0

### Minor Changes

- [`d108aeb7f`](https://github.com/twilio-labs/paste/commit/d108aeb7f9f8e455fb5490ae790e21d32f0a7ec9) [#4065](https://github.com/twilio-labs/paste/pull/4065) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Progress Steps] Add `ProgressStepsContent` component to add additional content during vertical orientation

## 2.1.1

### Patch Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [Progress Steps] Improve TsDoc type annotations

## 2.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 2.0.1

### Patch Changes

- [`0b5f37e96`](https://github.com/twilio-labs/paste/commit/0b5f37e960683ed832c467a9d21d7f11e763a77b) [#3472](https://github.com/twilio-labs/paste/pull/3472) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [account-switcher, product-switcher, progress-steps, visual-picker] Corrected the React and React-dom peer dependency versions to include React 16 and 17

## 2.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 1.0.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 1.0.0

### Major Changes

- [`a2c1c910a`](https://github.com/twilio-labs/paste/commit/a2c1c910addc4efc2a5db87b11eac2289489de38) [#3272](https://github.com/twilio-labs/paste/pull/3272) Thanks [@TheSisb](https://github.com/TheSisb)! - [ProgressSteps] Add new ProgressSteps package. Progress steps show a user a clear path to complete a complex multi step task.
