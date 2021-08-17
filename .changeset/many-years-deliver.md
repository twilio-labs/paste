---
'@twilio-paste/textarea': patch
'@twilio-paste/core': patch
---

[TextArea] Added the `element` prop for customization in order to fix a Typescript error after the `element` prop was added as a required prop for `InputBox`. This does not include any default naming, tests, or stories. It only fixes the Typescript error.
