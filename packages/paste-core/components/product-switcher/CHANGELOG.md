# @twilio-paste/product-switcher

## 4.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/badge@9.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/menu@15.0.0
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/separator@9.0.0
  - @twilio-paste/spinner@15.0.0
  - @twilio-paste/media-object@11.0.0
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/menu-primitive@3.0.0
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

## 3.0.2

### Patch Changes

- Updated dependencies [[`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9), [`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9)]:
  - @twilio-paste/screen-reader-only@13.1.1
  - @twilio-paste/text@10.1.1

## 3.0.1

### Patch Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [Product Switcher] Improve TsDoc type annotations.

## 3.0.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- Updated dependencies [[`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85)]:
  - @twilio-paste/screen-reader-only@13.1.0
  - @twilio-paste/text@10.1.0

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
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/badge@8.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/menu@14.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/separator@8.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/media-object@10.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/menu-primitive@2.0.0
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

- [`61c310e78`](https://github.com/twilio-labs/paste/commit/61c310e78636b3951b1d6825dbf8ee41782bad61) [#3317](https://github.com/twilio-labs/paste/pull/3317) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed incorrect prop types for menu based components

- Updated dependencies [[`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df)]:
  - @twilio-paste/text@9.0.3

## 1.0.2

### Patch Changes

- [`950568e63`](https://github.com/twilio-labs/paste/commit/950568e6335261c279f1e093b0058b600c444ae1) [#3304](https://github.com/twilio-labs/paste/pull/3304) Thanks [@serifluous](https://github.com/serifluous)! - Updates navigation component descriptions

- Updated dependencies [[`c05f8686a`](https://github.com/twilio-labs/paste/commit/c05f8686af26f473a97895c6055bdbca2a2e5421)]:
  - @twilio-paste/text@9.0.2

## 1.0.1

### Patch Changes

- [`db35f7150`](https://github.com/twilio-labs/paste/commit/db35f71500623bf090741039ba8e49a7ed581c1a) [#3217](https://github.com/twilio-labs/paste/pull/3217) Thanks [@TheSisb](https://github.com/TheSisb)! - [Product Switcher] minor change to the size of the trigger button

## 1.0.0

### Major Changes

- [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Created the Account Switcher and Product Switcher pacakges for use in Topbar and navigation UI kit
