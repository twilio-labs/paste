import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SideModalBodyProps extends HTMLPasteProps<"div"> {
  /**
   * Child components to render into the SideModalBody
   *
   * @type {React.ReactNode}
   * @memberof SideModalBodyProps
   */
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_MODAL_BODY"
   * @type {BoxProps["element"]}
   * @memberof SideModalBodyProps
   */
  element?: BoxProps["element"];
}

const SideModalBody = React.forwardRef<HTMLDivElement, SideModalBodyProps>(
  ({ children, element = "SIDE_MODAL_BODY", ...props }, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} element={element} ref={ref} overflowY="auto" padding="space90">
        {children}
      </Box>
    );
  },
);

SideModalBody.displayName = "SideModalBody";
export { SideModalBody };
