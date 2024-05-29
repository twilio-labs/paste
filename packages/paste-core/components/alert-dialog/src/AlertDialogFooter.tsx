import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Stack } from "@twilio-paste/stack";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AlertDialogFooterProps extends HTMLPasteProps<"div">, Pick<BoxProps, "element"> {
  /** Determines if the Alert Dialog is destructive. _Only changes the button color of confirm button._ */
  destructive?: boolean;
  /** Function to run on confirmation of the Alert Dialog. */
  onConfirm: () => void;
  /** Text of the confirm button. */
  onConfirmLabel: string;
  /** Function to run on dismiss of the Alert Dialog. */
  onDismiss: () => void;
  /** Text of the dismiss button. */
  onDismissLabel: string;
  /** Property to disable the confirm button. _Has no effect if destructive is not true._ */
  onConfirmDisabled?: boolean;
}

/**
 * Alert Dialog footer component for the AlertDialog component.
 *
 * @private
 */
export const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  (
    {
      destructive,
      element = "ALERT_DIALOG_FOOTER",
      onConfirm,
      onConfirmLabel,
      onDismiss,
      onDismissLabel,
      onConfirmDisabled = false,
      ...props
    },
    ref,
  ) => {
    const primaryVariant = destructive ? "destructive" : "primary";

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        flexShrink={0}
        display="flex"
        padding="space90"
        paddingTop="space0"
        border="none"
        element={element}
        justifyContent="flex-end"
        ref={ref}
      >
        <Stack orientation="horizontal" spacing="space50">
          <Button variant="secondary" onClick={onDismiss}>
            {onDismissLabel}
          </Button>
          <Button variant={primaryVariant} onClick={onConfirm} disabled={destructive && onConfirmDisabled}>
            {onConfirmLabel}
          </Button>
        </Stack>
      </Box>
    );
  },
);

AlertDialogFooter.displayName = "AlertDialogFooter";
