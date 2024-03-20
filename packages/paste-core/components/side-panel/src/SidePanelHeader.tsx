import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SidePanelHeaderProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_HEADER"
   * @type {BoxProps['element']}
   * @memberof SidePanelHeaderProps
   */
  element?: BoxProps["element"];
}

const SidePanelHeader = React.forwardRef<HTMLDivElement, SidePanelHeaderProps>(
  ({ element = "SIDE_PANEL_HEADER", children, ...props }, ref) => {
    return (
      <Box
        width="100%"
        padding="space70"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        borderBottomWidth="borderWidth10"
        display="flex"
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      >
        {children}
      </Box>
    );
  },
);

SidePanelHeader.displayName = "SidePanelHeader";

export { SidePanelHeader };
