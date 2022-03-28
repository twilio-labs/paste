# Change Log

## 3.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 3.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 3.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 2.2.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 2.2.0

### Minor Changes

- [`d14381b9`](https://github.com/twilio-labs/paste/commit/d14381b96ab3e83d4987b91db755ed27d315b3c6) [#1742](https://github.com/twilio-labs/paste/pull/1742) Thanks [@gloriliale](https://github.com/gloriliale)! - [Avatar] Enable Avatar to respect customizations set on the customization provider. Avatar now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 2.1.1

### Patch Changes

- [`64edb7fc`](https://github.com/twilio-labs/paste/commit/64edb7fc6d1305c9fdf37b86933484732fab3ff7) [#1367](https://github.com/twilio-labs/paste/pull/1367) Thanks [@nkrantz](https://github.com/nkrantz)! - Restricted Avatar propTypes so that users cannot add both `src` and `icon` props to Avatar, only one or the other.

* [`fd8cbb89`](https://github.com/twilio-labs/paste/commit/fd8cbb89a9459fd5e012cba8f45060ad2e384e24) [#1345](https://github.com/twilio-labs/paste/pull/1345) Thanks [@gloriliale](https://github.com/gloriliale)! - Avatar: fixed size prop to make it optional and have a default of icon-size-70.

## 2.1.0

### Minor Changes

- [`3419ff64`](https://github.com/twilio-labs/paste/commit/3419ff64a07056ae365956d03ec62f1e5e619f29) [#1281](https://github.com/twilio-labs/paste/pull/1281) Thanks [@nkrantz](https://github.com/nkrantz)! - Created an 'icon' prop on Avatar so that users can display Paste icons inside of Avatar components.

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 2.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/style-props@3.0.0

## 1.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/style-props@2.0.0

## 0.4.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/text@2.5.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.4.0...@twilio-paste/avatar@0.4.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.3...@twilio-paste/avatar@0.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.2...@twilio-paste/avatar@0.3.3) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.1...@twilio-paste/avatar@0.3.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.0...@twilio-paste/avatar@0.3.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.29...@twilio-paste/avatar@0.3.0) (2020-12-17)

### Bug Fixes

- **avatar:** add forwardRef ([f6f72f1](https://github.com/twilio-labs/paste/commit/f6f72f1c4915f783ee289fbff8ea24313616db56))

### BREAKING CHANGES

- **avatar:** component is now using fowardRef

## [0.2.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.28...@twilio-paste/avatar@0.2.29) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.27...@twilio-paste/avatar@0.2.28) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.26...@twilio-paste/avatar@0.2.27) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.25...@twilio-paste/avatar@0.2.26) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.24...@twilio-paste/avatar@0.2.25) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.23...@twilio-paste/avatar@0.2.24) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.22...@twilio-paste/avatar@0.2.23) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.21...@twilio-paste/avatar@0.2.22) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.20...@twilio-paste/avatar@0.2.21) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.19...@twilio-paste/avatar@0.2.20) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.18...@twilio-paste/avatar@0.2.19) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.17...@twilio-paste/avatar@0.2.18) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.16...@twilio-paste/avatar@0.2.17) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.15...@twilio-paste/avatar@0.2.16) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.14...@twilio-paste/avatar@0.2.15) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.13...@twilio-paste/avatar@0.2.14) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.12...@twilio-paste/avatar@0.2.13) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.11...@twilio-paste/avatar@0.2.12) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.10...@twilio-paste/avatar@0.2.11) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.9...@twilio-paste/avatar@0.2.10) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.8...@twilio-paste/avatar@0.2.9) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.7...@twilio-paste/avatar@0.2.8) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.6...@twilio-paste/avatar@0.2.7) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.5...@twilio-paste/avatar@0.2.6) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.4...@twilio-paste/avatar@0.2.5) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.3...@twilio-paste/avatar@0.2.4) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.2...@twilio-paste/avatar@0.2.3) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.1...@twilio-paste/avatar@0.2.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.0...@twilio-paste/avatar@0.2.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.7...@twilio-paste/avatar@0.2.0) (2020-08-11)

### Features

- **avatar:** change background and font weight for initials ([bf97215](https://github.com/twilio-labs/paste/commit/bf97215ee0dbef97b6acc0238e66b1233c2e6a7d))

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.6...@twilio-paste/avatar@0.1.7) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.5...@twilio-paste/avatar@0.1.6) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.4...@twilio-paste/avatar@0.1.5) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.3...@twilio-paste/avatar@0.1.4) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.2...@twilio-paste/avatar@0.1.3) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.1...@twilio-paste/avatar@0.1.2) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.0...@twilio-paste/avatar@0.1.1) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.0.2...@twilio-paste/avatar@0.1.0) (2020-07-15)

### Features

- **avatar:** alpha component build ([b2f6570](https://github.com/twilio-labs/paste/commit/b2f6570057f4f177f4a82a5d42bfaae84ca5c300))
