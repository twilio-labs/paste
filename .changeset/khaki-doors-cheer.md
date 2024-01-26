---
"@twilio-paste/customization": minor
"@twilio-paste/theme": minor
"@twilio-paste/core": minor
---

[ThemeProvider, CustomizationProvider] Now accepts an optional `style` prop to override element styles.

This is helpful in scenarios where ThemeProvider isn't wrapping your app root, but instead is nested in your DOM tree and needs some styling overrides.
