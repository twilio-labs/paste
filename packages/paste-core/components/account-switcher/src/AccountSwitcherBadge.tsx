import type { BoxProps } from "@twilio-paste/box";
import { MenuBadge } from "@twilio-paste/menu";
import type { MenuBadgeProps } from "@twilio-paste/menu";
import * as React from "react";

export interface AccountSwitcherBadgeProps extends Omit<MenuBadgeProps, "variant"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ACCOUNT_SWITCHER_BADGE'
   * @type {BoxProps['element']}
   * @memberof AccountSwitcherBadgeProps
   */
  element?: BoxProps["element"];
}

const AccountSwitcherBadge = React.forwardRef<HTMLButtonElement, AccountSwitcherBadgeProps>(
  ({ children, element = "ACCOUNT_SWITCHER_BADGE", ...props }, ref) => {
    return (
      <MenuBadge element={element} {...props} variant="default" ref={ref}>
        {children}
      </MenuBadge>
    );
  },
);

AccountSwitcherBadge.displayName = "AccountSwitcherBadge";
export { AccountSwitcherBadge };
