import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TableContext} from './TableContext';
import {TableProps, TablePropTypes} from './types';

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({striped = false, tableLayout = 'auto', variant = 'default', ...props}, ref) => {
    const tableContext = {
      striped,
    };

    return (
      <TableContext.Provider value={tableContext}>
        <Box
          borderColor="colorBorderLighter"
          borderRadius="borderRadius10"
          borderStyle="solid"
          borderWidth={variant === 'borderless' ? 'borderWidth0' : 'borderWidth10'}
        >
          <Box
            {...safelySpreadBoxProps(props)}
            ref={ref}
            as="table"
            borderCollapse="collapse"
            borderSpacing="0"
            tableLayout={tableLayout === 'fixed' ? 'fixed' : 'auto'}
            width="100%"
          />
        </Box>
      </TableContext.Provider>
    );
  }
);

Table.displayName = 'Table';

if (process.env.NODE_ENV === 'development') {
  Table.propTypes = TablePropTypes;
}

export {Table};
