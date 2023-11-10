import { Menu } from "@twilio-paste/menu";
import type { MenuProps } from "@twilio-paste/menu";
import * as React from "react";

export type StatusMenuProps = MenuProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "STATUS_MENU"
   * @type {MenuProps["element"]}
   */
  element?: MenuProps["element"];
};

const StatusMenu = React.forwardRef<HTMLDivElement, StatusMenuProps>((props, ref) => {
  return <Menu element="STATUS_MENU" {...props} ref={ref} />;
});

StatusMenu.displayName = "StatusMenu";
export { StatusMenu };
