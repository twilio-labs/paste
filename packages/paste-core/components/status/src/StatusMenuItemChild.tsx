import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {StatusObject} from './constants';
import type {StatusBadgeVariants} from './types';

type StatusMenuItemChildVariant = StatusBadgeVariants;

export interface StatusMenuItemChildProps extends React.HTMLAttributes<HTMLDivElement> {
  element?: BoxProps['element'];
  variant: StatusMenuItemChildVariant;
}

const StatusMenuItemChild = React.forwardRef<HTMLDivElement, StatusMenuItemChildProps>(
  ({children, variant, element = 'MENU_ITEM_STATUS', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        display="flex"
        flexDirection="row"
        columnGap="space20"
        alignItems="center"
        variant={variant}
        ref={ref}
      >
        {StatusObject[variant].icon}
        {children}
      </Box>
    );
  }
);

StatusMenuItemChild.displayName = 'StatusMenuItemChild';

StatusMenuItemChild.propTypes = {
  variant: PropTypes.oneOf(Object.keys(StatusObject)).isRequired,
  element: PropTypes.string,
};

export {StatusMenuItemChild};
