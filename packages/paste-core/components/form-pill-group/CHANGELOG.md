# @twilio-paste/form-pill-group

## 9.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 9.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/truncate@15.0.0
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

## 8.1.1

### Patch Changes

- [`f612d1ba6`](https://github.com/twilio-labs/paste/commit/f612d1ba651b6c50cec0d87e4546a1d83ce28d57) [#4047](https://github.com/twilio-labs/paste/pull/4047) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [FormPillGroup] fixed a bug where long text in a form pill would wrap and break styling. Text within FormPill is now truncated so FormPill(s) will not stretch beyond FormPillGroup width.

## 8.1.0

### Minor Changes

- [`8cdebfe6c`](https://github.com/twilio-labs/paste/commit/8cdebfe6cd3abf294dda460812e00a382f78a201) [#4018](https://github.com/twilio-labs/paste/pull/4018) Thanks [@nkrantz](https://github.com/nkrantz)! - [FormPillGroup] added a new variant 'tree' to support different interactions for FormPill where selecting the item triggers other flows instead of updating state directly. Reference Filters Pattern for in depth use case.

* [`4ea2bcc63`](https://github.com/twilio-labs/paste/commit/4ea2bcc63e479a6815a13d0b880436031a23c28e) [#3978](https://github.com/twilio-labs/paste/pull/3978) Thanks [@cogwizzle](https://github.com/cogwizzle)! - [Form Pill Group] Adding size property to the FormPillGroup component. Sizes include default and "large".

### Patch Changes

- [`4441e59af`](https://github.com/twilio-labs/paste/commit/4441e59af9ada2fb809f5fba88c8eaf1788da45d) [#4003](https://github.com/twilio-labs/paste/pull/4003) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [Form Pill Group]: Fix position of dismiss button for large pill size

## 8.0.1

### Patch Changes

- [`b48a0f4ea`](https://github.com/twilio-labs/paste/commit/b48a0f4ea67060070c9fbddc3fde505427b83eb5) [#3502](https://github.com/twilio-labs/paste/pull/3502) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Form Pill Group]: Improved TsDoc type annotations

## 8.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/screen-reader-only@13.0.0
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

## 7.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`1e100909f`](https://github.com/twilio-labs/paste/commit/1e100909f279ddb0b52287a1ad45de97fb3b4981) [#3105](https://github.com/twilio-labs/paste/pull/3105) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Combobox, Form Pill Group] Updated Combobox styles as part of the One Twilio design update.

  Fixed height and alignment issues with Multi select Combobox and form pills

- Updated dependencies [[`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 6.0.1

### Patch Changes

- [`71ce96cdc`](https://github.com/twilio-labs/paste/commit/71ce96cdc3db0c43d705c6b10c370d8dd5648319) [#3060](https://github.com/twilio-labs/paste/pull/3060) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Display and Form pill group] Update styles for new design language

## 6.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/screen-reader-only@11.0.0
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

## 5.1.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 5.1.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 5.1.0

### Minor Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] Allow passing a `display` prop as either `inline-flex` or `flex` (default) to the `FormPillGroup` container.

### Patch Changes

- [`312a3ccf6`](https://github.com/twilio-labs/paste/commit/312a3ccf66c217a332526dfdd09c21606fbf4e9d) [#2660](https://github.com/twilio-labs/paste/pull/2660) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] Allow overriding the `aria-describedby` attribute.

## 5.0.0

### Patch Changes

- [`fdfb6d759`](https://github.com/twilio-labs/paste/commit/fdfb6d759aa4d4da704aa50a15fc927d0fd6a7d9) [#2589](https://github.com/twilio-labs/paste/pull/2589) Thanks [@shleewhite](https://github.com/shleewhite)! - [Form Pill Group] fix small style issues

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/screen-reader-only@10.0.0
  - @twilio-paste/customization@5.0.0
  - @twilio-paste/icons@9.0.0

## 4.1.0

### Minor Changes

- [`95b65bdfd`](https://github.com/twilio-labs/paste/commit/95b65bdfd87ba4c6a1e9fd20a6cdcf0d5d7f95bf) [#2526](https://github.com/twilio-labs/paste/pull/2526) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] add error variant, update styles, and support disabled pills

## 4.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 4.0.1

### Patch Changes

- [`12a5e83e`](https://github.com/twilio-labs/paste/commit/12a5e83ed7bb998dfbf855072f9f38140f2f87a5) [#2449](https://github.com/twilio-labs/paste/pull/2449) Thanks [@shleewhite](https://github.com/shleewhite)! - Made a slight improvement to the TypeScript typings of several packages for better interoperability.

## 4.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/screen-reader-only@9.0.0
  - @twilio-paste/customization@4.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 3.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/screen-reader-only@8.0.0

## 2.0.3

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button, FormPillGroup, Menu, Pagination, Select] inherit fontFamily for i18n

## 2.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 2.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`c0de1aee6`](https://github.com/twilio-labs/paste/commit/c0de1aee6fd6f2e2963c663838ccaf9ab2058349) [#2221](https://github.com/twilio-labs/paste/pull/2221) Thanks [@shleewhite](https://github.com/shleewhite)! - [FormPillGroup] add i18nKeyboardControls prop to support i18n

## 2.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/screen-reader-only@7.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/customization@3.0.0

## 1.1.3

### Patch Changes

- [`bcac9a339`](https://github.com/twilio-labs/paste/commit/bcac9a339ec8c99e15c7dac1446e315b58449fbf) [#2020](https://github.com/twilio-labs/paste/pull/2020) Thanks [@TheSisb](https://github.com/TheSisb)! - [DisplayPillGroup and FormPillGroup] Improved the group container elements so that they wrap correctly when having an overflow of pill children elements. (Thanks @rpresb)

## 1.1.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 1.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 1.1.0

### Minor Changes

- [`1e9a9583`](https://github.com/twilio-labs/paste/commit/1e9a9583c4957a401b9a808565395269d711e336) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Form Pill Group] Updated design for display and form pills, improving interactive states such as focus, hover and selected

## 1.0.0

### Major Changes

- [`06bae4e2`](https://github.com/twilio-labs/paste/commit/06bae4e21077a32a6eeb059941f8717c76d76ce0) [#1803](https://github.com/twilio-labs/paste/pull/1803) Thanks [@TheSisb](https://github.com/TheSisb)! - [Form Pill Group] Adding the FormPillGroup component package. This component renders is a collection of Pills that can be selected or removed from within a data entry form.
