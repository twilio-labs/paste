# @twilio-paste/skeleton-loader

## 1.0.3

### Patch Changes

- [`91d20b99f`](https://github.com/twilio-labs/paste/commit/91d20b99f5697b91c3e84d3aa778c94938677120) [#2328](https://github.com/twilio-labs/paste/pull/2328) Thanks [@TheSisb](https://github.com/TheSisb)! - [Skeleton-Loader]: Small animation tweak so that the highlight fully moves through the skeleton loader correctly at the end state.

## 1.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 1.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [skeleton-loader]

  - Update animated background color to use `rgba(255, 255, 255, 0.4)`

## 1.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0

## 0.1.3

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.1.2

### Patch Changes

- [`7edfbcfb`](https://github.com/twilio-labs/paste/commit/7edfbcfb54ff9bedcaa1a3439461dd1a96665e07) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Minor performance improvement to the animation code.

## 0.1.1

### Patch Changes

- [`ab55fa27`](https://github.com/twilio-labs/paste/commit/ab55fa270f982ad867a5933dcea8ee240e780fed) [#1814](https://github.com/twilio-labs/paste/pull/1814) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Skeleton-loader] Enable Compoonent to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 0.1.0

### Minor Changes

- [`c7d6fa75`](https://github.com/twilio-labs/paste/commit/c7d6fa7526ac10f98dbf406800513fd7af6c371d) [#1641](https://github.com/twilio-labs/paste/pull/1641) Thanks [@richbachman](https://github.com/richbachman)! - [skeleton-loader] Created skeleton loader component package.
