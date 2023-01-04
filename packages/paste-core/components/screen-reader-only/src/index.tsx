import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface ScreenReaderOnlyProps {
  children: NonNullable<React.ReactNode>;
  id?: string;
  as?: BoxProps['as'];
}

const ScreenReaderOnly = React.forwardRef<HTMLElement, ScreenReaderOnlyProps>(
  ({as = 'span', children, ...props}, ref) => {
    return (
      <Box
        {...props}
        as={as}
        border="none"
        clip="rect(0 0 0 0)"
        height="1px"
        margin="spaceNegative10"
        overflow="hidden"
        padding="space0"
        position="absolute"
        ref={ref}
        textTransform="none"
        whiteSpace="nowrap"
        width="1px"
      >
        {children}
      </Box>
    );
  }
);
ScreenReaderOnly.displayName = 'ScreenReaderOnly';

if (process.env.NODE_ENV === 'development') {
  ScreenReaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
  };
}

export {ScreenReaderOnly};
