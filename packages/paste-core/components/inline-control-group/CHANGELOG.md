# Change Log

## 7.0.3

### Patch Changes

- [`554da970`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf) [#2274](https://github.com/twilio-labs/paste/pull/2274) Thanks [@shleewhite](https://github.com/shleewhite)! - [checkbox, inline-control-group, radio-group] add i18nRequiredLabel prop for i18n

## 7.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 7.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 7.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/help-text@7.0.0
  - @twilio-paste/label@7.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/flex@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 6.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 6.1.0

### Minor Changes

- [`dd964dc7`](https://github.com/twilio-labs/paste/commit/dd964dc7d589313237f5a4926800646953d2e9fa) [#1899](https://github.com/twilio-labs/paste/pull/1899) Thanks [@gloriliale](https://github.com/gloriliale)! - [Inline-Control-Group] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 6.0.4

### Patch Changes

- [`28f12236`](https://github.com/twilio-labs/paste/commit/28f122360e1e474b60b44837fe427d0f05f55c88) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixes a browser quirk around responsive 'fieldset' HTML elements.

## 6.0.3

### Patch Changes

- [`9df657df`](https://github.com/twilio-labs/paste/commit/9df657df7e4994dee1b0dfa9071f8f50041adb0c) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [InlineControlGroup] Adjusted the vertical spacing of `children`. This change improve the handling of RadioGroup and CheckboxGroup children.

## 6.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/help-text@6.0.1
  - @twilio-paste/label@6.0.1
  - @twilio-paste/screen-reader-only@6.0.1
  - @twilio-paste/flex@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/help-text@6.0.0
  - @twilio-paste/screen-reader-only@6.0.0
  - @twilio-paste/label@6.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/help-text@5.0.1
  - @twilio-paste/label@5.0.1
  - @twilio-paste/screen-reader-only@5.0.1
  - @twilio-paste/flex@2.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`b1b4ac39`](https://github.com/twilio-labs/paste/commit/b1b4ac39ac70ec70bd9e150f2b8f94a123f1e1a6), [`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/label@5.0.0
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/help-text@5.0.0
  - @twilio-paste/screen-reader-only@5.0.0
  - @twilio-paste/flex@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/help-text@4.0.3
  - @twilio-paste/screen-reader-only@4.0.3
  - @twilio-paste/flex@1.0.2
  - @twilio-paste/label@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/help-text@4.0.2
  - @twilio-paste/label@4.0.2
  - @twilio-paste/screen-reader-only@4.0.2
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/help-text@4.0.1
  - @twilio-paste/screen-reader-only@4.0.1
  - @twilio-paste/label@4.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/help-text@4.0.0
  - @twilio-paste/label@4.0.0
  - @twilio-paste/screen-reader-only@4.0.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/label@3.0.1
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/flex@0.5.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/screen-reader-only@3.0.1
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/help-text@3.0.1
  - @twilio-paste/text@2.5.2

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/help-text@3.0.0
  - @twilio-paste/screen-reader-only@3.0.0
  - @twilio-paste/label@3.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.1.0...@twilio-paste/inline-control-group@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/inline-control-group

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.0.6...@twilio-paste/inline-control-group@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.0.5...@twilio-paste/inline-control-group@2.0.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.0.4...@twilio-paste/inline-control-group@2.0.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.0.3...@twilio-paste/inline-control-group@2.0.4) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.0.2...@twilio-paste/inline-control-group@2.0.3) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.0.1...@twilio-paste/inline-control-group@2.0.2) (2021-01-06)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@2.0.0...@twilio-paste/inline-control-group@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/inline-control-group

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.24...@twilio-paste/inline-control-group@2.0.0) (2020-12-17)

### Bug Fixes

- **inline-control-group:** add forwardRef ([bc07f7c](https://github.com/twilio-labs/paste/commit/bc07f7cafa515ee7d051d60cc3555717d6323395))

### BREAKING CHANGES

- **inline-control-group:** component is now using fowardRef

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.23...@twilio-paste/inline-control-group@1.1.24) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.22...@twilio-paste/inline-control-group@1.1.23) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.21...@twilio-paste/inline-control-group@1.1.22) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.20...@twilio-paste/inline-control-group@1.1.21) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.19...@twilio-paste/inline-control-group@1.1.20) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.18...@twilio-paste/inline-control-group@1.1.19) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.17...@twilio-paste/inline-control-group@1.1.18) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.16...@twilio-paste/inline-control-group@1.1.17) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.15...@twilio-paste/inline-control-group@1.1.16) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.14...@twilio-paste/inline-control-group@1.1.15) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.13...@twilio-paste/inline-control-group@1.1.14) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.12...@twilio-paste/inline-control-group@1.1.13) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.11...@twilio-paste/inline-control-group@1.1.12) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.10...@twilio-paste/inline-control-group@1.1.11) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.9...@twilio-paste/inline-control-group@1.1.10) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.8...@twilio-paste/inline-control-group@1.1.9) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.7...@twilio-paste/inline-control-group@1.1.8) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.6...@twilio-paste/inline-control-group@1.1.7) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.5...@twilio-paste/inline-control-group@1.1.6) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.4...@twilio-paste/inline-control-group@1.1.5) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.3...@twilio-paste/inline-control-group@1.1.4) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.2...@twilio-paste/inline-control-group@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.1...@twilio-paste/inline-control-group@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/inline-control-group

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/inline-control-group@1.1.0...@twilio-paste/inline-control-group@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/inline-control-group

# 1.1.0 (2020-10-07)

### Features

- **inline-control-group:** create the package ([00c27a9](https://github.com/twilio-labs/paste/commit/00c27a9956000079689bd453a53a27e79e3ff43c))
