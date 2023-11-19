import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { StatusObject } from "./constants";
import type { StatusBadgeVariants } from "./types";

type StatusMenuItemChildVariant = StatusBadgeVariants;

export interface StatusMenuItemChildProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "MENU_ITEM_STATUS"
   * @type {BoxProps["element"]}
   * @memberof StatusMenuItemChildProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the display style of the Status Menu Item
   *
   * @type {StatusMenuItemChildVariant}
   * @memberof StatusMenuItemChildProps
   */
  variant: StatusMenuItemChildVariant;
}

const StatusMenuItemChild = React.forwardRef<HTMLDivElement, StatusMenuItemChildProps>(
  ({ children, variant, element = "MENU_ITEM_STATUS", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        display="flex"
        flexDirection="row"
        columnGap="space20"
        alignItems="center"
        variant={variant}
        ref={ref}
      >
        {StatusObject[variant].icon}
        {children}
      </Box>
    );
  },
);

StatusMenuItemChild.displayName = "StatusMenuItemChild";

export { StatusMenuItemChild };
