import * as React from 'react';
import PropTypes from 'prop-types';
import {StatusBadge} from '@twilio-paste/badge';
import type {StatusBadgeProps} from '@twilio-paste/badge';

import {MenuBadgeContent} from './MenuBadge';
import type {MenuBadgeProps} from './MenuBadge';

export interface MenuBadgeStatusProps extends Omit<MenuBadgeProps, 'variant'> {
  variant: StatusBadgeProps['variant'];
}

const MenuBadgeStatus = React.forwardRef<HTMLButtonElement, MenuBadgeStatusProps>(
  ({children, variant, ...props}, ref) => {
    return (
      <StatusBadge as="span" variant={variant}>
        <MenuBadgeContent {...props} ref={ref}>
          {children}
        </MenuBadgeContent>
      </StatusBadge>
    );
  }
);

MenuBadgeStatus.displayName = 'MenuBadgeStatus';

MenuBadgeStatus.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MenuBadgeStatus};
