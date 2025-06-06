# Change Log

## 3.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 3.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/reakit-library@3.0.0

## 2.0.2

### Patch Changes

- [`e238ce11a`](https://github.com/twilio-labs/paste/commit/e238ce11a6610fb793cefb977c024086865e2037) [#3618](https://github.com/twilio-labs/paste/pull/3618) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Non-modal dialog primitive] Updated dev depenedencies to include typescript and tsx for running build scripts

## 2.0.1

### Patch Changes

- [`f1121febc`](https://github.com/twilio-labs/paste/commit/f1121febcc818f964ef74e2a36aeb667d7f74ab7) [#3514](https://github.com/twilio-labs/paste/pull/3514) Thanks [@TheSisb](https://github.com/TheSisb)! - [Non-modal Dialog Primitive] Fix to always use a portal when rendering, even when using the state hook.

## 2.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/reakit-library@2.0.0

## 1.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

### Patch Changes

- Updated dependencies [[`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a)]:
  - @twilio-paste/reakit-library@1.0.0

## 0.3.11

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 0.3.10

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 0.3.9

### Patch Changes

- [`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - Made a slight improvement to the TypeScript typings of several packages for better interoperability.

## 0.3.8

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 0.3.7

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 0.3.6

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.3.5

### Patch Changes

- [`355a5509`](https://github.com/twilio-labs/paste/commit/355a550910830912bda407906db19339a5054512) [#1606](https://github.com/twilio-labs/paste/pull/1606) Thanks [@richbachman](https://github.com/richbachman)! - [NonModalDialogPrimitive] exported `PopoverStateReturn` as `NonModalDialogPrimitiveStateReturn`.

## 0.3.4

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 0.3.3

### Patch Changes

- [`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592) [#1228](https://github.com/twilio-labs/paste/pull/1228) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Bump status of the component to production

## 0.3.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.3.0...@twilio-paste/non-modal-dialog-primitive@0.3.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.11...@twilio-paste/non-modal-dialog-primitive@0.3.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.10...@twilio-paste/non-modal-dialog-primitive@0.2.11) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.9...@twilio-paste/non-modal-dialog-primitive@0.2.10) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.8...@twilio-paste/non-modal-dialog-primitive@0.2.9) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.7...@twilio-paste/non-modal-dialog-primitive@0.2.8) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.6...@twilio-paste/non-modal-dialog-primitive@0.2.7) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.5...@twilio-paste/non-modal-dialog-primitive@0.2.6) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.4...@twilio-paste/non-modal-dialog-primitive@0.2.5) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.3...@twilio-paste/non-modal-dialog-primitive@0.2.4) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.2...@twilio-paste/non-modal-dialog-primitive@0.2.3) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.1...@twilio-paste/non-modal-dialog-primitive@0.2.2) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.2.0...@twilio-paste/non-modal-dialog-primitive@0.2.1) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.1.1...@twilio-paste/non-modal-dialog-primitive@0.2.0) (2020-06-16)

### Features

- **non-modal-dialog-primitive:** export custom arrow and props ([bd62148](https://github.com/twilio-labs/paste/commit/bd62148c50c9b43a6f803bb65a485d95c08ead33))

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/non-modal-dialog-primitive@0.1.0...@twilio-paste/non-modal-dialog-primitive@0.1.1) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/non-modal-dialog-primitive

# 0.1.0 (2020-06-09)

### Features

- **non-modal-dialog-primitive:** add non-modal primitive package ([3252a57](https://github.com/twilio-labs/paste/commit/3252a5774e8c5a0696ec92341715f20c54d3b34c))
