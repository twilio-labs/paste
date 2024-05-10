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

/**
 * Used to display the name of the current account selected or being viewed, and contains the menu trigger. The text inside the badge should update when a new account is selected.
 *
 * @link [Account Switcher Badge](https://paste.twilio.design/components/account-switcher#account-switcher-badge)
 */
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
