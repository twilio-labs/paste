import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TableContext} from './TableContext';
import type {TrProps} from './types';
import {TrPropTypes} from './types';

const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  ({element = 'TR', verticalAlign = 'middle', ...props}, ref) => {
    const {striped} = React.useContext(TableContext);
    return (
      <Box
        {...striped}
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="tr"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderWidth="borderWidth0"
        borderBottomWidth="borderWidth10"
        element={element}
        verticalAlign={verticalAlign}
        _even={{backgroundColor: striped ? 'colorBackgroundRowStriped' : 'transparent'}}
        _last={{borderWidth: 'borderWidth0'}}
      />
    );
  }
);

Tr.displayName = 'Tr';

if (process.env.NODE_ENV === 'development') {
  Tr.propTypes = TrPropTypes;
}

export {Tr};
