import * as React from 'react';
import {MenuSeparator} from '@twilio-paste/menu';
import type {MenuSeparatorProps} from '@twilio-paste/menu';

export type TopbarAccountSwitcherSeparatorProps = MenuSeparatorProps;

const TopbarAccountSwitcherSeparator = React.forwardRef<HTMLHRElement, TopbarAccountSwitcherSeparatorProps>(
  ({children, element = 'TOPBAR_ACCOUNT_SWITCHER_SEPARATOR', ...props}, ref) => {
    return (
      <MenuSeparator element={element} {...props} ref={ref}>
        {children}
      </MenuSeparator>
    );
  }
);

TopbarAccountSwitcherSeparator.displayName = 'TopbarAccountSwitcherSeparator';

export {TopbarAccountSwitcherSeparator};
