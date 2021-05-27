---
'@twilio-paste/design-tokens': patch
'@twilio-paste/core': patch
---

Fixed shadow-border, shadow-border-weak, shadow-border-weaker, shadow-border-strong values to match respective color-border-\* values in all themes.

Shadow-border-stronger token has been removed in all themes.

**Default theme**

| Token                | Original color value | New color value |
| -------------------- | -------------------- | --------------- |
| shadow-border-weak   | NA                   | palette-gray-30 |
| shadow-border-weaker | NA                   | palette-gray-20 |
| shadow-border-strong | palette-gray-30      | palette-gray-60 |

**Console theme**

| Token                | Original color value | New color value |
| -------------------- | -------------------- | --------------- |
| shadow-border-weak   | NA                   | palette-gray-50 |
| shadow-border-weaker | NA                   | palette-gray-40 |
| shadow-border-strong | palette-gray-40      | palette-gray-60 |

**Dark theme**

| Token                | Original color value | New color value |
| -------------------- | -------------------- | --------------- |
| shadow-border        | palette-gray-50      | palette-gray-60 |
| shadow-border-weak   | NA                   | palette-gray-70 |
| shadow-border-weaker | NA                   | palette-gray-80 |
| shadow-border-strong | palette-gray-90      | palette-gray-50 |
