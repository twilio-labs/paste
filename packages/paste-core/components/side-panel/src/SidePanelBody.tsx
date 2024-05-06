import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface SidePanelBodyProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_BODY"
   * @type {BoxProps['element']}
   * @memberof SidePanelBodyProps
   */
  element?: BoxProps["element"];
}

const SidePanelBody = React.forwardRef<HTMLDivElement, SidePanelBodyProps>(
  ({ element = "SIDE_PANEL_BODY", children, ...props }, ref) => {
    return (
      <Box
        width="100%"
        height="100%"
        paddingX="space40"
        paddingBottom="space40"
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

SidePanelBody.displayName = "SidePanelBody";

export { SidePanelBody };
