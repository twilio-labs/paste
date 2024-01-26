import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

export interface SummaryDetailHeadingProps {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'SUMMARY_DETAIL_HEADING'
   * @type {BoxProps['element']}
   * @memberof SummaryDetailHeadingProps
   */
  element?: BoxProps["element"];
}

export const SummaryDetailHeading = React.forwardRef<HTMLDivElement, SummaryDetailHeadingProps>(
  ({ children, element = "SUMMARY_DETAIL_HEADING", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        display="flex"
        alignItems="center"
        columnGap="space40"
        element={element}
      >
        {children}
      </Box>
    );
  },
);
SummaryDetailHeading.displayName = "SummaryDetailHeading";
