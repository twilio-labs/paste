import * as React from 'react';
import { MenuBadge } from '@twilio-paste/menu';
import type { MenuBadgeProps } from '@twilio-paste/menu';

export interface AccountSwitcherBadgeProps extends Omit<MenuBadgeProps, 'variant'> {
  children: NonNullable<React.ReactNode>;
}

const AccountSwitcherBadge = React.forwardRef<HTMLButtonElement, AccountSwitcherBadgeProps>(
  ({ children, element = 'ACCOUNT_SWITCHER_BADGE', ...props }, ref) => {
    return (
      <MenuBadge element={element} {...props} variant="default" ref={ref}>
        {children}
      </MenuBadge>
    );
  },
);

AccountSwitcherBadge.displayName = 'AccountSwitcherBadge';
export { AccountSwitcherBadge };
