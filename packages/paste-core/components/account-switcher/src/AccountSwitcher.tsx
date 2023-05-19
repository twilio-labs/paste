import * as React from 'react';
import {Menu, MenuPropTypes} from '@twilio-paste/menu';
import type {MenuProps} from '@twilio-paste/menu';

export interface AccountSwitcherProps extends MenuProps {
  children: NonNullable<React.ReactNode>;
}

const AccountSwitcher = React.forwardRef<HTMLDivElement, AccountSwitcherProps>(
  ({children, element = 'ACCOUNT_SWITCHER', ...props}, ref) => {
    return (
      <Menu element={element} {...props} ref={ref}>
        {children}
      </Menu>
    );
  }
);

AccountSwitcher.displayName = 'AccountSwitcher';
AccountSwitcher.propTypes = MenuPropTypes;
export {AccountSwitcher};
