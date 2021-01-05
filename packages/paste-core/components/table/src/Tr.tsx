import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TrPropTypes} from './types';
import type {TrProps} from './types';

const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(({verticalAlign = 'middle', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="tr"
      borderStyle="solid"
      borderColor="colorBorderLighter"
      borderWidth="borderWidth0"
      borderBottomWidth="borderWidth10"
      verticalAlign={verticalAlign}
      _even={{backgroundColor: 'colorBackgroundRowStriped'}}
    />
  );
});

Tr.displayName = 'Tr';

if (process.env.NODE_ENV === 'development') {
  Tr.propTypes = TrPropTypes;
}

export {Tr};
