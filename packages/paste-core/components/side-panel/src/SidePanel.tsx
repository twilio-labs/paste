import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from 'react';

export interface SidePanelProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default '{constantCase component-name}'
   * @type {BoxProps['element']}
   * @memberof SidePanelProps
   */
  element?: BoxProps['element'];
}

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(({element = "SIDE_PANEL", ...props}, ref) => {
  return (
    <Box ref={ref}>
      {props.children}
    </Box>
  );
});

SidePanel.displayName = 'SidePanel';

export {SidePanel};
