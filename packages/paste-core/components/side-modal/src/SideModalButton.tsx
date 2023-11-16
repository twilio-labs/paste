import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import { NonModalDialogDisclosurePrimitive } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

import { SideModalContext } from "./SideModalContext";

export type SideModalButtonProps = Omit<ButtonProps, "as"> & {
  /**
   * The element the `SideModalButton` will render
   *
   * @default "SIDE_MODAL_BUTTON"
   * @type {ButtonProps["element"]}
   */
  element?: ButtonProps["element"];
  /**
   * The id of the SideModal that the button controls
   *
   * @type {string}
   */
  id?: string;
};

const SideModalButton = React.forwardRef<HTMLButtonElement, SideModalButtonProps>(
  ({ children, element = "SIDE_MODAL_BUTTON", ...props }, ref) => {
    const dialog = React.useContext(SideModalContext);

    return (
      <NonModalDialogDisclosurePrimitive element={element} {...dialog} {...props} as={Button} ref={ref}>
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  },
);

SideModalButton.displayName = "SideModalButton";
export { SideModalButton };
