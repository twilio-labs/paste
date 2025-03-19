# Change Log

## 10.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 9.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Avatar] Improved TsDoc annotations

## 9.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 8.1.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

* [`93851962d`](https://github.com/twilio-labs/paste/commit/93851962dfe583724496603681a11bb9d452c34b) [#3349](https://github.com/twilio-labs/paste/pull/3349) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Avatar]: set transparent background color for image based avatars so that transparent images are displayed as such. Also fix setting the size of icon and image avatars when placed in a group

## 8.1.0

### Minor Changes

- [`d0ea87541`](https://github.com/twilio-labs/paste/commit/d0ea875419dfa20bb47c3b2d689ec85e6c034e84) [#3218](https://github.com/twilio-labs/paste/pull/3218) Thanks [@nkrantz](https://github.com/nkrantz)! - [Avatar] Add Avatar Group component

* [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Avatar] Export types for use in the Topbar package

## 8.0.0

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
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 7.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df) [#3021](https://github.com/twilio-labs/paste/pull/3021) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] Update styles to align with new Paste Twilio theme

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/text@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/icons@10.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 6.1.3

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 6.1.2

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 6.1.1

### Patch Changes

- [`114e80db7`](https://github.com/twilio-labs/paste/commit/114e80db74253a2bf902edfb853a940d6b6310dd) [#2693](https://github.com/twilio-labs/paste/pull/2693) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] add flexShrink 0 so it stays the correct size in a flex layout

* [`b5c19e60e`](https://github.com/twilio-labs/paste/commit/b5c19e60e5d1c59b47c3455b3adf0d779ecf65e5) [#2685](https://github.com/twilio-labs/paste/pull/2685) Thanks [@nkrantz](https://github.com/nkrantz)! - [Avatar] Prevent underlines from being added to Avatar initials inside of anchors or display pills

## 6.1.0

### Minor Changes

- [`0ead4dfa0`](https://github.com/twilio-labs/paste/commit/0ead4dfa0492a8caa50b147a81583ea8e306a665) [#2681](https://github.com/twilio-labs/paste/pull/2681) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] add new variant and color props

## 6.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/icons@9.0.0

## 5.0.1

### Patch Changes

- [`8263d8a3`](https://github.com/twilio-labs/paste/commit/8263d8a3618685582cd282aae9877a00a92c320c) [#2452](https://github.com/twilio-labs/paste/pull/2452) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] allow both src and icon props at the same

* [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

- [`3bfd6394`](https://github.com/twilio-labs/paste/commit/3bfd639407f60386fdd92b76d66e5e506979c282) [#2456](https://github.com/twilio-labs/paste/pull/2456) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] simplify logic for when to show image or icon

## 5.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 4.0.0

### Patch Changes

- [`10178f39`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377) [#2363](https://github.com/twilio-labs/paste/pull/2363) Thanks [@shleewhite](https://github.com/shleewhite)! - [Avatar] update icon prop to work with forwardRef icons

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0

## 3.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 3.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 3.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 2.2.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 2.2.0

### Minor Changes

- [`d14381b9`](https://github.com/twilio-labs/paste/commit/d14381b96ab3e83d4987b91db755ed27d315b3c6) [#1742](https://github.com/twilio-labs/paste/pull/1742) Thanks [@gloriliale](https://github.com/gloriliale)! - [Avatar] Enable Avatar to respect customizations set on the customization provider. Avatar now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 2.1.1

### Patch Changes

- [`64edb7fc`](https://github.com/twilio-labs/paste/commit/64edb7fc6d1305c9fdf37b86933484732fab3ff7) [#1367](https://github.com/twilio-labs/paste/pull/1367) Thanks [@nkrantz](https://github.com/nkrantz)! - Restricted Avatar propTypes so that users cannot add both `src` and `icon` props to Avatar, only one or the other.

* [`fd8cbb89`](https://github.com/twilio-labs/paste/commit/fd8cbb89a9459fd5e012cba8f45060ad2e384e24) [#1345](https://github.com/twilio-labs/paste/pull/1345) Thanks [@gloriliale](https://github.com/gloriliale)! - Avatar: fixed size prop to make it optional and have a default of icon-size-70.

## 2.1.0

### Minor Changes

- [`3419ff64`](https://github.com/twilio-labs/paste/commit/3419ff64a07056ae365956d03ec62f1e5e619f29) [#1281](https://github.com/twilio-labs/paste/pull/1281) Thanks [@nkrantz](https://github.com/nkrantz)! - Created an 'icon' prop on Avatar so that users can display Paste icons inside of Avatar components.

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 2.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/style-props@3.0.0

## 1.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/style-props@2.0.0

## 0.4.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/text@2.5.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.4.0...@twilio-paste/avatar@0.4.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.3...@twilio-paste/avatar@0.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.2...@twilio-paste/avatar@0.3.3) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.1...@twilio-paste/avatar@0.3.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.3.0...@twilio-paste/avatar@0.3.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.29...@twilio-paste/avatar@0.3.0) (2020-12-17)

### Bug Fixes

- **avatar:** add forwardRef ([f6f72f1](https://github.com/twilio-labs/paste/commit/f6f72f1c4915f783ee289fbff8ea24313616db56))

### BREAKING CHANGES

- **avatar:** component is now using fowardRef

## [0.2.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.28...@twilio-paste/avatar@0.2.29) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.27...@twilio-paste/avatar@0.2.28) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.26...@twilio-paste/avatar@0.2.27) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.25...@twilio-paste/avatar@0.2.26) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.24...@twilio-paste/avatar@0.2.25) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.23...@twilio-paste/avatar@0.2.24) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.22...@twilio-paste/avatar@0.2.23) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.21...@twilio-paste/avatar@0.2.22) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.20...@twilio-paste/avatar@0.2.21) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.19...@twilio-paste/avatar@0.2.20) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.18...@twilio-paste/avatar@0.2.19) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.17...@twilio-paste/avatar@0.2.18) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.16...@twilio-paste/avatar@0.2.17) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.15...@twilio-paste/avatar@0.2.16) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.14...@twilio-paste/avatar@0.2.15) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.13...@twilio-paste/avatar@0.2.14) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.12...@twilio-paste/avatar@0.2.13) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.11...@twilio-paste/avatar@0.2.12) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.10...@twilio-paste/avatar@0.2.11) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.9...@twilio-paste/avatar@0.2.10) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.8...@twilio-paste/avatar@0.2.9) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.7...@twilio-paste/avatar@0.2.8) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.6...@twilio-paste/avatar@0.2.7) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.5...@twilio-paste/avatar@0.2.6) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.4...@twilio-paste/avatar@0.2.5) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.3...@twilio-paste/avatar@0.2.4) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.2...@twilio-paste/avatar@0.2.3) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.1...@twilio-paste/avatar@0.2.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.2.0...@twilio-paste/avatar@0.2.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.7...@twilio-paste/avatar@0.2.0) (2020-08-11)

### Features

- **avatar:** change background and font weight for initials ([bf97215](https://github.com/twilio-labs/paste/commit/bf97215ee0dbef97b6acc0238e66b1233c2e6a7d))

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.6...@twilio-paste/avatar@0.1.7) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.5...@twilio-paste/avatar@0.1.6) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.4...@twilio-paste/avatar@0.1.5) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.3...@twilio-paste/avatar@0.1.4) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.2...@twilio-paste/avatar@0.1.3) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.1...@twilio-paste/avatar@0.1.2) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/avatar

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.1.0...@twilio-paste/avatar@0.1.1) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/avatar

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/avatar@0.0.2...@twilio-paste/avatar@0.1.0) (2020-07-15)

### Features

- **avatar:** alpha component build ([b2f6570](https://github.com/twilio-labs/paste/commit/b2f6570057f4f177f4a82a5d42bfaae84ca5c300))
