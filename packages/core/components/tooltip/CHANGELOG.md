# Change Log

## 5.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 5.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [tooltip]

  - Update tooltip arrow stroke to `colorBorderInverseWeaker`
  - Update tooltip border color to `colorBorderInverseWeaker`

## 5.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 4.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 4.1.0

### Minor Changes

- [`420c78fc`](https://github.com/twilio-labs/paste/commit/420c78fc0f37a2a9189bbb97d77d80f6a58515cd) [#1889](https://github.com/twilio-labs/paste/pull/1889) Thanks [@gloriliale](https://github.com/gloriliale)! - [Tooltip] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 4.0.4

### Patch Changes

- [`750a38e0`](https://github.com/twilio-labs/paste/commit/750a38e05b9d91f82b14f49a160112f013629468) [#1655](https://github.com/twilio-labs/paste/pull/1655) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Tooltip] Fix a bug where the Tooltip component was swallowing the event handlers of the child component it was wrapping

## 4.0.3

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 4.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 4.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/spinner@7.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/icons@5.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 2.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/tooltip-primitive@0.2.3

## 2.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/spinner@5.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 1.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/tooltip-primitive@0.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.4.0...@twilio-paste/tooltip@0.4.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/tooltip

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.35...@twilio-paste/tooltip@0.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.3.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.34...@twilio-paste/tooltip@0.3.35) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.33...@twilio-paste/tooltip@0.3.34) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.32...@twilio-paste/tooltip@0.3.33) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.31...@twilio-paste/tooltip@0.3.32) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.30...@twilio-paste/tooltip@0.3.31) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.29...@twilio-paste/tooltip@0.3.30) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.28...@twilio-paste/tooltip@0.3.29) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.27...@twilio-paste/tooltip@0.3.28) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.26...@twilio-paste/tooltip@0.3.27) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.25...@twilio-paste/tooltip@0.3.26) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.24...@twilio-paste/tooltip@0.3.25) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.23...@twilio-paste/tooltip@0.3.24) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.22...@twilio-paste/tooltip@0.3.23) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.21...@twilio-paste/tooltip@0.3.22) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.20...@twilio-paste/tooltip@0.3.21) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.19...@twilio-paste/tooltip@0.3.20) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.18...@twilio-paste/tooltip@0.3.19) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.17...@twilio-paste/tooltip@0.3.18) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.16...@twilio-paste/tooltip@0.3.17) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.15...@twilio-paste/tooltip@0.3.16) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.14...@twilio-paste/tooltip@0.3.15) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.13...@twilio-paste/tooltip@0.3.14) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.12...@twilio-paste/tooltip@0.3.13) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.11...@twilio-paste/tooltip@0.3.12) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.10...@twilio-paste/tooltip@0.3.11) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.9...@twilio-paste/tooltip@0.3.10) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.8...@twilio-paste/tooltip@0.3.9) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.7...@twilio-paste/tooltip@0.3.8) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.6...@twilio-paste/tooltip@0.3.7) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.5...@twilio-paste/tooltip@0.3.6) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.4...@twilio-paste/tooltip@0.3.5) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.3...@twilio-paste/tooltip@0.3.4) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.2...@twilio-paste/tooltip@0.3.3) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.1...@twilio-paste/tooltip@0.3.2) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.0...@twilio-paste/tooltip@0.3.1) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/tooltip

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.15...@twilio-paste/tooltip@0.3.0) (2020-09-14)

### Features

- **tooltip:** add state hook prop ([539db2c](https://github.com/twilio-labs/paste/commit/539db2ccfa5346f2f10760387d2dd99c48034e95))

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.14...@twilio-paste/tooltip@0.2.15) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.13...@twilio-paste/tooltip@0.2.14) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.12...@twilio-paste/tooltip@0.2.13) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.11...@twilio-paste/tooltip@0.2.12) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.10...@twilio-paste/tooltip@0.2.11) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.9...@twilio-paste/tooltip@0.2.10) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.8...@twilio-paste/tooltip@0.2.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.7...@twilio-paste/tooltip@0.2.8) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.6...@twilio-paste/tooltip@0.2.7) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.5...@twilio-paste/tooltip@0.2.6) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.4...@twilio-paste/tooltip@0.2.5) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.3...@twilio-paste/tooltip@0.2.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.2...@twilio-paste/tooltip@0.2.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.1...@twilio-paste/tooltip@0.2.2) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.0...@twilio-paste/tooltip@0.2.1) (2020-08-05)

**Note:** Version bump only for package @twilio-paste/tooltip

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.11...@twilio-paste/tooltip@0.2.0) (2020-08-04)

### Bug Fixes

- **tooltip:** reduce the arrow size ([a53745c](https://github.com/twilio-labs/paste/commit/a53745c1ea042a41d3762a81ddde3d0fe7921189))

### Features

- **tooltip:** make updates to the design for unified design language ([61ecaf0](https://github.com/twilio-labs/paste/commit/61ecaf0f9172c86fa024c930bf401b1e0f2ee73a))

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.10...@twilio-paste/tooltip@0.1.11) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.9...@twilio-paste/tooltip@0.1.10) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.8...@twilio-paste/tooltip@0.1.9) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.7...@twilio-paste/tooltip@0.1.8) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.6...@twilio-paste/tooltip@0.1.7) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.5...@twilio-paste/tooltip@0.1.6) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.4...@twilio-paste/tooltip@0.1.5) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.3...@twilio-paste/tooltip@0.1.4) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.2...@twilio-paste/tooltip@0.1.3) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.1...@twilio-paste/tooltip@0.1.2) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.0...@twilio-paste/tooltip@0.1.1) (2020-07-08)

### Bug Fixes

- **tooltip:** move arrow to StyedBase to prevent line-height override ([345f3dd](https://github.com/twilio-labs/paste/commit/345f3ddb690e5ea20a482ac8479fa111a9025176))

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.0.2...@twilio-paste/tooltip@0.1.0) (2020-07-02)

### Features

- **tooltip:** add tooltip package ([a2b5f93](https://github.com/twilio-labs/paste/commit/a2b5f93d6e92d46a5d7ea37d282426b611252af0))
