import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TableProps, TablePropTypes} from './types';

const Table = React.forwardRef<HTMLTableElement, TableProps>(({tableLayout = 'auto', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="table"
      borderCollapse="collapse"
      borderSpacing="0"
      color="colorText"
      tableLayout={tableLayout === 'fixed' ? 'fixed' : 'auto'}
      width="100%"
    />
  );
});

Table.displayName = 'Table';

if (process.env.NODE_ENV === 'development') {
  Table.propTypes = TablePropTypes;
}

export {Table};
