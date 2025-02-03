import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { SideModalContext } from "./SideModalContext";

export interface SideModalHeaderProps extends HTMLPasteProps<"div"> {
  /**
   * Child components to render into the SideModalHeader
   *
   * @type {React.ReactNode}
   * @memberof SideModalHeaderProps
   */
  children?: React.ReactNode;
  /**
   * The dismiss button text label
   *
   * @default "close"
   * @type {string}
   * @memberof SideModalHeaderProps
   */
  i18nDismissLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_MODAL_HEADER"
   * @type {BoxProps["element"]}
   * @memberof SideModalHeaderProps
   */
  element?: BoxProps["element"];
}

const SideModalHeader = React.forwardRef<HTMLDivElement, SideModalHeaderProps>(
  ({ children, element = "SIDE_MODAL_HEADER", i18nDismissLabel = "close", ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Property 'hide' does not exist on type 'Partial<PopoverState>', but reakit docs suggest using it (https://reakit.io/docs/popover/#initial-focus)
    const { hide } = React.useContext(SideModalContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        paddingRight="space90"
        paddingLeft="space90"
        paddingTop="space90"
        element={element}
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
      >
        <Box display="flex" flexGrow={1} marginRight="space70">
          {children}
        </Box>
        <Button element={`${element}_CLOSE_BUTTON`} variant="secondary_icon" size="reset" onClick={hide}>
          <CloseIcon element={`${element}_CLOSE_ICON`} decorative size="sizeIcon50" />
          <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
        </Button>
      </Box>
    );
  },
);

SideModalHeader.displayName = "SideModalHeader";

export { SideModalHeader };
