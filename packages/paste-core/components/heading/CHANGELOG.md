# Change Log

## 12.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 12.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 11.1.2

### Patch Changes

- [`67c25a7c9`](https://github.com/twilio-labs/paste/commit/67c25a7c9b7bbda3137621182843d2cc44e9cd06) [#3788](https://github.com/twilio-labs/paste/pull/3788) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Heading]: minor adjustment to the bottom margin of the variant 20 heading

## 11.1.1

### Patch Changes

- [`26577a21e`](https://github.com/twilio-labs/paste/commit/26577a21e015ce7c4ecdfc3a4ae97e4012e9cdde) [#3576](https://github.com/twilio-labs/paste/pull/3576) Thanks [@serifluous](https://github.com/serifluous)! - [Heading] Update bottom margin on H2 and H4 by one spacing token step

## 11.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`b48a0f4ea`](https://github.com/twilio-labs/paste/commit/b48a0f4ea67060070c9fbddc3fde505427b83eb5) [#3502](https://github.com/twilio-labs/paste/pull/3502) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Heading]: Improved TsDoc type annotations

## 11.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 10.0.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 10.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- Updated dependencies [[`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 9.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39) [#3010](https://github.com/twilio-labs/paste/pull/3010) Thanks [@shleewhite](https://github.com/shleewhite)! - [Heading] Update styles to align with new Paste Twilio theme

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/text@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 8.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 8.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 8.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/text@7.0.0

## 7.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 7.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/style-props@5.0.0

## 6.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 6.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 6.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/text@5.0.0

## 5.2.0

### Minor Changes

- [`ab0b98bc`](https://github.com/twilio-labs/paste/commit/ab0b98bc78e81731a443234a4f8e32d4f4f6b0a6) [#2088](https://github.com/twilio-labs/paste/pull/2088) Thanks [@gloriliale](https://github.com/gloriliale)! - [Heading] Added the prop "display" to Heading to make aligning Headings with Icons possible

## 5.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 5.1.0

### Minor Changes

- [`2d61c95d`](https://github.com/twilio-labs/paste/commit/2d61c95d09473298e76909b1d20bc705a4e48744) [#1766](https://github.com/twilio-labs/paste/pull/1766) Thanks [@richbachman](https://github.com/richbachman)! - [Heading] Enable Heading to respect element customizations set on the customization provider. Heading now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 5.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 5.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/style-props@2.0.0

## 3.1.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/text@2.5.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@3.1.0...@twilio-paste/heading@3.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/heading

# [3.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@3.0.3...@twilio-paste/heading@3.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [3.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@3.0.2...@twilio-paste/heading@3.0.3) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/heading

## [3.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@3.0.1...@twilio-paste/heading@3.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/heading

## [3.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@3.0.0...@twilio-paste/heading@3.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/heading

# [3.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.1.6...@twilio-paste/heading@3.0.0) (2020-12-17)

### Bug Fixes

- **heading:** add forwardRef ([c88d5a2](https://github.com/twilio-labs/paste/commit/c88d5a21297cef6cb7d2a0602151f7a2e79e5cde))

### BREAKING CHANGES

- **heading:** component is now using fowardRef

## [2.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.1.5...@twilio-paste/heading@2.1.6) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/heading

## [2.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.1.4...@twilio-paste/heading@2.1.5) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/heading

## [2.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.1.3...@twilio-paste/heading@2.1.4) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/heading

## [2.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.1.2...@twilio-paste/heading@2.1.3) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/heading

## [2.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.1.1...@twilio-paste/heading@2.1.2) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/heading

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.1.0...@twilio-paste/heading@2.1.1) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/heading

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.50...@twilio-paste/heading@2.1.0) (2020-11-11)

### Features

- **heading:** update font weightfor new design language ([#924](https://github.com/twilio-labs/paste/issues/924)) ([7436e4b](https://github.com/twilio-labs/paste/commit/7436e4b964d1717f7e93eac3efac7b7ff97f34d9))

## [2.0.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.49...@twilio-paste/heading@2.0.50) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.48...@twilio-paste/heading@2.0.49) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.47...@twilio-paste/heading@2.0.48) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.46...@twilio-paste/heading@2.0.47) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.45...@twilio-paste/heading@2.0.46) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.44...@twilio-paste/heading@2.0.45) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.43...@twilio-paste/heading@2.0.44) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.42...@twilio-paste/heading@2.0.43) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.41...@twilio-paste/heading@2.0.42) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.40...@twilio-paste/heading@2.0.41) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.39...@twilio-paste/heading@2.0.40) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.38...@twilio-paste/heading@2.0.39) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.37...@twilio-paste/heading@2.0.38) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.36...@twilio-paste/heading@2.0.37) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.35...@twilio-paste/heading@2.0.36) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.34...@twilio-paste/heading@2.0.35) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.33...@twilio-paste/heading@2.0.34) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.32...@twilio-paste/heading@2.0.33) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.31...@twilio-paste/heading@2.0.32) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.30...@twilio-paste/heading@2.0.31) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.29...@twilio-paste/heading@2.0.30) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.28...@twilio-paste/heading@2.0.29) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.27...@twilio-paste/heading@2.0.28) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.26...@twilio-paste/heading@2.0.27) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.25...@twilio-paste/heading@2.0.26) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.24...@twilio-paste/heading@2.0.25) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.23...@twilio-paste/heading@2.0.24) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.22...@twilio-paste/heading@2.0.23) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.21...@twilio-paste/heading@2.0.22) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.20...@twilio-paste/heading@2.0.21) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.19...@twilio-paste/heading@2.0.20) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.18...@twilio-paste/heading@2.0.19) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.17...@twilio-paste/heading@2.0.18) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.16...@twilio-paste/heading@2.0.17) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.15...@twilio-paste/heading@2.0.16) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.14...@twilio-paste/heading@2.0.15) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.13...@twilio-paste/heading@2.0.14) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.12...@twilio-paste/heading@2.0.13) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.11...@twilio-paste/heading@2.0.12) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.10...@twilio-paste/heading@2.0.11) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.9...@twilio-paste/heading@2.0.10) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.8...@twilio-paste/heading@2.0.9) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.7...@twilio-paste/heading@2.0.8) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.6...@twilio-paste/heading@2.0.7) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.5...@twilio-paste/heading@2.0.6) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.4...@twilio-paste/heading@2.0.5) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.3...@twilio-paste/heading@2.0.4) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.2...@twilio-paste/heading@2.0.3) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.1...@twilio-paste/heading@2.0.2) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/heading

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@2.0.0...@twilio-paste/heading@2.0.1) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/heading

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.3.1...@twilio-paste/heading@2.0.0) (2020-04-24)

### Bug Fixes

- **heading:** set variant as required, remove default variant ([966ea9f](https://github.com/twilio-labs/paste/commit/966ea9f203682e0eb7e6e034cc08e261d9e78f29))

### BREAKING CHANGES

- **heading:** `variant` is now a required prop, and no longer has a default value.

## [1.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.3.0...@twilio-paste/heading@1.3.1) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/heading

# [1.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.2.2...@twilio-paste/heading@1.3.0) (2020-04-17)

### Features

- **components:** promote text components, spinner and primitive to prod ([5605adc](https://github.com/twilio-labs/paste/commit/5605adc99021be20dafd3fedfeb745490a50c7e7))

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.2.1...@twilio-paste/heading@1.2.2) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/heading

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.2.0...@twilio-paste/heading@1.2.1) (2020-04-08)

### Bug Fixes

- **heading:** package dependencies updated to be correct ([6c20d9d](https://github.com/twilio-labs/paste/commit/6c20d9d69969f11db38500f4b82a583b6e5d7bd4))

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.13...@twilio-paste/heading@1.2.0) (2020-04-07)

### Features

- **heading:** allow for adding html attributes ([b290a82](https://github.com/twilio-labs/paste/commit/b290a82088f39d00063137fba31075bc11e0afc2))

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.12...@twilio-paste/heading@1.1.13) (2020-04-07)

### Bug Fixes

- **heading:** use color prop, update snapshots ([2027f75](https://github.com/twilio-labs/paste/commit/2027f756e534842b13ba067eac680f70bb709d34))

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.11...@twilio-paste/heading@1.1.12) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.10...@twilio-paste/heading@1.1.11) (2020-03-24)

### Bug Fixes

- **heading:** switch from theme-tokens to theme package dep ([f12debc](https://github.com/twilio-labs/paste/commit/f12debc80131320877ef21e316e2c6bd278533b5))

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.9...@twilio-paste/heading@1.1.10) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.8...@twilio-paste/heading@1.1.9) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.7...@twilio-paste/heading@1.1.8) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.6...@twilio-paste/heading@1.1.7) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.5...@twilio-paste/heading@1.1.6) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.4...@twilio-paste/heading@1.1.5) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.3...@twilio-paste/heading@1.1.4) (2020-02-26)

**Note:** Version bump only for package @twilio-paste/heading

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.2...@twilio-paste/heading@1.1.3) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.1...@twilio-paste/heading@1.1.2) (2020-02-18)

### Bug Fixes

- **heading:** accept "header" an an "asTag" ([eca2a1c](https://github.com/twilio-labs/paste/commit/eca2a1c857faa6d52969f6cdab03ab321fd56f75))

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.1.0...@twilio-paste/heading@1.1.1) (2020-02-14)

### Bug Fixes

- **heading:** add missing peer deps ([a26c926](https://github.com/twilio-labs/paste/commit/a26c9260931393f42936da90e90644a281945ca6))

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.14...@twilio-paste/heading@1.1.0) (2020-02-13)

### Features

- **heading:** allow removing bottom margin ([899e065](https://github.com/twilio-labs/paste/commit/899e0657873cc00a13951dc080d0218bfe32b959))

## [1.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.13...@twilio-paste/heading@1.0.14) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.12...@twilio-paste/heading@1.0.13) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.11...@twilio-paste/heading@1.0.12) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.10...@twilio-paste/heading@1.0.11) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.9...@twilio-paste/heading@1.0.10) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.8...@twilio-paste/heading@1.0.9) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.7...@twilio-paste/heading@1.0.8) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.6...@twilio-paste/heading@1.0.7) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.5...@twilio-paste/heading@1.0.6) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.4...@twilio-paste/heading@1.0.5) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.3...@twilio-paste/heading@1.0.4) (2019-11-21)

### Bug Fixes

- change heading variants ([#196](https://github.com/twilio-labs/paste/issues/196)) ([061cc3e](https://github.com/twilio-labs/paste/commit/061cc3ecce7bc7ee5b8c8d2e95ddb8e0cd744e64))

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.2...@twilio-paste/heading@1.0.3) (2019-11-20)

### Bug Fixes

- remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.1...@twilio-paste/heading@1.0.2) (2019-11-18)

**Note:** Version bump only for package @twilio-paste/heading

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@1.0.0...@twilio-paste/heading@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/heading

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@0.4.1...@twilio-paste/heading@1.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))
- enable theme switching on the docsite ([#124](https://github.com/twilio-labs/paste/issues/124)) ([df797e5](https://github.com/twilio-labs/paste/commit/df797e57ff1268367053d717f3b3c2ca48a0aa4f))

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@0.4.0...@twilio-paste/heading@0.4.1) (2019-10-31)

**Note:** Version bump only for package @twilio-paste/heading

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@0.3.4...@twilio-paste/heading@0.4.0) (2019-10-29)

### Features

- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/heading@0.3.3...@twilio-paste/heading@0.3.4) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/heading

## 0.3.3 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
