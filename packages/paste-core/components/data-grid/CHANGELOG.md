# @twilio-paste/data-grid

## 8.3.0

### Minor Changes

- [`22a917aed`](https://github.com/twilio-labs/paste/commit/22a917aed53a0e4b3c1a78a8c946321d326fb12c) [#3740](https://github.com/twilio-labs/paste/pull/3740) Thanks [@TheSisb](https://github.com/TheSisb)! - [Table, DataGrid] Allow passing `whiteSpace` style prop to `Th`/`DataGridHeader` and `Td`/`DataGridCell` components.

## 8.2.1

### Patch Changes

- [`b97c0525b`](https://github.com/twilio-labs/paste/commit/b97c0525b7c3211cdb02808f07d45cb7106438f9) [#3607](https://github.com/twilio-labs/paste/pull/3607) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Data Grid]: Re-add SortDirection type export

## 8.2.0

### Minor Changes

- [`3f6e05d10`](https://github.com/twilio-labs/paste/commit/3f6e05d10553b563cc81dd5c246610be330fb23a) [#3541](https://github.com/twilio-labs/paste/pull/3541) Thanks [@nkrantz](https://github.com/nkrantz)! - [Data Grid] Add ability to override default "grid" role to be "treegrid" for making custom tree grid components using Data Grid. "treegrid" is the only valid type that can be passed to role.

### Patch Changes

- [`bc51057db`](https://github.com/twilio-labs/paste/commit/bc51057dbad9d941b2f0299cb372ca64637ee45d) [#3545](https://github.com/twilio-labs/paste/pull/3545) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Data Grid] Fix issue where form elements in the data-grid that immediately re-render on mount cause the tabIndex management system to faulter.

* [`a684a6bc7`](https://github.com/twilio-labs/paste/commit/a684a6bc79a66987659d7838945b54648faeed4f) [#3516](https://github.com/twilio-labs/paste/pull/3516) Thanks [@abereghici](https://github.com/abereghici)! - chore(data-grid): change isCell function into a type guard and remove unnecessary type assertions

## 8.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

### Patch Changes

- [`b48a0f4ea`](https://github.com/twilio-labs/paste/commit/b48a0f4ea67060070c9fbddc3fde505427b83eb5) [#3502](https://github.com/twilio-labs/paste/pull/3502) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Data Grid]: Improved TsDoc type annotation

## 8.0.0

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
  - @twilio-paste/table@8.0.0
  - @twilio-paste/stack@8.0.0
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
  - @twilio-paste/utils@5.0.0

## 7.0.1

### Patch Changes

- [`8fc130d03`](https://github.com/twilio-labs/paste/commit/8fc130d03556970df344a3db6d851f09c3c1a1bf) [#3261](https://github.com/twilio-labs/paste/pull/3261) Thanks [@TheSisb](https://github.com/TheSisb)! - [Table, DataGrid] Typescript type improvements for Tr, Th, and Td elements

## 7.0.0

### Major Changes

- [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c) [#3114](https://github.com/twilio-labs/paste/pull/3114) Thanks [@SiTaggart](https://github.com/SiTaggart)! - ### Breaking change

  We have moved `@types/react` and `@types/react-dom` to peer dependencies of the library. This should allow for greater control and backwards compatibility with older versions of React as Paste is no longer bundling the type libraries.

  Your application likely has both of these as dependencies anyway, but it is now up to you to manage that version number.

  **Action needed**

  Ensure `@types/react` and `@types/react-dom` are installed as dependencies of your application.

### Patch Changes

- [`bba742ebd`](https://github.com/twilio-labs/paste/commit/bba742ebd404274cbe78bf1726d2a83c7070bc02) [#3089](https://github.com/twilio-labs/paste/pull/3089) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [data-grid] Update styles to align with new Paste Twilio theme.

- Updated dependencies [[`6730aac19`](https://github.com/twilio-labs/paste/commit/6730aac19056d33373032eb37abb6150caea9f08), [`1d75f223e`](https://github.com/twilio-labs/paste/commit/1d75f223e0e2011a7a969e7ef1980fa9366cfbca), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`50cde4668`](https://github.com/twilio-labs/paste/commit/50cde4668b003c410713d4a51eed16a394471ed0), [`bce889344`](https://github.com/twilio-labs/paste/commit/bce889344773d840d7dc75902e1be64f1a010da3), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c), [`3ab2bb6f4`](https://github.com/twilio-labs/paste/commit/3ab2bb6f4b294379e9dcba4ad7173ebf18eac56c)]:
  - @twilio-paste/button@13.0.0
  - @twilio-paste/icons@11.0.0
  - @twilio-paste/anchor@11.0.0
  - @twilio-paste/theme@10.0.0
  - @twilio-paste/box@9.0.0
  - @twilio-paste/screen-reader-only@12.0.0
  - @twilio-paste/spinner@13.0.0
  - @twilio-paste/table@7.0.0
  - @twilio-paste/stack@7.0.0
  - @twilio-paste/customization@7.0.0
  - @twilio-paste/style-props@8.0.0
  - @twilio-paste/types@5.0.0
  - @twilio-paste/utils@4.0.0

## 6.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/anchor@10.0.0
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/button@12.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/spinner@12.0.0
  - @twilio-paste/table@6.0.0
  - @twilio-paste/stack@6.0.0
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
  - @twilio-paste/utils@3.0.0
  - @twilio-paste/color-contrast-utils@4.0.0

## 5.0.2

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 5.0.1

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 5.0.0

### Patch Changes

- Updated dependencies [[`38a210f9f`](https://github.com/twilio-labs/paste/commit/38a210f9f7c229a46ab9850f528eb60204dd1273)]:
  - @twilio-paste/utils@2.0.0

## 4.1.0

### Minor Changes

- [`7e75f8119`](https://github.com/twilio-labs/paste/commit/7e75f8119067c8aad70f14b70324ca93d8d07917) [#2574](https://github.com/twilio-labs/paste/pull/2574) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [table, data-grid] adding sticky header functionality to both the Table and Data Grid components

## 4.0.0

### Patch Changes

- [`e21a9ff58`](https://github.com/twilio-labs/paste/commit/e21a9ff580b1a0f8595752b2eeac858abf7f085f) [#2597](https://github.com/twilio-labs/paste/pull/2597) Thanks [@jb-twilio](https://github.com/jb-twilio)! - [Data Grid] include supporting types and documentation for existing colSpan prop

- Updated dependencies [[`12c4ba22a`](https://github.com/twilio-labs/paste/commit/12c4ba22a0e7675e63964bf9846fb540cd50957c), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355), [`ee2e535e9`](https://github.com/twilio-labs/paste/commit/ee2e535e906397caacaf1f5137acac34d4034213), [`364083627`](https://github.com/twilio-labs/paste/commit/3640836277f46f6f8bbe994d5aa3f9af44c9e355)]:
  - @twilio-paste/box@7.0.0
  - @twilio-paste/style-props@6.0.0
  - @twilio-paste/design-tokens@8.0.0
  - @twilio-paste/theme@8.0.0
  - @twilio-paste/button@11.0.0
  - @twilio-paste/anchor@9.0.0
  - @twilio-paste/spinner@11.0.0
  - @twilio-paste/table@5.0.0
  - @twilio-paste/stack@5.0.0
  - @twilio-paste/customization@5.0.0
  - @twilio-paste/icons@9.0.0

## 3.0.2

### Patch Changes

- [`ae9dd50f`](https://github.com/twilio-labs/paste/commit/ae9dd50fd2c14436cb984c2daec3914daca20866) [#2466](https://github.com/twilio-labs/paste/pull/2466) Thanks [@TheSisb](https://github.com/TheSisb)! - [All packages] Update our ESBuild version and remove minification of identifiers in our production builds.

## 3.0.1

### Patch Changes

- [`9983b52e9`](https://github.com/twilio-labs/paste/commit/9983b52e92d15373824e4b3cc10572b2f51d58f8) [#2419](https://github.com/twilio-labs/paste/pull/2419) Thanks [@gloriliale](https://github.com/gloriliale)! - [Combobox, Data grid, Color contrast utils, Customization, Design tokens, Icons, Style props, Token contrast checker, Types, Utils, Website] Consolidate and update lodash dependencies and the way lodash is imported in our files, per lodash's guidance. Details: https://lodash.com/per-method-packages

## 3.0.0

### Patch Changes

- Updated dependencies [[`09762f0f`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c), [`09762f0f1`](https://github.com/twilio-labs/paste/commit/09762f0f1bcfd42d901bd90c33279be68464c68c)]:
  - @twilio-paste/box@6.0.0
  - @twilio-paste/styling-library@1.0.0
  - @twilio-paste/theme@7.0.0
  - @twilio-paste/anchor@8.0.0
  - @twilio-paste/button@10.0.0
  - @twilio-paste/spinner@10.0.0
  - @twilio-paste/table@4.0.0
  - @twilio-paste/stack@4.0.0
  - @twilio-paste/customization@4.0.0
  - @twilio-paste/icons@8.0.0
  - @twilio-paste/style-props@5.0.0

## 2.0.0

### Patch Changes

- Updated dependencies [[`10178f39d`](https://github.com/twilio-labs/paste/commit/10178f39dd8a317f3544cf982706ba50d2c7d377)]:
  - @twilio-paste/icons@7.0.0
  - @twilio-paste/anchor@7.0.0
  - @twilio-paste/button@9.0.0
  - @twilio-paste/spinner@9.0.0

## 1.1.0

### Minor Changes

- [`b1359c95e`](https://github.com/twilio-labs/paste/commit/b1359c95ebbd0ec12eca3d72cfbcac72c06f6b85) [#2307](https://github.com/twilio-labs/paste/pull/2307) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Data grid]: inherit more things from the base table component, including the new responsive and no line wrapping behaviours for better table rendering options.

## 1.0.2

### Patch Changes

- [`690a2d2a5`](https://github.com/twilio-labs/paste/commit/690a2d2a5657f4bdf5336451e9365aa8799934ad) [#2263](https://github.com/twilio-labs/paste/pull/2263) Thanks [@shleewhite](https://github.com/shleewhite)! - [Data Grid] add i18n props to support i18n

* [`73c596919`](https://github.com/twilio-labs/paste/commit/73c5969191c04b4721a059c9dee329126afc1a8e) [#2269](https://github.com/twilio-labs/paste/pull/2269) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fixed a regression with the compilation script that caused incompatible ESM module importing of JSON files.

## 1.0.1

### Patch Changes

- [`c867e3f48`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

## 1.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/anchor@6.0.0
  - @twilio-paste/button@8.0.0
  - @twilio-paste/spinner@8.0.0
  - @twilio-paste/table@3.0.0
  - @twilio-paste/stack@3.0.0
  - @twilio-paste/box@5.0.0
  - @twilio-paste/customization@3.0.0

## 0.2.1

### Patch Changes

- [`0f0a9bdd1`](https://github.com/twilio-labs/paste/commit/0f0a9bdd1392db27377c3c1e2f9881ac5afc85b8) [#2075](https://github.com/twilio-labs/paste/pull/2075) Thanks [@TheSisb](https://github.com/TheSisb)! - [Data-grid] Fixes issue where inner links would at times not be clickable.

## 0.2.0

### Minor Changes

- [`ad741d15a`](https://github.com/twilio-labs/paste/commit/ad741d15a313c59ed8922d7515ecb1109b07e60a) [#2025](https://github.com/twilio-labs/paste/pull/2025) Thanks [@nkrantz](https://github.com/nkrantz)! - [Data-Grid] Add `textAlign` prop to `DataGridCell` for aligning cells and columns to the right.

## 0.1.1

### Patch Changes

- [`8f83a25d`](https://github.com/twilio-labs/paste/commit/8f83a25dec843518721597721606e80e37dbde97) [#1990](https://github.com/twilio-labs/paste/pull/1990) Thanks [@TheSisb](https://github.com/TheSisb)! - [Data Grid] Fixed broken 'striped' prop so it correctly toggles zebra striping on rows.

* [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

- [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.1.0

### Minor Changes

- [`9adf3edd`](https://github.com/twilio-labs/paste/commit/9adf3edd88598aa3e8de3f6dd027371a2e54d368) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Adding "@twilio-paste/data-grid", an accessible and responsive data grid component to Paste.
