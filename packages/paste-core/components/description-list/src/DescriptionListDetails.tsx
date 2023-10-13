import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface DescriptionListDetailsProps extends HTMLPasteProps<"dd"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DESCRIPTION_LIST_DETAILS'
   * @type {BoxProps['element']}
   * @memberof DescriptionListDetailsProps
   */
  element?: BoxProps["element"];
}

const DescriptionListDetails = React.forwardRef<HTMLElement, DescriptionListDetailsProps>(
  ({ element = "DESCRIPTION_LIST_DETAILS", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="dd"
        ref={ref}
        element={element}
        margin="space0"
        color="colorText"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight30"
        fontSize="fontSize30"
        overflowWrap="break-word"
      >
        {children}
      </Box>
    );
  },
);

DescriptionListDetails.displayName = "DescriptionListDetails";

export { DescriptionListDetails };
