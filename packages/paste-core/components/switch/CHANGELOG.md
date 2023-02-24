# @twilio-paste/switch

## 3.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

* [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea) [#3020](https://github.com/twilio-labs/paste/pull/3020) Thanks [@SiTaggart](https://github.com/SiTaggart)! - This major version included listing all the missing peer dependencies for each Paste package.

  If you are using a package from Paste in isolation from Core, when upgrading to this latest version, be sure to correctly install all the missing peer dependencies.

### Patch Changes

- Updated dependencies [[`dbd9bf992`](https://github.com/twilio-labs/paste/commit/dbd9bf992c6dfec2858a8a73e7ec428d8185f12c), [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a), [`d97098846`](https://github.com/twilio-labs/paste/commit/d970988465700f5b396f71911b750ba2ac7f5bea), [`154b02c06`](https://github.com/twilio-labs/paste/commit/154b02c06d209a72337ead97b2a6f6e132868b39), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee), [`ef094db4a`](https://github.com/twilio-labs/paste/commit/ef094db4a259f734eac1ad926edfd07e5b4e58df), [`0acdf3486`](https://github.com/twilio-labs/paste/commit/0acdf3486c0956d5e70fda67c8031eda96aae9ee)]:
  - @twilio-paste/design-tokens@9.0.0
  - @twilio-paste/help-text@11.0.0
  - @twilio-paste/inline-control-group@11.0.0
  - @twilio-paste/label@11.0.0
  - @twilio-paste/screen-reader-only@11.0.0
  - @twilio-paste/flex@6.0.0
  - @twilio-paste/media-object@8.0.0
  - @twilio-paste/box@8.0.0
  - @twilio-paste/sibling-box@7.0.0
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
