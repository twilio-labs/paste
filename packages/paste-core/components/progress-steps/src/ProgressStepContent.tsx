import { Box, type BoxProps } from "@twilio-paste/box";
import type { Space } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";
import React from "react";

export interface ProgressStepContentProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PROGRESS_STEP_CONTENT'
   * @type {BoxProps['element']}
   * @memberof ProgressStepContentProps
   */
  element?: BoxProps["element"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PROGRESS_STEP_CONTENT'
   * @type {BoxProps['element']}
   * @memberof ProgressStepContentProps
   */
  paddingY?: Space;
}

export const ProgressStepContent = React.forwardRef<HTMLDivElement, ProgressStepContentProps>(
  ({ element = "PROGRESS_STEP_CONTENT", paddingY = "space40", ...props }, ref) => {
    return (
      <Box element={element} color="colorText" ref={ref} paddingY={paddingY}>
        {props.children}
      </Box>
    );
  },
);
ProgressStepContent.displayName = "ProgressStepContent";
