---
'@twilio-paste/select': patch
---

Removed required from the `id`, `onChange`, and `value` props, so Select can be used as an uncontrolled component. This allows Select to be used with libraries like `React-Hook-Form`.
