import * as React from 'react';
import {Box} from '@twilio-paste/box';

const PaginationArrowIconWrapper: React.FC = ({children}) => {
  return (
    <Box
      alignItems="center"
      borderColor="inherit"
      borderRadius="borderRadiusCircle"
      borderStyle="solid"
      borderWidth="borderWidth10"
      display="flex"
      height="sizeSquare80"
      justifyContent="center"
      width="sizeSquare80"
    >
      {children}
    </Box>
  );
};

PaginationArrowIconWrapper.displayName = 'PaginationArrowIconWrapper';

export {PaginationArrowIconWrapper};
