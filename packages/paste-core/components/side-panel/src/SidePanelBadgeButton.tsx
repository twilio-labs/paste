import { Badge } from "@twilio-paste/badge";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";
import type { ButtonBadgeProps, SidePanelBadgeButtonProps } from "./types";

const ButtonBadge = React.forwardRef<HTMLButtonElement, ButtonBadgeProps>(function ButtonBadge(
  { children, ...props },
  ref,
) {
  return (
    <Badge {...props} as="button" ref={ref}>
      {children}
    </Badge>
  );
});

ButtonBadge.displayName = "ButtonBadge";

const SidePanelBadgeButton = React.forwardRef<HTMLButtonElement, SidePanelBadgeButtonProps>(
  ({ children, element = "SIDE_PANEL_BADGE", ...sidePanelButtonProps }, ref) => {
    const { i18nCloseSidePanelTitle, i18nOpenSidePanelTitle, isOpen, setIsOpen, sidePanelId } =
      React.useContext(SidePanelContext);

    return (
      <ButtonBadge
        {...sidePanelButtonProps}
        as="button"
        element={element}
        aria-label={isOpen ? i18nCloseSidePanelTitle : i18nOpenSidePanelTitle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={sidePanelId}
        ref={ref}
      >
        {children}
      </ButtonBadge>
    );
  },
);

SidePanelBadgeButton.displayName = "SidePanelBadgeButton";
export { SidePanelBadgeButton };
