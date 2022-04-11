# Change Log

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

## 7.0.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.0.0

### Major Changes

- [`fa2ffc5c`](https://github.com/twilio-labs/paste/commit/fa2ffc5cf4da037dcfa0894d033665720cc70ab4) [#1603](https://github.com/twilio-labs/paste/pull/1603) Thanks [@andipants12](https://github.com/andipants12)! - [Truncate] Added the title prop to show full non-truncated text
  BREAKING CHANGE: `title` prop is now required for the Truncate component.

## 6.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- [`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592) [#1228](https://github.com/twilio-labs/paste/pull/1228) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Bump status of the component to production

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@2.1.0...@twilio-paste/truncate@2.1.1) (2021-01-25)

### Bug Fixes

- **truncate:** correctly extend html span attribute typings ([e2783d3](https://github.com/twilio-labs/paste/commit/e2783d38343b04861d4811356df2dbbb237b39af))

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@2.0.5...@twilio-paste/truncate@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@2.0.4...@twilio-paste/truncate@2.0.5) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/truncate

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@2.0.3...@twilio-paste/truncate@2.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/truncate

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@2.0.2...@twilio-paste/truncate@2.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/truncate

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@2.0.1...@twilio-paste/truncate@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/truncate

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@2.0.0...@twilio-paste/truncate@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/truncate

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.15...@twilio-paste/truncate@2.0.0) (2020-12-17)

### Bug Fixes

- **truncate:** add forwardRef, use box ([b8f74d4](https://github.com/twilio-labs/paste/commit/b8f74d4a3edf1ca8ea4cd46fd15ede69a87ade41))

### BREAKING CHANGES

- **truncate:** component is now using fowardRef

## [1.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.14...@twilio-paste/truncate@1.0.15) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.13...@twilio-paste/truncate@1.0.14) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.12...@twilio-paste/truncate@1.0.13) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.11...@twilio-paste/truncate@1.0.12) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.10...@twilio-paste/truncate@1.0.11) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.9...@twilio-paste/truncate@1.0.10) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.8...@twilio-paste/truncate@1.0.9) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.7...@twilio-paste/truncate@1.0.8) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.6...@twilio-paste/truncate@1.0.7) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.5...@twilio-paste/truncate@1.0.6) (2020-03-20)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.4...@twilio-paste/truncate@1.0.5) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.3...@twilio-paste/truncate@1.0.4) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/truncate

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.2...@twilio-paste/truncate@1.0.3) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.1...@twilio-paste/truncate@1.0.2) (2020-02-14)

### Bug Fixes

- **truncate:** add missing peer deps ([9b62eda](https://github.com/twilio-labs/paste/commit/9b62edac27fef7f1caeddb1286a484f27f9dbfef))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@1.0.0...@twilio-paste/truncate@1.0.1) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/truncate

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@0.2.0...@twilio-paste/truncate@1.0.0) (2019-11-11)

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

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@0.1.4...@twilio-paste/truncate@0.2.0) (2019-10-29)

### Features

- finalise the Text component ([#151](https://github.com/twilio-labs/paste/issues/151)) ([b51c272](https://github.com/twilio-labs/paste/commit/b51c272cf420380f73c31c3474ebdf23cb7cad3a))

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/truncate@0.1.3...@twilio-paste/truncate@0.1.4) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/truncate

## 0.1.3 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
