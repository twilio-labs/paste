# @twilio-paste/color-contrast-utils

## 4.0.0

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df)]:
  - @twilio-paste/design-tokens@9.0.0

## 3.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 3.0.0

### Patch Changes

- Updated dependencies [[`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/design-tokens@8.0.0

## 2.0.5

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 2.0.4

### Patch Changes

- [`9983b52e9`](https://github.com/twilio-labs/paste/commit/9983b52e92d15373824e4b3cc10572b2f51d58f8) [#2419](https://github.com/twilio-labs/paste/pull/2419) Thanks [@gloriliale](https://github.com/gloriliale)! - [Combobox, Data grid, Color contrast utils, Customization, Design tokens, Icons, Style props, Token contrast checker, Types, Utils, Website] Consolidate and update lodash dependencies and the way lodash is imported in our files, per lodash's guidance. Details: https://lodash.com/per-method-packages

## 2.0.3

### Patch Changes

- [`dee7d9b01`](https://github.com/twilio-labs/paste/commit/dee7d9b01c0b7b2fee64f7a01cadd1238521ab8f) [#2233](https://github.com/twilio-labs/paste/pull/2233) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Color contrast utils, Tabs, Popover, Styling-library, Types] very minor code linting

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
