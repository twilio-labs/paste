import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';

import {StatusObject} from './constants';
import type {StatusBadgeProps, StatusBadgeVariants} from './types';
import {Badge} from './Badge';
import {BadgePropTypes} from './propTypes';

const StatusBadge = React.forwardRef<HTMLElement, StatusBadgeProps>(
  ({children, element = 'STATUS_BADGE', variant, ...props}, ref) => {
    return (
      <Badge element={element} {...props} variant={StatusObject[variant].badgeVariant} ref={ref}>
        <Box
          color={StatusObject[variant].color}
          display="flex"
          flexDirection="row"
          columnGap="space20"
          alignItems="center"
        >
          {StatusObject[variant].icon}
          {children}
        </Box>
      </Badge>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';

StatusBadge.propTypes = {
  ...BadgePropTypes,
  variant: PropTypes.oneOf(Object.keys(StatusObject) as StatusBadgeVariants[]).isRequired,
};

export {StatusBadge};
