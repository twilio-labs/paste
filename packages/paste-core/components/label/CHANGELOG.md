# Change Log

## 13.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 13.0.1

### Patch Changes

- [`7bdac721b`](https://github.com/twilio-labs/paste/commit/7bdac721b968a73180e3a74fbcd1bfecb0b53ef2) [#3430](https://github.com/twilio-labs/paste/pull/3430) Thanks [@nkrantz](https://github.com/nkrantz)! - Slightly improved Label component types

## 13.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/media-object@10.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 12.0.3

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 12.0.2

### Patch Changes

- [`48e5f1e5c`](https://github.com/twilio-labs/paste/commit/48e5f1e5cd1c06c6967ee4e43f30179498efede8) [#3225](https://github.com/twilio-labs/paste/pull/3225) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button, Help Text, In Page Navigation, Input, Input Box, Label, Select, Tab, Text Area] Update color text tokens for inverse styles

## 12.0.1

### Patch Changes

- [`845eb62ba`](https://github.com/twilio-labs/paste/commit/845eb62ba326291bf2f5b05fa65e3f38573f5beb) [#3119](https://github.com/twilio-labs/paste/pull/3119) Thanks [@nkrantz](https://github.com/nkrantz)! - [Label] Add "required" title to required dot

## 12.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- Updated dependencies [[`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/media-object@9.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 11.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39) [#3010](https://github.com/twilio-labs/paste/pull/3010) Thanks [@shleewhite](https://github.com/shleewhite)! - [Label] Update styles to align with new Paste Twilio theme

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/media-object@8.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/icons@10.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 10.1.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 10.1.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 10.1.0

### Minor Changes

- [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Label] add the ability to use the label as a div HTML element

## 10.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/screen-reader-only@10.0.0
  - @twilio-paste/media-object@7.0.0

## 9.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 9.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/screen-reader-only@9.0.0
  - @twilio-paste/media-object@6.0.0
  - @twilio-paste/style-props@5.0.0

## 8.0.0

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/screen-reader-only@8.0.0

## 7.0.3

### Patch Changes

- [`554da9708`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf) [#2274](https://github.com/twilio-labs/paste/pull/2274) Thanks [@shleewhite](https://github.com/shleewhite)! - [Label] add i18nRequiredLabel prop for i18n

## 7.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 7.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 7.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/box@5.0.0

## 6.0.7

### Patch Changes

- [`eb7fce36`](https://github.com/twilio-labs/paste/commit/eb7fce3697fcb3e4530ec384d91bbdec6cc23df5) [#2087](https://github.com/twilio-labs/paste/pull/2087) Thanks [@shleewhite](https://github.com/shleewhite)! - [Label] Update the cursor

## 6.0.6

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 6.0.5

### Patch Changes

- [`16b53ea1`](https://github.com/twilio-labs/paste/commit/16b53ea1a6d4530a60ef1db6d715b6bb9de29f3b) [#1878](https://github.com/twilio-labs/paste/pull/1878) Thanks [@nkrantz](https://github.com/nkrantz)! - [Label] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 6.0.4

### Patch Changes

- [`e4a8aef5`](https://github.com/twilio-labs/paste/commit/e4a8aef5253ee5df290cf106612a58bce7572ef3) [#1663](https://github.com/twilio-labs/paste/pull/1663) Thanks [@richbachman](https://github.com/richbachman)! - [Label] Updated package.json description.

## 6.0.3

### Patch Changes

- [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a) [#1398](https://github.com/twilio-labs/paste/pull/1398) Thanks [@zahnster](https://github.com/zahnster)! - Updated font weights for all form components to make them bolder

## 6.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/screen-reader-only@6.0.1
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/screen-reader-only@6.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/screen-reader-only@5.0.1
  - @twilio-paste/media-object@4.0.1

## 5.0.0

### Patch Changes

- [`b1b4ac39`](https://github.com/twilio-labs/paste/commit/b1b4ac39ac70ec70bd9e150f2b8f94a123f1e1a6) [#1232](https://github.com/twilio-labs/paste/pull/1232) Thanks [@richbachman](https://github.com/richbachman)! - Changed `RequiredDot` to use `sizeIcon30` height so there is alignment with the base `lineHeight30`. This aligns the dot with the center of the first line of text, and solves for multiline labels. Label also now uses Media Object, instead of Flex for the `RequiredDot` placement.

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/screen-reader-only@5.0.0
  - @twilio-paste/media-object@4.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/screen-reader-only@4.0.3
  - @twilio-paste/flex@1.0.2

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/screen-reader-only@4.0.2
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/screen-reader-only@4.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/screen-reader-only@4.0.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/flex@0.5.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/screen-reader-only@3.0.1
  - @twilio-paste/text@2.5.2

## 3.0.0

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/screen-reader-only@3.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@2.1.0...@twilio-paste/label@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/label

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@2.0.5...@twilio-paste/label@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@2.0.4...@twilio-paste/label@2.0.5) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/label

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@2.0.3...@twilio-paste/label@2.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/label

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@2.0.2...@twilio-paste/label@2.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/label

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@2.0.1...@twilio-paste/label@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/label

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@2.0.0...@twilio-paste/label@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/label

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.16...@twilio-paste/label@2.0.0) (2020-12-17)

### Bug Fixes

- **label:** add forwardRef ([d5e2cac](https://github.com/twilio-labs/paste/commit/d5e2cac1aa8b4009cd7d564e8cc78597254f1022))

### BREAKING CHANGES

- **label:** component is now using fowardRef

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.15...@twilio-paste/label@1.1.16) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.14...@twilio-paste/label@1.1.15) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.13...@twilio-paste/label@1.1.14) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.12...@twilio-paste/label@1.1.13) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.11...@twilio-paste/label@1.1.12) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.10...@twilio-paste/label@1.1.11) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.9...@twilio-paste/label@1.1.10) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.8...@twilio-paste/label@1.1.9) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.7...@twilio-paste/label@1.1.8) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.6...@twilio-paste/label@1.1.7) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.5...@twilio-paste/label@1.1.6) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.4...@twilio-paste/label@1.1.5) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.3...@twilio-paste/label@1.1.4) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.2...@twilio-paste/label@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.1...@twilio-paste/label@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/label

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/label@1.1.0...@twilio-paste/label@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/label

# 1.1.0 (2020-10-07)

### Bug Fixes

- **label:** update label tests ([419d382](https://github.com/twilio-labs/paste/commit/419d382c18e869017af8ac4c5cbc8dee337d73c8))

### Features

- **label:** add a label package ([e20faad](https://github.com/twilio-labs/paste/commit/e20faad5aeca9ccfc23c48fd7a2d75c6a32f2e7d))
