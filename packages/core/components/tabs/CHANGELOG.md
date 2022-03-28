# Change Log

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
  - @twilio-paste/flex@3.0.0
  - @twilio-paste/box@5.0.0

## 2.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 2.1.0

### Minor Changes

- [`01233345`](https://github.com/twilio-labs/paste/commit/012333451cc36383cd4dc6f79fb1e678da676d66) [#1840](https://github.com/twilio-labs/paste/pull/1840) Thanks [@andipants12](https://github.com/andipants12)! - [Tabs]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 2.0.6

### Patch Changes

- [`b10ac908`](https://github.com/twilio-labs/paste/commit/b10ac908d2728185a66f334506a29cb054df6778) [#1654](https://github.com/twilio-labs/paste/pull/1654) Thanks [@richbachman](https://github.com/richbachman)! - [Tabs]

  - Added `:focus-visible` styles to TabPanel in order to override the default browser style.
  - Added a `borderRadius20` border-radius to TabPanel to make the focus not so harsh.

## 2.0.5

### Patch Changes

- [`a7954e29`](https://github.com/twilio-labs/paste/commit/a7954e290af91fa7deba991e554c3ecb838612da) [#1567](https://github.com/twilio-labs/paste/pull/1567) Thanks [@TheSisb](https://github.com/TheSisb)! - **Tabs**: Horizontal tabs now have center-aligned inner text.

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
  - @twilio-paste/flex@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/flex@2.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/flex@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/style-props@3.0.0

## 1.0.2

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/flex@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/style-props@2.0.0

## 0.5.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/tabs-primitive@0.2.2
  - @twilio-paste/flex@0.5.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.5.0...@twilio-paste/tabs@0.5.1) (2021-01-25)

### Bug Fixes

- **tabs:** correctly typed to accept children ([ca08a15](https://github.com/twilio-labs/paste/commit/ca08a1590a20c1fbccd6212665761c942e18cb36))

# [0.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.4.4...@twilio-paste/tabs@0.5.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.4.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.4.3...@twilio-paste/tabs@0.4.4) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.4.2...@twilio-paste/tabs@0.4.3) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.4.1...@twilio-paste/tabs@0.4.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.4.0...@twilio-paste/tabs@0.4.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/tabs

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.33...@twilio-paste/tabs@0.4.0) (2020-12-17)

### Bug Fixes

- **tabs:** add forwardRef ([467a726](https://github.com/twilio-labs/paste/commit/467a7265b6e56196011ca7a0aca76b1895ef973b))

### BREAKING CHANGES

- **tabs:** component is now using fowardRef

## [0.3.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.32...@twilio-paste/tabs@0.3.33) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.31...@twilio-paste/tabs@0.3.32) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.30...@twilio-paste/tabs@0.3.31) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.29...@twilio-paste/tabs@0.3.30) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.28...@twilio-paste/tabs@0.3.29) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.27...@twilio-paste/tabs@0.3.28) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.26...@twilio-paste/tabs@0.3.27) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.25...@twilio-paste/tabs@0.3.26) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.24...@twilio-paste/tabs@0.3.25) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.23...@twilio-paste/tabs@0.3.24) (2020-10-27)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.22...@twilio-paste/tabs@0.3.23) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.21...@twilio-paste/tabs@0.3.22) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.20...@twilio-paste/tabs@0.3.21) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.19...@twilio-paste/tabs@0.3.20) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.18...@twilio-paste/tabs@0.3.19) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.17...@twilio-paste/tabs@0.3.18) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.16...@twilio-paste/tabs@0.3.17) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.15...@twilio-paste/tabs@0.3.16) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.14...@twilio-paste/tabs@0.3.15) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.13...@twilio-paste/tabs@0.3.14) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.12...@twilio-paste/tabs@0.3.13) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.11...@twilio-paste/tabs@0.3.12) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.10...@twilio-paste/tabs@0.3.11) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.9...@twilio-paste/tabs@0.3.10) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.8...@twilio-paste/tabs@0.3.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.7...@twilio-paste/tabs@0.3.8) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.6...@twilio-paste/tabs@0.3.7) (2020-08-25)

### Bug Fixes

- **tabs:** remove unnecessary currentColor ([5013de6](https://github.com/twilio-labs/paste/commit/5013de676f6049c617073f8f16d677af50973f32))

## [0.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.5...@twilio-paste/tabs@0.3.6) (2020-08-25)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.4...@twilio-paste/tabs@0.3.5) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.3...@twilio-paste/tabs@0.3.4) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.2...@twilio-paste/tabs@0.3.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.1...@twilio-paste/tabs@0.3.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.3.0...@twilio-paste/tabs@0.3.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/tabs

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.2.2...@twilio-paste/tabs@0.3.0) (2020-08-05)

### Features

- **tabs:** add state prop ([473c518](https://github.com/twilio-labs/paste/commit/473c518f9dfd6f10c4e0de1cd0a674fd805b2254))

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.2.1...@twilio-paste/tabs@0.2.2) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.2.0...@twilio-paste/tabs@0.2.1) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/tabs

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.15...@twilio-paste/tabs@0.2.0) (2020-07-31)

### Features

- **tabs:** fitted tabs and update styles ([cc6c12a](https://github.com/twilio-labs/paste/commit/cc6c12ae75edfb512b829da3ae8b8f5f58a12bc8))

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.14...@twilio-paste/tabs@0.1.15) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.13...@twilio-paste/tabs@0.1.14) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.12...@twilio-paste/tabs@0.1.13) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.11...@twilio-paste/tabs@0.1.12) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.10...@twilio-paste/tabs@0.1.11) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.9...@twilio-paste/tabs@0.1.10) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.8...@twilio-paste/tabs@0.1.9) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.7...@twilio-paste/tabs@0.1.8) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.6...@twilio-paste/tabs@0.1.7) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.5...@twilio-paste/tabs@0.1.6) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.4...@twilio-paste/tabs@0.1.5) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.3...@twilio-paste/tabs@0.1.4) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.2...@twilio-paste/tabs@0.1.3) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.1...@twilio-paste/tabs@0.1.2) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/tabs

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.1.0...@twilio-paste/tabs@0.1.1) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/tabs

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tabs@0.0.2...@twilio-paste/tabs@0.1.0) (2020-06-10)

### Bug Fixes

- **tabs:** remove padding props from TabPanels ([9ffa5e9](https://github.com/twilio-labs/paste/commit/9ffa5e95d729fc7ef2c83619b87f0cd4c1ff2426))

### Features

- **tabs:** adding component package ([c6c9a46](https://github.com/twilio-labs/paste/commit/c6c9a464135fade4b9dc7d22f03718ec0e9666a1))
