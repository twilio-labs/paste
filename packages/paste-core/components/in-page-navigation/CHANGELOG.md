# @twilio-paste/in-page-navigation

## 5.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 4.4.0

### Minor Changes

- [`3aa24f5c0`](https://github.com/twilio-labs/paste/commit/3aa24f5c0c10e9449ae01fe67d639e8670853c6d) [#4206](https://github.com/twilio-labs/paste/pull/4206) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [InPageNavigation] modified vertical items to wrap text as opposed to using ellipses

## 4.3.4

### Patch Changes

- [`0f7cb22a0`](https://github.com/twilio-labs/paste/commit/0f7cb22a05d803b2a2c32d62bdf892c48f218775) [#4148](https://github.com/twilio-labs/paste/pull/4148) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Tabs, CodeBlock, InPageNavigation] fixed a bug where items in the tabs list may not complete the scroll, still showing the overflow right button.

## 4.3.3

### Patch Changes

- [`e9586bdf8`](https://github.com/twilio-labs/paste/commit/e9586bdf82321ec1815a6df3752f50a20677fe4f) [#4143](https://github.com/twilio-labs/paste/pull/4143) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [InPageNavigation] fix issue with currently selected item causing vertical scroll

## 4.3.2

### Patch Changes

- [`c23bb4c2a`](https://github.com/twilio-labs/paste/commit/c23bb4c2a809c8664898e84378b43eb26c263f4c) [#4122](https://github.com/twilio-labs/paste/pull/4122) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [In Page Navigation]: Fix underline bug caused due to pixel rounding

* [`0d10a085b`](https://github.com/twilio-labs/paste/commit/0d10a085be3940fcf59288edc69a6992a090e97f) [#4067](https://github.com/twilio-labs/paste/pull/4067) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [In Page Navigation] make items scrollable

## 4.3.1

### Patch Changes

- [`ecbba0427`](https://github.com/twilio-labs/paste/commit/ecbba0427542d91c05b1f17aa64762606984d63a) [#3634](https://github.com/twilio-labs/paste/pull/3634) Thanks [@nkrantz](https://github.com/nkrantz)! - [In Page Navigation] change border bottom color of In Page Nav Items to "colorBorderInverseWeaker" when using inverse variants for improved styling.

## 4.3.0

### Minor Changes

- [`28db966db`](https://github.com/twilio-labs/paste/commit/28db966dbafbb52a384407acb0f3952de4ff8979) [#3579](https://github.com/twilio-labs/paste/pull/3579) Thanks [@nkrantz](https://github.com/nkrantz)! - [In Page Navigation] Add vertical styles and update horizontal styles. Updated horizontal styles include a bottom border. Adds a new prop `hideBottomBorder` for specific cases when the bottom border shouldn't be visible.

## 4.2.0

### Minor Changes

- [`92c16ec9d`](https://github.com/twilio-labs/paste/commit/92c16ec9de1ac35b5dc0a05cf8463729b01a7822) [#3537](https://github.com/twilio-labs/paste/pull/3537) Thanks [@TheSisb](https://github.com/TheSisb)! - [In Page Navigation] Add new `orientation` property with a vertical option.

### Patch Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [In Page Navigation] Improved TsDoc type annotations

## 4.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 4.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 3.0.2

### Patch Changes

- [`3c8e02a3d`](https://github.com/twilio-labs/paste/commit/3c8e02a3dc7c27c1fa337df4618b4236d5b6f305) [#3346](https://github.com/twilio-labs/paste/pull/3346) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [In-page Navigation] allow in page navigation to remove bottom margin

* [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 3.0.1

### Patch Changes

- [`48e5f1e5c`](https://github.com/twilio-labs/paste/commit/48e5f1e5cd1c06c6967ee4e43f30179498efede8) [#3225](https://github.com/twilio-labs/paste/pull/3225) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button, Help Text, In Page Navigation, Input, Input Box, Label, Select, Tab, Text Area] Update color text tokens for inverse styles

## 3.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- Updated dependencies [[`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 2.1.0

### Minor Changes

- [`d4122a492`](https://github.com/twilio-labs/paste/commit/d4122a49268621780c58c9da78964283d2764c90) [#3067](https://github.com/twilio-labs/paste/pull/3067) Thanks [@shleewhite](https://github.com/shleewhite)! - [In Page Navigation] Add inverse and inverse_fullWidth variants. Update styles to align with new Paste Twilio theme.

## 2.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/icons@10.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 1.0.1

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 1.0.0

### Major Changes

- [`8290a1e1f`](https://github.com/twilio-labs/paste/commit/8290a1e1fc219b079b2fec0c5ec3a2faad1a61cd) [#2827](https://github.com/twilio-labs/paste/pull/2827) Thanks [@gloriliale](https://github.com/gloriliale)! - [In Page Navigation] add a package for the navigation component In Page Navigation
