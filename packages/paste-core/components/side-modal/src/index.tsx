"use client";
import {
  type NonModalDialogPrimitivePopoverInitialState,
  type NonModalDialogPrimitiveStateReturn,
  useNonModalDialogPrimitiveState,
} from "@twilio-paste/non-modal-dialog-primitive";

import type { SideModalStateReturn } from "./SideModalContainer";

type SideModalStateReturnProps = SideModalStateReturn;

/*
 * Fixes issue where the popover would not open in a portal
 * when using the state hook directly
 */
export const useSideModalState = (
  options: NonModalDialogPrimitivePopoverInitialState,
): NonModalDialogPrimitiveStateReturn => {
  return useNonModalDialogPrimitiveState({ modal: true, unstable_fixed: true, ...options });
};

export { SideModal } from "./SideModal";
export type { SideModalProps } from "./SideModal";
export { SideModalButton } from "./SideModalButton";
export type { SideModalButtonProps } from "./SideModalButton";
export { SideModalHeader } from "./SideModalHeader";
export type { SideModalHeaderProps } from "./SideModalHeader";
export { SideModalHeading } from "./SideModalHeading";
export type { SideModalHeadingProps } from "./SideModalHeading";
export { SideModalContainer } from "./SideModalContainer";
export type { SideModalContainerProps, SideModalStateReturn } from "./SideModalContainer";
// renamed for the sake of documentating the API
export type { SideModalStateReturnProps };
export { SideModalBody } from "./SideModalBody";
export type { SideModalBodyProps } from "./SideModalBody";
export { SideModalFooter } from "./SideModalFooter";
export type { SideModalFooterProps } from "./SideModalFooter";
export { SideModalFooterActions } from "./SideModalFooterActions";
export type { SideModalFooterActionsProps } from "./SideModalFooterActions";
