# Change Log

## 11.0.0

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
  - @twilio-paste/text@9.0.0
  - @twilio-paste/card@8.0.0
  - @twilio-paste/heading@10.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 10.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/card@7.0.0
  - @twilio-paste/heading@9.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/disclosure-primitive@1.0.0
  - @twilio-paste/text@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/icons@10.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/reakit-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 9.0.3

### Patch Changes

- [`0b497ed21`](https://github.com/twilio-labs/paste/commit/0b497ed21b409a00b5b262f6cf106ad763b08449) [#2961](https://github.com/twilio-labs/paste/pull/2961) Thanks [@shleewhite](https://github.com/shleewhite)! - [Disclosure] Update styles to align with new Paste Twilio theme

## 9.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 9.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 9.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/card@6.0.0
  - @twilio-paste/heading@8.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/icons@9.0.0

## 8.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 8.0.1

### Patch Changes

- [`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - Made a slight improvement to the TypeScript typings of several packages for better interoperability.

## 8.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/card@5.0.0
  - @twilio-paste/heading@7.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 7.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0

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
  - @twilio-paste/card@4.0.0
  - @twilio-paste/heading@6.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 5.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 5.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 5.1.0

### Minor Changes

- [`d387eda8`](https://github.com/twilio-labs/paste/commit/d387eda82cf3d77dbcd5df60cad2a6f5bb0e5e9e) [#1860](https://github.com/twilio-labs/paste/pull/1860) Thanks [@gloriliale](https://github.com/gloriliale)! - [Disclosure] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 5.0.7

### Patch Changes

- [`ef450904`](https://github.com/twilio-labs/paste/commit/ef450904d727da5d1ddffc770a16a25c4a947247) [#1831](https://github.com/twilio-labs/paste/pull/1831) Thanks [@andipants12](https://github.com/andipants12)! - [Disclosure] Add z-index to Disclosure Heading to fix flash that occurs when disclosure content renders and the z-indeces are recalculated.

## 5.0.6

### Patch Changes

- [`79a9dfba`](https://github.com/twilio-labs/paste/commit/79a9dfbaf60c13bd4985c7d30017d9db5b8c7c76) [#1487](https://github.com/twilio-labs/paste/pull/1487) Thanks [@TheSisb](https://github.com/TheSisb)! - DisclosureHeading now gracefully handles children and doesn't impose flex behavior. This makes it easier to pass MediaObjects and Truncate as children.

## 5.0.5

### Patch Changes

- [`46495f48`](https://github.com/twilio-labs/paste/commit/46495f48ec005ff0971fb41e5fa76df53503aa84) [#1454](https://github.com/twilio-labs/paste/pull/1454) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add a background color to disclosure content for when it is placed on top of a background color that is not the body color

## 5.0.4

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 5.0.3

### Patch Changes

- [`35d9dfda`](https://github.com/twilio-labs/paste/commit/35d9dfdafff3e5e7b05fa46d600d2d3f0851a6b1) [#1332](https://github.com/twilio-labs/paste/pull/1332) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixed truncation on Disclosure headings when using Truncate component

## 5.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 5.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/card@3.0.2
  - @twilio-paste/heading@5.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0

## 4.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/card@3.0.1
  - @twilio-paste/icons@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/card@3.0.0
  - @twilio-paste/heading@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/disclosure-primitive@0.3.3

## 3.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/card@2.0.1
  - @twilio-paste/heading@4.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
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
