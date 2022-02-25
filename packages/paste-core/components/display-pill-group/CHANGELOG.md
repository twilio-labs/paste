# @twilio-paste/display-pill-group

## 2.0.1

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

## 2.0.0

### Patch Changes

- Updated dependencies [[`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`39ab32c2`](https://github.com/twilio-labs/paste/commit/39ab32c2d9e211b3a46a7cb789c62b7e6463510d), [`0a52eeee`](https://github.com/twilio-labs/paste/commit/0a52eeee469a2288d43d4e7f4acef27854fe8b37), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc), [`04de0d1d`](https://github.com/twilio-labs/paste/commit/04de0d1de8428ba5e0fd04c1ec94639c78cab6cc)]:
  - @twilio-paste/design-tokens@7.0.0
  - @twilio-paste/icons@6.0.0
  - @twilio-paste/theme@6.0.0
  - @twilio-paste/style-props@4.0.0
  - @twilio-paste/anchor@6.0.0
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

- [`8e0037ab`](https://github.com/twilio-labs/paste/commit/8e0037ab6c83e5b552758444fc9a5338437aeb00) [#1879](https://github.com/twilio-labs/paste/pull/1879) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Display Pill Group] Updated design for display and form pills, improving interactive states such as focus, hover and selected

## 1.0.0

### Major Changes

- [`ca0bf618`](https://github.com/twilio-labs/paste/commit/ca0bf6188ad7ac3375bec75d6461924b13edb391) [#1800](https://github.com/twilio-labs/paste/pull/1800) Thanks [@TheSisb](https://github.com/TheSisb)! - [DisplayPillGroup]: Adding this new Paste component package for Display Pill Group.
