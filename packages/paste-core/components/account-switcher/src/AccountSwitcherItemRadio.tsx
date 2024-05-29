import type { BoxProps } from "@twilio-paste/box";
import { MenuItemRadio } from "@twilio-paste/menu";
import type { MenuItemRadioProps } from "@twilio-paste/menu";
import * as React from "react";

export interface AccountSwitcherItemRadioProps extends MenuItemRadioProps {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ACCOUNT_SWITCHER_ITEM_RADIO'
   * @type {BoxProps['element']}
   * @memberof AccountSwitcherItemRadioProps
   */
  element?: BoxProps["element"];
}

/**
 * A menu item that can perform a single selection of an item within a named group. Similar to a radio button group, only one item can be selected at a time. Each item in the group should have a name and value and must be contained in a Group.
 *
 * @link [Account Switcher Item Radio](https://paste.twilio.design/components/account-switcher#account-switcher-itemradio)
 */
const AccountSwitcherItemRadio = React.forwardRef<HTMLDivElement, AccountSwitcherItemRadioProps>(
  ({ children, element = "ACCOUNT_SWITCHER_ITEM_RADIO", ...props }, ref) => {
    return (
      <MenuItemRadio element={element} {...props} ref={ref}>
        {children}
      </MenuItemRadio>
    );
  },
);

AccountSwitcherItemRadio.displayName = "AccountSwitcherItemRadio";
export { AccountSwitcherItemRadio };
