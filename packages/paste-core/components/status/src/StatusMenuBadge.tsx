import { MenuBadgeContent } from "@twilio-paste/menu";
import type { MenuBadgeProps } from "@twilio-paste/menu";
import * as React from "react";

import { StatusBadge } from "./StatusBadge";
import type { StatusBadgeProps } from "./StatusBadge";

export interface StatusMenuBadgeProps extends Omit<MenuBadgeProps, "variant"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "STATUS_MENU_BADGE"
   * @type {MenuBadgeProps["element"]}
   * @memberof StatusMenuBadgeProps
   */
  element?: MenuBadgeProps["element"];
  /**
   * Sets the display style of the Status Menu Badge
   *
   * @type {StatusBadgeProps["variant"]}
   * @memberof StatusMenuBadgeProps
   */
  variant: StatusBadgeProps["variant"];
}

const StatusMenuBadge = React.forwardRef<HTMLButtonElement, StatusMenuBadgeProps>(
  ({ children, variant, element = "STATUS_MENU_BADGE", ...props }, ref) => {
    return (
      <StatusBadge as="span" element={element} variant={variant}>
        <MenuBadgeContent {...props} element={element} ref={ref}>
          {children}
        </MenuBadgeContent>
      </StatusBadge>
    );
  },
);

StatusMenuBadge.displayName = "StatusMenuBadge";

export { StatusMenuBadge };
