# Change Log

## 8.0.3

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button, FormPillGroup, Menu, Pagination, Select] inherit fontFamily for i18n

## 8.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 8.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 8.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/separator@3.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 7.0.5

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.0.4

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 7.0.3

### Patch Changes

- [`d1126c27`](https://github.com/twilio-labs/paste/commit/d1126c278bb14788208b998257a29806edf40ca8) [#1900](https://github.com/twilio-labs/paste/pull/1900) Thanks [@andipants12](https://github.com/andipants12)! - [Menu]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 7.0.2

### Patch Changes

- [`eab3fd93`](https://github.com/twilio-labs/paste/commit/eab3fd9384510a7aa35c6f5244e8d0431144197b) [#1501](https://github.com/twilio-labs/paste/pull/1501) Thanks [@richbachman](https://github.com/richbachman)! - MenuItem now renders as a `button` by default. In order to render it as an `a`, and `href` needs to be passed.

## 7.0.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

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
  - @twilio-paste/anchor@5.0.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/separator@2.0.2
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/anchor@5.0.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/anchor@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/separator@2.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/media-object@4.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/anchor@4.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/separator@2.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/media-object@4.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/separator@1.0.2
  - @twilio-paste/menu-primitive@0.2.3
  - @twilio-paste/button@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/anchor@3.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/separator@1.0.1
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/media-object@3.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/anchor@3.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/anchor@3.0.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/separator@1.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/media-object@3.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/menu-primitive@0.2.2
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/anchor@2.0.1
  - @twilio-paste/separator@0.4.2
  - @twilio-paste/media-object@2.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/anchor@2.0.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.1.0...@twilio-paste/menu@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/menu

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.6...@twilio-paste/menu@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.5...@twilio-paste/menu@2.0.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.4...@twilio-paste/menu@2.0.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.3...@twilio-paste/menu@2.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.2...@twilio-paste/menu@2.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.1...@twilio-paste/menu@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.0...@twilio-paste/menu@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/menu

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.54...@twilio-paste/menu@2.0.0) (2020-12-17)

### Bug Fixes

- **menu:** add forwardRef ([6e3557e](https://github.com/twilio-labs/paste/commit/6e3557ebe93432a8d6226aab4ac947ab366785a4))

### BREAKING CHANGES

- **menu:** component is now using fowardRef

## [1.1.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.53...@twilio-paste/menu@1.1.54) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.52...@twilio-paste/menu@1.1.53) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.51...@twilio-paste/menu@1.1.52) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.50...@twilio-paste/menu@1.1.51) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.49...@twilio-paste/menu@1.1.50) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.48...@twilio-paste/menu@1.1.49) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.47...@twilio-paste/menu@1.1.48) (2020-11-19)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.46...@twilio-paste/menu@1.1.47) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.45...@twilio-paste/menu@1.1.46) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.44...@twilio-paste/menu@1.1.45) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.43...@twilio-paste/menu@1.1.44) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.42...@twilio-paste/menu@1.1.43) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.41...@twilio-paste/menu@1.1.42) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.40...@twilio-paste/menu@1.1.41) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.39...@twilio-paste/menu@1.1.40) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.38...@twilio-paste/menu@1.1.39) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.37...@twilio-paste/menu@1.1.38) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.36...@twilio-paste/menu@1.1.37) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.35...@twilio-paste/menu@1.1.36) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.34...@twilio-paste/menu@1.1.35) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.33...@twilio-paste/menu@1.1.34) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.32...@twilio-paste/menu@1.1.33) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.31...@twilio-paste/menu@1.1.32) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.30...@twilio-paste/menu@1.1.31) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.29...@twilio-paste/menu@1.1.30) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.28...@twilio-paste/menu@1.1.29) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.27...@twilio-paste/menu@1.1.28) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.26...@twilio-paste/menu@1.1.27) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.25...@twilio-paste/menu@1.1.26) (2020-09-25)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.24...@twilio-paste/menu@1.1.25) (2020-09-23)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.23...@twilio-paste/menu@1.1.24) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.22...@twilio-paste/menu@1.1.23) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.21...@twilio-paste/menu@1.1.22) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.20...@twilio-paste/menu@1.1.21) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.19...@twilio-paste/menu@1.1.20) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.18...@twilio-paste/menu@1.1.19) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.17...@twilio-paste/menu@1.1.18) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.16...@twilio-paste/menu@1.1.17) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.15...@twilio-paste/menu@1.1.16) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.14...@twilio-paste/menu@1.1.15) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.13...@twilio-paste/menu@1.1.14) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.12...@twilio-paste/menu@1.1.13) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.11...@twilio-paste/menu@1.1.12) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.10...@twilio-paste/menu@1.1.11) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.9...@twilio-paste/menu@1.1.10) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.8...@twilio-paste/menu@1.1.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.7...@twilio-paste/menu@1.1.8) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.6...@twilio-paste/menu@1.1.7) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.5...@twilio-paste/menu@1.1.6) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.4...@twilio-paste/menu@1.1.5) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.3...@twilio-paste/menu@1.1.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.2...@twilio-paste/menu@1.1.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.1...@twilio-paste/menu@1.1.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.0...@twilio-paste/menu@1.1.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.0.1...@twilio-paste/menu@1.1.0) (2020-08-11)

### Features

- **menu:** update styles for unified design language ([4429499](https://github.com/twilio-labs/paste/commit/4429499bc8ee1d158c9bf8f320f61b6c7cca58f9))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.0.0...@twilio-paste/menu@1.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/menu

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.6...@twilio-paste/menu@1.0.0) (2020-08-05)

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

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.5...@twilio-paste/menu@0.2.6) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.4...@twilio-paste/menu@0.2.5) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.3...@twilio-paste/menu@0.2.4) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.2...@twilio-paste/menu@0.2.3) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.1...@twilio-paste/menu@0.2.2) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.0...@twilio-paste/menu@0.2.1) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/menu

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.26...@twilio-paste/menu@0.2.0) (2020-07-28)

### Features

- **menu:** add MenuGroup ([299ba82](https://github.com/twilio-labs/paste/commit/299ba82366c06a9655b4a9b39b4f56688d6d5004))

## [0.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.25...@twilio-paste/menu@0.1.26) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.24...@twilio-paste/menu@0.1.25) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.23...@twilio-paste/menu@0.1.24) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.22...@twilio-paste/menu@0.1.23) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.21...@twilio-paste/menu@0.1.22) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.20...@twilio-paste/menu@0.1.21) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.19...@twilio-paste/menu@0.1.20) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.18...@twilio-paste/menu@0.1.19) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.17...@twilio-paste/menu@0.1.18) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.16...@twilio-paste/menu@0.1.17) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.15...@twilio-paste/menu@0.1.16) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.14...@twilio-paste/menu@0.1.15) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.13...@twilio-paste/menu@0.1.14) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.12...@twilio-paste/menu@0.1.13) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.11...@twilio-paste/menu@0.1.12) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.10...@twilio-paste/menu@0.1.11) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.9...@twilio-paste/menu@0.1.10) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.8...@twilio-paste/menu@0.1.9) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.7...@twilio-paste/menu@0.1.8) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.6...@twilio-paste/menu@0.1.7) (2020-06-09)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.5...@twilio-paste/menu@0.1.6) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.4...@twilio-paste/menu@0.1.5) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.3...@twilio-paste/menu@0.1.4) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.2...@twilio-paste/menu@0.1.3) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.1...@twilio-paste/menu@0.1.2) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.0...@twilio-paste/menu@0.1.1) (2020-05-27)

### Bug Fixes

- **menu:** allow actions, links and external links ([4c69457](https://github.com/twilio-labs/paste/commit/4c694577ebfa29ff979669c914d0831c8aa7d396))

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.0.2...@twilio-paste/menu@0.1.0) (2020-05-20)

### Features

- **menu:** create the menu component ([9363a41](https://github.com/twilio-labs/paste/commit/9363a41a023b4f9db1d8e530fe98251cd9d4e522))
