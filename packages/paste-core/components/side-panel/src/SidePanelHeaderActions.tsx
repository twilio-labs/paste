import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SidePanelHeaderActionsProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_HEADER_ACTIONS"
   * @type {BoxProps['element']}
   * @memberof SidePanelHeaderActionsProps
   */
  element?: BoxProps["element"];
}

const SidePanelHeaderActions = React.forwardRef<HTMLDivElement, SidePanelHeaderActionsProps>(
  ({ element = "SIDE_PANEL_HEADER_ACTIONS", children, ...props }, ref) => {
    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-end"
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      >
        {children}
      </Box>
    );
  },
);

SidePanelHeaderActions.displayName = "SidePanelHeaderActions";

export { SidePanelHeaderActions };
