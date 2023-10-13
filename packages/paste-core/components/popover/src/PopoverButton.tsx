import { Button } from "@twilio-paste/button";
import { NonModalDialogDisclosurePrimitive } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverButtonProps } from "./types";

const PopoverButton = React.forwardRef<HTMLButtonElement, PopoverButtonProps>(
  ({ children, element = "POPOVER_BUTTON", ...popoverButtonProps }, ref) => {
    const popover = React.useContext(PopoverContext);

    return (
      <NonModalDialogDisclosurePrimitive
        element={element}
        {...(popover as any)}
        {...popoverButtonProps}
        as={Button}
        ref={ref}
      >
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  },
);

PopoverButton.displayName = "PopoverButton";
export { PopoverButton };
