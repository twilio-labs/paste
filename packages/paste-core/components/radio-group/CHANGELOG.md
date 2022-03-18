# Change Log

## 7.1.2

### Patch Changes

- [`554da970`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf) [#2274](https://github.com/twilio-labs/paste/pull/2274) Thanks [@shleewhite](https://github.com/shleewhite)! - [checkbox, inline-control-group, radio-group] add i18nRequiredLabel prop for i18n

## 7.1.1

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 7.1.0

### Minor Changes

- [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [radio-group]

  - Add new customization element `RADIO_CONTROL_CIRCLE` to controls the styles of the circle within the radio button
  - Update default color to `colorTextWeakest`
  - Update hover text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update focus text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update active text color to `colorTextWeakest`
  - Update checked text color to `colorTextInverse`
  - Update invalid and hover border color to `colorBorderErrorStronger`
  - Update checked and hover text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and focus text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and disabled text color to `colorTextWeakest`
  - Update checked and invalid text color to `colorTextInverse`
  - Update checked and invalid and hover background color to `colorBackgroundErrorStronger` and border color to `colorBorderErrorStronger`

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 7.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/base-radio-checkbox@7.0.0
  - @twilio-paste/help-text@7.0.0
  - @twilio-paste/inline-control-group@7.0.0
  - @twilio-paste/label@7.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/flex@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/sibling-box@4.0.0
  - @twilio-paste/text@5.0.0

## 6.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 6.1.0

### Minor Changes

- [`10d5989a`](https://github.com/twilio-labs/paste/commit/10d5989a8da2dca37d168fdfaaa04231ba2bcfa6) [#1936](https://github.com/twilio-labs/paste/pull/1936) Thanks [@gloriliale](https://github.com/gloriliale)! - [Radio-Group] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 6.0.4

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 6.0.3

### Patch Changes

- [`1a7bb349`](https://github.com/twilio-labs/paste/commit/1a7bb349186cdd2d131d44f0a22996a7df61e8c3) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [RadioGroup] Added optional `value` string prop which this component needs and is no longer on the extended `InlineControlGroup` interface.

## 6.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/base-radio-checkbox@6.0.1
  - @twilio-paste/help-text@6.0.1
  - @twilio-paste/inline-control-group@6.0.1
  - @twilio-paste/label@6.0.1
  - @twilio-paste/screen-reader-only@6.0.1
  - @twilio-paste/flex@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/sibling-box@3.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/base-radio-checkbox@6.0.0
  - @twilio-paste/help-text@6.0.0
  - @twilio-paste/inline-control-group@6.0.0
  - @twilio-paste/screen-reader-only@6.0.0
  - @twilio-paste/label@6.0.0

## 5.0.2

### Patch Changes

- [`8992af4b`](https://github.com/twilio-labs/paste/commit/8992af4b834222581927b855fb0eed62630fafd0) [#1251](https://github.com/twilio-labs/paste/pull/1251) Thanks [@richbachman](https://github.com/richbachman)! - Removed required from the `id` and `value` props, so RadioGroup can be used as an uncontrolled component. This allows RadioGroup to be used with libraries like `React-Hook-Form`.

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/base-radio-checkbox@5.0.1
  - @twilio-paste/help-text@5.0.1
  - @twilio-paste/inline-control-group@5.0.1
  - @twilio-paste/label@5.0.1
  - @twilio-paste/screen-reader-only@5.0.1
  - @twilio-paste/flex@2.0.1
  - @twilio-paste/sibling-box@3.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`b1b4ac39`](https://github.com/twilio-labs/paste/commit/b1b4ac39ac70ec70bd9e150f2b8f94a123f1e1a6), [`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/label@5.0.0
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/base-radio-checkbox@5.0.0
  - @twilio-paste/inline-control-group@5.0.0
  - @twilio-paste/help-text@5.0.0
  - @twilio-paste/screen-reader-only@5.0.0
  - @twilio-paste/flex@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/sibling-box@3.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/help-text@4.0.3
  - @twilio-paste/screen-reader-only@4.0.3
  - @twilio-paste/flex@1.0.2
  - @twilio-paste/base-radio-checkbox@4.0.3
  - @twilio-paste/inline-control-group@4.0.3
  - @twilio-paste/label@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/base-radio-checkbox@4.0.2
  - @twilio-paste/help-text@4.0.2
  - @twilio-paste/inline-control-group@4.0.2
  - @twilio-paste/label@4.0.2
  - @twilio-paste/screen-reader-only@4.0.2
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/sibling-box@2.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/base-radio-checkbox@4.0.1
  - @twilio-paste/help-text@4.0.1
  - @twilio-paste/inline-control-group@4.0.1
  - @twilio-paste/screen-reader-only@4.0.1
  - @twilio-paste/label@4.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/base-radio-checkbox@4.0.0
  - @twilio-paste/help-text@4.0.0
  - @twilio-paste/inline-control-group@4.0.0
  - @twilio-paste/label@4.0.0
  - @twilio-paste/screen-reader-only@4.0.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/sibling-box@2.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/inline-control-group@3.0.1
  - @twilio-paste/base-radio-checkbox@3.0.1
  - @twilio-paste/label@3.0.1
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/sibling-box@1.2.2
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
  - @twilio-paste/base-radio-checkbox@3.0.0
  - @twilio-paste/help-text@3.0.0
  - @twilio-paste/inline-control-group@3.0.0
  - @twilio-paste/screen-reader-only@3.0.0
  - @twilio-paste/label@3.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.1.0...@twilio-paste/radio-group@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/radio-group

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.0.6...@twilio-paste/radio-group@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.0.5...@twilio-paste/radio-group@2.0.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/radio-group

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.0.4...@twilio-paste/radio-group@2.0.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/radio-group

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.0.3...@twilio-paste/radio-group@2.0.4) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/radio-group

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.0.2...@twilio-paste/radio-group@2.0.3) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/radio-group

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.0.1...@twilio-paste/radio-group@2.0.2) (2021-01-06)

**Note:** Version bump only for package @twilio-paste/radio-group

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@2.0.0...@twilio-paste/radio-group@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/radio-group

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.24...@twilio-paste/radio-group@2.0.0) (2020-12-17)

### Bug Fixes

- **radio-group:** add forwardRef ([d467043](https://github.com/twilio-labs/paste/commit/d4670433a42e4fed4bcc7a6e729fd394b5004dfa))

### BREAKING CHANGES

- **radio-group:** component is now using fowardRef

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.23...@twilio-paste/radio-group@1.1.24) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.22...@twilio-paste/radio-group@1.1.23) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.21...@twilio-paste/radio-group@1.1.22) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.20...@twilio-paste/radio-group@1.1.21) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.19...@twilio-paste/radio-group@1.1.20) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.18...@twilio-paste/radio-group@1.1.19) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.17...@twilio-paste/radio-group@1.1.18) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.16...@twilio-paste/radio-group@1.1.17) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.15...@twilio-paste/radio-group@1.1.16) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.14...@twilio-paste/radio-group@1.1.15) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.13...@twilio-paste/radio-group@1.1.14) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.12...@twilio-paste/radio-group@1.1.13) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.11...@twilio-paste/radio-group@1.1.12) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.10...@twilio-paste/radio-group@1.1.11) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.9...@twilio-paste/radio-group@1.1.10) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.8...@twilio-paste/radio-group@1.1.9) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.7...@twilio-paste/radio-group@1.1.8) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.6...@twilio-paste/radio-group@1.1.7) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.5...@twilio-paste/radio-group@1.1.6) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.4...@twilio-paste/radio-group@1.1.5) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.3...@twilio-paste/radio-group@1.1.4) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.2...@twilio-paste/radio-group@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.1...@twilio-paste/radio-group@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/radio-group

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@1.1.0...@twilio-paste/radio-group@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/radio-group

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/radio-group@0.0.2...@twilio-paste/radio-group@1.1.0) (2020-10-07)

### Features

- **radio-group:** create the package ([6e19dce](https://github.com/twilio-labs/paste/commit/6e19dcebc7d0693bdc99daed772e6923048082e3))
