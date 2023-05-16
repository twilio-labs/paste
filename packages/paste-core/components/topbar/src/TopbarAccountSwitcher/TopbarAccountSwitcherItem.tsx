import * as React from 'react';
import {MenuItem} from '@twilio-paste/menu';
import type {MenuItemProps} from '@twilio-paste/menu';

export interface TopbarAccountSwitcherItemProps extends MenuItemProps {
  children: NonNullable<React.ReactNode>;
}

const TopbarAccountSwitcherItem = React.forwardRef<HTMLDivElement, TopbarAccountSwitcherItemProps>(
  ({children, element = 'TOPBAR_ACCOUNT_SWITCHER_ITEM', ...props}, ref) => {
    return (
      <MenuItem element={element} {...props} ref={ref}>
        {children}
      </MenuItem>
    );
  }
);

TopbarAccountSwitcherItem.displayName = 'TopbarAccountSwitcherItem';

export {TopbarAccountSwitcherItem};
