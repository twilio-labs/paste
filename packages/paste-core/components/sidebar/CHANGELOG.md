# @twilio-paste/sidebar

## 1.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/badge@8.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/truncate@14.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/disclosure-primitive@2.0.0
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
  - @twilio-paste/utils@5.0.0

## 0.5.1

### Patch Changes

- [`3c8e02a3d`](https://github.com/twilio-labs/paste/commit/3c8e02a3dc7c27c1fa337df4618b4236d5b6f305) [#3346](https://github.com/twilio-labs/paste/pull/3346) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Sidebar] fixed an issue with overlay sidebars where the topbar would be over the sidebar when sidebar is expanded

* [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

- [`bb49609a7`](https://github.com/twilio-labs/paste/commit/bb49609a7a8f5dd3b18f240bd66a6a98ab2d6805) [#3332](https://github.com/twilio-labs/paste/pull/3332) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] `SidebarNavigationItem` now opens external links with the correct default `rel` and `target` attributes.

## 0.5.0

### Minor Changes

- [`61c310e78`](https://github.com/twilio-labs/paste/commit/61c310e78636b3951b1d6825dbf8ee41782bad61) [#3317](https://github.com/twilio-labs/paste/pull/3317) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Sidebar] Included skip link functionality, allowing consumers an easy way to create application navigation skip links. Added three new required props `mainContentSkipLinkID`, `sidebarNavigationSkipLinkID` and `topbarSkipLinkID`. Plus three optional internationalization props to translate the skip link text

### Patch Changes

- [`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df) [#3328](https://github.com/twilio-labs/paste/pull/3328) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Sidebar] corrected the SideBarNavigationItem children proptype validation rule

* [`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df) [#3328](https://github.com/twilio-labs/paste/pull/3328) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Sidebar] improved SSR handling of the push content wrapper for small screen responsive layouts

## 0.4.0

### Minor Changes

- [`83307d2e2`](https://github.com/twilio-labs/paste/commit/83307d2e2ef6204b9e30d812257e19c7e3e09639) [#3306](https://github.com/twilio-labs/paste/pull/3306) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Sidebar] Improved ability to place children, like badges, inside a navigation item and have it positioned nicely by default

### Patch Changes

- [`6d384057e`](https://github.com/twilio-labs/paste/commit/6d384057ea74c790e8c91b5d4582a6386d1ffd3d) [#3303](https://github.com/twilio-labs/paste/pull/3303) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] fix flicker in animation when expanding/collapsing the sidebar in compact mode. Reduce width of custom scrollbar and add margin-top.

## 0.3.1

### Patch Changes

- [`db35f7150`](https://github.com/twilio-labs/paste/commit/db35f71500623bf090741039ba8e49a7ed581c1a) [#3217](https://github.com/twilio-labs/paste/pull/3217) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] `SidebarBetaBadge` no longer passes `onClick` when `as="span"`. Other miscellaneous typescript fixes.

* [`db35f7150`](https://github.com/twilio-labs/paste/commit/db35f71500623bf090741039ba8e49a7ed581c1a) [#3217](https://github.com/twilio-labs/paste/pull/3217) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] Style updates to the Sidebar navigation components

## 0.3.0

### Minor Changes

- [`9e5b3b7f0`](https://github.com/twilio-labs/paste/commit/9e5b3b7f05b591af9349d17f646cf8e4f51c6981) [#3224](https://github.com/twilio-labs/paste/pull/3224) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] add SidebarNavigation and all relevant sub-components

### Patch Changes

- [`53e20c6de`](https://github.com/twilio-labs/paste/commit/53e20c6de2941bb14f1ea456ad3ed6467bd77e92) [#3242](https://github.com/twilio-labs/paste/pull/3242) Thanks [@nkrantz](https://github.com/nkrantz)! - [Sidebar] Update styles

## 0.2.0

### Minor Changes

- [`9e6399dda`](https://github.com/twilio-labs/paste/commit/9e6399dda8ea592a57319685144deda714565c93) [#3208](https://github.com/twilio-labs/paste/pull/3208) Thanks [@nkrantz](https://github.com/nkrantz)! - [Sidebar] Add Sidebar Beta Badge

### Patch Changes

- [`6060c8dfd`](https://github.com/twilio-labs/paste/commit/6060c8dfd15f4fb338d92637eec503e87c509125) [#3205](https://github.com/twilio-labs/paste/pull/3205) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] set width to 100% for `SidebarOverlayContentWrapper`

* [`6060c8dfd`](https://github.com/twilio-labs/paste/commit/6060c8dfd15f4fb338d92637eec503e87c509125) [#3205](https://github.com/twilio-labs/paste/pull/3205) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] fix SidebarOverlayContentWrapper left margin when `compact=true`

- [`ed2ae23e2`](https://github.com/twilio-labs/paste/commit/ed2ae23e2aadb8a80cda313672c052a0c3225c82) [#3212](https://github.com/twilio-labs/paste/pull/3212) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] split up SidebarHeader so it now is composable with the new SidebarHeaderLabel and SidebarHeaderIconButton components

## 0.1.0

### Minor Changes

- [`d1d3088ca`](https://github.com/twilio-labs/paste/commit/d1d3088ca0c300740f640f80ebfc532168b35263) [#3160](https://github.com/twilio-labs/paste/pull/3160) Thanks [@nkrantz](https://github.com/nkrantz)! - [Sidebar] Add `SidebarCollapseButton` and `SidebarFooter` components. Renamed ContentWrappers

* [`0c3861824`](https://github.com/twilio-labs/paste/commit/0c38618244d1494c7153b341cfd4e486afafc47d) [#3154](https://github.com/twilio-labs/paste/pull/3154) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] add new Sidebar component with several variant styles

- [`6d845fd69`](https://github.com/twilio-labs/paste/commit/6d845fd69e62d900e74eac9b29833c0375294098) [#3178](https://github.com/twilio-labs/paste/pull/3178) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sidebar] add `SidebarHeader` component
