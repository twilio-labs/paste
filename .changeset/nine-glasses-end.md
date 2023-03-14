---
'@twilio-paste/toast': major
'@twilio-paste/core': major
---

[Toast]

- Remove `__console_patch` prop from the Toast package. This was a temporary z-index fix for console that is no longer necessary.
- Add `left` prop to the Toast package so that consumers can place their Toasts according to their app's breakpoints. This feature enables mobile responsiveness for Toast.
