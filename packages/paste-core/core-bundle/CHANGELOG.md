# Change Log

## 15.3.1

### Patch Changes

- [`36f33dcfd`](https://github.com/twilio-labs/paste/commit/36f33dcfdd2411122a13691eea071ef5b2f4935c) [#3738](https://github.com/twilio-labs/paste/pull/3738) Thanks [@raffaele-abramini](https://github.com/raffaele-abramini)! - [Select] Fixed a bug in dark mode on Windows where the options list was still white and the options were unreadable

- Updated dependencies [[`36f33dcfd`](https://github.com/twilio-labs/paste/commit/36f33dcfdd2411122a13691eea071ef5b2f4935c)]:
  - @twilio-paste/select@9.1.1

## 15.3.0

### Minor Changes

- [`982557683`](https://github.com/twilio-labs/paste/commit/982557683314e31fdf60ed286ffac083e9cb21a0) [#2674](https://github.com/twilio-labs/paste/pull/2674) Thanks [@nkrantz](https://github.com/nkrantz)! - [File Picker]: creates the File Picker package and adds it to the system

* [`0ead4dfa0`](https://github.com/twilio-labs/paste/commit/0ead4dfa0492a8caa50b147a81583ea8e306a665) [#2681](https://github.com/twilio-labs/paste/pull/2681) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] add new variant and color props

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Input] Add ability to unset padding with `padding="space0"`

* [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Utils] Add a `useWindowSize` hook which can be used to react to window resize events. This hook also returns the current responsive breakpoint index used by the design system.

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] Several improvements, including the addition of the much awaited `MultiselectCombobox` component!

  - Improve styling of Combobox menu items
  - Performance improvements around virtualized list items
  - Add a new `emptyState` prop that is rendered when there are no items in the list.
  - Accessibility improvements.

* [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16) [#2676](https://github.com/twilio-labs/paste/pull/2676) Thanks [@shleewhite](https://github.com/shleewhite)! - [Box, Style Props] add support for inset CSS property

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] Allow passing a `display` prop as either `inline-flex` or `flex` (default) to the `FormPillGroup` container.

* [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16) [#2676](https://github.com/twilio-labs/paste/pull/2676) Thanks [@shleewhite](https://github.com/shleewhite)! - [Side Modal] create a new Side Modal component! This modal sits on top of the page on the right side. It should be used when you want a full height modal where you can interact with the rest of the page while it is open.

### Patch Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] Allow overriding the `aria-describedby` attribute.

* [`982557683`](https://github.com/twilio-labs/paste/commit/982557683314e31fdf60ed286ffac083e9cb21a0) [#2674](https://github.com/twilio-labs/paste/pull/2674) Thanks [@nkrantz](https://github.com/nkrantz)! - [Sibling Box] adds type 'file' for use in the File Picker package

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Input Box] Remove focus boxShadow when disabled

* [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox Primtiive] Export additional Typescript types for the MultiSelect hook

- [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16) [#2676](https://github.com/twilio-labs/paste/pull/2676) Thanks [@shleewhite](https://github.com/shleewhite)! - [Modal] spread props onto ModalFooterActions component

* [`99bb7a146`](https://github.com/twilio-labs/paste/commit/99bb7a146bdd75c1b90f90769e74f162128b698e) [#2664](https://github.com/twilio-labs/paste/pull/2664) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Animation Library]: remove unecessary check for VRT tool we no longer use

- [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16) [#2676](https://github.com/twilio-labs/paste/pull/2676) Thanks [@shleewhite](https://github.com/shleewhite)! - [Minimizable Dialog] fix generic HTMLDiv prop extension, add missing propTypes, export all component interfaces, and add missing peer/dev dependencies.

* [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Screen Reader Only] Minor typescript fix for 'as' prop.

- [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16) [#2676](https://github.com/twilio-labs/paste/pull/2676) Thanks [@shleewhite](https://github.com/shleewhite)! - [Code Block] add missing peer/dev dependencies

* [`982557683`](https://github.com/twilio-labs/paste/commit/982557683314e31fdf60ed286ffac083e9cb21a0) [#2674](https://github.com/twilio-labs/paste/pull/2674) Thanks [@nkrantz](https://github.com/nkrantz)! - [Box] adds `accept` prop for use in the File Picker package

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Dropdown Library] Upgrade downshiftjs from version 6.0.6 to 6.1.7

* [`02725a235`](https://github.com/twilio-labs/paste/commit/02725a235378cd9bb3eaa6513731d98877cc5b35) [#2667](https://github.com/twilio-labs/paste/pull/2667) Thanks [@shleewhite](https://github.com/shleewhite)! - [Checkbox, RadioGroup] When no id is passed, use a unique id. This fixes an issue where id is not marked as a required prop, but the control won't work unless it is passed.

* Updated dependencies [[`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`982557683`](https://github.com/twilio-labs/paste/commit/982557683314e31fdf60ed286ffac083e9cb21a0), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16), [`99bb7a146`](https://github.com/twilio-labs/paste/commit/99bb7a146bdd75c1b90f90769e74f162128b698e), [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16), [`982557683`](https://github.com/twilio-labs/paste/commit/982557683314e31fdf60ed286ffac083e9cb21a0), [`0ead4dfa0`](https://github.com/twilio-labs/paste/commit/0ead4dfa0492a8caa50b147a81583ea8e306a665), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16), [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16), [`982557683`](https://github.com/twilio-labs/paste/commit/982557683314e31fdf60ed286ffac083e9cb21a0), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d), [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16), [`02725a235`](https://github.com/twilio-labs/paste/commit/02725a235378cd9bb3eaa6513731d98877cc5b35)]:
  - @twilio-paste/form-pill-group@5.1.0
  - @twilio-paste/sibling-box@6.0.1
  - @twilio-paste/input-box@7.1.1
  - @twilio-paste/combobox-primitive@0.3.5
  - @twilio-paste/modal@12.0.1
  - @twilio-paste/animation-library@0.3.8
  - @twilio-paste/minimizable-dialog@1.0.1
  - @twilio-paste/file-picker@1.0.0
  - @twilio-paste/avatar@6.1.0
  - @twilio-paste/input@6.1.0
  - @twilio-paste/utils@1.2.0
  - @twilio-paste/screen-reader-only@10.0.1
  - @twilio-paste/combobox@12.2.0
  - @twilio-paste/box@7.1.0
  - @twilio-paste/style-props@6.1.0
  - @twilio-paste/code-block@1.0.1
  - @twilio-paste/dropdown-library@1.1.6
  - @twilio-paste/side-modal@1.0.0
  - @twilio-paste/checkbox@10.0.1
  - @twilio-paste/radio-group@10.0.1

## 15.2.0

### Minor Changes

- [`280c8725d`](https://github.com/twilio-labs/paste/commit/280c8725d3e0c689fbaf5569fc1a83bf0e4dc5bd) [#2641](https://github.com/twilio-labs/paste/pull/2641) Thanks [@shleewhite](https://github.com/shleewhite)! - [Code Block] create a new CodeBlock component, which allows you to display readable blocks of code 🎉

* [`280c8725d`](https://github.com/twilio-labs/paste/commit/280c8725d3e0c689fbaf5569fc1a83bf0e4dc5bd) [#2641](https://github.com/twilio-labs/paste/pull/2641) Thanks [@shleewhite](https://github.com/shleewhite)! - [Syntax Highlighter] Create a new library, @twilio-paste/syntax-highlighter-library. Supports: javascript, jsx, csharp, php, ruby, python, java, json, c, bash, shell, go, and groovy.

- [`c65d69840`](https://github.com/twilio-labs/paste/commit/c65d6984039112b877f30ce30a69bc882e5652f5) [#2654](https://github.com/twilio-labs/paste/pull/2654) Thanks [@nkrantz](https://github.com/nkrantz)! - [Help text] add success and warning variants

* [`257051d67`](https://github.com/twilio-labs/paste/commit/257051d67988132c8d96b04940d35c401b622aa5) [#2642](https://github.com/twilio-labs/paste/pull/2642) Thanks [@gloriliale](https://github.com/gloriliale)! - [Inline Code] Introducing the Inline Code component! Helpful for all those moments when a piece of text is actually representing code.

### Patch Changes

- [`87146566c`](https://github.com/twilio-labs/paste/commit/87146566c4188d986da7cd4fcb84d54edc84dcf2) [#2647](https://github.com/twilio-labs/paste/pull/2647) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Combobox] Minor fix to controlled Comboboxes, where the input cursor would always jump to the end of the input string in autocomplete examples, even when you want to amend the beginning or middle. Cursor position should now remain in place as you type or modify the input value.

* [`a890926a6`](https://github.com/twilio-labs/paste/commit/a890926a6509ab0b0f86bc8d5ee876c3340b8015) [#2651](https://github.com/twilio-labs/paste/pull/2651) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Chat Log]: replaces the deprecated CloseCircleIcon with ClearIcon in the ComposerAttachment component

- [`280c8725d`](https://github.com/twilio-labs/paste/commit/280c8725d3e0c689fbaf5569fc1a83bf0e4dc5bd) [#2641](https://github.com/twilio-labs/paste/pull/2641) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button] support `<Button as='a' variant='inverse'>` and add the `target` prop

- Updated dependencies [[`280c8725d`](https://github.com/twilio-labs/paste/commit/280c8725d3e0c689fbaf5569fc1a83bf0e4dc5bd), [`280c8725d`](https://github.com/twilio-labs/paste/commit/280c8725d3e0c689fbaf5569fc1a83bf0e4dc5bd), [`87146566c`](https://github.com/twilio-labs/paste/commit/87146566c4188d986da7cd4fcb84d54edc84dcf2), [`c65d69840`](https://github.com/twilio-labs/paste/commit/c65d6984039112b877f30ce30a69bc882e5652f5), [`257051d67`](https://github.com/twilio-labs/paste/commit/257051d67988132c8d96b04940d35c401b622aa5), [`a890926a6`](https://github.com/twilio-labs/paste/commit/a890926a6509ab0b0f86bc8d5ee876c3340b8015), [`280c8725d`](https://github.com/twilio-labs/paste/commit/280c8725d3e0c689fbaf5569fc1a83bf0e4dc5bd)]:
  - @twilio-paste/code-block@1.0.0
  - @twilio-paste/syntax-highlighter-library@1.0.0
  - @twilio-paste/combobox@12.1.1
  - @twilio-paste/help-text@10.1.0
  - @twilio-paste/inline-code@1.0.0
  - @twilio-paste/chat-log@2.0.1
  - @twilio-paste/button@11.1.1

## 15.1.0

### Minor Changes

- [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Label] add the ability to use the label as a div HTML element

* [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Switch] add Switch package

- [`b79d20d2a`](https://github.com/twilio-labs/paste/commit/b79d20d2a4cdaaa85ffec09d280f7315f2556f76) [#2595](https://github.com/twilio-labs/paste/pull/2595) Thanks [@TheSisb](https://github.com/TheSisb)! - [InputBox, Combobox, Select] InputBox's `InputChevronWrapper` has refreshed styling which will appear in Select and Combobox. InputBox now exports a `getInputChevronIconColor()` function which returns a textColor to use for styling the icon child to the `InputChevronWrapper`.

* [`7e75f8119`](https://github.com/twilio-labs/paste/commit/7e75f8119067c8aad70f14b70324ca93d8d07917) [#2574](https://github.com/twilio-labs/paste/pull/2574) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [table, data-grid] adding sticky header functionality to both the Table and Data Grid components

- [`b8c3d33c9`](https://github.com/twilio-labs/paste/commit/b8c3d33c9b55b6967b075159f8fe490f7cba2d38) [#2623](https://github.com/twilio-labs/paste/pull/2623) Thanks [@shleewhite](https://github.com/shleewhite)! - [Minimizable Dialog] Introducing the all-new Minimizable Dialog component! This component can be used for a chat widget so that users can keep the chat open while they interact with the rest of the page. 🎉

* [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Design tokens] add new icon size and line height tokens (05), adust dark theme background tokens

- [`6555c7bf5`](https://github.com/twilio-labs/paste/commit/6555c7bf52e5f05dbe64d282663663fa491dd6be) [#2582](https://github.com/twilio-labs/paste/pull/2582) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button] add toggle button for secondary and secondary_icon variants

* [`563dff9a8`](https://github.com/twilio-labs/paste/commit/563dff9a889e9b880e86568add91cfe5b686f7bd) [#2604](https://github.com/twilio-labs/paste/pull/2604) Thanks [@loreina](https://github.com/loreina)! - - [menu] add menu item destructive variant

- [`68d851d7a`](https://github.com/twilio-labs/paste/commit/68d851d7a888152cd957808b1f902de310f5b01c) [#2620](https://github.com/twilio-labs/paste/pull/2620) Thanks [@shleewhite](https://github.com/shleewhite)! - [Callout] Introducing the all-new Callout component! This component is useful in those moments when you want to highlight important, static information in a page of text. 🎉

### Patch Changes

- [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Theme] add new icon size (05) to theme shape

* [`6555c7bf5`](https://github.com/twilio-labs/paste/commit/6555c7bf52e5f05dbe64d282663663fa491dd6be) [#2582](https://github.com/twilio-labs/paste/pull/2582) Thanks [@shleewhite](https://github.com/shleewhite)! - [Box] add pressed_focus and pressed_hover pseudoselectors

- [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Box] add a `_checked_hover` pseudo selector style prop for use in switch package

* [`68d851d7a`](https://github.com/twilio-labs/paste/commit/68d851d7a888152cd957808b1f902de310f5b01c) [#2620](https://github.com/twilio-labs/paste/pull/2620) Thanks [@shleewhite](https://github.com/shleewhite)! - [Alert] add screen-reader-only as peerDependency

- [`ceb26bb91`](https://github.com/twilio-labs/paste/commit/ceb26bb91348c4ace5a81522f7da3c3595c77de1) [#2634](https://github.com/twilio-labs/paste/pull/2634) Thanks [@shleewhite](https://github.com/shleewhite)! - [Menu] fix href not getting passed to MenuItem

- Updated dependencies [[`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184), [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184), [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184), [`6555c7bf5`](https://github.com/twilio-labs/paste/commit/6555c7bf52e5f05dbe64d282663663fa491dd6be), [`b79d20d2a`](https://github.com/twilio-labs/paste/commit/b79d20d2a4cdaaa85ffec09d280f7315f2556f76), [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184), [`7e75f8119`](https://github.com/twilio-labs/paste/commit/7e75f8119067c8aad70f14b70324ca93d8d07917), [`b8c3d33c9`](https://github.com/twilio-labs/paste/commit/b8c3d33c9b55b6967b075159f8fe490f7cba2d38), [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184), [`68d851d7a`](https://github.com/twilio-labs/paste/commit/68d851d7a888152cd957808b1f902de310f5b01c), [`6555c7bf5`](https://github.com/twilio-labs/paste/commit/6555c7bf52e5f05dbe64d282663663fa491dd6be), [`563dff9a8`](https://github.com/twilio-labs/paste/commit/563dff9a889e9b880e86568add91cfe5b686f7bd), [`ceb26bb91`](https://github.com/twilio-labs/paste/commit/ceb26bb91348c4ace5a81522f7da3c3595c77de1), [`68d851d7a`](https://github.com/twilio-labs/paste/commit/68d851d7a888152cd957808b1f902de310f5b01c)]:
  - @twilio-paste/label@10.1.0
  - @twilio-paste/switch@1.0.0
  - @twilio-paste/theme@8.0.1
  - @twilio-paste/box@7.0.1
  - @twilio-paste/combobox@12.1.0
  - @twilio-paste/input-box@7.1.0
  - @twilio-paste/select@9.1.0
  - @twilio-paste/data-grid@4.1.0
  - @twilio-paste/table@5.1.0
  - @twilio-paste/minimizable-dialog@1.0.0
  - @twilio-paste/design-tokens@8.1.0
  - @twilio-paste/alert@11.0.1
  - @twilio-paste/button@11.1.0
  - @twilio-paste/menu@11.1.0
  - @twilio-paste/callout@1.0.0

## 15.0.0

### Major Changes

- [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355) [#2577](https://github.com/twilio-labs/paste/pull/2577) Thanks [@zahnster](https://github.com/zahnster)! - [Design tokens] Created a new category of design token, Data Visualization, and subsequently relocated all of the Data Visualization tokens from the generic Color category. If you are using categorized Data Visualization design tokens, you will need to update their reference.

### Minor Changes

- [`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c) [#2578](https://github.com/twilio-labs/paste/pull/2578) Thanks [@TheSisb](https://github.com/TheSisb)! - [box, style-props] Enable CSS Grid on Box by adding all the requisite style props to the Box component.

* [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213) [#2573](https://github.com/twilio-labs/paste/pull/2573) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button] add "circle" and "circle_small" sizes

### Patch Changes

- [`e21a9ff58`](https://github.com/twilio-labs/paste/commit/e21a9ff580b1a0f8595752b2eeac858abf7f085f) [#2597](https://github.com/twilio-labs/paste/pull/2597) Thanks [@jb-twilio](https://github.com/jb-twilio)! - [Data Grid] include supporting types and documentation for existing colSpan prop

* [`fdfb6d759`](https://github.com/twilio-labs/paste/commit/fdfb6d759aa4d4da704aa50a15fc927d0fd6a7d9) [#2589](https://github.com/twilio-labs/paste/pull/2589) Thanks [@shleewhite](https://github.com/shleewhite)! - [Form Pill Group] fix small style issues

- [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355) [#2577](https://github.com/twilio-labs/paste/pull/2577) Thanks [@zahnster](https://github.com/zahnster)! - [Theme] Updated Data Visualization colors to use the new Data Visualization category from the Design Tokens package.

* [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355) [#2577](https://github.com/twilio-labs/paste/pull/2577) Thanks [@zahnster](https://github.com/zahnster)! - [Design tokens] Updates ordering on design tokens to be alphanumeric.

- [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355) [#2577](https://github.com/twilio-labs/paste/pull/2577) Thanks [@zahnster](https://github.com/zahnster)! - [Design tokens] Update the generic export to exclude deprecated tokens, provide pre-computed alt values, and to omit the originalValue key.

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`e21a9ff58`](https://github.com/twilio-labs/paste/commit/e21a9ff580b1a0f8595752b2eeac858abf7f085f), [`fdfb6d759`](https://github.com/twilio-labs/paste/commit/fdfb6d759aa4d4da704aa50a15fc927d0fd6a7d9), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/data-grid@4.0.0
  - @twilio-paste/form-pill-group@5.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/color-contrast-utils@3.0.0
  - @twilio-paste/alert@11.0.0
  - @twilio-paste/anchor@9.0.0
  - @twilio-paste/avatar@6.0.0
  - @twilio-paste/badge@5.0.0
  - @twilio-paste/base-radio-checkbox@10.0.0
  - @twilio-paste/breadcrumb@8.0.0
  - @twilio-paste/card@6.0.0
  - @twilio-paste/chat-log@2.0.0
  - @twilio-paste/checkbox@10.0.0
  - @twilio-paste/combobox@12.0.0
  - @twilio-paste/date-picker@3.0.0
  - @twilio-paste/disclosure@9.0.0
  - @twilio-paste/display-pill-group@5.0.0
  - @twilio-paste/heading@8.0.0
  - @twilio-paste/help-text@10.0.0
  - @twilio-paste/inline-control-group@10.0.0
  - @twilio-paste/input@6.0.0
  - @twilio-paste/input-box@7.0.0
  - @twilio-paste/label@10.0.0
  - @twilio-paste/list@5.0.0
  - @twilio-paste/menu@11.0.0
  - @twilio-paste/modal@12.0.0
  - @twilio-paste/pagination@4.0.0
  - @twilio-paste/paragraph@7.0.0
  - @twilio-paste/popover@10.0.0
  - @twilio-paste/radio-group@10.0.0
  - @twilio-paste/screen-reader-only@10.0.0
  - @twilio-paste/select@9.0.0
  - @twilio-paste/separator@5.0.0
  - @twilio-paste/skeleton-loader@3.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/table@5.0.0
  - @twilio-paste/tabs@5.0.0
  - @twilio-paste/textarea@7.0.0
  - @twilio-paste/time-picker@3.0.0
  - @twilio-paste/toast@9.0.0
  - @twilio-paste/tooltip@8.0.0
  - @twilio-paste/truncate@11.0.0
  - @twilio-paste/aspect-ratio@7.0.0
  - @twilio-paste/flex@5.0.0
  - @twilio-paste/grid@5.0.0
  - @twilio-paste/media-object@7.0.0
  - @twilio-paste/stack@5.0.0
  - @twilio-paste/sibling-box@6.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/customization@5.0.0
  - @twilio-paste/icons@9.0.0
  - @twilio-paste/data-visualization-library@2.0.0
  - @twilio-paste/alert-dialog@5.0.0

## 14.2.0

### Minor Changes

- [`f510fea8`](https://github.com/twilio-labs/paste/commit/f510fea82f732da0f7e52497285292ad9c47ae57) [#2506](https://github.com/twilio-labs/paste/pull/2506) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Alert Dialog, Modal]: changing header and footer elements to be more generic HTML elements to prevent global banner and contentinfo landmarks being placed in the DOM when using just a Dialog

* [`95b65bdfd`](https://github.com/twilio-labs/paste/commit/95b65bdfd87ba4c6a1e9fd20a6cdcf0d5d7f95bf) [#2526](https://github.com/twilio-labs/paste/pull/2526) Thanks [@TheSisb](https://github.com/TheSisb)! - [Design Tokens] add color-background-error-strongest and color-text-error-stronger tokens

- [`95b65bdfd`](https://github.com/twilio-labs/paste/commit/95b65bdfd87ba4c6a1e9fd20a6cdcf0d5d7f95bf) [#2526](https://github.com/twilio-labs/paste/pull/2526) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] add error variant, update styles, and support disabled pills

* [`f9796f1ce`](https://github.com/twilio-labs/paste/commit/f9796f1ced5a89138d789ef8f95bbf15be531d92) [#2520](https://github.com/twilio-labs/paste/pull/2520) Thanks [@gloriliale](https://github.com/gloriliale)! - [Chat Log] Add new components for related to events and bookends:

  - ChatBookend
  - ChatBookendItem
  - ChatEvent

### Patch Changes

- [`7ded6de0`](https://github.com/twilio-labs/paste/commit/7ded6de0550bb4bc2251b6a7d91707e8b17af7d0) [#2554](https://github.com/twilio-labs/paste/pull/2554) Thanks [@shleewhite](https://github.com/shleewhite)! - [Badge] fix colGap between Badge contents

* [`d9c3b850`](https://github.com/twilio-labs/paste/commit/d9c3b850577be0e34487b7475d49568053f18fe5) [#2569](https://github.com/twilio-labs/paste/pull/2569) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Select] fixed the disabled select background color

- [`95b65bdfd`](https://github.com/twilio-labs/paste/commit/95b65bdfd87ba4c6a1e9fd20a6cdcf0d5d7f95bf) [#2526](https://github.com/twilio-labs/paste/pull/2526) Thanks [@TheSisb](https://github.com/TheSisb)! - [Box] add missing disabled prop and \_focus_hover pseudoSelector prop

* [`f510fea8`](https://github.com/twilio-labs/paste/commit/f510fea82f732da0f7e52497285292ad9c47ae57) [#2506](https://github.com/twilio-labs/paste/pull/2506) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Breadcrumb] allow aria-label to be overwritten on the breadcrumb navigation element. This is useful to remove duplicate labels and for internationalization

* Updated dependencies [[`7ded6de0`](https://github.com/twilio-labs/paste/commit/7ded6de0550bb4bc2251b6a7d91707e8b17af7d0), [`f510fea8`](https://github.com/twilio-labs/paste/commit/f510fea82f732da0f7e52497285292ad9c47ae57), [`95b65bdfd`](https://github.com/twilio-labs/paste/commit/95b65bdfd87ba4c6a1e9fd20a6cdcf0d5d7f95bf), [`d9c3b850`](https://github.com/twilio-labs/paste/commit/d9c3b850577be0e34487b7475d49568053f18fe5), [`95b65bdfd`](https://github.com/twilio-labs/paste/commit/95b65bdfd87ba4c6a1e9fd20a6cdcf0d5d7f95bf), [`95b65bdfd`](https://github.com/twilio-labs/paste/commit/95b65bdfd87ba4c6a1e9fd20a6cdcf0d5d7f95bf), [`f510fea8`](https://github.com/twilio-labs/paste/commit/f510fea82f732da0f7e52497285292ad9c47ae57), [`f9796f1ce`](https://github.com/twilio-labs/paste/commit/f9796f1ced5a89138d789ef8f95bbf15be531d92)]:
  - @twilio-paste/badge@4.0.2
  - @twilio-paste/alert-dialog@4.1.0
  - @twilio-paste/modal@11.1.0
  - @twilio-paste/design-tokens@7.4.0
  - @twilio-paste/select@8.0.2
  - @twilio-paste/box@6.0.2
  - @twilio-paste/form-pill-group@4.1.0
  - @twilio-paste/breadcrumb@7.0.2
  - @twilio-paste/chat-log@1.2.0

## 14.1.0

### Minor Changes

- [`24cf22318`](https://github.com/twilio-labs/paste/commit/24cf22318149087ef0d1b67d3fe7bbc11c8883ad) [#2493](https://github.com/twilio-labs/paste/pull/2493) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Adds a new size, 'rounded_small', for the Conversations UI Kit

* [`39cfc65ea`](https://github.com/twilio-labs/paste/commit/39cfc65ea1f44e024732390527fc139a86138a72) [#2489](https://github.com/twilio-labs/paste/pull/2489) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] add a ChatLog component

- [`0aa52162`](https://github.com/twilio-labs/paste/commit/0aa5216294bb195873e46b7fe83ce71250b7c38b) [#2501](https://github.com/twilio-labs/paste/pull/2501) Thanks [@gloriliale](https://github.com/gloriliale)! - [Chat log] Add several new components related to displaying attachments:

  - ComposerAttachmentCard
  - ChatAttachment
  - ChatAttachmentLink
  - ChatAttachmentDescription

### Patch Changes

- [`ce87a07d`](https://github.com/twilio-labs/paste/commit/ce87a07de10936cce9f3d0414bae5910e3ddbc9f) [#2476](https://github.com/twilio-labs/paste/pull/2476) Thanks [@shleewhite](https://github.com/shleewhite)! - [Truncate] fix alignment when truncate is within another component

* [`a8ad034fe`](https://github.com/twilio-labs/paste/commit/a8ad034fe0868e725d50dfe02266ea3855119bdb) [#2509](https://github.com/twilio-labs/paste/pull/2509) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] Move types and styles to the component files

- [`90b019171`](https://github.com/twilio-labs/paste/commit/90b019171c520a92671d2514d48a332791f80e55) [#2515](https://github.com/twilio-labs/paste/pull/2515) Thanks [@TheSisb](https://github.com/TheSisb)! - [Display Pill Group] minor updates to the design.

* [`eb490746c`](https://github.com/twilio-labs/paste/commit/eb490746cb957a349fb217c13b886db4a7277342) [#2480](https://github.com/twilio-labs/paste/pull/2480) Thanks [@shleewhite](https://github.com/shleewhite)! - [Theme] fix isDeprecatedTheme to only throw a console error if a theme is deprecated.

* Updated dependencies [[`24cf22318`](https://github.com/twilio-labs/paste/commit/24cf22318149087ef0d1b67d3fe7bbc11c8883ad), [`ce87a07d`](https://github.com/twilio-labs/paste/commit/ce87a07de10936cce9f3d0414bae5910e3ddbc9f), [`a8ad034fe`](https://github.com/twilio-labs/paste/commit/a8ad034fe0868e725d50dfe02266ea3855119bdb), [`90b019171`](https://github.com/twilio-labs/paste/commit/90b019171c520a92671d2514d48a332791f80e55), [`39cfc65ea`](https://github.com/twilio-labs/paste/commit/39cfc65ea1f44e024732390527fc139a86138a72), [`eb490746c`](https://github.com/twilio-labs/paste/commit/eb490746cb957a349fb217c13b886db4a7277342), [`0aa52162`](https://github.com/twilio-labs/paste/commit/0aa5216294bb195873e46b7fe83ce71250b7c38b)]:
  - @twilio-paste/button@10.1.0
  - @twilio-paste/truncate@10.0.2
  - @twilio-paste/chat-log@1.1.0
  - @twilio-paste/display-pill-group@4.0.2
  - @twilio-paste/theme@7.0.2

## 14.0.0

### Major Changes

- [`70fb21269`](https://github.com/twilio-labs/paste/commit/70fb21269a49f35387b2c521aac2512727aec002) [#2454](https://github.com/twilio-labs/paste/pull/2454) Thanks [@shleewhite](https://github.com/shleewhite)! - [Textarea] Update textarea to use @twilio-paste/react-autosize-textarea library and add the resize prop which allows users to resize the textarea height.

* [`70fb2126`](https://github.com/twilio-labs/paste/commit/70fb21269a49f35387b2c521aac2512727aec002) [#2454](https://github.com/twilio-labs/paste/pull/2454) Thanks [@shleewhite](https://github.com/shleewhite)! - [react-textarea-autosize-library] add react-textarea-autosize library

### Minor Changes

- [`1c7765ac0`](https://github.com/twilio-labs/paste/commit/1c7765ac091bb50157257665337216af7aeb845d) [#2467](https://github.com/twilio-labs/paste/pull/2467) Thanks [@andipants12](https://github.com/andipants12)! - [Design tokens] Add a new generic export featuring additional metadata. This can be used in documentation or software tooling.

  - CommonJS export `tokens.gatsby.js`
  - complimentary declaration file included `tokens.gatsby.d.ts`
  - Maps token buckets/categories (e.g. "background-colors") to a list of token objects.

### Patch Changes

- [`8263d8a3`](https://github.com/twilio-labs/paste/commit/8263d8a3618685582cd282aae9877a00a92c320c) [#2452](https://github.com/twilio-labs/paste/pull/2452) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] allow both src and icon props at the same

* [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [Table] removed uneccessarily spread prop on Tr component and set an initial value correctly for the context provider

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

* [`3bfd6394`](https://github.com/twilio-labs/paste/commit/3bfd639407f60386fdd92b76d66e5e506979c282) [#2456](https://github.com/twilio-labs/paste/pull/2456) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] simplify logic for when to show image or icon

* Updated dependencies [[`8263d8a3`](https://github.com/twilio-labs/paste/commit/8263d8a3618685582cd282aae9877a00a92c320c), [`70fb21269`](https://github.com/twilio-labs/paste/commit/70fb21269a49f35387b2c521aac2512727aec002), [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866), [`70fb2126`](https://github.com/twilio-labs/paste/commit/70fb21269a49f35387b2c521aac2512727aec002), [`1c7765ac0`](https://github.com/twilio-labs/paste/commit/1c7765ac091bb50157257665337216af7aeb845d), [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866), [`3bfd6394`](https://github.com/twilio-labs/paste/commit/3bfd639407f60386fdd92b76d66e5e506979c282)]:
  - @twilio-paste/avatar@5.0.1
  - @twilio-paste/textarea@6.0.0
  - @twilio-paste/table@4.0.1
  - @twilio-paste/react-textarea-autosize-library@1.0.0
  - @twilio-paste/design-tokens@7.3.0
  - @twilio-paste/color-contrast-utils@2.0.5
  - @twilio-paste/alert@10.0.1
  - @twilio-paste/alert-dialog@4.0.1
  - @twilio-paste/anchor@8.0.1
  - @twilio-paste/badge@4.0.1
  - @twilio-paste/base-radio-checkbox@9.0.1
  - @twilio-paste/breadcrumb@7.0.1
  - @twilio-paste/button@10.0.1
  - @twilio-paste/card@5.0.1
  - @twilio-paste/chat-log@1.0.1
  - @twilio-paste/checkbox@9.0.1
  - @twilio-paste/combobox@11.0.2
  - @twilio-paste/data-grid@3.0.2
  - @twilio-paste/date-picker@2.0.1
  - @twilio-paste/disclosure@8.0.2
  - @twilio-paste/display-pill-group@4.0.1
  - @twilio-paste/form-pill-group@4.0.2
  - @twilio-paste/heading@7.0.1
  - @twilio-paste/help-text@9.0.1
  - @twilio-paste/inline-control-group@9.0.1
  - @twilio-paste/input@5.0.1
  - @twilio-paste/input-box@6.0.1
  - @twilio-paste/label@9.0.1
  - @twilio-paste/list@4.0.1
  - @twilio-paste/menu@10.0.2
  - @twilio-paste/modal@11.0.2
  - @twilio-paste/pagination@3.0.1
  - @twilio-paste/paragraph@6.0.1
  - @twilio-paste/popover@9.0.2
  - @twilio-paste/radio-group@9.0.1
  - @twilio-paste/screen-reader-only@9.0.1
  - @twilio-paste/select@8.0.1
  - @twilio-paste/separator@4.0.1
  - @twilio-paste/skeleton-loader@2.0.1
  - @twilio-paste/spinner@10.0.1
  - @twilio-paste/tabs@4.0.2
  - @twilio-paste/time-picker@2.0.1
  - @twilio-paste/toast@8.0.1
  - @twilio-paste/tooltip@7.0.2
  - @twilio-paste/truncate@10.0.1
  - @twilio-paste/aspect-ratio@6.0.1
  - @twilio-paste/flex@4.0.1
  - @twilio-paste/grid@4.0.1
  - @twilio-paste/media-object@6.0.1
  - @twilio-paste/stack@4.0.1
  - @twilio-paste/box@6.0.1
  - @twilio-paste/combobox-primitive@0.3.4
  - @twilio-paste/disclosure-primitive@0.3.9
  - @twilio-paste/menu-primitive@0.2.10
  - @twilio-paste/modal-dialog-primitive@0.3.2
  - @twilio-paste/non-modal-dialog-primitive@0.3.10
  - @twilio-paste/sibling-box@5.0.1
  - @twilio-paste/tabs-primitive@0.2.8
  - @twilio-paste/text@6.0.1
  - @twilio-paste/tooltip-primitive@0.2.9
  - @twilio-paste/customization@4.0.2
  - @twilio-paste/animation-library@0.3.7
  - @twilio-paste/clipboard-copy-library@1.0.4
  - @twilio-paste/data-visualization-library@1.0.1
  - @twilio-paste/dropdown-library@1.1.5
  - @twilio-paste/reakit-library@0.8.6
  - @twilio-paste/styling-library@1.0.2
  - @twilio-paste/uid-library@0.2.5
  - @twilio-paste/style-props@5.0.2
  - @twilio-paste/theme@7.0.1
  - @twilio-paste/types@3.1.8
  - @twilio-paste/utils@1.1.5

## 13.0.1

### Patch Changes

- [`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - Made a slight improvement to the TypeScript typings of several packages for better interoperability.

* [`81fb5944`](https://github.com/twilio-labs/paste/commit/81fb5944168dbbb5579a6d0ebf2cff37d2455cd8) [#2410](https://github.com/twilio-labs/paste/pull/2410) Thanks [@nkrantz](https://github.com/nkrantz)! - [Tabs] Enable left/right arrow key tab switching on vertical tabs in addition to up/down

- [`12a5e83ed`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - [Styling] Downgrade `emotion` libraries by one minor version to resolve a bug in the newest version. [#2429](https://github.com/twilio-labs/paste/issues/2429)

* [`9983b52e9`](https://github.com/twilio-labs/paste/commit/9983b52e92d15373824e4b3cc10572b2f51d58f8) [#2419](https://github.com/twilio-labs/paste/pull/2419) Thanks [@gloriliale](https://github.com/gloriliale)! - [Combobox, Data grid, Color contrast utils, Customization, Design tokens, Icons, Style props, Token contrast checker, Types, Utils, Website] Consolidate and update lodash dependencies and the way lodash is imported in our files, per lodash's guidance. Details: https://lodash.com/per-method-packages

* Updated dependencies [[`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5), [`81fb5944`](https://github.com/twilio-labs/paste/commit/81fb5944168dbbb5579a6d0ebf2cff37d2455cd8), [`12a5e83ed`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5), [`9983b52e9`](https://github.com/twilio-labs/paste/commit/9983b52e92d15373824e4b3cc10572b2f51d58f8)]:
  - @twilio-paste/disclosure@8.0.1
  - @twilio-paste/form-pill-group@4.0.1
  - @twilio-paste/menu@10.0.1
  - @twilio-paste/modal@11.0.1
  - @twilio-paste/popover@9.0.1
  - @twilio-paste/tabs@4.0.1
  - @twilio-paste/tooltip@7.0.1
  - @twilio-paste/disclosure-primitive@0.3.8
  - @twilio-paste/menu-primitive@0.2.9
  - @twilio-paste/modal-dialog-primitive@0.3.1
  - @twilio-paste/non-modal-dialog-primitive@0.3.9
  - @twilio-paste/tabs-primitive@0.2.7
  - @twilio-paste/tooltip-primitive@0.2.8
  - @twilio-paste/styling-library@1.0.1
  - @twilio-paste/color-contrast-utils@2.0.4
  - @twilio-paste/combobox@11.0.1
  - @twilio-paste/data-grid@3.0.1
  - @twilio-paste/customization@4.0.1
  - @twilio-paste/design-tokens@7.2.2
  - @twilio-paste/style-props@5.0.1
  - @twilio-paste/types@3.1.7
  - @twilio-paste/utils@1.1.4

## 13.0.0

### Major Changes

- [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Styling Library] Upgrade to Emotion v11

  - replace `@emotion/core` with `@emotion/react`
  - bump `@emotion/styled` to v11
  - remove `emotion`, remove `emotion-themeing`
  - both packages now included with `@emotion/react`

### Minor Changes

- [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Text] Update tests to account for `stylis` parser change in jest emotion matchers.

* [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Box] Small updates to usage of `styled` to create the `Box` component. Small type updates (to adopt utility types).

### Patch Changes

- [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Modal] Remove comment for obsolete ESLint rule.

* [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Sibling Box] Remove obsolete eslint ignore statement; cosmetic change only.

- [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Theme] Small edit to cased named imports and usage of `keyof` in types.

* [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Textarea] Remove comment for obsolete lint rule

* Updated dependencies [[`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/modal@11.0.0
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/sibling-box@5.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/textarea@5.0.0
  - @twilio-paste/alert@10.0.0
  - @twilio-paste/alert-dialog@4.0.0
  - @twilio-paste/anchor@8.0.0
  - @twilio-paste/avatar@5.0.0
  - @twilio-paste/badge@4.0.0
  - @twilio-paste/base-radio-checkbox@9.0.0
  - @twilio-paste/breadcrumb@7.0.0
  - @twilio-paste/button@10.0.0
  - @twilio-paste/card@5.0.0
  - @twilio-paste/checkbox@9.0.0
  - @twilio-paste/combobox@11.0.0
  - @twilio-paste/data-grid@3.0.0
  - @twilio-paste/date-picker@2.0.0
  - @twilio-paste/disclosure@8.0.0
  - @twilio-paste/display-pill-group@4.0.0
  - @twilio-paste/form-pill-group@4.0.0
  - @twilio-paste/heading@7.0.0
  - @twilio-paste/help-text@9.0.0
  - @twilio-paste/inline-control-group@9.0.0
  - @twilio-paste/input@5.0.0
  - @twilio-paste/input-box@6.0.0
  - @twilio-paste/label@9.0.0
  - @twilio-paste/list@4.0.0
  - @twilio-paste/menu@10.0.0
  - @twilio-paste/pagination@3.0.0
  - @twilio-paste/paragraph@6.0.0
  - @twilio-paste/popover@9.0.0
  - @twilio-paste/radio-group@9.0.0
  - @twilio-paste/screen-reader-only@9.0.0
  - @twilio-paste/select@8.0.0
  - @twilio-paste/separator@4.0.0
  - @twilio-paste/skeleton-loader@2.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/table@4.0.0
  - @twilio-paste/tabs@4.0.0
  - @twilio-paste/time-picker@2.0.0
  - @twilio-paste/toast@8.0.0
  - @twilio-paste/tooltip@7.0.0
  - @twilio-paste/truncate@10.0.0
  - @twilio-paste/aspect-ratio@6.0.0
  - @twilio-paste/flex@4.0.0
  - @twilio-paste/grid@4.0.0
  - @twilio-paste/media-object@6.0.0
  - @twilio-paste/stack@4.0.0
  - @twilio-paste/customization@4.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/data-visualization-library@1.0.0
  - @twilio-paste/style-props@5.0.0
  - @twilio-paste/chat-log@1.0.0

## 12.1.0

### Minor Changes

- [`28d87c14b`](https://github.com/twilio-labs/paste/commit/28d87c14b8f58005b8bdc9691c86acc2cef6ad27) [#2383](https://github.com/twilio-labs/paste/pull/2383) Thanks [@andipants12](https://github.com/andipants12)! - [Box, Text, Style-props] CSS types package dependency upgrade

### Patch Changes

- [`13aad7aa7`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba) [#2375](https://github.com/twilio-labs/paste/pull/2375) Thanks [@TheSisb](https://github.com/TheSisb)! - [Checkbox] Minor code refactor

* [`322400c6`](https://github.com/twilio-labs/paste/commit/322400c659678e71afe9e6fc2db543ec7e3046ba) [#2282](https://github.com/twilio-labs/paste/pull/2282) Thanks [@zahnster](https://github.com/zahnster)! - [Skeleton Loader] Update Spring animation to CSS animation

- [`13aad7aa7`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba) [#2375](https://github.com/twilio-labs/paste/pull/2375) Thanks [@TheSisb](https://github.com/TheSisb)! - [RadioGroup] Allows usage of uncontrolled Radios and RadioGroups

* [`f7e6ac1f`](https://github.com/twilio-labs/paste/commit/f7e6ac1f01f63c97fce0a45978f1a8d2d072405c) [#2233](https://github.com/twilio-labs/paste/pull/2233) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Alert Dialog] improved typing

- [`322400c6`](https://github.com/twilio-labs/paste/commit/322400c659678e71afe9e6fc2db543ec7e3046ba) [#2282](https://github.com/twilio-labs/paste/pull/2282) Thanks [@zahnster](https://github.com/zahnster)! - [Animation Library] Updates React Spring dependencies to resolve bug with RequestAnimationFrame calls

* [`f7e6ac1f0`](https://github.com/twilio-labs/paste/commit/f7e6ac1f01f63c97fce0a45978f1a8d2d072405c) [#2233](https://github.com/twilio-labs/paste/pull/2233) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Modal] export ModalDialogContentProps interface

- [`13aad7aa`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba) [#2375](https://github.com/twilio-labs/paste/pull/2375) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sibling-box, Base-radio-checkbox] Add styles for when the element has an error while it is disabled

- Updated dependencies [[`28d87c14b`](https://github.com/twilio-labs/paste/commit/28d87c14b8f58005b8bdc9691c86acc2cef6ad27), [`13aad7aa7`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba), [`322400c6`](https://github.com/twilio-labs/paste/commit/322400c659678e71afe9e6fc2db543ec7e3046ba), [`13aad7aa7`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba), [`f7e6ac1f`](https://github.com/twilio-labs/paste/commit/f7e6ac1f01f63c97fce0a45978f1a8d2d072405c), [`322400c6`](https://github.com/twilio-labs/paste/commit/322400c659678e71afe9e6fc2db543ec7e3046ba), [`f7e6ac1f0`](https://github.com/twilio-labs/paste/commit/f7e6ac1f01f63c97fce0a45978f1a8d2d072405c), [`dee7d9b01`](https://github.com/twilio-labs/paste/commit/dee7d9b01c0b7b2fee64f7a01cadd1238521ab8f), [`13aad7aa`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba)]:
  - @twilio-paste/box@5.2.0
  - @twilio-paste/text@5.2.0
  - @twilio-paste/style-props@4.1.0
  - @twilio-paste/checkbox@8.0.1
  - @twilio-paste/skeleton-loader@1.0.4
  - @twilio-paste/radio-group@8.0.1
  - @twilio-paste/alert-dialog@3.0.1
  - @twilio-paste/animation-library@0.3.6
  - @twilio-paste/modal@10.0.1
  - @twilio-paste/color-contrast-utils@2.0.3
  - @twilio-paste/tabs@3.0.3
  - @twilio-paste/popover@8.0.1
  - @twilio-paste/styling-library@0.3.9
  - @twilio-paste/types@3.1.6
  - @twilio-paste/sibling-box@4.0.3
  - @twilio-paste/base-radio-checkbox@8.0.1

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
