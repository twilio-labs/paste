# Change Log

## 15.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/box@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 14.1.2

### Patch Changes

- [`c020edefc`](https://github.com/twilio-labs/paste/commit/c020edefcf15f5cb227e79248702e2a72be82e88) [#3834](https://github.com/twilio-labs/paste/pull/3834) Thanks [@nkrantz](https://github.com/nkrantz)! - [Spinner] Fix a bug that previously occured when a Safari user zoomed in on a page with a Spinner. The animated track moving around the Spinner circle would lose its center and appear off of the circle. This was due to the fact that Safari does not accept "center" as a value for the `transformOrigin` property. The fix was to remove the extra animations for Safari windows only.

## 14.1.1

### Patch Changes

- [`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9) [#3607](https://github.com/twilio-labs/paste/pull/3607) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Spinner] Improved TsDoc type annotations

## 14.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 14.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 13.0.0

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
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 12.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
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

## 11.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 11.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 11.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/icons@9.0.0

## 10.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 10.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0

## 8.1.0

### Minor Changes

- [`68ee1a35e`](https://github.com/twilio-labs/paste/commit/68ee1a35e5aed2bf099be01ceef0d4dbd608c8c1) [#2304](https://github.com/twilio-labs/paste/pull/2304) Thanks [@gloriliale](https://github.com/gloriliale)! - [Spinner] make title an optional prop, throw an error when not decorative and no title

### Patch Changes

- [`dce15da77`](https://github.com/twilio-labs/paste/commit/dce15da77560a10be6a984a96519e68f958e4595) [#2315](https://github.com/twilio-labs/paste/pull/2315) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Spinner] title is no longer required. Matching prop types to typescript types

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

## 7.2.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.2.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 7.2.0

### Minor Changes

- [`49a0db69`](https://github.com/twilio-labs/paste/commit/49a0db696408a9fa05d7c02c29cf70bd7defc294) [#1894](https://github.com/twilio-labs/paste/pull/1894) Thanks [@andipants12](https://github.com/andipants12)! - [Spinner]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 7.1.0

### Minor Changes

- [`08859377`](https://github.com/twilio-labs/paste/commit/0885937786a51d7ec93624780f6c6c6ffc7f489b) [#1858](https://github.com/twilio-labs/paste/pull/1858) Thanks [@andipants12](https://github.com/andipants12)! - [Spinner]: Our existing Spinner is looking quite dated, so this PR refreshes the appearance of it. There are no breaking changes, so Paste consumers will be happy to see a refreshed Spinner in their apps without any effort.

## 7.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 7.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 7.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0

## 6.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/icons@5.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 5.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 5.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 4.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.1.0...@twilio-paste/spinner@3.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/spinner

# [3.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.5...@twilio-paste/spinner@3.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [3.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.4...@twilio-paste/spinner@3.0.5) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.3...@twilio-paste/spinner@3.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.2...@twilio-paste/spinner@3.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.1...@twilio-paste/spinner@3.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [3.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@3.0.0...@twilio-paste/spinner@3.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/spinner

# [3.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.41...@twilio-paste/spinner@3.0.0) (2020-12-17)

### Bug Fixes

- **spinner:** add forwardRef ([4045250](https://github.com/twilio-labs/paste/commit/40452503230184816fb1fe0323f37249ae64bc92))

### BREAKING CHANGES

- **spinner:** component is now using fowardRef

## [2.0.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.40...@twilio-paste/spinner@2.0.41) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.39...@twilio-paste/spinner@2.0.40) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.38...@twilio-paste/spinner@2.0.39) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.37...@twilio-paste/spinner@2.0.38) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.36...@twilio-paste/spinner@2.0.37) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.35...@twilio-paste/spinner@2.0.36) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.34...@twilio-paste/spinner@2.0.35) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.33...@twilio-paste/spinner@2.0.34) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.32...@twilio-paste/spinner@2.0.33) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.31...@twilio-paste/spinner@2.0.32) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.30...@twilio-paste/spinner@2.0.31) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.29...@twilio-paste/spinner@2.0.30) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.28...@twilio-paste/spinner@2.0.29) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.27...@twilio-paste/spinner@2.0.28) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.26...@twilio-paste/spinner@2.0.27) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.25...@twilio-paste/spinner@2.0.26) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.24...@twilio-paste/spinner@2.0.25) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.23...@twilio-paste/spinner@2.0.24) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.22...@twilio-paste/spinner@2.0.23) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.21...@twilio-paste/spinner@2.0.22) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.20...@twilio-paste/spinner@2.0.21) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.19...@twilio-paste/spinner@2.0.20) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.18...@twilio-paste/spinner@2.0.19) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.17...@twilio-paste/spinner@2.0.18) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.16...@twilio-paste/spinner@2.0.17) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.15...@twilio-paste/spinner@2.0.16) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.14...@twilio-paste/spinner@2.0.15) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.13...@twilio-paste/spinner@2.0.14) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.12...@twilio-paste/spinner@2.0.13) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.11...@twilio-paste/spinner@2.0.12) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.10...@twilio-paste/spinner@2.0.11) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.9...@twilio-paste/spinner@2.0.10) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.8...@twilio-paste/spinner@2.0.9) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.7...@twilio-paste/spinner@2.0.8) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.6...@twilio-paste/spinner@2.0.7) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.5...@twilio-paste/spinner@2.0.6) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.4...@twilio-paste/spinner@2.0.5) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.3...@twilio-paste/spinner@2.0.4) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.2...@twilio-paste/spinner@2.0.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.1...@twilio-paste/spinner@2.0.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/spinner

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@2.0.0...@twilio-paste/spinner@2.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/spinner

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.33...@twilio-paste/spinner@2.0.0) (2020-08-05)

### Bug Fixes

- **icons:** use display=block by default and rename 'iconColor' prop to 'color' ([#637](https://github.com/twilio-labs/paste/issues/637)) ([82beef4](https://github.com/twilio-labs/paste/commit/82beef487c514b2eab5c40b1ef1409842dd4ca82))

### BREAKING CHANGES

- **icons:** This change renames a key prop and changes the display mode from inline-flex to block

- fix: use new icon prop (iconColor -> color)

- test: update snapshots

- chore(icons): update readme to mention correct display value

Co-authored-by: Rich Bachman <rb@richbachman.com>

- chore(website): update icon doc prop table

Co-authored-by: Rich Bachman <rb@richbachman.com>

Co-authored-by: Rich Bachman <rb@richbachman.com>

## [1.2.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.32...@twilio-paste/spinner@1.2.33) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.31...@twilio-paste/spinner@1.2.32) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.30...@twilio-paste/spinner@1.2.31) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.29...@twilio-paste/spinner@1.2.30) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.28...@twilio-paste/spinner@1.2.29) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.27...@twilio-paste/spinner@1.2.28) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.26...@twilio-paste/spinner@1.2.27) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.25...@twilio-paste/spinner@1.2.26) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.24...@twilio-paste/spinner@1.2.25) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.23...@twilio-paste/spinner@1.2.24) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.22...@twilio-paste/spinner@1.2.23) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.21...@twilio-paste/spinner@1.2.22) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.20...@twilio-paste/spinner@1.2.21) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.19...@twilio-paste/spinner@1.2.20) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.18...@twilio-paste/spinner@1.2.19) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.17...@twilio-paste/spinner@1.2.18) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.16...@twilio-paste/spinner@1.2.17) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.15...@twilio-paste/spinner@1.2.16) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.14...@twilio-paste/spinner@1.2.15) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.13...@twilio-paste/spinner@1.2.14) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.12...@twilio-paste/spinner@1.2.13) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.11...@twilio-paste/spinner@1.2.12) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.10...@twilio-paste/spinner@1.2.11) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.9...@twilio-paste/spinner@1.2.10) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.8...@twilio-paste/spinner@1.2.9) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.7...@twilio-paste/spinner@1.2.8) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.6...@twilio-paste/spinner@1.2.7) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.5...@twilio-paste/spinner@1.2.6) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.4...@twilio-paste/spinner@1.2.5) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.3...@twilio-paste/spinner@1.2.4) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.2...@twilio-paste/spinner@1.2.3) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.1...@twilio-paste/spinner@1.2.2) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.2.0...@twilio-paste/spinner@1.2.1) (2020-04-20)

**Note:** Version bump only for package @twilio-paste/spinner

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.30...@twilio-paste/spinner@1.2.0) (2020-04-17)

### Features

- **components:** promote text components, spinner and primitive to prod ([5605adc](https://github.com/twilio-labs/paste/commit/5605adc99021be20dafd3fedfeb745490a50c7e7))

## [1.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.29...@twilio-paste/spinner@1.1.30) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.28...@twilio-paste/spinner@1.1.29) (2020-04-08)

### Bug Fixes

- **spinner:** package dependencies updated to be correct ([05b7f6a](https://github.com/twilio-labs/paste/commit/05b7f6a9a2a086e3c0a70038fb7fab7770355de0))

## [1.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.27...@twilio-paste/spinner@1.1.28) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.26...@twilio-paste/spinner@1.1.27) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.25...@twilio-paste/spinner@1.1.26) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.24...@twilio-paste/spinner@1.1.25) (2020-03-24)

### Bug Fixes

- **spinner:** switch from theme-tokens to theme package dep ([0415762](https://github.com/twilio-labs/paste/commit/0415762c6773eff2a8c02f23f6c2603f5ab22cc3))

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.23...@twilio-paste/spinner@1.1.24) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.22...@twilio-paste/spinner@1.1.23) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.21...@twilio-paste/spinner@1.1.22) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.20...@twilio-paste/spinner@1.1.21) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.19...@twilio-paste/spinner@1.1.20) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.18...@twilio-paste/spinner@1.1.19) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.17...@twilio-paste/spinner@1.1.18) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.16...@twilio-paste/spinner@1.1.17) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.15...@twilio-paste/spinner@1.1.16) (2020-02-21)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.14...@twilio-paste/spinner@1.1.15) (2020-02-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.13...@twilio-paste/spinner@1.1.14) (2020-02-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.12...@twilio-paste/spinner@1.1.13) (2020-02-18)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.11...@twilio-paste/spinner@1.1.12) (2020-02-14)

### Bug Fixes

- **spinner:** add missing peer deps ([f4d3d83](https://github.com/twilio-labs/paste/commit/f4d3d8316fe2f91b179c0f468e7fc36e7739d5de))

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.10...@twilio-paste/spinner@1.1.11) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.9...@twilio-paste/spinner@1.1.10) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.8...@twilio-paste/spinner@1.1.9) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.7...@twilio-paste/spinner@1.1.8) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.6...@twilio-paste/spinner@1.1.7) (2020-01-27)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.5...@twilio-paste/spinner@1.1.6) (2020-01-25)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.4...@twilio-paste/spinner@1.1.5) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.3...@twilio-paste/spinner@1.1.4) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.2...@twilio-paste/spinner@1.1.3) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.1...@twilio-paste/spinner@1.1.2) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/spinner

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.0...@twilio-paste/spinner@1.1.1) (2019-12-05)

### Bug Fixes

- **spinner:** export the prop types with the component ([#206](https://github.com/twilio-labs/paste/issues/206)) ([e073184](https://github.com/twilio-labs/paste/commit/e073184dbec47ae4572732b2962cf28e8521adb4))

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.2...@twilio-paste/spinner@1.1.0) (2019-11-20)

### Features

- **icons:** make decorative required + icon docs ([#165](https://github.com/twilio-labs/paste/issues/165)) ([15ccbc2](https://github.com/twilio-labs/paste/commit/15ccbc2e0f259d60af83bf8503c8ee18a1191cb8))

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.1...@twilio-paste/spinner@1.0.2) (2019-11-18)

### Bug Fixes

- correct button heights add new default icon size ([#186](https://github.com/twilio-labs/paste/issues/186)) ([2e54478](https://github.com/twilio-labs/paste/commit/2e54478f975cb1930bd6d397d1214947db97c2a3))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.0...@twilio-paste/spinner@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/spinner

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.2.0...@twilio-paste/spinner@1.0.0) (2019-11-11)

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

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.1.6...@twilio-paste/spinner@0.2.0) (2019-10-29)

### Features

- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.1.5...@twilio-paste/spinner@0.1.6) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/spinner

## 0.1.5 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
- run eslint across the right files and fix any issues that arise. ([#21](https://github.com/twilio-labs/paste/issues/21)) ([2fcc872](https://github.com/twilio-labs/paste/commit/2fcc872))
