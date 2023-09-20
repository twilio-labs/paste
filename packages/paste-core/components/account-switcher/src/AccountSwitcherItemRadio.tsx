import * as React from 'react';
import {MenuItemRadio} from '@twilio-paste/menu';
import type {MenuItemRadioProps} from '@twilio-paste/menu';

export interface AccountSwitcherItemRadioProps extends MenuItemRadioProps {
  children: NonNullable<React.ReactNode>;
}

const AccountSwitcherItemRadio = React.forwardRef<HTMLDivElement, AccountSwitcherItemRadioProps>(
  ({children, element = 'ACCOUNT_SWITCHER_ITEM_RADIO', ...props}, ref) => {
    return (
      <MenuItemRadio element={element} {...props} ref={ref}>
        {children}
      </MenuItemRadio>
    );
  }
);

AccountSwitcherItemRadio.displayName = 'AccountSwitcherItemRadio';
export {AccountSwitcherItemRadio};
