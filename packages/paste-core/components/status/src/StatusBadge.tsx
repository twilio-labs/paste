import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {BadgePropTypes, badgeBaseStyles, badgeVariantStyles} from '@twilio-paste/badge';

import {StatusObject} from './constants';
import type {StatusBadgeProps, StatusBadgeVariants} from './types';

const badgeStyles = {...badgeBaseStyles, ...badgeVariantStyles.default};

const StatusBadge = React.forwardRef<HTMLElement, StatusBadgeProps>(
  ({children, element = 'STATUS_BADGE', size, variant, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="span"
        element={element}
        variant={variant}
        {...badgeStyles}
        color={StatusObject[variant].color}
        paddingX={size === 'small' ? 'space20' : 'space30'}
        paddingY={size === 'small' ? 'space10' : 'space20'}
        display="flex"
        flexDirection="row"
        columnGap="space20"
        alignItems="center"
        ref={ref}
      >
        {StatusObject[variant].icon}
        {children}
      </Box>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';

StatusBadge.propTypes = {
  ...BadgePropTypes,
  variant: PropTypes.oneOf(Object.keys(StatusObject) as StatusBadgeVariants[]).isRequired,
};

export {StatusBadge};
