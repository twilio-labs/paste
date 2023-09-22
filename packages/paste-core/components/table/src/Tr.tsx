import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import * as React from 'react';

import { TableContext } from './TableContext';
import type { TrProps } from './types';

const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  ({ element = 'TR', verticalAlign = 'middle', ...props }, ref) => {
    const { striped } = React.useContext(TableContext);
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="tr"
        element={element}
        verticalAlign={verticalAlign}
        _even={{ backgroundColor: striped ? 'colorBackgroundRowStriped' : 'transparent' }}
        _last={{ borderWidth: 'borderWidth0' }}
      />
    );
  },
);

Tr.displayName = 'Tr';

export { Tr };
