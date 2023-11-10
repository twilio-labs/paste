import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import * as React from "react";

export interface SidebarHeaderIconButtonProps extends Omit<ButtonProps, "size" | "variant"> {
  children: NonNullable<React.ReactNode>;
  /**
   * HTML element to render the button as.
   *
   * @type {("a" | "button")}
   * @memberof SidebarHeaderIconButtonProps
   */
  as: "a" | "button";
  /**
   * Callback function to handle the button's click event.
   *
   * @type {ButtonProps["onClick"]}
   * @memberof SidebarHeaderIconButtonProps
   */
  onClick?: ButtonProps["onClick"];
  /**
   * The URL to navigate to if the button is rendered as an anchor element.
   *
   * @type {ButtonProps["href"]}
   * @memberof SidebarHeaderIconButtonProps
   */
  href?: ButtonProps["href"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDEBAR_HEADER_ICON_BUTTON"
   * @type {BoxProps["element"]}
   * @memberof SidebarHeaderIconButtonProps
   */
  element?: BoxProps["element"];
}

export const SidebarHeaderIconButton = React.forwardRef<HTMLButtonElement, SidebarHeaderIconButtonProps>(
  ({ element = "SIDEBAR_HEADER_ICON_BUTTON", ...props }, ref) => {
    return <Button {...props} size="icon" variant="inverse" element={element} ref={ref} />;
  },
);

SidebarHeaderIconButton.displayName = "SidebarHeaderIconButton";
