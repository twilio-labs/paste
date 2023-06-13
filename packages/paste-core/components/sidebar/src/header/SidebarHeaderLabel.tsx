import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {SidebarContext} from '../SidebarContext';

export interface SidebarHeaderLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
}

export const SidebarHeaderLabel = React.forwardRef<HTMLButtonElement, SidebarHeaderLabelProps>(
  ({element = 'SIDEBAR_HEADER_LABEL', children, ...props}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);

    return (
      <Box
        ref={ref}
        {...safelySpreadBoxProps(props)}
        opacity={collapsed ? '0' : '1'}
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight30"
        letterSpacing="-.02em"
        color="colorTextInverse"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
        margin="space0"
      >
        {children}
      </Box>
    );
  }
);

SidebarHeaderLabel.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

SidebarHeaderLabel.displayName = 'SidebarHeaderLabel';
