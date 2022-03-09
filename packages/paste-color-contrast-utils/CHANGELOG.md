# @twilio-paste/color-contrast-utils

## 2.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 2.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [color-contrast-utils] Enable color contrast tests for Dark theme

## 2.0.0

### Minor Changes

- [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc) [#2093](https://github.com/twilio-labs/paste/pull/2093) Thanks [@TheSisb](https://github.com/TheSisb)! - [Color contrast utils] Add a data_visualization_contrast_pairing checker and some tests.

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0

## 1.2.0

### Minor Changes

- [`1031500c`](https://github.com/twilio-labs/paste/commit/1031500ce6e66acd0d10886386221ea863d0e784) [#2107](https://github.com/twilio-labs/paste/pull/2107) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fix default imports for JSON to play nice with webpack 5

## 1.1.0

### Minor Changes

- [`7a78987a`](https://github.com/twilio-labs/paste/commit/7a78987ac3c3fe9bc00f5f944733b04af2b192d2) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [color-contrast-utils] Provides utilities that can be used to detect the color contrast rating of a given theme of design tokens. The package now export four methods; `getContrastRatingsOfTokensWithTextContrastRequirements`, `getContrastRatingsOfTokensWithUIControlContrastRequirements`, `getNumberOfTextFailures` and `getNumberOfUIControlFailures`
