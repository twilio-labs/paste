import { MenuSeparator } from "@twilio-paste/menu";
import type { MenuSeparatorProps } from "@twilio-paste/menu";
import * as React from "react";

export type AccountSwitcherSeparatorProps = MenuSeparatorProps;

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
