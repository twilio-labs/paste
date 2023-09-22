import type { BoxProps } from "@twilio-paste/box";
import { MenuSeparator } from "@twilio-paste/menu";
import type { MenuSeparatorProps } from "@twilio-paste/menu";
import * as React from "react";

export interface AccountSwitcherSeparatorProps extends MenuSeparatorProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ACCOUNT_SWITCHER_SEPARATOR'
   * @type {BoxProps['element']}
   * @memberof AccountSwitcherSeparatorProps
   */
  element?: BoxProps["element"];
}

const AccountSwitcherSeparator = React.forwardRef<HTMLHRElement, AccountSwitcherSeparatorProps>(
  ({ children, element = "ACCOUNT_SWITCHER_SEPARATOR", ...props }, ref) => {
    return (
      <MenuSeparator element={element} {...props} ref={ref}>
        {children}
      </MenuSeparator>
    );
  },
);

AccountSwitcherSeparator.displayName = "AccountSwitcherSeparator";

export { AccountSwitcherSeparator };
