# Change Log

## 3.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

## 2.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

## 1.1.7

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 1.1.6

### Patch Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Dropdown Library] Upgrade downshiftjs from version 6.0.6 to 6.1.7

## 1.1.5

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 1.1.4

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 1.1.3

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 1.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@1.1.0...@twilio-paste/dropdown-library@1.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/dropdown-library

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@1.0.5...@twilio-paste/dropdown-library@1.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@1.0.4...@twilio-paste/dropdown-library@1.0.5) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/dropdown-library

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@1.0.3...@twilio-paste/dropdown-library@1.0.4) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/dropdown-library

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@1.0.2...@twilio-paste/dropdown-library@1.0.3) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/dropdown-library

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@1.0.1...@twilio-paste/dropdown-library@1.0.2) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/dropdown-library

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@1.0.0...@twilio-paste/dropdown-library@1.0.1) (2020-10-07)

### Bug Fixes

- **dropdown-library:** bump downshift to latest ([32e1d27](https://github.com/twilio-labs/paste/commit/32e1d27c1e45cd1becea1c3075de5353e43bc123))

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@0.1.2...@twilio-paste/dropdown-library@1.0.0) (2020-09-03)

### chore

- **dropdown-library:** upgrade downshift to v6 ([#716](https://github.com/twilio-labs/paste/issues/716)) ([ee7d839](https://github.com/twilio-labs/paste/commit/ee7d839746160f1612931a3d35f22dab357b58b2))

### BREAKING CHANGES

- **dropdown-library:** The upgrade to downshift has introduced some breaking changes to the typings of certain properties
  but none to the API itself.

Please follow the release notes from downshift for more information: https://github.com/downshift-js/downshift/releases/tag/v6.0.0

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@0.1.1...@twilio-paste/dropdown-library@0.1.2) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/dropdown-library

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/dropdown-library@0.1.0...@twilio-paste/dropdown-library@0.1.1) (2020-05-22)

### Bug Fixes

- **dropdown-library:** export all from downshift ([042f858](https://github.com/twilio-labs/paste/commit/042f8582f0ced1d290fa8e5c4e1d0b177feb20ee))

# 0.1.0 (2020-05-13)

### Features

- **dropdown-library:** add dropdown-library package ([e05be37](https://github.com/twilio-labs/paste/commit/e05be37ee6bd4758fb07cd7195c564cecfd40bb5))
