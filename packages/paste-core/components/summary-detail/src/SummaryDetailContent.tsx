import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { DisclosurePrimitiveContent } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

import { SummaryDetailContext } from "./SummaryDetailContext";

export interface SummaryDetailContentProps {
  element?: BoxProps["element"];
  children: React.ReactNode;
}
export const SummaryDetailContent = React.forwardRef<HTMLDivElement, SummaryDetailContentProps>(
  ({ children, element = "SUMMARY_DETAIL_CONTENT", ...props }, ref) => {
    const context = React.useContext(SummaryDetailContext);

    return (
      <DisclosurePrimitiveContent
        {...safelySpreadBoxProps(props)}
        as={Box}
        {...context}
        element={element}
        ref={ref}
        paddingTop="space60"
      >
        {children}
      </DisclosurePrimitiveContent>
    );
  },
);
SummaryDetailContent.displayName = "SummaryDetailContent";
