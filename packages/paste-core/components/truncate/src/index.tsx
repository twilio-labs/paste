import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps} from '@twilio-paste/box';

export interface TruncateProps extends Pick<BoxProps, 'as'> {
  children: NonNullable<React.ReactNode>;
}

const Truncate = React.forwardRef<HTMLSpanElement, TruncateProps>(({children, ...props}, ref) => {
  return (
    <Box
      {...props}
      as="span"
      display="inline-block"
      maxWidth="100%"
      overflow="hidden"
      ref={ref}
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    >
      {children}
    </Box>
  );
});
Truncate.displayName = 'Truncate';

if (process.env.NODE_ENV === 'development') {
  Truncate.propTypes = {
    children: PropTypes.node.isRequired,
  };
}

export {Truncate};
