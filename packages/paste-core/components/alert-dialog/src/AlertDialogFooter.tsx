import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Stack } from "@twilio-paste/stack";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AlertDialogFooterProps extends HTMLPasteProps<"div">, Pick<BoxProps, "element"> {
  destructive?: boolean;
  onConfirm: () => void;
  onConfirmLabel: string;
  onDismiss: () => void;
  onDismissLabel: string;
  isConfirmDisabled?: boolean;
  /** @deprecated This prop has been deprecated in favor of the `isConfirmDisabled` prop. */
  onConfirmDisabled?: boolean;
}

export const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  (
    {
      destructive,
      element = "ALERT_DIALOG_FOOTER",
      onConfirm,
      onConfirmLabel,
      onDismiss,
      onDismissLabel,
      onConfirmDisabled,
      isConfirmDisabled = onConfirmDisabled || false,
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
          <Button variant={primaryVariant} onClick={onConfirm} disabled={destructive && (isConfirmDisabled || onConfirmDisabled)}>
            {onConfirmLabel}
          </Button>
        </Stack>
      </Box>
    );
  },
);

AlertDialogFooter.displayName = "AlertDialogFooter";
