# Change Log

## 11.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 11.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/box@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 10.1.2

### Patch Changes

- [`dbd869a0c`](https://github.com/twilio-labs/paste/commit/dbd869a0ce1a1fef4c4d3f57f85611444a1a14a7) [#4261](https://github.com/twilio-labs/paste/pull/4261) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Button, Card, InputBox, Table] updated design tokens used for background color in preparation for theme changes

* [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 10.1.1

### Patch Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [Input Box] Improve TsDoc type annotations

## 10.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 10.0.1

### Patch Changes

- [`2a1f8b954`](https://github.com/twilio-labs/paste/commit/2a1f8b954cdfc12cf40b7f5cd633d0b9ea9e882d) [#3425](https://github.com/twilio-labs/paste/pull/3425) Thanks [@TheSisb](https://github.com/TheSisb)! - [Input, Input Box] allow passing `type="url"` to the Input component for convenient browser validation.

## 10.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 9.0.1

### Patch Changes

- [`48e5f1e5c`](https://github.com/twilio-labs/paste/commit/48e5f1e5cd1c06c6967ee4e43f30179498efede8) [#3225](https://github.com/twilio-labs/paste/pull/3225) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button, Help Text, In Page Navigation, Input, Input Box, Label, Select, Tab, Text Area] Update color text tokens for inverse styles

## 9.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- Updated dependencies [[`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 8.0.1

### Patch Changes

- [`71f5b1898`](https://github.com/twilio-labs/paste/commit/71f5b18980c1ced85dcce101e74fb8c385a60bab) [#3033](https://github.com/twilio-labs/paste/pull/3033) Thanks [@gloriliale](https://github.com/gloriliale)! - [input box]: ensure inputs use the correct focus shadow for new design language'

## 8.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39) [#3010](https://github.com/twilio-labs/paste/pull/3010) Thanks [@shleewhite](https://github.com/shleewhite)! - [Input Box] Update styles to align with new Paste Twilio theme

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 7.1.3

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 7.1.2

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 7.1.1

### Patch Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Input Box] Remove focus boxShadow when disabled

## 7.1.0

### Minor Changes

- [`b79d20d2a`](https://github.com/twilio-labs/paste/commit/b79d20d2a4cdaaa85ffec09d280f7315f2556f76) [#2595](https://github.com/twilio-labs/paste/pull/2595) Thanks [@TheSisb](https://github.com/TheSisb)! - [InputBox, Combobox, Select] InputBox's `InputChevronWrapper` has refreshed styling which will appear in Select and Combobox. InputBox now exports a `getInputChevronIconColor()` function which returns a textColor to use for styling the icon child to the `InputChevronWrapper`.

## 7.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0

## 6.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 6.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/style-props@5.0.0

## 5.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 5.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [input-box]

  - Update default box shadow hover to `shadowBorderPrimaryStronger`
  - Update default box shadow hover when error and not hidden to `shadowBorderErrorStronger`
  - Update inverse background color when disabled and not hidden to `colorBackgroundInverse`

## 5.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0

## 4.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.1.1

### Patch Changes

- [`7d231ec0`](https://github.com/twilio-labs/paste/commit/7d231ec02993bb1e34c02b6dc1adf04e0fbba4fd) [#1886](https://github.com/twilio-labs/paste/pull/1886) Thanks [@andipants12](https://github.com/andipants12)! - [InputBox] Remove duplicative prefix in chevron icon wrapper element name, and update name too better reflect the component's purpose.

## 4.1.0

### Minor Changes

- [`18c1f595`](https://github.com/twilio-labs/paste/commit/18c1f595e03d6152789342d1fc05942201cec5d3) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Input-box] Enable InputBox, Prefix and Suffix to respect element customizations set on the customization provider. InputBox, Prefix and Suffix now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 4.0.7

### Patch Changes

- [`81ef55dc`](https://github.com/twilio-labs/paste/commit/81ef55dc5ce8ec8b6c1a1a28545fd1cd1628a60c) [#1607](https://github.com/twilio-labs/paste/pull/1607) Thanks [@gloriliale](https://github.com/gloriliale)! - Added type 'time' to Input-Box types for time picker component, changed InputTypes to name InputBoxTypes.

## 4.0.6

### Patch Changes

- [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Added type 'date' to Input-Box types for date picker component

## 4.0.5

### Patch Changes

- [`2db8bf96`](https://github.com/twilio-labs/paste/commit/2db8bf963c2fc34e191aa3bfec5c0a0e95e7c72f) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Changed disabled box shadows to use correct shadow-border-weak token.

## 4.0.4

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 4.0.3

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 4.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/style-props@2.0.0

## 2.1.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@2.1.0...@twilio-paste/input-box@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/input-box

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@2.0.4...@twilio-paste/input-box@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@2.0.3...@twilio-paste/input-box@2.0.4) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/input-box

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@2.0.2...@twilio-paste/input-box@2.0.3) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/input-box

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@2.0.1...@twilio-paste/input-box@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/input-box

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@2.0.0...@twilio-paste/input-box@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/input-box

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.15...@twilio-paste/input-box@2.0.0) (2020-12-17)

### Bug Fixes

- **input-box:** add forwardRef ([674614c](https://github.com/twilio-labs/paste/commit/674614c0b885ed81231d43f7da2dfb06383c87d0))

### BREAKING CHANGES

- **input-box:** component is now using fowardRef

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.14...@twilio-paste/input-box@1.1.15) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.13...@twilio-paste/input-box@1.1.14) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.12...@twilio-paste/input-box@1.1.13) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.11...@twilio-paste/input-box@1.1.12) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.10...@twilio-paste/input-box@1.1.11) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.9...@twilio-paste/input-box@1.1.10) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.8...@twilio-paste/input-box@1.1.9) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.7...@twilio-paste/input-box@1.1.8) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.6...@twilio-paste/input-box@1.1.7) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.5...@twilio-paste/input-box@1.1.6) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.4...@twilio-paste/input-box@1.1.5) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.3...@twilio-paste/input-box@1.1.4) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.2...@twilio-paste/input-box@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.1...@twilio-paste/input-box@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/input-box

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/input-box@1.1.0...@twilio-paste/input-box@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/input-box

# 1.1.0 (2020-10-07)

### Features

- **input-box:** create the package ([b94d87b](https://github.com/twilio-labs/paste/commit/b94d87b272910d761d8cf868c9e0a80385a18ca2))

## [2.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.16...@twilio-paste/form@2.2.17) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.15...@twilio-paste/form@2.2.16) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.14...@twilio-paste/form@2.2.15) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.13...@twilio-paste/form@2.2.14) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.12...@twilio-paste/form@2.2.13) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.11...@twilio-paste/form@2.2.12) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.10...@twilio-paste/form@2.2.11) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.9...@twilio-paste/form@2.2.10) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.8...@twilio-paste/form@2.2.9) (2020-09-08)

### Bug Fixes

- **checkbox:** replace check and dash with icons ([#733](https://github.com/twilio-labs/paste/issues/733)) ([93db25d](https://github.com/twilio-labs/paste/commit/93db25da6913bcaadf860c0c88f8e5878047f29f))

## [2.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.7...@twilio-paste/form@2.2.8) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.6...@twilio-paste/form@2.2.7) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.5...@twilio-paste/form@2.2.6) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.4...@twilio-paste/form@2.2.5) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.3...@twilio-paste/form@2.2.4) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.2...@twilio-paste/form@2.2.3) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/form

## [2.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.1...@twilio-paste/form@2.2.2) (2020-08-24)

### Bug Fixes

- **checkbox:** spacing adjustments and disabled indetermiate color ([f9a5bce](https://github.com/twilio-labs/paste/commit/f9a5bce0ad0cf1d53ce671e625e76b57c6c64c44))

## [2.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.2.0...@twilio-paste/form@2.2.1) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/form

# [2.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.1.1...@twilio-paste/form@2.2.0) (2020-08-12)

### Features

- **form:** add inverse variant ([18068b0](https://github.com/twilio-labs/paste/commit/18068b00de66bddc58d4492bf112041f150662c0))

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.1.0...@twilio-paste/form@2.1.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/form

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.0.1...@twilio-paste/form@2.1.0) (2020-08-06)

### Features

- **form:** update form elements for UDL ([3a93098](https://github.com/twilio-labs/paste/commit/3a93098819e0d13ecc0ff4d3c0ccde31dcb51c26))

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@2.0.0...@twilio-paste/form@2.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/form

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.6.4...@twilio-paste/form@2.0.0) (2020-08-05)

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

## [1.6.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.6.3...@twilio-paste/form@1.6.4) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/form

## [1.6.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.6.2...@twilio-paste/form@1.6.3) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/form

## [1.6.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.6.1...@twilio-paste/form@1.6.2) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/form

## [1.6.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.6.0...@twilio-paste/form@1.6.1) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/form

# [1.6.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.26...@twilio-paste/form@1.6.0) (2020-07-29)

### Features

- **radio:** allow disabling individual radios ([#599](https://github.com/twilio-labs/paste/issues/599)) ([4c5b21b](https://github.com/twilio-labs/paste/commit/4c5b21b332eb74d7de181d64ea6a92b2c94d5235))

## [1.5.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.25...@twilio-paste/form@1.5.26) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.24...@twilio-paste/form@1.5.25) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.23...@twilio-paste/form@1.5.24) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.22...@twilio-paste/form@1.5.23) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.21...@twilio-paste/form@1.5.22) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.20...@twilio-paste/form@1.5.21) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.19...@twilio-paste/form@1.5.20) (2020-07-08)

### Bug Fixes

- **form:** add border-bottom-width rule for bootstrap override ([82c49ae](https://github.com/twilio-labs/paste/commit/82c49ae4e028c4df8b317db8080a787d09cb1a38))

## [1.5.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.18...@twilio-paste/form@1.5.19) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.17...@twilio-paste/form@1.5.18) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.16...@twilio-paste/form@1.5.17) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.15...@twilio-paste/form@1.5.16) (2020-06-29)

### Bug Fixes

- **form:** guard against textTransform in labels ([bda5b5c](https://github.com/twilio-labs/paste/commit/bda5b5c4895e3b4dc3e6443c901a771fb4691b05))

## [1.5.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.14...@twilio-paste/form@1.5.15) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.13...@twilio-paste/form@1.5.14) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.12...@twilio-paste/form@1.5.13) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.11...@twilio-paste/form@1.5.12) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.10...@twilio-paste/form@1.5.11) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.9...@twilio-paste/form@1.5.10) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.8...@twilio-paste/form@1.5.9) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.7...@twilio-paste/form@1.5.8) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.6...@twilio-paste/form@1.5.7) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.5...@twilio-paste/form@1.5.6) (2020-06-04)

### Bug Fixes

- **form:** export SelectIconWrapper for use in Combobox ([71337b7](https://github.com/twilio-labs/paste/commit/71337b71d1c41c756c8bb0edc9420c13a49f2fbc))

## [1.5.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.4...@twilio-paste/form@1.5.5) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.3...@twilio-paste/form@1.5.4) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.2...@twilio-paste/form@1.5.3) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.1...@twilio-paste/form@1.5.2) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/form

## [1.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.5.0...@twilio-paste/form@1.5.1) (2020-05-27)

### Bug Fixes

- **select:** bug fixes ([#460](https://github.com/twilio-labs/paste/issues/460)) ([c2c3782](https://github.com/twilio-labs/paste/commit/c2c37827c09681b8c3ddf293b7554de701c03207))

# [1.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.4.1...@twilio-paste/form@1.5.0) (2020-05-22)

### Features

- **form:** export styled InputElement, add FormControlWrapper ([04da812](https://github.com/twilio-labs/paste/commit/04da812cbe1e6e5ccbfa3c4553e5b6928eca6c3e))

## [1.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.4.0...@twilio-paste/form@1.4.1) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/form

# [1.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.3.4...@twilio-paste/form@1.4.0) (2020-05-13)

### Bug Fixes

- **form:** remove required onChange from input ([49b2c77](https://github.com/twilio-labs/paste/commit/49b2c77455445ffcd2bafea8de6cbf602dd8d228))

### Features

- **select:** update knobs for select stories ([#430](https://github.com/twilio-labs/paste/issues/430)) ([dc48f63](https://github.com/twilio-labs/paste/commit/dc48f637df3cbaf7046550081f662348461f19dc))

## [1.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.3.3...@twilio-paste/form@1.3.4) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/form

## [1.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.3.2...@twilio-paste/form@1.3.3) (2020-05-07)

### Bug Fixes

- **form:** updates to tokens used in borders ([e97e49e](https://github.com/twilio-labs/paste/commit/e97e49edecfeda1334f87d5655853b8a1caf67de))

## [1.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.3.1...@twilio-paste/form@1.3.2) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/form

## [1.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.3.0...@twilio-paste/form@1.3.1) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/form

# [1.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.2.0...@twilio-paste/form@1.3.0) (2020-05-01)

### Features

- **select:** Select, Option, and OptionGroup ([#399](https://github.com/twilio-labs/paste/issues/399)) ([761924e](https://github.com/twilio-labs/paste/commit/761924e00330b232251a775037f1109cec2078ff))

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.10...@twilio-paste/form@1.2.0) (2020-04-25)

### Features

- **form:** add radio and checkbox components ([1b68f8d](https://github.com/twilio-labs/paste/commit/1b68f8d9f98470cabbf8fc5142cc2255c8be1b4b))
- **form:** updates to form label ([72c37c2](https://github.com/twilio-labs/paste/commit/72c37c2da8a4fc05a87de1871551ac6004c1b7f9))

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.9...@twilio-paste/form@1.1.10) (2020-04-22)

### Bug Fixes

- **tokens:** Add shadow-border-input-\* aliases, tokens to themes ([#400](https://github.com/twilio-labs/paste/issues/400)) ([a553100](https://github.com/twilio-labs/paste/commit/a5531003b713b56f1fd5078cccdbdc4879943fc5))

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.8...@twilio-paste/form@1.1.9) (2020-04-20)

**Note:** Version bump only for package @twilio-paste/form

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.7...@twilio-paste/form@1.1.8) (2020-04-17)

**Note:** Version bump only for package @twilio-paste/form

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.6...@twilio-paste/form@1.1.7) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/form

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.5...@twilio-paste/form@1.1.6) (2020-04-08)

### Bug Fixes

- **form:** package dependencies updated to be correct ([48bb40f](https://github.com/twilio-labs/paste/commit/48bb40ff4b96c42d4efe18bc2cc6766c73e63e8c))

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.4...@twilio-paste/form@1.1.5) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/form

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.3...@twilio-paste/form@1.1.4) (2020-04-07)

### Bug Fixes

- **form:** use color prop, update tests and snapshots ([1f7313a](https://github.com/twilio-labs/paste/commit/1f7313a089c3150ec032e89c1946400941a64163))

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.2...@twilio-paste/form@1.1.3) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/form

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.1...@twilio-paste/form@1.1.2) (2020-04-01)

### Bug Fixes

- **form:** enable safely spreading props to form controls ([#367](https://github.com/twilio-labs/paste/issues/367)) ([6a12a9d](https://github.com/twilio-labs/paste/commit/6a12a9d533bd198abb63433b759cedba04e3049a))

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.1.0...@twilio-paste/form@1.1.1) (2020-04-01)

**Note:** Version bump only for package @twilio-paste/form

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.0.4...@twilio-paste/form@1.1.0) (2020-04-01)

### Features

- **form:** add autoresizing to the textarea component ([#365](https://github.com/twilio-labs/paste/issues/365)) ([9cc5b7b](https://github.com/twilio-labs/paste/commit/9cc5b7b02bc74f9f71473b6ddf366c0946f10fe2))

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.0.3...@twilio-paste/form@1.0.4) (2020-03-31)

### Bug Fixes

- **form:** remove box-shadow, inherit font family ([#362](https://github.com/twilio-labs/paste/issues/362)) ([5cac3c4](https://github.com/twilio-labs/paste/commit/5cac3c4b463199c02b8ea3b188b10b48e95c3201))

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.0.2...@twilio-paste/form@1.0.3) (2020-03-30)

### Bug Fixes

- **form:** change hover for disabled and readonly input and textarea ([#361](https://github.com/twilio-labs/paste/issues/361)) ([7592de5](https://github.com/twilio-labs/paste/commit/7592de563a13108fc0e396dddc714277d757b836))

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.0.1...@twilio-paste/form@1.0.2) (2020-03-28)

**Note:** Version bump only for package @twilio-paste/form

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@1.0.0...@twilio-paste/form@1.0.1) (2020-03-27)

### Bug Fixes

- **form:** remove input type hidden box shadow ([#359](https://github.com/twilio-labs/paste/issues/359)) ([25301f4](https://github.com/twilio-labs/paste/commit/25301f4654c289f795f1acc6babe91972e017585))

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.2.3...@twilio-paste/form@1.0.0) (2020-03-25)

### Bug Fixes

- **form:** change FormHelperText to FormHelpText ([7d8954d](https://github.com/twilio-labs/paste/commit/7d8954d73b9bdba45f9af5f3331763d7240c7ee9))

### BREAKING CHANGES

- **form:** The FormHelperText component has been renamed to FormHelpText to align with the Sketch symbol library

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.2.2...@twilio-paste/form@0.2.3) (2020-03-24)

### Bug Fixes

- **form:** switch from theme-tokens to theme package dep ([9d26cda](https://github.com/twilio-labs/paste/commit/9d26cda2d99df8adf1e0099f6525fcf1a9f24498))

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.2.1...@twilio-paste/form@0.2.2) (2020-03-20)

**Note:** Version bump only for package @twilio-paste/form

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.2.0...@twilio-paste/form@0.2.1) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/form

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.1.2...@twilio-paste/form@0.2.0) (2020-03-17)

### Features

- **form:** textarea component ([#345](https://github.com/twilio-labs/paste/issues/345)) ([2ffafa5](https://github.com/twilio-labs/paste/commit/2ffafa502ca04aa6577ffbee3279c37f18a9c86d))

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.1.1...@twilio-paste/form@0.1.2) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/form

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.1.0...@twilio-paste/form@0.1.1) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/form

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.0.2...@twilio-paste/form@0.1.0) (2020-03-11)

### Features

- **form:** add form package ([8cd9aac](https://github.com/twilio-labs/paste/commit/8cd9aaca416572722c9e328d92d77ab2a3fed406))

## [0.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/form@0.0.1...@twilio-paste/form@0.0.2) (2019-10-29)

**Note:** Version bump only for package @twilio-paste/form

## 0.0.1 (2019-08-15)

**Note:** Version bump only for package @twilio-paste/form
