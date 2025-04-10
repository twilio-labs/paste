# Change Log

## 11.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 11.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 10.1.1

### Patch Changes

- [`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9) [#3607](https://github.com/twilio-labs/paste/pull/3607) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Improved TsDoc type annotations

## 10.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 10.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 9.0.3

### Patch Changes

- [`b9d9e7123`](https://github.com/twilio-labs/paste/commit/b9d9e712374a3e0aef44bd7609bc1036b10802df) [#3328](https://github.com/twilio-labs/paste/pull/3328) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Add transistionDelay CSS property to accompany transistion style prop

## 9.0.2

### Patch Changes

- [`c05f8686a`](https://github.com/twilio-labs/paste/commit/c05f8686af26f473a97895c6055bdbca2a2e5421) [#3319](https://github.com/twilio-labs/paste/pull/3319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] exposing missing typography style properties that are allowed via typescript, but aren't actually implemented on the component. These include list-style-type, textOverflow and overflowWrap

## 9.0.1

### Patch Changes

- [`e801b776b`](https://github.com/twilio-labs/paste/commit/e801b776bc7dc454428a2dd71ac0e5ed21854619) [#3173](https://github.com/twilio-labs/paste/pull/3173) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Text]: inject the Paste Core version into the DOM for better debugging in consumer applications and remote inspection

## 9.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Sibling-Box, Text] improved backwards compat with React 17 types

- Updated dependencies [[`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 8.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Minor Changes

- [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee) [#3049](https://github.com/twilio-labs/paste/pull/3049) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Text, Style Props, Theme]: remove checking and warning for deprecated design tokens and themes that have been removed from the system

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 7.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 7.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 7.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/customization@5.0.0

## 6.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 6.0.0

### Minor Changes

- [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Text] Update tests to account for `stylis` parser change in jest emotion matchers.

### Patch Changes

- Updated dependencies [[`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/customization@4.0.0
  - @twilio-paste/style-props@5.0.0

## 5.2.0

### Minor Changes

- [`28d87c14b`](https://github.com/twilio-labs/paste/commit/28d87c14b8f58005b8bdc9691c86acc2cef6ad27) [#2383](https://github.com/twilio-labs/paste/pull/2383) Thanks [@andipants12](https://github.com/andipants12)! - [Box, Text, Style-props] CSS types package dependency upgrade

## 5.1.0

### Minor Changes

- [`cf5878d8`](https://github.com/twilio-labs/paste/commit/cf5878d82bd552b22a49e5d4b4d0a6e85d829914) [#2285](https://github.com/twilio-labs/paste/pull/2285) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Text] Prevented styling props from being forwarded to their HTML DOM nodes in the browser for a cleaner DOM inspector view

## 5.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 5.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 5.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/customization@3.0.0

## 4.1.5

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.1.4

### Patch Changes

- [`130d817b`](https://github.com/twilio-labs/paste/commit/130d817b6072b1a7948ee664a1e716714a2a6442) [#1975](https://github.com/twilio-labs/paste/pull/1975) Thanks [@TheSisb](https://github.com/TheSisb)! - [Text] Add missing style props "whiteSpace" and "fontVariantNumeric"

## 4.1.3

### Patch Changes

- [`9d32315e`](https://github.com/twilio-labs/paste/commit/9d32315e2aee4176fb4b27aac6a131582a0e0bb9) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Added three new pseudo selectors to be used on Box and Text. You can now style selected and hover, selected and focus
  and selected and focus-visible

## 4.1.2

### Patch Changes

- [`7a1ed203`](https://github.com/twilio-labs/paste/commit/7a1ed20300159fa095c197cef4dcd28c92369814) [#1785](https://github.com/twilio-labs/paste/pull/1785) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Text now handles the case where a variant being set on the component, does not appear in the elements object set on the Customization Provider

## 4.1.1

### Patch Changes

- [`bf5ad8d6`](https://github.com/twilio-labs/paste/commit/bf5ad8d6ede2ba911a1aa45e39341c9137cb692c) [#1656](https://github.com/twilio-labs/paste/pull/1656) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Allow datetime html attribute to be a valid prop

## 4.1.0

### Minor Changes

- [`035bb7d8`](https://github.com/twilio-labs/paste/commit/035bb7d812dbf84604c3c95adb53c67d18601a60) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Text] Enable Text to respect element customizations set on the customization provider. Text now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 4.0.4

### Patch Changes

- [`b98b3713`](https://github.com/twilio-labs/paste/commit/b98b371315b09a5697be6f56611e428d0e6e377f) [#1426](https://github.com/twilio-labs/paste/pull/1426) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add the ability to warn consumers that they are using a deprecated Design Token using prop type validation on the Box and Text component

## 4.0.3

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 4.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 4.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/style-props@3.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/style-props@2.0.0

## 2.5.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.5.0...@twilio-paste/text@2.5.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/text

# [2.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.4.3...@twilio-paste/text@2.5.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.4.2...@twilio-paste/text@2.4.3) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/text

## [2.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.4.1...@twilio-paste/text@2.4.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/text

## [2.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.4.0...@twilio-paste/text@2.4.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/text

# [2.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.20...@twilio-paste/text@2.4.0) (2020-12-15)

### Features

- **text:** remove propType checking ([cea3898](https://github.com/twilio-labs/paste/commit/cea3898dbef0821759a0d5e2498082db0a35c2d8))

## [2.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.19...@twilio-paste/text@2.3.20) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.18...@twilio-paste/text@2.3.19) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.17...@twilio-paste/text@2.3.18) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.16...@twilio-paste/text@2.3.17) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.15...@twilio-paste/text@2.3.16) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.14...@twilio-paste/text@2.3.15) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.13...@twilio-paste/text@2.3.14) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.12...@twilio-paste/text@2.3.13) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.11...@twilio-paste/text@2.3.12) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.10...@twilio-paste/text@2.3.11) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.9...@twilio-paste/text@2.3.10) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.8...@twilio-paste/text@2.3.9) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.7...@twilio-paste/text@2.3.8) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.6...@twilio-paste/text@2.3.7) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.5...@twilio-paste/text@2.3.6) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.4...@twilio-paste/text@2.3.5) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.3...@twilio-paste/text@2.3.4) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.2...@twilio-paste/text@2.3.3) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.1...@twilio-paste/text@2.3.2) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/text

## [2.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.3.0...@twilio-paste/text@2.3.1) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/text

# [2.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.17...@twilio-paste/text@2.3.0) (2020-09-03)

### Features

- **text:** add support for word-break prop ([abba70d](https://github.com/twilio-labs/paste/commit/abba70d5073b2101e75a8951471c3f45a952d260))

## [2.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.16...@twilio-paste/text@2.2.17) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.15...@twilio-paste/text@2.2.16) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.14...@twilio-paste/text@2.2.15) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.13...@twilio-paste/text@2.2.14) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.12...@twilio-paste/text@2.2.13) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.11...@twilio-paste/text@2.2.12) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.10...@twilio-paste/text@2.2.11) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.9...@twilio-paste/text@2.2.10) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.8...@twilio-paste/text@2.2.9) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.7...@twilio-paste/text@2.2.8) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.6...@twilio-paste/text@2.2.7) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.5...@twilio-paste/text@2.2.6) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.4...@twilio-paste/text@2.2.5) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.3...@twilio-paste/text@2.2.4) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.2...@twilio-paste/text@2.2.3) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.1...@twilio-paste/text@2.2.2) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/text

## [2.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.2.0...@twilio-paste/text@2.2.1) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/text

# [2.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.16...@twilio-paste/text@2.2.0) (2020-06-29)

### Features

- **text:** accept textTransform css prop ([b50505e](https://github.com/twilio-labs/paste/commit/b50505e3b18a609c7457e009dcef7295f13b2c33))

## [2.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.15...@twilio-paste/text@2.1.16) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.14...@twilio-paste/text@2.1.15) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.13...@twilio-paste/text@2.1.14) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.12...@twilio-paste/text@2.1.13) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.11...@twilio-paste/text@2.1.12) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.10...@twilio-paste/text@2.1.11) (2020-06-10)

### Bug Fixes

- **text:** enable the transition prop ([85a58fe](https://github.com/twilio-labs/paste/commit/85a58fe9bbda233771301d38ee1eaaf70d67e1bd))

## [2.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.9...@twilio-paste/text@2.1.10) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.8...@twilio-paste/text@2.1.9) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.7...@twilio-paste/text@2.1.8) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.6...@twilio-paste/text@2.1.7) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.5...@twilio-paste/text@2.1.6) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.4...@twilio-paste/text@2.1.5) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.3...@twilio-paste/text@2.1.4) (2020-05-04)

### Bug Fixes

- **text:** switch to new spacing prop validators ([affc204](https://github.com/twilio-labs/paste/commit/affc204fb144d5e31bff21cb3c2e528ba6426cb9))

## [2.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.2...@twilio-paste/text@2.1.3) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.1...@twilio-paste/text@2.1.2) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/text

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.1.0...@twilio-paste/text@2.1.1) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/text

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.0.3...@twilio-paste/text@2.1.0) (2020-04-17)

### Features

- **components:** promote text components, spinner and primitive to prod ([5605adc](https://github.com/twilio-labs/paste/commit/5605adc99021be20dafd3fedfeb745490a50c7e7))

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.0.2...@twilio-paste/text@2.0.3) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/text

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.0.1...@twilio-paste/text@2.0.2) (2020-04-08)

### Bug Fixes

- **text:** package dependencies updated to be correct ([89af01f](https://github.com/twilio-labs/paste/commit/89af01f375c043e01260ca6896a71fe89cb72ffa))

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@2.0.0...@twilio-paste/text@2.0.1) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/text

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.2.4...@twilio-paste/text@2.0.0) (2020-04-07)

### Bug Fixes

- **text:** change textColor to color prop, setup pseudo styles ([e6ad527](https://github.com/twilio-labs/paste/commit/e6ad5275602357150b5ed4a8b056234d5c4e43d7))

### BREAKING CHANGES

- **text:** Change in the component API. `textColor` prop has been changed to `color`.

## [1.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.2.3...@twilio-paste/text@1.2.4) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/text

## [1.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.2.2...@twilio-paste/text@1.2.3) (2020-03-24)

### Bug Fixes

- **text:** switch from theme-tokens to theme package dep ([304ab00](https://github.com/twilio-labs/paste/commit/304ab00084c24ca99018a9080b0e3da9f90472b1))

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.2.1...@twilio-paste/text@1.2.2) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/text

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.2.0...@twilio-paste/text@1.2.1) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/text

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.13...@twilio-paste/text@1.2.0) (2020-03-11)

### Features

- **text:** add cursor style prop ([3cfd1c2](https://github.com/twilio-labs/paste/commit/3cfd1c22c8e4db6069770683dff21abedc4f0adb))

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.12...@twilio-paste/text@1.1.13) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.11...@twilio-paste/text@1.1.12) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.10...@twilio-paste/text@1.1.11) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.9...@twilio-paste/text@1.1.10) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.8...@twilio-paste/text@1.1.9) (2020-02-14)

### Bug Fixes

- **text:** add missing peer deps ([03d0402](https://github.com/twilio-labs/paste/commit/03d0402df6cb756a3cb9f49240de23eded29ab9b))

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.7...@twilio-paste/text@1.1.8) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.6...@twilio-paste/text@1.1.7) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.5...@twilio-paste/text@1.1.6) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.4...@twilio-paste/text@1.1.5) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.3...@twilio-paste/text@1.1.4) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.2...@twilio-paste/text@1.1.3) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.1...@twilio-paste/text@1.1.2) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/text

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.1.0...@twilio-paste/text@1.1.1) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/text

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.4...@twilio-paste/text@1.1.0) (2019-12-19)

### Features

- **text:** use style-props package, create method to safelySpreadProps ([29da81f](https://github.com/twilio-labs/paste/commit/29da81ffb15bb2d97ed383d5110991a878cbe87b))

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.3...@twilio-paste/text@1.0.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/text

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.2...@twilio-paste/text@1.0.3) (2019-11-20)

### Bug Fixes

- remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.1...@twilio-paste/text@1.0.2) (2019-11-18)

### Bug Fixes

- **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))
- **website:** remove vague anchor do dont ([#177](https://github.com/twilio-labs/paste/issues/177)) ([8530c56](https://github.com/twilio-labs/paste/commit/8530c5679b48da46ddc82a9a7154bca78cacc30a))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.0...@twilio-paste/text@1.0.1) (2019-11-12)

### Bug Fixes

- prettier updated, updating formatting ([8644831](https://github.com/twilio-labs/paste/commit/86448312b017f13720735525e516f086704b1813))

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.6.0...@twilio-paste/text@1.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))
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

# [0.6.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.5.0...@twilio-paste/text@0.6.0) (2019-10-31)

### Features

- update types package to styled-system v5 format ([#154](https://github.com/twilio-labs/paste/issues/154)) ([117c41e](https://github.com/twilio-labs/paste/commit/117c41e463b11440582e740c28cc067c06d16e67))

# [0.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.4.1...@twilio-paste/text@0.5.0) (2019-10-29)

### Features

- finalise the Text component ([#151](https://github.com/twilio-labs/paste/issues/151)) ([b51c272](https://github.com/twilio-labs/paste/commit/b51c272cf420380f73c31c3474ebdf23cb7cad3a))
- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.4.0...@twilio-paste/text@0.4.1) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/text

# 0.4.0 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))

### Features

- ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
- **website:** Add the tokens page ([#19](https://github.com/twilio-labs/paste/issues/19)) ([878d3c5](https://github.com/twilio-labs/paste/commit/878d3c5))
