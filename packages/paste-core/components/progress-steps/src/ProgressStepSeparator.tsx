import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

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

export const ProgressStepSeparator = React.forwardRef<HTMLDivElement, ProgressStepSeparatorProps>(() => {
  // returning null since we are relying on the CSS to render the separator
  return null;
});
ProgressStepSeparator.displayName = "ProgressStepSeparator";
