---
"@twilio-paste/spinner": patch
"@twilio-paste/core": patch
---

[Spinner] Fix a bug that previously occured when a Safari user zoomed in on a page with a Spinner. The animated track moving around the Spinner circle would lose its center and appear off of the circle. This was due to the fact that Safari does not accept "center" as a value for the `transformOrigin` property. The fix was to remove the extra animations for Safari windows only.
