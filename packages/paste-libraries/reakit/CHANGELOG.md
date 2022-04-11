# Change Log

## 0.8.5

### Patch Changes

- [`ff7454a0`](https://github.com/twilio-labs/paste/commit/ff7454a0d7355654c42dbe39e2eca29c6ea6d8cb) [#2348](https://github.com/twilio-labs/paste/pull/2348) Thanks [@TheSisb](https://github.com/TheSisb)! - [reakit-library] update Reakit dependency to fix typings in TS 4.4.x

## 0.8.4

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 0.8.3

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 0.8.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.8.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.8.0...@twilio-paste/reakit-library@0.8.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/reakit-library

# [0.8.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.7.6...@twilio-paste/reakit-library@0.8.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.7.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.7.5...@twilio-paste/reakit-library@0.7.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/reakit-library

## [0.7.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.7.4...@twilio-paste/reakit-library@0.7.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/reakit-library

## [0.7.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.7.3...@twilio-paste/reakit-library@0.7.4) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/reakit-library

## [0.7.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.7.2...@twilio-paste/reakit-library@0.7.3) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/reakit-library

## [0.7.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.7.1...@twilio-paste/reakit-library@0.7.2) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/reakit-library

## [0.7.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.7.0...@twilio-paste/reakit-library@0.7.1) (2020-09-15)

### Bug Fixes

- **reakit-library:** fix fill and stroke for tooltip and popover arrow ([80bee28](https://github.com/twilio-labs/paste/commit/80bee280a0eb137677963f97191ac683ed073648))

# [0.7.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.6.2...@twilio-paste/reakit-library@0.7.0) (2020-09-03)

### Features

- **reakit-library:** add composite to exports ([4de8e1d](https://github.com/twilio-labs/paste/commit/4de8e1d781c9bdbe8a8fe2020f63212360f48005))

## [0.6.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.6.1...@twilio-paste/reakit-library@0.6.2) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/reakit-library

## [0.6.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.6.0...@twilio-paste/reakit-library@0.6.1) (2020-07-01)

### Bug Fixes

- **reakit-library:** export some additional types for disclosure ([244510a](https://github.com/twilio-labs/paste/commit/244510a167eea30534e22046bbe67988347d8982))

# [0.6.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.5.0...@twilio-paste/reakit-library@0.6.0) (2020-06-25)

### Features

- **reakit-library:** export tooltip components and props ([ea4e09d](https://github.com/twilio-labs/paste/commit/ea4e09db7db69dc77a0e4f2f7408b92f002e9dd8))

# [0.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.4.1...@twilio-paste/reakit-library@0.5.0) (2020-06-16)

### Features

- **reakit-library:** use custom arrow and arrow props ([87e0a88](https://github.com/twilio-labs/paste/commit/87e0a886f12d99f2f90a0dd58fa4d6e2f33ab9a9))

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.4.0...@twilio-paste/reakit-library@0.4.1) (2020-06-10)

### Bug Fixes

- **reakit-library:** export typings for disclosure and tabs ([1b56e55](https://github.com/twilio-labs/paste/commit/1b56e55d03f370303abdc7e516df4b896face7bd))
- **reakit-library:** pinning reakit version to 1.0.4 ([ea3b8cb](https://github.com/twilio-labs/paste/commit/ea3b8cbc541461f70b635e82177626e13ec59197))

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.3.0...@twilio-paste/reakit-library@0.4.0) (2020-06-09)

### Features

- **reakit-library:** export popover ([12f15d5](https://github.com/twilio-labs/paste/commit/12f15d5560a9a742e2bc0a0c8c5612b120663c56))

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.2.0...@twilio-paste/reakit-library@0.3.0) (2020-06-01)

### Features

- **reakit-library:** expose Tab exports ([ce3ff12](https://github.com/twilio-labs/paste/commit/ce3ff1225495f008165cc067535cfbbe4afb8f21))

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/reakit-library@0.1.0...@twilio-paste/reakit-library@0.2.0) (2020-05-20)

### Features

- **reakit-library:** add menu components ([fa7de2d](https://github.com/twilio-labs/paste/commit/fa7de2d308f92260a5114813ca198e92d4435421))

# 0.1.0 (2020-05-20)

### Features

- add reakit library wrapper ([49da49a](https://github.com/twilio-labs/paste/commit/49da49a72bdd21c1bd70c5dc3f849f2b85bb7f2c))
