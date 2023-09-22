import * as React from 'react';
import { MenuItem } from '@twilio-paste/menu';
import type { MenuItemProps } from '@twilio-paste/menu';

export interface AccountSwitcherItemProps extends MenuItemProps {
  children: NonNullable<React.ReactNode>;
}

const AccountSwitcherItem = React.forwardRef<HTMLDivElement, AccountSwitcherItemProps>(
  ({ children, element = 'ACCOUNT_SWITCHER_ITEM', ...props }, ref) => {
    return (
      <MenuItem element={element} {...props} ref={ref}>
        {children}
      </MenuItem>
    );
  },
);

AccountSwitcherItem.displayName = 'AccountSwitcherItem';
export { AccountSwitcherItem };
