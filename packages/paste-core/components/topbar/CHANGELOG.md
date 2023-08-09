# @twilio-paste/topbar

## 0.3.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 0.3.0

### Minor Changes

- [`61c310e78`](https://github.com/twilio-labs/paste/commit/61c310e78636b3951b1d6825dbf8ee41782bad61) [#3317](https://github.com/twilio-labs/paste/pull/3317) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Topbar] Enable application navigation by providing an ID to the topbar for users to jump to via skiplink navigation.

### Patch Changes

- [`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df) [#3328](https://github.com/twilio-labs/paste/pull/3328) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Topbar] improved alignment with the sidebar header

* [`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df) [#3328](https://github.com/twilio-labs/paste/pull/3328) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Topbar] Allow responsive display properties on Topbar Actions to enable building responsive and adaptive topbars

- [`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df) [#3328](https://github.com/twilio-labs/paste/pull/3328) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Topbar] match z-index level to that of the sidebar so they share the same plane within an application

## 0.2.2

### Patch Changes

- [`fc88a1f5c`](https://github.com/twilio-labs/paste/commit/fc88a1f5c3a73fdfb691ac2493e009bbb7e4ed73) [#3301](https://github.com/twilio-labs/paste/pull/3301) Thanks [@nkrantz](https://github.com/nkrantz)! - [Topbar] style adjustment to the column-gap in TopbarActions

## 0.2.1

### Patch Changes

- [`db35f7150`](https://github.com/twilio-labs/paste/commit/db35f71500623bf090741039ba8e49a7ed581c1a) [#3217](https://github.com/twilio-labs/paste/pull/3217) Thanks [@TheSisb](https://github.com/TheSisb)! - [Topbar] Update to the size of the User Dialog trigger for better alignment with other topbar related components

## 0.2.0

### Minor Changes

- [`66127dd15`](https://github.com/twilio-labs/paste/commit/66127dd15e5e2738e711bd9533e24deaf7d13986) [#3254](https://github.com/twilio-labs/paste/pull/3254) Thanks [@nkrantz](https://github.com/nkrantz)! - [Topbar] Separate user dialog into its own package

### Patch Changes

- [`53e20c6de`](https://github.com/twilio-labs/paste/commit/53e20c6de2941bb14f1ea456ad3ed6467bd77e92) [#3242](https://github.com/twilio-labs/paste/pull/3242) Thanks [@nkrantz](https://github.com/nkrantz)! - [Topbar] Update styles

## 0.1.0

### Minor Changes

- [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Topbar] Add User Dialog component

* [`6060c8dfd`](https://github.com/twilio-labs/paste/commit/6060c8dfd15f4fb338d92637eec503e87c509125) [#3205](https://github.com/twilio-labs/paste/pull/3205) Thanks [@TheSisb](https://github.com/TheSisb)! - [Topbar] add package with stories and tests
