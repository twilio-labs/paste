# Change Log

## 3.0.6

### Patch Changes

- [`0347aef6`](https://github.com/twilio-labs/paste/commit/0347aef6e8100f9dbc2bcd8830dd5c81b4de5a03) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [TextArea] Added the `element` prop for customization in order to fix a Typescript error after the `element` prop was added as a required prop for `InputBox`. This does not include any default naming, tests, or stories. It only fixes the Typescript error.

## 3.0.5

### Patch Changes

- [`87fc9178`](https://github.com/twilio-labs/paste/commit/87fc91784c86d25f619aa49a9f0586d9e3be97d0) [#1408](https://github.com/twilio-labs/paste/pull/1408) Thanks [@richbachman](https://github.com/richbachman)! - Fix disabled value color in Safari.

* [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a) [#1398](https://github.com/twilio-labs/paste/pull/1398) Thanks [@zahnster](https://github.com/zahnster)! - Updated font weights for all form components to make them bolder

## 3.0.4

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 3.0.3

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/input-box@4.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 3.0.2

### Patch Changes

- [`953f88bb`](https://github.com/twilio-labs/paste/commit/953f88bbb5476e5fdb66af3397634b8de822769f) [#1251](https://github.com/twilio-labs/paste/pull/1251) Thanks [@richbachman](https://github.com/richbachman)! - Removed required from the `id` prop, so TextArea can be used as an uncontrolled component. This allows TextArea to be used with libraries like `React-Hook-Form`.

## 3.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/input-box@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/input-box@4.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/style-props@3.0.0

## 2.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/input-box@3.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/input-box@3.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/style-props@2.0.0

## 1.2.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/input-box@2.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.2.0...@twilio-paste/textarea@1.2.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/textarea

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.21...@twilio-paste/textarea@1.2.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.20...@twilio-paste/textarea@1.1.21) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.19...@twilio-paste/textarea@1.1.20) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.18...@twilio-paste/textarea@1.1.19) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.17...@twilio-paste/textarea@1.1.18) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.16...@twilio-paste/textarea@1.1.17) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.15...@twilio-paste/textarea@1.1.16) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.14...@twilio-paste/textarea@1.1.15) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.13...@twilio-paste/textarea@1.1.14) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.12...@twilio-paste/textarea@1.1.13) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.11...@twilio-paste/textarea@1.1.12) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.10...@twilio-paste/textarea@1.1.11) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.9...@twilio-paste/textarea@1.1.10) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.8...@twilio-paste/textarea@1.1.9) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.7...@twilio-paste/textarea@1.1.8) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.6...@twilio-paste/textarea@1.1.7) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.5...@twilio-paste/textarea@1.1.6) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.4...@twilio-paste/textarea@1.1.5) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.3...@twilio-paste/textarea@1.1.4) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.2...@twilio-paste/textarea@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.1...@twilio-paste/textarea@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/textarea

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@1.1.0...@twilio-paste/textarea@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/textarea

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/textarea@0.0.2...@twilio-paste/textarea@1.1.0) (2020-10-07)

### Features

- **textarea:** create the package ([5116124](https://github.com/twilio-labs/paste/commit/5116124b2a51c51192c9c39159dc72b1e2ef2c2d))
