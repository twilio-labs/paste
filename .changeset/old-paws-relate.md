---
'@twilio-paste/combobox': patch
'@twilio-paste/core': patch
---

[Combobox] Minor fix to controlled Comboboxes, where the input cursor would always jump to the end of the input string in autocomplete examples, even when you want to amend the beginning or middle. Cursor position should now remain in place as you type or modify the input value.
