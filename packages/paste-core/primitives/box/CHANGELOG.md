# Change Log

## 5.1.0

### Minor Changes

- [`cf5878d8`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Text] Prevented styling props from being forwarded to their HTML DOM nodes in the browser for a cleaner DOM inspector view

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
  - @twilio-paste/customization@3.0.0

## 4.2.5

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.2.4

### Patch Changes

- [`9d32315e`](https://github.com/twilio-labs/paste/commit/9d32315e2aee4176fb4b27aac6a131582a0e0bb9) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Added three new pseudo selectors to be used on Box and Text. You can now style selected and hover, selected and focus
  and selected and focus-visible

## 4.2.3

### Patch Changes

- [`26b25e18`](https://github.com/twilio-labs/paste/commit/26b25e18b561b35991016e23851f3b586b2b8508) [#1816](https://github.com/twilio-labs/paste/pull/1816) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box] exports the getCustomElementStyles utility function

## 4.2.2

### Patch Changes

- [`4964821b`](https://github.com/twilio-labs/paste/commit/4964821bd7a2d0fc267b4daf2eef5f1810d8f534) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Box] Added the following style props to support input:

  - PsuedoProps:

    - \_\_webkit_datetime_edit
    - \_\_webkit_calendar_picker_indicator_hover

  - StyleProps:
    - -webkit-text-fill-color
    - -webkit-opacity

## 4.2.1

### Patch Changes

- [`8654c408`](https://github.com/twilio-labs/paste/commit/8654c408faec07eed80b49536c95a214e6606400) [#1785](https://github.com/twilio-labs/paste/pull/1785) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box]: Box now handles the case where a variant being set on the component, does not appear in the elements object set on the Customization Provider

## 4.2.0

### Minor Changes

- [`14c6fd2e`](https://github.com/twilio-labs/paste/commit/14c6fd2e73e33b86fc49b4e6979afa007833ff89) [#1743](https://github.com/twilio-labs/paste/pull/1743) Thanks [@andipants12](https://github.com/andipants12)! - [Box] Add column-gap and row-gap (CSS grid, flex box) to Box API.

## 4.1.1

### Patch Changes

- [`24bdd104`](https://github.com/twilio-labs/paste/commit/24bdd10427d3da5873cf7a21b6341342ccf0ea0a) [#1654](https://github.com/twilio-labs/paste/pull/1654) Thanks [@richbachman](https://github.com/richbachman)! - [Box] Added `focusVisble` to `PseudoPropStyles`.

## 4.1.0

### Minor Changes

- [`7d703959`](https://github.com/twilio-labs/paste/commit/7d703959e6d989c1257942355115b17d3615bc7f) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box] Enable Box to respect element customizations set on the customization provider. Box now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 4.0.7

### Patch Changes

- [`b98b3713`](https://github.com/twilio-labs/paste/commit/b98b371315b09a5697be6f56611e428d0e6e377f) [#1426](https://github.com/twilio-labs/paste/pull/1426) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add the ability to warn consumers that they are using a deprecated Design Token using prop type validation on the Box and Text component

## 4.0.6

### Patch Changes

- [`37f82857`](https://github.com/twilio-labs/paste/commit/37f82857ef5046156931a22e2431aed49629ff63) [#1424](https://github.com/twilio-labs/paste/pull/1424) Thanks [@TheSisb](https://github.com/TheSisb)! - Added the "overflowWrap" prop to Box

## 4.0.5

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 4.0.4

### Patch Changes

- [`8fe6a2f4`](https://github.com/twilio-labs/paste/commit/8fe6a2f45cb3b03643da70ad1b4c8dd1eda426d8) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Box: added `font-variant-numeric` prop so we can control the usage of alternate glyphs for numbers, fractions, and ordinal markers.

## 4.0.3

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 4.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/style-props@3.0.1

## 4.0.1

### Patch Changes

- [`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9) [#1253](https://github.com/twilio-labs/paste/pull/1253) Thanks [@TheSisb](https://github.com/TheSisb)! - Added 'datetime' prop Typescript typing to Box

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/style-props@2.0.0

## 2.13.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.13.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.13.0...@twilio-paste/box@2.13.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/box

# [2.13.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.12.3...@twilio-paste/box@2.13.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.12.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.12.2...@twilio-paste/box@2.12.3) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/box

## [2.12.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.12.1...@twilio-paste/box@2.12.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/box

## [2.12.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.12.0...@twilio-paste/box@2.12.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/box

# [2.12.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.13...@twilio-paste/box@2.12.0) (2020-12-15)

### Features

- **box:** remove propType checking ([e780672](https://github.com/twilio-labs/paste/commit/e7806727947732728dfeb86b1b953c76e2f5c766))

## [2.11.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.12...@twilio-paste/box@2.11.13) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.11...@twilio-paste/box@2.11.12) (2020-12-11)

### Bug Fixes

- **box:** accomodate the lack of color key on theme ([8c861a5](https://github.com/twilio-labs/paste/commit/8c861a5b1d32593eeeffcc62c85f65cea57daf5c))

## [2.11.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.10...@twilio-paste/box@2.11.11) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.9...@twilio-paste/box@2.11.10) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.8...@twilio-paste/box@2.11.9) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.7...@twilio-paste/box@2.11.8) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.6...@twilio-paste/box@2.11.7) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.5...@twilio-paste/box@2.11.6) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.4...@twilio-paste/box@2.11.5) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.3...@twilio-paste/box@2.11.4) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.2...@twilio-paste/box@2.11.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.1...@twilio-paste/box@2.11.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/box

## [2.11.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.11.0...@twilio-paste/box@2.11.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/box

# [2.11.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.10.6...@twilio-paste/box@2.11.0) (2020-10-07)

### Features

- **box:** allow some select related props in the interface ([60876f8](https://github.com/twilio-labs/paste/commit/60876f8ba398a6bc682344b4880b76bd1b6f2814))

## [2.10.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.10.5...@twilio-paste/box@2.10.6) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/box

## [2.10.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.10.4...@twilio-paste/box@2.10.5) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/box

## [2.10.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.10.3...@twilio-paste/box@2.10.4) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/box

## [2.10.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.10.2...@twilio-paste/box@2.10.3) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/box

## [2.10.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.10.1...@twilio-paste/box@2.10.2) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/box

## [2.10.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.10.0...@twilio-paste/box@2.10.1) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/box

# [2.10.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.9.6...@twilio-paste/box@2.10.0) (2020-09-03)

### Features

- **box:** add support for word-break prop ([136893e](https://github.com/twilio-labs/paste/commit/136893ef0a79c2f2228ed323b22b0f2d2980e149))

## [2.9.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.9.5...@twilio-paste/box@2.9.6) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/box

## [2.9.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.9.4...@twilio-paste/box@2.9.5) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/box

## [2.9.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.9.3...@twilio-paste/box@2.9.4) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/box

## [2.9.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.9.2...@twilio-paste/box@2.9.3) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/box

## [2.9.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.9.1...@twilio-paste/box@2.9.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/box

## [2.9.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.9.0...@twilio-paste/box@2.9.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/box

# [2.9.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.8.3...@twilio-paste/box@2.9.0) (2020-08-06)

### Features

- **box:** added two style props and refactored typings ([06541c8](https://github.com/twilio-labs/paste/commit/06541c8f1e764661a664e8b6147d0530eafa6bce))

## [2.8.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.8.2...@twilio-paste/box@2.8.3) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/box

## [2.8.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.8.1...@twilio-paste/box@2.8.2) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/box

## [2.8.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.8.0...@twilio-paste/box@2.8.1) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/box

# [2.8.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.7.0...@twilio-paste/box@2.8.0) (2020-07-30)

### Bug Fixes

- **box:** add link attribute typings and backgroundAttachment ([bc33774](https://github.com/twilio-labs/paste/commit/bc33774ab49156083dcdad1ea021fbb73468fac2))

### Features

- **box:** accept typography style props and space X/Y props ([882dd4d](https://github.com/twilio-labs/paste/commit/882dd4d6516e6732e8155096c666912a4c1a49cc))

# [2.7.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.6.5...@twilio-paste/box@2.7.0) (2020-07-29)

### Features

- **radio:** allow disabling individual radios ([#599](https://github.com/twilio-labs/paste/issues/599)) ([4c5b21b](https://github.com/twilio-labs/paste/commit/4c5b21b332eb74d7de181d64ea6a92b2c94d5235))

## [2.6.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.6.4...@twilio-paste/box@2.6.5) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/box

## [2.6.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.6.3...@twilio-paste/box@2.6.4) (2020-07-15)

### Bug Fixes

- **box:** allow alt and src props on box ([0acbaff](https://github.com/twilio-labs/paste/commit/0acbaff49c645c65699e827f479b711f0de7f594))

## [2.6.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.6.2...@twilio-paste/box@2.6.3) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/box

## [2.6.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.6.1...@twilio-paste/box@2.6.2) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/box

## [2.6.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.6.0...@twilio-paste/box@2.6.1) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/box

# [2.6.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.5.5...@twilio-paste/box@2.6.0) (2020-06-29)

### Features

- **box:** accept textTransform css prop ([5cb9c8f](https://github.com/twilio-labs/paste/commit/5cb9c8f8db3ec9f5b4ec6b9406db2173caa9ba0f))

## [2.5.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.5.4...@twilio-paste/box@2.5.5) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/box

## [2.5.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.5.3...@twilio-paste/box@2.5.4) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/box

## [2.5.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.5.2...@twilio-paste/box@2.5.3) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/box

## [2.5.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.5.1...@twilio-paste/box@2.5.2) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/box

## [2.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.5.0...@twilio-paste/box@2.5.1) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/box

# [2.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.9...@twilio-paste/box@2.5.0) (2020-06-10)

### Features

- **box:** enable css 'textOverflow' prop, for ellipsis ([af0abd6](https://github.com/twilio-labs/paste/commit/af0abd6428cc0c8f80f829500c59b635a2cac9fa))

## [2.4.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.8...@twilio-paste/box@2.4.9) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/box

## [2.4.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.7...@twilio-paste/box@2.4.8) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/box

## [2.4.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.6...@twilio-paste/box@2.4.7) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/box

## [2.4.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.5...@twilio-paste/box@2.4.6) (2020-05-27)

### Bug Fixes

- **box:** allow text-decoration style prop ([50aac91](https://github.com/twilio-labs/paste/commit/50aac91fc5c50a12f9a3043fb47ca76530a21e37))

## [2.4.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.4...@twilio-paste/box@2.4.5) (2020-05-20)

### Bug Fixes

- **box:** allow ref on the interface of a box ([5853b39](https://github.com/twilio-labs/paste/commit/5853b396cc83aa4008e3a1abcbce9df59b06a8d0))

## [2.4.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.3...@twilio-paste/box@2.4.4) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/box

## [2.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.2...@twilio-paste/box@2.4.3) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/box

## [2.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.1...@twilio-paste/box@2.4.2) (2020-05-04)

### Bug Fixes

- **box:** switch to new spacing prop validators ([045625e](https://github.com/twilio-labs/paste/commit/045625e664a9558420f5a8832de0d785422c48d2))

## [2.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.4.0...@twilio-paste/box@2.4.1) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/box

# [2.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.3.1...@twilio-paste/box@2.4.0) (2020-04-25)

### Features

- **box:** export interface prevent undefined pseudo selectors ([7e6363e](https://github.com/twilio-labs/paste/commit/7e6363ef93d9f58b2461a78fd4120dfd7020dc1a))

## [2.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.3.0...@twilio-paste/box@2.3.1) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/box

# [2.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.10...@twilio-paste/box@2.3.0) (2020-04-17)

### Features

- **components:** promote text components, spinner and primitive to prod ([5605adc](https://github.com/twilio-labs/paste/commit/5605adc99021be20dafd3fedfeb745490a50c7e7))

## [2.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.9...@twilio-paste/box@2.2.10) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/box

## [2.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.8...@twilio-paste/box@2.2.9) (2020-04-08)

### Bug Fixes

- **box:** package dependencies updated to be correct ([87f302a](https://github.com/twilio-labs/paste/commit/87f302ad26d33361e4daf54b4d6f0c1480b23138))

## [2.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.7...@twilio-paste/box@2.2.8) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/box

## [2.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.6...@twilio-paste/box@2.2.7) (2020-04-07)

### Bug Fixes

- **box:** add missing invalid, indeterminate, checked pseudo selectors ([a2d1f28](https://github.com/twilio-labs/paste/commit/a2d1f2887ae66a687195c914256949a3180a17d9))

## [2.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.5...@twilio-paste/box@2.2.6) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/box

## [2.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.4...@twilio-paste/box@2.2.5) (2020-03-28)

### Bug Fixes

- **box:** remove min-width:0 as a default ([7b8e55b](https://github.com/twilio-labs/paste/commit/7b8e55b5a47eb7a5cb052acac8450a980cb92a55))

## [2.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.3...@twilio-paste/box@2.2.4) (2020-03-24)

### Bug Fixes

- **box:** switch from theme-tokens to theme package dep ([071e77a](https://github.com/twilio-labs/paste/commit/071e77affd04ee1b26a4dd26e4fc6179dd71ff93))

## [2.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.2...@twilio-paste/box@2.2.3) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/box

## [2.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.1...@twilio-paste/box@2.2.2) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/box

## [2.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.2.0...@twilio-paste/box@2.2.1) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/box

# [2.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.12...@twilio-paste/box@2.2.0) (2020-03-06)

### Bug Fixes

- add missing transitive peerDep on '@styled-system/css' ([fdbb813](https://github.com/twilio-labs/paste/commit/fdbb81370cda71037348742a680299ce481eabfd))

### Features

- **box:** add pseudo-class props and missing props ([9463ddd](https://github.com/twilio-labs/paste/commit/9463ddd81a4a6ca2546940e70ca44a76baca074e))

## [2.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.11...@twilio-paste/box@2.1.12) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.10...@twilio-paste/box@2.1.11) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.9...@twilio-paste/box@2.1.10) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [2.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.8...@twilio-paste/box@2.1.9) (2020-02-14)

### Bug Fixes

- **box:** add missing peer deps ([2281923](https://github.com/twilio-labs/paste/commit/2281923bd7ab169a99cefb2dd2a9d995d8751a02))

## [2.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.7...@twilio-paste/box@2.1.8) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.6...@twilio-paste/box@2.1.7) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.5...@twilio-paste/box@2.1.6) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.4...@twilio-paste/box@2.1.5) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.3...@twilio-paste/box@2.1.4) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.2...@twilio-paste/box@2.1.3) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.1...@twilio-paste/box@2.1.2) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/box

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.0...@twilio-paste/box@2.1.1) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/box

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.4...@twilio-paste/box@2.1.0) (2019-12-19)

### Features

- **box:** use style-props package, create method to safelySpreadProps ([dc9f7fb](https://github.com/twilio-labs/paste/commit/dc9f7fbc89d7ccfc382dc74185e8a699c658d55e))

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.3...@twilio-paste/box@2.0.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/box

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.2...@twilio-paste/box@2.0.3) (2019-11-20)

**Note:** Version bump only for package @twilio-paste/box

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.1...@twilio-paste/box@2.0.2) (2019-11-18)

### Bug Fixes

- **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))
- **website:** remove vague anchor do dont ([#177](https://github.com/twilio-labs/paste/issues/177)) ([8530c56](https://github.com/twilio-labs/paste/commit/8530c5679b48da46ddc82a9a7154bca78cacc30a))

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.0...@twilio-paste/box@2.0.1) (2019-11-12)

### Bug Fixes

- prettier updated, updating formatting ([8644831](https://github.com/twilio-labs/paste/commit/86448312b017f13720735525e516f086704b1813))

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@1.1.0...@twilio-paste/box@2.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- enable theme switching on the docsite ([#124](https://github.com/twilio-labs/paste/issues/124)) ([df797e5](https://github.com/twilio-labs/paste/commit/df797e57ff1268367053d717f3b3c2ca48a0aa4f))

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

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@1.0.0...@twilio-paste/box@1.1.0) (2019-10-31)

### Features

- update types package to styled-system v5 format ([#154](https://github.com/twilio-labs/paste/issues/154)) ([117c41e](https://github.com/twilio-labs/paste/commit/117c41e463b11440582e740c28cc067c06d16e67))

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@0.3.1...@twilio-paste/box@1.0.0) (2019-10-29)

### Features

- **box:** polish and fix ([#125](https://github.com/twilio-labs/paste/issues/125)) ([d151bad](https://github.com/twilio-labs/paste/commit/d151badadfa4db8ade1425df9336e0155ce09619))
- finalise the Text component ([#151](https://github.com/twilio-labs/paste/issues/151)) ([b51c272](https://github.com/twilio-labs/paste/commit/b51c272cf420380f73c31c3474ebdf23cb7cad3a))
- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

### BREAKING CHANGES

- **box:** many Box API changes

- fix(theme-tokens): add sizes key for styled-system responsiveness

- fix(absolute): update to newer Box

- fix(types): allow for responsive values via array

- fix(box): update story and light tweaks to OverflowProps

- chore: update yarn.lock file

- fix(types): many more types fixes

refactor: moved ValueOf into types package

- fix(box): eslint error in story

- fix(box): using the correct BorderProps definition

fix: we shouldn't allow users to pass the `border` shorthand, it circumvents tokens

- fix: lint errors

- fix(website): update box docs

- fix(storybook): use theme breakpoints

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@0.3.0...@twilio-paste/box@0.3.1) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/box

# 0.3.0 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))

### Features

- ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
- **website:** Add the tokens page ([#19](https://github.com/twilio-labs/paste/issues/19)) ([878d3c5](https://github.com/twilio-labs/paste/commit/878d3c5))
