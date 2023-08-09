# @twilio-paste/progress-steps

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
