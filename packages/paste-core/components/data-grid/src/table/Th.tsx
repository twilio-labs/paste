import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {ThProps as TableThProps} from '@twilio-paste/table';

export interface ThProps extends TableThProps {
  onClick?: React.MouseEventHandler;
}

export const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  ({width, textAlign = 'left', element = 'DATA_GRID_TH', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        as="th"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        borderBottomWidth="borderWidth10"
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        fontWeight="fontWeightSemibold"
        paddingY="space40"
        paddingX="space50"
        width={width}
        position="relative"
        textAlign={textAlign}
        verticalAlign="inherit"
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
  }
);

Th.displayName = 'Th';
