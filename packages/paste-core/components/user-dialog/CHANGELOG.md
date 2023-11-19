# @twilio-paste/user-dialog

## 2.1.1

### Patch Changes

- [`7d193d6bd`](https://github.com/twilio-labs/paste/commit/7d193d6bda1535f1a9347798c8ab96733bb8af77) [#3558](https://github.com/twilio-labs/paste/pull/3558) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [User dialog] Improve TsDoc type annotations

## 2.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`e2d2d5c91`](https://github.com/twilio-labs/paste/commit/e2d2d5c91c306de6629bb3932d1b8c63a6b08722) [#3474](https://github.com/twilio-labs/paste/pull/3474) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [User Dialog]: small improvement to the `UserDiaglogButton` types to omit the color prop type from Global HTML attributes, to prevent a type clash

## 2.0.1

### Patch Changes

- [`81b4c3f18`](https://github.com/twilio-labs/paste/commit/81b4c3f18e581ae93ee18a55a755de6529333c53) [#3404](https://github.com/twilio-labs/paste/pull/3404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [User Dialog] Fix the positioning of the user dialog by adding back the passing down of calculted styles to Box

## 2.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/avatar@9.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/separator@8.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/media-object@10.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/listbox-primitive@3.0.0
  - @twilio-paste/non-modal-dialog-primitive@2.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/reakit-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 1.0.3

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 1.0.2

### Patch Changes

- [`e2f12ff7a`](https://github.com/twilio-labs/paste/commit/e2f12ff7a6a415cae2432da31b51ce58df738cae) [#3299](https://github.com/twilio-labs/paste/pull/3299) Thanks [@nkrantz](https://github.com/nkrantz)! - [User Dialog] adjust padding of list items to more clearly define item groups

## 1.0.1

### Patch Changes

- [`cc840e4aa`](https://github.com/twilio-labs/paste/commit/cc840e4aa0f83922d80ace5acfa6fe409c98216a) [#3298](https://github.com/twilio-labs/paste/pull/3298) Thanks [@nkrantz](https://github.com/nkrantz)! - [User dialog] add zindex so menu overlays the page its on

* [`db35f7150`](https://github.com/twilio-labs/paste/commit/db35f71500623bf090741039ba8e49a7ed581c1a) [#3217](https://github.com/twilio-labs/paste/pull/3217) Thanks [@TheSisb](https://github.com/TheSisb)! - [User Dialog] ensure the user dialog list is correctly labelled for accessibility reasons

## 1.0.0

### Major Changes

- [`66127dd15`](https://github.com/twilio-labs/paste/commit/66127dd15e5e2738e711bd9533e24deaf7d13986) [#3254](https://github.com/twilio-labs/paste/pull/3254) Thanks [@nkrantz](https://github.com/nkrantz)! - [User Dialog] create package
