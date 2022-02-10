---
'@twilio-paste/combobox': patch
'@twilio-paste/core': patch
---

[Combobox] Do not conditionally render the `useCombobox` hook inside the `Combobox` component.

- passing a state object from `useCombobox` via props to the component caused unexpected side effects
- introduces conditional render of the component with its' own hook invocation, or with the forwarded state object
