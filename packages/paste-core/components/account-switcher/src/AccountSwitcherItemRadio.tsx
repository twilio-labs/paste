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
