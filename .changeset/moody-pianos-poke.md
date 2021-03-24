---
'@twilio-paste/button': major
---

Button components used as links (as="a" and href="") now automatically add an arrow icon if children is a string. This change also adds additional validation to throw an error if the `disabled` or `loading` props are set to `true` for a Button as link.
