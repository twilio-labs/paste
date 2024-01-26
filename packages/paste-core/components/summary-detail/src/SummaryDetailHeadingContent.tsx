import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import { SummaryDetailContext } from "./SummaryDetailContext";

export interface SummaryDetailHeadingContentProps {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'SUMMARY_DETAIL_HEADING_CONTENT'
   * @type {BoxProps['element']}
   * @memberof SummaryDetailHeadingContentProps
   */
  element?: BoxProps["element"];
}

export const SummaryDetailHeadingContent = React.forwardRef<HTMLDivElement, SummaryDetailHeadingContentProps>(
  ({ children, element = "SUMMARY_DETAIL_HEADING_CONTENT", ...props }, ref) => {
    const context = React.useContext(SummaryDetailContext);

    return (
      <Box ref={ref} {...safelySpreadBoxProps(props)} width="100%" element={element} id={context?.headerId}>
        {children}
      </Box>
    );
  },
);
SummaryDetailHeadingContent.displayName = "SummaryDetailHeadingContent";
