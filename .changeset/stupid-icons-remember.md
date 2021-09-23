---
'@twilio-paste/button': patch
'@twilio-paste/core': patch
---

[Button] Enable Component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.
