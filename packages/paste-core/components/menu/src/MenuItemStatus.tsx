import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {StatusObject} from '@twilio-paste/badge';
import type {StatusBadgeVariants} from '@twilio-paste/badge';

type MenuItemStatusVariant = StatusBadgeVariants;

export interface MenuItemStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  element?: BoxProps['element'];
  variant: MenuItemStatusVariant;
}

const MenuItemStatus = React.forwardRef<HTMLDivElement, MenuItemStatusProps>(
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

MenuItemStatus.displayName = 'MenuItemStatus';

MenuItemStatus.propTypes = {
  variant: PropTypes.oneOf(Object.keys(StatusObject)).isRequired,
  element: PropTypes.string,
};

export {MenuItemStatus};
