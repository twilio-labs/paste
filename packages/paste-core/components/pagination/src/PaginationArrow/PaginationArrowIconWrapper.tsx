import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {PaginationArrowIconWrapperProps} from '../types';
import {PaginationArrowIconWrapperPropTypes} from '../proptypes';

const PaginationArrowIconWrapper: React.FC<PaginationArrowIconWrapperProps> = ({children, isHovered}) => {
  return (
    <Box
      alignItems="center"
      backgroundColor={isHovered ? 'colorBackgroundPrimaryLightest' : 'none'}
      borderColor="inherit"
      borderRadius="borderRadiusCircle"
      borderStyle="solid"
      borderWidth="borderWidth10"
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
