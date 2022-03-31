---
'@twilio-paste/combobox': minor
'@twilio-paste/core': minor
---

[Fix] Remediate erratic scrolling behavior for grouped combobox. Scroll function for the virtualization library was being called even though grouped comboboxes are not virtualized. The jumping behavior on scroll was observed because the indices in the virtual list and the actual list did not match. Added guard to prevent the scroll function from the virtualization library from being called.
