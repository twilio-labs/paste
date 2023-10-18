---
"@twilio-paste/select": patch
"@twilio-paste/core": patch
---

[Select] fix the hydration issue which caused the `defaultValue` prop to not be respected.

Since the React v18 upgrade, we were only rendering the children options after the component and html select
wrapper had mounted. The select would mount with a `defaultValue` of a child that didn't exist, then the
children would be added, so it wouldn't know what value to select. To fix the hydration and `defaultValue`
together we now re-render the entire Select on mount.
