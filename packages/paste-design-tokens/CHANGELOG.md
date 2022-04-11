# Change Log

## 7.2.0

### Minor Changes

- [`8e5dfe1e`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Tokens] add i18n font family tokens

* [`27528be7`](https://github.com/twilio-labs/paste/commit/27528be7aa25521655300c699f37575dab73a3db) [#2286](https://github.com/twilio-labs/paste/pull/2286) Thanks [@gloriliale](https://github.com/gloriliale)! - [Design Tokens] added new background color, box shadow, text color, border color, border radius tokens to support badge styling

## 7.1.1

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 7.1.0

### Minor Changes

- [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [design-tokens] Update alias and add new tokens to be accessible in Dark theme

  - Aliases
    - Added a new alias `palette-gray-110`
  - Global: background-color
    - Updated `color-background-inverse` to gray-90
    - Updated `color-background-inverse-strong` to gray-80
  - Global: border color
    - Added `color-border-inverse-weakest` token pointing to gray-90
    - Updated `color-border-inverse-weaker` to gray-80
    - Updated `color-border-inverse` to gray-50
    - Updated `color-border-inverse-strong` to gray-20
    - Updated `color-border-inverse-stronger` to gray-10
    - Neutral
      - Updated `color-border-neutral-weak` to blue-40
    - Added `color-border-error-stronger` token pointing to red-90
  - Global: box shadow
    - Added `shadow-border-error-stronger` pointing to red-90
    - Added `shadow-border-inverse-weakest` pointing to gray-90
    - Updated `shadow-border-inverse-weaker` to gray-80
    - Updated `shadow-border-inverse` to gray-50
      - Updated `shadow-border-inverse-strong` to gray-20
      - Updated `shadow-border-inverse-stronger` to gray-10
  - Dark theme: background color
    - Updated `color-background` to gray-100
    - Updated `color-background-strong` to gray-90
    - Updated `color-background-stronger` to gray-80
    - Updated `color-background-inverse` to gray-90
    - Updated `color-background-inverse-strong` to gray-80
    - Updated `color-background-body` to new alias gray-110
    - Updated `color-background-overlay` to palette-gray-100-transparent-90
    - Updated `color-background-row-striped` to gray-100
    - Updated `color-background-subaccount` to gray-90
    - Updated `color-background-trial` to green-100
    - Brand
      - Updated `color-background-brand` to gray-100
      - Updated `color-background-brand-strong` to gray-90
    - Primary
      - Updated `color-background-primary-strongest` to blue-10
      - Updated `color-background-primary-stronger` to blue-20
      - Updated `color-background-primary-strong` to blue-30
      - Updated `color-background-primary` to blue-60
      - Updated `color-background-primary-weak` to gray-80
      - Updated `color-background-primary-weaker` to gray-90
      - Updated `color-background-primary-weakest` to gray-100
    - Destructive
      - Updated `color-background-destructive-strongest` to red-10
      - Updated `color-background-destructive-stronger` to red-20
      - Updated `color-background-destructive-strong` to red-30
      - Updated `color-background-destructive` to red-60
      - Updated `color-background-destructive-weak` to gray-80
      - Updated `color-background-destructive-weaker` to gray-90
      - Updated `color-background-destructive-weakest` to gray-100
    - Success
      - Updated `color-background-success` to green-60
    - Warning
      - Updated `color-background-warning` to orange-60
    - Error
      - Added `color-background-error-stronger` pointing to red-20
      - Updated `color-background-error-strong` to red-40
      - Updated `color-background-error` to red-60
  - Dark theme: border color
    - Updated `color-border-weak` to gray-80
    - Updated `color-border-weaker` to gray-90
    - Inverse
      - Removed `color-border-inverse-weaker`
      - Removed `color-border-inverse`
      - Removed `color-border-inverse-strong`
      - Removed `color-border-inverse-stronger`
      - Removed `color-border-inverse-strongest`
    - Primary
      - Updated `color-border-primary-strongest` to blue-10
      - Updated `color-border-primary-stronger` to blue-20
      - Updated `color-border-primary-strong` to blue-30
      - Updated `color-border-primary` to blue-60
      - Updated `color-border-primary-weak` to gray-80
      - Updated `color-border-primary-weaker` to gray-90
      - Updated `color-border-primary-weakest` to gray-100
    - Destructive
      - Updated `color-border-destructive-strongest` to red-10
      - Updated `color-border-destructive-stronger` to red-20
      - Updated `color-border-destructive-strong` to red-30
      - Updated `color-border-destructive` to red-60
      - Updated `color-border-destructive-weak` to gray-80
      - Updated `color-border-destructive-weaker` to gray-90
      - Updated `color-border-destructive-weakest` to gray-100
    - Success
      - Updated `color-border-success` to green-60
      - Updated `color-border-success-weak` to green-70
    - Warning
      - Updated `color-border-warning` to orange-60
      - Updated `color-border-warning-weak` to orange-70
    - Error
      - Added `color-border-error-stronger` pointing to red-20
      - Updated `color-border-error-strong` to red-30
      - Updated `color-border-error` to red-60
      - Updated `color-border-error-weak` to red-70
    - Neutral
      - Updated `color-border-neutral` to blue-60
      - Updated `color-border-neutral-weak` to blue-70
  - Dark theme: box shadow
    - Elevation
      - Update `shadow-elevation-10` to `black-transparent-40`
      - Update `shadow-elevation-20` to `black-transparent-50`
      - Update `shadow-elevation-30` to `black-transparent-50`
    - Focus
      - Updated `shadow-focus` to gray-60
      - Updated `shadow-focus-inverse` to gray-50
      - Updated `shadow-focus-inset` to gray-60
    - Primary
      - Updated `shadow-border-primary` to blue-60
    - Destructive
      - Updated `shadow-border-destructive` to red-60
      - Updated `shadow-border-destructive-strong` to red-30
      - Updated `shadow-border-destructive-stronger` to red-20
      - Updated `shadow-border-destructive-strongest` to red-10
    - Error
      - Updated `shadow-border-error` to red-60
      - Updated `shadow-border-error-strong` to red-30
    - Inverse
      - Removed `shadow-border-inverse-weaker`
      - Removed `shadow-border-inverse`
      - Removed `shadow-border-inverse-strong`
      - Removed `shadow-border-inverse-stronger`
      - Removed `shadow-border-inverse-strongest`
  - Dark theme: text color
    - Updated `color-text-weak` to gray-50
    - Updated `color-text-weaker` to gray-80
    - Updated `color-text-weakest` to new alias gray-110
    - Updated `color-text-inverse-weaker` to gray-70
    - Link
      - Updated `color-text-link-weak` to gray-80
      - Updated `color-text-link-stronger` to gray-0
      - Updated color-text-link-destructive-weak to gray-80
      - Updated `color-text-link-destructive-stronger` to gray-0
    - Success
      - Updated `color-text-success` to green-30
    - Neutral
      - Updated `color-text-neutral` to blue-20
    - New
      - Updated `color-text-new` to purple-20
    - Icon
      - Updated `color-text-icon` to gray-50

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 7.0.0

### Major Changes

- [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37) [#2168](https://github.com/twilio-labs/paste/pull/2168) Thanks [@shleewhite](https://github.com/shleewhite)! - [Design Tokens] Deprecated the console theme. The package no longer exports console tokens, the default tokens should be used instead.

### Minor Changes

- [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc) [#2093](https://github.com/twilio-labs/paste/pull/2093) Thanks [@TheSisb](https://github.com/TheSisb)! - [Design Tokens] Add data-visualization tokens for 10 categorical (sequential) colors. These can be used to accessibly theme chart content, like bars in bar charts or lines in line charts.

## 6.14.2

### Patch Changes

- [`97da2b6b7`](https://github.com/twilio-labs/paste/commit/97da2b6b79eb7b5667f39aac483f83474ba6189e) [#2028](https://github.com/twilio-labs/paste/pull/2028) Thanks [@gloriliale](https://github.com/gloriliale)! - [design-tokens] Changed the alias that Dark mode's color-text-icon points to from gray-10 to gray-60

## 6.14.1

### Patch Changes

- [`5c99798b`](https://github.com/twilio-labs/paste/commit/5c99798b551553c47c8ff2bbbb5661d430abdb21) [#1996](https://github.com/twilio-labs/paste/pull/1996) Thanks [@gloriliale](https://github.com/gloriliale)! - Updated and added link colors to the default theme and dark theme.

## 6.14.0

### Minor Changes

- [`bdff8b23`](https://github.com/twilio-labs/paste/commit/bdff8b23c308c0882a340b74ce0b2ebadd20b85f) [#1928](https://github.com/twilio-labs/paste/pull/1928) Thanks [@loreina](https://github.com/loreina)! - [Tokens] Added shadow-focus-inset token to dark theme, and adjusted shadow-focus-inset token value for default theme.

## 6.13.0

### Minor Changes

- [`d13c1095`](https://github.com/twilio-labs/paste/commit/d13c10956420897e8215630bc713c1105dfdfe21) [#1911](https://github.com/twilio-labs/paste/pull/1911) Thanks [@andipants12](https://github.com/andipants12)! - [paste-design-tokens] Added the following tokens for usage with the Connectivity variant and status pattern:

  - color-text-icon-available:
  - color-text-icon-busy
  - color-text-icon-unavailable
  - color-text-icon-offline

## 6.12.0

### Minor Changes

- [`bec21fa0`](https://github.com/twilio-labs/paste/commit/bec21fa0e7d247202994d962d504ef1bb32f22e4) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Added 'shadow-focus-inset', a box-shadow token representing an inset focus outline.

## 6.11.2

### Patch Changes

- [`866cf8f1`](https://github.com/twilio-labs/paste/commit/866cf8f1dd7f2dffa53dfb4ab94b4f06b659e6db) [#1835](https://github.com/twilio-labs/paste/pull/1835) Thanks [@nkrantz](https://github.com/nkrantz)! - [Design tokens] Text, background, and icon color tokens are updated to meet accessibility guidelines.

## 6.11.1

### Patch Changes

- [`30160725`](https://github.com/twilio-labs/paste/commit/30160725ecdb5a028f15a162c7a6806b7bc7b178) [#1774](https://github.com/twilio-labs/paste/pull/1774) Thanks [@nkrantz](https://github.com/nkrantz)! - Added an alias for orange-65 and added the following text color tokens for icons:

  - color-text-icon-error -> red-60 (default) / red-40 (dark)
  - color-text-icon-success -> green-70 (default) / green-50 (dark)
  - color-text-icon-warning -> orange-65 (default) / orange-40 (dark)
  - color-text-icon-neutral -> blue-80 (default) / blue-40 (dark)
  - color-text-icon-brand-highlight -> amaranth
  - color-text-icon-brand-inverse -> gray-0

## 6.11.0

### Minor Changes

- [`a2860c3b`](https://github.com/twilio-labs/paste/commit/a2860c3bf7dba4cf26d94b8bd5b82fa627a2f4ac) [#1708](https://github.com/twilio-labs/paste/pull/1708) Thanks [@nkrantz](https://github.com/nkrantz)! - Add `color-border-inverse-strong` and `shadow-border-inverse-stronger`, adjust `shadow-border-inverse-strong` to align color-border tokens and shadow-border tokens.

## 6.10.0

### Minor Changes

- [`10f4a285`](https://github.com/twilio-labs/paste/commit/10f4a285df84e757d0574f4024770b5eddad17ea) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design tokens] export design token types from the design-tokens page
  [theme] `GenericTokenShape` is now called `GenericTokensShape` and exported from `@twilio-paste/design-tokens`

## 6.9.1

### Patch Changes

- [`e43dec0e`](https://github.com/twilio-labs/paste/commit/e43dec0e611defd3ab3e89614b4d57bb33cf481d) [#1594](https://github.com/twilio-labs/paste/pull/1594) Thanks [@TheSisb](https://github.com/TheSisb)! - Minifies output to commonJS and ES6 token files

## 6.9.0

### Minor Changes

- [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design-tokens]: Added two extra brand based background tokens. Update the new design tokens for better dark mode contrast.

  Renamed black aliases in the dark theme as they are not palette colors.

  Updated meta data for weak and strong design tokens to reflect their new naming convention

### Patch Changes

- [`f551079a`](https://github.com/twilio-labs/paste/commit/f551079ad141a06532e4d1bcd1c0d4ef7f6f226d) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Fixed shadow-border, shadow-border-weak, shadow-border-weaker, shadow-border-strong values to match respective color-border-\* values in all themes.

  Shadow-border-stronger token has been removed in all themes.

  **Default theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border-weak   | NA                   | palette-gray-30 |
  | shadow-border-weaker | NA                   | palette-gray-20 |
  | shadow-border-strong | palette-gray-30      | palette-gray-60 |

  **Console theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border-weak   | NA                   | palette-gray-50 |
  | shadow-border-weaker | NA                   | palette-gray-40 |
  | shadow-border-strong | palette-gray-40      | palette-gray-60 |

  **Dark theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border        | palette-gray-50      | palette-gray-60 |
  | shadow-border-weak   | NA                   | palette-gray-70 |
  | shadow-border-weaker | NA                   | palette-gray-80 |
  | shadow-border-strong | palette-gray-90      | palette-gray-50 |

## 6.8.0

### Minor Changes

- [`62f7fd3e`](https://github.com/twilio-labs/paste/commit/62f7fd3e3da78bca128aa2287c61d19248a2025d) [#1451](https://github.com/twilio-labs/paste/pull/1451) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design-tokens] Adding for availability tokens to display entity status such as available, offline and busy

## 6.7.0

### Minor Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add a dark theme to Paste

* [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Design tokens that are named using the light / dark nomenclature are being deprecated in favour of a new set of tokens based on a weak / strong nomenclature to accommodate light and dark modes.

  If you are using these tokens with our `Box` or `Text` component, these will still work for now but we will be removing them in the 2021.11.16 release of Paste. In most cases replacing `dark` for `strong` and `light` for `weak` is all that is required to transition.

  Design tokens that are being deprecated include:

  | old                                   | new                                    |
  | ------------------------------------- | -------------------------------------- |
  | color-background-dark                 | color-background-strong                |
  | color-background-darker               | color-background-stronger              |
  | color-background-darkest              | color-background-strongest             |
  | color-background-inverse-light        | color-background-inverse-weak          |
  | color-background-neutral-lightest     | color-background-neutral-weakest       |
  | color-background-success-lightest     | color-background-success-weakest       |
  | color-background-warning-lightest     | color-background-warning-weakest       |
  | color-background-error-dark           | color-background-error-strong          |
  | color-background-error-lightest       | color-background-error-weakest         |
  | color-background-primary-darkest      | color-background-primary-strongest     |
  | color-background-primary-darker       | color-background-primary-stronger      |
  | color-background-primary-dark         | color-background-primary-strong        |
  | color-background-primary-light        | color-background-primary-weak          |
  | color-background-primary-lighter      | color-background-primary-weaker        |
  | color-background-primary-lightest     | color-background-primary-weakest       |
  | color-background-destructive-darkest  | color-background-destructive-strongest |
  | color-background-destructive-darker   | color-background-destructive-stronger  |
  | color-background-destructive-dark     | color-background-destructive-strong    |
  | color-background-destructive-light    | color-background-destructive-weak      |
  | color-background-destructive-lighter  | color-background-destructive-weaker    |
  | color-background-destructive-lightest | color-background-destructive-weakest   |

  | old                              | new                                |
  | -------------------------------- | ---------------------------------- |
  | color-border-dark                | color-border-strong                |
  | color-border-light               | color-border-weak                  |
  | color-border-lighter             | color-border-weaker                |
  | color-border-inverse-darker      | color-border-inverse-weaker        |
  | color-border-inverse-lighter     | color-border-inverse-stronger      |
  | color-border-inverse-lightest    | color-border-inverse-strongest     |
  | color-border-primary-darkest     | color-border-primary-strongest     |
  | color-border-primary-darker      | color-border-primary-stronger      |
  | color-border-primary-dark        | color-border-primary-strong        |
  | color-border-primary-light       | color-border-primary-weak          |
  | color-border-primary-lighter     | color-border-primary-weaker        |
  | color-border-neutral-light       | color-border-neutral-weak          |
  | color-border-success-light       | color-border-success-weak          |
  | color-border-success-lightest    | color-border-success-weakest       |
  | color-border-warning-light       | color-border-warning-weak          |
  | color-border-warning-lightest    | color-border-warning-weakest       |
  | color-border-error-dark          | color-border-error-strong          |
  | color-border-error-light         | color-border-error-weak            |
  | color-border-error-lightest      | color-border-error-weakest         |
  | color-border-destructive-darkest | color-border-destructive-strongest |
  | color-border-destructive-darker  | color-border-destructive-stronger  |
  | color-border-destructive-dark    | color-border-destructive-strong    |
  | color-border-destructive-light   | color-border-destructive-weak      |
  | color-border-destructive-lighter | color-border-destructive-weaker    |

  | old                               | new                                |
  | --------------------------------- | ---------------------------------- |
  | shadow-border-lighter             | shadow-border-weaker               |
  | shadow-border-light               | shadow-border-weak                 |
  | shadow-border-primary-lighter     | shadow-border-primary-weaker       |
  | shadow-border-primary-light       | shadow-border-primary-weak         |
  | shadow-border-primary-dark        | shadow-border-primary-strong       |
  | shadow-border-primary-darker      | shadow-border-primary-stronger     |
  | shadow-border-destructive-lighter | shadow-border-destructive-weaker   |
  | shadow-border-destructive-light   | shadow-border-destructive-weak     |
  | shadow-border-destructive-darker  | shadow-border-destructive-stronger |
  | shadow-border-error-light         | shadow-border-error-weak           |
  | shadow-border-error-dark          | shadow-border-error-strong         |
  | shadow-border-inverse-darker      | shadow-border-inverse-weaker       |
  | shadow-border-inverse-light       | shadow-border-inverse-strong       |
  | shadow-border-inverse-lightest    | shadow-border-inverse-strongest    |

  | old                                | new                                  |
  | ---------------------------------- | ------------------------------------ |
  | color-text-link-light              | color-text-link-weak                 |
  | color-text-link-dark               | color-text-link-strong               |
  | color-text-link-darker             | color-text-link-stronger             |
  | color-text-link-destructive-light  | color-text-link-destructive-weak     |
  | color-text-link-destructive-dark   | color-text-link-destructive-strong   |
  | color-text-link-destructive-darker | color-text-link-destructive-stronger |
  | color-text-error-light             | color-text-error-weak                |
  | color-text-error-dark              | color-text-error-strong              |
  | color-text-warning-dark            | color-text-warning-strong            |

## 6.6.0

### Minor Changes

- [`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272) [#1236](https://github.com/twilio-labs/paste/pull/1236) Thanks [@richbachman](https://github.com/richbachman)! - The SendGrid theme now inherits everything from the Default theme, except for font family. The SendGrid theme uses Colfax for `font-family-text`.

## 6.5.2

### Patch Changes

- [`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6) [#1221](https://github.com/twilio-labs/paste/pull/1221) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Pointed font-weight-light to the font-weight-normal alias in the default theme as we do not want people using 300 weight text in our default UIs

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.5.0...@twilio-paste/design-tokens@6.5.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [6.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.4.1...@twilio-paste/design-tokens@6.5.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [6.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.4.0...@twilio-paste/design-tokens@6.4.1) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [6.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.7...@twilio-paste/design-tokens@6.4.0) (2020-12-17)

### Features

- **design-tokens:** switch default theme font family to inter var ([796a3bb](https://github.com/twilio-labs/paste/commit/796a3bbe2634a0f6c21c487b216c779b5069e6bb))

## [6.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.6...@twilio-paste/design-tokens@6.3.7) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [6.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.5...@twilio-paste/design-tokens@6.3.6) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [6.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.4...@twilio-paste/design-tokens@6.3.5) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [6.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.3...@twilio-paste/design-tokens@6.3.4) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [6.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.2...@twilio-paste/design-tokens@6.3.3) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [6.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.1...@twilio-paste/design-tokens@6.3.2) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [6.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.3.0...@twilio-paste/design-tokens@6.3.1) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [6.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.2.2...@twilio-paste/design-tokens@6.3.0) (2020-09-08)

### Features

- **design-tokens:** add line-height-0 ([693165f](https://github.com/twilio-labs/paste/commit/693165f246a3f4400febf299e446c920c2553f95))

## [6.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.2.1...@twilio-paste/design-tokens@6.2.2) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [6.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.2.0...@twilio-paste/design-tokens@6.2.1) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [6.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.1.1...@twilio-paste/design-tokens@6.2.0) (2020-08-24)

### Features

- **design-token:** adjust the line-height scale ([6531091](https://github.com/twilio-labs/paste/commit/65310915230ae89c1f0ed11bc084d525ca2add55))

## [6.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.1.0...@twilio-paste/design-tokens@6.1.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [6.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.0.1...@twilio-paste/design-tokens@6.1.0) (2020-08-12)

### Features

- **design-tokens:** add missing udl boxShadow tokens ([2b6f6a1](https://github.com/twilio-labs/paste/commit/2b6f6a1fa8e19b08a24832f0d501a8cc377dffbd))

## [6.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@6.0.0...@twilio-paste/design-tokens@6.0.1) (2020-08-04)

### Bug Fixes

- **design-tokens:** tidy offset aliases for ease of use ([0b8a00c](https://github.com/twilio-labs/paste/commit/0b8a00c90e2ffff8840641231578273f5fa45e60))

# [6.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.5.0...@twilio-paste/design-tokens@6.0.0) (2020-08-04)

### Bug Fixes

- **design-tokens:** updates to default and console aliases and tokens ([a3d02e2](https://github.com/twilio-labs/paste/commit/a3d02e2acfa4ea9e8a9ffd1f83d21f7c22cd4b92))

### BREAKING CHANGES

- **design-tokens:** `color-background-inverse` has been changed to a transparent color. Use `color-background-body-inverse` instead.
  `color-text-label` has been removed.
  `color-text-placeholder` has been removed.

# [5.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.4.0...@twilio-paste/design-tokens@5.5.0) (2020-07-22)

### Features

- **design-tokens:** add negative space tokens ([3bc718f](https://github.com/twilio-labs/paste/commit/3bc718fc9bcb4d8be952c70f71ceb21b0b307be2))

# [5.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.3.2...@twilio-paste/design-tokens@5.4.0) (2020-07-14)

### Features

- **design-tokens:** add color-border-light and color-border-lighter ([83d0b04](https://github.com/twilio-labs/paste/commit/83d0b045bed4cc904fbc5ab4f69ff7ed62909071))

## [5.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.3.1...@twilio-paste/design-tokens@5.3.2) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [5.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.3.0...@twilio-paste/design-tokens@5.3.1) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [5.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.2.2...@twilio-paste/design-tokens@5.3.0) (2020-06-25)

### Features

- **design-tokens:** adding 2 new border-width tokens ([69ae496](https://github.com/twilio-labs/paste/commit/69ae496699d53b3837bf11542b7104846c82e86e))

## [5.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.2.1...@twilio-paste/design-tokens@5.2.2) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [5.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.2.0...@twilio-paste/design-tokens@5.2.1) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [5.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.1.0...@twilio-paste/design-tokens@5.2.0) (2020-05-20)

### Features

- **design-tokens:** create color-text-weaker token ([3c63e32](https://github.com/twilio-labs/paste/commit/3c63e32a00fac5d3750f8b177759ae1862761802))

# [5.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@5.0.0...@twilio-paste/design-tokens@5.1.0) (2020-05-07)

### Features

- **website:** friendly token values ([#427](https://github.com/twilio-labs/paste/issues/427)) ([43104e6](https://github.com/twilio-labs/paste/commit/43104e6f21e928299c83b7f8d1f3175396aea791))

# [5.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.5.1...@twilio-paste/design-tokens@5.0.0) (2020-05-07)

### Features

- **design-tokens:** updates to border and shadow-border tokens ([c7f687d](https://github.com/twilio-labs/paste/commit/c7f687d07a2bdfc5466269c05a398c16adf29536))

### BREAKING CHANGES

- **design-tokens:** Removed and renamed some border and shadow border tokens

* removed color-border-input -> use color-border
* removed color-border-input-hover
* removed color-border-input-focus
* renamed shadow-border-input -> shadow-border
* renamed shadow-border-input-hover -> shadow-border-primary-dark
* renamed shadow-border-input-disabled -> shadow-border-light
* renamed shadow-border-input-error -> shadow-border-error
* renamed shadow-border-input-error-hover -> shadow-border-error-dark

## [4.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.5.0...@twilio-paste/design-tokens@4.5.1) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [4.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.4.1...@twilio-paste/design-tokens@4.5.0) (2020-04-25)

### Features

- **design-tokens:** add background and square sizes tokens ([7c8f8e6](https://github.com/twilio-labs/paste/commit/7c8f8e6d2656e681da22c5552e833d4f0a947e1d))

## [4.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.4.0...@twilio-paste/design-tokens@4.4.1) (2020-04-22)

### Bug Fixes

- **tokens:** Add shadow-border-input-\* aliases, tokens to themes ([#400](https://github.com/twilio-labs/paste/issues/400)) ([a553100](https://github.com/twilio-labs/paste/commit/a5531003b713b56f1fd5078cccdbdc4879943fc5))

# [4.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.3.0...@twilio-paste/design-tokens@4.4.0) (2020-04-07)

### Features

- **design-tokens:** add overlay background token, switch to rgb colors ([d9f783b](https://github.com/twilio-labs/paste/commit/d9f783b5d46767ab2d433f5619b71fe98c0092fa))

# [4.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.2.0...@twilio-paste/design-tokens@4.3.0) (2020-03-11)

### Features

- **design-tokens:** add boxShadow tokens for input borders ([20022ec](https://github.com/twilio-labs/paste/commit/20022ecc1f4987ae59bd365eca4c1797089cfa7a))

# [4.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.1.4...@twilio-paste/design-tokens@4.2.0) (2020-03-02)

### Features

- **design-tokens:** consistent iconsize to line-height tokens ([#339](https://github.com/twilio-labs/paste/issues/339)) ([00cb441](https://github.com/twilio-labs/paste/commit/00cb4417551a046518bfc7a049201e49ddac1641))

## [4.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.1.3...@twilio-paste/design-tokens@4.1.4) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/design-tokens

## [4.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.1.2...@twilio-paste/design-tokens@4.1.3) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [4.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.1.1...@twilio-paste/design-tokens@4.1.2) (2020-02-13)

### Bug Fixes

- **design-tokens:** change sg gray-70 and color-border-inpt ([#311](https://github.com/twilio-labs/paste/issues/311)) ([642cfcc](https://github.com/twilio-labs/paste/commit/642cfcc78ef021f4c100a1c4eaecf786a2ad3655))

## [4.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.1.0...@twilio-paste/design-tokens@4.1.1) (2020-02-03)

### Bug Fixes

- **tokens:** update tokens for sg disabled buttons ([#286](https://github.com/twilio-labs/paste/issues/286)) ([27074eb](https://github.com/twilio-labs/paste/commit/27074eb97e9ec32d5b2a8ec07b48da1fe79f6323))

# [4.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@4.0.0...@twilio-paste/design-tokens@4.1.0) (2020-01-17)

### Features

- **design-token:** add new status tokens ([462f471](https://github.com/twilio-labs/paste/commit/462f4713ab092268bd40b9bfd0d987043a7d7805))

# [4.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.5...@twilio-paste/design-tokens@4.0.0) (2019-12-20)

### Features

- **design-tokens:** create paste and console themes ([d550e4e](https://github.com/twilio-labs/paste/commit/d550e4e3ad29ef8d428031ff3e915e8a511df1c8))

### BREAKING CHANGES

- **design-tokens:** Move the default theme values to be the console theme
  Make the default theme the Paste theme based on new unified design language

## [3.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.4...@twilio-paste/design-tokens@3.0.5) (2019-12-19)

### Bug Fixes

- **SG:** change `color-text-weak` to `gray-80 for a11y ([#225](https://github.com/twilio-labs/paste/issues/225)) ([12e1261](https://github.com/twilio-labs/paste/commit/12e12614acb87d70fcc07be92f8c04496c787214))

## [3.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.3...@twilio-paste/design-tokens@3.0.4) (2019-12-05)

### Bug Fixes

- **console:** change "color-text-inverse-weak" for a11y ([#218](https://github.com/twilio-labs/paste/issues/218)) ([c29de58](https://github.com/twilio-labs/paste/commit/c29de58f7371634f331e8c8fc98902ea638001aa))

## [3.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.2...@twilio-paste/design-tokens@3.0.3) (2019-11-20)

### Bug Fixes

- remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))

## [3.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.1...@twilio-paste/design-tokens@3.0.2) (2019-11-18)

### Bug Fixes

- **design-tokens:** change color-text-link token values ([#172](https://github.com/twilio-labs/paste/issues/172)) ([f0a215c](https://github.com/twilio-labs/paste/commit/f0a215cb283f74f268387e744099e337c6489ebd))
- **design-tokens:** update lightest console color palette ([#174](https://github.com/twilio-labs/paste/issues/174)) ([98b625c](https://github.com/twilio-labs/paste/commit/98b625cc0998381b9a9d43cf590d1bc9cbbed6b6))
- correct button heights add new default icon size ([#186](https://github.com/twilio-labs/paste/issues/186)) ([2e54478](https://github.com/twilio-labs/paste/commit/2e54478f975cb1930bd6d397d1214947db97c2a3))
- **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))

## [3.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.0...@twilio-paste/design-tokens@3.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/design-tokens

# [3.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@2.5.0...@twilio-paste/design-tokens@3.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))

### BREAKING CHANGES

- **icons:** removed all the inherited icons since we're moving to a new system

# [2.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@2.4.0...@twilio-paste/design-tokens@2.5.0) (2019-10-29)

### Bug Fixes

- token formatter tests ([#102](https://github.com/twilio-labs/paste/issues/102)) ([1599e1e](https://github.com/twilio-labs/paste/commit/1599e1e89b2d64eb2a2898f0240199ac36428f5b))

### Features

- design token and theme package documentation ([#103](https://github.com/twilio-labs/paste/issues/103)) ([3060113](https://github.com/twilio-labs/paste/commit/30601132ccdec8f0fee79e0f293c80d0c0cff335))

# [2.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@2.3.0...@twilio-paste/design-tokens@2.4.0) (2019-09-16)

### Bug Fixes

- **design-tokens:** fix SendGrid token values ([#71](https://github.com/twilio-labs/paste/issues/71)) ([396fccf](https://github.com/twilio-labs/paste/commit/396fccf))
- **design-tokens:** typo on word `borderr` ([#56](https://github.com/twilio-labs/paste/issues/56)) ([6b5edd1](https://github.com/twilio-labs/paste/commit/6b5edd1))
- **tokens:** correct the box shadow tokens category and type ([#95](https://github.com/twilio-labs/paste/issues/95)) ([fe0f946](https://github.com/twilio-labs/paste/commit/fe0f946))

### Features

- **tokens:** Add box-shadow and line-height tokens ([#35](https://github.com/twilio-labs/paste/issues/35)) ([706643b](https://github.com/twilio-labs/paste/commit/706643b))

# 2.3.0 (2019-08-15)

### Bug Fixes

- **design-tokens:** resolve path correctly ([6f89111](https://github.com/twilio-labs/paste/commit/6f89111))
- **tokens:** added missing SG token values ([#22](https://github.com/twilio-labs/paste/issues/22)) ([23d7385](https://github.com/twilio-labs/paste/commit/23d7385))
- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
- run eslint across the right files and fix any issues that arise. ([#21](https://github.com/twilio-labs/paste/issues/21)) ([2fcc872](https://github.com/twilio-labs/paste/commit/2fcc872))
- swap light/dark border token colors ([0a99d3c](https://github.com/twilio-labs/paste/commit/0a99d3c))
- Type-checking fixes ([#12](https://github.com/twilio-labs/paste/issues/12)) ([be02450](https://github.com/twilio-labs/paste/commit/be02450))

### Features

- change the z-index scale to 10s ([#34](https://github.com/twilio-labs/paste/issues/34)) ([ed05089](https://github.com/twilio-labs/paste/commit/ed05089))
- ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
- **website:** Add text color token accessibility rating to the token page ([#28](https://github.com/twilio-labs/paste/issues/28)) ([74f12d1](https://github.com/twilio-labs/paste/commit/74f12d1))
- **website:** Add the tokens page ([#19](https://github.com/twilio-labs/paste/issues/19)) ([878d3c5](https://github.com/twilio-labs/paste/commit/878d3c5))
- **website:** Callout component ([#25](https://github.com/twilio-labs/paste/issues/25)) ([e4a3d00](https://github.com/twilio-labs/paste/commit/e4a3d00))
