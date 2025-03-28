# Change Log

## 10.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 10.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 9.1.1

### Patch Changes

- [`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9) [#3607](https://github.com/twilio-labs/paste/pull/3607) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Style-props] Improved TsDoc type annotations

## 9.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 9.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 8.0.1

### Patch Changes

- [`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df) [#3328](https://github.com/twilio-labs/paste/pull/3328) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Style-props] Create types for responsive versions of basic CSS properties to be use in Box and Text style primitives. Previously they were just static single css property values

## 8.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- Updated dependencies [[`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/types@5.0.0

## 7.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Minor Changes

- [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee) [#3049](https://github.com/twilio-labs/paste/pull/3049) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Text, Style Props, Theme]: remove checking and warning for deprecated design tokens and themes that have been removed from the system

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 6.1.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 6.1.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 6.1.0

### Minor Changes

- [`fcd2de38a`](https://github.com/twilio-labs/paste/commit/fcd2de38aba559e7bb9b1d150417a94a30beff16) [#2676](https://github.com/twilio-labs/paste/pull/2676) Thanks [@shleewhite](https://github.com/shleewhite)! - [Box, Style Props] add support for inset CSS property

### Patch Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Style Props] Pin lodash dependency

## 6.0.0

### Minor Changes

- [`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c) [#2578](https://github.com/twilio-labs/paste/pull/2578) Thanks [@TheSisb](https://github.com/TheSisb)! - [box, style-props] Enable CSS Grid on Box by adding all the requisite style props to the Box component.

### Patch Changes

- Updated dependencies [[`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0

## 5.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 5.0.1

### Patch Changes

- [`9983b52e9`](https://github.com/twilio-labs/paste/commit/9983b52e92d15373824e4b3cc10572b2f51d58f8) [#2419](https://github.com/twilio-labs/paste/pull/2419) Thanks [@gloriliale](https://github.com/gloriliale)! - [Combobox, Data grid, Color contrast utils, Customization, Design tokens, Icons, Style props, Token contrast checker, Types, Utils, Website] Consolidate and update lodash dependencies and the way lodash is imported in our files, per lodash's guidance. Details: https://lodash.com/per-method-packages

## 5.0.0

### Patch Changes

- Updated dependencies [[`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0

## 4.1.0

### Minor Changes

- [`28d87c14b`](https://github.com/twilio-labs/paste/commit/28d87c14b8f58005b8bdc9691c86acc2cef6ad27) [#2383](https://github.com/twilio-labs/paste/pull/2383) Thanks [@andipants12](https://github.com/andipants12)! - [Box, Text, Style-props] CSS types package dependency upgrade

## 4.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 4.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`1f564a931`](https://github.com/twilio-labs/paste/commit/1f564a931b9a844a9d097edb2012c65692af9bd4) [#2242](https://github.com/twilio-labs/paste/pull/2242) Thanks [@shleewhite](https://github.com/shleewhite)! - [Style Props] add inherit as a background color option

## 4.0.0

### Patch Changes

- [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc) [#2093](https://github.com/twilio-labs/paste/pull/2093) Thanks [@TheSisb](https://github.com/TheSisb)! - [style-props] change `import` to `import type` where approrpiate.

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0

## 3.2.0

### Minor Changes

- [`9132d0cb`](https://github.com/twilio-labs/paste/commit/9132d0cb3ed82bf4a1956484b93783605e2aea1d) [#2118](https://github.com/twilio-labs/paste/pull/2118) Thanks [@zahnster](https://github.com/zahnster)! - Fix default imports for JSON to play nice with webpack 5

## 3.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

## 3.1.0

### Minor Changes

- [`a6df510d`](https://github.com/twilio-labs/paste/commit/a6df510dffb3706e5132ea04d8f875f313798ee0) [#1743](https://github.com/twilio-labs/paste/pull/1743) Thanks [@andipants12](https://github.com/andipants12)! - [Style Props] add types for column gap and row gap

## 3.0.6

### Patch Changes

- [`b98b3713`](https://github.com/twilio-labs/paste/commit/b98b371315b09a5697be6f56611e428d0e6e377f) [#1426](https://github.com/twilio-labs/paste/pull/1426) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add the ability to warn consumers that they are using a deprecated Design Token using prop type validation on the Box and Text component

## 3.0.5

### Patch Changes

- [`3668591b`](https://github.com/twilio-labs/paste/commit/3668591bf9898b7770adb1f33c809c12798eb6e7) [#1424](https://github.com/twilio-labs/paste/pull/1424) Thanks [@TheSisb](https://github.com/TheSisb)! - Added overflowWrap to the Typography styled prop bucket

## 3.0.4

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - add ability to set transparent to color style prop

## 3.0.3

### Patch Changes

- [`0f6b4728`](https://github.com/twilio-labs/paste/commit/0f6b4728abb2de315d03c0c009c1872b7cece045) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Style-props: added `inherit` to the typed `border-color` options.

## 3.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 3.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0

## 2.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/theme@4.3.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0

## 1.9.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.9.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.9.0...@twilio-paste/style-props@1.9.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.9.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.16...@twilio-paste/style-props@1.9.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [1.8.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.15...@twilio-paste/style-props@1.8.16) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.14...@twilio-paste/style-props@1.8.15) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.13...@twilio-paste/style-props@1.8.14) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.12...@twilio-paste/style-props@1.8.13) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.11...@twilio-paste/style-props@1.8.12) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.10...@twilio-paste/style-props@1.8.11) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.9...@twilio-paste/style-props@1.8.10) (2020-12-02)

### Bug Fixes

- **style-props:** allow 'transparent' as backgroundColor value ([2d17f86](https://github.com/twilio-labs/paste/commit/2d17f860ebcd59fa3f9f79c5fc3d228e9a874cc6))

## [1.8.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.8...@twilio-paste/style-props@1.8.9) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.7...@twilio-paste/style-props@1.8.8) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.6...@twilio-paste/style-props@1.8.7) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.5...@twilio-paste/style-props@1.8.6) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.4...@twilio-paste/style-props@1.8.5) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.3...@twilio-paste/style-props@1.8.4) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.2...@twilio-paste/style-props@1.8.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.1...@twilio-paste/style-props@1.8.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.8.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.8.0...@twilio-paste/style-props@1.8.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.8.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.7.1...@twilio-paste/style-props@1.8.0) (2020-10-07)

### Features

- **style-props:** allow widths and heights to not be tokesn ([bd80312](https://github.com/twilio-labs/paste/commit/bd803124f8cf187d35d50491490abb02b8db51df))

## [1.7.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.7.0...@twilio-paste/style-props@1.7.1) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.7.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.6.4...@twilio-paste/style-props@1.7.0) (2020-09-21)

### Features

- **style-props:** allow line height in herit ([38fae8f](https://github.com/twilio-labs/paste/commit/38fae8ffed9864169b40f26b675c950674658e1a))

## [1.6.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.6.3...@twilio-paste/style-props@1.6.4) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.6.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.6.2...@twilio-paste/style-props@1.6.3) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.6.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.6.1...@twilio-paste/style-props@1.6.2) (2020-09-08)

### Bug Fixes

- **style-props:** add inherit to fontWeight to color ([925a71e](https://github.com/twilio-labs/paste/commit/925a71eb3ec2fb9ac328f543758058d197d81598))

## [1.6.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.6.0...@twilio-paste/style-props@1.6.1) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.6.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.5.5...@twilio-paste/style-props@1.6.0) (2020-09-03)

### Features

- **style-props:** add support for word-break prop ([364aeb8](https://github.com/twilio-labs/paste/commit/364aeb81a46a222d143f3d873318f09270694b95))

## [1.5.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.5.4...@twilio-paste/style-props@1.5.5) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.5.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.5.3...@twilio-paste/style-props@1.5.4) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.5.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.5.2...@twilio-paste/style-props@1.5.3) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.5.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.5.1...@twilio-paste/style-props@1.5.2) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.5.0...@twilio-paste/style-props@1.5.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.4.3...@twilio-paste/style-props@1.5.0) (2020-08-12)

### Features

- **style-props:** allow 'none' for boxShadow ([fbde571](https://github.com/twilio-labs/paste/commit/fbde5713408e5a7ade4a80243d37a58e364b7227))

## [1.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.4.2...@twilio-paste/style-props@1.4.3) (2020-08-06)

### Bug Fixes

- **style-props:** adding some missing style prop options ([ab555b6](https://github.com/twilio-labs/paste/commit/ab555b67849e28dfad23d6eb89a0aa495df9e18e))

## [1.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.4.1...@twilio-paste/style-props@1.4.2) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.4.0...@twilio-paste/style-props@1.4.1) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.3.0...@twilio-paste/style-props@1.4.0) (2020-07-30)

### Bug Fixes

- **style-props:** added missing props ([b793004](https://github.com/twilio-labs/paste/commit/b793004b1c5dcff387712f1fcff685230f3fee06))

### Features

- **style-props:** add X & Y for space props ([db30813](https://github.com/twilio-labs/paste/commit/db308135aa2ee80a5d3759bba263cabaa703a82f))

# [1.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.11...@twilio-paste/style-props@1.3.0) (2020-07-29)

### Features

- **radio:** allow disabling individual radios ([#599](https://github.com/twilio-labs/paste/issues/599)) ([4c5b21b](https://github.com/twilio-labs/paste/commit/4c5b21b332eb74d7de181d64ea6a92b2c94d5235))

## [1.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.10...@twilio-paste/style-props@1.2.11) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.9...@twilio-paste/style-props@1.2.10) (2020-07-15)

### Bug Fixes

- **style-props:** allow width/height values for max/min widths/height ([06a2419](https://github.com/twilio-labs/paste/commit/06a241965d2edc44c272a2a856c1682803a3a4a8))

## [1.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.8...@twilio-paste/style-props@1.2.9) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.7...@twilio-paste/style-props@1.2.8) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.6...@twilio-paste/style-props@1.2.7) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.5...@twilio-paste/style-props@1.2.6) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.4...@twilio-paste/style-props@1.2.5) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.3...@twilio-paste/style-props@1.2.4) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.2...@twilio-paste/style-props@1.2.3) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.1...@twilio-paste/style-props@1.2.2) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.2.0...@twilio-paste/style-props@1.2.1) (2020-06-10)

### Bug Fixes

- **style-props:** allow transparent border color ([a225fa2](https://github.com/twilio-labs/paste/commit/a225fa2e20988a5799281b2d1282dcd7d018a5fb))

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.9...@twilio-paste/style-props@1.2.0) (2020-06-05)

### Features

- **style-props:** add 100vh and 100vw style prop values ([53b38a8](https://github.com/twilio-labs/paste/commit/53b38a8ddab12723c9e9b48ac68ae0957c7fb600))

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.8...@twilio-paste/style-props@1.1.9) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.7...@twilio-paste/style-props@1.1.8) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.6...@twilio-paste/style-props@1.1.7) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.5...@twilio-paste/style-props@1.1.6) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.4...@twilio-paste/style-props@1.1.5) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.3...@twilio-paste/style-props@1.1.4) (2020-05-04)

### Bug Fixes

- **style-props:** allow auto as valid margin prop ([70e25a1](https://github.com/twilio-labs/paste/commit/70e25a18ad9dd47e1e6daba8079450693e180c25))

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.2...@twilio-paste/style-props@1.1.3) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.1...@twilio-paste/style-props@1.1.2) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/style-props

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.1.0...@twilio-paste/style-props@1.1.1) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.0.1...@twilio-paste/style-props@1.1.0) (2020-04-15)

### Features

- **style-props:** add auto to heights and width types ([7e87160](https://github.com/twilio-labs/paste/commit/7e87160f83b439c6fcd026497629fb723017fe74))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@1.0.0...@twilio-paste/style-props@1.0.1) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/style-props

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.2.3...@twilio-paste/style-props@1.0.0) (2020-04-07)

### Bug Fixes

- **style-props:** change textColor to color ([2af1ee7](https://github.com/twilio-labs/paste/commit/2af1ee79ebde015ee1fc916b8ff42966932b4679))

### BREAKING CHANGES

- **style-props:** `textColor` has been changed to `color` in the typogrophy props.

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.2.2...@twilio-paste/style-props@0.2.3) (2020-04-02)

### Bug Fixes

- **style-props:** correct width options in the style props proptypes ([#369](https://github.com/twilio-labs/paste/issues/369)) ([1d23cb5](https://github.com/twilio-labs/paste/commit/1d23cb59c1c5dcd3f6925721f64ba2200f81078a))

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.2.1...@twilio-paste/style-props@0.2.2) (2020-03-24)

### Bug Fixes

- **style-props:** switch from theme-tokens to theme package dep ([6849d32](https://github.com/twilio-labs/paste/commit/6849d32dc2f25dd3e55b592e7578e9108ab91024))

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.2.0...@twilio-paste/style-props@0.2.1) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/style-props

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.12...@twilio-paste/style-props@0.2.0) (2020-03-17)

### Features

- **style-props:** add proptype functions for token props ([5736655](https://github.com/twilio-labs/paste/commit/5736655fffdce9e89090010f6d88ec1aa551c700))

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.11...@twilio-paste/style-props@0.1.12) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.10...@twilio-paste/style-props@0.1.11) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.9...@twilio-paste/style-props@0.1.10) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.8...@twilio-paste/style-props@0.1.9) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.7...@twilio-paste/style-props@0.1.8) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.6...@twilio-paste/style-props@0.1.7) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.5...@twilio-paste/style-props@0.1.6) (2020-02-11)

### Bug Fixes

- **style-props:** allow 100% as a width value ([#304](https://github.com/twilio-labs/paste/issues/304)) ([835166f](https://github.com/twilio-labs/paste/commit/835166f2e0aa6cf7ff1f018afdc54d58d82e64a0))

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.4...@twilio-paste/style-props@0.1.5) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.3...@twilio-paste/style-props@0.1.4) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.2...@twilio-paste/style-props@0.1.3) (2020-01-24)

### Bug Fixes

- **style-props:** add non-responsive options ([#271](https://github.com/twilio-labs/paste/issues/271)) ([6cf4a10](https://github.com/twilio-labs/paste/commit/6cf4a1040f8c0e0b4adeecc97aacb6bf7542dbaf))

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.1...@twilio-paste/style-props@0.1.2) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/style-props

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/style-props@0.1.0...@twilio-paste/style-props@0.1.1) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/style-props

# 0.1.0 (2019-12-19)

### Features

- **style-props:** create the style-props package ([2bc21e9](https://github.com/twilio-labs/paste/commit/2bc21e9fb685e598710e2a4ff89114f2b6287b2f))
