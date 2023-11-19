import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { ProgressStepsContext } from "./ProgressStepsContext";

const VerticalStyles: BoxProps = {
  borderLeftWidth: "borderWidth20",
  borderLeftStyle: "solid",
  borderLeftColor: "colorBorderWeaker",
  borderRadius: "borderRadius0",
  minHeight: "32px",
  marginLeft: "space30",
};
const HorizontalStyles: BoxProps = {
  borderBottomWidth: "borderWidth20",
  borderBottomStyle: "solid",
  borderBottomColor: "colorBorderWeaker",
  borderRadius: "borderRadius20",
  minWidth: "32px",
};

export interface ProgressStepSeparatorProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'PROGRESS_STEP_SEPARATOR'
   * @type {BoxProps['element']}
   * @memberof ProgressStepSeparatorProps
   */
  element?: BoxProps["element"];
}

export const ProgressStepSeparator = React.forwardRef<HTMLDivElement, ProgressStepSeparatorProps>(
  ({ element = "PROGRESS_STEP_SEPARATOR", ...props }, ref) => {
    const { orientation } = React.useContext(ProgressStepsContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...(orientation === "horizontal" ? HorizontalStyles : VerticalStyles)}
        ref={ref}
        aria-hidden
        flexShrink={0}
        flexGrow={1}
        element={element}
      />
    );
  },
);
ProgressStepSeparator.displayName = "ProgressStepSeparator";
