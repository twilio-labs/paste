import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLButtonElement> {
  productIcon?: React.ReactNode;
  onClick?: () => void;
  element?: BoxProps['element'];
}

export const SidebarHeader = React.forwardRef<HTMLButtonElement, SidebarHeaderProps>(
  ({element = 'SIDEBAR_HEADER', children, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        paddingX="space60"
        minHeight="sizeTopbar"
        borderBottomWidth="borderWidth10"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderInverseWeaker"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        columnGap="space50"
        overflow="hidden"
      >
        {children}
      </Box>
    );
  }
);

SidebarHeader.propTypes = {
  productIcon: PropTypes.node,
  element: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarHeader.displayName = 'SidebarHeader';
