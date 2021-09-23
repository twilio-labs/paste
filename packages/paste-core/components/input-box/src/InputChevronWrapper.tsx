import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface InputChevronWrapperProps {
  children: NonNullable<React.ReactNode>;
  // Requiring element here instead of extending directly from BoxProps.
  // This ensures an element prop is always passed on these composite components.
  element: BoxProps['element'];
}

export const InputChevronWrapper = React.forwardRef<HTMLDivElement, InputChevronWrapperProps>(
  ({children, element = 'CHEVRON_WRAPPER'}, ref) => (
    <Box
      alignItems="center"
      display="inline-flex"
      position="absolute"
      pointerEvents="none"
      right="space30"
      top="50%"
      transform="translateY(-50%)"
      zIndex="zIndex10"
      element={element}
      ref={ref}
    >
      {children}
    </Box>
  )
);

InputChevronWrapper.displayName = 'InputChevronWrapper';

InputChevronWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string.isRequired,
};
