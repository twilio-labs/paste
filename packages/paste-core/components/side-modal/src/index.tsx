import type { SideModalStateReturn } from "./SideModalContainer";

type SideModalStateReturnProps = SideModalStateReturn;

export { useNonModalDialogPrimitiveState as useSideModalState } from "@twilio-paste/non-modal-dialog-primitive";
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
