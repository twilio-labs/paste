# Change Log

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/card@2.0.0
  - @twilio-paste/heading@4.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 2.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/card@1.5.2
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/heading@3.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/disclosure-primitive@0.3.2

## 2.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0

## 1.0.0

### Major Changes

- [`b8265071`](https://github.com/twilio-labs/paste/commit/b82650716256de22aeff36e00d46577f71d1b3fd) [#1113](https://github.com/twilio-labs/paste/pull/1113) Thanks [@richbachman](https://github.com/richbachman)! - BREAKING CHANGE: style prop is now being blocked by safelySpreadBoxProps, so any additional styles will no longer be rendered.

  Style changes:

  - Added colorBackgroundBody to DisclosureHeading
  - Added colorBackgroundDark to DisclosureHeading on hover
  - Added colorBackground to DisclosureHeading when expanded
  - Changed the DisclosureHeading icon to ChevronDisclosureExpandedIcon
  - Added colorText to icon when hovering on DisclosureHeading
  - Icon animates when hovering on DisclosureHeading

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.4.0...@twilio-paste/disclosure@0.4.1) (2021-01-25)

### Bug Fixes

- **disclosure:** missing type export ([0a954a7](https://github.com/twilio-labs/paste/commit/0a954a7e402160c19e6698a1a2ca1d42a1c54825))

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.3.6...@twilio-paste/disclosure@0.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.3.5...@twilio-paste/disclosure@0.3.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.3.4...@twilio-paste/disclosure@0.3.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.3.3...@twilio-paste/disclosure@0.3.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.3.2...@twilio-paste/disclosure@0.3.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.3.1...@twilio-paste/disclosure@0.3.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.3.0...@twilio-paste/disclosure@0.3.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/disclosure

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.49...@twilio-paste/disclosure@0.3.0) (2020-12-17)

### Bug Fixes

- **disclosure:** add forwardRef ([c8835fb](https://github.com/twilio-labs/paste/commit/c8835fbd334756b064ad9904cd58c737db462afc))

### BREAKING CHANGES

- **disclosure:** component is now using fowardRef

## [0.2.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.48...@twilio-paste/disclosure@0.2.49) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.47...@twilio-paste/disclosure@0.2.48) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.46...@twilio-paste/disclosure@0.2.47) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.45...@twilio-paste/disclosure@0.2.46) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.44...@twilio-paste/disclosure@0.2.45) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.43...@twilio-paste/disclosure@0.2.44) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.42...@twilio-paste/disclosure@0.2.43) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.41...@twilio-paste/disclosure@0.2.42) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.40...@twilio-paste/disclosure@0.2.41) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.39...@twilio-paste/disclosure@0.2.40) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.38...@twilio-paste/disclosure@0.2.39) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.37...@twilio-paste/disclosure@0.2.38) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.36...@twilio-paste/disclosure@0.2.37) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.35...@twilio-paste/disclosure@0.2.36) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.34...@twilio-paste/disclosure@0.2.35) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.33...@twilio-paste/disclosure@0.2.34) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.32...@twilio-paste/disclosure@0.2.33) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.31...@twilio-paste/disclosure@0.2.32) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.30...@twilio-paste/disclosure@0.2.31) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.29...@twilio-paste/disclosure@0.2.30) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.28...@twilio-paste/disclosure@0.2.29) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.27...@twilio-paste/disclosure@0.2.28) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.26...@twilio-paste/disclosure@0.2.27) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.25...@twilio-paste/disclosure@0.2.26) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.24...@twilio-paste/disclosure@0.2.25) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.23...@twilio-paste/disclosure@0.2.24) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.22...@twilio-paste/disclosure@0.2.23) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.21...@twilio-paste/disclosure@0.2.22) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.20...@twilio-paste/disclosure@0.2.21) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.19...@twilio-paste/disclosure@0.2.20) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.18...@twilio-paste/disclosure@0.2.19) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.17...@twilio-paste/disclosure@0.2.18) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.16...@twilio-paste/disclosure@0.2.17) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.15...@twilio-paste/disclosure@0.2.16) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.14...@twilio-paste/disclosure@0.2.15) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.13...@twilio-paste/disclosure@0.2.14) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.12...@twilio-paste/disclosure@0.2.13) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.11...@twilio-paste/disclosure@0.2.12) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.10...@twilio-paste/disclosure@0.2.11) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.9...@twilio-paste/disclosure@0.2.10) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.8...@twilio-paste/disclosure@0.2.9) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.7...@twilio-paste/disclosure@0.2.8) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.6...@twilio-paste/disclosure@0.2.7) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.5...@twilio-paste/disclosure@0.2.6) (2020-08-05)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.4...@twilio-paste/disclosure@0.2.5) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.3...@twilio-paste/disclosure@0.2.4) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.2...@twilio-paste/disclosure@0.2.3) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.1...@twilio-paste/disclosure@0.2.2) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.2.0...@twilio-paste/disclosure@0.2.1) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/disclosure

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.10...@twilio-paste/disclosure@0.2.0) (2020-07-28)

### Features

- **disclosure:** add state prop ([9ce28b4](https://github.com/twilio-labs/paste/commit/9ce28b43b2d9e58544b84900f175c63246deb87e))

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.9...@twilio-paste/disclosure@0.1.10) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.8...@twilio-paste/disclosure@0.1.9) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.7...@twilio-paste/disclosure@0.1.8) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.6...@twilio-paste/disclosure@0.1.7) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.5...@twilio-paste/disclosure@0.1.6) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.4...@twilio-paste/disclosure@0.1.5) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.3...@twilio-paste/disclosure@0.1.4) (2020-07-13)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.2...@twilio-paste/disclosure@0.1.3) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.1...@twilio-paste/disclosure@0.1.2) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/disclosure

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.1.0...@twilio-paste/disclosure@0.1.1) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/disclosure

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/disclosure@0.0.2...@twilio-paste/disclosure@0.1.0) (2020-07-01)

### Features

- **disclosure:** create component package ([6911efb](https://github.com/twilio-labs/paste/commit/6911efb693640397fd5a3693f04090b0b8f16c21))
