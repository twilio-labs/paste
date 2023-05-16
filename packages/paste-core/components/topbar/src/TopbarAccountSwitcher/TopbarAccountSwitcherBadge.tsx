import * as React from 'react';
import {MenuBadge} from '@twilio-paste/menu';
import type {MenuBadgeProps} from '@twilio-paste/menu';

export interface TopbarAccountSwitcherBadgeProps extends Omit<MenuBadgeProps, 'variant'> {
  children: NonNullable<React.ReactNode>;
}

const TopbarAccountSwitcherBadge = React.forwardRef<HTMLButtonElement, TopbarAccountSwitcherBadgeProps>(
  ({children, element = 'TOPBAR_ACCOUNT_SWITCHER_BADGE', ...props}, ref) => {
    return (
      <MenuBadge element={element} {...props} variant="default" ref={ref}>
        {children}
      </MenuBadge>
    );
  }
);

TopbarAccountSwitcherBadge.displayName = 'TopbarAccountSwitcherBadge';

export {TopbarAccountSwitcherBadge};
