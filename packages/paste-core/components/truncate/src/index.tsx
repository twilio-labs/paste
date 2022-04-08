import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Box} from '@twilio-paste/box';

export interface TruncateProps extends Omit<React.HtmlHTMLAttributes<HTMLSpanElement>, 'color'>, Pick<BoxProps, 'as'> {
  children: NonNullable<React.ReactNode>;
  title: string;
}

const Truncate = React.forwardRef<HTMLSpanElement, TruncateProps>(({children, ...props}, ref) => {
  return (
    <Box
      {...props}
      // eslint-disable-next-line react/jsx-no-literals
      as="span"
      // eslint-disable-next-line react/jsx-no-literals
      display="inline-block"
      // eslint-disable-next-line react/jsx-no-literals
      maxWidth="100%"
      // eslint-disable-next-line react/jsx-no-literals
      overflow="hidden"
      ref={ref}
      // eslint-disable-next-line react/jsx-no-literals
      textOverflow="ellipsis"
      // eslint-disable-next-line react/jsx-no-literals
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
    title: PropTypes.string.isRequired,
  };
}

export {Truncate};
