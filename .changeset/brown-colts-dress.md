---
'@twilio-paste/sibling-box': patch
'@twilio-paste/core': patch
---

[Sibling Box] Enable SiblingBox to respect element customizations set on the customization provider. SiblingBox now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.
