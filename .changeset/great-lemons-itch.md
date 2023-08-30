---
'@twilio-paste/combobox': patch
'@twilio-paste/core': patch
---

[MultiselectCombobox] fix bug where passing `required` would block form submit events. `required` now only blocks the submit event if no items are selected rather than when the input box is blank.
