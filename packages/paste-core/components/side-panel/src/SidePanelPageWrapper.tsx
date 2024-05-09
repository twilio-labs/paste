import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SidePanelPageWrapperProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_PAGE_WRAPPER"
   * @type {BoxProps['element']}
   * @memberof SidePanelPageWrapperProps
   */
  element?: BoxProps["element"];
}

const SidePanelPageWrapper = React.forwardRef<HTMLDivElement, SidePanelPageWrapperProps>(
  ({ element = "SIDE_PANEL_PAGE_WRAPPER", children, ...props }, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} position="relative" ref={ref} element={element}>
        {children}
      </Box>
    );
  },
);

SidePanelPageWrapper.displayName = "SidePanelPageWrapper";

export { SidePanelPageWrapper };
