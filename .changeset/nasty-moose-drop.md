---
'@twilio-paste/combobox': minor
'@twilio-paste/core': minor
---

[Combobox] Fix virtualization bug and add virtualization to combobox when an option template is used. The virtualization library we use, react-virtual, provides a ref that is required for correct sizing of virtualized items. The ref from this library's hook was being overridden by another, thus, the virtualized options were not resizing correctly. This behavior was observed in comboboxes that were not using option templates, and had sufficiently long option text.
