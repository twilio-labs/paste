import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { DisclosurePrimitive } from "@twilio-paste/disclosure-primitive";
import * as React from "react";
import { SummaryDetailContext } from "./SummaryDetailContext";
import { SummaryToggleButton } from "./SummaryToggleButton";

export interface SummaryDetailHeadingProps {
  element?: BoxProps["element"];
  children: React.ReactNode;
}
export const SummaryDetailHeading = React.forwardRef<HTMLDivElement, SummaryDetailHeadingProps>(
  ({ children, element = "SUMMARY_DETAIL_HEADING", ...props }, ref) => {
    const context = React.useContext(SummaryDetailContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        display="flex"
        alignItems="center"
        columnGap="space40"
        element={element}
      >
        <DisclosurePrimitive as={SummaryToggleButton} {...context}>
          Toggle summary detail
        </DisclosurePrimitive>
        <Box width="100%" element={`${element}_CONTENT`}>
          {children}
        </Box>
      </Box>
    );
  },
);
SummaryDetailHeading.displayName = "SummaryDetailHeading";
