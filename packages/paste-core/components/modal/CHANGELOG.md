# Change Log

## 9.0.1

### Patch Changes

- [`b6ccaa266`](https://github.com/twilio-labs/paste/commit/b6ccaa266c8abc81820b77127da5abb0cf5308d4) [#2347](https://github.com/twilio-labs/paste/pull/2347) Thanks [@gloriliale](https://github.com/gloriliale)! - [Alert, Modal, Popover, Toast] Adjust close icon's hover state color, which was previously being overwritten.

## 9.0.0

### Patch Changes

- [`cf5878d82`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Modal] Switch modal overlay to using a pure styled component and not Box

- Updated dependencies [[`cf5878d82`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914)]:
  - @twilio-paste/modal-dialog-primitive@0.3.0

## 8.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 8.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`9b0579415`](https://github.com/twilio-labs/paste/commit/9b0579415b3c7f392d088a136e08e3c45dfb2b53) [#2218](https://github.com/twilio-labs/paste/pull/2218) Thanks [@shleewhite](https://github.com/shleewhite)! - [Modal] add i18nDismissLabel prop to ModalHeader to support i18n

- [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [modal]

  - Update modal header border bottom color to `colorBorderWeak`
  - Update modal footer border top color to `colorBorderWeak`

## 8.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/form@7.0.0
  - @twilio-paste/heading@6.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/flex@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 7.1.5

### Patch Changes

- [`5d4515ea`](https://github.com/twilio-labs/paste/commit/5d4515ea31e06fa3e1478d5e42971a7973de9d51) [#2083](https://github.com/twilio-labs/paste/pull/2083) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert, Modal, Popover, Toast] Update close button to use `secondary_icon` button variant

## 7.1.4

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.1.3

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 7.1.2

### Patch Changes

- [`a8ba78e4`](https://github.com/twilio-labs/paste/commit/a8ba78e469b839fe4e920bb75f6909ae005b16cd) [#1903](https://github.com/twilio-labs/paste/pull/1903) Thanks [@andipants12](https://github.com/andipants12)! - [Modal] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 7.1.1

### Patch Changes

- [`f640550a`](https://github.com/twilio-labs/paste/commit/f640550a7306806feaedfd7c3184cad4327cc8a8) [#1489](https://github.com/twilio-labs/paste/pull/1489) Thanks [@richbachman](https://github.com/richbachman)! - Changed box-shadow for ModalDialogContent to use shadow token instead of shadow-card.

## 7.1.0

### Minor Changes

- [`f6f26815`](https://github.com/twilio-labs/paste/commit/f6f26815528b073237b7fd591064abee29f48427) [#1484](https://github.com/twilio-labs/paste/pull/1484) Thanks [@gloriliale](https://github.com/gloriliale)! - Created style file for stylings of the Modal so they can be used in other components, like Alert Dialog.

## 7.0.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 7.0.0

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200)]:
  - @twilio-paste/button@7.0.0

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/heading@5.0.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/flex@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/flex@2.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/heading@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/flex@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- [`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592) [#1228](https://github.com/twilio-labs/paste/pull/1228) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Bump status of the component to production

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/flex@1.0.2
  - @twilio-paste/modal-dialog-primitive@0.2.2
  - @twilio-paste/button@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/heading@4.0.1
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/heading@4.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/flex@0.5.2
  - @twilio-paste/heading@3.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@2.1.0...@twilio-paste/modal@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/modal

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@2.0.5...@twilio-paste/modal@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@2.0.4...@twilio-paste/modal@2.0.5) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/modal

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@2.0.3...@twilio-paste/modal@2.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/modal

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@2.0.2...@twilio-paste/modal@2.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/modal

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@2.0.1...@twilio-paste/modal@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/modal

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@2.0.0...@twilio-paste/modal@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/modal

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.55...@twilio-paste/modal@2.0.0) (2020-12-17)

### Bug Fixes

- **modal:** add forwardRef ([6061bfe](https://github.com/twilio-labs/paste/commit/6061bfe952a0422dcd4a48cb4040d12331851f5c))

### BREAKING CHANGES

- **modal:** component is now using fowardRef

## [1.0.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.54...@twilio-paste/modal@1.0.55) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.53...@twilio-paste/modal@1.0.54) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.52...@twilio-paste/modal@1.0.53) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.51...@twilio-paste/modal@1.0.52) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.50...@twilio-paste/modal@1.0.51) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.49...@twilio-paste/modal@1.0.50) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.48...@twilio-paste/modal@1.0.49) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.47...@twilio-paste/modal@1.0.48) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.46...@twilio-paste/modal@1.0.47) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.45...@twilio-paste/modal@1.0.46) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.44...@twilio-paste/modal@1.0.45) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.43...@twilio-paste/modal@1.0.44) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.42...@twilio-paste/modal@1.0.43) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.41...@twilio-paste/modal@1.0.42) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.40...@twilio-paste/modal@1.0.41) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.39...@twilio-paste/modal@1.0.40) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.38...@twilio-paste/modal@1.0.39) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.37...@twilio-paste/modal@1.0.38) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.36...@twilio-paste/modal@1.0.37) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.35...@twilio-paste/modal@1.0.36) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.34...@twilio-paste/modal@1.0.35) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.33...@twilio-paste/modal@1.0.34) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.32...@twilio-paste/modal@1.0.33) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.31...@twilio-paste/modal@1.0.32) (2020-10-09)

### Bug Fixes

- **modal:** a possibly better console_patch fix ([#837](https://github.com/twilio-labs/paste/issues/837)) ([2932aad](https://github.com/twilio-labs/paste/commit/2932aada2774fe37e0216bc108765d26ab6a95a6))

## [1.0.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.30...@twilio-paste/modal@1.0.31) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.29...@twilio-paste/modal@1.0.30) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.28...@twilio-paste/modal@1.0.29) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.27...@twilio-paste/modal@1.0.28) (2020-10-07)

### Bug Fixes

- **modal:** fix console-patch jank by removing animation on modal close ([#820](https://github.com/twilio-labs/paste/issues/820)) ([dc2c436](https://github.com/twilio-labs/paste/commit/dc2c436488c44ff2a69399ecc6b8746e7db851ae))

## [1.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.26...@twilio-paste/modal@1.0.27) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.25...@twilio-paste/modal@1.0.26) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.24...@twilio-paste/modal@1.0.25) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.23...@twilio-paste/modal@1.0.24) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.22...@twilio-paste/modal@1.0.23) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.21...@twilio-paste/modal@1.0.22) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.20...@twilio-paste/modal@1.0.21) (2020-09-15)

### Bug Fixes

- **modal:** adjust zIndex for popovers and tooltips ([7b62d58](https://github.com/twilio-labs/paste/commit/7b62d58cf67a59d7a2a2901fb333a3d9af2587d5))

## [1.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.19...@twilio-paste/modal@1.0.20) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.18...@twilio-paste/modal@1.0.19) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.17...@twilio-paste/modal@1.0.18) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.16...@twilio-paste/modal@1.0.17) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.15...@twilio-paste/modal@1.0.16) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.14...@twilio-paste/modal@1.0.15) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.13...@twilio-paste/modal@1.0.14) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.12...@twilio-paste/modal@1.0.13) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.11...@twilio-paste/modal@1.0.12) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.10...@twilio-paste/modal@1.0.11) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.9...@twilio-paste/modal@1.0.10) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.8...@twilio-paste/modal@1.0.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.7...@twilio-paste/modal@1.0.8) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.6...@twilio-paste/modal@1.0.7) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.5...@twilio-paste/modal@1.0.6) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.4...@twilio-paste/modal@1.0.5) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.3...@twilio-paste/modal@1.0.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.2...@twilio-paste/modal@1.0.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.1...@twilio-paste/modal@1.0.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/modal

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@1.0.0...@twilio-paste/modal@1.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/modal

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.27...@twilio-paste/modal@1.0.0) (2020-08-05)

### Bug Fixes

- **icons:** use display=block by default and rename 'iconColor' prop to 'color' ([#637](https://github.com/twilio-labs/paste/issues/637)) ([82beef4](https://github.com/twilio-labs/paste/commit/82beef487c514b2eab5c40b1ef1409842dd4ca82))

### BREAKING CHANGES

- **icons:** This change renames a key prop and changes the display mode from inline-flex to block

- fix: use new icon prop (iconColor -> color)

- test: update snapshots

- chore(icons): update readme to mention correct display value

Co-authored-by: Rich Bachman <rb@richbachman.com>

- chore(website): update icon doc prop table

Co-authored-by: Rich Bachman <rb@richbachman.com>

Co-authored-by: Rich Bachman <rb@richbachman.com>

## [0.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.26...@twilio-paste/modal@0.2.27) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.25...@twilio-paste/modal@0.2.26) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.24...@twilio-paste/modal@0.2.25) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.23...@twilio-paste/modal@0.2.24) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.22...@twilio-paste/modal@0.2.23) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.21...@twilio-paste/modal@0.2.22) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.20...@twilio-paste/modal@0.2.21) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.19...@twilio-paste/modal@0.2.20) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.18...@twilio-paste/modal@0.2.19) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.17...@twilio-paste/modal@0.2.18) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.16...@twilio-paste/modal@0.2.17) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.15...@twilio-paste/modal@0.2.16) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.14...@twilio-paste/modal@0.2.15) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.13...@twilio-paste/modal@0.2.14) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.12...@twilio-paste/modal@0.2.13) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.11...@twilio-paste/modal@0.2.12) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.10...@twilio-paste/modal@0.2.11) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.9...@twilio-paste/modal@0.2.10) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.8...@twilio-paste/modal@0.2.9) (2020-06-24)

### Bug Fixes

- **modal:** add '\_\_console_patch' prop to fix bug in Console ([#522](https://github.com/twilio-labs/paste/issues/522)) ([7aaf812](https://github.com/twilio-labs/paste/commit/7aaf81232b35de4beb1c5635aabf3bc63383c196))

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.7...@twilio-paste/modal@0.2.8) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.6...@twilio-paste/modal@0.2.7) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.5...@twilio-paste/modal@0.2.6) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.4...@twilio-paste/modal@0.2.5) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.3...@twilio-paste/modal@0.2.4) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.2...@twilio-paste/modal@0.2.3) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.1...@twilio-paste/modal@0.2.2) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/modal

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.2.0...@twilio-paste/modal@0.2.1) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/modal

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.18...@twilio-paste/modal@0.2.0) (2020-06-01)

### Features

- **modal:** animate modal open & close transitions ([547d4f4](https://github.com/twilio-labs/paste/commit/547d4f45d08097756ac3cd924fb7bba89a941ba7))

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.17...@twilio-paste/modal@0.1.18) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.16...@twilio-paste/modal@0.1.17) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.15...@twilio-paste/modal@0.1.16) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.14...@twilio-paste/modal@0.1.15) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.13...@twilio-paste/modal@0.1.14) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.12...@twilio-paste/modal@0.1.13) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.11...@twilio-paste/modal@0.1.12) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.10...@twilio-paste/modal@0.1.11) (2020-04-29)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.9...@twilio-paste/modal@0.1.10) (2020-04-28)

### Bug Fixes

- **modal:** reset margin on heading, add zIndex to overlay ([#409](https://github.com/twilio-labs/paste/issues/409)) ([69179c4](https://github.com/twilio-labs/paste/commit/69179c49f08045950f2306e128dcdf1eb824cea1))

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.8...@twilio-paste/modal@0.1.9) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.7...@twilio-paste/modal@0.1.8) (2020-04-24)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.6...@twilio-paste/modal@0.1.7) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.5...@twilio-paste/modal@0.1.6) (2020-04-20)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.4...@twilio-paste/modal@0.1.5) (2020-04-17)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.3...@twilio-paste/modal@0.1.4) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.2...@twilio-paste/modal@0.1.3) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.1...@twilio-paste/modal@0.1.2) (2020-04-09)

**Note:** Version bump only for package @twilio-paste/modal

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/modal@0.1.0...@twilio-paste/modal@0.1.1) (2020-04-08)

### Bug Fixes

- **modal:** package dependencies updated to be correct ([22e114f](https://github.com/twilio-labs/paste/commit/22e114f0657325bc7bd34ec046f73712017bfd0f))

# 0.1.0 (2020-04-07)

### Features

- **modal:** create the modal package ([c348402](https://github.com/twilio-labs/paste/commit/c3484028678cb0a817003b9a78d2ee13a4e3a821))
