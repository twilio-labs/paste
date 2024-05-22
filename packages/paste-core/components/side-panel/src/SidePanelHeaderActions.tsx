import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { SidePanelHeaderActionsProps } from "./types";

const SidePanelHeaderActions = React.forwardRef<HTMLDivElement, SidePanelHeaderActionsProps>(
  ({ element = "SIDE_PANEL_HEADER_ACTIONS", children, ...props }, ref) => {
    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-end"
        columnGap="space20"
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
