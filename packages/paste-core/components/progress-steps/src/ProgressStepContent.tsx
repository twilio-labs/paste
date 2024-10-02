import { Box, type BoxProps } from "@twilio-paste/box";
import type { Padding } from "@twilio-paste/style-props";
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
   * Responsive prop of Space tokens for the CSS `padding-top` and `padding-bottom` properties
   *
   * @default 'space40'
   * @type {Padding}
   * @memberof ProgressStepContentProps
   */
  paddingY?: Padding;
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
