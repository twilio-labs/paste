import * as React from 'react';
import PropTypes from 'prop-types';
import {MenuBadgeContent, MenuBadgePropTypes} from '@twilio-paste/menu';
import type {MenuBadgeProps} from '@twilio-paste/menu';

import {StatusBadge} from './StatusBadge';
import {StatusObject} from './constants';
import type {StatusBadgeProps} from './StatusBadge';

export interface StatusMenuBadgeProps extends Omit<MenuBadgeProps, 'variant'> {
  variant: StatusBadgeProps['variant'];
}

const StatusMenuBadge = React.forwardRef<HTMLButtonElement, StatusMenuBadgeProps>(
  ({children, variant, element = 'STATUS_MENU_BADGE', ...props}, ref) => {
    return (
      <StatusBadge as="span" element={element} variant={variant}>
        <MenuBadgeContent {...props} element={element} ref={ref}>
          {children}
        </MenuBadgeContent>
      </StatusBadge>
    );
  }
);

StatusMenuBadge.displayName = 'StatusMenuBadge';

StatusMenuBadge.propTypes = {
  ...MenuBadgePropTypes,
  variant: PropTypes.oneOf(Object.keys(StatusObject)).isRequired,
};

export {StatusMenuBadge};
