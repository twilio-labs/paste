# @twilio-paste/data-grid

## 1.1.0

### Minor Changes

- [`b1359c95e`](https://github.com/twilio-labs/paste/commit/b1359c95ebbd0ec12eca3d72cfbcac72c06f6b85) [#2307](https://github.com/twilio-labs/paste/pull/2307) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Data grid]: inherit more things from the base table component, including the new responsive and no line wrapping behaviours for better table rendering options.

## 1.0.2

### Patch Changes

- [`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Data Grid] add i18n props to support i18n

* [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 1.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 1.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/table@3.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/customization@3.0.0

## 0.2.1

### Patch Changes

- [`0f0a9bdd1`](https://github.com/twilio-labs/paste/commit/0f0a9bdd1392db27377c3c1e2f9881ac5afc85b8) [#2075](https://github.com/twilio-labs/paste/pull/2075) Thanks [@TheSisb](https://github.com/TheSisb)! - [Data-grid] Fixes issue where inner links would at times not be clickable.

## 0.2.0

### Minor Changes

- [`ad741d15a`](https://github.com/twilio-labs/paste/commit/ad741d15a313c59ed8922d7515ecb1109b07e60a) [#2025](https://github.com/twilio-labs/paste/pull/2025) Thanks [@nkrantz](https://github.com/nkrantz)! - [Data-Grid] Add `textAlign` prop to `DataGridCell` for aligning cells and columns to the right.

## 0.1.1

### Patch Changes

- [`8f83a25d`](https://github.com/twilio-labs/paste/commit/8f83a25dec843518721597721606e80e37dbde97) [#1990](https://github.com/twilio-labs/paste/pull/1990) Thanks [@TheSisb](https://github.com/TheSisb)! - [Data Grid] Fixed broken 'striped' prop so it correctly toggles zebra striping on rows.

* [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

- [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.1.0

### Minor Changes

- [`9adf3edd`](https://github.com/twilio-labs/paste/commit/9adf3edd88598aa3e8de3f6dd027371a2e54d368) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Adding "@twilio-paste/data-grid", an accessible and responsive data grid component to Paste.
