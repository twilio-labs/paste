---
'@twilio-paste/popover': minor
'@twilio-paste/core': minor
---

[Popover] Removes the wrapping `<Box>` present in `PopoverContainer`, along with the ref passing. PopoverContainer is strictly a context provider now. This fixes issues around vertical alignment and inlining PopoverButtons.
