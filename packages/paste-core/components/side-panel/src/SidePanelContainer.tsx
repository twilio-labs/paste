import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";
import type { SidePanelContainerProps } from "./types";

const SidePanelContainer = React.forwardRef<HTMLDivElement, SidePanelContainerProps>(
  (
    {
      element = "SIDE_PANEL_CONTAINER",
      children,
      sidePanelId,
      isOpen,
      setIsOpen,
      i18nCloseSidePanelTitle = "close the side panel",
      i18nOpenSidePanelTitle = "open the side panel",
      ...props
    },
    ref,
  ) => {
    if (sidePanelId === undefined) sidePanelId = useUID();
    return (
      <SidePanelContext.Provider
        value={{ sidePanelId, isOpen, setIsOpen, i18nCloseSidePanelTitle, i18nOpenSidePanelTitle }}
      >
        <Box {...safelySpreadBoxProps(props)} position="relative" ref={ref} element={element}>
          {children}
        </Box>
      </SidePanelContext.Provider>
    );
  },
);

SidePanelContainer.displayName = "SidePanelContainer";

export { SidePanelContainer };
