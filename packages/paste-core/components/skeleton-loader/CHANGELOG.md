# @twilio-paste/skeleton-loader

## 1.0.1

### Patch Changes

- [`c867e3f4`](https://github.com/twilio-labs/paste/commit/c867e3f48d739409d1f54fa18c4d2bee1d9242cf) [#2237](https://github.com/twilio-labs/paste/pull/2237) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Updated a build dependency (esbuild) which changes the output of our builds slightly, without materially changing anything about the code.

* [`0cd424df4`](https://github.com/twilio-labs/paste/commit/0cd424df4d3ed57e60a0d93b97dda8b4c708ce7c) [#2184](https://github.com/twilio-labs/paste/pull/2184) Thanks [@loreina](https://github.com/loreina)! - [alert]

  - Update neutral Alert border to `colorBorderNeutralWeak`

  [button]

  - Update `DestructiveButton` default text color to `colorTextInverse`
  - Update `PrimaryButton` default text color to `colorTextInverse`
  - Update `DestructiveLinkButton` active text color to `colorTextLinkDestructiveStrongest`
  - Update `InverseButton` box shadow to `shadowBorderInverseWeakest`
  - Update `LinkButton` active text color to `colorTextLinkStrongest`

  [checkbox]

  - Update the check icon to inherit color from `BaseRadioCheckbox`
  - Update selectAll background color to default to `colorBackground`, and use `colorBackgroundPrimaryWeakest` when checked and not disabled or indeterminate and not disabled
  - Update default color to `colorTextWeakest`
  - Update hover text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update focus text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
  - Update active text color to `colorTextWeakest`
  - Update checked text color to `colorTextInverse`
  - Update invalid and hover border color to `colorBorderErrorStronger`
  - Update checked and hover text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and focus text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
  - Update checked and disabled text color to `colorTextWeakest`
  - Update checked and invalid text color to `colorTextInverse`
  - Update checked and invalid and hover background color to `colorBackgroundErrorStronger` and border color to `colorBorderErrorStronger`

  [display-pill-group]

  - Update text color to `colorText`

  [input-box]

  - Update default box shadow hover to `shadowBorderPrimaryStronger`
  - Update default box shadow hover when error and not hidden to `shadowBorderErrorStronger`
  - Update inverse background color when disabled and not hidden to `colorBackgroundInverse`

  [modal]

  - Update modal header border bottom color to `colorBorderWeak`
  - Update modal footer border top color to `colorBorderWeak`

  [skeleton-loader]

  - Update animated background color to use `rgba(255, 255, 255, 0.4)`

  [toast]

  - Update neutral Toast border left color to `colorBorderNeutralWeak`

  [tooltip]

  - Update tooltip arrow stroke to `colorBorderInverseWeaker`
  - Update tooltip border color to `colorBorderInverseWeaker`

## 1.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/box@5.0.0

## 0.1.3

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 0.1.2

### Patch Changes

- [`7edfbcfb`](https://github.com/twilio-labs/paste/commit/7edfbcfb54ff9bedcaa1a3439461dd1a96665e07) [#1893](https://github.com/twilio-labs/paste/pull/1893) Thanks [@TheSisb](https://github.com/TheSisb)! - Minor performance improvement to the animation code.

## 0.1.1

### Patch Changes

- [`ab55fa27`](https://github.com/twilio-labs/paste/commit/ab55fa270f982ad867a5933dcea8ee240e780fed) [#1814](https://github.com/twilio-labs/paste/pull/1814) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Skeleton-loader] Enable Compoonent to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 0.1.0

### Minor Changes

- [`c7d6fa75`](https://github.com/twilio-labs/paste/commit/c7d6fa7526ac10f98dbf406800513fd7af6c371d) [#1641](https://github.com/twilio-labs/paste/pull/1641) Thanks [@richbachman](https://github.com/richbachman)! - [skeleton-loader] Created skeleton loader component package.
