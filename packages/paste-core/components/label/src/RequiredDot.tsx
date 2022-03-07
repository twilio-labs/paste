import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface RequiredDotProps {
  element?: BoxProps['element'];
}

export const RequiredDot: React.FC<RequiredDotProps> = ({element = 'REQUIRED_DOT', ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      alignItems="center"
      justifyContent="center"
      as="span"
      cursor="pointer"
      display="flex"
      height="sizeIcon30"
      element={`${element}_WRAPPER`}
    >
      <Box
        as="span"
        backgroundColor="colorBackgroundRequired"
        borderRadius="borderRadiusCircle"
        display="block"
        height="4px"
        width="4px"
        element={element}
      />
    </Box>
  );
};

RequiredDot.displayName = 'RequiredDot';

RequiredDot.propTypes = {
  element: PropTypes.string,
};
