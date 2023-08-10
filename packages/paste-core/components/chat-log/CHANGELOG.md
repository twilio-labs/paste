# @twilio-paste/chat-log

## 5.0.0

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
  - @twilio-paste/truncate@14.0.0
  - @twilio-paste/media-object@10.0.0
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

## 4.1.0

### Minor Changes

- [`be917a43f`](https://github.com/twilio-labs/paste/commit/be917a43f5024be62c7e7ba91e2d5d1ea9ff8f8b) [#3271](https://github.com/twilio-labs/paste/pull/3271) Thanks [@TheSisb](https://github.com/TheSisb)! - [Chat Log] `useChatLogger` now exposes a `clear` function to clear all chats at once. Also, the animations have been slightly adjusted.

## 4.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Chat log] Improved typing on the forwarded element from ChatAttachmentLink

- Updated dependencies [[`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08), [`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/button@13.0.0
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/text@9.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/truncate@13.0.0
  - @twilio-paste/media-object@9.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 3.0.1

### Patch Changes

- [`6b159b597`](https://github.com/twilio-labs/paste/commit/6b159b59728e5b425315ef7215fd6c4e982365e2) [#3069](https://github.com/twilio-labs/paste/pull/3069) Thanks [@nkrantz](https://github.com/nkrantz)! - [Chat log] Update styles to align with new Paste Twilio theme.

## 3.0.0

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
  - @twilio-paste/truncate@12.0.0
  - @twilio-paste/media-object@8.0.0
  - @twilio-paste/stack@6.0.0
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

## 2.1.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 2.1.1

### Patch Changes

- [`b742fa207`](https://github.com/twilio-labs/paste/commit/b742fa207b6a6c249eae225d2af08296134da6e8) [#2859](https://github.com/twilio-labs/paste/pull/2859) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] refactor styles to use row gap instead of margin bottom

## 2.1.0

### Minor Changes

- [`80cb7ceb8`](https://github.com/twilio-labs/paste/commit/80cb7ceb889854d65ba5467f8060cfaa8a992c0c) [#2793](https://github.com/twilio-labs/paste/pull/2793) Thanks [@jb-twilio](https://github.com/jb-twilio)! - [ChatLog]: add useChatLogger hook

### Patch Changes

- [`9c85685cb`](https://github.com/twilio-labs/paste/commit/9c85685cbb3675b9cc5a06776f08acbb70e2de63) [#2825](https://github.com/twilio-labs/paste/pull/2825) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] refactored a ChatAttachment story

## 2.0.3

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 2.0.2

### Patch Changes

- [`114e80db7`](https://github.com/twilio-labs/paste/commit/114e80db74253a2bf902edfb853a940d6b6310dd) [#2693](https://github.com/twilio-labs/paste/pull/2693) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Message] hug the width of the ChatBubble to the width of the message

## 2.0.1

### Patch Changes

- [`a890926a6`](https://github.com/twilio-labs/paste/commit/a890926a6509ab0b0f86bc8d5ee876c3340b8015) [#2651](https://github.com/twilio-labs/paste/pull/2651) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Chat Log]: replaces the deprecated CloseCircleIcon with ClearIcon in the ComposerAttachment component

## 2.0.0

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/anchor@9.0.0
  - @twilio-paste/screen-reader-only@10.0.0
  - @twilio-paste/truncate@11.0.0
  - @twilio-paste/media-object@7.0.0
  - @twilio-paste/text@7.0.0
  - @twilio-paste/customization@5.0.0
  - @twilio-paste/icons@9.0.0

## 1.2.0

### Minor Changes

- [`f9796f1ce`](https://github.com/twilio-labs/paste/commit/f9796f1ced5a89138d789ef8f95bbf15be531d92) [#2520](https://github.com/twilio-labs/paste/pull/2520) Thanks [@gloriliale](https://github.com/gloriliale)! - [Chat Log] Add new components for related to events and bookends:

  - ChatBookend
  - ChatBookendItem
  - ChatEvent

## 1.1.0

### Minor Changes

- [`39cfc65ea`](https://github.com/twilio-labs/paste/commit/39cfc65ea1f44e024732390527fc139a86138a72) [#2489](https://github.com/twilio-labs/paste/pull/2489) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] add a ChatLog component

* [`0aa52162`](https://github.com/twilio-labs/paste/commit/0aa5216294bb195873e46b7fe83ce71250b7c38b) [#2501](https://github.com/twilio-labs/paste/pull/2501) Thanks [@gloriliale](https://github.com/gloriliale)! - [Chat log] Add several new components related to displaying attachments:

  - ComposerAttachmentCard
  - ChatAttachment
  - ChatAttachmentLink
  - ChatAttachmentDescription

### Patch Changes

- [`a8ad034fe`](https://github.com/twilio-labs/paste/commit/a8ad034fe0868e725d50dfe02266ea3855119bdb) [#2509](https://github.com/twilio-labs/paste/pull/2509) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] Move types and styles to the component files

## 1.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 1.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/customization@4.0.0
  - @twilio-paste/style-props@5.0.0

## 0.2.0

### Minor Changes

- [`f76b99d45`](https://github.com/twilio-labs/paste/commit/f76b99d455d587e7865515338f65d1a8d25c01ac) [#2334](https://github.com/twilio-labs/paste/pull/2334) Thanks [@shleewhite](https://github.com/shleewhite)! - [ChatLog] add ChatMessageMeta and ChatMessageMetaItem components

## 0.1.0

### Minor Changes

- [`3b467fd60`](https://github.com/twilio-labs/paste/commit/3b467fd60da812dacb0447533c5b7abb46822a22) [#2319](https://github.com/twilio-labs/paste/pull/2319) Thanks [@shleewhite](https://github.com/shleewhite)! - [Chat Log] create new package with ChatBubble and ChatMessage components
