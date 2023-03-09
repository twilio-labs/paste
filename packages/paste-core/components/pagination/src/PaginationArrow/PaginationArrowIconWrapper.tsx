import * as React from 'react';
import {Box} from '@twilio-paste/box';

import type {PaginationArrowIconWrapperProps} from '../types';
import {PaginationArrowIconWrapperPropTypes} from '../proptypes';

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
      backgroundColor={isHovered || isFocused ? 'colorBackgroundPrimaryWeakest' : 'none'}
      boxShadow="shadowBorderWeak"
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

PaginationArrowIconWrapper.propTypes = PaginationArrowIconWrapperPropTypes;

export {PaginationArrowIconWrapper};
