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
        onSelect={(e: React.MouseEvent<HTMLButtonElement>) => {
          // @ts-expect-error Property 'toggle' does not exist on type 'Partial<PopoverState>', but it is there as it comes form DialogActions prop.
          popover.toggle();
          // Call the actual onsSelect function passed to the component
          if (popoverButtonProps.onSelect) {
            popoverButtonProps.onSelect(e);
          }
        }}
        baseId={popover.baseId}
      >
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  },
);

PopoverFormPillButton.displayName = "PopoverFormPillButton";
export { PopoverFormPillButton };
