# @twilio-paste/chat-composer

## 6.1.0

### Minor Changes

- [`404eeec61`](https://github.com/twilio-labs/paste/commit/404eeec6110f4a1f2f413cf10de16b3055c798f7) [#4327](https://github.com/twilio-labs/paste/pull/4327) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat Composer] add prop `autoLink` which defaults to `true` to allow users to disable the AutoLink plugin

### Patch Changes

- [`16e8016a0`](https://github.com/twilio-labs/paste/commit/16e8016a0654601c8c12224603daa1ada56708db) [#4334](https://github.com/twilio-labs/paste/pull/4334) Thanks [@serifluous](https://github.com/serifluous)! - Visible changes in dark themes only. Redarkened color-background-weak and added color-background-weaker-elevation

## 6.0.2

### Patch Changes

- [`a9e30405c`](https://github.com/twilio-labs/paste/commit/a9e30405cae79335b2ef953f63ffe3171d6405e8) [#4292](https://github.com/twilio-labs/paste/pull/4292) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat Composer] Make `attachmentIcon` optional for the attachment card, adjust spacing slightly. NOTE: if you are using the Customization Provider to target "CHAT_COMPOSER_MEDIA_OBJECT", you will need to update your styles as Media Object is no longer being used in the Chat Composer package.

## 6.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 6.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/box@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/lexical-library@5.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 5.2.2

### Patch Changes

- [`0ed9f3482`](https://github.com/twilio-labs/paste/commit/0ed9f348271260678f7a1d5f31e4789315de031e) [#4226](https://github.com/twilio-labs/paste/pull/4226) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Callout, ChatComposer, ChatLog, Combobox, Input, InputBox, Menu, MinimizableDialog, Modal, Popover, SideModal, SidePanel, Sidebar, Toast, Tooltip, Topbar, UserDialog]: Update styles to implement new elevation tokens

## 5.2.1

### Patch Changes

- [`9838a4f18`](https://github.com/twilio-labs/paste/commit/9838a4f18bd0ef1a12cf4231766fb45fca44ecde) [#3994](https://github.com/twilio-labs/paste/pull/3994) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat Composer] Increase max-height of ChatComposerContainer so that it's greater than the max-height of ChatComposer and doesn't create a vertical scrollbar when the default max-height is reached.

* [`b315321db`](https://github.com/twilio-labs/paste/commit/b315321dbc67caaaf2c2aebd319b2712ccd13715) [#4002](https://github.com/twilio-labs/paste/pull/4002) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat Composer] Add width="100%" to ChatComposerContainer to prevent composer from shrinking when no value

## 5.2.0

### Minor Changes

- [`7779a24e5`](https://github.com/twilio-labs/paste/commit/7779a24e5a3173811e52675c7d5a9f8dcf608361) [#3964](https://github.com/twilio-labs/paste/pull/3964) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [ChatComposer] Added new components to allow contained variants, actions buttons and attachments

### Patch Changes

- [`9e54abcd2`](https://github.com/twilio-labs/paste/commit/9e54abcd24da731301464ad13124df9dd4bfcae2) [#3981](https://github.com/twilio-labs/paste/pull/3981) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [ChatComposer] updated JS Doc used for tpye gen in docs website

## 5.1.1

### Patch Changes

- [`1a70ec030`](https://github.com/twilio-labs/paste/commit/1a70ec030da48161ec296034cab19d34ce24f01d) [#3543](https://github.com/twilio-labs/paste/pull/3543) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat Composer] Change overflowY from "scroll" to "auto" to prevent non-scrollable scrollbar bug

## 5.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`dc8deca8a`](https://github.com/twilio-labs/paste/commit/dc8deca8aa22bc4a8dd7c4604f5e42bd44caaea2) [#3505](https://github.com/twilio-labs/paste/pull/3505) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat Composer] Improved TsDoc type annotations

## 5.0.0

### Minor Changes

- [`c72b4b538`](https://github.com/twilio-labs/paste/commit/c72b4b538f6903b5b8766e14dc09edb689522d90) [#3426](https://github.com/twilio-labs/paste/pull/3426) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Chat-Composer] updates to accomodate the new version of Lexical

### Patch Changes

- Updated dependencies [[`c72b4b538`](https://github.com/twilio-labs/paste/commit/c72b4b538f6903b5b8766e14dc09edb689522d90)]:
  - @twilio-paste/lexical-library@4.0.0

## 4.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/lexical-library@3.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0

## 3.0.0

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
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 2.0.1

### Patch Changes

- [`6b159b597`](https://github.com/twilio-labs/paste/commit/6b159b59728e5b425315ef7215fd6c4e982365e2) [#3069](https://github.com/twilio-labs/paste/pull/3069) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat composer] Update Update styles to align with new Paste Twilio theme.

## 2.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/customization@6.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/lexical-library@2.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/style-props@7.0.0
  - @twilio-paste/theme@9.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 1.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 1.0.1

### Patch Changes

- [`b742fa207`](https://github.com/twilio-labs/paste/commit/b742fa207b6a6c249eae225d2af08296134da6e8) [#2859](https://github.com/twilio-labs/paste/pull/2859) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Composer] refactor stories, create a new one called Conversations UI Kit Example.

## 1.0.0

### Major Changes

- [`9c85685cb`](https://github.com/twilio-labs/paste/commit/9c85685cbb3675b9cc5a06776f08acbb70e2de63) [#2825](https://github.com/twilio-labs/paste/pull/2825) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Composer] Creates a new ChatComposer component

### Patch Changes

- [`4ebab8bc3`](https://github.com/twilio-labs/paste/commit/4ebab8bc3149f7872aa257d0f0918db3785ec9d7) [#2854](https://github.com/twilio-labs/paste/pull/2854) Thanks [@jb-twilio](https://github.com/jb-twilio)! - [ChatComposer]: fix Lexical global styles

- Updated dependencies [[`9c85685cb`](https://github.com/twilio-labs/paste/commit/9c85685cbb3675b9cc5a06776f08acbb70e2de63)]:
  - @twilio-paste/lexical-library@1.0.0
