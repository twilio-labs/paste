import * as React from 'react';
import {MenuItemRadio} from '@twilio-paste/menu';
import type {MenuItemRadioProps} from '@twilio-paste/menu';

export interface TopbarAccountSwitcherItemRadioProps extends MenuItemRadioProps {
  children: NonNullable<React.ReactNode>;
}

const TopbarAccountSwitcherItemRadio = React.forwardRef<HTMLDivElement, TopbarAccountSwitcherItemRadioProps>(
  ({children, element = 'TOPBAR_ACCOUNT_SWITCHER_ITEM_RADIO', ...props}, ref) => {
    return (
      <MenuItemRadio element={element} {...props} ref={ref}>
        {children}
      </MenuItemRadio>
    );
  }
);

TopbarAccountSwitcherItemRadio.displayName = 'TopbarAccountSwitcherItemRadio';

export {TopbarAccountSwitcherItemRadio};
