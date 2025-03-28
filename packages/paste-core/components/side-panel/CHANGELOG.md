# @twilio-paste/side-panel

## 2.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 2.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/badge@9.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/spinner@15.0.0
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/modal-dialog-primitive@3.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0
  - @twilio-paste/utils@6.0.0

## 1.2.0

### Minor Changes

- [`3e9bf5fbd`](https://github.com/twilio-labs/paste/commit/3e9bf5fbdbfa800a86746baf5369ed104afd1ba3) [#4230](https://github.com/twilio-labs/paste/pull/4230) Thanks [@nkrantz](https://github.com/nkrantz)! - [Side Panel] Update mobile styles, add useSidePanelState hook, animation fixes

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 1.1.0

### Minor Changes

- [`b315321db`](https://github.com/twilio-labs/paste/commit/b315321dbc67caaaf2c2aebd319b2712ccd13715) [#4002](https://github.com/twilio-labs/paste/pull/4002) Thanks [@nkrantz](https://github.com/nkrantz)! - [Side Panel] Create SidePanelFooter exported from the Side Panel package for actions or chat composers. Make scrollbar color of SidePanelBody slightly darker for better visibility. Small improvements to spacing and alignment of SidePanelHeader.

## 1.0.0

### Major Changes

- [`bb893822d`](https://github.com/twilio-labs/paste/commit/bb893822d9f1fbea00ebe97a0cb463a4392e369f) [#3827](https://github.com/twilio-labs/paste/pull/3827) Thanks [@nkrantz](https://github.com/nkrantz)! - [Side Panel] add new Side Panel component. Side panel is a container that pushes the main page content when open.

### Patch Changes

- [`a3b7520bf`](https://github.com/twilio-labs/paste/commit/a3b7520bf6907e017ff8bd4215c769c3acf61844) [#3904](https://github.com/twilio-labs/paste/pull/3904) Thanks [@nkrantz](https://github.com/nkrantz)! - [Side Panel] Fix positioning of close button when no header actions are being used by adding justifyContent="space-between"
