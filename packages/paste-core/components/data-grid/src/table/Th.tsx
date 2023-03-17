import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import type {TextAlign} from '@twilio-paste/style-props';

export interface ThProps {
  textAlign?: TextAlign;
  width?: string;
  onClick?: React.MouseEventHandler;
  element?: BoxElementProps['element'];
  colSpan?: number;
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
Th.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
  element: PropTypes.string,
  colSpan: PropTypes.number,
};
