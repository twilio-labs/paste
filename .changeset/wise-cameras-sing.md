---
'@twilio-paste/checkbox': patch
'@twilio-paste/radio-group': patch
'@twilio-paste/core': patch
---

[Checkbox, RadioGroup] When no id is passed, use a unique id. This fixes an issue where id is not marked as a required prop, but the control won't work unless it is passed.
