import { MenuBadgeContent } from '@twilio-paste/menu';
import type { MenuBadgeProps } from '@twilio-paste/menu';
import * as React from 'react';

import { StatusBadge } from './StatusBadge';
import type { StatusBadgeProps } from './StatusBadge';

export interface StatusMenuBadgeProps extends Omit<MenuBadgeProps, 'variant'> {
  variant: StatusBadgeProps['variant'];
}

const StatusMenuBadge = React.forwardRef<HTMLButtonElement, StatusMenuBadgeProps>(
  ({ children, variant, element = 'STATUS_MENU_BADGE', ...props }, ref) => {
    return (
      <StatusBadge as="span" element={element} variant={variant}>
        <MenuBadgeContent {...props} element={element} ref={ref}>
          {children}
        </MenuBadgeContent>
      </StatusBadge>
    );
  },
);

StatusMenuBadge.displayName = 'StatusMenuBadge';

export { StatusMenuBadge };
