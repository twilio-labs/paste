import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';

import {StatusIcons, StatusNames} from './constants';
import type {StatusBadgeProps, BadgeVariants, StatusBadgeVariants} from './types';
import {Badge} from './Badge';
import {BadgePropTypes} from './propTypes';

const getBadgeVariantFromStatus = (status: StatusBadgeVariants): BadgeVariants => {
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

const StatusBadge = React.forwardRef<HTMLElement, StatusBadgeProps>(({children, variant, ...props}, ref) => {
  const badgeVariant = React.useMemo(() => {
    return getBadgeVariantFromStatus(variant);
  }, [variant]);

  return (
    <Badge {...props} variant={badgeVariant} ref={ref}>
      <Box display="flex" flexDirection="row" columnGap="space20" alignItems="center">
        {StatusIcons[variant]}
        {children}
      </Box>
    </Badge>
  );
});

StatusBadge.displayName = 'StatusBadge';

StatusBadge.propTypes = {
  ...BadgePropTypes,
  variant: PropTypes.oneOf(Object.values(StatusNames) as StatusBadgeVariants[]).isRequired,
};

export {StatusBadge};
