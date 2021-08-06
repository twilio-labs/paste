---
'@twilio-paste/grid': minor
'@twilio-paste/core': minor
---

[Grid] Enable Grid and Column to respect element customizations set on the customization provider. Grid, and Column now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

`Column` has been refactored to use `Box` instead of being a styled div.
