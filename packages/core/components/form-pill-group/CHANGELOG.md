# @twilio-paste/form-pill-group

## 2.0.3

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button, FormPillGroup, Menu, Pagination, Select] inherit fontFamily for i18n

## 2.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 2.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`c0de1aee6`](https://github.com/twilio-labs/paste/commit/c0de1aee6fd6f2e2963c663838ccaf9ab2058349) [#2221](https://github.com/twilio-labs/paste/pull/2221) Thanks [@shleewhite](https://github.com/shleewhite)! - [FormPillGroup] add i18nKeyboardControls prop to support i18n

## 2.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/customization@3.0.0

## 1.1.3

### Patch Changes

- [`bcac9a339`](https://github.com/twilio-labs/paste/commit/bcac9a339ec8c99e15c7dac1446e315b58449fbf) [#2020](https://github.com/twilio-labs/paste/pull/2020) Thanks [@TheSisb](https://github.com/TheSisb)! - [DisplayPillGroup and FormPillGroup] Improved the group container elements so that they wrap correctly when having an overflow of pill children elements. (Thanks @rpresb)

## 1.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 1.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 1.1.0

### Minor Changes

- [`1e9a9583`](https://github.com/twilio-labs/paste/commit/1e9a9583c4957a401b9a808565395269d711e336) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Form Pill Group] Updated design for display and form pills, improving interactive states such as focus, hover and selected

## 1.0.0

### Major Changes

- [`06bae4e2`](https://github.com/twilio-labs/paste/commit/06bae4e21077a32a6eeb059941f8717c76d76ce0) [#1803](https://github.com/twilio-labs/paste/pull/1803) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] Adding the FormPillGroup component package. This component renders is a collection of Pills that can be selected or removed from within a data entry form.
