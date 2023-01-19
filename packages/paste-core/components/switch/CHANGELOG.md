# @twilio-paste/switch

## 2.0.1

### Patch Changes

- [`804fb9316`](https://github.com/twilio-labs/paste/commit/804fb9316aa473529920a269b204dbb2710abd1b) [#2895](https://github.com/twilio-labs/paste/pull/2895) Thanks [@Niznikr](https://github.com/Niznikr)! - Update packages to be ESM-compatible

## 2.0.0

### Major Changes

- [`38a72ad0c`](https://github.com/twilio-labs/paste/commit/38a72ad0c64ad0e11316cf410505dcec640d0c16) [#2753](https://github.com/twilio-labs/paste/pull/2753) Thanks [@TheSisb](https://github.com/TheSisb)! - [Switch] Updated Switch component API to match other form components in Paste.

  - `SwitchContainer` has been replaced with `SwitchGroup`
  - `SwitchGroup` props changes:
    - removes `id?: string`
    - removes `label: ReactNode` - use the new `legend` prop instead.
    - adds `legend: string | NonNullable<React.ReactNode>` to replace the old `label` prop.
    - adds `errorText?: string | React.ReactNode` to handle error states.
    - adds `orientation?: 'vertical' | 'horizontal;` to set children orientation.
    - adds `i18nRequiredLabel?: string` to change the required label for internationalization.
    - adds `name: string` to label the switch group for forms.
    - adds `onChange?: (checked: boolean) => void` to handle changes to any child Switch's checked state in a single function.
    - `helpText` prop now accepts a string.
    - `required` prop is now optional.
    - `element` prop default value changed to `SWITCH_GROUP` from `SWITCH_CONTAINER`
  - `Switch` props changes:
    - `children` prop type changed to `NonNullable<React.ReactNode>`
    - adds `hasError?: boolean` to handle error states.
    - adds `helpText?: string | React.React.Node` to add additional context to a switch.
    - adds `checked?: boolean` to use the Switch in a controlled manner.
    - adds `defaultChecked?: boolean` to set the default checked value in an uncontrolled manner.

### Patch Changes

- [`a4c9e70b0`](https://github.com/twilio-labs/paste/commit/a4c9e70b0820bfb2a41f58a61e7f991d9fa3a09b) [#2763](https://github.com/twilio-labs/paste/pull/2763) Thanks [@shleewhite](https://github.com/shleewhite)! - Update ESLint rules, which changed some formatting.

## 1.0.0

### Major Changes

- [`bd0a3feaa`](https://github.com/twilio-labs/paste/commit/bd0a3feaad502ad834bb4333cac4821ff8deb184) [#2625](https://github.com/twilio-labs/paste/pull/2625) Thanks [@nkrantz](https://github.com/nkrantz)! - [Switch] add Switch package
