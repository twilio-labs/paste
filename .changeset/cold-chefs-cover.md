---
'@twilio-paste/disclosure': major
---

BREAKING CHANGE: style prop is now being blocked by safelySpreadBoxProps, so any additional styles will no longer be rendered.

Style changes:

- Added colorBackgroundBody to DisclosureHeading
- Added colorBackgroundDark to DisclosureHeading on hover
- Added colorBackground to DisclosureHeading when expanded
- Changed the DisclosureHeading icon to ChevronDisclosureExpandedIcon
- Added colorText to icon when hovering on DisclosureHeading
- Icon animates when hovering on DisclosureHeading
