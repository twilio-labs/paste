import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';

import type {PaginationEllipsisProps} from './types';

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
  ({label, element = 'PAGINATION_ELLIPSIS', ...props}, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        ref={ref}
        element={element}
        aria-label={label}
        as="span"
        display="inline-block"
        paddingBottom="space20"
        paddingLeft="space30"
        paddingRight="space30"
        paddingTop="space20"
        fontWeight="fontWeightMedium"
      >
        &hellip;
      </Text>
    );
  }
);

PaginationEllipsis.displayName = 'PaginationEllipsis';

export {PaginationEllipsis};
