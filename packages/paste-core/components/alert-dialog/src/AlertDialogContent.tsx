import { ModalDialogContent } from "@twilio-paste/modal";
import type { ModalDialogContentProps } from "@twilio-paste/modal";
import { css, styled } from "@twilio-paste/styling-library";

export type AlertDialogContentProps = ModalDialogContentProps;

/**
 * Content area for the AlertDialog component.
 *
 * @private
 */
export const AlertDialogContent = styled(ModalDialogContent)<AlertDialogContentProps>(() =>
  css({
    maxWidth: "size40",
  }),
);

AlertDialogContent.displayName = "AlertDialogContent";
