# Change Log

## 8.1.0

### Minor Changes

- [`68ee1a35e`](https://github.com/twilio-labs/paste/commit/68ee1a35e5aed2bf099be01ceef0d4dbd608c8c1) [#2304](https://github.com/twilio-labs/paste/pull/2304) Thanks [@gloriliale](https://github.com/gloriliale)! - [Spinner] make title an optional prop, throw an error when not decorative and no title

### Patch Changes

- [`dce15da77`](https://github.com/twilio-labs/paste/commit/dce15da77560a10be6a984a96519e68f958e4595) [#2315](https://github.com/twilio-labs/paste/pull/2315) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Spinner] title is no longer required. Matching prop types to typescript types

## 8.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 8.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 8.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0

## 7.2.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.2.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 7.2.0

### Minor Changes

- [`49a0db69`](https://github.com/twilio-labs/paste/commit/49a0db696408a9fa05d7c02c29cf70bd7defc294) [#1894](https://github.com/twilio-labs/paste/pull/1894) Thanks [@andipants12](https://github.com/andipants12)! - [Spinner]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 7.1.0

### Minor Changes

- [`08859377`](https://github.com/twilio-labs/paste/commit/0885937786a51d7ec93624780f6c6c6ffc7f489b) [#1858](https://github.com/twilio-labs/paste/pull/1858) Thanks [@andipants12](https://github.com/andipants12)! - [Spinner]: Our existing Spinner is looking quite dated, so this PR refreshes the appearance of it. There are no breaking changes, so Paste consumers will be happy to see a refreshed Spinner in their apps without any effort.

## 7.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 7.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 7.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0

## 6.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/icons@5.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 5.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 5.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 4.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.1.0...@twilio-paste/spinner@3.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/spinner

# [3.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.5...@twilio-paste/spinner@3.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [3.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.4...@twilio-paste/spinner@3.0.5) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.3...@twilio-paste/spinner@3.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.2...@twilio-paste/spinner@3.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.1...@twilio-paste/spinner@3.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.0...@twilio-paste/spinner@3.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/spinner

# [3.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.41...@twilio-paste/spinner@3.0.0) (2020-12-17)

### Bug Fixes

- **spinner:** add forwardRef ([4045250](https://github.com/twilio-labs/paste/commit/40452503230184816fb1fe0323f37249ae64bc92))

### BREAKING CHANGES

- **spinner:** component is now using fowardRef

## [2.0.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.40...@twilio-paste/spinner@2.0.41) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.39...@twilio-paste/spinner@2.0.40) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.38...@twilio-paste/spinner@2.0.39) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.37...@twilio-paste/spinner@2.0.38) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.36...@twilio-paste/spinner@2.0.37) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.35...@twilio-paste/spinner@2.0.36) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.34...@twilio-paste/spinner@2.0.35) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.33...@twilio-paste/spinner@2.0.34) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.32...@twilio-paste/spinner@2.0.33) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.31...@twilio-paste/spinner@2.0.32) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.30...@twilio-paste/spinner@2.0.31) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.29...@twilio-paste/spinner@2.0.30) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.28...@twilio-paste/spinner@2.0.29) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.27...@twilio-paste/spinner@2.0.28) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.26...@twilio-paste/spinner@2.0.27) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.25...@twilio-paste/spinner@2.0.26) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.24...@twilio-paste/spinner@2.0.25) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.23...@twilio-paste/spinner@2.0.24) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.22...@twilio-paste/spinner@2.0.23) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.21...@twilio-paste/spinner@2.0.22) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.20...@twilio-paste/spinner@2.0.21) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.19...@twilio-paste/spinner@2.0.20) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.18...@twilio-paste/spinner@2.0.19) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.17...@twilio-paste/spinner@2.0.18) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.16...@twilio-paste/spinner@2.0.17) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.15...@twilio-paste/spinner@2.0.16) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.14...@twilio-paste/spinner@2.0.15) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.13...@twilio-paste/spinner@2.0.14) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.12...@twilio-paste/spinner@2.0.13) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.11...@twilio-paste/spinner@2.0.12) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.10...@twilio-paste/spinner@2.0.11) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.9...@twilio-paste/spinner@2.0.10) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.8...@twilio-paste/spinner@2.0.9) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.7...@twilio-paste/spinner@2.0.8) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.6...@twilio-paste/spinner@2.0.7) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.5...@twilio-paste/spinner@2.0.6) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.4...@twilio-paste/spinner@2.0.5) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.3...@twilio-paste/spinner@2.0.4) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.2...@twilio-paste/spinner@2.0.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.1...@twilio-paste/spinner@2.0.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.0...@twilio-paste/spinner@2.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/spinner

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.33...@twilio-paste/spinner@2.0.0) (2020-08-05)

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

## [1.2.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.32...@twilio-paste/spinner@1.2.33) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.31...@twilio-paste/spinner@1.2.32) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.30...@twilio-paste/spinner@1.2.31) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.29...@twilio-paste/spinner@1.2.30) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.28...@twilio-paste/spinner@1.2.29) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.27...@twilio-paste/spinner@1.2.28) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.26...@twilio-paste/spinner@1.2.27) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.25...@twilio-paste/spinner@1.2.26) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.24...@twilio-paste/spinner@1.2.25) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.23...@twilio-paste/spinner@1.2.24) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.22...@twilio-paste/spinner@1.2.23) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.21...@twilio-paste/spinner@1.2.22) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.20...@twilio-paste/spinner@1.2.21) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.19...@twilio-paste/spinner@1.2.20) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.18...@twilio-paste/spinner@1.2.19) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.17...@twilio-paste/spinner@1.2.18) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.16...@twilio-paste/spinner@1.2.17) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.15...@twilio-paste/spinner@1.2.16) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.14...@twilio-paste/spinner@1.2.15) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.13...@twilio-paste/spinner@1.2.14) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.12...@twilio-paste/spinner@1.2.13) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.11...@twilio-paste/spinner@1.2.12) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.10...@twilio-paste/spinner@1.2.11) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.9...@twilio-paste/spinner@1.2.10) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.8...@twilio-paste/spinner@1.2.9) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.7...@twilio-paste/spinner@1.2.8) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.6...@twilio-paste/spinner@1.2.7) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.5...@twilio-paste/spinner@1.2.6) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.4...@twilio-paste/spinner@1.2.5) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.3...@twilio-paste/spinner@1.2.4) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.2...@twilio-paste/spinner@1.2.3) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.1...@twilio-paste/spinner@1.2.2) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.0...@twilio-paste/spinner@1.2.1) (2020-04-20)

**Note:** Version bump only for package @twilio-paste/spinner

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.30...@twilio-paste/spinner@1.2.0) (2020-04-17)

### Features

- **components:** promote text components, spinner and primitive to prod ([5605adc](https://github.com/twilio-labs/paste/commit/5605adc99021be20dafd3fedfeb745490a50c7e7))

## [1.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.29...@twilio-paste/spinner@1.1.30) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.28...@twilio-paste/spinner@1.1.29) (2020-04-08)

### Bug Fixes

- **spinner:** package dependencies updated to be correct ([05b7f6a](https://github.com/twilio-labs/paste/commit/05b7f6a9a2a086e3c0a70038fb7fab7770355de0))

## [1.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.27...@twilio-paste/spinner@1.1.28) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.26...@twilio-paste/spinner@1.1.27) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.25...@twilio-paste/spinner@1.1.26) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.24...@twilio-paste/spinner@1.1.25) (2020-03-24)

### Bug Fixes

- **spinner:** switch from theme-tokens to theme package dep ([0415762](https://github.com/twilio-labs/paste/commit/0415762c6773eff2a8c02f23f6c2603f5ab22cc3))

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.23...@twilio-paste/spinner@1.1.24) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.22...@twilio-paste/spinner@1.1.23) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.21...@twilio-paste/spinner@1.1.22) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.20...@twilio-paste/spinner@1.1.21) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.19...@twilio-paste/spinner@1.1.20) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.18...@twilio-paste/spinner@1.1.19) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.17...@twilio-paste/spinner@1.1.18) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.16...@twilio-paste/spinner@1.1.17) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.15...@twilio-paste/spinner@1.1.16) (2020-02-21)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.14...@twilio-paste/spinner@1.1.15) (2020-02-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.13...@twilio-paste/spinner@1.1.14) (2020-02-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.12...@twilio-paste/spinner@1.1.13) (2020-02-18)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.11...@twilio-paste/spinner@1.1.12) (2020-02-14)

### Bug Fixes

- **spinner:** add missing peer deps ([f4d3d83](https://github.com/twilio-labs/paste/commit/f4d3d8316fe2f91b179c0f468e7fc36e7739d5de))

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.10...@twilio-paste/spinner@1.1.11) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.9...@twilio-paste/spinner@1.1.10) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.8...@twilio-paste/spinner@1.1.9) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.7...@twilio-paste/spinner@1.1.8) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.6...@twilio-paste/spinner@1.1.7) (2020-01-27)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.5...@twilio-paste/spinner@1.1.6) (2020-01-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.4...@twilio-paste/spinner@1.1.5) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.3...@twilio-paste/spinner@1.1.4) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.2...@twilio-paste/spinner@1.1.3) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.1...@twilio-paste/spinner@1.1.2) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.0...@twilio-paste/spinner@1.1.1) (2019-12-05)

### Bug Fixes

- **spinner:** export the prop types with the component ([#206](https://github.com/twilio-labs/paste/issues/206)) ([e073184](https://github.com/twilio-labs/paste/commit/e073184dbec47ae4572732b2962cf28e8521adb4))

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.2...@twilio-paste/spinner@1.1.0) (2019-11-20)

### Features

- **icons:** make decorative required + icon docs ([#165](https://github.com/twilio-labs/paste/issues/165)) ([15ccbc2](https://github.com/twilio-labs/paste/commit/15ccbc2e0f259d60af83bf8503c8ee18a1191cb8))

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.1...@twilio-paste/spinner@1.0.2) (2019-11-18)

### Bug Fixes

- correct button heights add new default icon size ([#186](https://github.com/twilio-labs/paste/issues/186)) ([2e54478](https://github.com/twilio-labs/paste/commit/2e54478f975cb1930bd6d397d1214947db97c2a3))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.0...@twilio-paste/spinner@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/spinner

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.2.0...@twilio-paste/spinner@1.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))

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

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.1.6...@twilio-paste/spinner@0.2.0) (2019-10-29)

### Features

- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.1.5...@twilio-paste/spinner@0.1.6) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/spinner

## 0.1.5 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
- run eslint across the right files and fix any issues that arise. ([#21](https://github.com/twilio-labs/paste/issues/21)) ([2fcc872](https://github.com/twilio-labs/paste/commit/2fcc872))
