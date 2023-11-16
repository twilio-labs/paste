import { MenuItemRadio } from "@twilio-paste/menu";
import type { MenuItemRadioProps } from "@twilio-paste/menu";
import * as React from "react";

export type StatusMenuItemRadioProps = MenuItemRadioProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "STATUS_MENU_ITEM_RADIO"
   * @type {MenuItemRadioProps["element"]}
   */
  element?: MenuItemRadioProps["element"];
};

const StatusMenuItemRadio = React.forwardRef<HTMLDivElement, StatusMenuItemRadioProps>((props, ref) => {
  return <MenuItemRadio element="STATUS_MENU_ITEM_RADIO" {...props} ref={ref} />;
});

StatusMenuItemRadio.displayName = "StatusMenuItemRadio";
export { StatusMenuItemRadio };
