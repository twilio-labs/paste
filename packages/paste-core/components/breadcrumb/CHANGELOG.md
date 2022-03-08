# Change Log

## 5.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 5.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 5.0.0

### Patch Changes

- [`fd23d95b`](https://github.com/twilio-labs/paste/commit/fd23d95b62a6dc2930f3669d3fdf807c1ab57000) [#2151](https://github.com/twilio-labs/paste/pull/2151) Thanks [@gloriliale](https://github.com/gloriliale)! - [Breadcrumb] spread props onto Anchor or Text of breadcrumb, not the list item wrapping it.

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 4.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.1.0

### Minor Changes

- [`36cc8dce`](https://github.com/twilio-labs/paste/commit/36cc8dce42f4abe357779c6fb80af6c2cd6abd52) [#1895](https://github.com/twilio-labs/paste/pull/1895) Thanks [@andipants12](https://github.com/andipants12)! - [Breadcrumb] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 4.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 4.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/anchor@5.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 4.0.0

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/anchor@5.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/anchor@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/anchor@4.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/style-props@3.0.0

## 2.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/anchor@3.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 2.0.1

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/anchor@3.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/anchor@3.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/style-props@2.0.0

## 1.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/anchor@2.0.1
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/text@2.5.2

## 1.0.0

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/anchor@2.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.2.0...@twilio-paste/breadcrumb@0.2.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/breadcrumb

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.17...@twilio-paste/breadcrumb@0.2.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.16...@twilio-paste/breadcrumb@0.1.17) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.15...@twilio-paste/breadcrumb@0.1.16) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.14...@twilio-paste/breadcrumb@0.1.15) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.13...@twilio-paste/breadcrumb@0.1.14) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.12...@twilio-paste/breadcrumb@0.1.13) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.11...@twilio-paste/breadcrumb@0.1.12) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.10...@twilio-paste/breadcrumb@0.1.11) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.9...@twilio-paste/breadcrumb@0.1.10) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.8...@twilio-paste/breadcrumb@0.1.9) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.7...@twilio-paste/breadcrumb@0.1.8) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.6...@twilio-paste/breadcrumb@0.1.7) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.5...@twilio-paste/breadcrumb@0.1.6) (2020-11-19)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.4...@twilio-paste/breadcrumb@0.1.5) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.3...@twilio-paste/breadcrumb@0.1.4) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.2...@twilio-paste/breadcrumb@0.1.3) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.1...@twilio-paste/breadcrumb@0.1.2) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/breadcrumb

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.1.0...@twilio-paste/breadcrumb@0.1.1) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/breadcrumb

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/breadcrumb@0.0.2...@twilio-paste/breadcrumb@0.1.0) (2020-11-02)

### Features

- **breadcrumb:** add alpha component package ([3e1fe5d](https://github.com/twilio-labs/paste/commit/3e1fe5db6719589b4fff51a7f61090d8991ddfe9))
