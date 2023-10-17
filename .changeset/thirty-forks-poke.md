---
"@twilio-paste/select": patch
"@twilio-paste/core": patch
---

[Select] fix the hydration issue which caused the `defaultValue` prop to not be respected.

Since the React v18 upgrade, we were only rendering the children options after the component and html select
wrapper had mounted. The select would mount with a `defaultValue` of a child that didn't exist, then the
children would be added, so it wouldn't know what value to select. By adding a `key` prop to the select,
it now knows to re-render on mount with the children, and can properly lookup the correct value now.
