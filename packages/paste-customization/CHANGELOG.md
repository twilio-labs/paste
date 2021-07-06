# Change Log

## 2.1.1

### Patch Changes

- [`66285238`](https://github.com/twilio-labs/paste/commit/66285238c23b1ac756a6bf30af0ece5a45a0ddc7) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Switch lodash.merge with deepmerge for significant bundle size savings

* [`f2594fca`](https://github.com/twilio-labs/paste/commit/f2594fca7955014922f83d1d4c28df385ee519a5) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Customization] minor change to the elements prop type to change the `variant` to the `variants` key to more closely match styled system. Also correct the elements type to use a string key for the element names

- [`72cdd336`](https://github.com/twilio-labs/paste/commit/72cdd336bcbf9e00befbc2e8e39c7acfa1fed190) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Ensure that the elements object cannot have duplicate element names, even across different casings of the names

## 2.1.0

### Minor Changes

- [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3) [#1509](https://github.com/twilio-labs/paste/pull/1509) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [customization]: add ability for customization provider to accept an elements prop which it then merges into the styled theme context.

  Also add the ability to choose which base theme is used when customizing a theme, for use in programmable apps. You can choose from Default or Dark theme as your starting point.

## 2.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 2.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0

## 1.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/theme@4.3.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0

## 0.2.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/customization@0.2.0...@twilio-paste/customization@0.2.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/customization

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/customization@0.1.4...@twilio-paste/customization@0.2.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/customization@0.1.3...@twilio-paste/customization@0.1.4) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/customization

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/customization@0.1.2...@twilio-paste/customization@0.1.3) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/customization

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/customization@0.1.1...@twilio-paste/customization@0.1.2) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/customization

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/customization@0.1.0...@twilio-paste/customization@0.1.1) (2020-12-11)

### Bug Fixes

- **customization:** add public access for npm publish ([dc8912a](https://github.com/twilio-labs/paste/commit/dc8912a0a160e183476e3f61fab79dc5c61c4258))

# 0.1.0 (2020-12-11)

### Bug Fixes

- **customization:** switch typings for generic theme to theme package ([3a91b24](https://github.com/twilio-labs/paste/commit/3a91b24cf1779839e8d1943ab5b640fe2461e01e))

### Features

- **customization:** add customization provider ([2b1e6da](https://github.com/twilio-labs/paste/commit/2b1e6da52354051ebdf062263db039258e2b23cd))
