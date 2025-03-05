# Change Log

## 8.2.2

### Patch Changes

- [`dbd869a0c`](https://github.com/twilio-labs/paste/commit/dbd869a0ce1a1fef4c4d3f57f85611444a1a14a7) [#4261](https://github.com/twilio-labs/paste/pull/4261) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Button, Card, InputBox, Table] updated design tokens used for background color in preparation for theme changes

## 8.2.1

### Patch Changes

- [`27b9e89ea`](https://github.com/twilio-labs/paste/commit/27b9e89ea4b3618216af1dba56dac5128a712ae4) [#3757](https://github.com/twilio-labs/paste/pull/3757) Thanks [@TheSisb](https://github.com/TheSisb)! - [Table, DataGrid] Fix regression that broke `noWrap` prop on Table and DataGrids.

## 8.2.0

### Minor Changes

- [`22a917aed`](https://github.com/twilio-labs/paste/commit/22a917aed53a0e4b3c1a78a8c946321d326fb12c) [#3740](https://github.com/twilio-labs/paste/pull/3740) Thanks [@TheSisb](https://github.com/TheSisb)! - [Table, DataGrid] Allow passing `whiteSpace` style prop to `Th`/`DataGridHeader` and `Td`/`DataGridCell` components.

## 8.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`e2d2d5c91`](https://github.com/twilio-labs/paste/commit/e2d2d5c91c306de6629bb3932d1b8c63a6b08722) [#3474](https://github.com/twilio-labs/paste/pull/3474) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Table] Added TsDoc type annotations

* [`b48a0f4ea`](https://github.com/twilio-labs/paste/commit/b48a0f4ea67060070c9fbddc3fde505427b83eb5) [#3502](https://github.com/twilio-labs/paste/pull/3502) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Table] Improved TsDoc type annotations

## 8.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 7.0.2

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 7.0.1

### Patch Changes

- [`8fc130d03`](https://github.com/twilio-labs/paste/commit/8fc130d03556970df344a3db6d851f09c3c1a1bf) [#3261](https://github.com/twilio-labs/paste/pull/3261) Thanks [@TheSisb](https://github.com/TheSisb)! - [Table, DataGrid] Typescript type improvements for Tr, Th, and Td elements

## 7.0.0

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

## 6.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39) [#3010](https://github.com/twilio-labs/paste/pull/3010) Thanks [@shleewhite](https://github.com/shleewhite)! - [Table] Update styles to align with new Paste Twilio theme

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 5.1.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 5.1.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 5.1.0

### Minor Changes

- [`7e75f8119`](https://github.com/twilio-labs/paste/commit/7e75f8119067c8aad70f14b70324ca93d8d07917) [#2574](https://github.com/twilio-labs/paste/pull/2574) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [table, data-grid] adding sticky header functionality to both the Table and Data Grid components

## 5.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0

## 4.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [Table] removed uneccessarily spread prop on Tr component and set an initial value correctly for the context provider

* [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 4.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/style-props@5.0.0

## 3.1.0

### Minor Changes

- [`b1359c95e`](https://github.com/twilio-labs/paste/commit/b1359c95ebbd0ec12eca3d72cfbcac72c06f6b85) [#2307](https://github.com/twilio-labs/paste/pull/2307) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Table] Adds the ability to safely render tables for mobile screens using the `scrollHorizontally` prop. Also adds the `noWrap` prop to control cell density by preventing line wrapping.

## 3.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 3.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 3.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0

## 2.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 2.1.1

### Patch Changes

- [`ca2a8669`](https://github.com/twilio-labs/paste/commit/ca2a8669b9d9ea57ccc5c39e234e13a9dc59ab5b) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Replaced deprecated 'HTMLTableHeaderCellElement' typing for 'HTMLTableCellElement' in Th component.

## 2.1.0

### Minor Changes

- [`f0737a27`](https://github.com/twilio-labs/paste/commit/f0737a279663a774e4d0a4beaa70ee6c11a55da7) [#1817](https://github.com/twilio-labs/paste/pull/1817) Thanks [@andipants12](https://github.com/andipants12)! - [Table]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 2.0.4

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 2.0.3

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 2.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/style-props@3.0.0

## 1.0.2

### Patch Changes

- [`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592) [#1228](https://github.com/twilio-labs/paste/pull/1228) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Bump status of the component to production

## 1.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/style-props@2.0.0

## 0.2.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.2.0...@twilio-paste/table@0.2.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/table

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.18...@twilio-paste/table@0.2.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.17...@twilio-paste/table@0.1.18) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.16...@twilio-paste/table@0.1.17) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.15...@twilio-paste/table@0.1.16) (2021-01-12)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.14...@twilio-paste/table@0.1.15) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.13...@twilio-paste/table@0.1.14) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.12...@twilio-paste/table@0.1.13) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.11...@twilio-paste/table@0.1.12) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.10...@twilio-paste/table@0.1.11) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.9...@twilio-paste/table@0.1.10) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.8...@twilio-paste/table@0.1.9) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.7...@twilio-paste/table@0.1.8) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.6...@twilio-paste/table@0.1.7) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.5...@twilio-paste/table@0.1.6) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.4...@twilio-paste/table@0.1.5) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.3...@twilio-paste/table@0.1.4) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.2...@twilio-paste/table@0.1.3) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.1...@twilio-paste/table@0.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/table

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.1.0...@twilio-paste/table@0.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/table

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/table@0.0.2...@twilio-paste/table@0.1.0) (2020-10-07)

### Features

- **table:** add component package ([5caea0d](https://github.com/twilio-labs/paste/commit/5caea0d24983eb625ce92048ea27478634f7ebcc))
