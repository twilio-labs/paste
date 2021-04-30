import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {PaginationProps} from './types';
import {PaginationPropTypes} from './proptypes';

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(({children, label, ...props}, ref) => {
  return (
    <Box {...safelySpreadBoxProps(props)} ref={ref} aria-label={label} as="nav" role="navigation">
      {children}
    </Box>
  );
});

Pagination.displayName = 'Pagination';

Pagination.propTypes = PaginationPropTypes;

export {Pagination};
