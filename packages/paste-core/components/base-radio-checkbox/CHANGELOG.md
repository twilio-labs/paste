# Change Log

## 14.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/help-text@14.0.0
  - @twilio-paste/label@14.0.0
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/flex@9.0.0
  - @twilio-paste/media-object@11.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/sibling-box@10.0.0
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 13.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Base-radio-checkbox] Specify exports for clarity in index.js file

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
  - @twilio-paste/help-text@13.0.0
  - @twilio-paste/label@13.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/flex@8.0.0
  - @twilio-paste/media-object@10.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/sibling-box@9.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 12.0.1

### Patch Changes

- [`360d79922`](https://github.com/twilio-labs/paste/commit/360d7992263fb162c74c8e7db20a97d0f170151c) [#3350](https://github.com/twilio-labs/paste/pull/3350) Thanks [@nkrantz](https://github.com/nkrantz)! - [Base Radio Checkbox] add new prop `applyHoverStyles` for extended styling abilities

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
  - @twilio-paste/sibling-box@8.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/help-text@12.0.0
  - @twilio-paste/label@12.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/flex@7.0.0
  - @twilio-paste/media-object@9.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 11.0.1

### Patch Changes

- [`71ce96cdc`](https://github.com/twilio-labs/paste/commit/71ce96cdc3db0c43d705c6b10c370d8dd5648319) [#3060](https://github.com/twilio-labs/paste/pull/3060) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Checkbox, Radio group] Update to styles for the One Twilio Design Language refresh

## 11.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/help-text@11.0.0
  - @twilio-paste/label@11.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/flex@6.0.0
  - @twilio-paste/media-object@8.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/sibling-box@7.0.0
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

## 10.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 10.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 10.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/help-text@10.0.0
  - @twilio-paste/label@10.0.0
  - @twilio-paste/screen-reader-only@10.0.0
  - @twilio-paste/flex@5.0.0
  - @twilio-paste/sibling-box@6.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/icons@9.0.0

## 9.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 9.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/sibling-box@5.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/help-text@9.0.0
  - @twilio-paste/label@9.0.0
  - @twilio-paste/screen-reader-only@9.0.0
  - @twilio-paste/flex@4.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 8.0.1

### Patch Changes

- [`13aad7aa`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba) [#2375](https://github.com/twilio-labs/paste/pull/2375) Thanks [@TheSisb](https://github.com/TheSisb)! - [Sibling-box, Base-radio-checkbox] Add styles for when the element has an error while it is disabled

## 8.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/help-text@8.0.0
  - @twilio-paste/screen-reader-only@8.0.0
  - @twilio-paste/label@8.0.0

## 7.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 7.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [checkbox]

  - Update the check icon to inherit color from `BaseRadioCheckbox`
  - Update selectAll background color to default to `colorBackground`, and use `colorBackgroundPrimaryWeakest` when checked and not disabled or indeterminate and not disabled
  - Update default color to `colorTextWeakest`
  - Update hover text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update focus text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update active text color to `colorTextWeakest`
  - Update checked text color to `colorTextInverse`
  - Update invalid and hover border color to `colorBorderErrorStronger`
  - Update checked and hover text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and focus text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and disabled text color to `colorTextWeakest`
  - Update checked and invalid text color to `colorTextInverse`
  - Update checked and invalid and hover background color to `colorBackgroundErrorStronger` and border color to `colorBorderErrorStronger`

## 7.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/help-text@7.0.0
  - @twilio-paste/label@7.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/flex@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/sibling-box@4.0.0
  - @twilio-paste/text@5.0.0

## 6.0.5

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 6.0.4

### Patch Changes

- [`ba307e2f`](https://github.com/twilio-labs/paste/commit/ba307e2f3b4f4f3dc932fe0f71a1b680fc06b521) [#1887](https://github.com/twilio-labs/paste/pull/1887) Thanks [@nkrantz](https://github.com/nkrantz)! - [BaseRadioCheckbox] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 6.0.3

### Patch Changes

- [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a) [#1398](https://github.com/twilio-labs/paste/pull/1398) Thanks [@zahnster](https://github.com/zahnster)! - Updated font weights for all form components to make them bolder

* [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 6.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/help-text@6.0.1
  - @twilio-paste/label@6.0.1
  - @twilio-paste/screen-reader-only@6.0.1
  - @twilio-paste/flex@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/sibling-box@3.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/help-text@6.0.0
  - @twilio-paste/screen-reader-only@6.0.0
  - @twilio-paste/label@6.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/help-text@5.0.1
  - @twilio-paste/label@5.0.1
  - @twilio-paste/screen-reader-only@5.0.1
  - @twilio-paste/flex@2.0.1
  - @twilio-paste/sibling-box@3.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`b1b4ac39`](https://github.com/twilio-labs/paste/commit/b1b4ac39ac70ec70bd9e150f2b8f94a123f1e1a6), [`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/label@5.0.0
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/help-text@5.0.0
  - @twilio-paste/screen-reader-only@5.0.0
  - @twilio-paste/flex@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/sibling-box@3.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/help-text@4.0.3
  - @twilio-paste/screen-reader-only@4.0.3
  - @twilio-paste/flex@1.0.2
  - @twilio-paste/label@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/help-text@4.0.2
  - @twilio-paste/label@4.0.2
  - @twilio-paste/screen-reader-only@4.0.2
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/sibling-box@2.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/help-text@4.0.1
  - @twilio-paste/screen-reader-only@4.0.1
  - @twilio-paste/label@4.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/help-text@4.0.0
  - @twilio-paste/label@4.0.0
  - @twilio-paste/screen-reader-only@4.0.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/sibling-box@2.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

* [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

* Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/label@3.0.1
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/sibling-box@1.2.2
  - @twilio-paste/flex@0.5.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/screen-reader-only@3.0.1
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/help-text@3.0.1
  - @twilio-paste/text@2.5.2

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/help-text@3.0.0
  - @twilio-paste/screen-reader-only@3.0.0
  - @twilio-paste/label@3.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.1.0...@twilio-paste/base-radio-checkbox@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.0.6...@twilio-paste/base-radio-checkbox@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.0.5...@twilio-paste/base-radio-checkbox@2.0.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.0.4...@twilio-paste/base-radio-checkbox@2.0.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.0.3...@twilio-paste/base-radio-checkbox@2.0.4) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.0.2...@twilio-paste/base-radio-checkbox@2.0.3) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.0.1...@twilio-paste/base-radio-checkbox@2.0.2) (2021-01-06)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@2.0.0...@twilio-paste/base-radio-checkbox@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.24...@twilio-paste/base-radio-checkbox@2.0.0) (2020-12-17)

### Bug Fixes

- **base-radio-checkbox:** add forwardRef ([e24b7f4](https://github.com/twilio-labs/paste/commit/e24b7f4b4008ceaa8e467bea8392112ddb2d2264))

### BREAKING CHANGES

- **base-radio-checkbox:** component is now using fowardRef

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.23...@twilio-paste/base-radio-checkbox@1.1.24) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.22...@twilio-paste/base-radio-checkbox@1.1.23) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.21...@twilio-paste/base-radio-checkbox@1.1.22) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.20...@twilio-paste/base-radio-checkbox@1.1.21) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.19...@twilio-paste/base-radio-checkbox@1.1.20) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.18...@twilio-paste/base-radio-checkbox@1.1.19) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.17...@twilio-paste/base-radio-checkbox@1.1.18) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.16...@twilio-paste/base-radio-checkbox@1.1.17) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.15...@twilio-paste/base-radio-checkbox@1.1.16) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.14...@twilio-paste/base-radio-checkbox@1.1.15) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.13...@twilio-paste/base-radio-checkbox@1.1.14) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.12...@twilio-paste/base-radio-checkbox@1.1.13) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.11...@twilio-paste/base-radio-checkbox@1.1.12) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.10...@twilio-paste/base-radio-checkbox@1.1.11) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.9...@twilio-paste/base-radio-checkbox@1.1.10) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.8...@twilio-paste/base-radio-checkbox@1.1.9) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.7...@twilio-paste/base-radio-checkbox@1.1.8) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.6...@twilio-paste/base-radio-checkbox@1.1.7) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.5...@twilio-paste/base-radio-checkbox@1.1.6) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.4...@twilio-paste/base-radio-checkbox@1.1.5) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.3...@twilio-paste/base-radio-checkbox@1.1.4) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.2...@twilio-paste/base-radio-checkbox@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.1...@twilio-paste/base-radio-checkbox@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/base-radio-checkbox@1.1.0...@twilio-paste/base-radio-checkbox@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/base-radio-checkbox

# 1.1.0 (2020-10-07)

### Features

- **base-radio-checkbox:** create the package ([9b7460a](https://github.com/twilio-labs/paste/commit/9b7460abe8cedfb08529cc4e4626c22585a1385d))
