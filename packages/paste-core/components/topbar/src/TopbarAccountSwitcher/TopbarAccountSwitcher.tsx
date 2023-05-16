import * as React from 'react';
import {Menu} from '@twilio-paste/menu';
import type {MenuProps} from '@twilio-paste/menu';

export interface TopbarAccountSwitcherProps extends MenuProps {
  children: NonNullable<React.ReactNode>;
}

const TopbarAccountSwitcher = React.forwardRef<HTMLDivElement, TopbarAccountSwitcherProps>(
  ({children, element = 'TOPBAR_ACCOUNT_SWITCHER', ...props}, ref) => {
    return (
      <Menu element={element} {...props} ref={ref}>
        {children}
      </Menu>
    );
  }
);

TopbarAccountSwitcher.displayName = 'TopbarAccountSwitcher';

export {TopbarAccountSwitcher};
