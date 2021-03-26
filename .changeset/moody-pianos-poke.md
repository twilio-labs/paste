---
'@twilio-paste/button': major
'@twilio-paste/core': major
---

BREAKING CHANGES:

Button components used as links (as="a" and href="") now automatically add an arrow icon if children is a string. This is a design breaking change that you should be aware of when upgrading.

Button also adds additional validation to throw an error if the `disabled` or `loading` props are set to `true` for a Button as link. This is a functionality breaking change to existing disabled link buttons.
