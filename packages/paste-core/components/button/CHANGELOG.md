# Change Log

## 14.0.1

### Patch Changes

- [`eb055b2b4`](https://github.com/twilio-labs/paste/commit/eb055b2b4624390b3356ca6727981ad86bb5a1f8) [#3424](https://github.com/twilio-labs/paste/pull/3424) Thanks [@loreina](https://github.com/loreina)! - [Button] Update `variant="destructive"` Buttons to use the new `colorTextDestructive` token

## 14.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/anchor@12.0.0
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

## 13.0.4

### Patch Changes

- [`4d1f7c65e`](https://github.com/twilio-labs/paste/commit/4d1f7c65e77e5e0bbf6c7422b46a477bdb932ee6) [#3360](https://github.com/twilio-labs/paste/pull/3360) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Improved types where Paste extends the base HTML element that a component is based on, so that the existing blocked styling properties are not exposed as valid properties for the component via Typescript. This leads to less confusion around what is supported by a Paste component.

  Existing blocked component properties include:

  - `className`
  - `style`
  - `color`

## 13.0.3

### Patch Changes

- [`9e5b3b7f0`](https://github.com/twilio-labs/paste/commit/9e5b3b7f05b591af9349d17f646cf8e4f51c6981) [#3224](https://github.com/twilio-labs/paste/pull/3224) Thanks [@TheSisb](https://github.com/TheSisb)! - [Button] allow passing all style props to Button with variant="reset", effectively making it a Button primitive.

## 13.0.2

### Patch Changes

- [`48e5f1e5c`](https://github.com/twilio-labs/paste/commit/48e5f1e5cd1c06c6967ee4e43f30179498efede8) [#3225](https://github.com/twilio-labs/paste/pull/3225) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button, Help Text, In Page Navigation, Input, Input Box, Label, Select, Tab, Text Area] Update color text tokens for inverse styles

* [`5958ffb5b`](https://github.com/twilio-labs/paste/commit/5958ffb5b46574886d4695d4a81a3bcb9a02256c) [#3230](https://github.com/twilio-labs/paste/pull/3230) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Button] Export sharable Button PropTypes

## 13.0.1

### Patch Changes

- [`f267a9f75`](https://github.com/twilio-labs/paste/commit/f267a9f7534d8a32641d395fdf5c68f7c7a98904) [#3148](https://github.com/twilio-labs/paste/pull/3148) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Fix secondary destructive toggle button hover styles

## 13.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Minor Changes

- [`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08) [#3112](https://github.com/twilio-labs/paste/pull/3112) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Add toggle button styles to `destructive_secondary` variant.

### Patch Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Button] Improved backwards compat with React 17 types

- Updated dependencies [[`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0

## 12.0.1

### Patch Changes

- [`71f5b1898`](https://github.com/twilio-labs/paste/commit/71f5b18980c1ced85dcce101e74fb8c385a60bab) [#3033](https://github.com/twilio-labs/paste/pull/3033) Thanks [@gloriliale](https://github.com/gloriliale)! - [Button] Update the design for the new Twilio theme

## 12.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/spinner@12.0.0
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

## 11.1.6

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 11.1.5

### Patch Changes

- [`9c85685cb`](https://github.com/twilio-labs/paste/commit/9c85685cbb3675b9cc5a06776f08acbb70e2de63) [#2825](https://github.com/twilio-labs/paste/pull/2825) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button] add circle and circle_small sizes to the Button PropTypes

## 11.1.4

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 11.1.3

### Patch Changes

- [`edca0f7c8`](https://github.com/twilio-labs/paste/commit/edca0f7c8dcf612c6edf0dd98eb7dffe28c3fce9) [#2757](https://github.com/twilio-labs/paste/pull/2757) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Button, radio-button-group, codemods] Correct the ToggleButtonStyles export for use in Radio Button Group

## 11.1.2

### Patch Changes

- [`7599162bc`](https://github.com/twilio-labs/paste/commit/7599162bcdfcd0c997c688ab49ede59b5f627c0f) [#2710](https://github.com/twilio-labs/paste/pull/2710) Thanks [@gloriliale](https://github.com/gloriliale)! - [Button] add box shadow to toggle button's pressed states to match regular button height

* [`d49514a27`](https://github.com/twilio-labs/paste/commit/d49514a274f30ba9ccaae45c23fb30f987cda37c) [#2746](https://github.com/twilio-labs/paste/pull/2746) Thanks [@jb-twilio](https://github.com/jb-twilio)! - [Button]: refine styling for focus state

## 11.1.1

### Patch Changes

- [`280c8725d`](https://github.com/twilio-labs/paste/commit/280c8725d3e0c689fbaf5569fc1a83bf0e4dc5bd) [#2641](https://github.com/twilio-labs/paste/pull/2641) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button] support `<Button as="a" variant="inverse" />` and add the `target` prop

## 11.1.0

### Minor Changes

- [`6555c7bf5`](https://github.com/twilio-labs/paste/commit/6555c7bf52e5f05dbe64d282663663fa491dd6be) [#2582](https://github.com/twilio-labs/paste/pull/2582) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button] add toggle button for secondary and secondary_icon variants

## 11.0.0

### Minor Changes

- [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213) [#2573](https://github.com/twilio-labs/paste/pull/2573) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button] add "circle" and "circle_small" sizes

### Patch Changes

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/anchor@9.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/stack@5.0.0
  - @twilio-paste/icons@9.0.0

## 10.1.0

### Minor Changes

- [`24cf22318`](https://github.com/twilio-labs/paste/commit/24cf22318149087ef0d1b67d3fe7bbc11c8883ad) [#2493](https://github.com/twilio-labs/paste/pull/2493) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Adds a new size, 'rounded_small', for the Conversations UI Kit

## 10.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 10.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/anchor@8.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/stack@4.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/anchor@7.0.0
  - @twilio-paste/spinner@9.0.0

## 8.1.0

### Minor Changes

- [`68ee1a35`](https://github.com/twilio-labs/paste/commit/68ee1a35e5aed2bf099be01ceef0d4dbd608c8c1) [#2304](https://github.com/twilio-labs/paste/pull/2304) Thanks [@gloriliale](https://github.com/gloriliale)! - [Button] add i18n props to support i18n

## 8.0.3

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [Button, FormPillGroup, Menu, Pagination, Select] inherit fontFamily for i18n

## 8.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 8.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`64de05f55`](https://github.com/twilio-labs/paste/commit/64de05f5551c5ebc94cbf85028cfaf2a637c19d3) [#2194](https://github.com/twilio-labs/paste/pull/2194) Thanks [@zahnster](https://github.com/zahnster)! - Updates 'reset' styles to set inherited font size

- [`563a76ba3`](https://github.com/twilio-labs/paste/commit/563a76ba31d60ee43c1e57907c83c502dc1ba5a7) [#2249](https://github.com/twilio-labs/paste/pull/2249) Thanks [@nkrantz](https://github.com/nkrantz)! - [button]

  - Update `DestructiveButton` default text color to `colorTextInverse`
  - Update `PrimaryButton` default text color to `colorTextInverse`
  - Update `DestructiveLinkButton` active text color to `colorTextLinkDestructiveStrongest`
  - Update `InverseButton` box shadow to `shadowBorderInverseWeakest`
  - Update `LinkButton` active text color to `colorTextLinkStrongest`

## 8.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0

## 7.1.0

### Minor Changes

- [`1b6b78fa`](https://github.com/twilio-labs/paste/commit/1b6b78fa416bf15903493cc570275d94e08a8636) [#2013](https://github.com/twilio-labs/paste/pull/2013) Thanks [@gloriliale](https://github.com/gloriliale)! - [Button] Add variants to be used specifically with icons.

## 7.0.11

### Patch Changes

- [`f381d8e7`](https://github.com/twilio-labs/paste/commit/f381d8e748ff45557bc166cbe024abdd6002d20e) [#2000](https://github.com/twilio-labs/paste/pull/2000) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Center-align button contents for vertical alignment

* [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

- [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 7.0.10

### Patch Changes

- [`e1fc74a5`](https://github.com/twilio-labs/paste/commit/e1fc74a56ca06511d1182ad72a0605e10905b909) [#1977](https://github.com/twilio-labs/paste/pull/1977) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button]: Fix bug that was adding extra padding when Screen Reader Only was passed as a child.

## 7.0.9

### Patch Changes

- [`b2b0f792`](https://github.com/twilio-labs/paste/commit/b2b0f79272b5a7f2159218bc7f519b01a445ca7e) [#1887](https://github.com/twilio-labs/paste/pull/1887) Thanks [@nkrantz](https://github.com/nkrantz)! - [Button] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 7.0.8

### Patch Changes

- [`9ed68c88`](https://github.com/twilio-labs/paste/commit/9ed68c886cd0992ff32b5aceff59c1f62a661e69) [#1826](https://github.com/twilio-labs/paste/pull/1826) Thanks [@andipants12](https://github.com/andipants12)! - [Button]: Link, Destructive link, and inverse destructive link button variants should have left aligned text.

## 7.0.7

### Patch Changes

- [`af3b1e55`](https://github.com/twilio-labs/paste/commit/af3b1e558fc438352b47098d7d085d7eeffbfa51) [#1801](https://github.com/twilio-labs/paste/pull/1801) Thanks [@andipants12](https://github.com/andipants12)! - [Button] All link variants should have left aligned text.

## 7.0.6

### Patch Changes

- [`1a7fcfbc`](https://github.com/twilio-labs/paste/commit/1a7fcfbc60601b277f1fec435f43c9f53e05025a) [#1708](https://github.com/twilio-labs/paste/pull/1708) Thanks [@nkrantz](https://github.com/nkrantz)! - Update inverse button to use `shadow-border-inverse-strongest` on hover

## 7.0.5

### Patch Changes

- [`66285238`](https://github.com/twilio-labs/paste/commit/66285238c23b1ac756a6bf30af0ece5a45a0ddc7) [#1599](https://github.com/twilio-labs/paste/pull/1599) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Switch lodash.merge with deepmerge for significant bundle size savings

## 7.0.4

### Patch Changes

- [`104628b3`](https://github.com/twilio-labs/paste/commit/104628b358b773df6f5afc885252eaa64f311c97) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Changed default and disabled secondary button box shadow and text color styles to match Figma design files.

## 7.0.3

### Patch Changes

- [`80529764`](https://github.com/twilio-labs/paste/commit/8052976482f1a7ad412e68959e5bf7e186a5c318) [#1431](https://github.com/twilio-labs/paste/pull/1431) Thanks [@richbachman](https://github.com/richbachman)! - Added a margin reset (`margin: space0`) to fix a bug in Safari where a 2px margin is added by the browser.

## 7.0.2

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 7.0.1

### Patch Changes

- [`174be6d9`](https://github.com/twilio-labs/paste/commit/174be6d968c5b4e4c8973a88e0491f45496b15d9) [#1363](https://github.com/twilio-labs/paste/pull/1363) Thanks [@TheSisb](https://github.com/TheSisb)! - Buttons that behave as links (`<Button as="a" href="">`) now correctly use the external link icon for external links.

## 7.0.0

### Major Changes

- [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200) [#1307](https://github.com/twilio-labs/paste/pull/1307) Thanks [@TheSisb](https://github.com/TheSisb)! - BREAKING CHANGES:

  Button components used as links (as="a" and href="") now automatically add an arrow icon if children is a string. This is a design breaking change that you should be aware of when upgrading.

  Button also adds additional validation to throw an error if the `disabled` or `loading` props are set to `true` for a Button as link. This is a functionality breaking change to existing disabled link buttons.

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 6.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/stack@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/style-props@3.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/spinner@7.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/stack@2.0.1
  - @twilio-paste/icons@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/stack@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/stack@1.0.2

## 4.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/stack@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 4.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/spinner@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/stack@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 3.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/stack@0.3.2
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/spinner@4.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.5.0...@twilio-paste/button@2.5.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/button

# [2.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.15...@twilio-paste/button@2.5.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [2.4.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.14...@twilio-paste/button@2.4.15) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.13...@twilio-paste/button@2.4.14) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.12...@twilio-paste/button@2.4.13) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.11...@twilio-paste/button@2.4.12) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.10...@twilio-paste/button@2.4.11) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.9...@twilio-paste/button@2.4.10) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.8...@twilio-paste/button@2.4.9) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.7...@twilio-paste/button@2.4.8) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.6...@twilio-paste/button@2.4.7) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.5...@twilio-paste/button@2.4.6) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.4...@twilio-paste/button@2.4.5) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.3...@twilio-paste/button@2.4.4) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.2...@twilio-paste/button@2.4.3) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.1...@twilio-paste/button@2.4.2) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/button

## [2.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.4.0...@twilio-paste/button@2.4.1) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/button

# [2.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.28...@twilio-paste/button@2.4.0) (2020-11-09)

### Features

- **button:** add icon_small size ([56ed79d](https://github.com/twilio-labs/paste/commit/56ed79d98a5e9603980ee2a85c29b0c5a9068ef3))

## [2.3.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.27...@twilio-paste/button@2.3.28) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.26...@twilio-paste/button@2.3.27) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.25...@twilio-paste/button@2.3.26) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.24...@twilio-paste/button@2.3.25) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.23...@twilio-paste/button@2.3.24) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.22...@twilio-paste/button@2.3.23) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.21...@twilio-paste/button@2.3.22) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.20...@twilio-paste/button@2.3.21) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.19...@twilio-paste/button@2.3.20) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.18...@twilio-paste/button@2.3.19) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.17...@twilio-paste/button@2.3.18) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.16...@twilio-paste/button@2.3.17) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.15...@twilio-paste/button@2.3.16) (2020-10-07)

### Bug Fixes

- **button:** remove center justify content rule if reset ([246c82b](https://github.com/twilio-labs/paste/commit/246c82bb489b4223f9ecbab07a1d14c6325415e4))

## [2.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.14...@twilio-paste/button@2.3.15) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.13...@twilio-paste/button@2.3.14) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.12...@twilio-paste/button@2.3.13) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.11...@twilio-paste/button@2.3.12) (2020-09-28)

### Bug Fixes

- **button:** center content within buttons ([68d96a7](https://github.com/twilio-labs/paste/commit/68d96a710b0d09b02dcf4e85ae615080769fa218))

## [2.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.10...@twilio-paste/button@2.3.11) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.9...@twilio-paste/button@2.3.10) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.8...@twilio-paste/button@2.3.9) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.7...@twilio-paste/button@2.3.8) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.6...@twilio-paste/button@2.3.7) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.5...@twilio-paste/button@2.3.6) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.4...@twilio-paste/button@2.3.5) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.3...@twilio-paste/button@2.3.4) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.2...@twilio-paste/button@2.3.3) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.1...@twilio-paste/button@2.3.2) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/button

## [2.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.3.0...@twilio-paste/button@2.3.1) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/button

# [2.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.2.0...@twilio-paste/button@2.3.0) (2020-09-02)

### Features

- **button:** add inverse_link button variant ([f3250a1](https://github.com/twilio-labs/paste/commit/f3250a1ee1063848879d947c445d6c9df5d7052b))

# [2.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.1.6...@twilio-paste/button@2.2.0) (2020-08-31)

### Features

- **button:** add desctructive_secondary variant ([52dbfec](https://github.com/twilio-labs/paste/commit/52dbfec786f63d11090c8082cee1132951ad18ce))

## [2.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.1.5...@twilio-paste/button@2.1.6) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/button

## [2.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.1.4...@twilio-paste/button@2.1.5) (2020-08-27)

### Bug Fixes

- **button:** remove unnecessary link error ([#697](https://github.com/twilio-labs/paste/issues/697)) ([0e92b73](https://github.com/twilio-labs/paste/commit/0e92b7358d6751d6758f30828d0aea410c053314))

## [2.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.1.3...@twilio-paste/button@2.1.4) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/button

## [2.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.1.2...@twilio-paste/button@2.1.3) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/button

## [2.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.1.1...@twilio-paste/button@2.1.2) (2020-08-12)

### Bug Fixes

- **button:** reset variant should inherit type styles ([efdd3d6](https://github.com/twilio-labs/paste/commit/efdd3d63e41cc6ff468371680fbb361b12be08c7))

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.1.0...@twilio-paste/button@2.1.1) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/button

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.0.2...@twilio-paste/button@2.1.0) (2020-08-12)

### Features

- **button:** add inverse variant ([4a6f241](https://github.com/twilio-labs/paste/commit/4a6f24139fa43edfd048894c887adea8e821d401))

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.0.1...@twilio-paste/button@2.0.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/button

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@2.0.0...@twilio-paste/button@2.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/button

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.28...@twilio-paste/button@2.0.0) (2020-08-05)

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

## [1.2.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.27...@twilio-paste/button@1.2.28) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.26...@twilio-paste/button@1.2.27) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.25...@twilio-paste/button@1.2.26) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.24...@twilio-paste/button@1.2.25) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.23...@twilio-paste/button@1.2.24) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.22...@twilio-paste/button@1.2.23) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.21...@twilio-paste/button@1.2.22) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.20...@twilio-paste/button@1.2.21) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.19...@twilio-paste/button@1.2.20) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.18...@twilio-paste/button@1.2.19) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.17...@twilio-paste/button@1.2.18) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.16...@twilio-paste/button@1.2.17) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.15...@twilio-paste/button@1.2.16) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.14...@twilio-paste/button@1.2.15) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.13...@twilio-paste/button@1.2.14) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.12...@twilio-paste/button@1.2.13) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.11...@twilio-paste/button@1.2.12) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.10...@twilio-paste/button@1.2.11) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.9...@twilio-paste/button@1.2.10) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.8...@twilio-paste/button@1.2.9) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.7...@twilio-paste/button@1.2.8) (2020-06-16)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.6...@twilio-paste/button@1.2.7) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.5...@twilio-paste/button@1.2.6) (2020-06-10)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.4...@twilio-paste/button@1.2.5) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.3...@twilio-paste/button@1.2.4) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.2...@twilio-paste/button@1.2.3) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.1...@twilio-paste/button@1.2.2) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/button

## [1.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.2.0...@twilio-paste/button@1.2.1) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/button

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.45...@twilio-paste/button@1.2.0) (2020-05-20)

### Features

- **button:** expose button ref ([469694a](https://github.com/twilio-labs/paste/commit/469694af3899d05f7d54fd66f13a7d32a23792d2))

## [1.1.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.44...@twilio-paste/button@1.1.45) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.43...@twilio-paste/button@1.1.44) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.42...@twilio-paste/button@1.1.43) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.41...@twilio-paste/button@1.1.42) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.40...@twilio-paste/button@1.1.41) (2020-04-29)

### Bug Fixes

- **button:** allow html button attributes, rework prop destructuring ([6b8be87](https://github.com/twilio-labs/paste/commit/6b8be875c3220237ab2ed4b6878b87ec30f44127))

## [1.1.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.39...@twilio-paste/button@1.1.40) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.38...@twilio-paste/button@1.1.39) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.37...@twilio-paste/button@1.1.38) (2020-04-20)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.36...@twilio-paste/button@1.1.37) (2020-04-17)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.35...@twilio-paste/button@1.1.36) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.34...@twilio-paste/button@1.1.35) (2020-04-08)

### Bug Fixes

- **button:** package dependencies updated to be correct ([9c82da5](https://github.com/twilio-labs/paste/commit/9c82da548c4de61c879c7cce226d795b9703065e))

## [1.1.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.33...@twilio-paste/button@1.1.34) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.32...@twilio-paste/button@1.1.33) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.31...@twilio-paste/button@1.1.32) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.30...@twilio-paste/button@1.1.31) (2020-03-28)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.29...@twilio-paste/button@1.1.30) (2020-03-24)

### Bug Fixes

- **button:** switch from theme-tokens to theme package dep ([d9441c2](https://github.com/twilio-labs/paste/commit/d9441c23e251f5be29217c8bb9a2d1644f3eec26))

## [1.1.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.28...@twilio-paste/button@1.1.29) (2020-03-20)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.27...@twilio-paste/button@1.1.28) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.26...@twilio-paste/button@1.1.27) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.25...@twilio-paste/button@1.1.26) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.24...@twilio-paste/button@1.1.25) (2020-03-06)

### Bug Fixes

- add missing transitive peerDep on '@styled-system/css' ([fdbb813](https://github.com/twilio-labs/paste/commit/fdbb81370cda71037348742a680299ce481eabfd))

## [1.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.23...@twilio-paste/button@1.1.24) (2020-03-04)

### Bug Fixes

- **button:** change borders to box-shadow ([689061d](https://github.com/twilio-labs/paste/commit/689061d4c4c9a5f033d74c4af7e0ca1f211b12d1))

## [1.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.22...@twilio-paste/button@1.1.23) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.21...@twilio-paste/button@1.1.22) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.20...@twilio-paste/button@1.1.21) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.19...@twilio-paste/button@1.1.20) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [1.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.18...@twilio-paste/button@1.1.19) (2020-02-21)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.17...@twilio-paste/button@1.1.18) (2020-02-20)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.16...@twilio-paste/button@1.1.17) (2020-02-19)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.15...@twilio-paste/button@1.1.16) (2020-02-18)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.14...@twilio-paste/button@1.1.15) (2020-02-14)

### Bug Fixes

- **button:** add missing peer deps ([38416d8](https://github.com/twilio-labs/paste/commit/38416d89c69a0238ba8cdd3a31705bcf57be7bdf))

## [1.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.13...@twilio-paste/button@1.1.14) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.12...@twilio-paste/button@1.1.13) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.11...@twilio-paste/button@1.1.12) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.10...@twilio-paste/button@1.1.11) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.9...@twilio-paste/button@1.1.10) (2020-02-07)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.8...@twilio-paste/button@1.1.9) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.7...@twilio-paste/button@1.1.8) (2020-01-27)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.6...@twilio-paste/button@1.1.7) (2020-01-25)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.5...@twilio-paste/button@1.1.6) (2020-01-24)

### Bug Fixes

- **storybook:** fix vrt on loading button ([#275](https://github.com/twilio-labs/paste/issues/275)) ([a560e89](https://github.com/twilio-labs/paste/commit/a560e89a960b5a0c4d03b95d6473fd55dbd732ee))

## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.4...@twilio-paste/button@1.1.5) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.3...@twilio-paste/button@1.1.4) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.2...@twilio-paste/button@1.1.3) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.1...@twilio-paste/button@1.1.2) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/button

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.1.0...@twilio-paste/button@1.1.1) (2019-11-27)

### Bug Fixes

- **button:** defensively set hover/focus/active styles from legacy globals ([#205](https://github.com/twilio-labs/paste/issues/205)) ([2a9ce57](https://github.com/twilio-labs/paste/commit/2a9ce57a61a0ef9c1aadc0cfe0c9c112b4bc784e))

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.0.2...@twilio-paste/button@1.1.0) (2019-11-20)

### Bug Fixes

- remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))

### Features

- **icons:** make decorative required + icon docs ([#165](https://github.com/twilio-labs/paste/issues/165)) ([15ccbc2](https://github.com/twilio-labs/paste/commit/15ccbc2e0f259d60af83bf8503c8ee18a1191cb8))

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.0.1...@twilio-paste/button@1.0.2) (2019-11-18)

### Bug Fixes

- correct button heights add new default icon size ([#186](https://github.com/twilio-labs/paste/issues/186)) ([2e54478](https://github.com/twilio-labs/paste/commit/2e54478f975cb1930bd6d397d1214947db97c2a3))
- **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))
- update destructive button styles to be filled ([#189](https://github.com/twilio-labs/paste/issues/189)) ([c29b7ca](https://github.com/twilio-labs/paste/commit/c29b7cae1e4999ddcee75ba1897e3cf09c17e6df))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.0.0...@twilio-paste/button@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/button

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.3.1...@twilio-paste/button@1.0.0) (2019-11-11)

### Bug Fixes

- **button:** add font-weight semibold to small buttons ([#166](https://github.com/twilio-labs/paste/issues/166)) ([582245b](https://github.com/twilio-labs/paste/commit/582245b10fe397bb5530dc7349a5b6b08b61d54e))
- **website:** update button docs with loading and icon states ([#167](https://github.com/twilio-labs/paste/issues/167)) ([7380889](https://github.com/twilio-labs/paste/commit/73808897ef181da087a5a80a17a80a74409a6c3c))

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))
- enable theme switching on the docsite ([#124](https://github.com/twilio-labs/paste/issues/124)) ([df797e5](https://github.com/twilio-labs/paste/commit/df797e57ff1268367053d717f3b3c2ca48a0aa4f))

### BREAKING CHANGES

- **icons:** removed all the inherited icons since we're moving to a new system

- chore(icons): update icon list for storybook

- fix(spinner): use new icon

- fix(storybook): use new icon for story

- fix(story): button icons should be 24px

- fix: adjust icon size tokens

- feat: add iconSizes as separate key in theme-tokens

- feat(icons): icons package to use tokens and update icons

- fix(spinner): update to use tokens and new icons

- fix(button): use correct spinner size

- fix(icons): major icons package fixes

* huge overhaul to build process
* now uses rollup
* builds into cjs and esm directories
* made the package publishable to npm
* moved svg folder out of src, now src only holds react stuff
* updated scripts to use new paths and cleaned up the code
* programmatically generates rollup config from the icon-list command

- chore: add new icons dist folders to gitignore

- fix: spinner and button icon usage

- feat(icons): add rollup icon list cache file

- fix(core-bundle): sort packages for consistent builds

- chore: use `esm` instead of `es` in rollup for correctness

- chore: yarn.lock

- fix(spinner): lint error

- chore(icons): move rollup icon list

- chore(spinner): use types package in story

- fix(spinner): swap out destructured props for explicit props

## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.3.0...@twilio-paste/button@0.3.1) (2019-10-31)

**Note:** Version bump only for package @twilio-paste/button

# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.2.1...@twilio-paste/button@0.3.0) (2019-10-29)

### Bug Fixes

- **button:** border-color should transition with background-color ([#130](https://github.com/twilio-labs/paste/issues/130)) ([fda61ba](https://github.com/twilio-labs/paste/commit/fda61ba05973a7ff9b652f7f234b2ed8a678bed4))
- remove the underline from button states ([#147](https://github.com/twilio-labs/paste/issues/147)) ([70d4c15](https://github.com/twilio-labs/paste/commit/70d4c1534b5a026e2e24ba80fd9ec9bda062a762)), closes [#54](https://github.com/twilio-labs/paste/issues/54)

### Features

- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.2.0...@twilio-paste/button@0.2.1) (2019-09-16)

### Bug Fixes

- **button:** adding some polish ([#67](https://github.com/twilio-labs/paste/issues/67)) ([2644657](https://github.com/twilio-labs/paste/commit/2644657))
- **button:** adjust primary, secondary, desctructive styles ([#72](https://github.com/twilio-labs/paste/issues/72)) ([670faef](https://github.com/twilio-labs/paste/commit/670faef))

# 0.2.0 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
- run eslint across the right files and fix any issues that arise. ([#21](https://github.com/twilio-labs/paste/issues/21)) ([2fcc872](https://github.com/twilio-labs/paste/commit/2fcc872))

### Features

- add Absolute component ([#24](https://github.com/twilio-labs/paste/issues/24)) ([ff2f1d9](https://github.com/twilio-labs/paste/commit/ff2f1d9))
