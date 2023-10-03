# Change Log

## 11.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 11.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/tooltip-primitive@2.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/reakit-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 10.0.1

### Patch Changes

- [`c2de547e4`](https://github.com/twilio-labs/paste/commit/c2de547e4eb60b2385837c452b5132277ad9db9e) [#3141](https://github.com/twilio-labs/paste/pull/3141) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Tooltip] improve border color of the Tooltip

## 10.0.0

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
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 9.0.1

### Patch Changes

- [`45cdceb92`](https://github.com/twilio-labs/paste/commit/45cdceb9241e75abac2b73363c77fa43d541f64a) [#3063](https://github.com/twilio-labs/paste/pull/3063) Thanks [@shleewhite](https://github.com/shleewhite)! - [Tooltip] Update styles to align with new Paste Twilio theme

## 9.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/spinner@12.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/text@8.0.0
  - @twilio-paste/tooltip-primitive@1.0.0
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

## 8.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 8.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 8.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/icons@9.0.0

## 7.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 7.0.1

### Patch Changes

- [`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - Made a slight improvement to the TypeScript typings of several packages for better interoperability.

## 7.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 6.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/spinner@9.0.0

## 5.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 5.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [tooltip]

  - Update tooltip arrow stroke to `colorBorderInverseWeaker`
  - Update tooltip border color to `colorBorderInverseWeaker`

## 5.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 4.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 4.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 4.1.0

### Minor Changes

- [`420c78fc`](https://github.com/twilio-labs/paste/commit/420c78fc0f37a2a9189bbb97d77d80f6a58515cd) [#1889](https://github.com/twilio-labs/paste/pull/1889) Thanks [@gloriliale](https://github.com/gloriliale)! - [Tooltip] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 4.0.4

### Patch Changes

- [`750a38e0`](https://github.com/twilio-labs/paste/commit/750a38e05b9d91f82b14f49a160112f013629468) [#1655](https://github.com/twilio-labs/paste/pull/1655) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Tooltip] Fix a bug where the Tooltip component was swallowing the event handlers of the child component it was wrapping

## 4.0.3

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 4.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 4.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/spinner@7.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/icons@5.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 2.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/tooltip-primitive@0.2.3

## 2.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/spinner@5.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 1.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/tooltip-primitive@0.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.4.0...@twilio-paste/tooltip@0.4.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/tooltip

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.35...@twilio-paste/tooltip@0.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.3.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.34...@twilio-paste/tooltip@0.3.35) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.33...@twilio-paste/tooltip@0.3.34) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.32...@twilio-paste/tooltip@0.3.33) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.31...@twilio-paste/tooltip@0.3.32) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.30...@twilio-paste/tooltip@0.3.31) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.29...@twilio-paste/tooltip@0.3.30) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.28...@twilio-paste/tooltip@0.3.29) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.27...@twilio-paste/tooltip@0.3.28) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.26...@twilio-paste/tooltip@0.3.27) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.25...@twilio-paste/tooltip@0.3.26) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.24...@twilio-paste/tooltip@0.3.25) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.23...@twilio-paste/tooltip@0.3.24) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.22...@twilio-paste/tooltip@0.3.23) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.21...@twilio-paste/tooltip@0.3.22) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.20...@twilio-paste/tooltip@0.3.21) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.19...@twilio-paste/tooltip@0.3.20) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.18...@twilio-paste/tooltip@0.3.19) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.17...@twilio-paste/tooltip@0.3.18) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.16...@twilio-paste/tooltip@0.3.17) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.15...@twilio-paste/tooltip@0.3.16) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.14...@twilio-paste/tooltip@0.3.15) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.13...@twilio-paste/tooltip@0.3.14) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.12...@twilio-paste/tooltip@0.3.13) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.11...@twilio-paste/tooltip@0.3.12) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.10...@twilio-paste/tooltip@0.3.11) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.9...@twilio-paste/tooltip@0.3.10) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.8...@twilio-paste/tooltip@0.3.9) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.7...@twilio-paste/tooltip@0.3.8) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.6...@twilio-paste/tooltip@0.3.7) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.5...@twilio-paste/tooltip@0.3.6) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.4...@twilio-paste/tooltip@0.3.5) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.3...@twilio-paste/tooltip@0.3.4) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.2...@twilio-paste/tooltip@0.3.3) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.1...@twilio-paste/tooltip@0.3.2) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.3.0...@twilio-paste/tooltip@0.3.1) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/tooltip

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.15...@twilio-paste/tooltip@0.3.0) (2020-09-14)

### Features

- **tooltip:** add state hook prop ([539db2c](https://github.com/twilio-labs/paste/commit/539db2ccfa5346f2f10760387d2dd99c48034e95))

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.14...@twilio-paste/tooltip@0.2.15) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.13...@twilio-paste/tooltip@0.2.14) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.12...@twilio-paste/tooltip@0.2.13) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.11...@twilio-paste/tooltip@0.2.12) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.10...@twilio-paste/tooltip@0.2.11) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.9...@twilio-paste/tooltip@0.2.10) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.8...@twilio-paste/tooltip@0.2.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.7...@twilio-paste/tooltip@0.2.8) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.6...@twilio-paste/tooltip@0.2.7) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.5...@twilio-paste/tooltip@0.2.6) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.4...@twilio-paste/tooltip@0.2.5) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.3...@twilio-paste/tooltip@0.2.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.2...@twilio-paste/tooltip@0.2.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.1...@twilio-paste/tooltip@0.2.2) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.2.0...@twilio-paste/tooltip@0.2.1) (2020-08-05)

**Note:** Version bump only for package @twilio-paste/tooltip

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.11...@twilio-paste/tooltip@0.2.0) (2020-08-04)

### Bug Fixes

- **tooltip:** reduce the arrow size ([a53745c](https://github.com/twilio-labs/paste/commit/a53745c1ea042a41d3762a81ddde3d0fe7921189))

### Features

- **tooltip:** make updates to the design for unified design language ([61ecaf0](https://github.com/twilio-labs/paste/commit/61ecaf0f9172c86fa024c930bf401b1e0f2ee73a))

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.10...@twilio-paste/tooltip@0.1.11) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.9...@twilio-paste/tooltip@0.1.10) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.8...@twilio-paste/tooltip@0.1.9) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.7...@twilio-paste/tooltip@0.1.8) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.6...@twilio-paste/tooltip@0.1.7) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.5...@twilio-paste/tooltip@0.1.6) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.4...@twilio-paste/tooltip@0.1.5) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.3...@twilio-paste/tooltip@0.1.4) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.2...@twilio-paste/tooltip@0.1.3) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.1...@twilio-paste/tooltip@0.1.2) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/tooltip

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.1.0...@twilio-paste/tooltip@0.1.1) (2020-07-08)

### Bug Fixes

- **tooltip:** move arrow to StyedBase to prevent line-height override ([345f3dd](https://github.com/twilio-labs/paste/commit/345f3ddb690e5ea20a482ac8479fa111a9025176))

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/tooltip@0.0.2...@twilio-paste/tooltip@0.1.0) (2020-07-02)

### Features

- **tooltip:** add tooltip package ([a2b5f93](https://github.com/twilio-labs/paste/commit/a2b5f93d6e92d46a5d7ea37d282426b611252af0))
