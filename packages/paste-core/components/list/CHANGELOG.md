# Change Log

## 9.0.2

### Patch Changes

- [`cddfffdd4`](https://github.com/twilio-labs/paste/commit/cddfffdd4cae5d899cf8490013de315218a07941) [#4320](https://github.com/twilio-labs/paste/pull/4320) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [List] removed the default listStyleType on the primitive List component to inherit CSS nesting styling

## 9.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 9.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/heading@12.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 8.2.1

### Patch Changes

- [`d6c1b73ad`](https://github.com/twilio-labs/paste/commit/d6c1b73addd4589ee0153eee66efb553169e02a3) [#3805](https://github.com/twilio-labs/paste/pull/3805) Thanks [@nkrantz](https://github.com/nkrantz)! - [List] improve text alignment for OrderedDisplayList between the list item number and the corresponding heading.

## 8.2.0

### Minor Changes

- [`33800d2f9`](https://github.com/twilio-labs/paste/commit/33800d2f9a07114793ab9daa0e52baa4ca2df686) [#3835](https://github.com/twilio-labs/paste/pull/3835) Thanks [@TheSisb](https://github.com/TheSisb)! - [List] add `OrderedDisplayList`, `OrderedDisplayListItem`, and `OrderedDisplayListHeading` components.

  These new components provide a visually enhanced numbered list to improve the scannability of sequential steps.

## 8.1.2

### Patch Changes

- [`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9) [#3607](https://github.com/twilio-labs/paste/pull/3607) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [List] remove `listStyleType` from Ordered and Unordered List type signature as it is not passed to the underlying component

## 8.1.1

### Patch Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [List] Improve TsDoc type annotations

## 8.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 8.0.0

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

## 7.0.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 7.0.0

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

## 6.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

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

## 5.0.3

### Patch Changes

- [`d35903dc2`](https://github.com/twilio-labs/paste/commit/d35903dc24adf334021a7609fb919efee7e23f87) [#2966](https://github.com/twilio-labs/paste/pull/2966) Thanks [@shleewhite](https://github.com/shleewhite)! - [List] explicitly set the list style type on UnorderedList and OrderedList components.

## 5.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 5.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 5.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/text@7.0.0

## 4.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 4.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/style-props@5.0.0

## 3.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 3.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 3.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/text@5.0.0

## 2.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 2.1.0

### Minor Changes

- [`cb3d14ce`](https://github.com/twilio-labs/paste/commit/cb3d14ce95f8fbdfcf86f9ba7a85b3a2f4856e95) [#1766](https://github.com/twilio-labs/paste/pull/1766) Thanks [@richbachman](https://github.com/richbachman)! - [List] Enable UnorderedList, OrderedList and ListItem to respect element customizations set on the customization provider. UnorderedList, OrderedList and ListItem now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 2.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 2.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/style-props@3.0.0

## 1.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/style-props@2.0.0

## 0.3.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/text@2.5.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.3.0...@twilio-paste/list@0.3.1) (2021-01-25)

### Bug Fixes

- **list:** missing type export ([2970394](https://github.com/twilio-labs/paste/commit/297039457033f7c4c4e5bf663880aa68f5a232f4))

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.60...@twilio-paste/list@0.3.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.2.60](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.59...@twilio-paste/list@0.2.60) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.59](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.58...@twilio-paste/list@0.2.59) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.58](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.57...@twilio-paste/list@0.2.58) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.56...@twilio-paste/list@0.2.57) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.55...@twilio-paste/list@0.2.56) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.54...@twilio-paste/list@0.2.55) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.53...@twilio-paste/list@0.2.54) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.52...@twilio-paste/list@0.2.53) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.51...@twilio-paste/list@0.2.52) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.50...@twilio-paste/list@0.2.51) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.49...@twilio-paste/list@0.2.50) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.48...@twilio-paste/list@0.2.49) (2020-10-27)

### Bug Fixes

- **list:** forward refs to component exports ([#886](https://github.com/twilio-labs/paste/issues/886)) ([7f4def0](https://github.com/twilio-labs/paste/commit/7f4def0207189978f11fd2107d8be81b5ecd22a7))

## [0.2.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.47...@twilio-paste/list@0.2.48) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.46...@twilio-paste/list@0.2.47) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.45...@twilio-paste/list@0.2.46) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.44...@twilio-paste/list@0.2.45) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.43...@twilio-paste/list@0.2.44) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.42...@twilio-paste/list@0.2.43) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.41...@twilio-paste/list@0.2.42) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.40...@twilio-paste/list@0.2.41) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.39...@twilio-paste/list@0.2.40) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.38...@twilio-paste/list@0.2.39) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.37...@twilio-paste/list@0.2.38) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.36...@twilio-paste/list@0.2.37) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.35...@twilio-paste/list@0.2.36) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.34...@twilio-paste/list@0.2.35) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.33...@twilio-paste/list@0.2.34) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.32...@twilio-paste/list@0.2.33) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.31...@twilio-paste/list@0.2.32) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.30...@twilio-paste/list@0.2.31) (2020-08-24)

### Bug Fixes

- **list:** bump line-height due to default line-height change ([4006207](https://github.com/twilio-labs/paste/commit/4006207838b2cd1b18da6ecdc029d4ea8047ae79))

## [0.2.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.29...@twilio-paste/list@0.2.30) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.28...@twilio-paste/list@0.2.29) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.27...@twilio-paste/list@0.2.28) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.26...@twilio-paste/list@0.2.27) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.25...@twilio-paste/list@0.2.26) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.24...@twilio-paste/list@0.2.25) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.23...@twilio-paste/list@0.2.24) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.22...@twilio-paste/list@0.2.23) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.21...@twilio-paste/list@0.2.22) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.20...@twilio-paste/list@0.2.21) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.19...@twilio-paste/list@0.2.20) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.18...@twilio-paste/list@0.2.19) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.17...@twilio-paste/list@0.2.18) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.16...@twilio-paste/list@0.2.17) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.15...@twilio-paste/list@0.2.16) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.14...@twilio-paste/list@0.2.15) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.13...@twilio-paste/list@0.2.14) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.12...@twilio-paste/list@0.2.13) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.11...@twilio-paste/list@0.2.12) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.10...@twilio-paste/list@0.2.11) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.9...@twilio-paste/list@0.2.10) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.8...@twilio-paste/list@0.2.9) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.7...@twilio-paste/list@0.2.8) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.6...@twilio-paste/list@0.2.7) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.5...@twilio-paste/list@0.2.6) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.4...@twilio-paste/list@0.2.5) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.3...@twilio-paste/list@0.2.4) (2020-05-04)

### Bug Fixes

- **list:** switch to new spacing prop validators ([cf08242](https://github.com/twilio-labs/paste/commit/cf0824229ca9f2e1399c1084d51717ef019becb2))

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.2...@twilio-paste/list@0.2.3) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.1...@twilio-paste/list@0.2.2) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/list

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.2.0...@twilio-paste/list@0.2.1) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/list

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.24...@twilio-paste/list@0.2.0) (2020-04-17)

### Features

- **components:** promote text components, spinner and primitive to prod ([5605adc](https://github.com/twilio-labs/paste/commit/5605adc99021be20dafd3fedfeb745490a50c7e7))

## [0.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.23...@twilio-paste/list@0.1.24) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.22...@twilio-paste/list@0.1.23) (2020-04-08)

### Bug Fixes

- **list:** package dependencies updated to be correct ([12eedee](https://github.com/twilio-labs/paste/commit/12eedeecbced943d97b56b50f72266f1442f2acb))

## [0.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.21...@twilio-paste/list@0.1.22) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.20...@twilio-paste/list@0.1.21) (2020-04-07)

### Bug Fixes

- **list:** use color prop, update tests and snapshots ([48bbeaf](https://github.com/twilio-labs/paste/commit/48bbeaf42cb81921b67f2747596c587731779e83))

## [0.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.19...@twilio-paste/list@0.1.20) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.18...@twilio-paste/list@0.1.19) (2020-03-24)

### Bug Fixes

- **list:** switch from theme-tokens to theme package dep ([1989a60](https://github.com/twilio-labs/paste/commit/1989a60c229efb4d4826b47235a088083d181697))

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.17...@twilio-paste/list@0.1.18) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.16...@twilio-paste/list@0.1.17) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.15...@twilio-paste/list@0.1.16) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.14...@twilio-paste/list@0.1.15) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.13...@twilio-paste/list@0.1.14) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.12...@twilio-paste/list@0.1.13) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.11...@twilio-paste/list@0.1.12) (2020-02-26)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.10...@twilio-paste/list@0.1.11) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.9...@twilio-paste/list@0.1.10) (2020-02-14)

### Bug Fixes

- **list:** add missing peer deps ([375c129](https://github.com/twilio-labs/paste/commit/375c12968f895880199fe9454cc28676816e3ee3))

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.8...@twilio-paste/list@0.1.9) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.7...@twilio-paste/list@0.1.8) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.6...@twilio-paste/list@0.1.7) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.5...@twilio-paste/list@0.1.6) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.4...@twilio-paste/list@0.1.5) (2020-02-10)

### Bug Fixes

- **list:** allow marginTop and marginBottom props ([#297](https://github.com/twilio-labs/paste/issues/297)) ([24ceb8d](https://github.com/twilio-labs/paste/commit/24ceb8d0b671aeb4df446a6bd5cf17695fa07dc9))

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.3...@twilio-paste/list@0.1.4) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.2...@twilio-paste/list@0.1.3) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.1...@twilio-paste/list@0.1.2) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/list

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.1.0...@twilio-paste/list@0.1.1) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/list

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.0.2...@twilio-paste/list@0.1.0) (2019-12-19)

### Features

- **list:** created the list component ([bd6db2e](https://github.com/twilio-labs/paste/commit/bd6db2e7de6a72fda8d42455f12623ca51440e27))

## [0.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/list@0.0.1...@twilio-paste/list@0.0.2) (2019-10-29)

**Note:** Version bump only for package @twilio-paste/list

## 0.0.1 (2019-08-15)

**Note:** Version bump only for package @twilio-paste/list
