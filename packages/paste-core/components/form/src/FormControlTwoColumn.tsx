import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface FormControlTwoColumnProps extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FORM_CONTROL_TWO_COLUMN'
   * @type {BoxProps['element']}
   * @memberof FormControlTwoColumnProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
}

export const FormControlTwoColumn = React.forwardRef<HTMLLegendElement, FormControlTwoColumnProps>(
  ({ children, element = "FORM_CONTROL_TWO_COLUMN", ...props }, ref) => (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      columnGap="space50"
      ref={ref}
      element={element}
      {...safelySpreadBoxProps(props)}
    >
      {children}
    </Box>
  ),
);

FormControlTwoColumn.displayName = "FormControlTwoColumn";
