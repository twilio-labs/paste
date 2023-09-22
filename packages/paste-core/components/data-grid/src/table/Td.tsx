import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { TdProps as TableTdProps } from '@twilio-paste/table';

export interface TdProps extends TableTdProps {
  onClick?: React.MouseEventHandler;
}

export const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ textAlign = 'left', element = 'DATA_GRID_TD', ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="td"
        element={element}
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderWidth="borderWidth0"
        borderBottomWidth="borderWidth10"
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        padding="space50"
        position="relative"
        textAlign={textAlign}
        verticalAlign="inherit"
        wordWrap="break-word"
        color="inherit"
        _first={{
          paddingLeft: 'space50',
        }}
        _last={{
          paddingRight: 'space50',
        }}
        _focus={{
          outline: 'none',
          boxShadow: 'shadowFocusInset',
        }}
      />
    );
  },
);

Td.displayName = 'Td';
