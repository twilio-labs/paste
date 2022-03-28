# Change Log

## 5.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 5.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 5.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0

## 4.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.1.0

### Minor Changes

- [`72f18ba1`](https://github.com/twilio-labs/paste/commit/72f18ba18e97a33ec8cf76f37cbf6092bbdb6fee) [#1676](https://github.com/twilio-labs/paste/pull/1676) Thanks [@richbachman](https://github.com/richbachman)! - [MediaObject] Enable media-object, media-figure, and media-body to respect element customizations set on the customization provider. Media-object, media-figure, and media-body now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

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

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@2.1.0...@twilio-paste/media-object@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/media-object

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@2.0.3...@twilio-paste/media-object@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@2.0.2...@twilio-paste/media-object@2.0.3) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/media-object

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@2.0.1...@twilio-paste/media-object@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@2.0.0...@twilio-paste/media-object@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/media-object

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.75...@twilio-paste/media-object@2.0.0) (2020-12-17)

### Bug Fixes

- **media-object:** add forwardRef ([6bcac35](https://github.com/twilio-labs/paste/commit/6bcac357000269a4f1a881373751068f675ceffe))

### BREAKING CHANGES

- **media-object:** component is now using fowardRef

## [1.2.75](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.74...@twilio-paste/media-object@1.2.75) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.74](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.73...@twilio-paste/media-object@1.2.74) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.73](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.72...@twilio-paste/media-object@1.2.73) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.72](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.71...@twilio-paste/media-object@1.2.72) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.71](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.70...@twilio-paste/media-object@1.2.71) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.70](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.69...@twilio-paste/media-object@1.2.70) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.69](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.68...@twilio-paste/media-object@1.2.69) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.68](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.67...@twilio-paste/media-object@1.2.68) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.67](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.66...@twilio-paste/media-object@1.2.67) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.66](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.65...@twilio-paste/media-object@1.2.66) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.65](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.64...@twilio-paste/media-object@1.2.65) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.64](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.63...@twilio-paste/media-object@1.2.64) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.63](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.62...@twilio-paste/media-object@1.2.63) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.62](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.61...@twilio-paste/media-object@1.2.62) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.61](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.60...@twilio-paste/media-object@1.2.61) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.60](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.59...@twilio-paste/media-object@1.2.60) (2020-09-23)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.59](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.58...@twilio-paste/media-object@1.2.59) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.58](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.57...@twilio-paste/media-object@1.2.58) (2020-09-21)

### Bug Fixes

- **media-object:** set to be production ([08dcd7a](https://github.com/twilio-labs/paste/commit/08dcd7abc74de1b54987cd77ff3986bf56b690e7))

## [1.2.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.56...@twilio-paste/media-object@1.2.57) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.55...@twilio-paste/media-object@1.2.56) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.54...@twilio-paste/media-object@1.2.55) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.53...@twilio-paste/media-object@1.2.54) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.52...@twilio-paste/media-object@1.2.53) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.51...@twilio-paste/media-object@1.2.52) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.50...@twilio-paste/media-object@1.2.51) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.49...@twilio-paste/media-object@1.2.50) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.48...@twilio-paste/media-object@1.2.49) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.47...@twilio-paste/media-object@1.2.48) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.46...@twilio-paste/media-object@1.2.47) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.45...@twilio-paste/media-object@1.2.46) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.44...@twilio-paste/media-object@1.2.45) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.43...@twilio-paste/media-object@1.2.44) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.42...@twilio-paste/media-object@1.2.43) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.41...@twilio-paste/media-object@1.2.42) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.40...@twilio-paste/media-object@1.2.41) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.39...@twilio-paste/media-object@1.2.40) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.38...@twilio-paste/media-object@1.2.39) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.37...@twilio-paste/media-object@1.2.38) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.36...@twilio-paste/media-object@1.2.37) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.35...@twilio-paste/media-object@1.2.36) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.34...@twilio-paste/media-object@1.2.35) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.33...@twilio-paste/media-object@1.2.34) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.32...@twilio-paste/media-object@1.2.33) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.31...@twilio-paste/media-object@1.2.32) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.30...@twilio-paste/media-object@1.2.31) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.29...@twilio-paste/media-object@1.2.30) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.28...@twilio-paste/media-object@1.2.29) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.27...@twilio-paste/media-object@1.2.28) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.26...@twilio-paste/media-object@1.2.27) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.25...@twilio-paste/media-object@1.2.26) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.24...@twilio-paste/media-object@1.2.25) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.23...@twilio-paste/media-object@1.2.24) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.22...@twilio-paste/media-object@1.2.23) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.21...@twilio-paste/media-object@1.2.22) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.20...@twilio-paste/media-object@1.2.21) (2020-05-04)

### Bug Fixes

- **media-object:** switch to new spacing prop validators ([d587c49](https://github.com/twilio-labs/paste/commit/d587c498cb060980f6484f0d89940a956bbdd909))

## [1.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.19...@twilio-paste/media-object@1.2.20) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.18...@twilio-paste/media-object@1.2.19) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.17...@twilio-paste/media-object@1.2.18) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.16...@twilio-paste/media-object@1.2.17) (2020-04-17)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.15...@twilio-paste/media-object@1.2.16) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.14...@twilio-paste/media-object@1.2.15) (2020-04-08)

### Bug Fixes

- **media-object:** package dependencies updated to be correct ([02b4640](https://github.com/twilio-labs/paste/commit/02b4640897f78aed7d898247a16d5e7133c15b49))

## [1.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.13...@twilio-paste/media-object@1.2.14) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.12...@twilio-paste/media-object@1.2.13) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.11...@twilio-paste/media-object@1.2.12) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.10...@twilio-paste/media-object@1.2.11) (2020-03-28)

### Bug Fixes

- **media-object:** add min-width to body ([5281863](https://github.com/twilio-labs/paste/commit/5281863ac0cf2ee94fb5cabc1b2ca4719adac8f9))

## [1.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.9...@twilio-paste/media-object@1.2.10) (2020-03-24)

### Bug Fixes

- **media-object:** switch from theme-tokens to theme package dep ([399088b](https://github.com/twilio-labs/paste/commit/399088bf5fc80c0398daaff0a6551673a7484807))

## [1.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.8...@twilio-paste/media-object@1.2.9) (2020-03-20)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.7...@twilio-paste/media-object@1.2.8) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.6...@twilio-paste/media-object@1.2.7) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.5...@twilio-paste/media-object@1.2.6) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.4...@twilio-paste/media-object@1.2.5) (2020-03-06)

### Bug Fixes

- add missing transitive peerDep on '@styled-system/css' ([fdbb813](https://github.com/twilio-labs/paste/commit/fdbb81370cda71037348742a680299ce481eabfd))

## [1.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.3...@twilio-paste/media-object@1.2.4) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.2...@twilio-paste/media-object@1.2.3) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.1...@twilio-paste/media-object@1.2.2) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.2.0...@twilio-paste/media-object@1.2.1) (2020-02-14)

### Bug Fixes

- **media-object:** add missing peer deps ([34ba7a4](https://github.com/twilio-labs/paste/commit/34ba7a4b7a082d64c15fbcd0b7245c0c8c7b1b36))

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.1.6...@twilio-paste/media-object@1.2.0) (2020-02-13)

### Features

- **media-object:** add support for setting margin top and bottom ([7adc1ed](https://github.com/twilio-labs/paste/commit/7adc1ed071e8299eb396afbfa2b85b8c35af988d))
- **media-object:** add support for the as prop ([3167ba1](https://github.com/twilio-labs/paste/commit/3167ba1377e9f4b0fdc22f4df3488f81e75a74e8))

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.1.5...@twilio-paste/media-object@1.1.6) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.1.4...@twilio-paste/media-object@1.1.5) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.1.3...@twilio-paste/media-object@1.1.4) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.1.2...@twilio-paste/media-object@1.1.3) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.1.1...@twilio-paste/media-object@1.1.2) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.1.0...@twilio-paste/media-object@1.1.1) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/media-object

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.0.6...@twilio-paste/media-object@1.1.0) (2020-01-17)

### Bug Fixes

- **media-object:** amend missing deps for successful build ([b420ba0](https://github.com/twilio-labs/paste/commit/b420ba0e3763e990779ba98a3e5d7fd9e760f2f1))

### Features

- **media-object:** update implementation of media-object to use box ([1c999cc](https://github.com/twilio-labs/paste/commit/1c999cc1cd2cfccfb88f2f38de8aa880a951ccd2))

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.0.5...@twilio-paste/media-object@1.0.6) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.0.4...@twilio-paste/media-object@1.0.5) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.0.3...@twilio-paste/media-object@1.0.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.0.2...@twilio-paste/media-object@1.0.3) (2019-11-20)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.0.1...@twilio-paste/media-object@1.0.2) (2019-11-18)

**Note:** Version bump only for package @twilio-paste/media-object

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@1.0.0...@twilio-paste/media-object@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/media-object

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@0.5.0...@twilio-paste/media-object@1.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))

### BREAKING CHANGES

- **icons:** removed all the inherited icons since we're moving to a new system

- chore(icons): update icon list for storybook

- fix(spinner): use new icon

- fix(storybook): use new icon for story

- fix(story): button icons should be 24px

- fix: adjust icon size tokens

- feat: add iconSizes as separate key in theme-tokens

- feat(icons): icons package to use tokens and update icons

- fix(spinner): update to use tokens and new icons

- fix(button): use correct spinner size

- fix(icons): major icons package fixes

* huge overhaul to build process
* now uses rollup
* builds into cjs and esm directories
* made the package publishable to npm
* moved svg folder out of src, now src only holds react stuff
* updated scripts to use new paths and cleaned up the code
* programmatically generates rollup config from the icon-list command

- chore: add new icons dist folders to gitignore

- fix: spinner and button icon usage

- feat(icons): add rollup icon list cache file

- fix(core-bundle): sort packages for consistent builds

- chore: use `esm` instead of `es` in rollup for correctness

- chore: yarn.lock

- fix(spinner): lint error

- chore(icons): move rollup icon list

- chore(spinner): use types package in story

- fix(spinner): swap out destructured props for explicit props

# [0.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@0.4.0...@twilio-paste/media-object@0.5.0) (2019-10-31)

### Features

- update types package to styled-system v5 format ([#154](https://github.com/twilio-labs/paste/issues/154)) ([117c41e](https://github.com/twilio-labs/paste/commit/117c41e463b11440582e740c28cc067c06d16e67))

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@0.3.1...@twilio-paste/media-object@0.4.0) (2019-10-29)

### Features

- finalise the Text component ([#151](https://github.com/twilio-labs/paste/issues/151)) ([b51c272](https://github.com/twilio-labs/paste/commit/b51c272cf420380f73c31c3474ebdf23cb7cad3a))
- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/media-object@0.3.0...@twilio-paste/media-object@0.3.1) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/media-object

# 0.3.0 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))

### Features

- **website:** Add the tokens page ([#19](https://github.com/twilio-labs/paste/issues/19)) ([878d3c5](https://github.com/twilio-labs/paste/commit/878d3c5))
