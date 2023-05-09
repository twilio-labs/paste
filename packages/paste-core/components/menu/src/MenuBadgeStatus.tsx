import * as React from 'react';
import PropTypes from 'prop-types';
import {StatusBadge, StatusObject} from '@twilio-paste/badge';
import type {StatusBadgeProps} from '@twilio-paste/badge';
import {ButtonPropTypes} from '@twilio-paste/button';

import {MenuBadgeContent} from './MenuBadge';
import type {MenuBadgeProps} from './MenuBadge';

export interface MenuBadgeStatusProps extends Omit<MenuBadgeProps, 'variant'> {
  variant: StatusBadgeProps['variant'];
}

const MenuBadgeStatus = React.forwardRef<HTMLButtonElement, MenuBadgeStatusProps>(
  ({children, variant, element = 'MENU_BADGE_STATUS', ...props}, ref) => {
    return (
      <StatusBadge as="span" element={element} variant={variant}>
        <MenuBadgeContent {...props} element={element} ref={ref}>
          {children}
        </MenuBadgeContent>
      </StatusBadge>
    );
  }
);

MenuBadgeStatus.displayName = 'MenuBadgeStatus';

MenuBadgeStatus.propTypes = {
  ...ButtonPropTypes,
  i18nButtonLabel: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(StatusObject)).isRequired,
};

export {MenuBadgeStatus};
