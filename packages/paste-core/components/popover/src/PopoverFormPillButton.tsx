import { FormPill } from "@twilio-paste/form-pill-group";
import { NonModalDialogDisclosurePrimitive } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverFormPillButtonProps } from "./types";

const PopoverFormPillButton = React.forwardRef<HTMLElement, PopoverFormPillButtonProps>(
  ({ children, element = "POPOVER_FORM_PILL", ...popoverButtonProps }, ref) => {
    const popover = React.useContext(PopoverContext);

    return (
      <NonModalDialogDisclosurePrimitive
        element={element}
        {...(popover as any)}
        {...popoverButtonProps}
        as={FormPill}
        ref={ref}
      >
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  },
);

PopoverFormPillButton.displayName = "PopoverFormPillButton";
export { PopoverFormPillButton };
