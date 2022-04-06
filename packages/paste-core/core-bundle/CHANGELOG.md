# Change Log

## 12.0.0

### Major Changes

- [`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377) [#2363](https://github.com/twilio-labs/paste/pull/2363) Thanks [@shleewhite](https://github.com/shleewhite)! - [Icons] add React.forwardRef to all icons

### Patch Changes

- [`3482db481`](https://github.com/twilio-labs/paste/commit/3482db4814aed77e7355c079ae931823da854f4b) [#2355](https://github.com/twilio-labs/paste/pull/2355) Thanks [@TheSisb](https://github.com/TheSisb)! - [Design-Tokens] remove the 'Courier New' font from the code font family, falling back to 'Courier' instead.

* [`10178f39`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377) [#2363](https://github.com/twilio-labs/paste/pull/2363) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] update icon prop to work with forwardRef icons

* Updated dependencies [[`3482db481`](https://github.com/twilio-labs/paste/commit/3482db4814aed77e7355c079ae931823da854f4b), [`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377), [`10178f39`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/design-tokens@7.2.1
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/avatar@4.0.0
  - @twilio-paste/alert@9.0.0
  - @twilio-paste/anchor@7.0.0
  - @twilio-paste/badge@3.0.0
  - @twilio-paste/base-radio-checkbox@8.0.0
  - @twilio-paste/button@9.0.0
  - @twilio-paste/checkbox@8.0.0
  - @twilio-paste/combobox@10.0.0
  - @twilio-paste/data-grid@2.0.0
  - @twilio-paste/disclosure@7.0.0
  - @twilio-paste/display-pill-group@3.0.0
  - @twilio-paste/form-pill-group@3.0.0
  - @twilio-paste/help-text@8.0.0
  - @twilio-paste/inline-control-group@8.0.0
  - @twilio-paste/menu@9.0.0
  - @twilio-paste/modal@10.0.0
  - @twilio-paste/pagination@2.0.0
  - @twilio-paste/popover@8.0.0
  - @twilio-paste/radio-group@8.0.0
  - @twilio-paste/screen-reader-only@8.0.0
  - @twilio-paste/select@7.0.0
  - @twilio-paste/spinner@9.0.0
  - @twilio-paste/toast@7.0.0
  - @twilio-paste/tooltip@6.0.0
  - @twilio-paste/truncate@9.0.0
  - @twilio-paste/breadcrumb@6.0.0
  - @twilio-paste/alert-dialog@3.0.0
  - @twilio-paste/label@8.0.0

## 11.5.0

### Minor Changes

- [`f76b99d45`](https://github.com/twilio-labs/paste/commit/f76b99d455d587e7865515338f65d1a8d25c01ac) [#2334](https://github.com/twilio-labs/paste/pull/2334) Thanks [@shleewhite](https://github.com/shleewhite)! - [ChatLog] add ChatMessageMeta and ChatMessageMetaItem components

* [`f5ce8b0c6`](https://github.com/twilio-labs/paste/commit/f5ce8b0c63154caa26a0e5174a040aa4dcc4154a) [#2335](https://github.com/twilio-labs/paste/pull/2335) Thanks [@andipants12](https://github.com/andipants12)! - [Fix] Remediate erratic scrolling behavior for grouped combobox. Scroll function for the virtualization library was being called even though grouped comboboxes are not virtualized. The jumping behavior on scroll was observed because the indices in the virtual list and the actual list did not match. Added guard to prevent the scroll function from the virtualization library from being called.

### Patch Changes

- [`b6ccaa266`](https://github.com/twilio-labs/paste/commit/b6ccaa266c8abc81820b77127da5abb0cf5308d4) [#2347](https://github.com/twilio-labs/paste/pull/2347) Thanks [@gloriliale](https://github.com/gloriliale)! - [Alert, Modal, Popover, Toast] Adjust close icon's hover state color, which was previously being overwritten.

* [`91d20b99`](https://github.com/twilio-labs/paste/commit/91d20b99f5697b91c3e84d3aa778c94938677120) [#2328](https://github.com/twilio-labs/paste/pull/2328) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme & Customization] Fix an issue where animations would run once regardless of if animations should be disabled.

- [`91d20b99f`](https://github.com/twilio-labs/paste/commit/91d20b99f5697b91c3e84d3aa778c94938677120) [#2328](https://github.com/twilio-labs/paste/pull/2328) Thanks [@TheSisb](https://github.com/TheSisb)! - [Skeleton-Loader]: Small animation tweak so that the highlight fully moves through the skeleton loader correctly at the end state.

* [`ff7454a0`](https://github.com/twilio-labs/paste/commit/ff7454a0d7355654c42dbe39e2eca29c6ea6d8cb) [#2348](https://github.com/twilio-labs/paste/pull/2348) Thanks [@TheSisb](https://github.com/TheSisb)! - [reakit-library] update Reakit dependency to fix typings in TS 4.4.x

* Updated dependencies [[`b6ccaa266`](https://github.com/twilio-labs/paste/commit/b6ccaa266c8abc81820b77127da5abb0cf5308d4), [`f76b99d45`](https://github.com/twilio-labs/paste/commit/f76b99d455d587e7865515338f65d1a8d25c01ac), [`f5ce8b0c6`](https://github.com/twilio-labs/paste/commit/f5ce8b0c63154caa26a0e5174a040aa4dcc4154a), [`91d20b99`](https://github.com/twilio-labs/paste/commit/91d20b99f5697b91c3e84d3aa778c94938677120), [`91d20b99f`](https://github.com/twilio-labs/paste/commit/91d20b99f5697b91c3e84d3aa778c94938677120), [`ff7454a0`](https://github.com/twilio-labs/paste/commit/ff7454a0d7355654c42dbe39e2eca29c6ea6d8cb)]:
  - @twilio-paste/alert@8.0.4
  - @twilio-paste/modal@9.0.1
  - @twilio-paste/popover@7.0.4
  - @twilio-paste/toast@6.0.3
  - @twilio-paste/chat-log@0.2.0
  - @twilio-paste/combobox@9.1.0
  - @twilio-paste/customization@3.0.3
  - @twilio-paste/theme@6.0.4
  - @twilio-paste/skeleton-loader@1.0.3
  - @twilio-paste/reakit-library@0.8.5

## 11.4.0

### Minor Changes

- [`3b467fd60`](https://github.com/twilio-labs/paste/commit/3b467fd60da812dacb0447533c5b7abb46822a22) [#2319](https://github.com/twilio-labs/paste/pull/2319) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] create new package with ChatBubble and ChatMessage components

### Patch Changes

- [`3b467fd6`](https://github.com/twilio-labs/paste/commit/3b467fd60da812dacb0447533c5b7abb46822a22) [#2319](https://github.com/twilio-labs/paste/pull/2319) Thanks [@shleewhite](https://github.com/shleewhite)! - [Codemods] add ChatMessage and ChatBubble to the component map

- Updated dependencies [[`3b467fd60`](https://github.com/twilio-labs/paste/commit/3b467fd60da812dacb0447533c5b7abb46822a22)]:
  - @twilio-paste/chat-log@0.1.0

## 11.3.0

### Minor Changes

- [`68ee1a35e`](https://github.com/twilio-labs/paste/commit/68ee1a35e5aed2bf099be01ceef0d4dbd608c8c1) [#2304](https://github.com/twilio-labs/paste/pull/2304) Thanks [@gloriliale](https://github.com/gloriliale)! - [Spinner] make title an optional prop, throw an error when not decorative and no title

* [`b1359c95e`](https://github.com/twilio-labs/paste/commit/b1359c95ebbd0ec12eca3d72cfbcac72c06f6b85) [#2307](https://github.com/twilio-labs/paste/pull/2307) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Table] Adds the ability to safely render tables for mobile screens using the `scrollHorizontally` prop. Also adds the `noWrap` prop to control cell density by preventing line wrapping.

- [`68ee1a35`](https://github.com/twilio-labs/paste/commit/68ee1a35e5aed2bf099be01ceef0d4dbd608c8c1) [#2304](https://github.com/twilio-labs/paste/pull/2304) Thanks [@gloriliale](https://github.com/gloriliale)! - [Button] add i18n props to support i18n

* [`b1359c95e`](https://github.com/twilio-labs/paste/commit/b1359c95ebbd0ec12eca3d72cfbcac72c06f6b85) [#2307](https://github.com/twilio-labs/paste/pull/2307) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Data grid]: inherit more things from the base table component, including the new responsive and no line wrapping behaviours for better table rendering options.

- [`badff092`](https://github.com/twilio-labs/paste/commit/badff092245be305f4696ea2999764ce931fea6d) [#2306](https://github.com/twilio-labs/paste/pull/2306) Thanks [@nkrantz](https://github.com/nkrantz)! - [Anchor] add `i18nshowExternalLinkLabel`prop to Anchor

* [`cf5878d82`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Modal primitive] update to Reach Modal version number to v0.16.2

- [`cf5878d8`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Text] Prevented styling props from being forwarded to their HTML DOM nodes in the browser for a cleaner DOM inspector view

### Patch Changes

- [`99e9550dc`](https://github.com/twilio-labs/paste/commit/99e9550dce78ecb58a7a47997885d27b0762fa8f) [#2309](https://github.com/twilio-labs/paste/pull/2309) Thanks [@nkrantz](https://github.com/nkrantz)! - [Select] set background color on Select to colorBackgroundBody

* [`dce15da77`](https://github.com/twilio-labs/paste/commit/dce15da77560a10be6a984a96519e68f958e4595) [#2315](https://github.com/twilio-labs/paste/pull/2315) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Spinner] title is no longer required. Matching prop types to typescript types

- [`cf5878d82`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Modal] Switch modal overlay to using a pure styled component and not Box

* [`cf5878d8`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Styling library] two new exports from styled system, `props` and `createShouldForwardProp`.

* Updated dependencies [[`99e9550dc`](https://github.com/twilio-labs/paste/commit/99e9550dce78ecb58a7a47997885d27b0762fa8f), [`68ee1a35e`](https://github.com/twilio-labs/paste/commit/68ee1a35e5aed2bf099be01ceef0d4dbd608c8c1), [`b1359c95e`](https://github.com/twilio-labs/paste/commit/b1359c95ebbd0ec12eca3d72cfbcac72c06f6b85), [`68ee1a35`](https://github.com/twilio-labs/paste/commit/68ee1a35e5aed2bf099be01ceef0d4dbd608c8c1), [`b1359c95e`](https://github.com/twilio-labs/paste/commit/b1359c95ebbd0ec12eca3d72cfbcac72c06f6b85), [`dce15da77`](https://github.com/twilio-labs/paste/commit/dce15da77560a10be6a984a96519e68f958e4595), [`badff092`](https://github.com/twilio-labs/paste/commit/badff092245be305f4696ea2999764ce931fea6d), [`cf5878d82`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914), [`cf5878d82`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914), [`cf5878d8`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914), [`cf5878d8`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914)]:
  - @twilio-paste/select@6.0.4
  - @twilio-paste/spinner@8.1.0
  - @twilio-paste/table@3.1.0
  - @twilio-paste/button@8.1.0
  - @twilio-paste/data-grid@1.1.0
  - @twilio-paste/anchor@6.1.0
  - @twilio-paste/modal-dialog-primitive@0.3.0
  - @twilio-paste/modal@9.0.0
  - @twilio-paste/styling-library@0.3.8
  - @twilio-paste/box@5.1.0
  - @twilio-paste/text@5.1.0
  - @twilio-paste/alert-dialog@2.0.0

## 11.2.0

### Minor Changes

- [`8e5dfe1e`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Tokens] add i18n font family tokens

* [`55d0528b`](https://github.com/twilio-labs/paste/commit/55d0528b2d967492aa6138c7bab7d1a7168d6e1b) [#2286](https://github.com/twilio-labs/paste/pull/2286) Thanks [@gloriliale](https://github.com/gloriliale)! - [Badge] Update Badge component to add decorative and counter variants, promote to stage 2

- [`27528be7`](https://github.com/twilio-labs/paste/commit/27528be7aa25521655300c699f37575dab73a3db) [#2286](https://github.com/twilio-labs/paste/pull/2286) Thanks [@gloriliale](https://github.com/gloriliale)! - [Design Tokens] added new background color, box shadow, text color, border color, border radius tokens to support badge styling

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button, FormPillGroup, Menu, Pagination, Select] inherit fontFamily for i18n

* [`554da9708`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf) [#2274](https://github.com/twilio-labs/paste/pull/2274) Thanks [@shleewhite](https://github.com/shleewhite)! - [Label] add i18nRequiredLabel prop for i18n

- [`554da970`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf) [#2274](https://github.com/twilio-labs/paste/pull/2274) Thanks [@shleewhite](https://github.com/shleewhite)! - [checkbox, inline-control-group, radio-group] add i18nRequiredLabel prop for i18n

* [`6a1f1190f`](https://github.com/twilio-labs/paste/commit/6a1f1190f81c7df0af785aefaeda0ac10d5cc8ae) [#2286](https://github.com/twilio-labs/paste/pull/2286) Thanks [@gloriliale](https://github.com/gloriliale)! - [Popover] adjust typings for PopoverBadgeButton

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [ThemeProvider] use non-latin fonts based on the HTML lang attribute to support i18n.

* [`30445063`](https://github.com/twilio-labs/paste/commit/304450633cf5d587cd9078681d60482502d5be8d) [#2302](https://github.com/twilio-labs/paste/pull/2302) Thanks [@gloriliale](https://github.com/gloriliale)! - [Badge] adjust the error icon color for the error counter variant

* Updated dependencies [[`8e5dfe1e`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220), [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220), [`554da9708`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf), [`55d0528b`](https://github.com/twilio-labs/paste/commit/55d0528b2d967492aa6138c7bab7d1a7168d6e1b), [`554da970`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf), [`6a1f1190f`](https://github.com/twilio-labs/paste/commit/6a1f1190f81c7df0af785aefaeda0ac10d5cc8ae), [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220), [`27528be7`](https://github.com/twilio-labs/paste/commit/27528be7aa25521655300c699f37575dab73a3db), [`30445063`](https://github.com/twilio-labs/paste/commit/304450633cf5d587cd9078681d60482502d5be8d)]:
  - @twilio-paste/design-tokens@7.2.0
  - @twilio-paste/button@8.0.3
  - @twilio-paste/form-pill-group@2.0.3
  - @twilio-paste/menu@8.0.3
  - @twilio-paste/pagination@1.0.3
  - @twilio-paste/select@6.0.3
  - @twilio-paste/label@7.0.3
  - @twilio-paste/badge@2.1.0
  - @twilio-paste/checkbox@7.0.3
  - @twilio-paste/inline-control-group@7.0.3
  - @twilio-paste/radio-group@7.1.2
  - @twilio-paste/popover@7.0.3
  - @twilio-paste/theme@6.0.3

## 11.1.2

### Patch Changes

- [`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Toast] use title for i18n status labels

* [`690a2d2a`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Alert] use title for i18n status labels

- [`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Data Grid] add i18n props to support i18n

* [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

* Updated dependencies [[`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad), [`690a2d2a`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad), [`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad), [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e)]:
  - @twilio-paste/toast@6.0.2
  - @twilio-paste/alert@8.0.3
  - @twilio-paste/data-grid@1.0.2
  - @twilio-paste/color-contrast-utils@2.0.2
  - @twilio-paste/alert-dialog@1.0.2
  - @twilio-paste/anchor@6.0.2
  - @twilio-paste/avatar@3.0.2
  - @twilio-paste/badge@2.0.2
  - @twilio-paste/base-radio-checkbox@7.0.2
  - @twilio-paste/breadcrumb@5.0.2
  - @twilio-paste/button@8.0.2
  - @twilio-paste/card@4.0.2
  - @twilio-paste/checkbox@7.0.2
  - @twilio-paste/combobox@9.0.3
  - @twilio-paste/date-picker@1.0.2
  - @twilio-paste/disclosure@6.0.2
  - @twilio-paste/display-pill-group@2.0.2
  - @twilio-paste/form-pill-group@2.0.2
  - @twilio-paste/heading@6.0.2
  - @twilio-paste/help-text@7.0.2
  - @twilio-paste/inline-control-group@7.0.2
  - @twilio-paste/input@4.0.2
  - @twilio-paste/input-box@5.0.2
  - @twilio-paste/label@7.0.2
  - @twilio-paste/list@3.0.2
  - @twilio-paste/menu@8.0.2
  - @twilio-paste/modal@8.0.2
  - @twilio-paste/pagination@1.0.2
  - @twilio-paste/paragraph@5.0.2
  - @twilio-paste/popover@7.0.2
  - @twilio-paste/radio-group@7.1.1
  - @twilio-paste/screen-reader-only@7.0.2
  - @twilio-paste/select@6.0.2
  - @twilio-paste/separator@3.0.2
  - @twilio-paste/skeleton-loader@1.0.2
  - @twilio-paste/spinner@8.0.2
  - @twilio-paste/table@3.0.2
  - @twilio-paste/tabs@3.0.2
  - @twilio-paste/textarea@4.0.2
  - @twilio-paste/time-picker@1.0.2
  - @twilio-paste/tooltip@5.0.2
  - @twilio-paste/truncate@8.0.2
  - @twilio-paste/aspect-ratio@5.0.2
  - @twilio-paste/flex@3.0.2
  - @twilio-paste/grid@3.0.2
  - @twilio-paste/media-object@5.0.2
  - @twilio-paste/stack@3.0.2
  - @twilio-paste/box@5.0.2
  - @twilio-paste/combobox-primitive@0.3.3
  - @twilio-paste/disclosure-primitive@0.3.7
  - @twilio-paste/menu-primitive@0.2.8
  - @twilio-paste/modal-dialog-primitive@0.2.6
  - @twilio-paste/non-modal-dialog-primitive@0.3.8
  - @twilio-paste/sibling-box@4.0.2
  - @twilio-paste/tabs-primitive@0.2.6
  - @twilio-paste/text@5.0.2
  - @twilio-paste/tooltip-primitive@0.2.7
  - @twilio-paste/customization@3.0.2
  - @twilio-paste/design-tokens@7.1.1
  - @twilio-paste/animation-library@0.3.5
  - @twilio-paste/clipboard-copy-library@1.0.3
  - @twilio-paste/data-visualization-library@0.1.2
  - @twilio-paste/dropdown-library@1.1.4
  - @twilio-paste/reakit-library@0.8.4
  - @twilio-paste/styling-library@0.3.7
  - @twilio-paste/uid-library@0.2.4
  - @twilio-paste/style-props@4.0.2
  - @twilio-paste/theme@6.0.2
  - @twilio-paste/types@3.1.5
  - @twilio-paste/utils@1.1.3

## 11.1.1

### Patch Changes

- [`2100371f`](https://github.com/twilio-labs/paste/commit/2100371f74c488f145b4d8bf0b814f6eaff609e4) [#2253](https://github.com/twilio-labs/paste/pull/2253) Thanks [@shleewhite](https://github.com/shleewhite)! - [Alert] add i18n props to support i18n

* [`33c43687`](https://github.com/twilio-labs/paste/commit/33c436872f341abf473093ce48cd0b28a338dbed) [#2236](https://github.com/twilio-labs/paste/pull/2236) Thanks [@shleewhite](https://github.com/shleewhite)! - [Data Visualization] add changelog

* Updated dependencies [[`2100371f`](https://github.com/twilio-labs/paste/commit/2100371f74c488f145b4d8bf0b814f6eaff609e4), [`33c43687`](https://github.com/twilio-labs/paste/commit/33c436872f341abf473093ce48cd0b28a338dbed)]:
  - @twilio-paste/alert@8.0.2
  - @twilio-paste/data-visualization-library@0.1.1

## 11.1.0

### Minor Changes

- [`f696cb17e`](https://github.com/twilio-labs/paste/commit/f696cb17ec84bb315fc8672493800c044e866a1d) [#2200](https://github.com/twilio-labs/paste/pull/2200) Thanks [@TheSisb](https://github.com/TheSisb)! - [data-visualization] Add new package `@twilio-paste/data-visualization-library` which exports a React hook to theme Highcharts.

* [`2e27b03a5`](https://github.com/twilio-labs/paste/commit/2e27b03a57b185021478534829f921278ad7f3ac) [#2215](https://github.com/twilio-labs/paste/pull/2215) Thanks [@shleewhite](https://github.com/shleewhite)! - [Icon] add connectivity neutral icon

- [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [design-tokens] Update alias and add new tokens to be accessible in Dark theme

  - Aliases
    - Added a new alias `palette-gray-110`
  - Global: background-color
    - Updated `color-background-inverse` to gray-90
    - Updated `color-background-inverse-strong` to gray-80
  - Global: border color
    - Added `color-border-inverse-weakest` token pointing to gray-90
    - Updated `color-border-inverse-weaker` to gray-80
    - Updated `color-border-inverse` to gray-50
    - Updated `color-border-inverse-strong` to gray-20
    - Updated `color-border-inverse-stronger` to gray-10
    - Neutral
      - Updated `color-border-neutral-weak` to blue-40
    - Added `color-border-error-stronger` token pointing to red-90
  - Global: box shadow
    - Added `shadow-border-error-stronger` pointing to red-90
    - Added `shadow-border-inverse-weakest` pointing to gray-90
    - Updated `shadow-border-inverse-weaker` to gray-80
    - Updated `shadow-border-inverse` to gray-50
      - Updated `shadow-border-inverse-strong` to gray-20
      - Updated `shadow-border-inverse-stronger` to gray-10
  - Dark theme: background color
    - Updated `color-background` to gray-100
    - Updated `color-background-strong` to gray-90
    - Updated `color-background-stronger` to gray-80
    - Updated `color-background-inverse` to gray-90
    - Updated `color-background-inverse-strong` to gray-80
    - Updated `color-background-body` to new alias gray-110
    - Updated `color-background-overlay` to palette-gray-100-transparent-90
    - Updated `color-background-row-striped` to gray-100
    - Updated `color-background-subaccount` to gray-90
    - Updated `color-background-trial` to green-100
    - Brand
      - Updated `color-background-brand` to gray-100
      - Updated `color-background-brand-strong` to gray-90
    - Primary
      - Updated `color-background-primary-strongest` to blue-10
      - Updated `color-background-primary-stronger` to blue-20
      - Updated `color-background-primary-strong` to blue-30
      - Updated `color-background-primary` to blue-60
      - Updated `color-background-primary-weak` to gray-80
      - Updated `color-background-primary-weaker` to gray-90
      - Updated `color-background-primary-weakest` to gray-100
    - Destructive
      - Updated `color-background-destructive-strongest` to red-10
      - Updated `color-background-destructive-stronger` to red-20
      - Updated `color-background-destructive-strong` to red-30
      - Updated `color-background-destructive` to red-60
      - Updated `color-background-destructive-weak` to gray-80
      - Updated `color-background-destructive-weaker` to gray-90
      - Updated `color-background-destructive-weakest` to gray-100
    - Success
      - Updated `color-background-success` to green-60
    - Warning
      - Updated `color-background-warning` to orange-60
    - Error
      - Added `color-background-error-stronger` pointing to red-20
      - Updated `color-background-error-strong` to red-40
      - Updated `color-background-error` to red-60
  - Dark theme: border color
    - Updated `color-border-weak` to gray-80
    - Updated `color-border-weaker` to gray-90
    - Inverse
      - Removed `color-border-inverse-weaker`
      - Removed `color-border-inverse`
      - Removed `color-border-inverse-strong`
      - Removed `color-border-inverse-stronger`
      - Removed `color-border-inverse-strongest`
    - Primary
      - Updated `color-border-primary-strongest` to blue-10
      - Updated `color-border-primary-stronger` to blue-20
      - Updated `color-border-primary-strong` to blue-30
      - Updated `color-border-primary` to blue-60
      - Updated `color-border-primary-weak` to gray-80
      - Updated `color-border-primary-weaker` to gray-90
      - Updated `color-border-primary-weakest` to gray-100
    - Destructive
      - Updated `color-border-destructive-strongest` to red-10
      - Updated `color-border-destructive-stronger` to red-20
      - Updated `color-border-destructive-strong` to red-30
      - Updated `color-border-destructive` to red-60
      - Updated `color-border-destructive-weak` to gray-80
      - Updated `color-border-destructive-weaker` to gray-90
      - Updated `color-border-destructive-weakest` to gray-100
    - Success
      - Updated `color-border-success` to green-60
      - Updated `color-border-success-weak` to green-70
    - Warning
      - Updated `color-border-warning` to orange-60
      - Updated `color-border-warning-weak` to orange-70
    - Error
      - Added `color-border-error-stronger` pointing to red-20
      - Updated `color-border-error-strong` to red-30
      - Updated `color-border-error` to red-60
      - Updated `color-border-error-weak` to red-70
    - Neutral
      - Updated `color-border-neutral` to blue-60
      - Updated `color-border-neutral-weak` to blue-70
  - Dark theme: box shadow
    - Elevation
      - Update `shadow-elevation-10` to `black-transparent-40`
      - Update `shadow-elevation-20` to `black-transparent-50`
      - Update `shadow-elevation-30` to `black-transparent-50`
    - Focus
      - Updated `shadow-focus` to gray-60
      - Updated `shadow-focus-inverse` to gray-50
      - Updated `shadow-focus-inset` to gray-60
    - Primary
      - Updated `shadow-border-primary` to blue-60
    - Destructive
      - Updated `shadow-border-destructive` to red-60
      - Updated `shadow-border-destructive-strong` to red-30
      - Updated `shadow-border-destructive-stronger` to red-20
      - Updated `shadow-border-destructive-strongest` to red-10
    - Error
      - Updated `shadow-border-error` to red-60
      - Updated `shadow-border-error-strong` to red-30
    - Inverse
      - Removed `shadow-border-inverse-weaker`
      - Removed `shadow-border-inverse`
      - Removed `shadow-border-inverse-strong`
      - Removed `shadow-border-inverse-stronger`
      - Removed `shadow-border-inverse-strongest`
  - Dark theme: text color
    - Updated `color-text-weak` to gray-50
    - Updated `color-text-weaker` to gray-80
    - Updated `color-text-weakest` to new alias gray-110
    - Updated `color-text-inverse-weaker` to gray-70
    - Link
      - Updated `color-text-link-weak` to gray-80
      - Updated `color-text-link-stronger` to gray-0
      - Updated color-text-link-destructive-weak to gray-80
      - Updated `color-text-link-destructive-stronger` to gray-0
    - Success
      - Updated `color-text-success` to green-30
    - Neutral
      - Updated `color-text-neutral` to blue-20
    - New
      - Updated `color-text-new` to purple-20
    - Icon
      - Updated `color-text-icon` to gray-50

* [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [radio-group]

  - Add new customization element `RADIO_CONTROL_CIRCLE` to controls the styles of the circle within the radio button
  - Update default color to `colorTextWeakest`
  - Update hover text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update focus text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update active text color to `colorTextWeakest`
  - Update checked text color to `colorTextInverse`
  - Update invalid and hover border color to `colorBorderErrorStronger`
  - Update checked and hover text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and focus text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and disabled text color to `colorTextWeakest`
  - Update checked and invalid text color to `colorTextInverse`
  - Update checked and invalid and hover background color to `colorBackgroundErrorStronger` and border color to `colorBorderErrorStronger`

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [tooltip]

  - Update tooltip arrow stroke to `colorBorderInverseWeaker`
  - Update tooltip border color to `colorBorderInverseWeaker`

- [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [toast]

  - Update neutral Toast border left color to `colorBorderNeutralWeak`

* [`b4abdd9a4`](https://github.com/twilio-labs/paste/commit/b4abdd9a4c6e168c5845e744591dc40ac635a67f) [#2234](https://github.com/twilio-labs/paste/pull/2234) Thanks [@gloriliale](https://github.com/gloriliale)! - [Toast] add i18n props for variants to support i18n

- [`1f564a931`](https://github.com/twilio-labs/paste/commit/1f564a931b9a844a9d097edb2012c65692af9bd4) [#2242](https://github.com/twilio-labs/paste/pull/2242) Thanks [@shleewhite](https://github.com/shleewhite)! - [Style Props] add inherit as a background color option

* [`64de05f55`](https://github.com/twilio-labs/paste/commit/64de05f5551c5ebc94cbf85028cfaf2a637c19d3) [#2194](https://github.com/twilio-labs/paste/pull/2194) Thanks [@zahnster](https://github.com/zahnster)! - Updates 'reset' styles to set inherited font size

- [`4aefbe75d`](https://github.com/twilio-labs/paste/commit/4aefbe75d7c34ebdab209be14073426c1632d8a9) [#2227](https://github.com/twilio-labs/paste/pull/2227) Thanks [@shleewhite](https://github.com/shleewhite)! - [Popover] add i18nDismissLabel prop to support i18n

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [display-pill-group]

  - Update text color to `colorText`

- [`c0de1aee6`](https://github.com/twilio-labs/paste/commit/c0de1aee6fd6f2e2963c663838ccaf9ab2058349) [#2221](https://github.com/twilio-labs/paste/pull/2221) Thanks [@shleewhite](https://github.com/shleewhite)! - [ScreenReaderOnly] add id prop

* [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [alert]

  - Update neutral Alert border to `colorBorderNeutralWeak`

- [`9b0579415`](https://github.com/twilio-labs/paste/commit/9b0579415b3c7f392d088a136e08e3c45dfb2b53) [#2218](https://github.com/twilio-labs/paste/pull/2218) Thanks [@shleewhite](https://github.com/shleewhite)! - [Modal] add i18nDismissLabel prop to ModalHeader to support i18n

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [checkbox]

  - Update the check icon to inherit color from `BaseRadioCheckbox`
  - Update selectAll background color to default to `colorBackground`, and use `colorBackgroundPrimaryWeakest` when checked and not disabled or indeterminate and not disabled
  - Update default color to `colorTextWeakest`
  - Update hover text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update focus text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update active text color to `colorTextWeakest`
  - Update checked text color to `colorTextInverse`
  - Update invalid and hover border color to `colorBorderErrorStronger`
  - Update checked and hover text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and focus text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and disabled text color to `colorTextWeakest`
  - Update checked and invalid text color to `colorTextInverse`
  - Update checked and invalid and hover background color to `colorBackgroundErrorStronger` and border color to `colorBorderErrorStronger`

- [`c0de1aee6`](https://github.com/twilio-labs/paste/commit/c0de1aee6fd6f2e2963c663838ccaf9ab2058349) [#2221](https://github.com/twilio-labs/paste/pull/2221) Thanks [@shleewhite](https://github.com/shleewhite)! - [FormPillGroup] add i18nKeyboardControls prop to support i18n

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [modal]

  - Update modal header border bottom color to `colorBorderWeak`
  - Update modal footer border top color to `colorBorderWeak`

- [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [skeleton-loader]

  - Update animated background color to use `rgba(255, 255, 255, 0.4)`

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [input-box]

  - Update default box shadow hover to `shadowBorderPrimaryStronger`
  - Update default box shadow hover when error and not hidden to `shadowBorderErrorStronger`
  - Update inverse background color when disabled and not hidden to `colorBackgroundInverse`

- [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [color-contrast-utils] Enable color contrast tests for Dark theme

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [button]

  - Update `DestructiveButton` default text color to `colorTextInverse`
  - Update `PrimaryButton` default text color to `colorTextInverse`
  - Update `DestructiveLinkButton` active text color to `colorTextLinkDestructiveStrongest`
  - Update `InverseButton` box shadow to `shadowBorderInverseWeakest`
  - Update `LinkButton` active text color to `colorTextLinkStrongest`

- [`1f564a931`](https://github.com/twilio-labs/paste/commit/1f564a931b9a844a9d097edb2012c65692af9bd4) [#2242](https://github.com/twilio-labs/paste/pull/2242) Thanks [@shleewhite](https://github.com/shleewhite)! - [Select] set the background color on the select, option, and optionGroup

- Updated dependencies [[`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`f696cb17e`](https://github.com/twilio-labs/paste/commit/f696cb17ec84bb315fc8672493800c044e866a1d), [`b4abdd9a4`](https://github.com/twilio-labs/paste/commit/b4abdd9a4c6e168c5845e744591dc40ac635a67f), [`1f564a931`](https://github.com/twilio-labs/paste/commit/1f564a931b9a844a9d097edb2012c65692af9bd4), [`64de05f55`](https://github.com/twilio-labs/paste/commit/64de05f5551c5ebc94cbf85028cfaf2a637c19d3), [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c), [`4aefbe75d`](https://github.com/twilio-labs/paste/commit/4aefbe75d7c34ebdab209be14073426c1632d8a9), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`c0de1aee6`](https://github.com/twilio-labs/paste/commit/c0de1aee6fd6f2e2963c663838ccaf9ab2058349), [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c), [`9b0579415`](https://github.com/twilio-labs/paste/commit/9b0579415b3c7f392d088a136e08e3c45dfb2b53), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`c0de1aee6`](https://github.com/twilio-labs/paste/commit/c0de1aee6fd6f2e2963c663838ccaf9ab2058349), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c), [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7), [`1f564a931`](https://github.com/twilio-labs/paste/commit/1f564a931b9a844a9d097edb2012c65692af9bd4), [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c)]:
  - @twilio-paste/modal@8.0.1
  - @twilio-paste/color-contrast-utils@2.0.1
  - @twilio-paste/alert@8.0.1
  - @twilio-paste/alert-dialog@1.0.1
  - @twilio-paste/anchor@6.0.1
  - @twilio-paste/avatar@3.0.1
  - @twilio-paste/badge@2.0.1
  - @twilio-paste/base-radio-checkbox@7.0.1
  - @twilio-paste/breadcrumb@5.0.1
  - @twilio-paste/button@8.0.1
  - @twilio-paste/card@4.0.1
  - @twilio-paste/checkbox@7.0.1
  - @twilio-paste/combobox@9.0.2
  - @twilio-paste/data-grid@1.0.1
  - @twilio-paste/date-picker@1.0.1
  - @twilio-paste/disclosure@6.0.1
  - @twilio-paste/display-pill-group@2.0.1
  - @twilio-paste/form-pill-group@2.0.1
  - @twilio-paste/heading@6.0.1
  - @twilio-paste/help-text@7.0.1
  - @twilio-paste/inline-control-group@7.0.1
  - @twilio-paste/input@4.0.1
  - @twilio-paste/input-box@5.0.1
  - @twilio-paste/label@7.0.1
  - @twilio-paste/list@3.0.1
  - @twilio-paste/menu@8.0.1
  - @twilio-paste/pagination@1.0.1
  - @twilio-paste/paragraph@5.0.1
  - @twilio-paste/popover@7.0.1
  - @twilio-paste/radio-group@7.1.0
  - @twilio-paste/screen-reader-only@7.0.1
  - @twilio-paste/select@6.0.1
  - @twilio-paste/separator@3.0.1
  - @twilio-paste/skeleton-loader@1.0.1
  - @twilio-paste/spinner@8.0.1
  - @twilio-paste/table@3.0.1
  - @twilio-paste/tabs@3.0.1
  - @twilio-paste/textarea@4.0.1
  - @twilio-paste/time-picker@1.0.1
  - @twilio-paste/toast@6.0.1
  - @twilio-paste/tooltip@5.0.1
  - @twilio-paste/truncate@8.0.1
  - @twilio-paste/aspect-ratio@5.0.1
  - @twilio-paste/flex@3.0.1
  - @twilio-paste/grid@3.0.1
  - @twilio-paste/media-object@5.0.1
  - @twilio-paste/stack@3.0.1
  - @twilio-paste/box@5.0.1
  - @twilio-paste/combobox-primitive@0.3.2
  - @twilio-paste/disclosure-primitive@0.3.6
  - @twilio-paste/menu-primitive@0.2.7
  - @twilio-paste/modal-dialog-primitive@0.2.5
  - @twilio-paste/non-modal-dialog-primitive@0.3.7
  - @twilio-paste/sibling-box@4.0.1
  - @twilio-paste/tabs-primitive@0.2.5
  - @twilio-paste/text@5.0.1
  - @twilio-paste/tooltip-primitive@0.2.6
  - @twilio-paste/customization@3.0.1
  - @twilio-paste/design-tokens@7.1.0
  - @twilio-paste/animation-library@0.3.4
  - @twilio-paste/clipboard-copy-library@1.0.2
  - @twilio-paste/data-visualization-library@0.1.0
  - @twilio-paste/dropdown-library@1.1.3
  - @twilio-paste/reakit-library@0.8.3
  - @twilio-paste/styling-library@0.3.6
  - @twilio-paste/uid-library@0.2.3
  - @twilio-paste/style-props@4.0.1
  - @twilio-paste/theme@6.0.1
  - @twilio-paste/types@3.1.4
  - @twilio-paste/utils@1.1.2

## 11.0.1

### Patch Changes

- [`72b2db53`](https://github.com/twilio-labs/paste/commit/72b2db538cf91e12867a7d0f64ef0736e60c37e6) [#2155](https://github.com/twilio-labs/paste/pull/2155) Thanks [@andipants12](https://github.com/andipants12)! - [Combobox] Do not conditionally render the `useCombobox` hook inside the `Combobox` component.

  - passing a state object from `useCombobox` via props to the component caused unexpected side effects
  - introduces conditional render of the component with its' own hook invocation, or with the forwarded state object

- Updated dependencies [[`72b2db53`](https://github.com/twilio-labs/paste/commit/72b2db538cf91e12867a7d0f64ef0736e60c37e6)]:
  - @twilio-paste/combobox@9.0.1

## 11.0.0

### Major Changes

- [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37) [#2168](https://github.com/twilio-labs/paste/pull/2168) Thanks [@shleewhite](https://github.com/shleewhite)! - [Design Tokens] Deprecated the console theme. The package no longer exports console tokens, the default tokens should be used instead.

### Minor Changes

- [`02285a8aa`](https://github.com/twilio-labs/paste/commit/02285a8aadfafc3fb1fcb024ca78abe2f5204f5a) [#2167](https://github.com/twilio-labs/paste/pull/2167) Thanks [@shleewhite](https://github.com/shleewhite)! - [Checkbox] Hide check icon when not checked, add the defaultChecked prop.

* [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37) [#2168](https://github.com/twilio-labs/paste/pull/2168) Thanks [@shleewhite](https://github.com/shleewhite)! - [Theme] Deprecated the console theme. Using theme="console" in the Theme.Provider returns the default theme and ConsoleThemeShape returns the DefaultThemeShape. The default theme should be used instead.

- [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc) [#2093](https://github.com/twilio-labs/paste/pull/2093) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme] Add `dataVisualization` token bucket to theme object.

* [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc) [#2093](https://github.com/twilio-labs/paste/pull/2093) Thanks [@TheSisb](https://github.com/TheSisb)! - [Design Tokens] Add data-visualization tokens for 10 categorical (sequential) colors. These can be used to accessibly theme chart content, like bars in bar charts or lines in line charts.

### Patch Changes

- [`fd23d95b`](https://github.com/twilio-labs/paste/commit/fd23d95b62a6dc2930f3669d3fdf807c1ab57000) [#2151](https://github.com/twilio-labs/paste/pull/2151) Thanks [@gloriliale](https://github.com/gloriliale)! - [Breadcrumb] spread props onto Anchor or Text of breadcrumb, not the list item wrapping it.

* [`c72064fa`](https://github.com/twilio-labs/paste/commit/c72064fadcfba8bf82918d69199fa7751ac13011) [#2150](https://github.com/twilio-labs/paste/pull/2150) Thanks [@TheSisb](https://github.com/TheSisb)! - [Core] Fixed an incorrect path in the tsconfig.json file. Thanks @abereghici!

- [`ff1817a1`](https://github.com/twilio-labs/paste/commit/ff1817a1f486441a8e6fdc36c39cb65ab2605eca) [#2187](https://github.com/twilio-labs/paste/pull/2187) Thanks [@gloriliale](https://github.com/gloriliale)! - [Popover] adjusted the maxWidth to allow for wider content.

* [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc) [#2093](https://github.com/twilio-labs/paste/pull/2093) Thanks [@TheSisb](https://github.com/TheSisb)! - [style-props] change `import` to `import type` where approrpiate.

- [`68439c40`](https://github.com/twilio-labs/paste/commit/68439c4097dc533dd9a1bbc6965578f13e130c12) [#2156](https://github.com/twilio-labs/paste/pull/2156) Thanks [@shleewhite](https://github.com/shleewhite)! - [Badge] Fixed the type of the children prop

- Updated dependencies [[`fd23d95b`](https://github.com/twilio-labs/paste/commit/fd23d95b62a6dc2930f3669d3fdf807c1ab57000), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`02285a8aa`](https://github.com/twilio-labs/paste/commit/02285a8aadfafc3fb1fcb024ca78abe2f5204f5a), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`ff1817a1`](https://github.com/twilio-labs/paste/commit/ff1817a1f486441a8e6fdc36c39cb65ab2605eca), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`68439c40`](https://github.com/twilio-labs/paste/commit/68439c4097dc533dd9a1bbc6965578f13e130c12)]:
  - @twilio-paste/breadcrumb@5.0.0
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/color-contrast-utils@2.0.0
  - @twilio-paste/checkbox@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/popover@7.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/badge@2.0.0
  - @twilio-paste/alert@8.0.0
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/avatar@3.0.0
  - @twilio-paste/base-radio-checkbox@7.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/card@4.0.0
  - @twilio-paste/combobox@9.0.0
  - @twilio-paste/data-grid@1.0.0
  - @twilio-paste/date-picker@1.0.0
  - @twilio-paste/disclosure@6.0.0
  - @twilio-paste/display-pill-group@2.0.0
  - @twilio-paste/form-pill-group@2.0.0
  - @twilio-paste/heading@6.0.0
  - @twilio-paste/help-text@7.0.0
  - @twilio-paste/inline-control-group@7.0.0
  - @twilio-paste/input@4.0.0
  - @twilio-paste/input-box@5.0.0
  - @twilio-paste/label@7.0.0
  - @twilio-paste/list@3.0.0
  - @twilio-paste/menu@8.0.0
  - @twilio-paste/modal@8.0.0
  - @twilio-paste/pagination@1.0.0
  - @twilio-paste/paragraph@5.0.0
  - @twilio-paste/radio-group@7.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/select@6.0.0
  - @twilio-paste/separator@3.0.0
  - @twilio-paste/skeleton-loader@1.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/table@3.0.0
  - @twilio-paste/tabs@3.0.0
  - @twilio-paste/textarea@4.0.0
  - @twilio-paste/time-picker@1.0.0
  - @twilio-paste/toast@6.0.0
  - @twilio-paste/tooltip@5.0.0
  - @twilio-paste/truncate@8.0.0
  - @twilio-paste/aspect-ratio@5.0.0
  - @twilio-paste/flex@3.0.0
  - @twilio-paste/grid@3.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/sibling-box@4.0.0
  - @twilio-paste/text@5.0.0
  - @twilio-paste/customization@3.0.0
  - @twilio-paste/alert-dialog@1.0.0

## 10.20.0

### Minor Changes

- [`9132d0cb`](https://github.com/twilio-labs/paste/commit/9132d0cb3ed82bf4a1956484b93783605e2aea1d) [#2118](https://github.com/twilio-labs/paste/pull/2118) Thanks [@zahnster](https://github.com/zahnster)! - Fix default imports for JSON to play nice with webpack 5

* [`ab0b98bc`](https://github.com/twilio-labs/paste/commit/ab0b98bc78e81731a443234a4f8e32d4f4f6b0a6) [#2088](https://github.com/twilio-labs/paste/pull/2088) Thanks [@gloriliale](https://github.com/gloriliale)! - [Heading] Added the prop "display" to Heading to make aligning Headings with Icons possible

### Patch Changes

- Updated dependencies [[`9132d0cb`](https://github.com/twilio-labs/paste/commit/9132d0cb3ed82bf4a1956484b93783605e2aea1d), [`ab0b98bc`](https://github.com/twilio-labs/paste/commit/ab0b98bc78e81731a443234a4f8e32d4f4f6b0a6)]:
  - @twilio-paste/style-props@3.2.0
  - @twilio-paste/heading@5.2.0

## 10.19.0

### Minor Changes

- [`1031500c`](https://github.com/twilio-labs/paste/commit/1031500ce6e66acd0d10886386221ea863d0e784) [#2107](https://github.com/twilio-labs/paste/pull/2107) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fix default imports for JSON to play nice with webpack 5

* [`f8bdf2e0`](https://github.com/twilio-labs/paste/commit/f8bdf2e03608ac027eac81dd6789774ed2344a2c) [#2089](https://github.com/twilio-labs/paste/pull/2089) Thanks [@shleewhite](https://github.com/shleewhite)! - [Popover] Add PopoverBadgeButton component

### Patch Changes

- [`5d4515ea`](https://github.com/twilio-labs/paste/commit/5d4515ea31e06fa3e1478d5e42971a7973de9d51) [#2083](https://github.com/twilio-labs/paste/pull/2083) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert, Modal, Popover, Toast] Update close button to use `secondary_icon` button variant

* [`f8bdf2e03`](https://github.com/twilio-labs/paste/commit/f8bdf2e03608ac027eac81dd6789774ed2344a2c) [#2089](https://github.com/twilio-labs/paste/pull/2089) Thanks [@shleewhite](https://github.com/shleewhite)! - [Badge] Update the maxWidth

- [`eb7fce36`](https://github.com/twilio-labs/paste/commit/eb7fce3697fcb3e4530ec384d91bbdec6cc23df5) [#2087](https://github.com/twilio-labs/paste/pull/2087) Thanks [@shleewhite](https://github.com/shleewhite)! - [Label] Update the cursor

- Updated dependencies [[`5d4515ea`](https://github.com/twilio-labs/paste/commit/5d4515ea31e06fa3e1478d5e42971a7973de9d51), [`1031500c`](https://github.com/twilio-labs/paste/commit/1031500ce6e66acd0d10886386221ea863d0e784), [`f8bdf2e0`](https://github.com/twilio-labs/paste/commit/f8bdf2e03608ac027eac81dd6789774ed2344a2c), [`f8bdf2e03`](https://github.com/twilio-labs/paste/commit/f8bdf2e03608ac027eac81dd6789774ed2344a2c), [`eb7fce36`](https://github.com/twilio-labs/paste/commit/eb7fce3697fcb3e4530ec384d91bbdec6cc23df5)]:
  - @twilio-paste/alert@7.1.2
  - @twilio-paste/modal@7.1.5
  - @twilio-paste/popover@6.3.0
  - @twilio-paste/toast@5.2.2
  - @twilio-paste/color-contrast-utils@1.2.0
  - @twilio-paste/badge@1.1.3
  - @twilio-paste/label@6.0.7

## 10.18.0

### Minor Changes

- [`1b6b78fa`](https://github.com/twilio-labs/paste/commit/1b6b78fa416bf15903493cc570275d94e08a8636) [#2013](https://github.com/twilio-labs/paste/pull/2013) Thanks [@gloriliale](https://github.com/gloriliale)! - [Button] Add variants to be used specifically with icons.

### Patch Changes

- [`be59394d2`](https://github.com/twilio-labs/paste/commit/be59394d282ed46dfe7c41ef2dc16372d1da3947) [#2057](https://github.com/twilio-labs/paste/pull/2057) Thanks [@zahnster](https://github.com/zahnster)! - [Checkbox] Declare relative position on checkbox to fix focus position bug

* [`0f0a9bdd1`](https://github.com/twilio-labs/paste/commit/0f0a9bdd1392db27377c3c1e2f9881ac5afc85b8) [#2075](https://github.com/twilio-labs/paste/pull/2075) Thanks [@TheSisb](https://github.com/TheSisb)! - [Data-grid] Fixes issue where inner links would at times not be clickable.

- [`97da2b6b7`](https://github.com/twilio-labs/paste/commit/97da2b6b79eb7b5667f39aac483f83474ba6189e) [#2028](https://github.com/twilio-labs/paste/pull/2028) Thanks [@gloriliale](https://github.com/gloriliale)! - [design-tokens] Changed the alias that Dark mode's color-text-icon points to from gray-10 to gray-60

* [`1b77d45b`](https://github.com/twilio-labs/paste/commit/1b77d45b598b5924893e26a770798a1e1df73f2e) [#2029](https://github.com/twilio-labs/paste/pull/2029) Thanks [@shleewhite](https://github.com/shleewhite)! - Export the BadgeProps type and correctly pass the ref to the wrapper element when the Badge is focusable.

* Updated dependencies [[`be59394d2`](https://github.com/twilio-labs/paste/commit/be59394d282ed46dfe7c41ef2dc16372d1da3947), [`1b6b78fa`](https://github.com/twilio-labs/paste/commit/1b6b78fa416bf15903493cc570275d94e08a8636), [`0f0a9bdd1`](https://github.com/twilio-labs/paste/commit/0f0a9bdd1392db27377c3c1e2f9881ac5afc85b8), [`97da2b6b7`](https://github.com/twilio-labs/paste/commit/97da2b6b79eb7b5667f39aac483f83474ba6189e), [`1b77d45b`](https://github.com/twilio-labs/paste/commit/1b77d45b598b5924893e26a770798a1e1df73f2e)]:
  - @twilio-paste/checkbox@6.1.3
  - @twilio-paste/button@7.1.0
  - @twilio-paste/data-grid@0.2.1
  - @twilio-paste/design-tokens@6.14.2
  - @twilio-paste/badge@1.1.2

## 10.17.0

### Minor Changes

- [`ad741d15a`](https://github.com/twilio-labs/paste/commit/ad741d15a313c59ed8922d7515ecb1109b07e60a) [#2025](https://github.com/twilio-labs/paste/pull/2025) Thanks [@nkrantz](https://github.com/nkrantz)! - [Data-Grid] Add `textAlign` prop to `DataGridCell` for aligning cells and columns to the right.

### Patch Changes

- [`bcac9a339`](https://github.com/twilio-labs/paste/commit/bcac9a339ec8c99e15c7dac1446e315b58449fbf) [#2020](https://github.com/twilio-labs/paste/pull/2020) Thanks [@TheSisb](https://github.com/TheSisb)! - [DisplayPillGroup and FormPillGroup] Improved the group container elements so that they wrap correctly when having an overflow of pill children elements. (Thanks @rpresb)

* [`8bedb9fd`](https://github.com/twilio-labs/paste/commit/8bedb9fdc1996b0cabfef90d70b341dd1e384fe1) [#2021](https://github.com/twilio-labs/paste/pull/2021) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme and Customization] Slight tweak to prevent animations from running once on app load when they should be disabled from the beginning.

* Updated dependencies [[`ad741d15a`](https://github.com/twilio-labs/paste/commit/ad741d15a313c59ed8922d7515ecb1109b07e60a), [`bcac9a339`](https://github.com/twilio-labs/paste/commit/bcac9a339ec8c99e15c7dac1446e315b58449fbf), [`8bedb9fd`](https://github.com/twilio-labs/paste/commit/8bedb9fdc1996b0cabfef90d70b341dd1e384fe1)]:
  - @twilio-paste/data-grid@0.2.0
  - @twilio-paste/display-pill-group@1.1.3
  - @twilio-paste/form-pill-group@1.1.3
  - @twilio-paste/customization@2.1.3
  - @twilio-paste/theme@5.3.3

## 10.16.0

### Minor Changes

- [`847504d03`](https://github.com/twilio-labs/paste/commit/847504d0393706806c683a4ffb537796fccc5888) [#2011](https://github.com/twilio-labs/paste/pull/2011) Thanks [@TheSisb](https://github.com/TheSisb)! - [Popover] Removes the wrapping `<Box>` present in `PopoverContainer`, along with the ref passing. PopoverContainer is strictly a context provider now. This fixes issues around vertical alignment and inlining PopoverButtons.

### Patch Changes

- [`f381d8e7`](https://github.com/twilio-labs/paste/commit/f381d8e748ff45557bc166cbe024abdd6002d20e) [#2000](https://github.com/twilio-labs/paste/pull/2000) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Center-align button contents for vertical alignment

* [`8f83a25d`](https://github.com/twilio-labs/paste/commit/8f83a25dec843518721597721606e80e37dbde97) [#1990](https://github.com/twilio-labs/paste/pull/1990) Thanks [@TheSisb](https://github.com/TheSisb)! - [Data Grid] Fixed broken 'striped' prop so it correctly toggles zebra striping on rows.

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

- [`5c99798b`](https://github.com/twilio-labs/paste/commit/5c99798b551553c47c8ff2bbbb5661d430abdb21) [#1996](https://github.com/twilio-labs/paste/pull/1996) Thanks [@gloriliale](https://github.com/gloriliale)! - Updated and added link colors to the default theme and dark theme.

- Updated dependencies [[`f381d8e7`](https://github.com/twilio-labs/paste/commit/f381d8e748ff45557bc166cbe024abdd6002d20e), [`8f83a25d`](https://github.com/twilio-labs/paste/commit/8f83a25dec843518721597721606e80e37dbde97), [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258), [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f), [`5c99798b`](https://github.com/twilio-labs/paste/commit/5c99798b551553c47c8ff2bbbb5661d430abdb21), [`847504d03`](https://github.com/twilio-labs/paste/commit/847504d0393706806c683a4ffb537796fccc5888)]:
  - @twilio-paste/button@7.0.11
  - @twilio-paste/data-grid@0.1.1
  - @twilio-paste/alert@7.1.1
  - @twilio-paste/alert-dialog@0.2.1
  - @twilio-paste/anchor@5.1.2
  - @twilio-paste/avatar@2.2.1
  - @twilio-paste/badge@1.1.1
  - @twilio-paste/base-radio-checkbox@6.0.5
  - @twilio-paste/breadcrumb@4.1.1
  - @twilio-paste/card@3.1.2
  - @twilio-paste/checkbox@6.1.2
  - @twilio-paste/combobox@8.1.1
  - @twilio-paste/date-picker@0.2.1
  - @twilio-paste/disclosure@5.1.2
  - @twilio-paste/display-pill-group@1.1.2
  - @twilio-paste/form-pill-group@1.1.2
  - @twilio-paste/heading@5.1.1
  - @twilio-paste/help-text@6.1.1
  - @twilio-paste/inline-control-group@6.1.1
  - @twilio-paste/input@3.1.2
  - @twilio-paste/input-box@4.1.2
  - @twilio-paste/label@6.0.6
  - @twilio-paste/list@2.1.1
  - @twilio-paste/menu@7.0.5
  - @twilio-paste/modal@7.1.4
  - @twilio-paste/pagination@0.2.1
  - @twilio-paste/paragraph@4.1.1
  - @twilio-paste/popover@6.2.0
  - @twilio-paste/radio-group@6.1.1
  - @twilio-paste/screen-reader-only@6.0.3
  - @twilio-paste/select@5.1.2
  - @twilio-paste/separator@2.1.1
  - @twilio-paste/skeleton-loader@0.1.3
  - @twilio-paste/spinner@7.2.2
  - @twilio-paste/table@2.1.2
  - @twilio-paste/tabs@2.1.1
  - @twilio-paste/textarea@3.1.1
  - @twilio-paste/time-picker@0.2.1
  - @twilio-paste/toast@5.2.1
  - @twilio-paste/tooltip@4.1.2
  - @twilio-paste/truncate@7.0.1
  - @twilio-paste/aspect-ratio@4.0.5
  - @twilio-paste/flex@2.1.1
  - @twilio-paste/grid@2.1.1
  - @twilio-paste/media-object@4.1.1
  - @twilio-paste/stack@2.1.1
  - @twilio-paste/box@4.2.5
  - @twilio-paste/combobox-primitive@0.3.1
  - @twilio-paste/disclosure-primitive@0.3.5
  - @twilio-paste/menu-primitive@0.2.6
  - @twilio-paste/modal-dialog-primitive@0.2.4
  - @twilio-paste/non-modal-dialog-primitive@0.3.6
  - @twilio-paste/sibling-box@3.0.5
  - @twilio-paste/tabs-primitive@0.2.4
  - @twilio-paste/text@4.1.5
  - @twilio-paste/tooltip-primitive@0.2.5
  - @twilio-paste/customization@2.1.2
  - @twilio-paste/animation-library@0.3.3
  - @twilio-paste/clipboard-copy-library@1.0.1
  - @twilio-paste/dropdown-library@1.1.2
  - @twilio-paste/reakit-library@0.8.2
  - @twilio-paste/styling-library@0.3.5
  - @twilio-paste/uid-library@0.2.2
  - @twilio-paste/style-props@3.1.1
  - @twilio-paste/theme@5.3.2
  - @twilio-paste/types@3.1.3
  - @twilio-paste/utils@1.1.1
  - @twilio-paste/design-tokens@6.14.1

## 10.15.0

### Minor Changes

- [`bdff8b23`](https://github.com/twilio-labs/paste/commit/bdff8b23c308c0882a340b74ce0b2ebadd20b85f) [#1928](https://github.com/twilio-labs/paste/pull/1928) Thanks [@loreina](https://github.com/loreina)! - [Tokens] Added shadow-focus-inset token to dark theme, and adjusted shadow-focus-inset token value for default theme.

* [`4d87a7c9`](https://github.com/twilio-labs/paste/commit/4d87a7c9a9a1349db51824fb0a827ec5eaa2cf18) [#1919](https://github.com/twilio-labs/paste/pull/1919) Thanks [@nkrantz](https://github.com/nkrantz)! - [AlertDialog] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`d4eaf8b1`](https://github.com/twilio-labs/paste/commit/d4eaf8b1802780842daeeaed43ba1cc5062d2a9e) [#1919](https://github.com/twilio-labs/paste/pull/1919) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`b17344da`](https://github.com/twilio-labs/paste/commit/b17344dad70812566afa5206786968e59f50efb2) [#1922](https://github.com/twilio-labs/paste/pull/1922) Thanks [@andipants12](https://github.com/andipants12)! - [Combobox] Fix virtualization bug and add virtualization to combobox when an option template is used. The virtualization library we use, react-virtual, provides a ref that is required for correct sizing of virtualized items. The ref from this library's hook was being overridden by another, thus, the virtualized options were not resizing correctly. This behavior was observed in comboboxes that were not using option templates, and had sufficiently long option text.

- [`51723bcc`](https://github.com/twilio-labs/paste/commit/51723bccee321cc7dab4922d90c76d2b912c9f68) [#1950](https://github.com/twilio-labs/paste/pull/1950) Thanks [@nkrantz](https://github.com/nkrantz)! - [Badge] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`10d5989a`](https://github.com/twilio-labs/paste/commit/10d5989a8da2dca37d168fdfaaa04231ba2bcfa6) [#1936](https://github.com/twilio-labs/paste/pull/1936) Thanks [@gloriliale](https://github.com/gloriliale)! - [Radio-Group] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`e1fc74a5`](https://github.com/twilio-labs/paste/commit/e1fc74a56ca06511d1182ad72a0605e10905b909) [#1977](https://github.com/twilio-labs/paste/pull/1977) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button]: Fix bug that was adding extra padding when Screen Reader Only was passed as a child.

* [`193f0d12`](https://github.com/twilio-labs/paste/commit/193f0d122893a6d165b93d2ca561621c58f9e39d) [#1969](https://github.com/twilio-labs/paste/pull/1969) Thanks [@TheSisb](https://github.com/TheSisb)! - [Anchor] Fixed the missing underline in Firefox. Also improved how external anchors wrap with their icons.

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

* [`3f80fef3`](https://github.com/twilio-labs/paste/commit/3f80fef3173ddaf084f26a371040fc6b4eaa585a) [#1936](https://github.com/twilio-labs/paste/pull/1936) Thanks [@gloriliale](https://github.com/gloriliale)! - [Checkbox] Ensured PropTypes aligned with customization needs by adding element prop.

- [`130d817b`](https://github.com/twilio-labs/paste/commit/130d817b6072b1a7948ee664a1e716714a2a6442) [#1975](https://github.com/twilio-labs/paste/pull/1975) Thanks [@TheSisb](https://github.com/TheSisb)! - [Text] Add missing style props "whiteSpace" and "fontVariantNumeric"

- Updated dependencies [[`bdff8b23`](https://github.com/twilio-labs/paste/commit/bdff8b23c308c0882a340b74ce0b2ebadd20b85f), [`4d87a7c9`](https://github.com/twilio-labs/paste/commit/4d87a7c9a9a1349db51824fb0a827ec5eaa2cf18), [`e1fc74a5`](https://github.com/twilio-labs/paste/commit/e1fc74a56ca06511d1182ad72a0605e10905b909), [`d4eaf8b1`](https://github.com/twilio-labs/paste/commit/d4eaf8b1802780842daeeaed43ba1cc5062d2a9e), [`193f0d12`](https://github.com/twilio-labs/paste/commit/193f0d122893a6d165b93d2ca561621c58f9e39d), [`b17344da`](https://github.com/twilio-labs/paste/commit/b17344dad70812566afa5206786968e59f50efb2), [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6), [`3f80fef3`](https://github.com/twilio-labs/paste/commit/3f80fef3173ddaf084f26a371040fc6b4eaa585a), [`51723bcc`](https://github.com/twilio-labs/paste/commit/51723bccee321cc7dab4922d90c76d2b912c9f68), [`130d817b`](https://github.com/twilio-labs/paste/commit/130d817b6072b1a7948ee664a1e716714a2a6442), [`10d5989a`](https://github.com/twilio-labs/paste/commit/10d5989a8da2dca37d168fdfaaa04231ba2bcfa6)]:
  - @twilio-paste/design-tokens@6.14.0
  - @twilio-paste/alert-dialog@0.2.0
  - @twilio-paste/button@7.0.10
  - @twilio-paste/toast@5.2.0
  - @twilio-paste/anchor@5.1.1
  - @twilio-paste/combobox@8.1.0
  - @twilio-paste/badge@1.1.0
  - @twilio-paste/checkbox@6.1.1
  - @twilio-paste/disclosure@5.1.1
  - @twilio-paste/display-pill-group@1.1.1
  - @twilio-paste/form-pill-group@1.1.1
  - @twilio-paste/input@3.1.1
  - @twilio-paste/menu@7.0.4
  - @twilio-paste/modal@7.1.3
  - @twilio-paste/popover@6.1.1
  - @twilio-paste/radio-group@6.1.0
  - @twilio-paste/select@5.1.1
  - @twilio-paste/spinner@7.2.1
  - @twilio-paste/tooltip@4.1.1
  - @twilio-paste/menu-primitive@0.2.5
  - @twilio-paste/theme@5.3.1
  - @twilio-paste/text@4.1.4

## 10.14.0

### Minor Changes

- [`dd964dc7`](https://github.com/twilio-labs/paste/commit/dd964dc7d589313237f5a4926800646953d2e9fa) [#1899](https://github.com/twilio-labs/paste/pull/1899) Thanks [@gloriliale](https://github.com/gloriliale)! - [Inline-Control-Group] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`7f8afb28`](https://github.com/twilio-labs/paste/commit/7f8afb28f6f63f4d98d668c1ad8be0411411c1ba) [#1907](https://github.com/twilio-labs/paste/pull/1907) Thanks [@zahnster](https://github.com/zahnster)! - [Alert] Enable component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author."

- [`d13c1095`](https://github.com/twilio-labs/paste/commit/d13c10956420897e8215630bc713c1105dfdfe21) [#1911](https://github.com/twilio-labs/paste/pull/1911) Thanks [@andipants12](https://github.com/andipants12)! - [paste-design-tokens] Added the following tokens for usage with the Connectivity variant and status pattern:

  - color-text-icon-available:
  - color-text-icon-busy
  - color-text-icon-unavailable
  - color-text-icon-offline

* [`db9f9665`](https://github.com/twilio-labs/paste/commit/db9f96657c8e3d9230ef17e1a0ab4658b6016dca) [#1915](https://github.com/twilio-labs/paste/pull/1915) Thanks [@zahnster](https://github.com/zahnster)! - [Popover] Enable component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`b9658287`](https://github.com/twilio-labs/paste/commit/b96582875b124d953164b0c98cafa079b53e7d70) [#1899](https://github.com/twilio-labs/paste/pull/1899) Thanks [@gloriliale](https://github.com/gloriliale)! - [Checkbox] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- Updated dependencies [[`dd964dc7`](https://github.com/twilio-labs/paste/commit/dd964dc7d589313237f5a4926800646953d2e9fa), [`7f8afb28`](https://github.com/twilio-labs/paste/commit/7f8afb28f6f63f4d98d668c1ad8be0411411c1ba), [`d13c1095`](https://github.com/twilio-labs/paste/commit/d13c10956420897e8215630bc713c1105dfdfe21), [`db9f9665`](https://github.com/twilio-labs/paste/commit/db9f96657c8e3d9230ef17e1a0ab4658b6016dca), [`b9658287`](https://github.com/twilio-labs/paste/commit/b96582875b124d953164b0c98cafa079b53e7d70)]:
  - @twilio-paste/inline-control-group@6.1.0
  - @twilio-paste/alert@7.1.0
  - @twilio-paste/design-tokens@6.13.0
  - @twilio-paste/popover@6.1.0
  - @twilio-paste/checkbox@6.1.0

## 10.13.0

### Minor Changes

- [`420c78fc`](https://github.com/twilio-labs/paste/commit/420c78fc0f37a2a9189bbb97d77d80f6a58515cd) [#1889](https://github.com/twilio-labs/paste/pull/1889) Thanks [@gloriliale](https://github.com/gloriliale)! - [Tooltip] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`bec21fa0`](https://github.com/twilio-labs/paste/commit/bec21fa0e7d247202994d962d504ef1bb32f22e4) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Added 'shadow-focus-inset', a box-shadow token representing an inset focus outline.

- [`8e0037ab`](https://github.com/twilio-labs/paste/commit/8e0037ab6c83e5b552758444fc9a5338437aeb00) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Display Pill Group] Updated design for display and form pills, improving interactive states such as focus, hover and selected

* [`d7003b63`](https://github.com/twilio-labs/paste/commit/d7003b633068654591b68748ece3d0ac8a80c402) [#1880](https://github.com/twilio-labs/paste/pull/1880) Thanks [@TheSisb](https://github.com/TheSisb)! - [Pagination] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`1e9a9583`](https://github.com/twilio-labs/paste/commit/1e9a9583c4957a401b9a808565395269d711e336) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Form Pill Group] Updated design for display and form pills, improving interactive states such as focus, hover and selected

* [`49a0db69`](https://github.com/twilio-labs/paste/commit/49a0db696408a9fa05d7c02c29cf70bd7defc294) [#1894](https://github.com/twilio-labs/paste/pull/1894) Thanks [@andipants12](https://github.com/andipants12)! - [Spinner]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`9adf3edd`](https://github.com/twilio-labs/paste/commit/9adf3edd88598aa3e8de3f6dd027371a2e54d368) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Adding "@twilio-paste/data-grid", an accessible and responsive data grid component to Paste.

* [`36cc8dce`](https://github.com/twilio-labs/paste/commit/36cc8dce42f4abe357779c6fb80af6c2cd6abd52) [#1895](https://github.com/twilio-labs/paste/pull/1895) Thanks [@andipants12](https://github.com/andipants12)! - [Breadcrumb] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`52779450`](https://github.com/twilio-labs/paste/commit/52779450c531d21d1da2413c37c0374580d5a062) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Added a new Paste package: @twilio-paste/utils. This package contains utilities such as React hooks that are used within or alongside Paste components.

* [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd) [#1886](https://github.com/twilio-labs/paste/pull/1886) Thanks [@andipants12](https://github.com/andipants12)! - [Select]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`3a5a90b7`](https://github.com/twilio-labs/paste/commit/3a5a90b74201fece264c2a07344810d52c7b3bc4) [#1897](https://github.com/twilio-labs/paste/pull/1897) Thanks [@nkrantz](https://github.com/nkrantz)! - [Combobox] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`a8ba78e4`](https://github.com/twilio-labs/paste/commit/a8ba78e469b839fe4e920bb75f6909ae005b16cd) [#1903](https://github.com/twilio-labs/paste/pull/1903) Thanks [@andipants12](https://github.com/andipants12)! - [Modal] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd) [#1886](https://github.com/twilio-labs/paste/pull/1886) Thanks [@andipants12](https://github.com/andipants12)! - [InputBox] Remove duplicative prefix in chevron icon wrapper element name, and update name too better reflect the component's purpose.

* [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd) [#1886](https://github.com/twilio-labs/paste/pull/1886) Thanks [@andipants12](https://github.com/andipants12)! - [Combobox]: Update customization tests and stories to use more explicit a more explicit element name for the chevron wrapper. No consumer change required.

- [`7edfbcfb`](https://github.com/twilio-labs/paste/commit/7edfbcfb54ff9bedcaa1a3439461dd1a96665e07) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Minor performance improvement to the animation code.

* [`ca2a8669`](https://github.com/twilio-labs/paste/commit/ca2a8669b9d9ea57ccc5c39e234e13a9dc59ab5b) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Replaced deprecated 'HTMLTableHeaderCellElement' typing for 'HTMLTableCellElement' in Th component.

- [`ba307e2f`](https://github.com/twilio-labs/paste/commit/ba307e2f3b4f4f3dc932fe0f71a1b680fc06b521) [#1887](https://github.com/twilio-labs/paste/pull/1887) Thanks [@nkrantz](https://github.com/nkrantz)! - [BaseRadioCheckbox] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`b2b0f792`](https://github.com/twilio-labs/paste/commit/b2b0f79272b5a7f2159218bc7f519b01a445ca7e) [#1887](https://github.com/twilio-labs/paste/pull/1887) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`d1126c27`](https://github.com/twilio-labs/paste/commit/d1126c278bb14788208b998257a29806edf40ca8) [#1900](https://github.com/twilio-labs/paste/pull/1900) Thanks [@andipants12](https://github.com/andipants12)! - [Menu]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`da38673e`](https://github.com/twilio-labs/paste/commit/da38673e0726010eecaafc4762e927180ab3e120) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Adding lodash.debounce and lodash.iselement typings to @twilio-paste/types

- [`28f12236`](https://github.com/twilio-labs/paste/commit/28f122360e1e474b60b44837fe427d0f05f55c88) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixes a browser quirk around responsive 'fieldset' HTML elements.

* [`9d32315e`](https://github.com/twilio-labs/paste/commit/9d32315e2aee4176fb4b27aac6a131582a0e0bb9) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Added three new pseudo selectors to be used on Box and Text. You can now style selected and hover, selected and focus
  and selected and focus-visible
* Updated dependencies [[`3a5a90b7`](https://github.com/twilio-labs/paste/commit/3a5a90b74201fece264c2a07344810d52c7b3bc4), [`420c78fc`](https://github.com/twilio-labs/paste/commit/420c78fc0f37a2a9189bbb97d77d80f6a58515cd), [`a8ba78e4`](https://github.com/twilio-labs/paste/commit/a8ba78e469b839fe4e920bb75f6909ae005b16cd), [`bec21fa0`](https://github.com/twilio-labs/paste/commit/bec21fa0e7d247202994d962d504ef1bb32f22e4), [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd), [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd), [`7edfbcfb`](https://github.com/twilio-labs/paste/commit/7edfbcfb54ff9bedcaa1a3439461dd1a96665e07), [`8e0037ab`](https://github.com/twilio-labs/paste/commit/8e0037ab6c83e5b552758444fc9a5338437aeb00), [`d7003b63`](https://github.com/twilio-labs/paste/commit/d7003b633068654591b68748ece3d0ac8a80c402), [`1e9a9583`](https://github.com/twilio-labs/paste/commit/1e9a9583c4957a401b9a808565395269d711e336), [`ca2a8669`](https://github.com/twilio-labs/paste/commit/ca2a8669b9d9ea57ccc5c39e234e13a9dc59ab5b), [`49a0db69`](https://github.com/twilio-labs/paste/commit/49a0db696408a9fa05d7c02c29cf70bd7defc294), [`ba307e2f`](https://github.com/twilio-labs/paste/commit/ba307e2f3b4f4f3dc932fe0f71a1b680fc06b521), [`9adf3edd`](https://github.com/twilio-labs/paste/commit/9adf3edd88598aa3e8de3f6dd027371a2e54d368), [`b2b0f792`](https://github.com/twilio-labs/paste/commit/b2b0f79272b5a7f2159218bc7f519b01a445ca7e), [`36cc8dce`](https://github.com/twilio-labs/paste/commit/36cc8dce42f4abe357779c6fb80af6c2cd6abd52), [`d1126c27`](https://github.com/twilio-labs/paste/commit/d1126c278bb14788208b998257a29806edf40ca8), [`da38673e`](https://github.com/twilio-labs/paste/commit/da38673e0726010eecaafc4762e927180ab3e120), [`28f12236`](https://github.com/twilio-labs/paste/commit/28f122360e1e474b60b44837fe427d0f05f55c88), [`9d32315e`](https://github.com/twilio-labs/paste/commit/9d32315e2aee4176fb4b27aac6a131582a0e0bb9), [`52779450`](https://github.com/twilio-labs/paste/commit/52779450c531d21d1da2413c37c0374580d5a062), [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd)]:
  - @twilio-paste/combobox@8.0.2
  - @twilio-paste/tooltip@4.1.0
  - @twilio-paste/modal@7.1.2
  - @twilio-paste/design-tokens@6.12.0
  - @twilio-paste/input-box@4.1.1
  - @twilio-paste/skeleton-loader@0.1.2
  - @twilio-paste/display-pill-group@1.1.0
  - @twilio-paste/pagination@0.2.0
  - @twilio-paste/form-pill-group@1.1.0
  - @twilio-paste/table@2.1.1
  - @twilio-paste/spinner@7.2.0
  - @twilio-paste/base-radio-checkbox@6.0.4
  - @twilio-paste/data-grid@0.1.0
  - @twilio-paste/button@7.0.9
  - @twilio-paste/breadcrumb@4.1.0
  - @twilio-paste/menu@7.0.3
  - @twilio-paste/types@3.1.2
  - @twilio-paste/inline-control-group@6.0.4
  - @twilio-paste/box@4.2.4
  - @twilio-paste/text@4.1.3
  - @twilio-paste/utils@1.1.0
  - @twilio-paste/select@5.1.0

## 10.12.0

### Minor Changes

- [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508) [#1816](https://github.com/twilio-labs/paste/pull/1816) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Date picker] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`01233345`](https://github.com/twilio-labs/paste/commit/012333451cc36383cd4dc6f79fb1e678da676d66) [#1840](https://github.com/twilio-labs/paste/pull/1840) Thanks [@andipants12](https://github.com/andipants12)! - [Tabs]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`08859377`](https://github.com/twilio-labs/paste/commit/0885937786a51d7ec93624780f6c6c6ffc7f489b) [#1858](https://github.com/twilio-labs/paste/pull/1858) Thanks [@andipants12](https://github.com/andipants12)! - [Spinner]: Our existing Spinner is looking quite dated, so this PR refreshes the appearance of it. There are no breaking changes, so Paste consumers will be happy to see a refreshed Spinner in their apps without any effort.

* [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508) [#1816](https://github.com/twilio-labs/paste/pull/1816) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Time-picker] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508) [#1816](https://github.com/twilio-labs/paste/pull/1816) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Textarea] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`cba9f8fe`](https://github.com/twilio-labs/paste/commit/cba9f8fe8380f24b6f849eefc3c734fbdb8fd555) [#1852](https://github.com/twilio-labs/paste/pull/1852) Thanks [@nkrantz](https://github.com/nkrantz)! - [Help-Text] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`d387eda8`](https://github.com/twilio-labs/paste/commit/d387eda82cf3d77dbcd5df60cad2a6f5bb0e5e9e) [#1860](https://github.com/twilio-labs/paste/pull/1860) Thanks [@gloriliale](https://github.com/gloriliale)! - [Disclosure] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`8006c59b`](https://github.com/twilio-labs/paste/commit/8006c59b6e56633405c0835707da6704169b26e9) [#1835](https://github.com/twilio-labs/paste/pull/1835) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast] Icons in Toast now use text icon color tokens.

* [`1ce8e1d3`](https://github.com/twilio-labs/paste/commit/1ce8e1d3768cede4d1e780d80b04a29477dd87d0) [#1835](https://github.com/twilio-labs/paste/pull/1835) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert] Icons in Alert now use text icon color tokens

- [`866cf8f1`](https://github.com/twilio-labs/paste/commit/866cf8f1dd7f2dffa53dfb4ab94b4f06b659e6db) [#1835](https://github.com/twilio-labs/paste/pull/1835) Thanks [@nkrantz](https://github.com/nkrantz)! - [Design tokens] Text, background, and icon color tokens are updated to meet accessibility guidelines.

* [`d387eda8`](https://github.com/twilio-labs/paste/commit/d387eda82cf3d77dbcd5df60cad2a6f5bb0e5e9e) [#1860](https://github.com/twilio-labs/paste/pull/1860) Thanks [@gloriliale](https://github.com/gloriliale)! - [Card]: updated the props to include variant to help with customizing dependent components.

- [`16b53ea1`](https://github.com/twilio-labs/paste/commit/16b53ea1a6d4530a60ef1db6d715b6bb9de29f3b) [#1878](https://github.com/twilio-labs/paste/pull/1878) Thanks [@nkrantz](https://github.com/nkrantz)! - [Label] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508) [#1816](https://github.com/twilio-labs/paste/pull/1816) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box] exports the getCustomElementStyles utility function

* Updated dependencies [[`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508), [`01233345`](https://github.com/twilio-labs/paste/commit/012333451cc36383cd4dc6f79fb1e678da676d66), [`8006c59b`](https://github.com/twilio-labs/paste/commit/8006c59b6e56633405c0835707da6704169b26e9), [`1ce8e1d3`](https://github.com/twilio-labs/paste/commit/1ce8e1d3768cede4d1e780d80b04a29477dd87d0), [`08859377`](https://github.com/twilio-labs/paste/commit/0885937786a51d7ec93624780f6c6c6ffc7f489b), [`866cf8f1`](https://github.com/twilio-labs/paste/commit/866cf8f1dd7f2dffa53dfb4ab94b4f06b659e6db), [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508), [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508), [`cba9f8fe`](https://github.com/twilio-labs/paste/commit/cba9f8fe8380f24b6f849eefc3c734fbdb8fd555), [`d387eda8`](https://github.com/twilio-labs/paste/commit/d387eda82cf3d77dbcd5df60cad2a6f5bb0e5e9e), [`16b53ea1`](https://github.com/twilio-labs/paste/commit/16b53ea1a6d4530a60ef1db6d715b6bb9de29f3b), [`d387eda8`](https://github.com/twilio-labs/paste/commit/d387eda82cf3d77dbcd5df60cad2a6f5bb0e5e9e), [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508)]:
  - @twilio-paste/date-picker@0.2.0
  - @twilio-paste/tabs@2.1.0
  - @twilio-paste/toast@5.1.1
  - @twilio-paste/alert@7.0.2
  - @twilio-paste/spinner@7.1.0
  - @twilio-paste/design-tokens@6.11.2
  - @twilio-paste/time-picker@0.2.0
  - @twilio-paste/textarea@3.1.0
  - @twilio-paste/help-text@6.1.0
  - @twilio-paste/card@3.1.1
  - @twilio-paste/label@6.0.5
  - @twilio-paste/disclosure@5.1.0
  - @twilio-paste/box@4.2.3

## 10.11.0

### Minor Changes

- [`63a39e0c`](https://github.com/twilio-labs/paste/commit/63a39e0c86d5c7683420f373eb3ed71e02e621aa) [#1818](https://github.com/twilio-labs/paste/pull/1818) Thanks [@TheSisb](https://github.com/TheSisb)! - [Toast] The `useToaster` push method now allows passing in an `onDismiss` callback function.

* [`f0737a27`](https://github.com/twilio-labs/paste/commit/f0737a279663a774e4d0a4beaa70ee6c11a55da7) [#1817](https://github.com/twilio-labs/paste/pull/1817) Thanks [@andipants12](https://github.com/andipants12)! - [Table]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`1cf0ee5f`](https://github.com/twilio-labs/paste/commit/1cf0ee5fb4d969474de7a3c299706d1fbdcf0482) [#1810](https://github.com/twilio-labs/paste/pull/1810) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Sibling Box] Enable SiblingBox to respect element customizations set on the customization provider. SiblingBox now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`9ed68c88`](https://github.com/twilio-labs/paste/commit/9ed68c886cd0992ff32b5aceff59c1f62a661e69) [#1826](https://github.com/twilio-labs/paste/pull/1826) Thanks [@andipants12](https://github.com/andipants12)! - [Button]: Link, Destructive link, and inverse destructive link button variants should have left aligned text.

- [`30160725`](https://github.com/twilio-labs/paste/commit/30160725ecdb5a028f15a162c7a6806b7bc7b178) [#1774](https://github.com/twilio-labs/paste/pull/1774) Thanks [@nkrantz](https://github.com/nkrantz)! - Added an alias for orange-65 and added the following text color tokens for icons:

  - color-text-icon-error -> red-60 (default) / red-40 (dark)
  - color-text-icon-success -> green-70 (default) / green-50 (dark)
  - color-text-icon-warning -> orange-65 (default) / orange-40 (dark)
  - color-text-icon-neutral -> blue-80 (default) / blue-40 (dark)
  - color-text-icon-brand-highlight -> amaranth
  - color-text-icon-brand-inverse -> gray-0

* [`ef450904`](https://github.com/twilio-labs/paste/commit/ef450904d727da5d1ddffc770a16a25c4a947247) [#1831](https://github.com/twilio-labs/paste/pull/1831) Thanks [@andipants12](https://github.com/andipants12)! - [Disclosure] Add z-index to Disclosure Heading to fix flash that occurs when disclosure content renders and the z-indeces are recalculated.

- [`ab55fa27`](https://github.com/twilio-labs/paste/commit/ab55fa270f982ad867a5933dcea8ee240e780fed) [#1814](https://github.com/twilio-labs/paste/pull/1814) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Skeleton-loader] Enable Compoonent to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- Updated dependencies [[`1cf0ee5f`](https://github.com/twilio-labs/paste/commit/1cf0ee5fb4d969474de7a3c299706d1fbdcf0482), [`9ed68c88`](https://github.com/twilio-labs/paste/commit/9ed68c886cd0992ff32b5aceff59c1f62a661e69), [`30160725`](https://github.com/twilio-labs/paste/commit/30160725ecdb5a028f15a162c7a6806b7bc7b178), [`ef450904`](https://github.com/twilio-labs/paste/commit/ef450904d727da5d1ddffc770a16a25c4a947247), [`63a39e0c`](https://github.com/twilio-labs/paste/commit/63a39e0c86d5c7683420f373eb3ed71e02e621aa), [`ab55fa27`](https://github.com/twilio-labs/paste/commit/ab55fa270f982ad867a5933dcea8ee240e780fed), [`f0737a27`](https://github.com/twilio-labs/paste/commit/f0737a279663a774e4d0a4beaa70ee6c11a55da7)]:
  - @twilio-paste/sibling-box@3.0.4
  - @twilio-paste/button@7.0.8
  - @twilio-paste/design-tokens@6.11.1
  - @twilio-paste/disclosure@5.0.7
  - @twilio-paste/toast@5.1.0
  - @twilio-paste/skeleton-loader@0.1.1
  - @twilio-paste/table@2.1.0

## 10.10.1

### Patch Changes

- [`fe4a2383`](https://github.com/twilio-labs/paste/commit/fe4a23834e9aecf2ab249651e8713ae5d37e8d3d) [#1824](https://github.com/twilio-labs/paste/pull/1824) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Combobox], [Select] and [Textarea] all given a default element name to meet their PropTypes validation.

- Updated dependencies [[`fe4a2383`](https://github.com/twilio-labs/paste/commit/fe4a23834e9aecf2ab249651e8713ae5d37e8d3d)]:
  - @twilio-paste/combobox@8.0.1
  - @twilio-paste/select@5.0.6
  - @twilio-paste/textarea@3.0.7

## 10.10.0

### Minor Changes

- [`ca0bf618`](https://github.com/twilio-labs/paste/commit/ca0bf6188ad7ac3375bec75d6461924b13edb391) [#1800](https://github.com/twilio-labs/paste/pull/1800) Thanks [@TheSisb](https://github.com/TheSisb)! - [DisplayPillGroup]: Adding this new Paste component package for Display Pill Group.

* [`a0cf511c`](https://github.com/twilio-labs/paste/commit/a0cf511c0078df0441d859939e9002a5e0b3431d) [#1799](https://github.com/twilio-labs/paste/pull/1799) Thanks [@vnguyen94](https://github.com/vnguyen94)! - adds the clipboard-copy library; this will provide baseline functionality for developers to intuitively interact with the Clipboard API.

- [`c9cc610b`](https://github.com/twilio-labs/paste/commit/c9cc610b6834fd9be22488e8e727ee65b1114aa0) [#1790](https://github.com/twilio-labs/paste/pull/1790) Thanks [@andipants12](https://github.com/andipants12)! - [Combobox Primitive] expose useMultiSelectPrimitive

* [`06bae4e2`](https://github.com/twilio-labs/paste/commit/06bae4e21077a32a6eeb059941f8717c76d76ce0) [#1803](https://github.com/twilio-labs/paste/pull/1803) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] Adding the FormPillGroup component package. This component renders is a collection of Pills that can be selected or removed from within a data entry form.

- [`9ceb48bd`](https://github.com/twilio-labs/paste/commit/9ceb48bd5d7c7d1f60bb3371085651c220e20f35) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Input] Enable Input to respect element customizations set on the customization provider. Input now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`18c1f595`](https://github.com/twilio-labs/paste/commit/18c1f595e03d6152789342d1fc05942201cec5d3) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Input-box] Enable InputBox, Prefix and Suffix to respect element customizations set on the customization provider. InputBox, Prefix and Suffix now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`af3b1e55`](https://github.com/twilio-labs/paste/commit/af3b1e558fc438352b47098d7d085d7eeffbfa51) [#1801](https://github.com/twilio-labs/paste/pull/1801) Thanks [@andipants12](https://github.com/andipants12)! - [Button] All link variants should have left aligned text.

* [`e3398bd5`](https://github.com/twilio-labs/paste/commit/e3398bd5aaa84aaabe934bcad061cda705cdbe0a) [#1783](https://github.com/twilio-labs/paste/pull/1783) Thanks [@andipants12](https://github.com/andipants12)! - [Badge]: Update badge container div max width value to be "fit-content"

- [`2eb6dd74`](https://github.com/twilio-labs/paste/commit/2eb6dd74eb1cdc06079e64a711e71b93d4f9c823) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Combobox] Added the `element` prop for customization in order to fix a Typescript error after the `element` prop was added as a required prop for `InputBox`. This does not include any default naming, tests, or stories. It only fixes the Typescript error.

* [`0347aef6`](https://github.com/twilio-labs/paste/commit/0347aef6e8100f9dbc2bcd8830dd5c81b4de5a03) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [TextArea] Added the `element` prop for customization in order to fix a Typescript error after the `element` prop was added as a required prop for `InputBox`. This does not include any default naming, tests, or stories. It only fixes the Typescript error.

- [`4964821b`](https://github.com/twilio-labs/paste/commit/4964821bd7a2d0fc267b4daf2eef5f1810d8f534) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Box] Added the following style props to support input:

  - PsuedoProps:

    - \_\_webkit_datetime_edit
    - \_\_webkit_calendar_picker_indicator_hover

  - StyleProps:
    - -webkit-text-fill-color
    - -webkit-opacity

* [`a5c17a31`](https://github.com/twilio-labs/paste/commit/a5c17a313ba1cca7f0d48a3b3ae64d8ceddae53f) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Select] Added the `element` prop for customization in order to fix a Typescript error after the `element` prop was added as a required prop for `InputBox` and `InputChevronWrapper`. This does not include any default naming, tests, or stories. It only fixes the Typescript error.

* Updated dependencies [[`ca0bf618`](https://github.com/twilio-labs/paste/commit/ca0bf6188ad7ac3375bec75d6461924b13edb391), [`af3b1e55`](https://github.com/twilio-labs/paste/commit/af3b1e558fc438352b47098d7d085d7eeffbfa51), [`e3398bd5`](https://github.com/twilio-labs/paste/commit/e3398bd5aaa84aaabe934bcad061cda705cdbe0a), [`a0cf511c`](https://github.com/twilio-labs/paste/commit/a0cf511c0078df0441d859939e9002a5e0b3431d), [`2eb6dd74`](https://github.com/twilio-labs/paste/commit/2eb6dd74eb1cdc06079e64a711e71b93d4f9c823), [`c9cc610b`](https://github.com/twilio-labs/paste/commit/c9cc610b6834fd9be22488e8e727ee65b1114aa0), [`0347aef6`](https://github.com/twilio-labs/paste/commit/0347aef6e8100f9dbc2bcd8830dd5c81b4de5a03), [`06bae4e2`](https://github.com/twilio-labs/paste/commit/06bae4e21077a32a6eeb059941f8717c76d76ce0), [`4964821b`](https://github.com/twilio-labs/paste/commit/4964821bd7a2d0fc267b4daf2eef5f1810d8f534), [`a5c17a31`](https://github.com/twilio-labs/paste/commit/a5c17a313ba1cca7f0d48a3b3ae64d8ceddae53f), [`9ceb48bd`](https://github.com/twilio-labs/paste/commit/9ceb48bd5d7c7d1f60bb3371085651c220e20f35), [`18c1f595`](https://github.com/twilio-labs/paste/commit/18c1f595e03d6152789342d1fc05942201cec5d3)]:
  - @twilio-paste/display-pill-group@1.0.0
  - @twilio-paste/button@7.0.7
  - @twilio-paste/badge@1.0.1
  - @twilio-paste/clipboard-copy-library@1.0.0
  - @twilio-paste/combobox@8.0.0
  - @twilio-paste/combobox-primitive@0.3.0
  - @twilio-paste/textarea@3.0.6
  - @twilio-paste/form-pill-group@1.0.0
  - @twilio-paste/box@4.2.2
  - @twilio-paste/select@5.0.5
  - @twilio-paste/input@3.1.0
  - @twilio-paste/input-box@4.1.0

## 10.9.0

### Minor Changes

- [`72c5ce66`](https://github.com/twilio-labs/paste/commit/72c5ce66c1098311d7d9e4a0d6ea2bd62eda9632) [#1766](https://github.com/twilio-labs/paste/pull/1766) Thanks [@richbachman](https://github.com/richbachman)! - [Paragraph] Enable Paragraph to respect element customizations set on the customization provider. Paragraph now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`2d61c95d`](https://github.com/twilio-labs/paste/commit/2d61c95d09473298e76909b1d20bc705a4e48744) [#1766](https://github.com/twilio-labs/paste/pull/1766) Thanks [@richbachman](https://github.com/richbachman)! - [Heading] Enable Heading to respect element customizations set on the customization provider. Heading now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`cb3d14ce`](https://github.com/twilio-labs/paste/commit/cb3d14ce95f8fbdfcf86f9ba7a85b3a2f4856e95) [#1766](https://github.com/twilio-labs/paste/pull/1766) Thanks [@richbachman](https://github.com/richbachman)! - [List] Enable UnorderedList, OrderedList and ListItem to respect element customizations set on the customization provider. UnorderedList, OrderedList and ListItem now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`7350eed5`](https://github.com/twilio-labs/paste/commit/7350eed570e8ee36bcd330397df600cbfbdade4a) [#1781](https://github.com/twilio-labs/paste/pull/1781) Thanks [@richbachman](https://github.com/richbachman)! - [Separator] Enable Separator to respect element customizations set on the customization provider. Separator now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`8654c408`](https://github.com/twilio-labs/paste/commit/8654c408faec07eed80b49536c95a214e6606400) [#1785](https://github.com/twilio-labs/paste/pull/1785) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box]: Box now handles the case where a variant being set on the component, does not appear in the elements object set on the Customization Provider

* [`7a1ed203`](https://github.com/twilio-labs/paste/commit/7a1ed20300159fa095c197cef4dcd28c92369814) [#1785](https://github.com/twilio-labs/paste/pull/1785) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Text now handles the case where a variant being set on the component, does not appear in the elements object set on the Customization Provider

* Updated dependencies [[`72c5ce66`](https://github.com/twilio-labs/paste/commit/72c5ce66c1098311d7d9e4a0d6ea2bd62eda9632), [`8654c408`](https://github.com/twilio-labs/paste/commit/8654c408faec07eed80b49536c95a214e6606400), [`7a1ed203`](https://github.com/twilio-labs/paste/commit/7a1ed20300159fa095c197cef4dcd28c92369814), [`2d61c95d`](https://github.com/twilio-labs/paste/commit/2d61c95d09473298e76909b1d20bc705a4e48744), [`cb3d14ce`](https://github.com/twilio-labs/paste/commit/cb3d14ce95f8fbdfcf86f9ba7a85b3a2f4856e95), [`7350eed5`](https://github.com/twilio-labs/paste/commit/7350eed570e8ee36bcd330397df600cbfbdade4a)]:
  - @twilio-paste/paragraph@4.1.0
  - @twilio-paste/box@4.2.1
  - @twilio-paste/text@4.1.2
  - @twilio-paste/heading@5.1.0
  - @twilio-paste/list@2.1.0
  - @twilio-paste/separator@2.1.0

## 10.8.0

### Minor Changes

- [`14c6fd2e`](https://github.com/twilio-labs/paste/commit/14c6fd2e73e33b86fc49b4e6979afa007833ff89) [#1743](https://github.com/twilio-labs/paste/pull/1743) Thanks [@andipants12](https://github.com/andipants12)! - [Box] Add column-gap and row-gap (CSS grid, flex box) to Box API.

* [`a6df510d`](https://github.com/twilio-labs/paste/commit/a6df510dffb3706e5132ea04d8f875f313798ee0) [#1743](https://github.com/twilio-labs/paste/pull/1743) Thanks [@andipants12](https://github.com/andipants12)! - [Style Props] add types for column gap and row gap

- [`14c6fd2e`](https://github.com/twilio-labs/paste/commit/14c6fd2e73e33b86fc49b4e6979afa007833ff89) [#1743](https://github.com/twilio-labs/paste/pull/1743) Thanks [@andipants12](https://github.com/andipants12)! - [Badge] Release Stage 1 of Badge component. A badge is a small chunk of information that describes an object in a visually highlighted way.

### Patch Changes

- Updated dependencies [[`14c6fd2e`](https://github.com/twilio-labs/paste/commit/14c6fd2e73e33b86fc49b4e6979afa007833ff89), [`a6df510d`](https://github.com/twilio-labs/paste/commit/a6df510dffb3706e5132ea04d8f875f313798ee0), [`14c6fd2e`](https://github.com/twilio-labs/paste/commit/14c6fd2e73e33b86fc49b4e6979afa007833ff89)]:
  - @twilio-paste/box@4.2.0
  - @twilio-paste/style-props@3.1.0
  - @twilio-paste/badge@1.0.0

## 10.7.0

### Minor Changes

- [`d14381b9`](https://github.com/twilio-labs/paste/commit/d14381b96ab3e83d4987b91db755ed27d315b3c6) [#1742](https://github.com/twilio-labs/paste/pull/1742) Thanks [@gloriliale](https://github.com/gloriliale)! - [Avatar] Enable Avatar to respect customizations set on the customization provider. Avatar now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`5374cd7b`](https://github.com/twilio-labs/paste/commit/5374cd7b261431b337a53ce26850fda242812e19) [#1733](https://github.com/twilio-labs/paste/pull/1733) Thanks [@TheSisb](https://github.com/TheSisb)! - [Anchor] Enable Anchor to respect element customizations set on the customization provider. Anchor now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`86c567bc`](https://github.com/twilio-labs/paste/commit/86c567bc8af556e7aa085789968b7823c0c01869) [#1734](https://github.com/twilio-labs/paste/pull/1734) Thanks [@richbachman](https://github.com/richbachman)! - [Grid] Enable Grid and Column to respect element customizations set on the customization provider. Grid, and Column now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

  `Column` has been refactored to use `Box` instead of being a styled div.

* [`5e46a5eb`](https://github.com/twilio-labs/paste/commit/5e46a5eb8c8af94bf7362156dd29016a3281672a) [#1722](https://github.com/twilio-labs/paste/pull/1722) Thanks [@zahnster](https://github.com/zahnster)! - [Stack] Enable stack and stack children to respect element customizations set on the customization provider. Stack and stack children now enable setting an element name on the underlying HTML element, and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

- [`53e9583f`](https://github.com/twilio-labs/paste/commit/53e9583f3330c201db56f0ffd1bdcd736a7044da) [#1726](https://github.com/twilio-labs/paste/pull/1726) Thanks [@richbachman](https://github.com/richbachman)! - [Card] Enable Card to respect element customizations set on the customization provider. Card now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`9f1f99ca`](https://github.com/twilio-labs/paste/commit/9f1f99cae442bc9fd1c658cc85ad64695d61870a) [#1723](https://github.com/twilio-labs/paste/pull/1723) Thanks [@nkrantz](https://github.com/nkrantz)! - [Flex] Enable Flex to respect element customizations set on the customization provider. Flex now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`b02b0d60`](https://github.com/twilio-labs/paste/commit/b02b0d606ce308a15e933fe433b6b655e45348e1) [#1685](https://github.com/twilio-labs/paste/pull/1685) Thanks [@andipants12](https://github.com/andipants12)! - [Grid] Fix to apply gutter value to top/bottom padding for vertical grid.

* [`b0e8ab80`](https://github.com/twilio-labs/paste/commit/b0e8ab80d557f102ed5bed3a693d0e53eb99a7c3) [#1725](https://github.com/twilio-labs/paste/pull/1725) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Allow Downshift to handle input events past by the component consumer. This allows for event data and internal state of the combobox to stay in sync correctly

- [`0bfba62d`](https://github.com/twilio-labs/paste/commit/0bfba62d66efe74fc410216f62e67fdd5ab11bea) [#1720](https://github.com/twilio-labs/paste/pull/1720) Thanks [@TheSisb](https://github.com/TheSisb)! - The Popover's close button will now always be the first focus upon opening.

- Updated dependencies [[`d14381b9`](https://github.com/twilio-labs/paste/commit/d14381b96ab3e83d4987b91db755ed27d315b3c6), [`5374cd7b`](https://github.com/twilio-labs/paste/commit/5374cd7b261431b337a53ce26850fda242812e19), [`86c567bc`](https://github.com/twilio-labs/paste/commit/86c567bc8af556e7aa085789968b7823c0c01869), [`5e46a5eb`](https://github.com/twilio-labs/paste/commit/5e46a5eb8c8af94bf7362156dd29016a3281672a), [`53e9583f`](https://github.com/twilio-labs/paste/commit/53e9583f3330c201db56f0ffd1bdcd736a7044da), [`b02b0d60`](https://github.com/twilio-labs/paste/commit/b02b0d606ce308a15e933fe433b6b655e45348e1), [`9f1f99ca`](https://github.com/twilio-labs/paste/commit/9f1f99cae442bc9fd1c658cc85ad64695d61870a), [`b0e8ab80`](https://github.com/twilio-labs/paste/commit/b0e8ab80d557f102ed5bed3a693d0e53eb99a7c3), [`0bfba62d`](https://github.com/twilio-labs/paste/commit/0bfba62d66efe74fc410216f62e67fdd5ab11bea)]:
  - @twilio-paste/avatar@2.2.0
  - @twilio-paste/anchor@5.1.0
  - @twilio-paste/grid@2.1.0
  - @twilio-paste/stack@2.1.0
  - @twilio-paste/card@3.1.0
  - @twilio-paste/flex@2.1.0
  - @twilio-paste/combobox@7.0.4
  - @twilio-paste/popover@6.0.4

## 10.6.0

### Minor Changes

- [`a2860c3b`](https://github.com/twilio-labs/paste/commit/a2860c3bf7dba4cf26d94b8bd5b82fa627a2f4ac) [#1708](https://github.com/twilio-labs/paste/pull/1708) Thanks [@nkrantz](https://github.com/nkrantz)! - Add `color-border-inverse-strong` and `shadow-border-inverse-stronger`, adjust `shadow-border-inverse-strong` to align color-border tokens and shadow-border tokens.

### Patch Changes

- [`1a7fcfbc`](https://github.com/twilio-labs/paste/commit/1a7fcfbc60601b277f1fec435f43c9f53e05025a) [#1708](https://github.com/twilio-labs/paste/pull/1708) Thanks [@nkrantz](https://github.com/nkrantz)! - Update inverse button to use `shadow-border-inverse-strongest` on hover

- Updated dependencies [[`1a7fcfbc`](https://github.com/twilio-labs/paste/commit/1a7fcfbc60601b277f1fec435f43c9f53e05025a), [`a2860c3b`](https://github.com/twilio-labs/paste/commit/a2860c3bf7dba4cf26d94b8bd5b82fa627a2f4ac)]:
  - @twilio-paste/button@7.0.6
  - @twilio-paste/design-tokens@6.11.0

## 10.5.1

### Patch Changes

- [`b04e98b1`](https://github.com/twilio-labs/paste/commit/b04e98b17f4e35016956280e1762267f82ad6c51) [#1693](https://github.com/twilio-labs/paste/pull/1693) Thanks [@nkrantz](https://github.com/nkrantz)! - Increase padding on popover content and decrease size of close icon

- Updated dependencies [[`b04e98b1`](https://github.com/twilio-labs/paste/commit/b04e98b17f4e35016956280e1762267f82ad6c51)]:
  - @twilio-paste/popover@6.0.3

## 10.5.0

### Minor Changes

- [`72f18ba1`](https://github.com/twilio-labs/paste/commit/72f18ba18e97a33ec8cf76f37cbf6092bbdb6fee) [#1676](https://github.com/twilio-labs/paste/pull/1676) Thanks [@richbachman](https://github.com/richbachman)! - [MediaObject] Enable media-object, media-figure, and media-body to respect element customizations set on the customization provider. Media-object, media-figure, and media-body now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`21c935aa`](https://github.com/twilio-labs/paste/commit/21c935aa83df06b43a65cfcb3ff7e53615946180) [#1681](https://github.com/twilio-labs/paste/pull/1681) Thanks [@gloriliale](https://github.com/gloriliale)! - Removed the deprecated Typography component package

### Patch Changes

- [`b6c1d692`](https://github.com/twilio-labs/paste/commit/b6c1d69277fecc660ce3281d82d37472a9015bff) [#1684](https://github.com/twilio-labs/paste/pull/1684) Thanks [@richbachman](https://github.com/richbachman)! - [AlertDialog]: added missing `@twilio-paste/uid-library` dependency.

* [`a6518f96`](https://github.com/twilio-labs/paste/commit/a6518f966747aa5bfa3a708ee894a9f4aef361a1) [#1684](https://github.com/twilio-labs/paste/pull/1684) Thanks [@richbachman](https://github.com/richbachman)! - [TimePicker]: added missing `date-fns` dependency.

* Updated dependencies [[`72f18ba1`](https://github.com/twilio-labs/paste/commit/72f18ba18e97a33ec8cf76f37cbf6092bbdb6fee), [`b6c1d692`](https://github.com/twilio-labs/paste/commit/b6c1d69277fecc660ce3281d82d37472a9015bff), [`a6518f96`](https://github.com/twilio-labs/paste/commit/a6518f966747aa5bfa3a708ee894a9f4aef361a1)]:
  - @twilio-paste/media-object@4.1.0
  - @twilio-paste/alert-dialog@0.1.2
  - @twilio-paste/time-picker@0.1.1

## 10.4.0

### Minor Changes

- [`c7d6fa75`](https://github.com/twilio-labs/paste/commit/c7d6fa7526ac10f98dbf406800513fd7af6c371d) [#1641](https://github.com/twilio-labs/paste/pull/1641) Thanks [@richbachman](https://github.com/richbachman)! - [skeleton-loader] Created skeleton loader component package.

### Patch Changes

- [`e4a8aef5`](https://github.com/twilio-labs/paste/commit/e4a8aef5253ee5df290cf106612a58bce7572ef3) [#1663](https://github.com/twilio-labs/paste/pull/1663) Thanks [@richbachman](https://github.com/richbachman)! - [Label] Updated package.json description.

* [`bf5ad8d6`](https://github.com/twilio-labs/paste/commit/bf5ad8d6ede2ba911a1aa45e39341c9137cb692c) [#1656](https://github.com/twilio-labs/paste/pull/1656) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Allow datetime html attribute to be a valid prop

- [`750a38e0`](https://github.com/twilio-labs/paste/commit/750a38e05b9d91f82b14f49a160112f013629468) [#1655](https://github.com/twilio-labs/paste/pull/1655) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Tooltip] Fix a bug where the Tooltip component was swallowing the event handlers of the child component it was wrapping

* [`e7cc5ca0`](https://github.com/twilio-labs/paste/commit/e7cc5ca09e8ec1cf913ae88e08c6ee4b616a056a) [#1675](https://github.com/twilio-labs/paste/pull/1675) Thanks [@richbachman](https://github.com/richbachman)! - [Pagination] Update styles for better dark theme accessibility

  `PaginationArrow` hover and focus:

  - border-color: colorBorderPrimary changed to colorBorderPrimaryStronger
  - color: colorTextLink changed to colorTextLinkStronger

  `PaginationNumber`:

  - border-color: added colorBorderPrimaryStronger border on hover and focus
  - color: colorTextLink changed to colorTextLinkStronger on hover and focus
  - isCurrent:
    - background-color: colorBackgroundPrimaryWeakest changed to colorBackgroundPrimary Stronger
    - color: colorTextLink changed to colorTextWeakest
    - isCurrent hover and focus uses same background-colors and colors

* Updated dependencies [[`e4a8aef5`](https://github.com/twilio-labs/paste/commit/e4a8aef5253ee5df290cf106612a58bce7572ef3), [`bf5ad8d6`](https://github.com/twilio-labs/paste/commit/bf5ad8d6ede2ba911a1aa45e39341c9137cb692c), [`750a38e0`](https://github.com/twilio-labs/paste/commit/750a38e05b9d91f82b14f49a160112f013629468), [`e7cc5ca0`](https://github.com/twilio-labs/paste/commit/e7cc5ca09e8ec1cf913ae88e08c6ee4b616a056a), [`c7d6fa75`](https://github.com/twilio-labs/paste/commit/c7d6fa7526ac10f98dbf406800513fd7af6c371d)]:
  - @twilio-paste/label@6.0.4
  - @twilio-paste/text@4.1.1
  - @twilio-paste/tooltip@4.0.4
  - @twilio-paste/pagination@0.1.3
  - @twilio-paste/skeleton-loader@0.1.0

## 10.3.0

### Minor Changes

- [`10f4a285`](https://github.com/twilio-labs/paste/commit/10f4a285df84e757d0574f4024770b5eddad17ea) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design tokens] export design token types from the design-tokens page
  [theme] `GenericTokenShape` is now called `GenericTokensShape` and exported from `@twilio-paste/design-tokens`

* [`e268bfd1`](https://github.com/twilio-labs/paste/commit/e268bfd13f9d2bbeb1a17f2a7ff0bcdc6796c10a) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [theme] `generateThemeFromTokens` and `generateTokensFromTheme` now take objects as arguments

- [`e268bfd1`](https://github.com/twilio-labs/paste/commit/e268bfd13f9d2bbeb1a17f2a7ff0bcdc6796c10a) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [theme] provide a hook that will calculate the color contrast rating of the current Paste theme `useThemeContrastCheck`

* [`7a78987a`](https://github.com/twilio-labs/paste/commit/7a78987ac3c3fe9bc00f5f944733b04af2b192d2) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [color-contrast-utils] Provides utilities that can be used to detect the color contrast rating of a given theme of design tokens. The package now export four methods; `getContrastRatingsOfTokensWithTextContrastRequirements`, `getContrastRatingsOfTokensWithUIControlContrastRequirements`, `getNumberOfTextFailures` and `getNumberOfUIControlFailures`

### Patch Changes

- [`b10ac908`](https://github.com/twilio-labs/paste/commit/b10ac908d2728185a66f334506a29cb054df6778) [#1654](https://github.com/twilio-labs/paste/pull/1654) Thanks [@richbachman](https://github.com/richbachman)! - [Tabs]

  - Added `:focus-visible` styles to TabPanel in order to override the default browser style.
  - Added a `borderRadius20` border-radius to TabPanel to make the focus not so harsh.

* [`6730c0a6`](https://github.com/twilio-labs/paste/commit/6730c0a643cf52fb9008ec3bf707759bd1333b68) [#1606](https://github.com/twilio-labs/paste/pull/1606) Thanks [@richbachman](https://github.com/richbachman)! - [Popover] added the `state` prop that allows hooking into the state of the component using `usePopoverState`. Package is also now exporting `usePopoverState`.

- [`24bdd104`](https://github.com/twilio-labs/paste/commit/24bdd10427d3da5873cf7a21b6341342ccf0ea0a) [#1654](https://github.com/twilio-labs/paste/pull/1654) Thanks [@richbachman](https://github.com/richbachman)! - [Box] Added `focusVisble` to `PseudoPropStyles`.

* [`355a5509`](https://github.com/twilio-labs/paste/commit/355a550910830912bda407906db19339a5054512) [#1606](https://github.com/twilio-labs/paste/pull/1606) Thanks [@richbachman](https://github.com/richbachman)! - [NonModalDialogPrimitive] exported `PopoverStateReturn` as `NonModalDialogPrimitiveStateReturn`.

* Updated dependencies [[`b10ac908`](https://github.com/twilio-labs/paste/commit/b10ac908d2728185a66f334506a29cb054df6778), [`6730c0a6`](https://github.com/twilio-labs/paste/commit/6730c0a643cf52fb9008ec3bf707759bd1333b68), [`10f4a285`](https://github.com/twilio-labs/paste/commit/10f4a285df84e757d0574f4024770b5eddad17ea), [`24bdd104`](https://github.com/twilio-labs/paste/commit/24bdd10427d3da5873cf7a21b6341342ccf0ea0a), [`e268bfd1`](https://github.com/twilio-labs/paste/commit/e268bfd13f9d2bbeb1a17f2a7ff0bcdc6796c10a), [`e268bfd1`](https://github.com/twilio-labs/paste/commit/e268bfd13f9d2bbeb1a17f2a7ff0bcdc6796c10a), [`7a78987a`](https://github.com/twilio-labs/paste/commit/7a78987ac3c3fe9bc00f5f944733b04af2b192d2), [`355a5509`](https://github.com/twilio-labs/paste/commit/355a550910830912bda407906db19339a5054512)]:
  - @twilio-paste/tabs@2.0.6
  - @twilio-paste/popover@6.0.2
  - @twilio-paste/design-tokens@6.10.0
  - @twilio-paste/theme@5.3.0
  - @twilio-paste/box@4.1.1
  - @twilio-paste/color-contrast-utils@1.1.0
  - @twilio-paste/non-modal-dialog-primitive@0.3.5

## 10.2.0

### Minor Changes

- [`2b7567b7`](https://github.com/twilio-labs/paste/commit/2b7567b72026e6393517b846c7bb867c3929dea1) [#1607](https://github.com/twilio-labs/paste/pull/1607) Thanks [@gloriliale](https://github.com/gloriliale)! - Created a time picker component package.

### Patch Changes

- [`a7fcccd5`](https://github.com/twilio-labs/paste/commit/a7fcccd55fc145b6a711530b030280c24e0e3aa2) [#1607](https://github.com/twilio-labs/paste/pull/1607) Thanks [@gloriliale](https://github.com/gloriliale)! - Added type 'time' to Input types for time picker component.

* [`81ef55dc`](https://github.com/twilio-labs/paste/commit/81ef55dc5ce8ec8b6c1a1a28545fd1cd1628a60c) [#1607](https://github.com/twilio-labs/paste/pull/1607) Thanks [@gloriliale](https://github.com/gloriliale)! - Added type 'time' to Input-Box types for time picker component, changed InputTypes to name InputBoxTypes.

* Updated dependencies [[`2b7567b7`](https://github.com/twilio-labs/paste/commit/2b7567b72026e6393517b846c7bb867c3929dea1), [`a7fcccd5`](https://github.com/twilio-labs/paste/commit/a7fcccd55fc145b6a711530b030280c24e0e3aa2), [`81ef55dc`](https://github.com/twilio-labs/paste/commit/81ef55dc5ce8ec8b6c1a1a28545fd1cd1628a60c)]:
  - @twilio-paste/time-picker@0.1.0
  - @twilio-paste/input@3.0.8
  - @twilio-paste/input-box@4.0.7

## 10.1.0

### Minor Changes

- [`035bb7d8`](https://github.com/twilio-labs/paste/commit/035bb7d812dbf84604c3c95adb53c67d18601a60) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Enable Text to respect element customizations set on the customization provider. Text now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`7d703959`](https://github.com/twilio-labs/paste/commit/7d703959e6d989c1257942355115b17d3615bc7f) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box] Enable Box to respect element customizations set on the customization provider. Box now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`66285238`](https://github.com/twilio-labs/paste/commit/66285238c23b1ac756a6bf30af0ece5a45a0ddc7) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Switch lodash.merge with deepmerge for significant bundle size savings

* [`f2594fca`](https://github.com/twilio-labs/paste/commit/f2594fca7955014922f83d1d4c28df385ee519a5) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Customization] minor change to the elements prop type to change the `variant` to the `variants` key to more closely match styled system. Also correct the elements type to use a string key for the element names

- [`4dcc7b31`](https://github.com/twilio-labs/paste/commit/4dcc7b310830dd77481d7b4546aa5618b0de4f11) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Styling-library] Export StyledComponent and CSSObject types from emotion and styled system respectively

* [`72cdd336`](https://github.com/twilio-labs/paste/commit/72cdd336bcbf9e00befbc2e8e39c7acfa1fed190) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Ensure that the elements object cannot have duplicate element names, even across different casings of the names

* Updated dependencies [[`66285238`](https://github.com/twilio-labs/paste/commit/66285238c23b1ac756a6bf30af0ece5a45a0ddc7), [`f2594fca`](https://github.com/twilio-labs/paste/commit/f2594fca7955014922f83d1d4c28df385ee519a5), [`4dcc7b31`](https://github.com/twilio-labs/paste/commit/4dcc7b310830dd77481d7b4546aa5618b0de4f11), [`035bb7d8`](https://github.com/twilio-labs/paste/commit/035bb7d812dbf84604c3c95adb53c67d18601a60), [`72cdd336`](https://github.com/twilio-labs/paste/commit/72cdd336bcbf9e00befbc2e8e39c7acfa1fed190), [`7d703959`](https://github.com/twilio-labs/paste/commit/7d703959e6d989c1257942355115b17d3615bc7f)]:
  - @twilio-paste/button@7.0.5
  - @twilio-paste/customization@2.1.1
  - @twilio-paste/styling-library@0.3.4
  - @twilio-paste/text@4.1.0
  - @twilio-paste/box@4.1.0

## 10.0.0

### Major Changes

- [`fa2ffc5c`](https://github.com/twilio-labs/paste/commit/fa2ffc5cf4da037dcfa0894d033665720cc70ab4) [#1603](https://github.com/twilio-labs/paste/pull/1603) Thanks [@andipants12](https://github.com/andipants12)! - [Truncate] Added the title prop to show full non-truncated text
  BREAKING CHANGE: `title` prop is now required for the Truncate component.

### Patch Changes

- Updated dependencies [[`fa2ffc5c`](https://github.com/twilio-labs/paste/commit/fa2ffc5cf4da037dcfa0894d033665720cc70ab4)]:
  - @twilio-paste/truncate@7.0.0

## 9.6.3

### Patch Changes

- [`e43dec0e`](https://github.com/twilio-labs/paste/commit/e43dec0e611defd3ab3e89614b4d57bb33cf481d) [#1594](https://github.com/twilio-labs/paste/pull/1594) Thanks [@TheSisb](https://github.com/TheSisb)! - Minifies output to commonJS and ES6 token files

- Updated dependencies [[`e43dec0e`](https://github.com/twilio-labs/paste/commit/e43dec0e611defd3ab3e89614b4d57bb33cf481d)]:
  - @twilio-paste/design-tokens@6.9.1

## 9.6.2

### Patch Changes

- [`a7954e29`](https://github.com/twilio-labs/paste/commit/a7954e290af91fa7deba991e554c3ecb838612da) [#1567](https://github.com/twilio-labs/paste/pull/1567) Thanks [@TheSisb](https://github.com/TheSisb)! - **Tabs**: Horizontal tabs now have center-aligned inner text.

- Updated dependencies [[`a7954e29`](https://github.com/twilio-labs/paste/commit/a7954e290af91fa7deba991e554c3ecb838612da)]:
  - @twilio-paste/tabs@2.0.5

## 9.6.1

### Patch Changes

- [`5e770d20`](https://github.com/twilio-labs/paste/commit/5e770d200ebef1f18b67e6861407e8c092503c57) [#1558](https://github.com/twilio-labs/paste/pull/1558) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixes a bug where Toasts may not display using the provided Toaster for users with the system flag "prefers-reduced-motion"

- Updated dependencies [[`5e770d20`](https://github.com/twilio-labs/paste/commit/5e770d200ebef1f18b67e6861407e8c092503c57)]:
  - @twilio-paste/toast@5.0.2

## 9.6.0

### Minor Changes

- [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Created the Date Picker component

### Patch Changes

- [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Added type 'date' to Input types for date picker component

* [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Added type 'date' to Input-Box types for date picker component

* Updated dependencies [[`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d), [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d), [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d)]:
  - @twilio-paste/input@3.0.7
  - @twilio-paste/input-box@4.0.6
  - @twilio-paste/date-picker@0.1.0

## 9.5.0

### Minor Changes

- [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Added two new icons for light and dark mode

* [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Adding a body background color for purposes of applying the color background body design token so that you can see the affect it has when theming the website

- [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design-tokens]: Added two extra brand based background tokens. Update the new design tokens for better dark mode contrast.

  Renamed black aliases in the dark theme as they are not palette colors.

  Updated meta data for weak and strong design tokens to reflect their new naming convention

### Patch Changes

- [`2db8bf96`](https://github.com/twilio-labs/paste/commit/2db8bf963c2fc34e191aa3bfec5c0a0e95e7c72f) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Changed disabled box shadows to use correct shadow-border-weak token.

* [`fa48e8dd`](https://github.com/twilio-labs/paste/commit/fa48e8ddf03325d0effb4b1a0201dbf5fd207e71) [#1489](https://github.com/twilio-labs/paste/pull/1489) Thanks [@richbachman](https://github.com/richbachman)! - Added missing dependencies.

- [`f551079a`](https://github.com/twilio-labs/paste/commit/f551079ad141a06532e4d1bcd1c0d4ef7f6f226d) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Fixed shadow-border, shadow-border-weak, shadow-border-weaker, shadow-border-strong values to match respective color-border-\* values in all themes.

  Shadow-border-stronger token has been removed in all themes.

  **Default theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border-weak   | NA                   | palette-gray-30 |
  | shadow-border-weaker | NA                   | palette-gray-20 |
  | shadow-border-strong | palette-gray-30      | palette-gray-60 |

  **Console theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border-weak   | NA                   | palette-gray-50 |
  | shadow-border-weaker | NA                   | palette-gray-40 |
  | shadow-border-strong | palette-gray-40      | palette-gray-60 |

  **Dark theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border        | palette-gray-50      | palette-gray-60 |
  | shadow-border-weak   | NA                   | palette-gray-70 |
  | shadow-border-weaker | NA                   | palette-gray-80 |
  | shadow-border-strong | palette-gray-90      | palette-gray-50 |

* [`f640550a`](https://github.com/twilio-labs/paste/commit/f640550a7306806feaedfd7c3184cad4327cc8a8) [#1489](https://github.com/twilio-labs/paste/pull/1489) Thanks [@richbachman](https://github.com/richbachman)! - Changed box-shadow for ModalDialogContent to use shadow token instead of shadow-card.

- [`104628b3`](https://github.com/twilio-labs/paste/commit/104628b358b773df6f5afc885252eaa64f311c97) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Changed default and disabled secondary button box shadow and text color styles to match Figma design files.

- Updated dependencies [[`2db8bf96`](https://github.com/twilio-labs/paste/commit/2db8bf963c2fc34e191aa3bfec5c0a0e95e7c72f), [`fa48e8dd`](https://github.com/twilio-labs/paste/commit/fa48e8ddf03325d0effb4b1a0201dbf5fd207e71), [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04), [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04), [`f551079a`](https://github.com/twilio-labs/paste/commit/f551079ad141a06532e4d1bcd1c0d4ef7f6f226d), [`f640550a`](https://github.com/twilio-labs/paste/commit/f640550a7306806feaedfd7c3184cad4327cc8a8), [`104628b3`](https://github.com/twilio-labs/paste/commit/104628b358b773df6f5afc885252eaa64f311c97)]:
  - @twilio-paste/input-box@4.0.5
  - @twilio-paste/alert-dialog@0.1.1
  - @twilio-paste/theme@5.2.0
  - @twilio-paste/design-tokens@6.9.0
  - @twilio-paste/modal@7.1.1
  - @twilio-paste/button@7.0.4

## 9.4.0

### Minor Changes

- [`d27dc745`](https://github.com/twilio-labs/paste/commit/d27dc7455c221daefb8ee8cf9b209ebb16833e4e) [#1484](https://github.com/twilio-labs/paste/pull/1484) Thanks [@gloriliale](https://github.com/gloriliale)! - Created an alert dialog component

* [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3) [#1509](https://github.com/twilio-labs/paste/pull/1509) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [customization]: add ability for customization provider to accept an elements prop which it then merges into the styled theme context.

  Also add the ability to choose which base theme is used when customizing a theme, for use in programmable apps. You can choose from Default or Dark theme as your starting point.

- [`f6f26815`](https://github.com/twilio-labs/paste/commit/f6f26815528b073237b7fd591064abee29f48427) [#1484](https://github.com/twilio-labs/paste/pull/1484) Thanks [@gloriliale](https://github.com/gloriliale)! - Created style file for stylings of the Modal so they can be used in other components, like Alert Dialog.

### Patch Changes

- [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3) [#1509](https://github.com/twilio-labs/paste/pull/1509) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [styling-library]: export some types from styled-system to help with custom styling tasks

- Updated dependencies [[`d27dc745`](https://github.com/twilio-labs/paste/commit/d27dc7455c221daefb8ee8cf9b209ebb16833e4e), [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3), [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3), [`f6f26815`](https://github.com/twilio-labs/paste/commit/f6f26815528b073237b7fd591064abee29f48427)]:
  - @twilio-paste/alert-dialog@0.1.0
  - @twilio-paste/customization@2.1.0
  - @twilio-paste/styling-library@0.3.3
  - @twilio-paste/modal@7.1.0

## 9.3.5

### Patch Changes

- [`79a9dfba`](https://github.com/twilio-labs/paste/commit/79a9dfbaf60c13bd4985c7d30017d9db5b8c7c76) [#1487](https://github.com/twilio-labs/paste/pull/1487) Thanks [@TheSisb](https://github.com/TheSisb)! - DisclosureHeading now gracefully handles children and doesn't impose flex behavior. This makes it easier to pass MediaObjects and Truncate as children.

* [`eab3fd93`](https://github.com/twilio-labs/paste/commit/eab3fd9384510a7aa35c6f5244e8d0431144197b) [#1501](https://github.com/twilio-labs/paste/pull/1501) Thanks [@richbachman](https://github.com/richbachman)! - MenuItem now renders as a `button` by default. In order to render it as an `a`, and `href` needs to be passed.

* Updated dependencies [[`79a9dfba`](https://github.com/twilio-labs/paste/commit/79a9dfbaf60c13bd4985c7d30017d9db5b8c7c76), [`eab3fd93`](https://github.com/twilio-labs/paste/commit/eab3fd9384510a7aa35c6f5244e8d0431144197b)]:
  - @twilio-paste/disclosure@5.0.6
  - @twilio-paste/menu@7.0.2

## 9.3.4

### Patch Changes

- [`b1dd8b0c`](https://github.com/twilio-labs/paste/commit/b1dd8b0c385e59c35c4655479d862864db4d8e7b) [#1478](https://github.com/twilio-labs/paste/pull/1478) Thanks [@richbachman](https://github.com/richbachman)! - Fixed the `required` prop not being passed to the `textbox` inside Combobox.

* [`45c24b01`](https://github.com/twilio-labs/paste/commit/45c24b01aeabf3db34868c4f0ae91b49a0493169) [#1479](https://github.com/twilio-labs/paste/pull/1479) Thanks [@TheSisb](https://github.com/TheSisb)! - Fix a bug where `null` children to a Stack causes extra margin to be appended at the end.

* Updated dependencies [[`b1dd8b0c`](https://github.com/twilio-labs/paste/commit/b1dd8b0c385e59c35c4655479d862864db4d8e7b), [`45c24b01`](https://github.com/twilio-labs/paste/commit/45c24b01aeabf3db34868c4f0ae91b49a0493169)]:
  - @twilio-paste/combobox@7.0.3
  - @twilio-paste/stack@2.0.4

## 9.3.3

### Patch Changes

- [`b9e74f3a`](https://github.com/twilio-labs/paste/commit/b9e74f3ab15066381f2c99db5d49cc9adb960572) [#1466](https://github.com/twilio-labs/paste/pull/1466) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Flex]: correctly allow layout style props to be applied to the Flex component including width and height

- Updated dependencies [[`b9e74f3a`](https://github.com/twilio-labs/paste/commit/b9e74f3ab15066381f2c99db5d49cc9adb960572)]:
  - @twilio-paste/flex@2.0.4

## 9.3.2

### Patch Changes

- [`456e7210`](https://github.com/twilio-labs/paste/commit/456e72109c31677adad53383084cd052f22b1e52) [#1464](https://github.com/twilio-labs/paste/pull/1464) Thanks [@richbachman](https://github.com/richbachman)! - Bumped the version of React-Spring to 9.1.2 in order to fix a TS issue.

* [`dd759feb`](https://github.com/twilio-labs/paste/commit/dd759febfa25e5d6823f280a1896635be2ba6376) [#1464](https://github.com/twilio-labs/paste/pull/1464) Thanks [@richbachman](https://github.com/richbachman)! - Bumped the version of Reach/Dialog to 0.15.0

* Updated dependencies [[`456e7210`](https://github.com/twilio-labs/paste/commit/456e72109c31677adad53383084cd052f22b1e52), [`dd759feb`](https://github.com/twilio-labs/paste/commit/dd759febfa25e5d6823f280a1896635be2ba6376)]:
  - @twilio-paste/animation-library@0.3.2
  - @twilio-paste/modal-dialog-primitive@0.2.3

## 9.3.1

### Patch Changes

- [`46495f48`](https://github.com/twilio-labs/paste/commit/46495f48ec005ff0971fb41e5fa76df53503aa84) [#1454](https://github.com/twilio-labs/paste/pull/1454) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add a background color to disclosure content for when it is placed on top of a background color that is not the body color

- Updated dependencies [[`46495f48`](https://github.com/twilio-labs/paste/commit/46495f48ec005ff0971fb41e5fa76df53503aa84)]:
  - @twilio-paste/disclosure@5.0.5

## 9.3.0

### Minor Changes

- [`62f7fd3e`](https://github.com/twilio-labs/paste/commit/62f7fd3e3da78bca128aa2287c61d19248a2025d) [#1451](https://github.com/twilio-labs/paste/pull/1451) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design-tokens] Adding for availability tokens to display entity status such as available, offline and busy

### Patch Changes

- Updated dependencies [[`62f7fd3e`](https://github.com/twilio-labs/paste/commit/62f7fd3e3da78bca128aa2287c61d19248a2025d)]:
  - @twilio-paste/design-tokens@6.8.0

## 9.2.4

### Patch Changes

- [`2086d9a2`](https://github.com/twilio-labs/paste/commit/2086d9a2cc592a4c9ac7ce07ab00a8592bcdba6a) [#1448](https://github.com/twilio-labs/paste/pull/1448) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fix coloring the checkmark of a checkbox when interacting with it

* [`80529764`](https://github.com/twilio-labs/paste/commit/8052976482f1a7ad412e68959e5bf7e186a5c318) [#1431](https://github.com/twilio-labs/paste/pull/1431) Thanks [@richbachman](https://github.com/richbachman)! - Added a margin reset (`margin: space0`) to fix a bug in Safari where a 2px margin is added by the browser.

* Updated dependencies [[`2086d9a2`](https://github.com/twilio-labs/paste/commit/2086d9a2cc592a4c9ac7ce07ab00a8592bcdba6a), [`80529764`](https://github.com/twilio-labs/paste/commit/8052976482f1a7ad412e68959e5bf7e186a5c318)]:
  - @twilio-paste/checkbox@6.0.5
  - @twilio-paste/button@7.0.3
  - @twilio-paste/input@3.0.6
  - @twilio-paste/select@5.0.4

## 9.2.3

### Patch Changes

- [`b98b3713`](https://github.com/twilio-labs/paste/commit/b98b371315b09a5697be6f56611e428d0e6e377f) [#1426](https://github.com/twilio-labs/paste/pull/1426) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add the ability to warn consumers that they are using a deprecated Design Token using prop type validation on the Box and Text component

- Updated dependencies [[`b98b3713`](https://github.com/twilio-labs/paste/commit/b98b371315b09a5697be6f56611e428d0e6e377f)]:
  - @twilio-paste/box@4.0.7
  - @twilio-paste/text@4.0.4
  - @twilio-paste/style-props@3.0.6

## 9.2.2

### Patch Changes

- [`37f82857`](https://github.com/twilio-labs/paste/commit/37f82857ef5046156931a22e2431aed49629ff63) [#1424](https://github.com/twilio-labs/paste/pull/1424) Thanks [@TheSisb](https://github.com/TheSisb)! - Added the "overflowWrap" prop to Box

* [`3668591b`](https://github.com/twilio-labs/paste/commit/3668591bf9898b7770adb1f33c809c12798eb6e7) [#1424](https://github.com/twilio-labs/paste/pull/1424) Thanks [@TheSisb](https://github.com/TheSisb)! - Added overflowWrap to the Typography styled prop bucket

* Updated dependencies [[`37f82857`](https://github.com/twilio-labs/paste/commit/37f82857ef5046156931a22e2431aed49629ff63), [`3668591b`](https://github.com/twilio-labs/paste/commit/3668591bf9898b7770adb1f33c809c12798eb6e7)]:
  - @twilio-paste/box@4.0.6
  - @twilio-paste/style-props@3.0.5

## 9.2.1

### Patch Changes

- [`41a3da0e`](https://github.com/twilio-labs/paste/commit/41a3da0e00bc8bea9927ef38f59e84b606239320) [#1407](https://github.com/twilio-labs/paste/pull/1407) Thanks [@richbachman](https://github.com/richbachman)! - - Added background color to `PaginationArrow` on hover.
  - Added disabled prop to `PaginationArrow` which sets `aria-hidden` to true and `visibility: none`.
  - Added left and right padding to `PaginationNumbers` to help center with longer page labels.
- Updated dependencies [[`41a3da0e`](https://github.com/twilio-labs/paste/commit/41a3da0e00bc8bea9927ef38f59e84b606239320)]:
  - @twilio-paste/pagination@0.1.2

## 9.2.0

### Minor Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add a dark theme to Paste

* [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Design tokens that are named using the light / dark nomenclature are being deprecated in favour of a new set of tokens based on a weak / strong nomenclature to accommodate light and dark modes.

  If you are using these tokens with our `Box` or `Text` component, these will still work for now but we will be removing them in the 2021.11.16 release of Paste. In most cases replacing `dark` for `strong` and `light` for `weak` is all that is required to transition.

  Design tokens that are being deprecated include:

  | old                                   | new                                    |
  | ------------------------------------- | -------------------------------------- |
  | color-background-dark                 | color-background-strong                |
  | color-background-darker               | color-background-stronger              |
  | color-background-darkest              | color-background-strongest             |
  | color-background-inverse-light        | color-background-inverse-weak          |
  | color-background-neutral-lightest     | color-background-neutral-weakest       |
  | color-background-success-lightest     | color-background-success-weakest       |
  | color-background-warning-lightest     | color-background-warning-weakest       |
  | color-background-error-dark           | color-background-error-strong          |
  | color-background-error-lightest       | color-background-error-weakest         |
  | color-background-primary-darkest      | color-background-primary-strongest     |
  | color-background-primary-darker       | color-background-primary-stronger      |
  | color-background-primary-dark         | color-background-primary-strong        |
  | color-background-primary-light        | color-background-primary-weak          |
  | color-background-primary-lighter      | color-background-primary-weaker        |
  | color-background-primary-lightest     | color-background-primary-weakest       |
  | color-background-destructive-darkest  | color-background-destructive-strongest |
  | color-background-destructive-darker   | color-background-destructive-stronger  |
  | color-background-destructive-dark     | color-background-destructive-strong    |
  | color-background-destructive-light    | color-background-destructive-weak      |
  | color-background-destructive-lighter  | color-background-destructive-weaker    |
  | color-background-destructive-lightest | color-background-destructive-weakest   |

  | old                              | new                                |
  | -------------------------------- | ---------------------------------- |
  | color-border-dark                | color-border-strong                |
  | color-border-light               | color-border-weak                  |
  | color-border-lighter             | color-border-weaker                |
  | color-border-inverse-darker      | color-border-inverse-weaker        |
  | color-border-inverse-lighter     | color-border-inverse-stronger      |
  | color-border-inverse-lightest    | color-border-inverse-strongest     |
  | color-border-primary-darkest     | color-border-primary-strongest     |
  | color-border-primary-darker      | color-border-primary-stronger      |
  | color-border-primary-dark        | color-border-primary-strong        |
  | color-border-primary-light       | color-border-primary-weak          |
  | color-border-primary-lighter     | color-border-primary-weaker        |
  | color-border-neutral-light       | color-border-neutral-weak          |
  | color-border-success-light       | color-border-success-weak          |
  | color-border-success-lightest    | color-border-success-weakest       |
  | color-border-warning-light       | color-border-warning-weak          |
  | color-border-warning-lightest    | color-border-warning-weakest       |
  | color-border-error-dark          | color-border-error-strong          |
  | color-border-error-light         | color-border-error-weak            |
  | color-border-error-lightest      | color-border-error-weakest         |
  | color-border-destructive-darkest | color-border-destructive-strongest |
  | color-border-destructive-darker  | color-border-destructive-stronger  |
  | color-border-destructive-dark    | color-border-destructive-strong    |
  | color-border-destructive-light   | color-border-destructive-weak      |
  | color-border-destructive-lighter | color-border-destructive-weaker    |

  | old                               | new                                |
  | --------------------------------- | ---------------------------------- |
  | shadow-border-lighter             | shadow-border-weaker               |
  | shadow-border-light               | shadow-border-weak                 |
  | shadow-border-primary-lighter     | shadow-border-primary-weaker       |
  | shadow-border-primary-light       | shadow-border-primary-weak         |
  | shadow-border-primary-dark        | shadow-border-primary-strong       |
  | shadow-border-primary-darker      | shadow-border-primary-stronger     |
  | shadow-border-destructive-lighter | shadow-border-destructive-weaker   |
  | shadow-border-destructive-light   | shadow-border-destructive-weak     |
  | shadow-border-destructive-darker  | shadow-border-destructive-stronger |
  | shadow-border-error-light         | shadow-border-error-weak           |
  | shadow-border-error-dark          | shadow-border-error-strong         |
  | shadow-border-inverse-darker      | shadow-border-inverse-weaker       |
  | shadow-border-inverse-light       | shadow-border-inverse-strong       |
  | shadow-border-inverse-lightest    | shadow-border-inverse-strongest    |

  | old                                | new                                  |
  | ---------------------------------- | ------------------------------------ |
  | color-text-link-light              | color-text-link-weak                 |
  | color-text-link-dark               | color-text-link-strong               |
  | color-text-link-darker             | color-text-link-stronger             |
  | color-text-link-destructive-light  | color-text-link-destructive-weak     |
  | color-text-link-destructive-dark   | color-text-link-destructive-strong   |
  | color-text-link-destructive-darker | color-text-link-destructive-stronger |
  | color-text-error-light             | color-text-error-weak                |
  | color-text-error-dark              | color-text-error-strong              |
  | color-text-warning-dark            | color-text-warning-strong            |

### Patch Changes

- [`87fc9178`](https://github.com/twilio-labs/paste/commit/87fc91784c86d25f619aa49a9f0586d9e3be97d0) [#1408](https://github.com/twilio-labs/paste/pull/1408) Thanks [@richbachman](https://github.com/richbachman)! - Fix disabled value color in Safari.

* [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a) [#1398](https://github.com/twilio-labs/paste/pull/1398) Thanks [@zahnster](https://github.com/zahnster)! - Updated font weights for all form components to make them bolder

- [`df6d8f1d`](https://github.com/twilio-labs/paste/commit/df6d8f1dcff6a17c96976b7b54a5702ec3d09f76) [#1408](https://github.com/twilio-labs/paste/pull/1408) Thanks [@richbachman](https://github.com/richbachman)! - Added `-webkit-text-fill-color` and enable it to use Paste textColor token values.

* [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - add ability to set transparent to color style prop

- Updated dependencies [[`87fc9178`](https://github.com/twilio-labs/paste/commit/87fc91784c86d25f619aa49a9f0586d9e3be97d0), [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca), [`df6d8f1d`](https://github.com/twilio-labs/paste/commit/df6d8f1dcff6a17c96976b7b54a5702ec3d09f76), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca)]:
  - @twilio-paste/input@3.0.5
  - @twilio-paste/textarea@3.0.5
  - @twilio-paste/base-radio-checkbox@6.0.3
  - @twilio-paste/checkbox@6.0.4
  - @twilio-paste/label@6.0.3
  - @twilio-paste/select@5.0.3
  - @twilio-paste/design-tokens@6.7.0
  - @twilio-paste/theme@5.1.0
  - @twilio-paste/styling-library@0.3.2
  - @twilio-paste/alert@7.0.1
  - @twilio-paste/anchor@5.0.3
  - @twilio-paste/button@7.0.2
  - @twilio-paste/card@3.0.4
  - @twilio-paste/combobox@7.0.2
  - @twilio-paste/disclosure@5.0.4
  - @twilio-paste/help-text@6.0.3
  - @twilio-paste/input-box@4.0.4
  - @twilio-paste/menu@7.0.1
  - @twilio-paste/modal@7.0.1
  - @twilio-paste/popover@6.0.1
  - @twilio-paste/pagination@0.1.1
  - @twilio-paste/radio-group@6.0.4
  - @twilio-paste/separator@2.0.4
  - @twilio-paste/table@2.0.4
  - @twilio-paste/tabs@2.0.4
  - @twilio-paste/toast@5.0.1
  - @twilio-paste/tooltip@4.0.3
  - @twilio-paste/aspect-ratio@4.0.4
  - @twilio-paste/grid@2.0.4
  - @twilio-paste/box@4.0.5
  - @twilio-paste/text@4.0.3
  - @twilio-paste/style-props@3.0.4

## 9.1.0

### Minor Changes

- [`ed40d4de`](https://github.com/twilio-labs/paste/commit/ed40d4decd4c04a1f0e77a1f9d8f0237a3a26610) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Pagination: added the pagination componenents, stories, and tests.

### Patch Changes

- [`0f6b4728`](https://github.com/twilio-labs/paste/commit/0f6b4728abb2de315d03c0c009c1872b7cece045) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Style-props: added `inherit` to the typed `border-color` options.

* [`8fe6a2f4`](https://github.com/twilio-labs/paste/commit/8fe6a2f45cb3b03643da70ad1b4c8dd1eda426d8) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Box: added `font-variant-numeric` prop so we can control the usage of alternate glyphs for numbers, fractions, and ordinal markers.

* Updated dependencies [[`0f6b4728`](https://github.com/twilio-labs/paste/commit/0f6b4728abb2de315d03c0c009c1872b7cece045), [`ed40d4de`](https://github.com/twilio-labs/paste/commit/ed40d4decd4c04a1f0e77a1f9d8f0237a3a26610), [`8fe6a2f4`](https://github.com/twilio-labs/paste/commit/8fe6a2f45cb3b03643da70ad1b4c8dd1eda426d8)]:
  - @twilio-paste/style-props@3.0.3
  - @twilio-paste/pagination@0.1.0
  - @twilio-paste/box@4.0.4

## 9.0.3

### Patch Changes

- [`7bfaff38`](https://github.com/twilio-labs/paste/commit/7bfaff381bc03a404aa0340cd487fba12527ad56) [#1390](https://github.com/twilio-labs/paste/pull/1390) Thanks [@TheSisb](https://github.com/TheSisb)! - Combobox: improve accessibility of hovered combobox option by keeping it the same color.

- Updated dependencies [[`7bfaff38`](https://github.com/twilio-labs/paste/commit/7bfaff381bc03a404aa0340cd487fba12527ad56)]:
  - @twilio-paste/combobox@7.0.1

## 9.0.2

### Patch Changes

- [`64edb7fc`](https://github.com/twilio-labs/paste/commit/64edb7fc6d1305c9fdf37b86933484732fab3ff7) [#1367](https://github.com/twilio-labs/paste/pull/1367) Thanks [@nkrantz](https://github.com/nkrantz)! - Restricted Avatar propTypes so that users cannot add both `src` and `icon` props to Avatar, only one or the other.

* [`174be6d9`](https://github.com/twilio-labs/paste/commit/174be6d968c5b4e4c8973a88e0491f45496b15d9) [#1363](https://github.com/twilio-labs/paste/pull/1363) Thanks [@TheSisb](https://github.com/TheSisb)! - Buttons that behave as links (`<Button as="a" href="">`) now correctly use the external link icon for external links.

- [`35d9dfda`](https://github.com/twilio-labs/paste/commit/35d9dfdafff3e5e7b05fa46d600d2d3f0851a6b1) [#1332](https://github.com/twilio-labs/paste/pull/1332) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixed truncation on Disclosure headings when using Truncate component

* [`fd8cbb89`](https://github.com/twilio-labs/paste/commit/fd8cbb89a9459fd5e012cba8f45060ad2e384e24) [#1345](https://github.com/twilio-labs/paste/pull/1345) Thanks [@gloriliale](https://github.com/gloriliale)! - Avatar: fixed size prop to make it optional and have a default of icon-size-70.

* Updated dependencies [[`64edb7fc`](https://github.com/twilio-labs/paste/commit/64edb7fc6d1305c9fdf37b86933484732fab3ff7), [`174be6d9`](https://github.com/twilio-labs/paste/commit/174be6d968c5b4e4c8973a88e0491f45496b15d9), [`35d9dfda`](https://github.com/twilio-labs/paste/commit/35d9dfdafff3e5e7b05fa46d600d2d3f0851a6b1), [`fd8cbb89`](https://github.com/twilio-labs/paste/commit/fd8cbb89a9459fd5e012cba8f45060ad2e384e24)]:
  - @twilio-paste/avatar@2.1.1
  - @twilio-paste/button@7.0.1
  - @twilio-paste/disclosure@5.0.3

## 9.0.1

### Patch Changes

- [`1a7bb349`](https://github.com/twilio-labs/paste/commit/1a7bb349186cdd2d131d44f0a22996a7df61e8c3) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [RadioGroup] Added optional `value` string prop which this component needs and is no longer on the extended `InlineControlGroup` interface.

* [`5e08f10d`](https://github.com/twilio-labs/paste/commit/5e08f10da50f13c057bb20a7208fcfb7ff08d6ad) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Checkbox] Remove unused `value` prop.

- [`9df657df`](https://github.com/twilio-labs/paste/commit/9df657df7e4994dee1b0dfa9071f8f50041adb0c) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [InlineControlGroup] Adjusted the vertical spacing of `children`. This change improve the handling of RadioGroup and CheckboxGroup children.

* [`d000a4e4`](https://github.com/twilio-labs/paste/commit/d000a4e4c88bc0d3dd67532df937b805191fe4c0) [#1333](https://github.com/twilio-labs/paste/pull/1333) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Paragraph] allow for global HTML attriutes to be passed to the paragraph element

* Updated dependencies [[`1a7bb349`](https://github.com/twilio-labs/paste/commit/1a7bb349186cdd2d131d44f0a22996a7df61e8c3), [`5e08f10d`](https://github.com/twilio-labs/paste/commit/5e08f10da50f13c057bb20a7208fcfb7ff08d6ad), [`9df657df`](https://github.com/twilio-labs/paste/commit/9df657df7e4994dee1b0dfa9071f8f50041adb0c), [`d000a4e4`](https://github.com/twilio-labs/paste/commit/d000a4e4c88bc0d3dd67532df937b805191fe4c0)]:
  - @twilio-paste/radio-group@6.0.3
  - @twilio-paste/checkbox@6.0.3
  - @twilio-paste/inline-control-group@6.0.3
  - @twilio-paste/paragraph@4.0.3

## 9.0.0

### Major Changes

- [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200) [#1307](https://github.com/twilio-labs/paste/pull/1307) Thanks [@TheSisb](https://github.com/TheSisb)! - BREAKING CHANGES:

  Button components used as links (as="a" and href="") now automatically add an arrow icon if children is a string. This is a design breaking change that you should be aware of when upgrading.

  Button also adds additional validation to throw an error if the `disabled` or `loading` props are set to `true` for a Button as link. This is a functionality breaking change to existing disabled link buttons.

### Minor Changes

- [`3419ff64`](https://github.com/twilio-labs/paste/commit/3419ff64a07056ae365956d03ec62f1e5e619f29) [#1281](https://github.com/twilio-labs/paste/pull/1281) Thanks [@nkrantz](https://github.com/nkrantz)! - Created an 'icon' prop on Avatar so that users can display Paste icons inside of Avatar components.

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200), [`3419ff64`](https://github.com/twilio-labs/paste/commit/3419ff64a07056ae365956d03ec62f1e5e619f29)]:
  - @twilio-paste/alert@7.0.0
  - @twilio-paste/anchor@5.0.2
  - @twilio-paste/avatar@2.1.0
  - @twilio-paste/base-radio-checkbox@6.0.2
  - @twilio-paste/breadcrumb@4.0.2
  - @twilio-paste/button@7.0.0
  - @twilio-paste/card@3.0.3
  - @twilio-paste/checkbox@6.0.2
  - @twilio-paste/combobox@7.0.0
  - @twilio-paste/disclosure@5.0.2
  - @twilio-paste/heading@5.0.2
  - @twilio-paste/help-text@6.0.2
  - @twilio-paste/inline-control-group@6.0.2
  - @twilio-paste/input@3.0.4
  - @twilio-paste/input-box@4.0.3
  - @twilio-paste/label@6.0.2
  - @twilio-paste/list@2.0.2
  - @twilio-paste/menu@7.0.0
  - @twilio-paste/modal@7.0.0
  - @twilio-paste/paragraph@4.0.2
  - @twilio-paste/popover@6.0.0
  - @twilio-paste/radio-group@6.0.2
  - @twilio-paste/screen-reader-only@6.0.2
  - @twilio-paste/select@5.0.2
  - @twilio-paste/separator@2.0.3
  - @twilio-paste/spinner@7.0.2
  - @twilio-paste/table@2.0.3
  - @twilio-paste/tabs@2.0.3
  - @twilio-paste/textarea@3.0.4
  - @twilio-paste/toast@5.0.0
  - @twilio-paste/tooltip@4.0.2
  - @twilio-paste/truncate@6.0.2
  - @twilio-paste/aspect-ratio@4.0.3
  - @twilio-paste/flex@2.0.3
  - @twilio-paste/grid@2.0.3
  - @twilio-paste/media-object@4.0.3
  - @twilio-paste/stack@2.0.3
  - @twilio-paste/box@4.0.3
  - @twilio-paste/combobox-primitive@0.2.4
  - @twilio-paste/disclosure-primitive@0.3.4
  - @twilio-paste/menu-primitive@0.2.4
  - @twilio-paste/non-modal-dialog-primitive@0.3.4
  - @twilio-paste/sibling-box@3.0.3
  - @twilio-paste/tabs-primitive@0.2.3
  - @twilio-paste/text@4.0.2
  - @twilio-paste/tooltip-primitive@0.2.4
  - @twilio-paste/customization@2.0.2
  - @twilio-paste/style-props@3.0.2
  - @twilio-paste/theme@5.0.2
