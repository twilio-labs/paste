import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import { NonModalDialogDisclosurePrimitive } from "@twilio-paste/non-modal-dialog-primitive";
import * as React from "react";

import { MinimizableDialogContext } from "./MinimizableDialogContext";

export type MinimizableDialogButtonProps = Omit<ButtonProps, "as" | "element"> & {
  /**
   *
   * @type {string}
   * @memberof MinimizableDialogButtonProps
   */
  id?: string;
  /**
   *
   * @memberof MinimizableDialogButtonProps
   */
  toggle?: () => void;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'MINIMIZABLE_DIALOG_BUTTON'
   * @type {BoxProps['element']}
   * @memberof MinimizableDialogButtonProps
   */
  element?: BoxProps["element"];
};

const MinimizableDialogButton = React.forwardRef<HTMLButtonElement, MinimizableDialogButtonProps>(
  ({ children, element = "MINIMIZABLE_DIALOG_BUTTON", ...props }, ref) => {
    const dialog = React.useContext(MinimizableDialogContext);

    return (
      <NonModalDialogDisclosurePrimitive element={element} {...dialog} {...props} as={Button} ref={ref}>
        {children}
      </NonModalDialogDisclosurePrimitive>
    );
  },
);

MinimizableDialogButton.displayName = "MinimizableDialogButton";
export { MinimizableDialogButton };
