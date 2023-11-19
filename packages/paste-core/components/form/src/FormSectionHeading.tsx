import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import type { HeadingProps } from "@twilio-paste/heading";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface FormSectionHeadingProps extends HTMLPasteProps<"legend"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FORM_SECTION_HEADING'
   * @type {BoxProps['element']}
   * @memberof FormSectionHeadingProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
  /**
   * The style variant you want to render the heading with. This maps directly to the [heading variant](/components/heading).
   *
   * @default 'heading40'
   * @type {HeadingProps['variant']}
   * @memberof FormSectionHeadingProps
   */
  variant?: HeadingProps["variant"];
}

export const FormSectionHeading = React.forwardRef<HTMLLegendElement, FormSectionHeadingProps>(
  ({ children, element = "FORM_SECTION_HEADING", variant = "heading40", ...props }, ref) => (
    <Box as="legend" ref={ref} {...safelySpreadBoxProps(props)} element={element} padding="space0">
      <Heading as="span" variant={variant}>
        {children}
      </Heading>
    </Box>
  ),
);

FormSectionHeading.displayName = "FormSectionHeading";
