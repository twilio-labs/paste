import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";
import type { SidePanelHeaderProps } from "./types";

type SidePanelCloseButtonProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  i18nCloseSidePanelTitle: string;
  sidePanelId: string;
  isOpen: boolean;
  element: string;
};

const SidePanelCloseButton: React.FC<React.PropsWithChildren<SidePanelCloseButtonProps>> = ({
  setIsOpen,
  i18nCloseSidePanelTitle,
  sidePanelId,
  isOpen,
  element,
}) => {
  const internalButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    internalButtonRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <Button
      variant="secondary_icon"
      size="reset"
      onClick={() => {
        setIsOpen(false);
      }}
      ref={internalButtonRef}
      aria-controls={sidePanelId}
      aria-expanded={isOpen}
      aria-label={i18nCloseSidePanelTitle}
      element={element}
    >
      <CloseIcon decorative={false} title={i18nCloseSidePanelTitle} size="sizeIcon50" />
    </Button>
  );
};
SidePanelCloseButton.displayName = "SidePanelCloseButton";

const SidePanelHeader = React.forwardRef<HTMLDivElement, SidePanelHeaderProps>(
  ({ element = "SIDE_PANEL_HEADER", children, ...props }, ref) => {
    const { sidePanelId, isOpen, setIsOpen, i18nCloseSidePanelTitle } = React.useContext(SidePanelContext);
    return (
      <Box
        width="100%"
        padding="space70"
        display="flex"
        columnGap="space30"
        alignItems="center"
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      >
        {children}
        <SidePanelCloseButton
          setIsOpen={setIsOpen}
          i18nCloseSidePanelTitle={i18nCloseSidePanelTitle}
          sidePanelId={sidePanelId}
          isOpen={isOpen}
          element={`${element}_CLOSE_BUTTON`}
        />
      </Box>
    );
  },
);

SidePanelHeader.displayName = "SidePanelHeader";

export { SidePanelHeader };
