import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';

import { TableContext } from './TableContext';
import type { TableProps } from './types';

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      element = 'TABLE',
      id,
      isActionable,
      scrollHorizontally,
      noWrap,
      striped = false,
      tableLayout = 'auto',
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const tableContext = {
      striped,
    };

    return (
      <TableContext.Provider value={tableContext}>
        <Box
          id={id}
          element={`${element}_WRAPPER`}
          overflowX={scrollHorizontally ? 'auto' : null}
          whiteSpace={noWrap ? 'nowrap' : null}
          boxShadow={isActionable ? 'shadowFocus' : null}
        >
          <Box
            {...safelySpreadBoxProps(props)}
            ref={ref}
            as="table"
            borderCollapse="separate"
            borderColor="colorBorderWeaker"
            borderSpacing="0"
            borderStyle="solid"
            borderWidth={variant === 'borderless' ? 'borderWidth0' : 'borderWidth10'}
            element={element}
            tableLayout={tableLayout === 'fixed' ? 'fixed' : 'auto'}
            width="100%"
          />
        </Box>
      </TableContext.Provider>
    );
  },
);

Table.displayName = 'Table';

export { Table };
