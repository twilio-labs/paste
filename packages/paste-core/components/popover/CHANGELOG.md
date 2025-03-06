# Change Log

## 13.3.1

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 13.3.0

### Minor Changes

- [`8cdebfe6c`](https://github.com/twilio-labs/paste/commit/8cdebfe6cd3abf294dda460812e00a382f78a201) [#4018](https://github.com/twilio-labs/paste/pull/4018) Thanks [@nkrantz](https://github.com/nkrantz)! - [Popover] Added a new button variant to trigger the popover PopoverFormPillButton, only to be used as part of complex filters pattern

### Patch Changes

- [`0da577fc5`](https://github.com/twilio-labs/paste/commit/0da577fc516a9b01274c77c77346a7b322004ba1) [#4026](https://github.com/twilio-labs/paste/pull/4026) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Popover] Fix typings that were not exposing additional props on using a reset button variant

## 13.2.0

### Minor Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [Popover] Improve TsDoc type annotations

## 13.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 13.0.0

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
  - @twilio-paste/spinner@14.0.0
  - @twilio-paste/stack@8.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/non-modal-dialog-primitive@2.0.0
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

## 12.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`fb0005bb2`](https://github.com/twilio-labs/paste/commit/fb0005bb2bbf06b6598dec5eee56680cac990e41) [#3078](https://github.com/twilio-labs/paste/pull/3078) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Badge, Popover] Improved typings for restricted Badge prop combinations when create button or linked badges

- Updated dependencies [[`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08), [`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`fb0005bb2`](https://github.com/twilio-labs/paste/commit/fb0005bb2bbf06b6598dec5eee56680cac990e41)]:
  - @twilio-paste/button@13.0.0
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/badge@7.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 11.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Minor Changes

- [`5f5790d1c`](https://github.com/twilio-labs/paste/commit/5f5790d1cad547537843b9ebc60916647939fd1e) [#3032](https://github.com/twilio-labs/paste/pull/3032) Thanks [@shleewhite](https://github.com/shleewhite)! - [Popover] Add new props:

  - initialFocusRef: focuses a ref when the Popover opens
  - width: sets the width of the Popover, up to size50.

  Update styles to align with new Paste Twilio theme

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`62983adb8`](https://github.com/twilio-labs/paste/commit/62983adb8acf447a644b6eaa933628cb3d4c6742)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/badge@6.0.0
  - @twilio-paste/button@12.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/spinner@12.0.0
  - @twilio-paste/stack@6.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/non-modal-dialog-primitive@1.0.0
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

## 10.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 10.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 10.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/badge@5.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/icons@9.0.0

## 9.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 9.0.1

### Patch Changes

- [`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - Made a slight improvement to the TypeScript typings of several packages for better interoperability.

## 9.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/text@6.0.0
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/badge@4.0.0
  - @twilio-paste/button@10.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 8.0.1

### Patch Changes

- [`dee7d9b01`](https://github.com/twilio-labs/paste/commit/dee7d9b01c0b7b2fee64f7a01cadd1238521ab8f) [#2233](https://github.com/twilio-labs/paste/pull/2233) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Color contrast utils, Tabs, Popover, Styling-library, Types] very minor code linting

## 8.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/badge@3.0.0
  - @twilio-paste/button@9.0.0
  - @twilio-paste/spinner@9.0.0

## 7.0.4

### Patch Changes

- [`b6ccaa266`](https://github.com/twilio-labs/paste/commit/b6ccaa266c8abc81820b77127da5abb0cf5308d4) [#2347](https://github.com/twilio-labs/paste/pull/2347) Thanks [@gloriliale](https://github.com/gloriliale)! - [Alert, Modal, Popover, Toast] Adjust close icon's hover state color, which was previously being overwritten.

## 7.0.3

### Patch Changes

- [`6a1f1190f`](https://github.com/twilio-labs/paste/commit/6a1f1190f81c7df0af785aefaeda0ac10d5cc8ae) [#2286](https://github.com/twilio-labs/paste/pull/2286) Thanks [@gloriliale](https://github.com/gloriliale)! - [Popover] adjust typings for PopoverBadgeButton

## 7.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 7.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`4aefbe75d`](https://github.com/twilio-labs/paste/commit/4aefbe75d7c34ebdab209be14073426c1632d8a9) [#2227](https://github.com/twilio-labs/paste/pull/2227) Thanks [@shleewhite](https://github.com/shleewhite)! - [Popover] add i18nDismissLabel prop to support i18n

## 7.0.0

### Patch Changes

- [`ff1817a1`](https://github.com/twilio-labs/paste/commit/ff1817a1f486441a8e6fdc36c39cb65ab2605eca) [#2187](https://github.com/twilio-labs/paste/pull/2187) Thanks [@gloriliale](https://github.com/gloriliale)! - [Popover] adjusted the maxWidth to allow for wider content.

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`68439c40`](https://github.com/twilio-labs/paste/commit/68439c4097dc533dd9a1bbc6965578f13e130c12)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/badge@2.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/text@5.0.0

## 6.3.0

### Minor Changes

- [`f8bdf2e0`](https://github.com/twilio-labs/paste/commit/f8bdf2e03608ac027eac81dd6789774ed2344a2c) [#2089](https://github.com/twilio-labs/paste/pull/2089) Thanks [@shleewhite](https://github.com/shleewhite)! - [Popover] Add PopoverBadgeButton component

### Patch Changes

- [`5d4515ea`](https://github.com/twilio-labs/paste/commit/5d4515ea31e06fa3e1478d5e42971a7973de9d51) [#2083](https://github.com/twilio-labs/paste/pull/2083) Thanks [@nkrantz](https://github.com/nkrantz)! - [Alert, Modal, Popover, Toast] Update close button to use `secondary_icon` button variant

## 6.2.0

### Minor Changes

- [`847504d03`](https://github.com/twilio-labs/paste/commit/847504d0393706806c683a4ffb537796fccc5888) [#2011](https://github.com/twilio-labs/paste/pull/2011) Thanks [@TheSisb](https://github.com/TheSisb)! - [Popover] Removes the wrapping `<Box>` present in `PopoverContainer`, along with the ref passing. PopoverContainer is strictly a context provider now. This fixes issues around vertical alignment and inlining PopoverButtons.

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 6.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 6.1.0

### Minor Changes

- [`db9f9665`](https://github.com/twilio-labs/paste/commit/db9f96657c8e3d9230ef17e1a0ab4658b6016dca) [#1915](https://github.com/twilio-labs/paste/pull/1915) Thanks [@zahnster](https://github.com/zahnster)! - [Popover] Enable component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 6.0.4

### Patch Changes

- [`0bfba62d`](https://github.com/twilio-labs/paste/commit/0bfba62d66efe74fc410216f62e67fdd5ab11bea) [#1720](https://github.com/twilio-labs/paste/pull/1720) Thanks [@TheSisb](https://github.com/TheSisb)! - The Popover's close button will now always be the first focus upon opening.

## 6.0.3

### Patch Changes

- [`b04e98b1`](https://github.com/twilio-labs/paste/commit/b04e98b17f4e35016956280e1762267f82ad6c51) [#1693](https://github.com/twilio-labs/paste/pull/1693) Thanks [@nkrantz](https://github.com/nkrantz)! - Increase padding on popover content and decrease size of close icon

## 6.0.2

### Patch Changes

- [`6730c0a6`](https://github.com/twilio-labs/paste/commit/6730c0a643cf52fb9008ec3bf707759bd1333b68) [#1606](https://github.com/twilio-labs/paste/pull/1606) Thanks [@richbachman](https://github.com/richbachman)! - [Popover] added the `state` prop that allows hooking into the state of the component using `usePopoverState`. Package is also now exporting `usePopoverState`.

## 6.0.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 6.0.0

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200)]:
  - @twilio-paste/button@7.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 5.0.0

### Minor Changes

- [`169089ce`](https://github.com/twilio-labs/paste/commit/169089cee859f40bf863e471745b867fd91c5837) [#1269](https://github.com/twilio-labs/paste/pull/1269) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixed issue where open popovers would disable page scrolling

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 4.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/icons@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/non-modal-dialog-primitive@0.3.3
  - @twilio-paste/button@4.0.3

## 3.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 3.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 2.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/non-modal-dialog-primitive@0.3.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.1.0...@twilio-paste/popover@1.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/popover

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.57...@twilio-paste/popover@1.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [1.0.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.56...@twilio-paste/popover@1.0.57) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.55...@twilio-paste/popover@1.0.56) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.54...@twilio-paste/popover@1.0.55) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.53...@twilio-paste/popover@1.0.54) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.52...@twilio-paste/popover@1.0.53) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.51...@twilio-paste/popover@1.0.52) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.50...@twilio-paste/popover@1.0.51) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.49...@twilio-paste/popover@1.0.50) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.48...@twilio-paste/popover@1.0.49) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.47...@twilio-paste/popover@1.0.48) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.46...@twilio-paste/popover@1.0.47) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.45...@twilio-paste/popover@1.0.46) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.44...@twilio-paste/popover@1.0.45) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.43...@twilio-paste/popover@1.0.44) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.42...@twilio-paste/popover@1.0.43) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.41...@twilio-paste/popover@1.0.42) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.40...@twilio-paste/popover@1.0.41) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.39...@twilio-paste/popover@1.0.40) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.38...@twilio-paste/popover@1.0.39) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.37...@twilio-paste/popover@1.0.38) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.36...@twilio-paste/popover@1.0.37) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.35...@twilio-paste/popover@1.0.36) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.34...@twilio-paste/popover@1.0.35) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.33...@twilio-paste/popover@1.0.34) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.32...@twilio-paste/popover@1.0.33) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.31...@twilio-paste/popover@1.0.32) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.30...@twilio-paste/popover@1.0.31) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.29...@twilio-paste/popover@1.0.30) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.28...@twilio-paste/popover@1.0.29) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.27...@twilio-paste/popover@1.0.28) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.26...@twilio-paste/popover@1.0.27) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.25...@twilio-paste/popover@1.0.26) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.24...@twilio-paste/popover@1.0.25) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.23...@twilio-paste/popover@1.0.24) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.22...@twilio-paste/popover@1.0.23) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.21...@twilio-paste/popover@1.0.22) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.20...@twilio-paste/popover@1.0.21) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.19...@twilio-paste/popover@1.0.20) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.18...@twilio-paste/popover@1.0.19) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.17...@twilio-paste/popover@1.0.18) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.16...@twilio-paste/popover@1.0.17) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.15...@twilio-paste/popover@1.0.16) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.14...@twilio-paste/popover@1.0.15) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.13...@twilio-paste/popover@1.0.14) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.12...@twilio-paste/popover@1.0.13) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.11...@twilio-paste/popover@1.0.12) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.10...@twilio-paste/popover@1.0.11) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.9...@twilio-paste/popover@1.0.10) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.8...@twilio-paste/popover@1.0.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.7...@twilio-paste/popover@1.0.8) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.6...@twilio-paste/popover@1.0.7) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.5...@twilio-paste/popover@1.0.6) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.4...@twilio-paste/popover@1.0.5) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.3...@twilio-paste/popover@1.0.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.2...@twilio-paste/popover@1.0.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.1...@twilio-paste/popover@1.0.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.0...@twilio-paste/popover@1.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/popover

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.25...@twilio-paste/popover@1.0.0) (2020-08-05)

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

## [0.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.24...@twilio-paste/popover@0.1.25) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.23...@twilio-paste/popover@0.1.24) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.22...@twilio-paste/popover@0.1.23) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.21...@twilio-paste/popover@0.1.22) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.20...@twilio-paste/popover@0.1.21) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.19...@twilio-paste/popover@0.1.20) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.18...@twilio-paste/popover@0.1.19) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.17...@twilio-paste/popover@0.1.18) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.16...@twilio-paste/popover@0.1.17) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.15...@twilio-paste/popover@0.1.16) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.14...@twilio-paste/popover@0.1.15) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.13...@twilio-paste/popover@0.1.14) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.12...@twilio-paste/popover@0.1.13) (2020-07-08)

### Bug Fixes

- **popover:** move arrow to StyedBase to prevent line-height override ([b549721](https://github.com/twilio-labs/paste/commit/b549721b12673fa2a68b8eced86bda99063d2f40))

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.11...@twilio-paste/popover@0.1.12) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.10...@twilio-paste/popover@0.1.11) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.9...@twilio-paste/popover@0.1.10) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.8...@twilio-paste/popover@0.1.9) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.7...@twilio-paste/popover@0.1.8) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.6...@twilio-paste/popover@0.1.7) (2020-06-25)

### Bug Fixes

- **popover:** adjust close icon size, remove small text from stories ([b580ff1](https://github.com/twilio-labs/paste/commit/b580ff152553a2804ad2877cd90d5e9e76a2ef6d))

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.5...@twilio-paste/popover@0.1.6) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.4...@twilio-paste/popover@0.1.5) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.3...@twilio-paste/popover@0.1.4) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.2...@twilio-paste/popover@0.1.3) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.1...@twilio-paste/popover@0.1.2) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.0...@twilio-paste/popover@0.1.1) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/popover

# 0.1.0 (2020-06-16)

### Features

- **popover:** add popover package ([6029ec5](https://github.com/twilio-labs/paste/commit/6029ec5771f3bd47efd7150a718a64144019fcbb))
