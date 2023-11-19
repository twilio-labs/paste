import type { BoxProps } from "@twilio-paste/box";
import { MenuGroup } from "@twilio-paste/menu";
import type { MenuGroupProps } from "@twilio-paste/menu";
import * as React from "react";

export interface AccountSwitcherGroupProps extends MenuGroupProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ACCOUNT_SWITCHER_GROUP'
   * @type {BoxProps['element']}
   * @memberof AccountSwitcherGroupProps
   */
  element?: BoxProps["element"];
}

const AccountSwitcherGroup = React.forwardRef<HTMLDivElement, AccountSwitcherGroupProps>(
  ({ children, element = "ACCOUNT_SWITCHER_GROUP", label, ...props }, ref) => {
    return (
      <MenuGroup label={label} element={element} {...props} ref={ref}>
        {children}
      </MenuGroup>
    );
  },
);

AccountSwitcherGroup.displayName = "AccountSwitcherGroup";
export { AccountSwitcherGroup };
