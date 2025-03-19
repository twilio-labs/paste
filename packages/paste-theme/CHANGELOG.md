# Change Log

## 12.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/types@7.0.0

## 11.2.0

### Minor Changes

- [`b5e73f1a7`](https://github.com/twilio-labs/paste/commit/b5e73f1a7485b707fed2aaa491f23e55263326d1) [#4264](https://github.com/twilio-labs/paste/pull/4264) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Theme] Added the property `useCssVariables` which allows the color values to be pulled from CSS variables instead of static values

## 11.1.1

### Patch Changes

- [`5df8f1a13`](https://github.com/twilio-labs/paste/commit/5df8f1a132884efa2169614a10e8244866f39772) [#4175](https://github.com/twilio-labs/paste/pull/4175) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Tokens,Theme] fixed an issue when converting percentages to pixel values as alternatives text descriptions

## 11.1.0

### Minor Changes

- [`d9f96d7d8`](https://github.com/twilio-labs/paste/commit/d9f96d7d8b72f3d3fa8f66c24b5725a2a92bfc35) [#3739](https://github.com/twilio-labs/paste/pull/3739) Thanks [@TheSisb](https://github.com/TheSisb)! - [ThemeProvider, CustomizationProvider] Now accepts an optional `style` prop to override element styles.

  This is helpful in scenarios where ThemeProvider isn't wrapping your app root, but instead is nested in your DOM tree and needs some styling overrides.

### Patch Changes

- [`fbd399636`](https://github.com/twilio-labs/paste/commit/fbd39963687623baf9352e034b83dbe8bb70eeff) [#3736](https://github.com/twilio-labs/paste/pull/3736) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Theme]: patch bump in Paste fonts to fix a bug in the Twilio sans font regarding backticks not taking up physical space

## 11.0.1

### Patch Changes

- [`611a2daaf`](https://github.com/twilio-labs/paste/commit/611a2daafbdd142da60afa6cc280824e4ab54ce6) [#3456](https://github.com/twilio-labs/paste/pull/3456) Thanks [@nkrantz](https://github.com/nkrantz)! - [Theme] Change the type of sizeIcon tokens in the GenericThemeShape to be `any`. Previously they were incorrectly typed as the value of the token in the Twilio theme, which was preventing consumers from passing custom icon sizes using the Customization Provider.

## 11.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/types@6.0.0

## 10.0.3

### Patch Changes

- [`8f96d66a9`](https://github.com/twilio-labs/paste/commit/8f96d66a952e67617578fc7da11f4be225a2da8f) [#3327](https://github.com/twilio-labs/paste/pull/3327) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme] Update Inter font version from 3.15 to 3.19, which fixes a Chrome issue with number emojis

## 10.0.2

### Patch Changes

- [`0c3861824`](https://github.com/twilio-labs/paste/commit/0c38618244d1494c7153b341cfd4e486afafc47d) [#3154](https://github.com/twilio-labs/paste/pull/3154) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme] theme breakpoint values are now represented as `px` values instead of `rem` values. MediaQueries are more easily grokked as `px` values, and it simplifies development by eliminating variability in widths. In rare cases, some tests - like snapshot tests - may need to be updated.

## 10.0.1

### Patch Changes

- [`c42ad640b`](https://github.com/twilio-labs/paste/commit/c42ad640b6e4af057a7f0ff982b6f7533d028493) [#3130](https://github.com/twilio-labs/paste/pull/3130) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Enable the ability to theme the [color-scheme css property](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) which can be used to control native HTML elements and the way they render in light or dark mode

## 10.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3) [#3090](https://github.com/twilio-labs/paste/pull/3090) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Design Tokens, Theme] add ability to override the base font size that Paste uses from the HTML element tag via the new token `$font-size-base`. Also removes setting font size from the body element for when Paste is embedded into another application with its own styles

- Updated dependencies [[`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/types@5.0.0

## 9.0.1

### Patch Changes

- [`b942178ad`](https://github.com/twilio-labs/paste/commit/b942178adbcf9c0cb5359936169b8a7268d2b689) [#3052](https://github.com/twilio-labs/paste/pull/3052) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme] Add theme override via url by using `#paste-theme-override=[newtheme]`.

## 9.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

### Minor Changes

- [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee) [#3049](https://github.com/twilio-labs/paste/pull/3049) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Box, Text, Style Props, Theme]: remove checking and warning for deprecated design tokens and themes that have been removed from the system

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/animation-library@1.0.0
  - @twilio-paste/styling-library@2.0.0
  - @twilio-paste/types@4.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 8.4.0

### Minor Changes

- [`2bde84f96`](https://github.com/twilio-labs/paste/commit/2bde84f9686a421f3bfb7b488c6d0afeb6aab86c) [#3006](https://github.com/twilio-labs/paste/pull/3006) Thanks [@brandongregoryscott](https://github.com/brandongregoryscott)! - [Theme] Export EvergreenTheme, TwilioTheme and TwilioDarkTheme objects and types

## 8.3.0

### Minor Changes

- [`c056da73e`](https://github.com/twilio-labs/paste/commit/c056da73e1d6379dfc74d49201c4129902791c17) [#2927](https://github.com/twilio-labs/paste/pull/2927) Thanks [@jb-twilio](https://github.com/jb-twilio)! - [Theme, Design Tokens] Add evergreen design tokens and theme

## 8.2.0

### Minor Changes

- [`b7e429ef5`](https://github.com/twilio-labs/paste/commit/b7e429ef5d34309a8e09efb2a4653fbc446302c2) [#2948](https://github.com/twilio-labs/paste/pull/2948) Thanks [@Niznikr](https://github.com/Niznikr)! - [Theme] Add new themes `twilio` and `twilio-dark` as part of our new unified design language to be used for Twilio products. Add Twilio Sans Text and Twilio Sans Display fonts used in the themes.

* [`4ae8972b4`](https://github.com/twilio-labs/paste/commit/4ae8972b47334173123c720d2354d0d8573257a5) [#2971](https://github.com/twilio-labs/paste/pull/2971) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme] Add `cacheProviderProps` to the ThemeProvider which allows passing a custom `key` and `nonce` into Emotion's CacheProvider to get around CSP limitations.

## 8.1.1

### Patch Changes

- [`c39613422`](https://github.com/twilio-labs/paste/commit/c39613422428ba7765bcd6e03817111c2f1910bb) [#2878](https://github.com/twilio-labs/paste/pull/2878) Thanks [@Niznikr](https://github.com/Niznikr)! - Update to TypeScript v4.9

## 8.1.0

### Minor Changes

- [`026bf7f52`](https://github.com/twilio-labs/paste/commit/026bf7f52f6273f8294c313796ba97971e4bc679) [#2799](https://github.com/twilio-labs/paste/pull/2799) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design-tokens, theme] updated mono spaced font in default and dark themes to use the new Twilio Sans Mono font

## 8.0.3

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 8.0.2

### Patch Changes

- [`4a3974fce`](https://github.com/twilio-labs/paste/commit/4a3974fce6d8d099e0e00b8ab12ae0cb921c719a) [#2745](https://github.com/twilio-labs/paste/pull/2745) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme] Fix type for the `iconSizes` token bucket under the theme object

## 8.0.1

### Patch Changes

- [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Theme] add new icon size (05) to theme shape

## 8.0.0

### Patch Changes

- [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355) [#2577](https://github.com/twilio-labs/paste/pull/2577) Thanks [@zahnster](https://github.com/zahnster)! - [Theme] Updated Data Visualization colors to use the new Data Visualization category from the Design Tokens package.

- Updated dependencies [[`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/color-contrast-utils@3.0.0

## 7.0.2

### Patch Changes

- [`eb490746c`](https://github.com/twilio-labs/paste/commit/eb490746cb957a349fb217c13b886db4a7277342) [#2480](https://github.com/twilio-labs/paste/pull/2480) Thanks [@shleewhite](https://github.com/shleewhite)! - [Theme] fix isDeprecatedTheme to only throw a console error if a theme is deprecated.

## 7.0.1

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 7.0.0

### Patch Changes

- [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c) [#2376](https://github.com/twilio-labs/paste/pull/2376) Thanks [@andipants12](https://github.com/andipants12)! - [Theme] Small edit to cased named imports and usage of `keyof` in types.

- Updated dependencies [[`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/styling-library@1.0.0

## 6.0.4

### Patch Changes

- [`91d20b99`](https://github.com/twilio-labs/paste/commit/91d20b99f5697b91c3e84d3aa778c94938677120) [#2328](https://github.com/twilio-labs/paste/pull/2328) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme & Customization] Fix an issue where animations would run once regardless of if animations should be disabled.

## 6.0.3

### Patch Changes

- [`8e5dfe1e6`](https://github.com/twilio-labs/paste/commit/8e5dfe1e68bd2fb62b2b04d3da41b88a0a9ce220) [#2298](https://github.com/twilio-labs/paste/pull/2298) Thanks [@shleewhite](https://github.com/shleewhite)! - [ThemeProvider] use non-latin fonts based on the HTML lang attribute to support i18n.

## 6.0.2

### Patch Changes

- [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 6.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 6.0.0

### Minor Changes

- [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37) [#2168](https://github.com/twilio-labs/paste/pull/2168) Thanks [@shleewhite](https://github.com/shleewhite)! - [Theme] Deprecated the console theme. Using theme="console" in the Theme.Provider returns the default theme and ConsoleThemeShape returns the DefaultThemeShape. The default theme should be used instead.

* [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc) [#2093](https://github.com/twilio-labs/paste/pull/2093) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme] Add `dataVisualization` token bucket to theme object.

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/color-contrast-utils@2.0.0

## 5.3.3

### Patch Changes

- [`8bedb9fd`](https://github.com/twilio-labs/paste/commit/8bedb9fdc1996b0cabfef90d70b341dd1e384fe1) [#2021](https://github.com/twilio-labs/paste/pull/2021) Thanks [@TheSisb](https://github.com/TheSisb)! - [Theme and Customization] Slight tweak to prevent animations from running once on app load when they should be disabled from the beginning.

## 5.3.2

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 5.3.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 5.3.0

### Minor Changes

- [`10f4a285`](https://github.com/twilio-labs/paste/commit/10f4a285df84e757d0574f4024770b5eddad17ea) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design tokens] export design token types from the design-tokens page
  [theme] `GenericTokenShape` is now called `GenericTokensShape` and exported from `@twilio-paste/design-tokens`

* [`e268bfd1`](https://github.com/twilio-labs/paste/commit/e268bfd13f9d2bbeb1a17f2a7ff0bcdc6796c10a) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [theme] `generateThemeFromTokens` and `generateTokensFromTheme` now take objects as arguments

- [`e268bfd1`](https://github.com/twilio-labs/paste/commit/e268bfd13f9d2bbeb1a17f2a7ff0bcdc6796c10a) [#1310](https://github.com/twilio-labs/paste/pull/1310) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [theme] provide a hook that will calculate the color contrast rating of the current Paste theme `useThemeContrastCheck`

## 5.2.0

### Minor Changes

- [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Adding a body background color for purposes of applying the color background body design token so that you can see the affect it has when theming the website

## 5.1.0

### Minor Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add a dark theme to Paste

## 5.0.2

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

## 5.0.1

### Patch Changes

- [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c) [#1299](https://github.com/twilio-labs/paste/pull/1299) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Correctly type the generic theme type to only include icon sizes in the iconSizes key

## 5.0.0

### Patch Changes

- [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f) [#1236](https://github.com/twilio-labs/paste/pull/1236) Thanks [@richbachman](https://github.com/richbachman)! - Changed SendGrid theme link test so it passes with the correct color.

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272)]:
  - @twilio-paste/design-tokens@6.6.0

## 4.3.1

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6)]:
  - @twilio-paste/design-tokens@6.5.2

## 4.3.0

### Minor Changes

- [`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73) [#1117](https://github.com/twilio-labs/paste/pull/1117) Thanks [@TheSisb](https://github.com/TheSisb)! - Added 'remToPx' utility function.

## 4.2.2

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.y

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@4.2.0...@twilio-paste/theme@4.2.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/theme

# [4.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@4.1.2...@twilio-paste/theme@4.2.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [4.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@4.1.1...@twilio-paste/theme@4.1.2) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/theme

## [4.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@4.1.0...@twilio-paste/theme@4.1.1) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/theme

# [4.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@4.0.1...@twilio-paste/theme@4.1.0) (2020-12-17)

### Features

- **theme:** load fonts.css file from theme provider ([acef2a5](https://github.com/twilio-labs/paste/commit/acef2a54ad76639c8063d134c374792bd7cff181))

## [4.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@4.0.0...@twilio-paste/theme@4.0.1) (2020-12-11)

### Bug Fixes

- **theme:** add public access for npm publish ([ac823f8](https://github.com/twilio-labs/paste/commit/ac823f88a028fb05f1e92282c4446d59a4db6551))

# [4.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.3.3...@twilio-paste/theme@4.0.0) (2020-12-11)

### Features

- **theme:** add ability to generate a theme from design tokens ([9b81663](https://github.com/twilio-labs/paste/commit/9b816639c6f63690048ce74afcaa80995d8fecb4))
- **theme:** add ability to map a theme back to design token groupings ([8f7e6f9](https://github.com/twilio-labs/paste/commit/8f7e6f9e3ee3215f76f58755944d571512007680))
- **theme:** export paste global styles ([b0e5d75](https://github.com/twilio-labs/paste/commit/b0e5d75c7377661aea60adf3a68f2ffe63d00c3e))
- **theme:** remove the color key from theme ([d5f9e68](https://github.com/twilio-labs/paste/commit/d5f9e68c4030d0e80e55e39a6ea590b908c25bb1))

### BREAKING CHANGES

- **theme:** Color key is removed from the theme. This makes for a better experience as there are no duplicate colors. Each type of color has their own key on theme

## [3.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.3.2...@twilio-paste/theme@3.3.3) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/theme

## [3.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.3.1...@twilio-paste/theme@3.3.2) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/theme

## [3.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.3.0...@twilio-paste/theme@3.3.1) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/theme

# [3.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.27...@twilio-paste/theme@3.3.0) (2020-11-05)

### Features

- **theme:** add prop to manually disable animations ([#902](https://github.com/twilio-labs/paste/issues/902)) ([7d92127](https://github.com/twilio-labs/paste/commit/7d92127f9fe6a60970a60705a0a6b0e2218fb81a))

## [3.2.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.26...@twilio-paste/theme@3.2.27) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.25...@twilio-paste/theme@3.2.26) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.24...@twilio-paste/theme@3.2.25) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.23...@twilio-paste/theme@3.2.24) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.22...@twilio-paste/theme@3.2.23) (2020-10-07)

### Bug Fixes

- **theme:** hide reach/dialog css warning ([#821](https://github.com/twilio-labs/paste/issues/821)) ([e110d1e](https://github.com/twilio-labs/paste/commit/e110d1edf9b93258bede7d6d566e9b9826d9c057))

## [3.2.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.21...@twilio-paste/theme@3.2.22) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.20...@twilio-paste/theme@3.2.21) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.19...@twilio-paste/theme@3.2.20) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.18...@twilio-paste/theme@3.2.19) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.17...@twilio-paste/theme@3.2.18) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.16...@twilio-paste/theme@3.2.17) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.15...@twilio-paste/theme@3.2.16) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.14...@twilio-paste/theme@3.2.15) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.13...@twilio-paste/theme@3.2.14) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.12...@twilio-paste/theme@3.2.13) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.11...@twilio-paste/theme@3.2.12) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.10...@twilio-paste/theme@3.2.11) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.9...@twilio-paste/theme@3.2.10) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.8...@twilio-paste/theme@3.2.9) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.7...@twilio-paste/theme@3.2.8) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.6...@twilio-paste/theme@3.2.7) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.5...@twilio-paste/theme@3.2.6) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.4...@twilio-paste/theme@3.2.5) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.3...@twilio-paste/theme@3.2.4) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.2...@twilio-paste/theme@3.2.3) (2020-06-16)

### Bug Fixes

- **theme:** export StyledBase ([fb25eeb](https://github.com/twilio-labs/paste/commit/fb25eeb2228a128aa7cea54a9fcb0ff3bc80604b))

## [3.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.1...@twilio-paste/theme@3.2.2) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/theme

## [3.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.2.0...@twilio-paste/theme@3.2.1) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/theme

# [3.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.7...@twilio-paste/theme@3.2.0) (2020-06-01)

### Features

- **theme:** disable animations when prefers-reduced-motion, cleanup ([2cbe919](https://github.com/twilio-labs/paste/commit/2cbe91982af27be4b3fccc62e3280b49a0f50539))

## [3.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.6...@twilio-paste/theme@3.1.7) (2020-05-20)

**Note:** Version bump only for package @twilio-paste/theme

## [3.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.5...@twilio-paste/theme@3.1.6) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/theme

## [3.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.4...@twilio-paste/theme@3.1.5) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/theme

## [3.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.3...@twilio-paste/theme@3.1.4) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/theme

## [3.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.2...@twilio-paste/theme@3.1.3) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/theme

## [3.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.1...@twilio-paste/theme@3.1.2) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/theme

## [3.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.1.0...@twilio-paste/theme@3.1.1) (2020-04-07)

### Bug Fixes

- **theme:** export theme base styles to be reusable ([28f04af](https://github.com/twilio-labs/paste/commit/28f04af18bdf4ab00d48cd522968dc27edfc22ad))

# [3.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.8...@twilio-paste/theme@3.1.0) (2020-03-24)

### Features

- **theme:** merge theme-tokens into theme package ([f913561](https://github.com/twilio-labs/paste/commit/f913561b076b05be792e6fedae1c1727ecd282b7))

## [3.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.7...@twilio-paste/theme@3.0.8) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/theme

## [3.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.6...@twilio-paste/theme@3.0.7) (2020-03-06)

**Note:** Version bump only for package @twilio-paste/theme

## [3.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.5...@twilio-paste/theme@3.0.6) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/theme

## [3.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.4...@twilio-paste/theme@3.0.5) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/theme

## [3.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.3...@twilio-paste/theme@3.0.4) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [3.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.2...@twilio-paste/theme@3.0.3) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/theme

## [3.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.1...@twilio-paste/theme@3.0.2) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/theme

## [3.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@3.0.0...@twilio-paste/theme@3.0.1) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/theme

# [3.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.5...@twilio-paste/theme@3.0.0) (2019-12-20)

### Features

- **theme:** add the console theme and update default theme ([3951f82](https://github.com/twilio-labs/paste/commit/3951f823454be266dd2b6d4cb805c437df33d86b))

### BREAKING CHANGES

- **theme:** Theme provider default theme is now DEFAULT, not CONSOLE. If you are not providing a theme prop but want the console theme you must now explicitly set the theme to console

## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.4...@twilio-paste/theme@2.0.5) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/theme

## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.3...@twilio-paste/theme@2.0.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/theme

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.2...@twilio-paste/theme@2.0.3) (2019-11-20)

**Note:** Version bump only for package @twilio-paste/theme

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.1...@twilio-paste/theme@2.0.2) (2019-11-18)

### Bug Fixes

- **design-tokens:** change color-text-link token values ([#172](https://github.com/twilio-labs/paste/issues/172)) ([f0a215c](https://github.com/twilio-labs/paste/commit/f0a215cb283f74f268387e744099e337c6489ebd))

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.0...@twilio-paste/theme@2.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/theme

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@1.0.1...@twilio-paste/theme@2.0.0) (2019-11-11)

### Bug Fixes

- global styles by passing props ([#169](https://github.com/twilio-labs/paste/issues/169)) ([65c15c0](https://github.com/twilio-labs/paste/commit/65c15c090c88279faaa2d2c07f91ae8d845e3e20))

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- enable theme switching on the docsite ([#124](https://github.com/twilio-labs/paste/issues/124)) ([df797e5](https://github.com/twilio-labs/paste/commit/df797e57ff1268367053d717f3b3c2ca48a0aa4f))

### BREAKING CHANGES

- **icons:** removed all the inherited icons since we're moving to a new system

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@1.0.0...@twilio-paste/theme@1.0.1) (2019-10-31)

**Note:** Version bump only for package @twilio-paste/theme

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@0.4.1...@twilio-paste/theme@1.0.0) (2019-10-29)

### Features

- design token and theme package documentation ([#103](https://github.com/twilio-labs/paste/issues/103)) ([3060113](https://github.com/twilio-labs/paste/commit/30601132ccdec8f0fee79e0f293c80d0c0cff335))
- **box:** polish and fix ([#125](https://github.com/twilio-labs/paste/issues/125)) ([d151bad](https://github.com/twilio-labs/paste/commit/d151badadfa4db8ade1425df9336e0155ce09619))
- upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))

### BREAKING CHANGES

- **box:** many Box API changes

## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@0.4.0...@twilio-paste/theme@0.4.1) (2019-09-16)

### Bug Fixes

- **design-tokens:** fix SendGrid token values ([#71](https://github.com/twilio-labs/paste/issues/71)) ([396fccf](https://github.com/twilio-labs/paste/commit/396fccf))

# 0.4.0 (2019-08-15)

### Bug Fixes

- change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))

### Features

- ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
- **website:** [DSYS-1046] website structure and navigation ([306586e](https://github.com/twilio-labs/paste/commit/306586e))
