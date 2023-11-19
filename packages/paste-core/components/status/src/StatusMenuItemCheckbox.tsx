import { MenuItemCheckbox } from "@twilio-paste/menu";
import type { MenuItemCheckboxProps } from "@twilio-paste/menu";
import * as React from "react";

export type StatusMenuItemCheckboxProps = MenuItemCheckboxProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "STATUS_MENU_ITEM_CHECKBOX"
   * @type {MenuItemCheckboxProps["element"]}
   */
  element?: MenuItemCheckboxProps["element"];
};

const StatusMenuItemCheckbox = React.forwardRef<HTMLDivElement, StatusMenuItemCheckboxProps>((props, ref) => {
  return <MenuItemCheckbox element="STATUS_MENU_ITEM_CHECKBOX" {...props} ref={ref} />;
});

StatusMenuItemCheckbox.displayName = "StatusMenuItemCheckbox";
export { StatusMenuItemCheckbox };
