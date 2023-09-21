import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface FormControlProps extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FORM_CONTROL'
   * @type {BoxProps['element']}
   * @memberof FormControlProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
}

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, element = "FORM_CONTROL", ...props }, ref) => (
    <Box ref={ref} flexGrow={1} element={element} {...safelySpreadBoxProps(props)}>
      {children}
    </Box>
  ),
);

FormControl.displayName = "FormControl";
