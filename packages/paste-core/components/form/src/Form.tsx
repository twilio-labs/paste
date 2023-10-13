import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface FormProps extends HTMLPasteProps<"form"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'FORM'
   * @type {BoxProps['element']}
   * @memberof FormProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
  /**
   * The maximum width of the Form.
   *
   * @type {BoxStyleProps['maxWidth']}
   * @memberof FormProps
   */
  maxWidth?: BoxStyleProps["maxWidth"];
}

export const Form = React.forwardRef<HTMLDivElement, FormProps>(
  ({ element = "FORM", maxWidth, children, ...props }, ref) => (
    <Box
      as="form"
      ref={ref}
      element={element}
      maxWidth={maxWidth}
      display="flex"
      flexDirection="column"
      rowGap="space80"
      {...safelySpreadBoxProps(props)}
    >
      {children}
    </Box>
  ),
);

Form.displayName = "Form";
