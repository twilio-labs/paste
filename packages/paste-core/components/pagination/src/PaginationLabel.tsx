import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';

import type {PaginationLabelProps} from './types';

const PaginationLabel = React.forwardRef<HTMLDivElement, PaginationLabelProps>(
  ({children, element = 'PAGINATION_LABEL', ...props}, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        ref={ref}
        element={element}
        as="div"
        color="colorTextWeak"
        textAlign="center"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight50"
      >
        {children}
      </Text>
    );
  }
);

PaginationLabel.displayName = 'PaginationLabel';

export {PaginationLabel};
