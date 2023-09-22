import { Box, type BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ChevronDoubleLeftIcon } from "@twilio-paste/icons/esm/ChevronDoubleLeftIcon";
import { ChevronDoubleRightIcon } from "@twilio-paste/icons/esm/ChevronDoubleRightIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { SidebarContext } from "../SidebarContext";

export interface SidebarCollapseButtonProps extends HTMLPasteProps<"button"> {
  i18nCollapseLabel: string;
  i18nExpandLabel: string;
  element?: BoxProps["element"];
  onClick?: () => void;
}

export const SidebarCollapseButton = React.forwardRef<HTMLButtonElement, SidebarCollapseButtonProps>(
  ({ i18nExpandLabel, i18nCollapseLabel, element = "SIDEBAR_COLLAPSE_BUTTON", ...props }, ref) => {
    const { collapsed, sidebarId } = React.useContext(SidebarContext);

    return (
      <Box display="flex" justifyContent="flex-end">
        <Button
          ref={ref}
          size="icon"
          variant="inverse"
          element={element}
          {...props}
          tabIndex={0}
          aria-expanded={!collapsed}
          aria-controls={sidebarId}
        >
          {collapsed ? (
            <>
              <ChevronDoubleRightIcon size="sizeIcon20" decorative element={`${element}_EXPAND`} />
              <ScreenReaderOnly>{i18nExpandLabel}</ScreenReaderOnly>
            </>
          ) : (
            <>
              <ChevronDoubleLeftIcon size="sizeIcon20" decorative element={`${element}_COLLAPSE`} />
              <ScreenReaderOnly>{i18nCollapseLabel}</ScreenReaderOnly>
            </>
          )}
        </Button>
      </Box>
    );
  },
);

SidebarCollapseButton.displayName = "SidebarCollapseButton";
