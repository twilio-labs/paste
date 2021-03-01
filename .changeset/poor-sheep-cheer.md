---
'@twilio-paste/label': patch
---

Changed `RequiredDot` to use `sizeIcon30` height so there is alignment with the base `lineHeight30`. This aligns the dot with the center of the first line of text, and solves for multiline labels. Label also now uses Media Object, instead of Flex for the `RequiredDot` placement.
