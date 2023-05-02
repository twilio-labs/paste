import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {ValueOf} from '@twilio-paste/types';

import {MenuBadge} from './MenuBadge';
import type {MenuBadgeProps} from './MenuBadge';
import {StatusIcons, StatusNames} from './constants';

export type MenuBadgeStatusVariants = ValueOf<typeof StatusNames>;

export interface MenuBadgeStatusProps extends Omit<MenuBadgeProps, 'variant'> {
  variant: MenuBadgeStatusVariants;
}

const getBadgeVariantFromStatus = (status: MenuBadgeStatusVariants): MenuBadgeProps['variant'] => {
  switch (status) {
    case StatusNames.PROCESS_NEUTRAL:
    case StatusNames.PROCESS_IN_PROGRESS:
      return 'neutral';
    case StatusNames.PROCESS_SUCCESS:
    case StatusNames.AVAILABILITY_AVAILABLE:
      return 'success';
    case StatusNames.PROCESS_WARNING:
    case StatusNames.AVAILABILITY_BUSY:
      return 'warning';
    case StatusNames.PROCESS_ERROR:
    case StatusNames.AVAILABILITY_UNAVAILABLE:
      return 'error';
    case StatusNames.PROCESS_DISABLED:
    case StatusNames.PROCESS_DRAFT:
    case StatusNames.AVAILABILITY_OFFLINE:
      return 'decorative10';
    case StatusNames.AVAILABILITY_NEUTRAL:
    default:
      return 'neutral';
  }
};

const MenuBadgeStatus = React.forwardRef<HTMLButtonElement, MenuBadgeStatusProps>(
  ({children, variant, ...props}, ref) => {
    const badgeVariant = React.useMemo(() => {
      return getBadgeVariantFromStatus(variant);
    }, [variant]);

    return (
      <MenuBadge {...props} variant={badgeVariant} ref={ref}>
        <Box display="flex" flexDirection="row" columnGap="space20" alignItems="center">
          {StatusIcons[variant]}
          {children}
        </Box>
      </MenuBadge>
    );
  }
);

MenuBadgeStatus.displayName = 'MenuBadgeStatus';

MenuBadgeStatus.propTypes = {
  children: PropTypes.node.isRequired,
};

export {MenuBadgeStatus};
