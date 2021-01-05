import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TdPropTypes} from './types';
import type {TdProps} from './types';

const Td = React.forwardRef<HTMLTableCellElement, TdProps>(({textAlign = 'left', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="td"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      paddingBottom="space40"
      paddingLeft="space40"
      paddingRight="space40"
      paddingTop="space40"
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
    />
  );
});

Td.displayName = 'Td';

if (process.env.NODE_ENV === 'development') {
  Td.propTypes = TdPropTypes;
}

export {Td};
