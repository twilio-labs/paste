import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import type { SidePanelFooterProps } from "./types";

const SidePanelFooter = React.forwardRef<HTMLDivElement, SidePanelFooterProps>(
  ({ element = "SIDE_PANEL_FOOTER", children, ...props }, ref) => {
    return (
      <Box
        width="100%"
        paddingX="space70"
        paddingY="space50"
        boxShadow="shadow"
        marginBottom="spaceNegative70"
        zIndex="zIndex20"
        display="flex"
        columnGap="space40"
        alignItems="flex-start"
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      >
        {children}
      </Box>
    );
  },
);

SidePanelFooter.displayName = "SidePanelFooter";

export { SidePanelFooter };
