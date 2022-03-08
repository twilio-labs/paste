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
  - @twilio-paste/text@5.0.0

## 4.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.1.0

### Minor Changes

- [`72c5ce66`](https://github.com/twilio-labs/paste/commit/72c5ce66c1098311d7d9e4a0d6ea2bd62eda9632) [#1766](https://github.com/twilio-labs/paste/pull/1766) Thanks [@richbachman](https://github.com/richbachman)! - [Paragraph] Enable Paragraph to respect element customizations set on the customization provider. Paragraph now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 4.0.3

### Patch Changes

- [`d000a4e4`](https://github.com/twilio-labs/paste/commit/d000a4e4c88bc0d3dd67532df937b805191fe4c0) [#1333](https://github.com/twilio-labs/paste/pull/1333) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Paragraph] allow for global HTML attriutes to be passed to the paragraph element

## 4.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 4.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/style-props@2.0.0

## 2.1.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/text@2.5.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@2.1.0...@twilio-paste/paragraph@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/paragraph

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@2.0.3...@twilio-paste/paragraph@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@2.0.2...@twilio-paste/paragraph@2.0.3) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/paragraph

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@2.0.1...@twilio-paste/paragraph@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@2.0.0...@twilio-paste/paragraph@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/paragraph

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.57...@twilio-paste/paragraph@2.0.0) (2020-12-17)

### Bug Fixes

- **paragraph:** add forwardRef ([a5fe9d1](https://github.com/twilio-labs/paste/commit/a5fe9d10b1e0f673fe50bcdf181b1067a4188467))

### BREAKING CHANGES

- **paragraph:** component is now using fowardRef

## [1.1.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.56...@twilio-paste/paragraph@1.1.57) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.55...@twilio-paste/paragraph@1.1.56) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.54...@twilio-paste/paragraph@1.1.55) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.53...@twilio-paste/paragraph@1.1.54) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.52...@twilio-paste/paragraph@1.1.53) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.51...@twilio-paste/paragraph@1.1.52) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.50...@twilio-paste/paragraph@1.1.51) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.49...@twilio-paste/paragraph@1.1.50) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.48...@twilio-paste/paragraph@1.1.49) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.47...@twilio-paste/paragraph@1.1.48) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.46...@twilio-paste/paragraph@1.1.47) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.45...@twilio-paste/paragraph@1.1.46) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.44...@twilio-paste/paragraph@1.1.45) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.43...@twilio-paste/paragraph@1.1.44) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.42...@twilio-paste/paragraph@1.1.43) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.41...@twilio-paste/paragraph@1.1.42) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.40...@twilio-paste/paragraph@1.1.41) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.39...@twilio-paste/paragraph@1.1.40) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.38...@twilio-paste/paragraph@1.1.39) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.37...@twilio-paste/paragraph@1.1.38) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.36...@twilio-paste/paragraph@1.1.37) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.35...@twilio-paste/paragraph@1.1.36) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.34...@twilio-paste/paragraph@1.1.35) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.33...@twilio-paste/paragraph@1.1.34) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.32...@twilio-paste/paragraph@1.1.33) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.31...@twilio-paste/paragraph@1.1.32) (2020-08-24)

### Bug Fixes

- **paragraph:** bump line-height due to default line-height change ([5de2b70](https://github.com/twilio-labs/paste/commit/5de2b70af3aa49964b09a9fe3b52e23e977f486d))

## [1.1.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.30...@twilio-paste/paragraph@1.1.31) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.29...@twilio-paste/paragraph@1.1.30) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.28...@twilio-paste/paragraph@1.1.29) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.27...@twilio-paste/paragraph@1.1.28) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.26...@twilio-paste/paragraph@1.1.27) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.25...@twilio-paste/paragraph@1.1.26) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.24...@twilio-paste/paragraph@1.1.25) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.23...@twilio-paste/paragraph@1.1.24) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.22...@twilio-paste/paragraph@1.1.23) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.21...@twilio-paste/paragraph@1.1.22) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.20...@twilio-paste/paragraph@1.1.21) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.19...@twilio-paste/paragraph@1.1.20) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.18...@twilio-paste/paragraph@1.1.19) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.17...@twilio-paste/paragraph@1.1.18) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.16...@twilio-paste/paragraph@1.1.17) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.15...@twilio-paste/paragraph@1.1.16) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.14...@twilio-paste/paragraph@1.1.15) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.13...@twilio-paste/paragraph@1.1.14) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.12...@twilio-paste/paragraph@1.1.13) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.11...@twilio-paste/paragraph@1.1.12) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.10...@twilio-paste/paragraph@1.1.11) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.9...@twilio-paste/paragraph@1.1.10) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.8...@twilio-paste/paragraph@1.1.9) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.7...@twilio-paste/paragraph@1.1.8) (2020-05-26)

### Bug Fixes

- **paragraph:** can now unset marginBottom ([2f28a0e](https://github.com/twilio-labs/paste/commit/2f28a0eeea40bd7f1e795e749cf7350dc6012d54))

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.6...@twilio-paste/paragraph@1.1.7) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.5...@twilio-paste/paragraph@1.1.6) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.4...@twilio-paste/paragraph@1.1.5) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.3...@twilio-paste/paragraph@1.1.4) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.2...@twilio-paste/paragraph@1.1.3) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.1...@twilio-paste/paragraph@1.1.2) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.1.0...@twilio-paste/paragraph@1.1.1) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/paragraph

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.29...@twilio-paste/paragraph@1.1.0) (2020-04-17)

### Features

- **components:** promote text components, spinner and primitive to prod ([5605adc](https://github.com/twilio-labs/paste/commit/5605adc99021be20dafd3fedfeb745490a50c7e7))

## [1.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.28...@twilio-paste/paragraph@1.0.29) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.27...@twilio-paste/paragraph@1.0.28) (2020-04-08)

### Bug Fixes

- **paragraph:** package dependencies updated to be correct ([f4509eb](https://github.com/twilio-labs/paste/commit/f4509eba5b6dc379914c041a7d92ee7907753b17))

## [1.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.26...@twilio-paste/paragraph@1.0.27) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.25...@twilio-paste/paragraph@1.0.26) (2020-04-07)

### Bug Fixes

- **paragraph:** use color prop, update snapshots ([03fca3d](https://github.com/twilio-labs/paste/commit/03fca3d6d2f09132c3a7e59be7951a73414e31cb))

## [1.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.24...@twilio-paste/paragraph@1.0.25) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.23...@twilio-paste/paragraph@1.0.24) (2020-03-24)

### Bug Fixes

- **paragraph:** switch from theme-tokens to theme package dep ([b1875cf](https://github.com/twilio-labs/paste/commit/b1875cf74ec30aa452147c7e0be96d7d49995484))

## [1.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.22...@twilio-paste/paragraph@1.0.23) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.21...@twilio-paste/paragraph@1.0.22) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.20...@twilio-paste/paragraph@1.0.21) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.19...@twilio-paste/paragraph@1.0.20) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.18...@twilio-paste/paragraph@1.0.19) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.17...@twilio-paste/paragraph@1.0.18) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.16...@twilio-paste/paragraph@1.0.17) (2020-02-26)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.15...@twilio-paste/paragraph@1.0.16) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.14...@twilio-paste/paragraph@1.0.15) (2020-02-14)

### Bug Fixes

- **paragraph:** add missing peer deps ([665ee51](https://github.com/twilio-labs/paste/commit/665ee51d85c2dd7c6017defd9b13a95944290873))

## [1.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.13...@twilio-paste/paragraph@1.0.14) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.12...@twilio-paste/paragraph@1.0.13) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.11...@twilio-paste/paragraph@1.0.12) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.10...@twilio-paste/paragraph@1.0.11) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.9...@twilio-paste/paragraph@1.0.10) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.8...@twilio-paste/paragraph@1.0.9) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.7...@twilio-paste/paragraph@1.0.8) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.6...@twilio-paste/paragraph@1.0.7) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.5...@twilio-paste/paragraph@1.0.6) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.4...@twilio-paste/paragraph@1.0.5) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.3...@twilio-paste/paragraph@1.0.4) (2019-11-21)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.2...@twilio-paste/paragraph@1.0.3) (2019-11-20)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.1...@twilio-paste/paragraph@1.0.2) (2019-11-18)

**Note:** Version bump only for package @twilio-paste/paragraph

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@1.0.0...@twilio-paste/paragraph@1.0.1) (2019-11-12)

### Bug Fixes

- paragraph package deps incorrect ([90ad6bc](https://github.com/twilio-labs/paste/commit/90ad6bca9628b2ac85990053d738c92450b4c798))

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@0.0.2...@twilio-paste/paragraph@1.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))
- enable theme switching on the docsite ([#124](https://github.com/twilio-labs/paste/issues/124)) ([df797e5](https://github.com/twilio-labs/paste/commit/df797e57ff1268367053d717f3b3c2ca48a0aa4f))

## [0.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/paragraph@0.0.1...@twilio-paste/paragraph@0.0.2) (2019-10-29)

**Note:** Version bump only for package @twilio-paste/paragraph

## 0.0.1 (2019-08-15)

**Note:** Version bump only for package @twilio-paste/paragraph
