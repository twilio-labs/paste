---
'@twilio-paste/core': patch
'@twilio-paste/theme': patch
---

[Theme] theme breakpoint values are now represented as `px` values instead of `rem` values. MediaQueries are more easily grokked as `px` values, and it simplifies development by eliminating variability in widths. In rare cases, some tests - like snapshot tests - may need to be updated.
