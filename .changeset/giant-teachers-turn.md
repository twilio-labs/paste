---
'@twilio-paste/theme': patch
'@twilio-paste/core': patch
---

[Theme] Change the type of sizeIcon tokens in the GenericThemeShape to be `any`. Previously they were incorrectly typed as the value of the token in the Twilio theme, which was preventing consumers from passing custom icon sizes using the Customization Provider.
