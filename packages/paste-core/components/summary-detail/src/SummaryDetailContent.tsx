import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { DisclosurePrimitiveContent } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

import { SummaryDetailContext } from "./SummaryDetailContext";

export interface SummaryDetailContentProps {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'SUMMARY_DETAIL_CONTENT'
   * @type {BoxProps['element']}
   * @memberof SummaryDetailContentProps
   */
  element?: BoxProps["element"];
}

export const SummaryDetailContent = React.forwardRef<HTMLDivElement, SummaryDetailContentProps>(
  ({ children, element = "SUMMARY_DETAIL_CONTENT", ...props }, ref) => {
    const context = React.useContext(SummaryDetailContext);

    return (
      <DisclosurePrimitiveContent {...safelySpreadBoxProps(props)} as={Box} {...context} element={element} ref={ref}>
        {children}
      </DisclosurePrimitiveContent>
    );
  },
);
SummaryDetailContent.displayName = "SummaryDetailContent";
