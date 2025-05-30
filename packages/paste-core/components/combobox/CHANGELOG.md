# Change Log

## 17.0.2

### Patch Changes

- [`6040893c0`](https://github.com/twilio-labs/paste/commit/6040893c0b7c8c0e2d61d14d2278de2b9829a825) [#4311](https://github.com/twilio-labs/paste/pull/4311) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Base Radio Checkbox, Button, Combobox, File Picker, File Uploader, Input, Input Box, Menu, Select, Textarea, Visual Picker] Update styles of form related components

* [`16e8016a0`](https://github.com/twilio-labs/paste/commit/16e8016a0654601c8c12224603daa1ada56708db) [#4334](https://github.com/twilio-labs/paste/pull/4334) Thanks [@serifluous](https://github.com/serifluous)! - Visible changes in dark themes only. Redarkened color-background-weak and added color-background-weaker-elevation

## 17.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 17.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/form-pill-group@9.0.0
  - @twilio-paste/help-text@14.0.0
  - @twilio-paste/input@10.0.0
  - @twilio-paste/input-box@11.0.0
  - @twilio-paste/label@14.0.0
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/spinner@15.0.0
  - @twilio-paste/truncate@15.0.0
  - @twilio-paste/flex@9.0.0
  - @twilio-paste/media-object@11.0.0
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/combobox-primitive@3.0.0
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/dropdown-library@4.0.0
  - @twilio-paste/reakit-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0
  - @twilio-paste/utils@6.0.0

## 16.3.1

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 16.3.0

### Minor Changes

- [`37acfcdf6`](https://github.com/twilio-labs/paste/commit/37acfcdf605aeda52ebf1b4b345717a9682f0ed6) [#4049](https://github.com/twilio-labs/paste/pull/4049) Thanks [@nkrantz](https://github.com/nkrantz)! - [Combobox] Add new prop `usePortal` which defaults to `true`. The prop was introduced to address a bug when Comboboxes are placed in Popovers. usePortal should be set to false when using a Combobox inside a Popover in order to retain full functionality.

### Patch Changes

- [`f612d1ba6`](https://github.com/twilio-labs/paste/commit/f612d1ba651b6c50cec0d87e4546a1d83ce28d57) [#4047](https://github.com/twilio-labs/paste/pull/4047) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Combobox] added ellipse styling to text that exceeds length of a single select combobox when not active

## 16.2.1

### Patch Changes

- [`c58b3bfbd`](https://github.com/twilio-labs/paste/commit/c58b3bfbd50d07221eff953feed9bbb2b9a84186) [#3540](https://github.com/twilio-labs/paste/pull/3540) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] Fix `placeholder` cropping issue in MultiselectCombobox

## 16.2.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Combobox] Improved TsDoc type annotations

## 16.1.0

### Minor Changes

- [`4d5dc6842`](https://github.com/twilio-labs/paste/commit/4d5dc684258f3f5766b402f988191572aaf42848) [#3470](https://github.com/twilio-labs/paste/pull/3470) Thanks [@TheSisb](https://github.com/TheSisb)! - [MultiSelect Combobox] allow inversion of control with the internal state so that consumers can manage the selectedItems array themselves. This enables functionality like clearing the selectedItems through an external Button.

### Patch Changes

- [`f6320be83`](https://github.com/twilio-labs/paste/commit/f6320be83fd744aee1c677da1dbaed1e1c89b5ce) [#3462](https://github.com/twilio-labs/paste/pull/3462) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [combobox]: improve the way combobox handles hidden labels and conditional help text related aria attributes for improved accessibility

## 16.0.1

### Patch Changes

- [`e6ebb11f7`](https://github.com/twilio-labs/paste/commit/e6ebb11f71ee930a0cc5fb7256f750ff5caa8498) [#3450](https://github.com/twilio-labs/paste/pull/3450) Thanks [@TheSisb](https://github.com/TheSisb)! - [MultiselectCombobox] fix bug where passing `required` would block form submit events. `required` now only blocks the submit event if no items are selected rather than when the input box is blank.

* [`29b6b7b65`](https://github.com/twilio-labs/paste/commit/29b6b7b65ced04ee9f7ac3361fdd5c60025f21bf) [#3459](https://github.com/twilio-labs/paste/pull/3459) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] Now opens the dropdown menu upwards when positioned towards the bottom of the viewport.

## 16.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/form-pill-group@8.0.0
  - @twilio-paste/help-text@13.0.0
  - @twilio-paste/input@9.0.0
  - @twilio-paste/input-box@10.0.0
  - @twilio-paste/label@13.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/flex@8.0.0
  - @twilio-paste/media-object@10.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/combobox-primitive@2.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/dropdown-library@3.0.0
  - @twilio-paste/reakit-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0
  - @twilio-paste/utils@5.0.0

## 15.0.4

### Patch Changes

- [`abf6c1912`](https://github.com/twilio-labs/paste/commit/abf6c19126a1e4fef5898c10354efe2141f27464) [#3347](https://github.com/twilio-labs/paste/pull/3347) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Combobox] small fix for multiselect combobox listbox positioning now that it uses a portal

## 15.0.3

### Patch Changes

- [`db35f7150`](https://github.com/twilio-labs/paste/commit/db35f71500623bf090741039ba8e49a7ed581c1a) [#3217](https://github.com/twilio-labs/paste/pull/3217) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox]: ability to have a truly visually hidden label for search comboboxes

## 15.0.2

### Patch Changes

- [`1ada1e37c`](https://github.com/twilio-labs/paste/commit/1ada1e37c758bc79c6ed0e5641e4b74dbe685553) [#3260](https://github.com/twilio-labs/paste/pull/3260) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] prevent selection of disabled items when using keyboard navigation and the enter key

## 15.0.1

### Patch Changes

- [`215a44717`](https://github.com/twilio-labs/paste/commit/215a44717bc11c87479e9b5c367749d87db31ffb) [#3142](https://github.com/twilio-labs/paste/pull/3142) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] Fix incorrect dropdown menu position when Combobox is opened on a scrolled page.

* [`c882c0884`](https://github.com/twilio-labs/paste/commit/c882c088430d5ce655befb5d01de2a445203220b) [#3140](https://github.com/twilio-labs/paste/pull/3140) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] Multiselect Combobox now correctly clears the input value when selecting an item in the dropdown.

## 15.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`1e100909f`](https://github.com/twilio-labs/paste/commit/1e100909f279ddb0b52287a1ad45de97fb3b4981) [#3105](https://github.com/twilio-labs/paste/pull/3105) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Combobox, Form Pill Group] Updated Combobox styles as part of the One Twilio design update.

  Fixed height and alignment issues with Multi select Combobox and form pills

- Updated dependencies [[`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08), [`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`1e100909f`](https://github.com/twilio-labs/paste/commit/1e100909f279ddb0b52287a1ad45de97fb3b4981), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/button@13.0.0
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/form-pill-group@7.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/help-text@12.0.0
  - @twilio-paste/input@8.0.0
  - @twilio-paste/input-box@9.0.0
  - @twilio-paste/label@12.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/flex@7.0.0
  - @twilio-paste/media-object@9.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0
  - @twilio-paste/utils@4.0.0

## 14.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/button@12.0.0
  - @twilio-paste/form-pill-group@6.0.0
  - @twilio-paste/help-text@11.0.0
  - @twilio-paste/input@7.0.0
  - @twilio-paste/input-box@8.0.0
  - @twilio-paste/label@11.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/spinner@12.0.0
  - @twilio-paste/flex@6.0.0
  - @twilio-paste/media-object@8.0.0
  - @twilio-paste/stack@6.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/combobox-primitive@1.0.0
  - @twilio-paste/text@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/icons@10.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/dropdown-library@2.0.0
  - @twilio-paste/reakit-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/utils@3.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 13.0.3

### Patch Changes

- [`2fe476a71`](https://github.com/twilio-labs/paste/commit/2fe476a71f73f96e69d2a2b6b451e98b0799d9a1) [#2949](https://github.com/twilio-labs/paste/pull/2949) Thanks [@shleewhite](https://github.com/shleewhite)! - [Combobox] Render the listbox in a portal to fix a bug where the contents of the listbox are cut off when it placed inside a scrolling container. Adds a new dependency on @radix-ui/react-use-rect.

## 13.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 13.0.1

### Patch Changes

- [`efffcde51`](https://github.com/twilio-labs/paste/commit/efffcde5161524fb00d09942fca0471315b2fbe5) [#2782](https://github.com/twilio-labs/paste/pull/2782) Thanks [@shleewhite](https://github.com/shleewhite)! - [Combobox] remove inherited HTML `autoComplete` prop because it conflicts with the autocomplete prop and remove state prop from Multiselect Combobox because we don't support using it with the useComboboxState hook.

* [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 13.0.0

### Patch Changes

- [`d068c208a`](https://github.com/twilio-labs/paste/commit/d068c208aa2657a48656acc47381ee9a8920d555) [#2711](https://github.com/twilio-labs/paste/pull/2711) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] Refine typings and styling for group options for Multiselect Combobox.

- Updated dependencies [[`38a210f9f`](https://github.com/twilio-labs/paste/commit/38a210f9f7c229a46ab9850f528eb60204dd1273)]:
  - @twilio-paste/utils@2.0.0

## 12.2.0

### Minor Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Combobox] Several improvements, including the addition of the much awaited `MultiselectCombobox` component!

  - Improve styling of Combobox menu items
  - Performance improvements around virtualized list items
  - Add a new `emptyState` prop that is rendered when there are no items in the list.
  - Accessibility improvements.

## 12.1.1

### Patch Changes

- [`87146566c`](https://github.com/twilio-labs/paste/commit/87146566c4188d986da7cd4fcb84d54edc84dcf2) [#2647](https://github.com/twilio-labs/paste/pull/2647) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Combobox] Minor fix to controlled Comboboxes, where the input cursor would always jump to the end of the input string in autocomplete examples, even when you want to amend the beginning or middle. Cursor position should now remain in place as you type or modify the input value.

## 12.1.0

### Minor Changes

- [`b79d20d2a`](https://github.com/twilio-labs/paste/commit/b79d20d2a4cdaaa85ffec09d280f7315f2556f76) [#2595](https://github.com/twilio-labs/paste/pull/2595) Thanks [@TheSisb](https://github.com/TheSisb)! - [InputBox, Combobox, Select] InputBox's `InputChevronWrapper` has refreshed styling which will appear in Select and Combobox. InputBox now exports a `getInputChevronIconColor()` function which returns a textColor to use for styling the icon child to the `InputChevronWrapper`.

## 12.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/help-text@10.0.0
  - @twilio-paste/input@6.0.0
  - @twilio-paste/input-box@7.0.0
  - @twilio-paste/label@10.0.0
  - @twilio-paste/screen-reader-only@10.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/flex@5.0.0
  - @twilio-paste/stack@5.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/icons@9.0.0

## 11.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 11.0.1

### Patch Changes

- [`9983b52e9`](https://github.com/twilio-labs/paste/commit/9983b52e92d15373824e4b3cc10572b2f51d58f8) [#2419](https://github.com/twilio-labs/paste/pull/2419) Thanks [@gloriliale](https://github.com/gloriliale)! - [Combobox, Data grid, Color contrast utils, Customization, Design tokens, Icons, Style props, Token contrast checker, Types, Utils, Website] Consolidate and update lodash dependencies and the way lodash is imported in our files, per lodash's guidance. Details: https://lodash.com/per-method-packages

## 11.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/button@10.0.0
  - @twilio-paste/help-text@9.0.0
  - @twilio-paste/input@5.0.0
  - @twilio-paste/input-box@6.0.0
  - @twilio-paste/label@9.0.0
  - @twilio-paste/screen-reader-only@9.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/flex@4.0.0
  - @twilio-paste/stack@4.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 10.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/button@9.0.0
  - @twilio-paste/help-text@8.0.0
  - @twilio-paste/screen-reader-only@8.0.0
  - @twilio-paste/spinner@9.0.0
  - @twilio-paste/label@8.0.0

## 9.1.0

### Minor Changes

- [`f5ce8b0c6`](https://github.com/twilio-labs/paste/commit/f5ce8b0c63154caa26a0e5174a040aa4dcc4154a) [#2335](https://github.com/twilio-labs/paste/pull/2335) Thanks [@andipants12](https://github.com/andipants12)! - [Fix] Remediate erratic scrolling behavior for grouped combobox. Scroll function for the virtualization library was being called even though grouped comboboxes are not virtualized. The jumping behavior on scroll was observed because the indices in the virtual list and the actual list did not match. Added guard to prevent the scroll function from the virtualization library from being called.

## 9.0.3

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 9.0.2

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 9.0.1

### Patch Changes

- [`72b2db53`](https://github.com/twilio-labs/paste/commit/72b2db538cf91e12867a7d0f64ef0736e60c37e6) [#2155](https://github.com/twilio-labs/paste/pull/2155) Thanks [@andipants12](https://github.com/andipants12)! - [Combobox] Do not conditionally render the `useCombobox` hook inside the `Combobox` component.

  - passing a state object from `useCombobox` via props to the component caused unexpected side effects
  - introduces conditional render of the component with its' own hook invocation, or with the forwarded state object

## 9.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/help-text@7.0.0
  - @twilio-paste/input@4.0.0
  - @twilio-paste/input-box@5.0.0
  - @twilio-paste/label@7.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/flex@3.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 8.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 8.1.0

### Minor Changes

- [`b17344da`](https://github.com/twilio-labs/paste/commit/b17344dad70812566afa5206786968e59f50efb2) [#1922](https://github.com/twilio-labs/paste/pull/1922) Thanks [@andipants12](https://github.com/andipants12)! - [Combobox] Fix virtualization bug and add virtualization to combobox when an option template is used. The virtualization library we use, react-virtual, provides a ref that is required for correct sizing of virtualized items. The ref from this library's hook was being overridden by another, thus, the virtualized options were not resizing correctly. This behavior was observed in comboboxes that were not using option templates, and had sufficiently long option text.

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 8.0.2

### Patch Changes

- [`3a5a90b7`](https://github.com/twilio-labs/paste/commit/3a5a90b74201fece264c2a07344810d52c7b3bc4) [#1897](https://github.com/twilio-labs/paste/pull/1897) Thanks [@nkrantz](https://github.com/nkrantz)! - [Combobox] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

* [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd) [#1886](https://github.com/twilio-labs/paste/pull/1886) Thanks [@andipants12](https://github.com/andipants12)! - [Combobox]: Update customization tests and stories to use more explicit a more explicit element name for the chevron wrapper. No consumer change required.

## 8.0.1

### Patch Changes

- [`fe4a2383`](https://github.com/twilio-labs/paste/commit/fe4a23834e9aecf2ab249651e8713ae5d37e8d3d) [#1824](https://github.com/twilio-labs/paste/pull/1824) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Combobox], [Select] and [Textarea] all given a default element name to meet their PropTypes validation.

## 8.0.0

### Patch Changes

- [`2eb6dd74`](https://github.com/twilio-labs/paste/commit/2eb6dd74eb1cdc06079e64a711e71b93d4f9c823) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Combobox] Added the `element` prop for customization in order to fix a Typescript error after the `element` prop was added as a required prop for `InputBox`. This does not include any default naming, tests, or stories. It only fixes the Typescript error.

- Updated dependencies [[`c9cc610b`](https://github.com/twilio-labs/paste/commit/c9cc610b6834fd9be22488e8e727ee65b1114aa0)]:
  - @twilio-paste/combobox-primitive@0.3.0

## 7.0.4

### Patch Changes

- [`b0e8ab80`](https://github.com/twilio-labs/paste/commit/b0e8ab80d557f102ed5bed3a693d0e53eb99a7c3) [#1725](https://github.com/twilio-labs/paste/pull/1725) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Allow Downshift to handle input events past by the component consumer. This allows for event data and internal state of the combobox to stay in sync correctly

## 7.0.3

### Patch Changes

- [`b1dd8b0c`](https://github.com/twilio-labs/paste/commit/b1dd8b0c385e59c35c4655479d862864db4d8e7b) [#1478](https://github.com/twilio-labs/paste/pull/1478) Thanks [@richbachman](https://github.com/richbachman)! - Fixed the `required` prop not being passed to the `textbox` inside Combobox.

## 7.0.2

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 7.0.1

### Patch Changes

- [`7bfaff38`](https://github.com/twilio-labs/paste/commit/7bfaff381bc03a404aa0340cd487fba12527ad56) [#1390](https://github.com/twilio-labs/paste/pull/1390) Thanks [@TheSisb](https://github.com/TheSisb)! - Combobox: improve accessibility of hovered combobox option by keeping it the same color.

## 7.0.0

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200)]:
  - @twilio-paste/button@7.0.0

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/help-text@6.0.1
  - @twilio-paste/input@3.0.3
  - @twilio-paste/input-box@4.0.2
  - @twilio-paste/label@6.0.1
  - @twilio-paste/screen-reader-only@6.0.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/flex@2.0.2
  - @twilio-paste/stack@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/help-text@6.0.0
  - @twilio-paste/screen-reader-only@6.0.0
  - @twilio-paste/spinner@7.0.0
  - @twilio-paste/label@6.0.0

## 5.0.2

### Patch Changes

- Updated dependencies [[`14d33968`](https://github.com/twilio-labs/paste/commit/14d339680a7d3fb53b62b70762e4d2e786b473d6)]:
  - @twilio-paste/input@3.0.2

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/help-text@5.0.1
  - @twilio-paste/input@3.0.1
  - @twilio-paste/input-box@4.0.1
  - @twilio-paste/label@5.0.1
  - @twilio-paste/screen-reader-only@5.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/flex@2.0.1
  - @twilio-paste/stack@2.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`b1b4ac39`](https://github.com/twilio-labs/paste/commit/b1b4ac39ac70ec70bd9e150f2b8f94a123f1e1a6), [`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/label@5.0.0
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/help-text@5.0.0
  - @twilio-paste/input@3.0.0
  - @twilio-paste/input-box@4.0.0
  - @twilio-paste/screen-reader-only@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/flex@2.0.0
  - @twilio-paste/stack@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/help-text@4.0.3
  - @twilio-paste/input@2.0.2
  - @twilio-paste/screen-reader-only@4.0.3
  - @twilio-paste/flex@1.0.2
  - @twilio-paste/stack@1.0.2
  - @twilio-paste/combobox-primitive@0.2.3
  - @twilio-paste/label@4.0.3
  - @twilio-paste/button@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/help-text@4.0.2
  - @twilio-paste/input@2.0.1
  - @twilio-paste/input-box@3.0.1
  - @twilio-paste/label@4.0.2
  - @twilio-paste/screen-reader-only@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/stack@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/help-text@4.0.1
  - @twilio-paste/screen-reader-only@4.0.1
  - @twilio-paste/spinner@5.0.1
  - @twilio-paste/label@4.0.1

## 4.0.0

### Minor Changes

- [`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73) [#1117](https://github.com/twilio-labs/paste/pull/1117) Thanks [@TheSisb](https://github.com/TheSisb)! - Comboboxes are now virtualized, but only when the 'groupItemsBy' and 'optionTemplate' props are not provided.

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/help-text@4.0.0
  - @twilio-paste/input@2.0.0
  - @twilio-paste/input-box@3.0.0
  - @twilio-paste/label@4.0.0
  - @twilio-paste/screen-reader-only@4.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/stack@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/label@3.0.1
  - @twilio-paste/stack@0.3.2
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/input-box@2.1.2
  - @twilio-paste/combobox-primitive@0.2.2
  - @twilio-paste/flex@0.5.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/input@1.2.3
  - @twilio-paste/box@2.13.2
  - @twilio-paste/screen-reader-only@3.0.1
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/help-text@3.0.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/help-text@3.0.0
  - @twilio-paste/screen-reader-only@3.0.0
  - @twilio-paste/spinner@4.0.0
  - @twilio-paste/label@3.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.1.0...@twilio-paste/combobox@2.1.1) (2021-01-25)

### Bug Fixes

- **combobox:** genericise some prop iterfaces for friendlier typings ([66f3174](https://github.com/twilio-labs/paste/commit/66f3174fddef030ad6c66a65b77725377c7b556e))

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.7...@twilio-paste/combobox@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.6...@twilio-paste/combobox@2.0.7) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/combobox

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.5...@twilio-paste/combobox@2.0.6) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/combobox

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.4...@twilio-paste/combobox@2.0.5) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/combobox

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.3...@twilio-paste/combobox@2.0.4) (2021-01-08)

### Bug Fixes

- **combobox:** fix grouped indexes so keyboard selection works ([#1070](https://github.com/twilio-labs/paste/issues/1070)) ([e5b1a9f](https://github.com/twilio-labs/paste/commit/e5b1a9fd2048256dc3b72da1ccc94812cb6fd803))

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.2...@twilio-paste/combobox@2.0.3) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/combobox

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.1...@twilio-paste/combobox@2.0.2) (2021-01-06)

**Note:** Version bump only for package @twilio-paste/combobox

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@2.0.0...@twilio-paste/combobox@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/combobox

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.31...@twilio-paste/combobox@2.0.0) (2020-12-17)

### Bug Fixes

- **combobox:** add forwardRef ([ca8ef5b](https://github.com/twilio-labs/paste/commit/ca8ef5b4fc2b469cb23b6fea5ca4d9f12069f900))

### BREAKING CHANGES

- **combobox:** component is now using fowardRef

## [1.4.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.30...@twilio-paste/combobox@1.4.31) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.29...@twilio-paste/combobox@1.4.30) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.28...@twilio-paste/combobox@1.4.29) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.27...@twilio-paste/combobox@1.4.28) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.26...@twilio-paste/combobox@1.4.27) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.25...@twilio-paste/combobox@1.4.26) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.24...@twilio-paste/combobox@1.4.25) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.23...@twilio-paste/combobox@1.4.24) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.22...@twilio-paste/combobox@1.4.23) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.21...@twilio-paste/combobox@1.4.22) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.20...@twilio-paste/combobox@1.4.21) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.19...@twilio-paste/combobox@1.4.20) (2020-11-10)

### Bug Fixes

- **combobox:** bump listbox zIndex token ([#917](https://github.com/twilio-labs/paste/issues/917)) ([e38f7e4](https://github.com/twilio-labs/paste/commit/e38f7e449936645a79b99b8b6869c5378b2e0854))

## [1.4.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.18...@twilio-paste/combobox@1.4.19) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.17...@twilio-paste/combobox@1.4.18) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.16...@twilio-paste/combobox@1.4.17) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.15...@twilio-paste/combobox@1.4.16) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.14...@twilio-paste/combobox@1.4.15) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.13...@twilio-paste/combobox@1.4.14) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.12...@twilio-paste/combobox@1.4.13) (2020-10-28)

### Bug Fixes

- **combobox:** ensure listbox optionn ids in groups are always unique ([#893](https://github.com/twilio-labs/paste/issues/893)) ([91903a6](https://github.com/twilio-labs/paste/commit/91903a6b7fe2682b6c132722a6e82aa141ec497f))

## [1.4.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.11...@twilio-paste/combobox@1.4.12) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.10...@twilio-paste/combobox@1.4.11) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.9...@twilio-paste/combobox@1.4.10) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.8...@twilio-paste/combobox@1.4.9) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.7...@twilio-paste/combobox@1.4.8) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.6...@twilio-paste/combobox@1.4.7) (2020-10-13)

### Bug Fixes

- **combobox:** hide chevron if set to autocomplete ([#833](https://github.com/twilio-labs/paste/issues/833)) ([41de665](https://github.com/twilio-labs/paste/commit/41de66566a317e0a282fa4200660ce134739e6b7))

## [1.4.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.5...@twilio-paste/combobox@1.4.6) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.4...@twilio-paste/combobox@1.4.5) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.3...@twilio-paste/combobox@1.4.4) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.2...@twilio-paste/combobox@1.4.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.1...@twilio-paste/combobox@1.4.2) (2020-10-07)

### Bug Fixes

- **combobox:** correctly handle empty values to passed in props ([e83e572](https://github.com/twilio-labs/paste/commit/e83e572f13e4fe6b406e3d05d82401189043e2d9))

## [1.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.4.0...@twilio-paste/combobox@1.4.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/combobox

# [1.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.24...@twilio-paste/combobox@1.4.0) (2020-10-07)

### Features

- **comboxbox:** update to use form components ([a7c53cf](https://github.com/twilio-labs/paste/commit/a7c53cfd8d1191ec44fa55c3d7d0c77d0e3267e9))

## [1.3.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.23...@twilio-paste/combobox@1.3.24) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.22...@twilio-paste/combobox@1.3.23) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.21...@twilio-paste/combobox@1.3.22) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.20...@twilio-paste/combobox@1.3.21) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.19...@twilio-paste/combobox@1.3.20) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.18...@twilio-paste/combobox@1.3.19) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.17...@twilio-paste/combobox@1.3.18) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.16...@twilio-paste/combobox@1.3.17) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.15...@twilio-paste/combobox@1.3.16) (2020-09-09)

### Bug Fixes

- **combobox:** handling refs in downshift v6 is different ([526cfc9](https://github.com/twilio-labs/paste/commit/526cfc9b44204c018e2485c77057b4a29da579c7))

## [1.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.14...@twilio-paste/combobox@1.3.15) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.13...@twilio-paste/combobox@1.3.14) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.12...@twilio-paste/combobox@1.3.13) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.11...@twilio-paste/combobox@1.3.12) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.10...@twilio-paste/combobox@1.3.11) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.9...@twilio-paste/combobox@1.3.10) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.8...@twilio-paste/combobox@1.3.9) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.7...@twilio-paste/combobox@1.3.8) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.6...@twilio-paste/combobox@1.3.7) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.5...@twilio-paste/combobox@1.3.6) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.4...@twilio-paste/combobox@1.3.5) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.3...@twilio-paste/combobox@1.3.4) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.2...@twilio-paste/combobox@1.3.3) (2020-08-21)

### Bug Fixes

- **combobox:** provide a way to use the state hook ([8c4cb81](https://github.com/twilio-labs/paste/commit/8c4cb813dde677bec0f544470d2c35f53a87d22f))

## [1.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.1...@twilio-paste/combobox@1.3.2) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.3.0...@twilio-paste/combobox@1.3.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/combobox

# [1.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.2.2...@twilio-paste/combobox@1.3.0) (2020-08-12)

### Features

- **combobox:** add inverse variant ([603bcce](https://github.com/twilio-labs/paste/commit/603bccea4d6e31b365d5a2c07ab51196048bf757))

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.2.1...@twilio-paste/combobox@1.2.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/combobox

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.2.0...@twilio-paste/combobox@1.2.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/combobox

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.1.0...@twilio-paste/combobox@1.2.0) (2020-08-07)

### Features

- **combobox:** unified design language update ([d2e1fc1](https://github.com/twilio-labs/paste/commit/d2e1fc114bd125c0a868b23e064d1afc0ca11635))

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.0.1...@twilio-paste/combobox@1.1.0) (2020-08-06)

### Features

- **combobox:** update combobox styles for UDL ([e65ea9a](https://github.com/twilio-labs/paste/commit/e65ea9aa74a14e2dd73f3b84f10546a1225b2199))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@1.0.0...@twilio-paste/combobox@1.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/combobox

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.3.4...@twilio-paste/combobox@1.0.0) (2020-08-05)

### Bug Fixes

- **icons:** use display=block by default and rename 'iconColor' prop to 'color' ([#637](https://github.com/twilio-labs/paste/issues/637)) ([82beef4](https://github.com/twilio-labs/paste/commit/82beef487c514b2eab5c40b1ef1409842dd4ca82))

### BREAKING CHANGES

- **icons:** This change renames a key prop and changes the display mode from inline-flex to block

- fix: use new icon prop (iconColor -> color)

- test: update snapshots

- chore(icons): update readme to mention correct display value

Co-authored-by: Rich Bachman <rb@richbachman.com>

- chore(website): update icon doc prop table

Co-authored-by: Rich Bachman <rb@richbachman.com>

Co-authored-by: Rich Bachman <rb@richbachman.com>

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.3.3...@twilio-paste/combobox@0.3.4) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.3.2...@twilio-paste/combobox@0.3.3) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.3.1...@twilio-paste/combobox@0.3.2) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.3.0...@twilio-paste/combobox@0.3.1) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/combobox

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.20...@twilio-paste/combobox@0.3.0) (2020-07-29)

### Features

- **combobox:** add option groups and controlled input ([6e3b21e](https://github.com/twilio-labs/paste/commit/6e3b21e3142a76344ccd2e264ce80ba7427fdb59))

## [0.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.19...@twilio-paste/combobox@0.2.20) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.18...@twilio-paste/combobox@0.2.19) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.17...@twilio-paste/combobox@0.2.18) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.16...@twilio-paste/combobox@0.2.17) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.15...@twilio-paste/combobox@0.2.16) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.14...@twilio-paste/combobox@0.2.15) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.13...@twilio-paste/combobox@0.2.14) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.12...@twilio-paste/combobox@0.2.13) (2020-07-08)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.11...@twilio-paste/combobox@0.2.12) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.10...@twilio-paste/combobox@0.2.11) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.9...@twilio-paste/combobox@0.2.10) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.8...@twilio-paste/combobox@0.2.9) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.7...@twilio-paste/combobox@0.2.8) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.6...@twilio-paste/combobox@0.2.7) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.5...@twilio-paste/combobox@0.2.6) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.4...@twilio-paste/combobox@0.2.5) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.3...@twilio-paste/combobox@0.2.4) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.2...@twilio-paste/combobox@0.2.3) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.1...@twilio-paste/combobox@0.2.2) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.2.0...@twilio-paste/combobox@0.2.1) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/combobox

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.8...@twilio-paste/combobox@0.2.0) (2020-06-08)

### Features

- **combobox:** expose onHighlightedIndexChange, onIsOpenChange props ([5683733](https://github.com/twilio-labs/paste/commit/5683733f07b81a7cd88eab60c00fcc1f6217392a))

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.7...@twilio-paste/combobox@0.1.8) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.6...@twilio-paste/combobox@0.1.7) (2020-06-04)

### Bug Fixes

- **combobox:** sync styles with Select styles ([291b68e](https://github.com/twilio-labs/paste/commit/291b68e662327a404fcf443a776fd8a2a26e8aa5))

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.5...@twilio-paste/combobox@0.1.6) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.4...@twilio-paste/combobox@0.1.5) (2020-06-01)

### Bug Fixes

- **combobox:** expose onSelectedItemChange and UseComboboxProp ([ca07615](https://github.com/twilio-labs/paste/commit/ca07615a6f2968ff59bb26222221f0f725ddb25c))

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.3...@twilio-paste/combobox@0.1.4) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.2...@twilio-paste/combobox@0.1.3) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.1...@twilio-paste/combobox@0.1.2) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/combobox

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.1.0...@twilio-paste/combobox@0.1.1) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/combobox

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.0.2...@twilio-paste/combobox@0.1.0) (2020-05-22)

### Features

- **combobox:** add combobox package ([a0d2bfa](https://github.com/twilio-labs/paste/commit/a0d2bfa955b95a54e61ef725c3cae2e6eb7f85ab))

## [0.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/combobox@0.0.1...@twilio-paste/combobox@0.0.2) (2019-10-29)

**Note:** Version bump only for package @twilio-paste/combobox

## 0.0.1 (2019-08-15)

**Note:** Version bump only for package @twilio-paste/combobox
