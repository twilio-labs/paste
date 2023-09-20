import * as React from 'react';
import {Box} from '@twilio-paste/box';

import type {PaginationArrowIconWrapperProps} from '../types';

const PaginationArrowIconWrapper: React.FC<React.PropsWithChildren<PaginationArrowIconWrapperProps>> = ({
  children,
  element = 'PAGINATION_ARROW_ICON_WRAPPER',
  isFocused,
  isHovered,
}) => {
  return (
    <Box
      element={element}
      alignItems="center"
      backgroundColor="colorBackgroundBody"
      boxShadow={isHovered && !isFocused ? 'shadowBorderPrimary' : 'shadowBorderWeak'}
      borderRadius="borderRadiusCircle"
      display="flex"
      height="sizeSquare80"
      justifyContent="center"
      transition="background-color 100ms ease-in"
      width="sizeSquare80"
    >
      {children}
    </Box>
  );
};

PaginationArrowIconWrapper.displayName = 'PaginationArrowIconWrapper';

export {PaginationArrowIconWrapper};
