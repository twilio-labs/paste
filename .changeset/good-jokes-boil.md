---
"@twilio-paste/box": patch
"@twilio-paste/core": patch
---

[Box] remove `className` from `BOX_PROPS_TO_BLOCK` so that `safelySpreadBoxProps` doesn't strip away usage of `styled`. Necessary for One Console chrome team to customize certain components. `styled` should not be used by other teams and `className` should not be used at all with Paste components.
