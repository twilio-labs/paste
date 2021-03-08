---
'@twilio-paste/textarea': patch
---

Removed required from the `id` prop, so TextArea can be used as an uncontrolled component. This allows TextArea to be used with libraries like `React-Hook-Form`.
