import type { BoxProps } from "@twilio-paste/box";
import { MenuItem } from "@twilio-paste/menu";
import type { MenuItemProps } from "@twilio-paste/menu";
import * as React from "react";

export interface AccountSwitcherItemProps extends MenuItemProps {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ACCOUNT_SWITCHER_ITEM'
   * @type {BoxProps['element']}
   * @memberof AccountSwitcherItemProps
   */
  element?: BoxProps["element"];
}

const AccountSwitcherItem = React.forwardRef<HTMLDivElement, AccountSwitcherItemProps>(
  ({ children, element = "ACCOUNT_SWITCHER_ITEM", ...props }, ref) => {
    return (
      <MenuItem element={element} {...props} ref={ref}>
        {children}
      </MenuItem>
    );
  },
);

AccountSwitcherItem.displayName = "AccountSwitcherItem";
export { AccountSwitcherItem };
