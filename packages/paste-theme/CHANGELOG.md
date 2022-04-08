# Change Log

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
