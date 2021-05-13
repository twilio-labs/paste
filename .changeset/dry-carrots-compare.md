---
'@twilio-paste/modal-dialog-primitive': major
'@twilio-paste/core': major
---

BREAKING CHANGE: Modal Dialog Primitive is no longer using Reach Dialog. It now uses Reakit Dialog.

- ModalDialogPrimitiveContent has been deprecated
- ModalDialogPrimitiveOverlay has been deprecated

useModalDialogPrimitiveState, ModalDialogPrimitive, and ModalDialogBackdropPrimitive should now be used to compose a modal dialog.
