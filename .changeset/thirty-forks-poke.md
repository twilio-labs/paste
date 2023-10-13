---
"@twilio-paste/select": patch
"@twilio-paste/core": patch
---

[Select] fix the behaviour of `defaultValue` by tweaking the rehydration useEffect trick, to stop a SSR mismatch. By only rendering the child options on mount via an effect it prevents `defaultValue` from selecting the default value. We moved to rendering the entire Select element on mount to prevent SSR mismatch, and rendering a placeholder select to prevent layout shift.
