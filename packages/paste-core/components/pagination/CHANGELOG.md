# @twilio-paste/pagination

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
