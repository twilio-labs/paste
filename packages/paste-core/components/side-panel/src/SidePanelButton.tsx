import { Button } from "@twilio-paste/button";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";
import type { SidePanelButtonProps } from "./types";

const SidePanelButton = React.forwardRef<HTMLButtonElement, SidePanelButtonProps>(
  ({ children, element = "SIDE_PANEL_BUTTON", ...sidePanelButtonProps }, ref) => {
    const { i18nCloseSidePanelTitle, i18nOpenSidePanelTitle, isOpen, setIsOpen, sidePanelId } =
      React.useContext(SidePanelContext);

    return (
      <Button
        element={element}
        aria-label={isOpen ? i18nCloseSidePanelTitle : i18nOpenSidePanelTitle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={sidePanelId}
        {...sidePanelButtonProps}
        ref={ref}
      >
        {children}
      </Button>
    );
  },
);

SidePanelButton.displayName = "SidePanelButton";
export { SidePanelButton };
