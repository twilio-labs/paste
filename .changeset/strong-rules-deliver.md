---
'@twilio-paste/radio-group': patch
---

Removed required from the `id` and `value` props, so RadioGroup can be used as an uncontrolled component. This allows RadioGroup to be used with libraries like `React-Hook-Form`.
