# Change Log

## 10.0.2

### Patch Changes

- [`6040893c0`](https://github.com/twilio-labs/paste/commit/6040893c0b7c8c0e2d61d14d2278de2b9829a825) [#4311](https://github.com/twilio-labs/paste/pull/4311) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Base Radio Checkbox, Button, Combobox, File Picker, File Uploader, Input, Input Box, Menu, Select, Textarea, Visual Picker] Update styles of form related components

## 10.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 10.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/input-box@11.0.0
  - @twilio-paste/spinner@15.0.0
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
  - @twilio-paste/utils@6.0.0

## 9.1.4

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 9.1.3

### Patch Changes

- [`825dc39a3`](https://github.com/twilio-labs/paste/commit/825dc39a36170a6975a7a150fe82665aa3c531af) [#3917](https://github.com/twilio-labs/paste/pull/3917) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Input] updated focus stylings on increment/decrement buttons for number input type on both default and inverse variants

## 9.1.2

### Patch Changes

- [`47c329b57`](https://github.com/twilio-labs/paste/commit/47c329b573b19696b8697ceadc5c3f5a75511c50) [#3722](https://github.com/twilio-labs/paste/pull/3722) Thanks [@TheSisb](https://github.com/TheSisb)! - [Input] Fix rendering logic of decrement arrow on number input

## 9.1.1

### Patch Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [Input] Improve TsDoc type annotations

## 9.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 9.0.2

### Patch Changes

- [`10da7d27a`](https://github.com/twilio-labs/paste/commit/10da7d27ab4bddd9830e97485e5f888a818da068) [#3454](https://github.com/twilio-labs/paste/pull/3454) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Input] increment and decrement button types corrected for tabIndex

## 9.0.1

### Patch Changes

- [`2a1f8b954`](https://github.com/twilio-labs/paste/commit/2a1f8b954cdfc12cf40b7f5cd633d0b9ea9e882d) [#3425](https://github.com/twilio-labs/paste/pull/3425) Thanks [@TheSisb](https://github.com/TheSisb)! - [Input, Input Box] allow passing `type="url"` to the Input component for convenient browser validation.

## 9.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/input-box@10.0.0
  - @twilio-paste/spinner@14.0.0
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
  - @twilio-paste/utils@5.0.0

## 8.1.1

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 8.1.0

### Minor Changes

- [`5b0d3f360`](https://github.com/twilio-labs/paste/commit/5b0d3f360f90d97f5e487a863230716c3696ab48) [#3312](https://github.com/twilio-labs/paste/pull/3312) Thanks [@nkrantz](https://github.com/nkrantz)! - [Input] Adjust type="number" Input to use native HTML element, add custom styling and functionality.

## 8.0.1

### Patch Changes

- [`48e5f1e5c`](https://github.com/twilio-labs/paste/commit/48e5f1e5cd1c06c6967ee4e43f30179498efede8) [#3225](https://github.com/twilio-labs/paste/pull/3225) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button, Help Text, In Page Navigation, Input, Input Box, Label, Select, Tab, Text Area] Update color text tokens for inverse styles

## 8.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- Updated dependencies [[`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/input-box@9.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 7.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/input-box@8.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/uid-library@1.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 6.1.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 6.1.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 6.1.0

### Minor Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Input] Add ability to unset padding with `padding="space0"`

## 6.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/input-box@7.0.0

## 5.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 5.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/input-box@6.0.0
  - @twilio-paste/style-props@5.0.0

## 4.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 4.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 4.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/input-box@5.0.0
  - @twilio-paste/box@5.0.0

## 3.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 3.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 3.1.0

### Minor Changes

- [`9ceb48bd`](https://github.com/twilio-labs/paste/commit/9ceb48bd5d7c7d1f60bb3371085651c220e20f35) [#1771](https://github.com/twilio-labs/paste/pull/1771) Thanks [@richbachman](https://github.com/richbachman)! - [Input] Enable Input to respect element customizations set on the customization provider. Input now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 3.0.8

### Patch Changes

- [`a7fcccd5`](https://github.com/twilio-labs/paste/commit/a7fcccd55fc145b6a711530b030280c24e0e3aa2) [#1607](https://github.com/twilio-labs/paste/pull/1607) Thanks [@gloriliale](https://github.com/gloriliale)! - Added type 'time' to Input types for time picker component.

## 3.0.7

### Patch Changes

- [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Added type 'date' to Input types for date picker component

## 3.0.6

### Patch Changes

- [`80529764`](https://github.com/twilio-labs/paste/commit/8052976482f1a7ad412e68959e5bf7e186a5c318) [#1431](https://github.com/twilio-labs/paste/pull/1431) Thanks [@richbachman](https://github.com/richbachman)! - Added a margin reset (`margin: space0`) to fix a bug in Safari where a 2px margin is added by the browser.

## 3.0.5

### Patch Changes

- [`87fc9178`](https://github.com/twilio-labs/paste/commit/87fc91784c86d25f619aa49a9f0586d9e3be97d0) [#1408](https://github.com/twilio-labs/paste/pull/1408) Thanks [@richbachman](https://github.com/richbachman)! - Fix disabled value color in Safari.

* [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a) [#1398](https://github.com/twilio-labs/paste/pull/1398) Thanks [@zahnster](https://github.com/zahnster)! - Updated font weights for all form components to make them bolder

## 3.0.4

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 3.0.3

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/input-box@4.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 3.0.2

### Patch Changes

- [`14d33968`](https://github.com/twilio-labs/paste/commit/14d339680a7d3fb53b62b70762e4d2e786b473d6) [#1251](https://github.com/twilio-labs/paste/pull/1251) Thanks [@richbachman](https://github.com/richbachman)! - Removed required from the `id` prop, so Input can be used as an uncontrolled component. This allows Input to be used with libraries like `React-Hook-Form`.

## 3.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/input-box@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/input-box@4.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/style-props@3.0.0

## 2.0.2

### Patch Changes

- [`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592) [#1228](https://github.com/twilio-labs/paste/pull/1228) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Bump status of the component to production

## 2.0.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/input-box@3.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/input-box@3.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/style-props@2.0.0

## 1.2.3

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/input-box@2.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2

## 1.2.2

### Patch Changes

- [`1c9683c6`](https://github.com/twilio-labs/paste/commit/1c9683c63e1db1333f26b5625aa21dea16e8ff69) [#1139](https://github.com/twilio-labs/paste/pull/1139) Thanks [@richbachman](https://github.com/richbachman)! - Removed required from the `value` prop, so Input can be used as an uncontrolled component. This allows Input to be used with libraries like `React-Hook-Form`. An example can be found by visiting this [link](https://cizwz.csb.app/).

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.2.0...@twilio-paste/input@1.2.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/input

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.20...@twilio-paste/input@1.2.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.19...@twilio-paste/input@1.1.20) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.18...@twilio-paste/input@1.1.19) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.17...@twilio-paste/input@1.1.18) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.16...@twilio-paste/input@1.1.17) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.15...@twilio-paste/input@1.1.16) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.14...@twilio-paste/input@1.1.15) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.13...@twilio-paste/input@1.1.14) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.12...@twilio-paste/input@1.1.13) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.11...@twilio-paste/input@1.1.12) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.10...@twilio-paste/input@1.1.11) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.9...@twilio-paste/input@1.1.10) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.8...@twilio-paste/input@1.1.9) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.7...@twilio-paste/input@1.1.8) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.6...@twilio-paste/input@1.1.7) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.5...@twilio-paste/input@1.1.6) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.4...@twilio-paste/input@1.1.5) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.3...@twilio-paste/input@1.1.4) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.2...@twilio-paste/input@1.1.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.1...@twilio-paste/input@1.1.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/input

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.1.0...@twilio-paste/input@1.1.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/input

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/input@1.0.2...@twilio-paste/input@1.1.0) (2020-10-07)

### Features

- **input:** create the package ([080712f](https://github.com/twilio-labs/paste/commit/080712f54ec745d25669a64c5f59a859e61a51b1))
