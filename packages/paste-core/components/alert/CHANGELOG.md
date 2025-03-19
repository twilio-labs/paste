# Change Log

## 15.0.0

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
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 14.1.1

### Patch Changes

- [`31defbae0`](https://github.com/twilio-labs/paste/commit/31defbae0835226579b5239fc78851ada6c07c2a) [#4060](https://github.com/twilio-labs/paste/pull/4060) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Callout, Alert] updated styling

## 14.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert] Improved TsDoc annotations

## 14.0.0

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
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 13.0.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 13.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

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

## 12.0.1

### Patch Changes

- [`e7f4fcdaf`](https://github.com/twilio-labs/paste/commit/e7f4fcdaf4111511b7a5b400b1f4ad1523d0e142) [#3062](https://github.com/twilio-labs/paste/pull/3062) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert] Update styles to align with new Paste Twilio theme.

  In order to see all of the new style updates, you may have to remove any `<Text>` component children from your Alerts, passing in the string as a direct child of Alert.

## 12.0.0

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
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 11.0.3

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 11.0.2

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 11.0.1

### Patch Changes

- [`68d851d7a`](https://github.com/twilio-labs/paste/commit/68d851d7a888152cd957808b1f902de310f5b01c) [#2620](https://github.com/twilio-labs/paste/pull/2620) Thanks [@shleewhite](https://github.com/shleewhite)! - [Alert] add screen-reader-only as peerDependency

## 11.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/media-object@7.0.0
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
  - @twilio-paste/button@10.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/media-object@6.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/button@9.0.0
  - @twilio-paste/spinner@9.0.0

## 8.0.4

### Patch Changes

- [`b6ccaa266`](https://github.com/twilio-labs/paste/commit/b6ccaa266c8abc81820b77127da5abb0cf5308d4) [#2347](https://github.com/twilio-labs/paste/pull/2347) Thanks [@gloriliale](https://github.com/gloriliale)! - [Alert, Modal, Popover, Toast] Adjust close icon's hover state color, which was previously being overwritten.

## 8.0.3

### Patch Changes

- [`690a2d2a`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Alert] use title for i18n status labels

* [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 8.0.2

### Patch Changes

- [`2100371f`](https://github.com/twilio-labs/paste/commit/2100371f74c488f145b4d8bf0b814f6eaff609e4) [#2253](https://github.com/twilio-labs/paste/pull/2253) Thanks [@shleewhite](https://github.com/shleewhite)! - [Alert] add i18n props to support i18n

## 8.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [alert]

  - Update neutral Alert border to `colorBorderNeutralWeak`

## 8.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/box@5.0.0

## 7.1.2

### Patch Changes

- [`5d4515ea`](https://github.com/twilio-labs/paste/commit/5d4515ea31e06fa3e1478d5e42971a7973de9d51) [#2083](https://github.com/twilio-labs/paste/pull/2083) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert, Modal, Popover, Toast] Update close button to use `secondary_icon` button variant

## 7.1.1

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.1.0

### Minor Changes

- [`7f8afb28`](https://github.com/twilio-labs/paste/commit/7f8afb28f6f63f4d98d668c1ad8be0411411c1ba) [#1907](https://github.com/twilio-labs/paste/pull/1907) Thanks [@zahnster](https://github.com/zahnster)! - [Alert] Enable component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author."

## 7.0.2

### Patch Changes

- [`1ce8e1d3`](https://github.com/twilio-labs/paste/commit/1ce8e1d3768cede4d1e780d80b04a29477dd87d0) [#1835](https://github.com/twilio-labs/paste/pull/1835) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert] Icons in Alert now use text icon color tokens

## 7.0.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 7.0.0

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200)]:
  - @twilio-paste/button@7.0.0

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/media-object@4.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/media-object@4.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies []:
  - @twilio-paste/button@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/media-object@3.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/media-object@3.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/media-object@2.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/spinner@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@2.1.0...@twilio-paste/alert@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/alert

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@2.0.5...@twilio-paste/alert@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@2.0.4...@twilio-paste/alert@2.0.5) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/alert

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@2.0.3...@twilio-paste/alert@2.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/alert

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@2.0.2...@twilio-paste/alert@2.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/alert

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@2.0.1...@twilio-paste/alert@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/alert

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@2.0.0...@twilio-paste/alert@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/alert

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.50...@twilio-paste/alert@2.0.0) (2020-12-17)

### Bug Fixes

- **alert:** add forwardRef ([2c11935](https://github.com/twilio-labs/paste/commit/2c11935f6f9c03112864fc65df50fcef3b756b62))

### BREAKING CHANGES

- **alert:** component is now using fowardRef

## [1.0.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.49...@twilio-paste/alert@1.0.50) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.48...@twilio-paste/alert@1.0.49) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.47...@twilio-paste/alert@1.0.48) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.46...@twilio-paste/alert@1.0.47) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.45...@twilio-paste/alert@1.0.46) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.44...@twilio-paste/alert@1.0.45) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.43...@twilio-paste/alert@1.0.44) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.42...@twilio-paste/alert@1.0.43) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.41...@twilio-paste/alert@1.0.42) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.40...@twilio-paste/alert@1.0.41) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.39...@twilio-paste/alert@1.0.40) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.38...@twilio-paste/alert@1.0.39) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.37...@twilio-paste/alert@1.0.38) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.36...@twilio-paste/alert@1.0.37) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.35...@twilio-paste/alert@1.0.36) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.34...@twilio-paste/alert@1.0.35) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.33...@twilio-paste/alert@1.0.34) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.32...@twilio-paste/alert@1.0.33) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.31...@twilio-paste/alert@1.0.32) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.30...@twilio-paste/alert@1.0.31) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.29...@twilio-paste/alert@1.0.30) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.28...@twilio-paste/alert@1.0.29) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.27...@twilio-paste/alert@1.0.28) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.26...@twilio-paste/alert@1.0.27) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.25...@twilio-paste/alert@1.0.26) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.24...@twilio-paste/alert@1.0.25) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.23...@twilio-paste/alert@1.0.24) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.22...@twilio-paste/alert@1.0.23) (2020-09-23)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.21...@twilio-paste/alert@1.0.22) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.20...@twilio-paste/alert@1.0.21) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.19...@twilio-paste/alert@1.0.20) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.18...@twilio-paste/alert@1.0.19) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.17...@twilio-paste/alert@1.0.18) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.16...@twilio-paste/alert@1.0.17) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.15...@twilio-paste/alert@1.0.16) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.14...@twilio-paste/alert@1.0.15) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.13...@twilio-paste/alert@1.0.14) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.12...@twilio-paste/alert@1.0.13) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.11...@twilio-paste/alert@1.0.12) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.10...@twilio-paste/alert@1.0.11) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.9...@twilio-paste/alert@1.0.10) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.8...@twilio-paste/alert@1.0.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.7...@twilio-paste/alert@1.0.8) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.6...@twilio-paste/alert@1.0.7) (2020-08-24)

### Bug Fixes

- **alert:** increase bottom padding to accomodate reduced line-height ([38e2591](https://github.com/twilio-labs/paste/commit/38e2591d1cea6c38dc59bdc5bd58c39f5f553141))

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.5...@twilio-paste/alert@1.0.6) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.4...@twilio-paste/alert@1.0.5) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.3...@twilio-paste/alert@1.0.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.2...@twilio-paste/alert@1.0.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.1...@twilio-paste/alert@1.0.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/alert

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@1.0.0...@twilio-paste/alert@1.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/alert

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.71...@twilio-paste/alert@1.0.0) (2020-08-05)

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

## [0.1.71](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.70...@twilio-paste/alert@0.1.71) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.70](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.69...@twilio-paste/alert@0.1.70) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.69](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.68...@twilio-paste/alert@0.1.69) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.68](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.67...@twilio-paste/alert@0.1.68) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.67](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.66...@twilio-paste/alert@0.1.67) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.66](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.65...@twilio-paste/alert@0.1.66) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.65](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.64...@twilio-paste/alert@0.1.65) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.64](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.63...@twilio-paste/alert@0.1.64) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.63](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.62...@twilio-paste/alert@0.1.63) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.62](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.61...@twilio-paste/alert@0.1.62) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.61](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.60...@twilio-paste/alert@0.1.61) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.60](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.59...@twilio-paste/alert@0.1.60) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.59](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.58...@twilio-paste/alert@0.1.59) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.58](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.57...@twilio-paste/alert@0.1.58) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.56...@twilio-paste/alert@0.1.57) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.55...@twilio-paste/alert@0.1.56) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.54...@twilio-paste/alert@0.1.55) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.53...@twilio-paste/alert@0.1.54) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.52...@twilio-paste/alert@0.1.53) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.51...@twilio-paste/alert@0.1.52) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.50...@twilio-paste/alert@0.1.51) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.49...@twilio-paste/alert@0.1.50) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.48...@twilio-paste/alert@0.1.49) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.47...@twilio-paste/alert@0.1.48) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.46...@twilio-paste/alert@0.1.47) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.45...@twilio-paste/alert@0.1.46) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.44...@twilio-paste/alert@0.1.45) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.43...@twilio-paste/alert@0.1.44) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.42...@twilio-paste/alert@0.1.43) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.41...@twilio-paste/alert@0.1.42) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.40...@twilio-paste/alert@0.1.41) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.39...@twilio-paste/alert@0.1.40) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.38...@twilio-paste/alert@0.1.39) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.37...@twilio-paste/alert@0.1.38) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.36...@twilio-paste/alert@0.1.37) (2020-04-29)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.35...@twilio-paste/alert@0.1.36) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.34...@twilio-paste/alert@0.1.35) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.33...@twilio-paste/alert@0.1.34) (2020-04-20)

### Bug Fixes

- **alert:** lighten the warning and error icons ([23ebc38](https://github.com/twilio-labs/paste/commit/23ebc3827d825c3fd1396605029cb81bad48a365))

## [0.1.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.32...@twilio-paste/alert@0.1.33) (2020-04-17)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.31...@twilio-paste/alert@0.1.32) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.30...@twilio-paste/alert@0.1.31) (2020-04-08)

### Bug Fixes

- **alert:** package dependencies updated to be correct ([3bcf469](https://github.com/twilio-labs/paste/commit/3bcf469757578fde6e1c0c6502f05252cd78fcb9))

## [0.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.29...@twilio-paste/alert@0.1.30) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.28...@twilio-paste/alert@0.1.29) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.27...@twilio-paste/alert@0.1.28) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.26...@twilio-paste/alert@0.1.27) (2020-03-28)

### Bug Fixes

- **alert:** set default elements to divs and update stories and snapshots ([63035fe](https://github.com/twilio-labs/paste/commit/63035fee1d5045fa96fccde9f98f7a5f7bc0ad11))

## [0.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.25...@twilio-paste/alert@0.1.26) (2020-03-24)

### Bug Fixes

- **alert:** switch from theme-tokens to theme package dep ([1896a4f](https://github.com/twilio-labs/paste/commit/1896a4fcbd14aae686ea7cea718cb4c72f96c7d0))

## [0.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.24...@twilio-paste/alert@0.1.25) (2020-03-20)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.23...@twilio-paste/alert@0.1.24) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.22...@twilio-paste/alert@0.1.23) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.21...@twilio-paste/alert@0.1.22) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.20...@twilio-paste/alert@0.1.21) (2020-03-06)

### Bug Fixes

- add missing transitive peerDep on '@styled-system/css' ([fdbb813](https://github.com/twilio-labs/paste/commit/fdbb81370cda71037348742a680299ce481eabfd))

## [0.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.19...@twilio-paste/alert@0.1.20) (2020-03-04)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.18...@twilio-paste/alert@0.1.19) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.17...@twilio-paste/alert@0.1.18) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.16...@twilio-paste/alert@0.1.17) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.15...@twilio-paste/alert@0.1.16) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.14...@twilio-paste/alert@0.1.15) (2020-02-21)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.13...@twilio-paste/alert@0.1.14) (2020-02-20)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.12...@twilio-paste/alert@0.1.13) (2020-02-19)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.11...@twilio-paste/alert@0.1.12) (2020-02-18)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.10...@twilio-paste/alert@0.1.11) (2020-02-14)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.9...@twilio-paste/alert@0.1.10) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.8...@twilio-paste/alert@0.1.9) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.7...@twilio-paste/alert@0.1.8) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.6...@twilio-paste/alert@0.1.7) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.5...@twilio-paste/alert@0.1.6) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.4...@twilio-paste/alert@0.1.5) (2020-02-07)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.3...@twilio-paste/alert@0.1.4) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.2...@twilio-paste/alert@0.1.3) (2020-01-27)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.1...@twilio-paste/alert@0.1.2) (2020-01-25)

**Note:** Version bump only for package @twilio-paste/alert

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.1.0...@twilio-paste/alert@0.1.1) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/alert

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.0.2...@twilio-paste/alert@0.1.0) (2020-01-17)

### Bug Fixes

- **alert:** amend missing deps for successful build ([e256ced](https://github.com/twilio-labs/paste/commit/e256cedbe21b374b0f261779adf899805a5e953a))

### Features

- **alert:** create the alert component ([7e929e7](https://github.com/twilio-labs/paste/commit/7e929e7520823c9efbb3f648924b1c690d70d261))

## [0.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/alert@0.0.1...@twilio-paste/alert@0.0.2) (2019-10-29)

**Note:** Version bump only for package @twilio-paste/alert

## 0.0.1 (2019-08-15)

**Note:** Version bump only for package @twilio-paste/alert
