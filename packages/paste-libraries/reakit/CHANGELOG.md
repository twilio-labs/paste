# Change Log

## 3.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 3.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

## 2.1.1

### Patch Changes

- [`9ab72f5b6`](https://github.com/twilio-labs/paste/commit/9ab72f5b6f84b3c7100c5dee51b6c6d9a80fbc6c) [#3829](https://github.com/twilio-labs/paste/pull/3829) Thanks [@TheSisb](https://github.com/TheSisb)! - [Reakit Library] fix `PopoverArrow` rendering on theme toggles

## 2.1.0

### Minor Changes

- [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Reakit library] export menu state return and menu initial state

## 2.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

## 1.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

## 0.8.7

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 0.8.6

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

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
