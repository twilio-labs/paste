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
  - @twilio-paste/box@5.0.0

## 2.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 2.1.0

### Minor Changes

- [`9f1f99ca`](https://github.com/twilio-labs/paste/commit/9f1f99cae442bc9fd1c658cc85ad64695d61870a) [#1723](https://github.com/twilio-labs/paste/pull/1723) Thanks [@nkrantz](https://github.com/nkrantz)! - [Flex] Enable Flex to respect element customizations set on the customization provider. Flex now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 2.0.4

### Patch Changes

- [`b9e74f3a`](https://github.com/twilio-labs/paste/commit/b9e74f3ab15066381f2c99db5d49cc9adb960572) [#1466](https://github.com/twilio-labs/paste/pull/1466) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Flex]: correctly allow layout style props to be applied to the Flex component including width and height

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

## 0.5.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.5.0...@twilio-paste/flex@0.5.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/flex

# [0.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.7...@twilio-paste/flex@0.5.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.4.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.6...@twilio-paste/flex@0.4.7) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/flex

## [0.4.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.5...@twilio-paste/flex@0.4.6) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.4.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.4...@twilio-paste/flex@0.4.5) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/flex

## [0.4.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.3...@twilio-paste/flex@0.4.4) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/flex

## [0.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.2...@twilio-paste/flex@0.4.3) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/flex

## [0.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.1...@twilio-paste/flex@0.4.2) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/flex

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.4.0...@twilio-paste/flex@0.4.1) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/flex

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.70...@twilio-paste/flex@0.4.0) (2020-12-02)

### Features

- **flex:** wrapping with forwardRefs ([362715f](https://github.com/twilio-labs/paste/commit/362715fc2e7f24932120e73e84493a93846afea1))

## [0.3.70](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.69...@twilio-paste/flex@0.3.70) (2020-11-25)

### Bug Fixes

- **flex:** export types ([4ceb7e2](https://github.com/twilio-labs/paste/commit/4ceb7e2f92955b142a9af1b0a927e2bf2d5daa28))

## [0.3.69](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.68...@twilio-paste/flex@0.3.69) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.68](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.67...@twilio-paste/flex@0.3.68) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.67](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.66...@twilio-paste/flex@0.3.67) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.66](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.65...@twilio-paste/flex@0.3.66) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.65](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.64...@twilio-paste/flex@0.3.65) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.64](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.63...@twilio-paste/flex@0.3.64) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.63](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.62...@twilio-paste/flex@0.3.63) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.62](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.61...@twilio-paste/flex@0.3.62) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.61](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.60...@twilio-paste/flex@0.3.61) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.60](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.59...@twilio-paste/flex@0.3.60) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.59](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.58...@twilio-paste/flex@0.3.59) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.58](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.57...@twilio-paste/flex@0.3.58) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.56...@twilio-paste/flex@0.3.57) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.55...@twilio-paste/flex@0.3.56) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.54...@twilio-paste/flex@0.3.55) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.53...@twilio-paste/flex@0.3.54) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.52...@twilio-paste/flex@0.3.53) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.51...@twilio-paste/flex@0.3.52) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.50...@twilio-paste/flex@0.3.51) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.49...@twilio-paste/flex@0.3.50) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.48...@twilio-paste/flex@0.3.49) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.47...@twilio-paste/flex@0.3.48) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.46...@twilio-paste/flex@0.3.47) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.45...@twilio-paste/flex@0.3.46) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.44...@twilio-paste/flex@0.3.45) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.43...@twilio-paste/flex@0.3.44) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.42...@twilio-paste/flex@0.3.43) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.41...@twilio-paste/flex@0.3.42) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.40...@twilio-paste/flex@0.3.41) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.39...@twilio-paste/flex@0.3.40) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.38...@twilio-paste/flex@0.3.39) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.37...@twilio-paste/flex@0.3.38) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.36...@twilio-paste/flex@0.3.37) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.35...@twilio-paste/flex@0.3.36) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.34...@twilio-paste/flex@0.3.35) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.33...@twilio-paste/flex@0.3.34) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.32...@twilio-paste/flex@0.3.33) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.31...@twilio-paste/flex@0.3.32) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.30...@twilio-paste/flex@0.3.31) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.29...@twilio-paste/flex@0.3.30) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.28...@twilio-paste/flex@0.3.29) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.27...@twilio-paste/flex@0.3.28) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.26...@twilio-paste/flex@0.3.27) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.25...@twilio-paste/flex@0.3.26) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.24...@twilio-paste/flex@0.3.25) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.23...@twilio-paste/flex@0.3.24) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.22...@twilio-paste/flex@0.3.23) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.21...@twilio-paste/flex@0.3.22) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.20...@twilio-paste/flex@0.3.21) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.19...@twilio-paste/flex@0.3.20) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.18...@twilio-paste/flex@0.3.19) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.17...@twilio-paste/flex@0.3.18) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.16...@twilio-paste/flex@0.3.17) (2020-04-17)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.15...@twilio-paste/flex@0.3.16) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.14...@twilio-paste/flex@0.3.15) (2020-04-08)

### Bug Fixes

- **flex:** package dependencies updated to be correct ([01cb59d](https://github.com/twilio-labs/paste/commit/01cb59d43aa2e3be95a2d9fd741123e789a8c802))

## [0.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.13...@twilio-paste/flex@0.3.14) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.12...@twilio-paste/flex@0.3.13) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.11...@twilio-paste/flex@0.3.12) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.10...@twilio-paste/flex@0.3.11) (2020-03-28)

### Bug Fixes

- **flex:** add min-width:0 explicitly ([c4f436d](https://github.com/twilio-labs/paste/commit/c4f436d9ff71ade75709bef0941b8c1c880a2e8d))

## [0.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.9...@twilio-paste/flex@0.3.10) (2020-03-24)

### Bug Fixes

- **flex:** switch from theme-tokens to theme package dep ([588f197](https://github.com/twilio-labs/paste/commit/588f19783dd54439ed5fc2add08de3162984f6fb))

## [0.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.8...@twilio-paste/flex@0.3.9) (2020-03-20)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.7...@twilio-paste/flex@0.3.8) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.6...@twilio-paste/flex@0.3.7) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.5...@twilio-paste/flex@0.3.6) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.4...@twilio-paste/flex@0.3.5) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.3...@twilio-paste/flex@0.3.4) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.2...@twilio-paste/flex@0.3.3) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/flex

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.1...@twilio-paste/flex@0.3.2) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.3.0...@twilio-paste/flex@0.3.1) (2020-02-14)

### Bug Fixes

- **flex:** add missing peer deps ([52b916f](https://github.com/twilio-labs/paste/commit/52b916f7750a9351981c4136d59e847cb98d5c0f))

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.2.5...@twilio-paste/flex@0.3.0) (2020-02-13)

### Features

- **flex:** support the as prop ([4a2f32c](https://github.com/twilio-labs/paste/commit/4a2f32cdb98d895e441d1c8315c574bdcc415b5d))

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.2.4...@twilio-paste/flex@0.2.5) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/flex

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.2.3...@twilio-paste/flex@0.2.4) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/flex

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.2.2...@twilio-paste/flex@0.2.3) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/flex

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.2.1...@twilio-paste/flex@0.2.2) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/flex

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.2.0...@twilio-paste/flex@0.2.1) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/flex

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.1.3...@twilio-paste/flex@0.2.0) (2020-01-30)

### Features

- **flex:** update with new props and safelyspread ([25ab7bd](https://github.com/twilio-labs/paste/commit/25ab7bdbeca92fe6a07779c476976f51a26700f2))

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.1.2...@twilio-paste/flex@0.1.3) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/flex

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.1.1...@twilio-paste/flex@0.1.2) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/flex

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/flex@0.1.0...@twilio-paste/flex@0.1.1) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/flex

# 0.1.0 (2019-12-19)

### Bug Fixes

- add prop-types package, add description, bump types ([#234](https://github.com/twilio-labs/paste/issues/234)) ([c97d878](https://github.com/twilio-labs/paste/commit/c97d878d090b89d176e6f48f25a33e5317585ef4))

### Features

- **Flex:** add Flex component package ([#204](https://github.com/twilio-labs/paste/issues/204)) ([74877c4](https://github.com/twilio-labs/paste/commit/74877c4b0b260c5c6451bf9eb95c2baf3b1b7751))
