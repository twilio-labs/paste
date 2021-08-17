---
'@twilio-paste/select': patch
'@twilio-paste/core': patch
---

[Select] Added the `element` prop for customization in order to fix a Typescript error after the `element` prop was added as a required prop for `InputBox` and `InputChevronWrapper`. This does not include any default naming, tests, or stories. It only fixes the Typescript error.
