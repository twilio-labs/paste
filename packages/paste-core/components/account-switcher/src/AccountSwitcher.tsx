import type { BoxProps } from "@twilio-paste/box";
import { Menu } from "@twilio-paste/menu";
import type { MenuProps } from "@twilio-paste/menu";
import * as React from "react";

export interface AccountSwitcherProps extends MenuProps {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ACCOUNT_SWITCHER'
   * @type {BoxProps['element']}
   * @memberof AccountSwitcherProps
   */
  element?: BoxProps["element"];
}

const AccountSwitcher = React.forwardRef<HTMLDivElement, AccountSwitcherProps>(
  ({ children, element = "ACCOUNT_SWITCHER", ...props }, ref) => {
    return (
      <Menu element={element} {...props} ref={ref}>
        {children}
      </Menu>
    );
  },
);

AccountSwitcher.displayName = "AccountSwitcher";
export { AccountSwitcher };
