# @twilio-paste/alert-dialog

## 2.0.0

### Patch Changes

- Updated dependencies [[`cf5878d82`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914)]:
  - @twilio-paste/modal@9.0.0

## 1.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 1.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 1.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/heading@6.0.0
  - @twilio-paste/modal@8.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0

## 0.2.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.2.0

### Minor Changes

- [`4d87a7c9`](https://github.com/twilio-labs/paste/commit/4d87a7c9a9a1349db51824fb0a827ec5eaa2cf18) [#1919](https://github.com/twilio-labs/paste/pull/1919) Thanks [@nkrantz](https://github.com/nkrantz)! - [AlertDialog] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 0.1.2

### Patch Changes

- [`b6c1d692`](https://github.com/twilio-labs/paste/commit/b6c1d69277fecc660ce3281d82d37472a9015bff) [#1684](https://github.com/twilio-labs/paste/pull/1684) Thanks [@richbachman](https://github.com/richbachman)! - [AlertDialog]: added missing `@twilio-paste/uid-library` dependency.

## 0.1.1

### Patch Changes

- [`fa48e8dd`](https://github.com/twilio-labs/paste/commit/fa48e8ddf03325d0effb4b1a0201dbf5fd207e71) [#1489](https://github.com/twilio-labs/paste/pull/1489) Thanks [@richbachman](https://github.com/richbachman)! - Added missing dependencies.

## 0.1.0

### Minor Changes

- [`d27dc745`](https://github.com/twilio-labs/paste/commit/d27dc7455c221daefb8ee8cf9b209ebb16833e4e) [#1484](https://github.com/twilio-labs/paste/pull/1484) Thanks [@gloriliale](https://github.com/gloriliale)! - Created an alert dialog component
