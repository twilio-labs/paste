---
"@twilio-paste/select": patch
"@twilio-paste/core": patch
---

[Select] fix the behaviour of `defaultValue` by removing the rehydration useEffect trick to stop a SSR mismatch. By only rendering the child options on mount via an effect it prevents `defaultValue` from selecting the default value. We will look for other ways of dealing with rehydration mismatches
