import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {ThProps} from './types';
import {ThPropTypes} from './proptypes';

const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  ({element = 'TH', textAlign = 'left', width, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="th"
        element={element}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        fontWeight="fontWeightSemibold"
        paddingBottom="space40"
        paddingLeft="space50"
        paddingRight="space50"
        paddingTop="space40"
        position="relative"
        textAlign={textAlign}
        verticalAlign="inherit"
        width={width}
        wordWrap="break-word"
      />
    );
  }
);

Th.displayName = 'Th';

if (process.env.NODE_ENV === 'development') {
  Th.propTypes = ThPropTypes;
}

export {Th};
