# @twilio-paste/topbar

## 2.0.2

### Patch Changes

- [`16e8016a0`](https://github.com/twilio-labs/paste/commit/16e8016a0654601c8c12224603daa1ada56708db) [#4334](https://github.com/twilio-labs/paste/pull/4334) Thanks [@serifluous](https://github.com/serifluous)! - Visible changes in dark themes only. Redarkened color-background-weak and added color-background-weaker-elevation

## 2.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 2.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/avatar@10.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/separator@9.0.0
  - @twilio-paste/spinner@15.0.0
  - @twilio-paste/media-object@11.0.0
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/listbox-primitive@4.0.0
  - @twilio-paste/non-modal-dialog-primitive@3.0.0
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/reakit-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 1.2.1

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 1.2.0

### Minor Changes

- [`2c5f5935e`](https://github.com/twilio-labs/paste/commit/2c5f5935e71616bc8db59b4e5d41a725ec6bce60) [#3584](https://github.com/twilio-labs/paste/pull/3584) Thanks [@nkrantz](https://github.com/nkrantz)! - [Topbar] Add third value to `justify` prop type on TopbarActions, "center", allowing actions within the topbar to be center justified. For use with ProgressSteps in the Wizard flow.

## 1.1.1

### Patch Changes

- [`7d193d6bd`](https://github.com/twilio-labs/paste/commit/7d193d6bda1535f1a9347798c8ab96733bb8af77) [#3558](https://github.com/twilio-labs/paste/pull/3558) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Topbar] Improve TsDoc type annotations

## 1.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 1.0.0

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
