import { MenuItem } from "@twilio-paste/menu";
import type { MenuItemProps } from "@twilio-paste/menu";
import * as React from "react";

export type StatusMenuItemProps = MenuItemProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "STATUS_MENU_ITEM"
   * @type {MenuItemProps["element"]}
   */
  element?: MenuItemProps["element"];
};

const StatusMenuItem = React.forwardRef<HTMLDivElement, StatusMenuItemProps>((props, ref) => {
  return <MenuItem element="STATUS_MENU_ITEM" {...props} ref={ref} />;
});

StatusMenuItem.displayName = "StatusMenuItem";
export { StatusMenuItem };
