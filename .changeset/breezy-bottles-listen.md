---
'@twilio-paste/combobox': patch
'@twilio-paste/core': patch
---

[Combobox] Render the listbox in a portal to fix a bug where the contents of the listbox are cut off when it placed inside a scrolling container. Adds a new dependency on @radix-ui/react-use-rect.
