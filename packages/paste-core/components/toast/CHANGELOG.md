# Change Log

## 13.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 13.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/spinner@15.0.0
  - @twilio-paste/media-object@11.0.0
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/reakit-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 12.2.2

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 12.2.1

### Patch Changes

- [`2951f5c07`](https://github.com/twilio-labs/paste/commit/2951f5c07c4dc537150c83e6985348fc2196f20e) [#4058](https://github.com/twilio-labs/paste/pull/4058) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Toast] resolved issue where multiple toasts were not being dismissed

## 12.2.0

### Minor Changes

- [`33116f9c9`](https://github.com/twilio-labs/paste/commit/33116f9c9ef5211959dd844668c803095d202098) [#3749](https://github.com/twilio-labs/paste/pull/3749) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Toast]: adds ability to display multiple toasts from a single call

## 12.1.1

### Patch Changes

- [`7d193d6bd`](https://github.com/twilio-labs/paste/commit/7d193d6bda1535f1a9347798c8ab96733bb8af77) [#3558](https://github.com/twilio-labs/paste/pull/3558) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Toast] Improve TsDoc type annotations

## 12.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 12.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/media-object@10.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/reakit-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 11.0.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 11.0.0

### Major Changes

- [`e45d34c14`](https://github.com/twilio-labs/paste/commit/e45d34c143a4b2cd5c9905506eea1f5365417133) [#3081](https://github.com/twilio-labs/paste/pull/3081) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast]

  - Remove `__console_patch` prop from the Toast package. This was a temporary z-index fix for console that is no longer necessary.
  - Add `left` prop to the Toast package so that consumers can place their Toasts according to their app's breakpoints. This feature enables mobile responsiveness for Toast.

* [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Toast] improved backwards compat with React 17 types

- Updated dependencies [[`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08), [`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/button@13.0.0
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/media-object@9.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 10.0.1

### Patch Changes

- [`e7f4fcdaf`](https://github.com/twilio-labs/paste/commit/e7f4fcdaf4111511b7a5b400b1f4ad1523d0e142) [#3062](https://github.com/twilio-labs/paste/pull/3062) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast] Update styles to align with new Paste Twilio theme.

  In order to see all of the new style updates, you may have to remove any `<Text>` component children from your Toasts, passing in the string as a direct child of Toast.

## 10.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/button@12.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/spinner@12.0.0
  - @twilio-paste/media-object@8.0.0
  - @twilio-paste/stack@6.0.0
  - @twilio-paste/box@8.0.0
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

## 9.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 9.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 9.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/media-object@7.0.0
  - @twilio-paste/stack@5.0.0
  - @twilio-paste/icons@9.0.0

## 8.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 8.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/button@10.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/media-object@6.0.0
  - @twilio-paste/stack@4.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 7.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/button@9.0.0
  - @twilio-paste/spinner@9.0.0

## 6.0.3

### Patch Changes

- [`b6ccaa266`](https://github.com/twilio-labs/paste/commit/b6ccaa266c8abc81820b77127da5abb0cf5308d4) [#2347](https://github.com/twilio-labs/paste/pull/2347) Thanks [@gloriliale](https://github.com/gloriliale)! - [Alert, Modal, Popover, Toast] Adjust close icon's hover state color, which was previously being overwritten.

## 6.0.2

### Patch Changes

- [`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Toast] use title for i18n status labels

* [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 6.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [toast]

  - Update neutral Toast border left color to `colorBorderNeutralWeak`

- [`b4abdd9a4`](https://github.com/twilio-labs/paste/commit/b4abdd9a4c6e168c5845e744591dc40ac635a67f) [#2234](https://github.com/twilio-labs/paste/pull/2234) Thanks [@gloriliale](https://github.com/gloriliale)! - [Toast] add i18n props for variants to support i18n

## 6.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0

## 5.2.2

### Patch Changes

- [`5d4515ea`](https://github.com/twilio-labs/paste/commit/5d4515ea31e06fa3e1478d5e42971a7973de9d51) [#2083](https://github.com/twilio-labs/paste/pull/2083) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert, Modal, Popover, Toast] Update close button to use `secondary_icon` button variant

## 5.2.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 5.2.0

### Minor Changes

- [`d4eaf8b1`](https://github.com/twilio-labs/paste/commit/d4eaf8b1802780842daeeaed43ba1cc5062d2a9e) [#1919](https://github.com/twilio-labs/paste/pull/1919) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 5.1.1

### Patch Changes

- [`8006c59b`](https://github.com/twilio-labs/paste/commit/8006c59b6e56633405c0835707da6704169b26e9) [#1835](https://github.com/twilio-labs/paste/pull/1835) Thanks [@nkrantz](https://github.com/nkrantz)! - [Toast] Icons in Toast now use text icon color tokens.

## 5.1.0

### Minor Changes

- [`63a39e0c`](https://github.com/twilio-labs/paste/commit/63a39e0c86d5c7683420f373eb3ed71e02e621aa) [#1818](https://github.com/twilio-labs/paste/pull/1818) Thanks [@TheSisb](https://github.com/TheSisb)! - [Toast] The `useToaster` push method now allows passing in an `onDismiss` callback function.

## 5.0.2

### Patch Changes

- [`5e770d20`](https://github.com/twilio-labs/paste/commit/5e770d200ebef1f18b67e6861407e8c092503c57) [#1558](https://github.com/twilio-labs/paste/pull/1558) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixes a bug where Toasts may not display using the provided Toaster for users with the system flag "prefers-reduced-motion"

## 5.0.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 5.0.0

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200)]:
  - @twilio-paste/button@7.0.0

## 4.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/stack@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 4.0.1

### Patch Changes

- [`22410172`](https://github.com/twilio-labs/paste/commit/224101728b1c55d31408b0dccecb489ce6cd2319) [#1287](https://github.com/twilio-labs/paste/pull/1287) Thanks [@TheSisb](https://github.com/TheSisb)! - Added a `__console_patch` boolean prop to fix issues with z-index in Twilio Console applications. This is a temporary fix.

## 4.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 3.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/media-object@4.0.1
  - @twilio-paste/stack@2.0.1
  - @twilio-paste/icons@5.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/media-object@4.0.0
  - @twilio-paste/stack@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 2.0.3

### Patch Changes

- [`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592) [#1228](https://github.com/twilio-labs/paste/pull/1228) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Bump status of the component to production

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/stack@1.0.2
  - @twilio-paste/button@4.0.3

## 2.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/media-object@3.0.1
  - @twilio-paste/stack@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 2.0.1

### Patch Changes

- [`8e45efee`](https://github.com/twilio-labs/paste/commit/8e45efeecfba9599b3b049f196d60b5c6ee0da55) [#1181](https://github.com/twilio-labs/paste/pull/1181) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a bug when setting an auto dismissing toast via the useToaster hook, that was supplied a custom id.

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/media-object@3.0.0
  - @twilio-paste/stack@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 1.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/stack@0.3.2
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/media-object@2.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/spinner@4.0.1

## 1.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.4.0...@twilio-paste/toast@0.4.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/toast

# [0.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.6...@twilio-paste/toast@0.4.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [0.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.5...@twilio-paste/toast@0.3.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.4...@twilio-paste/toast@0.3.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.3...@twilio-paste/toast@0.3.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.2...@twilio-paste/toast@0.3.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.1...@twilio-paste/toast@0.3.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.3.0...@twilio-paste/toast@0.3.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/toast

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.16...@twilio-paste/toast@0.3.0) (2020-12-17)

### Bug Fixes

- **toast:** add forwardRef ([f32579f](https://github.com/twilio-labs/paste/commit/f32579fdf706fd9eb74b4a006efcce190ab4a381))

### BREAKING CHANGES

- **toast:** component is now using fowardRef

## [0.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.15...@twilio-paste/toast@0.2.16) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.14...@twilio-paste/toast@0.2.15) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.13...@twilio-paste/toast@0.2.14) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.12...@twilio-paste/toast@0.2.13) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.11...@twilio-paste/toast@0.2.12) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.10...@twilio-paste/toast@0.2.11) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.9...@twilio-paste/toast@0.2.10) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.8...@twilio-paste/toast@0.2.9) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.7...@twilio-paste/toast@0.2.8) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.6...@twilio-paste/toast@0.2.7) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.5...@twilio-paste/toast@0.2.6) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.4...@twilio-paste/toast@0.2.5) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.3...@twilio-paste/toast@0.2.4) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.2...@twilio-paste/toast@0.2.3) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.1...@twilio-paste/toast@0.2.2) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/toast

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.2.0...@twilio-paste/toast@0.2.1) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/toast

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.11...@twilio-paste/toast@0.2.0) (2020-10-22)

### Features

- **toast:** add the toaster to handle showing toasts ([bb94744](https://github.com/twilio-labs/paste/commit/bb9474481ef67f72a073b45a970e83b7e93e139e))
- **toast:** update the icon used in neutral toast ([a923709](https://github.com/twilio-labs/paste/commit/a92370961a89ab09d78128da930dd88ef3519422))

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.10...@twilio-paste/toast@0.1.11) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.9...@twilio-paste/toast@0.1.10) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.8...@twilio-paste/toast@0.1.9) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.7...@twilio-paste/toast@0.1.8) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.6...@twilio-paste/toast@0.1.7) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.5...@twilio-paste/toast@0.1.6) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.4...@twilio-paste/toast@0.1.5) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.3...@twilio-paste/toast@0.1.4) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.2...@twilio-paste/toast@0.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.1...@twilio-paste/toast@0.1.2) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/toast

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.1.0...@twilio-paste/toast@0.1.1) (2020-09-23)

**Note:** Version bump only for package @twilio-paste/toast

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/toast@0.0.2...@twilio-paste/toast@0.1.0) (2020-09-22)

### Features

- **toast:** add toast package ([a35eb8a](https://github.com/twilio-labs/paste/commit/a35eb8aa605d281c8d13210cdbbe2e1f11f25e81))
