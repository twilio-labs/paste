# Change Log

## 15.0.2

### Patch Changes

- [`6040893c0`](https://github.com/twilio-labs/paste/commit/6040893c0b7c8c0e2d61d14d2278de2b9829a825) [#4311](https://github.com/twilio-labs/paste/pull/4311) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Base Radio Checkbox, Button, Combobox, File Picker, File Uploader, Input, Input Box, Menu, Select, Textarea, Visual Picker] Update styles of form related components

* [`16e8016a0`](https://github.com/twilio-labs/paste/commit/16e8016a0654601c8c12224603daa1ada56708db) [#4334](https://github.com/twilio-labs/paste/pull/4334) Thanks [@serifluous](https://github.com/serifluous)! - Visible changes in dark themes only. Redarkened color-background-weak and added color-background-weaker-elevation

## 15.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 15.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/anchor@13.0.0
  - @twilio-paste/badge@9.0.0
  - @twilio-paste/button@15.0.0
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/separator@9.0.0
  - @twilio-paste/spinner@15.0.0
  - @twilio-paste/media-object@11.0.0
  - @twilio-paste/stack@9.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/menu-primitive@3.0.0
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/reakit-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 14.1.4

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 14.1.3

### Patch Changes

- [`eb189f10e`](https://github.com/twilio-labs/paste/commit/eb189f10eb88b7df2d2ee02ad6f49cf3360a3cc9) [#3790](https://github.com/twilio-labs/paste/pull/3790) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Menu] Fix a regression in sub-menu items that was introduced whilst preventing very long, non-scrolling menus

## 14.1.2

### Patch Changes

- [`ba0d7bcfb`](https://github.com/twilio-labs/paste/commit/ba0d7bcfbd6fa8e6413597966667ec7d68f954bf) [#3709](https://github.com/twilio-labs/paste/pull/3709) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Menu]: Adds overflow scrolling behaviour on menus with a large number of items in, currently defaulting to 10 items

## 14.1.1

### Patch Changes

- [`3b350c741`](https://github.com/twilio-labs/paste/commit/3b350c741615094c62ba1df4d062d3e02c0ab261) [#3522](https://github.com/twilio-labs/paste/pull/3522) Thanks [@abereghici](https://github.com/abereghici)! - chore: removed unnecessary type assertions

* [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [Menu] Improve TsDoc type annotations

## 14.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

* [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Menu] Add all inherited props from "div" element to MenuGroupProps, add new exports: MenuInitialState and MenuStateReturn

## 14.0.1

### Patch Changes

- [`eb055b2b4`](https://github.com/twilio-labs/paste/commit/eb055b2b4624390b3356ca6727981ad86bb5a1f8) [#3424](https://github.com/twilio-labs/paste/pull/3424) Thanks [@loreina](https://github.com/loreina)! - [Menu] Update destructive Menu items to use the new `colorTextDestructive` token

## 14.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
  - @twilio-paste/badge@8.0.0
  - @twilio-paste/button@14.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/separator@8.0.0
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/media-object@10.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/menu-primitive@2.0.0
  - @twilio-paste/text@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/reakit-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 13.1.1

### Patch Changes

- [`61c310e78`](https://github.com/twilio-labs/paste/commit/61c310e78636b3951b1d6825dbf8ee41782bad61) [#3317](https://github.com/twilio-labs/paste/pull/3317) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed incorrect prop types for menu based components

## 13.1.0

### Minor Changes

- [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Menu] Add Menu Badge, and Checkbox and Radio group Menu Items added. Enables the ability to create menus from badges. Enables single and multiselect menu items.

### Patch Changes

- [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Menu] add and export proptypes for various menu related components.

* [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Menu] update to Menu Group text color to Color Text Weak

- [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Menu]: Improved handling of styling checked menu items and reserving space for the checkmark to prevent resizing on selection

## 13.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`b47e13173`](https://github.com/twilio-labs/paste/commit/b47e13173161cad7ffc78b94ff4b1c776260c7db) [#3107](https://github.com/twilio-labs/paste/pull/3107) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Menu] fix focus styles on menu items since design updates

- Updated dependencies [[`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08), [`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/button@13.0.0
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/separator@7.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/media-object@9.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 12.1.0

### Minor Changes

- [`45cdceb92`](https://github.com/twilio-labs/paste/commit/45cdceb9241e75abac2b73363c77fa43d541f64a) [#3063](https://github.com/twilio-labs/paste/pull/3063) Thanks [@shleewhite](https://github.com/shleewhite)! - [Menu] Add destructive_group_item variant to MenuItem. Update styles to align with new Paste Twilio theme.

## 12.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/separator@6.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/button@12.0.0
  - @twilio-paste/spinner@12.0.0
  - @twilio-paste/media-object@8.0.0
  - @twilio-paste/stack@6.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/menu-primitive@1.0.0
  - @twilio-paste/text@8.0.0
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

## 11.1.3

### Patch Changes

- [`fb79204d9`](https://github.com/twilio-labs/paste/commit/fb79204d9b35262a0ee7be62f0bc9dd4494ef19c) [#2901](https://github.com/twilio-labs/paste/pull/2901) Thanks [@jb-twilio](https://github.com/jb-twilio)! - Add eslint escape for type level import using src in path

## 11.1.2

### Patch Changes

- [`c39613422`](https://github.com/twilio-labs/paste/commit/c39613422428ba7765bcd6e03817111c2f1910bb) [#2878](https://github.com/twilio-labs/paste/pull/2878) Thanks [@Niznikr](https://github.com/Niznikr)! - Update to TypeScript v4.9

## 11.1.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 11.1.0

### Minor Changes

- [`563dff9a8`](https://github.com/twilio-labs/paste/commit/563dff9a889e9b880e86568add91cfe5b686f7bd) [#2604](https://github.com/twilio-labs/paste/pull/2604) Thanks [@loreina](https://github.com/loreina)! - - [menu] add menu item destructive variant

### Patch Changes

- [`ceb26bb91`](https://github.com/twilio-labs/paste/commit/ceb26bb91348c4ace5a81522f7da3c3595c77de1) [#2634](https://github.com/twilio-labs/paste/pull/2634) Thanks [@shleewhite](https://github.com/shleewhite)! - [Menu] fix href not getting passed to MenuItem

## 11.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/anchor@9.0.0
  - @twilio-paste/separator@5.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/media-object@7.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/icons@9.0.0

## 10.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 10.0.1

### Patch Changes

- [`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - Made a slight improvement to the TypeScript typings of several packages for better interoperability.

## 10.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/anchor@8.0.0
  - @twilio-paste/button@10.0.0
  - @twilio-paste/separator@4.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/media-object@6.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/anchor@7.0.0
  - @twilio-paste/button@9.0.0
  - @twilio-paste/spinner@9.0.0

## 8.0.3

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button, FormPillGroup, Menu, Pagination, Select] inherit fontFamily for i18n

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
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/separator@3.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/media-object@5.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 7.0.5

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.0.4

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 7.0.3

### Patch Changes

- [`d1126c27`](https://github.com/twilio-labs/paste/commit/d1126c278bb14788208b998257a29806edf40ca8) [#1900](https://github.com/twilio-labs/paste/pull/1900) Thanks [@andipants12](https://github.com/andipants12)! - [Menu]: Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 7.0.2

### Patch Changes

- [`eab3fd93`](https://github.com/twilio-labs/paste/commit/eab3fd9384510a7aa35c6f5244e8d0431144197b) [#1501](https://github.com/twilio-labs/paste/pull/1501) Thanks [@richbachman](https://github.com/richbachman)! - MenuItem now renders as a `button` by default. In order to render it as an `a`, and `href` needs to be passed.

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
  - @twilio-paste/anchor@5.0.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/separator@2.0.2
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/anchor@5.0.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/anchor@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/separator@2.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/media-object@4.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/anchor@4.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/separator@2.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/media-object@4.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/separator@1.0.2
  - @twilio-paste/menu-primitive@0.2.3
  - @twilio-paste/button@4.0.3

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/anchor@3.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/separator@1.0.1
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/media-object@3.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/anchor@3.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/anchor@3.0.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/separator@1.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/media-object@3.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/menu-primitive@0.2.2
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/anchor@2.0.1
  - @twilio-paste/separator@0.4.2
  - @twilio-paste/media-object@2.1.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/anchor@2.0.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.1.0...@twilio-paste/menu@2.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/menu

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.6...@twilio-paste/menu@2.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.5...@twilio-paste/menu@2.0.6) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.4...@twilio-paste/menu@2.0.5) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.3...@twilio-paste/menu@2.0.4) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.2...@twilio-paste/menu@2.0.3) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.1...@twilio-paste/menu@2.0.2) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/menu

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@2.0.0...@twilio-paste/menu@2.0.1) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/menu

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.54...@twilio-paste/menu@2.0.0) (2020-12-17)

### Bug Fixes

- **menu:** add forwardRef ([6e3557e](https://github.com/twilio-labs/paste/commit/6e3557ebe93432a8d6226aab4ac947ab366785a4))

### BREAKING CHANGES

- **menu:** component is now using fowardRef

## [1.1.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.53...@twilio-paste/menu@1.1.54) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.52...@twilio-paste/menu@1.1.53) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.51...@twilio-paste/menu@1.1.52) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.50...@twilio-paste/menu@1.1.51) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.49...@twilio-paste/menu@1.1.50) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.48...@twilio-paste/menu@1.1.49) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.47...@twilio-paste/menu@1.1.48) (2020-11-19)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.46...@twilio-paste/menu@1.1.47) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.45...@twilio-paste/menu@1.1.46) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.44...@twilio-paste/menu@1.1.45) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.43...@twilio-paste/menu@1.1.44) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.42...@twilio-paste/menu@1.1.43) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.41...@twilio-paste/menu@1.1.42) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.40...@twilio-paste/menu@1.1.41) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.39...@twilio-paste/menu@1.1.40) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.38...@twilio-paste/menu@1.1.39) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.37...@twilio-paste/menu@1.1.38) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.36...@twilio-paste/menu@1.1.37) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.35...@twilio-paste/menu@1.1.36) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.34...@twilio-paste/menu@1.1.35) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.33...@twilio-paste/menu@1.1.34) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.32...@twilio-paste/menu@1.1.33) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.31...@twilio-paste/menu@1.1.32) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.30...@twilio-paste/menu@1.1.31) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.29...@twilio-paste/menu@1.1.30) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.28...@twilio-paste/menu@1.1.29) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.27...@twilio-paste/menu@1.1.28) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.26...@twilio-paste/menu@1.1.27) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.25...@twilio-paste/menu@1.1.26) (2020-09-25)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.24...@twilio-paste/menu@1.1.25) (2020-09-23)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.23...@twilio-paste/menu@1.1.24) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.22...@twilio-paste/menu@1.1.23) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.21...@twilio-paste/menu@1.1.22) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.20...@twilio-paste/menu@1.1.21) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.19...@twilio-paste/menu@1.1.20) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.18...@twilio-paste/menu@1.1.19) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.17...@twilio-paste/menu@1.1.18) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.16...@twilio-paste/menu@1.1.17) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.15...@twilio-paste/menu@1.1.16) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.14...@twilio-paste/menu@1.1.15) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.13...@twilio-paste/menu@1.1.14) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.12...@twilio-paste/menu@1.1.13) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.11...@twilio-paste/menu@1.1.12) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.10...@twilio-paste/menu@1.1.11) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.9...@twilio-paste/menu@1.1.10) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.8...@twilio-paste/menu@1.1.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.7...@twilio-paste/menu@1.1.8) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.6...@twilio-paste/menu@1.1.7) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.5...@twilio-paste/menu@1.1.6) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.4...@twilio-paste/menu@1.1.5) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.3...@twilio-paste/menu@1.1.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.2...@twilio-paste/menu@1.1.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.1...@twilio-paste/menu@1.1.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.1.0...@twilio-paste/menu@1.1.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/menu

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.0.1...@twilio-paste/menu@1.1.0) (2020-08-11)

### Features

- **menu:** update styles for unified design language ([4429499](https://github.com/twilio-labs/paste/commit/4429499bc8ee1d158c9bf8f320f61b6c7cca58f9))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@1.0.0...@twilio-paste/menu@1.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/menu

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.6...@twilio-paste/menu@1.0.0) (2020-08-05)

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

## [0.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.5...@twilio-paste/menu@0.2.6) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.4...@twilio-paste/menu@0.2.5) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.3...@twilio-paste/menu@0.2.4) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.2...@twilio-paste/menu@0.2.3) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.1...@twilio-paste/menu@0.2.2) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/menu

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.2.0...@twilio-paste/menu@0.2.1) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/menu

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.26...@twilio-paste/menu@0.2.0) (2020-07-28)

### Features

- **menu:** add MenuGroup ([299ba82](https://github.com/twilio-labs/paste/commit/299ba82366c06a9655b4a9b39b4f56688d6d5004))

## [0.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.25...@twilio-paste/menu@0.1.26) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.24...@twilio-paste/menu@0.1.25) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.23...@twilio-paste/menu@0.1.24) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.22...@twilio-paste/menu@0.1.23) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.21...@twilio-paste/menu@0.1.22) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.20...@twilio-paste/menu@0.1.21) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.19...@twilio-paste/menu@0.1.20) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.18...@twilio-paste/menu@0.1.19) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.17...@twilio-paste/menu@0.1.18) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.16...@twilio-paste/menu@0.1.17) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.15...@twilio-paste/menu@0.1.16) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.14...@twilio-paste/menu@0.1.15) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.13...@twilio-paste/menu@0.1.14) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.12...@twilio-paste/menu@0.1.13) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.11...@twilio-paste/menu@0.1.12) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.10...@twilio-paste/menu@0.1.11) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.9...@twilio-paste/menu@0.1.10) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.8...@twilio-paste/menu@0.1.9) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.7...@twilio-paste/menu@0.1.8) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.6...@twilio-paste/menu@0.1.7) (2020-06-09)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.5...@twilio-paste/menu@0.1.6) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.4...@twilio-paste/menu@0.1.5) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.3...@twilio-paste/menu@0.1.4) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.2...@twilio-paste/menu@0.1.3) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.1...@twilio-paste/menu@0.1.2) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/menu

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.1.0...@twilio-paste/menu@0.1.1) (2020-05-27)

### Bug Fixes

- **menu:** allow actions, links and external links ([4c69457](https://github.com/twilio-labs/paste/commit/4c694577ebfa29ff979669c914d0831c8aa7d396))

# [0.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/menu@0.0.2...@twilio-paste/menu@0.1.0) (2020-05-20)

### Features

- **menu:** create the menu component ([9363a41](https://github.com/twilio-labs/paste/commit/9363a41a023b4f9db1d8e530fe98251cd9d4e522))
