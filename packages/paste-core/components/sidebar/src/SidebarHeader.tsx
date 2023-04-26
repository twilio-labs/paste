import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import type {BoxProps} from '@twilio-paste/box';
import {ProductHomeIcon} from '@twilio-paste/icons/esm/ProductHomeIcon';

import {SidebarContext} from './SidebarContext';

export interface SidebarHeaderProps extends React.HTMLAttributes<HTMLButtonElement> {
  productIcon?: React.ReactNode;
  onClick?: () => void;
  element?: BoxProps['element'];
}

export const SidebarHeader = React.forwardRef<HTMLButtonElement, SidebarHeaderProps>(
  ({element = 'SIDEBAR_HEADER', productIcon, onClick, children}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);

    return (
      <Box
        padding="space60"
        borderBottomWidth="borderWidth10"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderInverseWeaker"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        columnGap="space50"
        overflow="hidden"
        element={element}
        ref={ref}
      >
        <Button size="icon" variant="inverse" element={`${element}_BUTTON`} onClick={onClick}>
          {productIcon ? productIcon : <ProductHomeIcon size="sizeIcon20" decorative element={`${element}_ICON`} />}
        </Button>
        <Box
          opacity={collapsed ? '0' : '1'}
          element={`${element}_TEXT`}
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
