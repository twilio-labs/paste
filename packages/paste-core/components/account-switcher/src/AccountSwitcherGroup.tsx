import * as React from 'react';
import { MenuGroup } from '@twilio-paste/menu';
import type { MenuGroupProps } from '@twilio-paste/menu';

export type AccountSwitcherGroupProps = MenuGroupProps;

const AccountSwitcherGroup = React.forwardRef<HTMLDivElement, AccountSwitcherGroupProps>(
  ({ children, element = 'ACCOUNT_SWITCHER_GROUP', label, ...props }, ref) => {
    return (
      <MenuGroup label={label} element={element} {...props} ref={ref}>
        {children}
      </MenuGroup>
    );
  },
);

AccountSwitcherGroup.displayName = 'AccountSwitcherGroup';
export { AccountSwitcherGroup };
