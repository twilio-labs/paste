# Change Log

## 4.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 4.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

## 3.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

## 2.0.2

### Patch Changes

- [`b27913706`](https://github.com/twilio-labs/paste/commit/b2791370651de378a819f77e8980a97ebad8b3ba) [#3200](https://github.com/twilio-labs/paste/pull/3200) Thanks [@TheSisb](https://github.com/TheSisb)! - [Styling-library] expand the types allowed for emotion's CacheProvider. This change allows passing `container` which helps with setting styles on specific elements and shadow dom.

## 2.0.1

### Patch Changes

- [`c42ad640b`](https://github.com/twilio-labs/paste/commit/c42ad640b6e4af057a7f0ff982b6f7533d028493) [#3130](https://github.com/twilio-labs/paste/pull/3130) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Enable the ability to theme the [color-scheme css property](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) which can be used to control native HTML elements and the way they render in light or dark mode

## 2.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

## 1.1.0

### Minor Changes

- [`4ae8972b4`](https://github.com/twilio-labs/paste/commit/4ae8972b47334173123c720d2354d0d8573257a5) [#2971](https://github.com/twilio-labs/paste/pull/2971) Thanks [@TheSisb](https://github.com/TheSisb)! - [Styling-library] Expose EmotionCacheProvider to pass in a key or nonce to help with Emotion + CSP

## 1.0.3

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 1.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

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
