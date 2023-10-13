import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface FormActionsProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FORM_ACTIONS'
   * @type {BoxProps['element']}
   * @memberof FormActionsProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
}

export const FormActions = React.forwardRef<HTMLDivElement, FormActionsProps>(
  ({ children, element = "FORM_ACTIONS", ...props }, ref) => (
    <Box
      ref={ref}
      element={element}
      {...safelySpreadBoxProps(props)}
      display="flex"
      flexDirection="row"
      columnGap="space40"
      marginTop="space60"
    >
      {children}
    </Box>
  ),
);

FormActions.displayName = "FormActions";
