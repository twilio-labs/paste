import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TdProps, TdPropTypes} from './types';

const Td = React.forwardRef<HTMLTableCellElement, TdProps>(({textAlign = 'left', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="td"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      paddingBottom="space40"
      paddingLeft="space50"
      paddingRight="space50"
      paddingTop="space40"
      position="relative"
      textAlign={textAlign}
      verticalAlign="inherit"
      wordWrap="break-word"
    />
  );
});

Td.displayName = 'Td';

if (process.env.NODE_ENV === 'development') {
  Td.propTypes = TdPropTypes;
}

export {Td};
