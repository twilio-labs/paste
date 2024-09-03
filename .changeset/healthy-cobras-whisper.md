---
"@twilio-paste/combobox": minor
"@twilio-paste/core": minor
---

[Combobox] Add new prop `usePortal` which defaults to `true`. The prop was introduced to address a bug when Comboboxes are placed in Popovers. usePortal should be set to false when using a Combobox inside a Popover in order to retain full functionality.
