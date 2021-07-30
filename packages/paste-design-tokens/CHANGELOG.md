# Change Log

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
