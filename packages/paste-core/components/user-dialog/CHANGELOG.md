# @twilio-paste/user-dialog

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
