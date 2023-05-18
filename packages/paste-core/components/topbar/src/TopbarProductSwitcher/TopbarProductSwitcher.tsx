import * as React from 'react';
import {Menu} from '@twilio-paste/menu';
import type {MenuProps} from '@twilio-paste/menu';

export interface TopbarProductSwitcherProps extends MenuProps {
  children: NonNullable<React.ReactNode>;
}

const TopbarProductSwitcher = React.forwardRef<HTMLDivElement, TopbarProductSwitcherProps>(
  ({children, element = 'TOPBAR_PRODUCT_SWITCHER', ...props}, ref) => {
    return (
      <Menu element={element} {...props} ref={ref}>
        {children}
      </Menu>
    );
  }
);

TopbarProductSwitcher.displayName = 'TopbarProductSwitcher';

export {TopbarProductSwitcher};
