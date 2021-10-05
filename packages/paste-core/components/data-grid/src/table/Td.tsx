import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import type {TextAlign} from '@twilio-paste/style-props';

export interface TdProps {
  textAlign?: TextAlign;
  onMouseDown?: React.MouseEventHandler;
  element?: BoxElementProps['element'];
}

export const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({textAlign = 'left', element = 'DATA_GRID_TD', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="td"
        element={element}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        paddingY="space40"
        paddingX="space50"
        position="relative"
        textAlign={textAlign}
        verticalAlign="inherit"
        wordWrap="break-word"
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

Td.displayName = 'Td';
Td.propTypes = {
  onMouseDown: PropTypes.func,
  element: PropTypes.string,
};
