import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface TruncateProps extends HTMLPasteProps<'span'>, Pick<BoxProps, 'as'> {
  children: NonNullable<React.ReactNode>;
  title: string;
}

const Truncate = React.forwardRef<HTMLSpanElement, TruncateProps>(({children, ...props}, ref) => {
  return (
    <Box
      {...props}
      as="span"
      display="inline-block"
      verticalAlign="bottom"
      textDecoration="inherit"
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

Truncate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export {Truncate};
