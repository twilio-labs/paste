import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface DescriptionListTermProps extends HTMLPasteProps<"dt"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DESCRIPTION_LIST_TERM'
   * @type {BoxProps['element']}
   * @memberof DescriptionListTermProps
   */
  element?: BoxProps["element"];
}

const DescriptionListTerm = React.forwardRef<HTMLElement, DescriptionListTermProps>(
  ({ element = "DESCRIPTION_LIST_TERM", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="dt"
        ref={ref}
        element={element}
        fontWeight="fontWeightSemibold"
        color="colorText"
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        margin="space0"
      >
        {children}
      </Box>
    );
  },
);

DescriptionListTerm.displayName = "DescriptionListTerm";

export { DescriptionListTerm };
