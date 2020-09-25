import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ThProps, ThPropTypes} from './types';

const Th = React.forwardRef<HTMLTableHeaderCellElement, ThProps>(({textAlign = 'left', width, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="th"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      fontWeight="fontWeightBold"
      paddingBottom="space40"
      paddingLeft="space40"
      paddingRight="space40"
      paddingTop="space40"
      position="relative"
      textAlign={textAlign}
      verticalAlign="inherit"
      width={width}
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

Th.displayName = 'Th';

if (process.env.NODE_ENV === 'development') {
  Th.propTypes = ThPropTypes;
}

export {Th};
