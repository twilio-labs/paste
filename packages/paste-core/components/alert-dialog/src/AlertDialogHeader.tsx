import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AlertDialogHeaderProps extends HTMLPasteProps<"header">, Pick<BoxProps, "element"> {
  children: string;
  headingID: string;
}

export const AlertDialogHeader = React.forwardRef<HTMLHeadElement, AlertDialogHeaderProps>(
  ({ children, element = "ALERT_DIALOG_HEADER", headingID, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        padding="space90"
        flexShrink={0}
        border="none"
        element={`${element}_WRAPPER`}
        ref={ref}
      >
        <Heading as="h3" element={element} marginBottom="space0" variant="heading30" id={headingID}>
          {children}
        </Heading>
      </Box>
    );
  },
);

AlertDialogHeader.displayName = "AlertDialogHeader";
