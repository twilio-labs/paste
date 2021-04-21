---
'@twilio-paste/avatar': patch
'@twilio-paste/core': patch
---

Restricted Avatar propTypes so that users cannot add both `src` and `icon` props to Avatar, only one or the other.
