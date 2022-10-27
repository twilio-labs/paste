---
'@twilio-paste/switch': major
'@twilio-paste/core': major
---

[Switch] Updated Switch component API to match other form components in Paste.

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
  - `children` prop type changed to ` NonNullable<React.ReactNode>`
  - adds `hasError?: boolean` to handle error states.
  - adds `helpText?: string | React.React.Node` to add additional context to a switch.
  - adds `checked?: boolean` to use the Switch in a controlled manner.
  - adds `defaultChecked?: boolean` to set the default checked value in an uncontrolled manner.
