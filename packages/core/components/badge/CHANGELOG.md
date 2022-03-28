# @twilio-paste/badge

## 2.1.0

### Minor Changes

- [`55d0528b`](https://github.com/twilio-labs/paste/commit/55d0528b2d967492aa6138c7bab7d1a7168d6e1b) [#2286](https://github.com/twilio-labs/paste/pull/2286) Thanks [@gloriliale](https://github.com/gloriliale)! - [Badge] Update Badge component to add decorative and counter variants, promote to stage 2

### Patch Changes

- [`30445063`](https://github.com/twilio-labs/paste/commit/304450633cf5d587cd9078681d60482502d5be8d) [#2302](https://github.com/twilio-labs/paste/pull/2302) Thanks [@gloriliale](https://github.com/gloriliale)! - [Badge] adjust the error icon color for the error counter variant

## 2.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 2.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 2.0.0

### Patch Changes

- [`68439c40`](https://github.com/twilio-labs/paste/commit/68439c4097dc533dd9a1bbc6965578f13e130c12) [#2156](https://github.com/twilio-labs/paste/pull/2156) Thanks [@shleewhite](https://github.com/shleewhite)! - [Badge] Fixed the type of the children prop

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0

## 1.1.3

### Patch Changes

- [`f8bdf2e03`](https://github.com/twilio-labs/paste/commit/f8bdf2e03608ac027eac81dd6789774ed2344a2c) [#2089](https://github.com/twilio-labs/paste/pull/2089) Thanks [@shleewhite](https://github.com/shleewhite)! - [Badge] Update the maxWidth

## 1.1.2

### Patch Changes

- [`1b77d45b`](https://github.com/twilio-labs/paste/commit/1b77d45b598b5924893e26a770798a1e1df73f2e) [#2029](https://github.com/twilio-labs/paste/pull/2029) Thanks [@shleewhite](https://github.com/shleewhite)! - Export the BadgeProps type and correctly pass the ref to the wrapper element when the Badge is focusable.

## 1.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 1.1.0

### Minor Changes

- [`51723bcc`](https://github.com/twilio-labs/paste/commit/51723bccee321cc7dab4922d90c76d2b912c9f68) [#1950](https://github.com/twilio-labs/paste/pull/1950) Thanks [@nkrantz](https://github.com/nkrantz)! - [Badge] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 1.0.1

### Patch Changes

- [`e3398bd5`](https://github.com/twilio-labs/paste/commit/e3398bd5aaa84aaabe934bcad061cda705cdbe0a) [#1783](https://github.com/twilio-labs/paste/pull/1783) Thanks [@andipants12](https://github.com/andipants12)! - [Badge]: Update badge container div max width value to be "fit-content"

## 1.0.0

### Major Changes

- [`14c6fd2e`](https://github.com/twilio-labs/paste/commit/14c6fd2e73e33b86fc49b4e6979afa007833ff89) [#1743](https://github.com/twilio-labs/paste/pull/1743) Thanks [@andipants12](https://github.com/andipants12)! - [Badge] Release Stage 1 of Badge component. A badge is a small chunk of information that describes an object in a visually highlighted way.
