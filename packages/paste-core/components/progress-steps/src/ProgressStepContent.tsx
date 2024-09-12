import { Box, type BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import React from "react";

export interface ProgressStepContentProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PROGRESS_STEP_SEPARATOR'
   * @type {BoxProps['element']}
   * @memberof ProgressStepContentProps
   */
  element?: BoxProps["element"];
}

export const ProgressStepContent = React.forwardRef<HTMLDivElement, ProgressStepContentProps>(
  ({ element = "PROGRESS_STEP_CONTENT", ...props }, ref) => {
    return (
      <Box element={element} color="colorText" ref={ref} paddingY="space40">
        {props.children}
      </Box>
    );
  },
);
ProgressStepContent.displayName = "ProgressStepContent";
