# Change Log

## 1.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

## 0.3.9

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 0.3.8

### Patch Changes

- [`99bb7a146`](https://github.com/twilio-labs/paste/commit/99bb7a146bdd75c1b90f90769e74f162128b698e) [#2664](https://github.com/twilio-labs/paste/pull/2664) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Animation Library]: remove unecessary check for VRT tool we no longer use

## 0.3.7

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 0.3.6

### Patch Changes

- [`322400c6`](https://github.com/twilio-labs/paste/commit/322400c659678e71afe9e6fc2db543ec7e3046ba) [#2282](https://github.com/twilio-labs/paste/pull/2282) Thanks [@zahnster](https://github.com/zahnster)! - [Animation Library] Updates React Spring dependencies to resolve bug with RequestAnimationFrame calls

## 0.3.5

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 0.3.4

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 0.3.3

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.3.2

### Patch Changes

- [`456e7210`](https://github.com/twilio-labs/paste/commit/456e72109c31677adad53383084cd052f22b1e52) [#1464](https://github.com/twilio-labs/paste/pull/1464) Thanks [@richbachman](https://github.com/richbachman)! - Bumped the version of React-Spring to 9.1.2 in order to fix a TS issue.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.3.0...@twilio-paste/animation-library@0.3.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/animation-library

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.2.6...@twilio-paste/animation-library@0.3.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.2.5...@twilio-paste/animation-library@0.2.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/animation-library

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.2.4...@twilio-paste/animation-library@0.2.5) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/animation-library

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.2.3...@twilio-paste/animation-library@0.2.4) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/animation-library

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.2.2...@twilio-paste/animation-library@0.2.3) (2020-10-15)

### Bug Fixes

- **animation-library:** make sure babel is run correctly ([#845](https://github.com/twilio-labs/paste/issues/845)) ([348aa0d](https://github.com/twilio-labs/paste/commit/348aa0d6f9b425b029cd7b4eb8514048046733c3))

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.2.1...@twilio-paste/animation-library@0.2.2) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/animation-library

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.2.0...@twilio-paste/animation-library@0.2.1) (2020-06-22)

### Bug Fixes

- **animation-library:** add window.matchMedia guard ([#511](https://github.com/twilio-labs/paste/issues/511)) ([4bf8dcf](https://github.com/twilio-labs/paste/commit/4bf8dcf7800a0c5f354e0ac4909dad3abb3d0733))

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.1.1...@twilio-paste/animation-library@0.2.0) (2020-06-01)

### Features

- **animation-library:** use v9 and add useReducedMotion hook ([70af843](https://github.com/twilio-labs/paste/commit/70af843a228b6f358fa40b8fd1ee9f009a084e64))

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/animation-library@0.1.0...@twilio-paste/animation-library@0.1.1) (2020-05-19)

### Bug Fixes

- **animation-library:** several tweaks, making package public ([0c6c17d](https://github.com/twilio-labs/paste/commit/0c6c17d64b2af86ed199401e338b7d0475c19af1))

# 0.1.0 (2020-05-19)

### Bug Fixes

- **animation-library:** incorrect tsconfig path ([0d43b14](https://github.com/twilio-labs/paste/commit/0d43b14caf2e4c1f32b71114c4e2500d7eab7f60))

### Features

- add paste animation library ([3ec5fb7](https://github.com/twilio-labs/paste/commit/3ec5fb799452fc213ca11cb9b23dd7810f97868b))
