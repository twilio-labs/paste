import * as React from 'react';
import {MenuGroup} from '@twilio-paste/menu';
import type {MenuGroupProps} from '@twilio-paste/menu';

export type TopbarAccountSwitcherGroupProps = MenuGroupProps;

const TopbarAccountSwitcherGroup = React.forwardRef<HTMLDivElement, TopbarAccountSwitcherGroupProps>(
  ({children, element = 'TOPBAR_ACCOUNT_SWITCHER_GROUP', label, ...props}, ref) => {
    return (
      <MenuGroup label={label} element={element} {...props} ref={ref}>
        {children}
      </MenuGroup>
    );
  }
);

TopbarAccountSwitcherGroup.displayName = 'TopbarAccountSwitcherGroup';

export {TopbarAccountSwitcherGroup};
