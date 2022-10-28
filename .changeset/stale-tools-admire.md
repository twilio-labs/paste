---
'@twilio-paste/combobox': patch
'@twilio-paste/core': patch
---

[Combobox] remove inherited HTML `autoComplete` prop because it conflicts with the autocomplete prop and remove state prop from Multiselect Combobox because we don't support using it with the useComboboxState hook.
