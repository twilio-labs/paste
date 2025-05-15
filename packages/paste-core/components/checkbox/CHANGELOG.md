# Change Log

## 14.0.2

### Patch Changes

- [`6040893c0`](https://github.com/twilio-labs/paste/commit/6040893c0b7c8c0e2d61d14d2278de2b9829a825) [#4311](https://github.com/twilio-labs/paste/pull/4311) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Base Radio Checkbox, Button, Combobox, File Picker, File Uploader, Input, Input Box, Menu, Select, Textarea, Visual Picker] Update styles of form related components

## 14.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 14.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/base-radio-checkbox@14.0.0
  - @twilio-paste/help-text@14.0.0
  - @twilio-paste/inline-control-group@14.0.0
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

## 13.1.2

### Patch Changes

- [`300c6c299`](https://github.com/twilio-labs/paste/commit/300c6c29980057c86c2711feef6700ccffc82ff1) [#4020](https://github.com/twilio-labs/paste/pull/4020) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Checkbox] exposed helpText on CheckboxDisclaimer

## 13.1.1

### Patch Changes

- [`3b350c741`](https://github.com/twilio-labs/paste/commit/3b350c741615094c62ba1df4d062d3e02c0ab261) [#3522](https://github.com/twilio-labs/paste/pull/3522) Thanks [@abereghici](https://github.com/abereghici)! - chore: removed unnecessary type assertions

## 13.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Checkbox] Improved TsDoc type annotations

## 13.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/base-radio-checkbox@13.0.0
  - @twilio-paste/help-text@13.0.0
  - @twilio-paste/inline-control-group@13.0.0
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

- [`360d79922`](https://github.com/twilio-labs/paste/commit/360d7992263fb162c74c8e7db20a97d0f170151c) [#3350](https://github.com/twilio-labs/paste/pull/3350) Thanks [@nkrantz](https://github.com/nkrantz)! - [Checkbox, Radio Group] export HiddenRadio, HiddenRadioState, HiddenCheckbox, and CheckboxIcon from package for use in Visual Picker package

* [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 12.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Checkbox, Radio Group, Radio Button Group] improved backwards compat with React 17 types

- Updated dependencies [[`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/sibling-box@8.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/inline-control-group@12.0.0
  - @twilio-paste/base-radio-checkbox@12.0.0
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
  - @twilio-paste/base-radio-checkbox@11.0.0
  - @twilio-paste/help-text@11.0.0
  - @twilio-paste/inline-control-group@11.0.0
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

## 10.0.4

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 10.0.3

### Patch Changes

- [`c39613422`](https://github.com/twilio-labs/paste/commit/c39613422428ba7765bcd6e03817111c2f1910bb) [#2878](https://github.com/twilio-labs/paste/pull/2878) Thanks [@Niznikr](https://github.com/Niznikr)! - Update to TypeScript v4.9

## 10.0.2

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 10.0.1

### Patch Changes

- [`02725a235`](https://github.com/twilio-labs/paste/commit/02725a235378cd9bb3eaa6513731d98877cc5b35) [#2667](https://github.com/twilio-labs/paste/pull/2667) Thanks [@shleewhite](https://github.com/shleewhite)! - [Checkbox, RadioGroup] When no id is passed, use a unique id. This fixes an issue where id is not marked as a required prop, but the control won't work unless it is passed.

## 10.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/base-radio-checkbox@10.0.0
  - @twilio-paste/help-text@10.0.0
  - @twilio-paste/inline-control-group@10.0.0
  - @twilio-paste/label@10.0.0
  - @twilio-paste/screen-reader-only@10.0.0
  - @twilio-paste/media-object@7.0.0
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
  - @twilio-paste/base-radio-checkbox@9.0.0
  - @twilio-paste/help-text@9.0.0
  - @twilio-paste/inline-control-group@9.0.0
  - @twilio-paste/label@9.0.0
  - @twilio-paste/screen-reader-only@9.0.0
  - @twilio-paste/media-object@6.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 8.0.1

### Patch Changes

- [`13aad7aa7`](https://github.com/twilio-labs/paste/commit/13aad7aa748399bb850a0bc9b738914622e579ba) [#2375](https://github.com/twilio-labs/paste/pull/2375) Thanks [@TheSisb](https://github.com/TheSisb)! - [Checkbox] Minor code refactor

## 8.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/base-radio-checkbox@8.0.0
  - @twilio-paste/help-text@8.0.0
  - @twilio-paste/inline-control-group@8.0.0
  - @twilio-paste/screen-reader-only@8.0.0
  - @twilio-paste/label@8.0.0

## 7.0.3

### Patch Changes

- [`554da970`](https://github.com/twilio-labs/paste/commit/554da970803cac28904177b606f5c86cf9c435bf) [#2274](https://github.com/twilio-labs/paste/pull/2274) Thanks [@shleewhite](https://github.com/shleewhite)! - [checkbox, inline-control-group, radio-group] add i18nRequiredLabel prop for i18n

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

### Minor Changes

- [`02285a8aa`](https://github.com/twilio-labs/paste/commit/02285a8aadfafc3fb1fcb024ca78abe2f5204f5a) [#2167](https://github.com/twilio-labs/paste/pull/2167) Thanks [@shleewhite](https://github.com/shleewhite)! - [Checkbox] Hide check icon when not checked, add the defaultChecked prop.

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/base-radio-checkbox@7.0.0
  - @twilio-paste/help-text@7.0.0
  - @twilio-paste/inline-control-group@7.0.0
  - @twilio-paste/label@7.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/sibling-box@4.0.0
  - @twilio-paste/text@5.0.0

## 6.1.3

### Patch Changes

- [`be59394d2`](https://github.com/twilio-labs/paste/commit/be59394d282ed46dfe7c41ef2dc16372d1da3947) [#2057](https://github.com/twilio-labs/paste/pull/2057) Thanks [@zahnster](https://github.com/zahnster)! - [Checkbox] Declare relative position on checkbox to fix focus position bug

## 6.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 6.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

* [`3f80fef3`](https://github.com/twilio-labs/paste/commit/3f80fef3173ddaf084f26a371040fc6b4eaa585a) [#1936](https://github.com/twilio-labs/paste/pull/1936) Thanks [@gloriliale](https://github.com/gloriliale)! - [Checkbox] Ensured PropTypes aligned with customization needs by adding element prop.

## 6.1.0

### Minor Changes

- [`b9658287`](https://github.com/twilio-labs/paste/commit/b96582875b124d953164b0c98cafa079b53e7d70) [#1899](https://github.com/twilio-labs/paste/pull/1899) Thanks [@gloriliale](https://github.com/gloriliale)! - [Checkbox] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 6.0.5

### Patch Changes

- [`2086d9a2`](https://github.com/twilio-labs/paste/commit/2086d9a2cc592a4c9ac7ce07ab00a8592bcdba6a) [#1448](https://github.com/twilio-labs/paste/pull/1448) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fix coloring the checkmark of a checkbox when interacting with it

## 6.0.4

### Patch Changes

- [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a) [#1398](https://github.com/twilio-labs/paste/pull/1398) Thanks [@zahnster](https://github.com/zahnster)! - Updated font weights for all form components to make them bolder

* [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 6.0.3

### Patch Changes

- [`5e08f10d`](https://github.com/twilio-labs/paste/commit/5e08f10da50f13c057bb20a7208fcfb7ff08d6ad) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Checkbox] Remove unused `value` prop.

## 6.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/base-radio-checkbox@6.0.1
  - @twilio-paste/help-text@6.0.1
  - @twilio-paste/inline-control-group@6.0.1
  - @twilio-paste/label@6.0.1
  - @twilio-paste/screen-reader-only@6.0.1
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/sibling-box@3.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/base-radio-checkbox@6.0.0
  - @twilio-paste/help-text@6.0.0
  - @twilio-paste/inline-control-group@6.0.0
  - @twilio-paste/screen-reader-only@6.0.0
  - @twilio-paste/label@6.0.0

## 5.0.2

### Patch Changes

- [`12a669a3`](https://github.com/twilio-labs/paste/commit/12a669a33292915a71c0b83c1f7cf24d4cd28b8b) [#1251](https://github.com/twilio-labs/paste/pull/1251) Thanks [@richbachman](https://github.com/richbachman)! - Removed required from the `id` prop, so Checkbox can be used as an uncontrolled component. This allows Checkbox to be used with libraries like `React-Hook-Form`.

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/base-radio-checkbox@5.0.1
  - @twilio-paste/help-text@5.0.1
  - @twilio-paste/inline-control-group@5.0.1
  - @twilio-paste/label@5.0.1
  - @twilio-paste/screen-reader-only@5.0.1
  - @twilio-paste/media-object@4.0.1
  - @twilio-paste/sibling-box@3.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- [`083b31d2`](https://github.com/twilio-labs/paste/commit/083b31d262b9350626bab9a926c95f91c99a4e43) [#1232](https://github.com/twilio-labs/paste/pull/1232) Thanks [@richbachman](https://github.com/richbachman)! - Added the required dot to the checkbox label when the checkbox `required` prop is set to `true`.

- Updated dependencies [[`b1b4ac39`](https://github.com/twilio-labs/paste/commit/b1b4ac39ac70ec70bd9e150f2b8f94a123f1e1a6), [`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/label@5.0.0
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/base-radio-checkbox@5.0.0
  - @twilio-paste/inline-control-group@5.0.0
  - @twilio-paste/help-text@5.0.0
  - @twilio-paste/screen-reader-only@5.0.0
  - @twilio-paste/media-object@4.0.0
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
  - @twilio-paste/base-radio-checkbox@4.0.3
  - @twilio-paste/inline-control-group@4.0.3
  - @twilio-paste/label@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/base-radio-checkbox@4.0.2
  - @twilio-paste/help-text@4.0.2
  - @twilio-paste/inline-control-group@4.0.2
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
  - @twilio-paste/base-radio-checkbox@4.0.1
  - @twilio-paste/help-text@4.0.1
  - @twilio-paste/inline-control-group@4.0.1
  - @twilio-paste/screen-reader-only@4.0.1
  - @twilio-paste/label@4.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/base-radio-checkbox@4.0.0
  - @twilio-paste/help-text@4.0.0
  - @twilio-paste/inline-control-group@4.0.0
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

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/inline-control-group@3.0.1
  - @twilio-paste/base-radio-checkbox@3.0.1
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
  - @twilio-paste/base-radio-checkbox@3.0.0
  - @twilio-paste/help-text@3.0.0
  - @twilio-paste/inline-control-group@3.0.0
  - @twilio-paste/screen-reader-only@3.0.0
  - @twilio-paste/label@3.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.1.0...@twilio-paste/checkbox@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/checkbox

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.0.6...@twilio-paste/checkbox@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.0.5...@twilio-paste/checkbox@2.0.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/checkbox

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.0.4...@twilio-paste/checkbox@2.0.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/checkbox

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.0.3...@twilio-paste/checkbox@2.0.4) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/checkbox

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.0.2...@twilio-paste/checkbox@2.0.3) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/checkbox

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.0.1...@twilio-paste/checkbox@2.0.2) (2021-01-06)

**Note:** Version bump only for package @twilio-paste/checkbox

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@2.0.0...@twilio-paste/checkbox@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/checkbox

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.25...@twilio-paste/checkbox@2.0.0) (2020-12-17)

### Bug Fixes

- **checkbox:** add forwardRef ([9b4c586](https://github.com/twilio-labs/paste/commit/9b4c58658c3bc96f16d2d213e8f00d4b1acd2a55))

### BREAKING CHANGES

- **checkbox:** component is now using fowardRef

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.24...@twilio-paste/checkbox@1.1.25) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.23...@twilio-paste/checkbox@1.1.24) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.22...@twilio-paste/checkbox@1.1.23) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.21...@twilio-paste/checkbox@1.1.22) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.20...@twilio-paste/checkbox@1.1.21) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.19...@twilio-paste/checkbox@1.1.20) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.18...@twilio-paste/checkbox@1.1.19) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.17...@twilio-paste/checkbox@1.1.18) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.16...@twilio-paste/checkbox@1.1.17) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.15...@twilio-paste/checkbox@1.1.16) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.14...@twilio-paste/checkbox@1.1.15) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.13...@twilio-paste/checkbox@1.1.14) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.12...@twilio-paste/checkbox@1.1.13) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.11...@twilio-paste/checkbox@1.1.12) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.10...@twilio-paste/checkbox@1.1.11) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.9...@twilio-paste/checkbox@1.1.10) (2020-10-26)

### Bug Fixes

- **checkbox:** use context for CheckboxGroup ([#858](https://github.com/twilio-labs/paste/issues/858)) ([550abb2](https://github.com/twilio-labs/paste/commit/550abb2d2febaf94ec0752f4bbe2cedfc3e17563))

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.8...@twilio-paste/checkbox@1.1.9) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.7...@twilio-paste/checkbox@1.1.8) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.6...@twilio-paste/checkbox@1.1.7) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.5...@twilio-paste/checkbox@1.1.6) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.4...@twilio-paste/checkbox@1.1.5) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.3...@twilio-paste/checkbox@1.1.4) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.2...@twilio-paste/checkbox@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.1...@twilio-paste/checkbox@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/checkbox

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@1.1.0...@twilio-paste/checkbox@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/checkbox

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/checkbox@0.0.2...@twilio-paste/checkbox@1.1.0) (2020-10-07)

### Features

- **checkbox:** create the package ([5d0ee73](https://github.com/twilio-labs/paste/commit/5d0ee731e329560b6619cb36f0af525879001748))
