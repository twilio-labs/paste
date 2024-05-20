import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";

type SidePanelCloseButtonProps = {
  onXClick: () => void;
  i18nCloseButtonTitle: string;
  sidePanelId: string;
  collapsed: boolean;
};

const SidePanelCloseButton: React.FC<React.PropsWithChildren<SidePanelCloseButtonProps>> = ({
  onXClick,
  i18nCloseButtonTitle,
  sidePanelId,
  collapsed,
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
        onXClick();
      }}
      ref={internalButtonRef}
      aria-controls={sidePanelId}
      aria-expanded={!collapsed}
    >
      <CloseIcon decorative={false} title={i18nCloseButtonTitle} size="sizeIcon50" />
    </Button>
  );
};
SidePanelCloseButton.displayName = "SidePanelCloseButton";

export interface SidePanelHeaderProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Function to call when the close button of the Side Panel is clicked
   * @memberof SidePanelHeaderProps
   */
  onXClick: () => void;
  /**
   * Accessible title for the close button for non-english languages
   * @type string
   * @memberof SidePanelHeaderProps
   */
  i18nCloseButtonTitle: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_HEADER"
   * @type {BoxProps['element']}
   * @memberof SidePanelHeaderProps
   */
  element?: BoxProps["element"];
}

const SidePanelHeader = React.forwardRef<HTMLDivElement, SidePanelHeaderProps>(
  ({ element = "SIDE_PANEL_HEADER", children, onXClick, i18nCloseButtonTitle, ...props }, ref) => {
    const { sidePanelId, collapsed } = React.useContext(SidePanelContext);
    return (
      <Box
        width="100%"
        padding="space70"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        borderBottomWidth="borderWidth10"
        display="flex"
        columnGap="space30"
        alignItems="center"
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
      >
        {children}
        <SidePanelCloseButton
          onXClick={onXClick}
          i18nCloseButtonTitle={i18nCloseButtonTitle}
          sidePanelId={sidePanelId}
          collapsed={collapsed}
        />
      </Box>
    );
  },
);

SidePanelHeader.displayName = "SidePanelHeader";

export { SidePanelHeader };
