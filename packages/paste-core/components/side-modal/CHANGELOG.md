# @twilio-paste/side-modal

## 5.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 5.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/heading@12.0.0
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/spinner@15.0.0
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
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

## 4.2.1

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 4.2.0

### Minor Changes

- [`7c93dafd5`](https://github.com/twilio-labs/paste/commit/7c93dafd52ac78b1325b1c76f3ed0476bc98170e) [#4140](https://github.com/twilio-labs/paste/pull/4140) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Side Modal]: Align `SideModalFooterActions` to left. This change is to make `Side Modal` more aligned with `Side Panel` component. If you want to keep the actions on the right, you can use the `justifyContent` prop to align them to the right. If you are keeping them on the left, it's recommended to move the primary action to the left and the secondary action to the right.

## 4.1.3

### Patch Changes

- [`b315321db`](https://github.com/twilio-labs/paste/commit/b315321dbc67caaaf2c2aebd319b2712ccd13715) [#4002](https://github.com/twilio-labs/paste/pull/4002) Thanks [@nkrantz](https://github.com/nkrantz)! - [Side Modal] Increase size of close icon.

## 4.1.2

### Patch Changes

- [`383658791`](https://github.com/twilio-labs/paste/commit/383658791c200aceae72135ef778e07b1d134c94) [#3886](https://github.com/twilio-labs/paste/pull/3886) Thanks [@TheSisb](https://github.com/TheSisb)! - [SideModal] fix position of SideModalContainer when using the state hook

## 4.1.1

### Patch Changes

- [`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9) [#3607](https://github.com/twilio-labs/paste/pull/3607) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Side Modal] Improved TsDoc type annotations

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
  - @twilio-paste/button@14.0.0
  - @twilio-paste/heading@11.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
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

## 3.1.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 3.1.0

### Minor Changes

- [`771da3b74`](https://github.com/twilio-labs/paste/commit/771da3b74936774b7620a19ab735a3a6baff3237) [#3296](https://github.com/twilio-labs/paste/pull/3296) Thanks [@TheSisb](https://github.com/TheSisb)! - [SideModal] Add new prop `hideOnEsc` which enables closing the SideModal when the "Escape" keyboard key is pressed

### Patch Changes

- [`771da3b74`](https://github.com/twilio-labs/paste/commit/771da3b74936774b7620a19ab735a3a6baff3237) [#3296](https://github.com/twilio-labs/paste/pull/3296) Thanks [@TheSisb](https://github.com/TheSisb)! - [SideModal] Fix to correctly focus the close button when the SideModal first opens

## 3.0.1

### Patch Changes

- [`819c87512`](https://github.com/twilio-labs/paste/commit/819c875123f8c7f1795224ea3f6f32e2c56be47f) [#3059](https://github.com/twilio-labs/paste/pull/3059) Thanks [@TheSisb](https://github.com/TheSisb)! - [Side modal] Add an opening animation

## 3.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`dc07ca41b`](https://github.com/twilio-labs/paste/commit/dc07ca41b7ae9a3045c44210d2d25cdc9b84f0dd) [#3106](https://github.com/twilio-labs/paste/pull/3106) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Side Modal] set screen position to fixed to ensure the dialog is always full height in long scrolling screens'

* [`05b0c3dda`](https://github.com/twilio-labs/paste/commit/05b0c3dda0df1564a60ce13f83586bd6fed1922d) [#3083](https://github.com/twilio-labs/paste/pull/3083) Thanks [@nkrantz](https://github.com/nkrantz)! - [Side modal] Increase width to size-80 (816px)

* Updated dependencies [[`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08), [`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/button@13.0.0
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/heading@10.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 2.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/button@12.0.0
  - @twilio-paste/heading@9.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/spinner@12.0.0
  - @twilio-paste/stack@6.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/non-modal-dialog-primitive@1.0.0
  - @twilio-paste/text@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/icons@10.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/reakit-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 1.0.4

### Patch Changes

- [`353b8323a`](https://github.com/twilio-labs/paste/commit/353b8323a1a1ab293d35d3bcabf3ed3793bbe1b2) [#2938](https://github.com/twilio-labs/paste/pull/2938) Thanks [@nkrantz](https://github.com/nkrantz)! - [Side Modal] Update styles to align with new Paste Twilio theme

## 1.0.3

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 1.0.2

### Patch Changes

- [`0865d51a7`](https://github.com/twilio-labs/paste/commit/0865d51a770aa2e0ac054f83d26a7808d9f55054) [#2807](https://github.com/twilio-labs/paste/pull/2807) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [side-modal] set an element name on the root dialog node, to allow full control of custom styling including widths

## 1.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 1.0.0

### Major Changes

- [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16) [#2676](https://github.com/twilio-labs/paste/pull/2676) Thanks [@shleewhite](https://github.com/shleewhite)! - [Side Modal] create a new Side Modal component! This modal sits on top of the page on the right side. It should be used when you want a full height modal where you can interact with the rest of the page while it is open.
