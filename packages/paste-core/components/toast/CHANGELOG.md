# Change Log

## 6.0.3

### Patch Changes

- [`b6ccaa266`](https://github.com/twilio-labs/paste/commit/b6ccaa266c8abc81820b77127da5abb0cf5308d4) [#2347](https://github.com/twilio-labs/paste/pull/2347) Thanks [@gloriliale](https://github.com/gloriliale)! - [Alert, Modal, Popover, Toast] Adjust close icon's hover state color, which was previously being overwritten.

## 6.0.2

### Patch Changes

- [`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Toast] use title for i18n status labels

* [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 6.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [toast]

  - Update neutral Toast border left color to `colorBorderNeutralWeak`

- [`b4abdd9a4`](https://github.com/twilio-labs/paste/commit/b4abdd9a4c6e168c5845e744591dc40ac635a67f) [#2234](https://github.com/twilio-labs/paste/pull/2234) Thanks [@gloriliale](https://github.com/gloriliale)! - [Toast] add i18n props for variants to support i18n

## 6.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0

## 5.2.2

### Patch Changes

- [`5d4515ea`](https://github.com/twilio-labs/paste/commit/5d4515ea31e06fa3e1478d5e42971a7973de9d51) [#2083](https://github.com/twilio-labs/paste/pull/2083) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert, Modal, Popover, Toast] Update close button to use `secondary_icon` button variant

## 5.2.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 5.2.0

### Minor Changes

- [`d4eaf8b1`](https://github.com/twilio-labs/paste/commit/d4eaf8b1802780842daeeaed43ba1cc5062d2a9e) [#1919](https://github.com/twilio-labs/paste/pull/1919) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 5.1.1

### Patch Changes

- [`8006c59b`](https://github.com/twilio-labs/paste/commit/8006c59b6e56633405c0835707da6704169b26e9) [#1835](https://github.com/twilio-labs/paste/pull/1835) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast] Icons in Toast now use text icon color tokens.

## 5.1.0

### Minor Changes

- [`63a39e0c`](https://github.com/twilio-labs/paste/commit/63a39e0c86d5c7683420f373eb3ed71e02e621aa) [#1818](https://github.com/twilio-labs/paste/pull/1818) Thanks [@TheSisb](https://github.com/TheSisb)! - [Toast] The `useToaster` push method now allows passing in an `onDismiss` callback function.

## 5.0.2

### Patch Changes

- [`5e770d20`](https://github.com/twilio-labs/paste/commit/5e770d200ebef1f18b67e6861407e8c092503c57) [#1558](https://github.com/twilio-labs/paste/pull/1558) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixes a bug where Toasts may not display using the provided Toaster for users with the system flag "prefers-reduced-motion"

## 5.0.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 5.0.0

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200)]:
  - @twilio-paste/button@7.0.0

## 4.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/stack@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 4.0.1

### Patch Changes

- [`22410172`](https://github.com/twilio-labs/paste/commit/224101728b1c55d31408b0dccecb489ce6cd2319) [#1287](https://github.com/twilio-labs/paste/pull/1287) Thanks [@TheSisb](https://github.com/TheSisb)! - Added a `__console_patch` boolean prop to fix issues with z-index in Twilio Console applications. This is a temporary fix.

## 4.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/media-object@4.0.1
  - @twilio-paste/stack@2.0.1
  - @twilio-paste/icons@5.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/media-object@4.0.0
  - @twilio-paste/stack@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 2.0.3

### Patch Changes

- [`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592) [#1228](https://github.com/twilio-labs/paste/pull/1228) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Bump status of the component to production

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/stack@1.0.2
  - @twilio-paste/button@4.0.3

## 2.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/media-object@3.0.1
  - @twilio-paste/stack@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 2.0.1

### Patch Changes

- [`8e45efee`](https://github.com/twilio-labs/paste/commit/8e45efeecfba9599b3b049f196d60b5c6ee0da55) [#1181](https://github.com/twilio-labs/paste/pull/1181) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a bug when setting an auto dismissing toast via the useToaster hook, that was supplied a custom id.

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/media-object@3.0.0
  - @twilio-paste/stack@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 1.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/stack@0.3.2
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/media-object@2.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/spinner@4.0.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.4.0...@twilio-paste/toast@0.4.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/toast

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.6...@twilio-paste/toast@0.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.5...@twilio-paste/toast@0.3.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.4...@twilio-paste/toast@0.3.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.3...@twilio-paste/toast@0.3.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.2...@twilio-paste/toast@0.3.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.1...@twilio-paste/toast@0.3.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.0...@twilio-paste/toast@0.3.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/toast

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.16...@twilio-paste/toast@0.3.0) (2020-12-17)

### Bug Fixes

- **toast:** add forwardRef ([f32579f](https://github.com/twilio-labs/paste/commit/f32579fdf706fd9eb74b4a006efcce190ab4a381))

### BREAKING CHANGES

- **toast:** component is now using fowardRef

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.15...@twilio-paste/toast@0.2.16) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.14...@twilio-paste/toast@0.2.15) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.13...@twilio-paste/toast@0.2.14) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.12...@twilio-paste/toast@0.2.13) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.11...@twilio-paste/toast@0.2.12) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.10...@twilio-paste/toast@0.2.11) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.9...@twilio-paste/toast@0.2.10) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.8...@twilio-paste/toast@0.2.9) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.7...@twilio-paste/toast@0.2.8) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.6...@twilio-paste/toast@0.2.7) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.5...@twilio-paste/toast@0.2.6) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.4...@twilio-paste/toast@0.2.5) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.3...@twilio-paste/toast@0.2.4) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.2...@twilio-paste/toast@0.2.3) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.1...@twilio-paste/toast@0.2.2) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.0...@twilio-paste/toast@0.2.1) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/toast

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.11...@twilio-paste/toast@0.2.0) (2020-10-22)

### Features

- **toast:** add the toaster to handle showing toasts ([bb94744](https://github.com/twilio-labs/paste/commit/bb9474481ef67f72a073b45a970e83b7e93e139e))
- **toast:** update the icon used in neutral toast ([a923709](https://github.com/twilio-labs/paste/commit/a92370961a89ab09d78128da930dd88ef3519422))

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.10...@twilio-paste/toast@0.1.11) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.9...@twilio-paste/toast@0.1.10) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.8...@twilio-paste/toast@0.1.9) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.7...@twilio-paste/toast@0.1.8) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.6...@twilio-paste/toast@0.1.7) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.5...@twilio-paste/toast@0.1.6) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.4...@twilio-paste/toast@0.1.5) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.3...@twilio-paste/toast@0.1.4) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.2...@twilio-paste/toast@0.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.1...@twilio-paste/toast@0.1.2) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.0...@twilio-paste/toast@0.1.1) (2020-09-23)

**Note:** Version bump only for package @twilio-paste/toast

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.0.2...@twilio-paste/toast@0.1.0) (2020-09-22)

### Features

- **toast:** add toast package ([a35eb8a](https://github.com/twilio-labs/paste/commit/a35eb8aa605d281c8d13210cdbbe2e1f11f25e81))
