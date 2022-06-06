# Change Log

## 1.0.1

### Patch Changes

- [`12a5e83ed`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - [Styling] Downgrade `emotion` libraries by one minor version to resolve a bug in the newest version. [#2429](https://github.com/twilio-labs/paste/issues/2429)

## 1.0.0

### Major Changes

- [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Styling Library] Upgrade to Emotion v11

  - replace `@emotion/core` with `@emotion/react`
  - bump `@emotion/styled` to v11
  - remove `emotion`, remove `emotion-themeing`
  - both packages now included with `@emotion/react`

## 0.3.9

### Patch Changes

- [`dee7d9b01`](https://github.com/twilio-labs/paste/commit/dee7d9b01c0b7b2fee64f7a01cadd1238521ab8f) [#2233](https://github.com/twilio-labs/paste/pull/2233) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Color contrast utils, Tabs, Popover, Styling-library, Types] very minor code linting

## 0.3.8

### Patch Changes

- [`cf5878d8`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Styling library] two new exports from styled system, `props` and `createShouldForwardProp`.

## 0.3.7

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 0.3.6

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 0.3.5

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.3.4

### Patch Changes

- [`4dcc7b31`](https://github.com/twilio-labs/paste/commit/4dcc7b310830dd77481d7b4546aa5618b0de4f11) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Styling-library] Export StyledComponent and CSSObject types from emotion and styled system respectively

## 0.3.3

### Patch Changes

- [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3) [#1509](https://github.com/twilio-labs/paste/pull/1509) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [styling-library]: export some types from styled-system to help with custom styling tasks

## 0.3.2

### Patch Changes

- [`df6d8f1d`](https://github.com/twilio-labs/paste/commit/df6d8f1dcff6a17c96976b7b54a5702ec3d09f76) [#1408](https://github.com/twilio-labs/paste/pull/1408) Thanks [@richbachman](https://github.com/richbachman)! - Added `-webkit-text-fill-color` and enable it to use Paste textColor token values.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.3.0...@twilio-paste/styling-library@0.3.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/styling-library

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.2.2...@twilio-paste/styling-library@0.3.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.2.1...@twilio-paste/styling-library@0.2.2) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/styling-library

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.2.0...@twilio-paste/styling-library@0.2.1) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/styling-library

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.1.4...@twilio-paste/styling-library@0.2.0) (2020-12-11)

### Features

- **styling-library:** replace styled-system css function ([9f7f12f](https://github.com/twilio-labs/paste/commit/9f7f12fdce77bae2c9a08760b2e681de1b3c4192))

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.1.3...@twilio-paste/styling-library@0.1.4) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/styling-library

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.1.2...@twilio-paste/styling-library@0.1.3) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/styling-library

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.1.1...@twilio-paste/styling-library@0.1.2) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/styling-library

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/styling-library@0.1.0...@twilio-paste/styling-library@0.1.1) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/styling-library

# 0.1.0 (2020-06-18)

### Features

- **styling-library:** add new styling-library package ([f6977ae](https://github.com/twilio-labs/paste/commit/f6977ae60d337b3406074f707f62c952a53c38e9))
