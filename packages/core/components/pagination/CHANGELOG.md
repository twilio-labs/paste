# @twilio-paste/pagination

## 1.0.3

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button, FormPillGroup, Menu, Pagination, Select] inherit fontFamily for i18n

## 1.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

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
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 0.2.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.2.0

### Minor Changes

- [`d7003b63`](https://github.com/twilio-labs/paste/commit/d7003b633068654591b68748ece3d0ac8a80c402) [#1880](https://github.com/twilio-labs/paste/pull/1880) Thanks [@TheSisb](https://github.com/TheSisb)! - [Pagination] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 0.1.3

### Patch Changes

- [`e7cc5ca0`](https://github.com/twilio-labs/paste/commit/e7cc5ca09e8ec1cf913ae88e08c6ee4b616a056a) [#1675](https://github.com/twilio-labs/paste/pull/1675) Thanks [@richbachman](https://github.com/richbachman)! - [Pagination] Update styles for better dark theme accessibility

  `PaginationArrow` hover and focus:

  - border-color: colorBorderPrimary changed to colorBorderPrimaryStronger
  - color: colorTextLink changed to colorTextLinkStronger

  `PaginationNumber`:

  - border-color: added colorBorderPrimaryStronger border on hover and focus
  - color: colorTextLink changed to colorTextLinkStronger on hover and focus
  - isCurrent:
    - background-color: colorBackgroundPrimaryWeakest changed to colorBackgroundPrimary Stronger
    - color: colorTextLink changed to colorTextWeakest
    - isCurrent hover and focus uses same background-colors and colors

## 0.1.2

### Patch Changes

- [`41a3da0e`](https://github.com/twilio-labs/paste/commit/41a3da0e00bc8bea9927ef38f59e84b606239320) [#1407](https://github.com/twilio-labs/paste/pull/1407) Thanks [@richbachman](https://github.com/richbachman)! - - Added background color to `PaginationArrow` on hover.
  - Added disabled prop to `PaginationArrow` which sets `aria-hidden` to true and `visibility: none`.
  - Added left and right padding to `PaginationNumbers` to help center with longer page labels.

## 0.1.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 0.1.0

### Minor Changes

- [`ed40d4de`](https://github.com/twilio-labs/paste/commit/ed40d4decd4c04a1f0e77a1f9d8f0237a3a26610) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Pagination: added the pagination componenents, stories, and tests.
