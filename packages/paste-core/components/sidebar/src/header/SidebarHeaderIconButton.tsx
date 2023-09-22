import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import * as React from "react";

export interface SidebarHeaderIconButtonProps extends Omit<ButtonProps, "size" | "variant"> {
  children: NonNullable<React.ReactNode>;
  as: "a" | "button";
  onClick?: ButtonProps["onClick"];
  href?: ButtonProps["href"];
  element?: BoxProps["element"];
}

export const SidebarHeaderIconButton = React.forwardRef<HTMLButtonElement, SidebarHeaderIconButtonProps>(
  ({ element = "SIDEBAR_HEADER_ICON_BUTTON", ...props }, ref) => {
    return <Button {...props} size="icon" variant="inverse" element={element} ref={ref} />;
  },
);

SidebarHeaderIconButton.displayName = "SidebarHeaderIconButton";
