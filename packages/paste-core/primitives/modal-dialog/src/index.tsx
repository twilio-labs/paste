/* Keeping the Reach export until we transition Modal to use Reakit */
import {
  DialogContent as ModalDialogPrimitiveContent,
  DialogOverlay as ModalDialogPrimitiveOverlay,
} from '@reach/dialog';

export {ModalDialogPrimitiveContent, ModalDialogPrimitiveOverlay};

export type {
  DialogState as ModalDialogPrimitiveState,
  DialogInitialState as ModalDialogPrimitiveInitialState,
  DialogProps as ModalDialogPrimitiveProps,
  DialogBackdropProps as ModalDialogBackdropPrimitiveProps,
} from 'reakit/Dialog';

export {
  useDialogState as useModalDialogPrimitiveState,
  Dialog as ModalDialogPrimitive,
  DialogBackdrop as ModalDialogBackdropPrimitive,
} from 'reakit/Dialog';
