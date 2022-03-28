# Change Log

## 6.1.0

### Minor Changes

- [`badff092`](https://github.com/twilio-labs/paste/commit/badff092245be305f4696ea2999764ce931fea6d) [#2306](https://github.com/twilio-labs/paste/pull/2306) Thanks [@nkrantz](https://github.com/nkrantz)! - [Anchor] add `i18nshowExternalLinkLabel`prop to Anchor

## 6.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 6.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 6.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0

## 5.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 5.1.1

### Patch Changes

- [`193f0d12`](https://github.com/twilio-labs/paste/commit/193f0d122893a6d165b93d2ca561621c58f9e39d) [#1969](https://github.com/twilio-labs/paste/pull/1969) Thanks [@TheSisb](https://github.com/TheSisb)! - [Anchor] Fixed the missing underline in Firefox. Also improved how external anchors wrap with their icons.

## 5.1.0

### Minor Changes

- [`5374cd7b`](https://github.com/twilio-labs/paste/commit/5374cd7b261431b337a53ce26850fda242812e19) [#1733](https://github.com/twilio-labs/paste/pull/1733) Thanks [@TheSisb](https://github.com/TheSisb)! - [Anchor] Enable Anchor to respect element customizations set on the customization provider. Anchor now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 5.0.3

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 5.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 5.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0

## 4.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/icons@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 3.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 2.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.4.0...@twilio-paste/anchor@1.4.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/anchor

# [1.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.31...@twilio-paste/anchor@1.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [1.3.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.30...@twilio-paste/anchor@1.3.31) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.29...@twilio-paste/anchor@1.3.30) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.28...@twilio-paste/anchor@1.3.29) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.27...@twilio-paste/anchor@1.3.28) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.26...@twilio-paste/anchor@1.3.27) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.25...@twilio-paste/anchor@1.3.26) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.24...@twilio-paste/anchor@1.3.25) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.23...@twilio-paste/anchor@1.3.24) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.22...@twilio-paste/anchor@1.3.23) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.21...@twilio-paste/anchor@1.3.22) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.20...@twilio-paste/anchor@1.3.21) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.19...@twilio-paste/anchor@1.3.20) (2020-11-19)

### Bug Fixes

- **anchor:** change hover, focus, active color for accessibility ([1c76dd3](https://github.com/twilio-labs/paste/commit/1c76dd32b21c529b44ad399647e4b3122f846852))

## [1.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.18...@twilio-paste/anchor@1.3.19) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.17...@twilio-paste/anchor@1.3.18) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.16...@twilio-paste/anchor@1.3.17) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.15...@twilio-paste/anchor@1.3.16) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.14...@twilio-paste/anchor@1.3.15) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.13...@twilio-paste/anchor@1.3.14) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.12...@twilio-paste/anchor@1.3.13) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.11...@twilio-paste/anchor@1.3.12) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.10...@twilio-paste/anchor@1.3.11) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.9...@twilio-paste/anchor@1.3.10) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.8...@twilio-paste/anchor@1.3.9) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.7...@twilio-paste/anchor@1.3.8) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.6...@twilio-paste/anchor@1.3.7) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.5...@twilio-paste/anchor@1.3.6) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.4...@twilio-paste/anchor@1.3.5) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.3...@twilio-paste/anchor@1.3.4) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.2...@twilio-paste/anchor@1.3.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.1...@twilio-paste/anchor@1.3.2) (2020-09-25)

### Bug Fixes

- **anchor:** allow layout and space props ([#792](https://github.com/twilio-labs/paste/issues/792)) ([b7f61ea](https://github.com/twilio-labs/paste/commit/b7f61ea64875b711d7035bef045b0a161f489605))

## [1.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.3.0...@twilio-paste/anchor@1.3.1) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/anchor

# [1.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.2.5...@twilio-paste/anchor@1.3.0) (2020-09-21)

### Features

- **anchor:** ability to show external link icon ([3ed03c1](https://github.com/twilio-labs/paste/commit/3ed03c17e94982507ae86feca07d9c297c874d63))

## [1.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.2.4...@twilio-paste/anchor@1.2.5) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.2.3...@twilio-paste/anchor@1.2.4) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.2.2...@twilio-paste/anchor@1.2.3) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.2.1...@twilio-paste/anchor@1.2.2) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.2.0...@twilio-paste/anchor@1.2.1) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/anchor

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.44...@twilio-paste/anchor@1.2.0) (2020-09-02)

### Features

- **anchor:** add inverse variant ([e7f8072](https://github.com/twilio-labs/paste/commit/e7f807201850962cb405e67611bc58a8b496daa3))

## [1.1.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.43...@twilio-paste/anchor@1.1.44) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.42...@twilio-paste/anchor@1.1.43) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.41...@twilio-paste/anchor@1.1.42) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.40...@twilio-paste/anchor@1.1.41) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.39...@twilio-paste/anchor@1.1.40) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.38...@twilio-paste/anchor@1.1.39) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.37...@twilio-paste/anchor@1.1.38) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.36...@twilio-paste/anchor@1.1.37) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.35...@twilio-paste/anchor@1.1.36) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.34...@twilio-paste/anchor@1.1.35) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.33...@twilio-paste/anchor@1.1.34) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.32...@twilio-paste/anchor@1.1.33) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.31...@twilio-paste/anchor@1.1.32) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.30...@twilio-paste/anchor@1.1.31) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.29...@twilio-paste/anchor@1.1.30) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.28...@twilio-paste/anchor@1.1.29) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.27...@twilio-paste/anchor@1.1.28) (2020-07-02)

### Bug Fixes

- **anchor:** rework anchor to forward ref ([77d6466](https://github.com/twilio-labs/paste/commit/77d6466935700ecfbe6c6a3610db90fceace1eed))

## [1.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.26...@twilio-paste/anchor@1.1.27) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.25...@twilio-paste/anchor@1.1.26) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.24...@twilio-paste/anchor@1.1.25) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.23...@twilio-paste/anchor@1.1.24) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.22...@twilio-paste/anchor@1.1.23) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.21...@twilio-paste/anchor@1.1.22) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.20...@twilio-paste/anchor@1.1.21) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.19...@twilio-paste/anchor@1.1.20) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.18...@twilio-paste/anchor@1.1.19) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.17...@twilio-paste/anchor@1.1.18) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.16...@twilio-paste/anchor@1.1.17) (2020-05-27)

### Bug Fixes

- **anchor:** export securing external links ([b3e2c58](https://github.com/twilio-labs/paste/commit/b3e2c581abe3060ad694443b53125a7facefb3b3))

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.15...@twilio-paste/anchor@1.1.16) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.14...@twilio-paste/anchor@1.1.15) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.13...@twilio-paste/anchor@1.1.14) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.12...@twilio-paste/anchor@1.1.13) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.11...@twilio-paste/anchor@1.1.12) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.10...@twilio-paste/anchor@1.1.11) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.9...@twilio-paste/anchor@1.1.10) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.8...@twilio-paste/anchor@1.1.9) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.7...@twilio-paste/anchor@1.1.8) (2020-04-08)

### Bug Fixes

- **anchor:** package dependencies updated to be correct ([233ebb8](https://github.com/twilio-labs/paste/commit/233ebb8a44fd79e258ffb28826f4919dd112c906))

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.6...@twilio-paste/anchor@1.1.7) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.5...@twilio-paste/anchor@1.1.6) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.4...@twilio-paste/anchor@1.1.5) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.3...@twilio-paste/anchor@1.1.4) (2020-03-24)

### Bug Fixes

- **anchor:** switch from theme-tokens to theme package dep ([b5451f4](https://github.com/twilio-labs/paste/commit/b5451f462c32954e9ae83b05f71ccfaabc403a1d))

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.2...@twilio-paste/anchor@1.1.3) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.1...@twilio-paste/anchor@1.1.2) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.0...@twilio-paste/anchor@1.1.1) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/anchor

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.7...@twilio-paste/anchor@1.1.0) (2020-03-11)

### Features

- **anchor:** add style props for layout and space ([7d46ed5](https://github.com/twilio-labs/paste/commit/7d46ed521e68bdd22ec780af363bf4976fb87b17))

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.6...@twilio-paste/anchor@1.0.7) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.5...@twilio-paste/anchor@1.0.6) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.4...@twilio-paste/anchor@1.0.5) (2020-02-07)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.3...@twilio-paste/anchor@1.0.4) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.2...@twilio-paste/anchor@1.0.3) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/anchor

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.1...@twilio-paste/anchor@1.0.2) (2019-11-18)

### Bug Fixes

- **design-tokens:** change color-text-link token values ([#172](https://github.com/twilio-labs/paste/issues/172)) ([f0a215c](https://github.com/twilio-labs/paste/commit/f0a215cb283f74f268387e744099e337c6489ebd))
- **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.0...@twilio-paste/anchor@1.0.1) (2019-11-12)

### Bug Fixes

- **anchor:** fix hover color ([#178](https://github.com/twilio-labs/paste/issues/178)) ([ba37e97](https://github.com/twilio-labs/paste/commit/ba37e9786797d167bf1806ba21ad30eca609b548))

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.2.1...@twilio-paste/anchor@1.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- enable theme switching on the docsite ([#124](https://github.com/twilio-labs/paste/issues/124)) ([df797e5](https://github.com/twilio-labs/paste/commit/df797e57ff1268367053d717f3b3c2ca48a0aa4f))

### BREAKING CHANGES

- **icons:** removed all the inherited icons since we're moving to a new system

- chore(icons): update icon list for storybook

- fix(spinner): use new icon

- fix(storybook): use new icon for story

- fix(story): button icons should be 24px

- fix: adjust icon size tokens

- feat: add iconSizes as separate key in theme-tokens

- feat(icons): icons package to use tokens and update icons

- fix(spinner): update to use tokens and new icons

- fix(button): use correct spinner size

- fix(icons): major icons package fixes

* huge overhaul to build process
* now uses rollup
* builds into cjs and esm directories
* made the package publishable to npm
* moved svg folder out of src, now src only holds react stuff
* updated scripts to use new paths and cleaned up the code
* programmatically generates rollup config from the icon-list command

- chore: add new icons dist folders to gitignore

- fix: spinner and button icon usage

- feat(icons): add rollup icon list cache file

- fix(core-bundle): sort packages for consistent builds

- chore: use `esm` instead of `es` in rollup for correctness

- chore: yarn.lock

- fix(spinner): lint error

- chore(icons): move rollup icon list

- chore(spinner): use types package in story

- fix(spinner): swap out destructured props for explicit props

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.2.0...@twilio-paste/anchor@0.2.1) (2019-10-31)

### Bug Fixes

- **anchor:** change hover styles ([#155](https://github.com/twilio-labs/paste/issues/155)) ([5172b0b](https://github.com/twilio-labs/paste/commit/5172b0bb761e6c8334aac7fd94e615cac705d242))
- **anchor:** export types and add tests ([#153](https://github.com/twilio-labs/paste/issues/153)) ([4086ee2](https://github.com/twilio-labs/paste/commit/4086ee28da829820ca8f791e4bddf2768bd8b2f9))

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.1.5...@twilio-paste/anchor@0.2.0) (2019-10-29)

### Features

- **website:** SiteLink Component, replace Link with SiteLink ([#135](https://github.com/twilio-labs/paste/issues/135)) ([1295a33](https://github.com/twilio-labs/paste/commit/1295a33862b3ad283c4af793e0566f4b0fcba4b5))
- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.1.4...@twilio-paste/anchor@0.1.5) (2019-09-16)

### Bug Fixes

- **anchor:** set children as non-nullable, remove child null error ([#91](https://github.com/twilio-labs/paste/issues/91)) ([1c6d6c5](https://github.com/twilio-labs/paste/commit/1c6d6c5))

## 0.1.4 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
