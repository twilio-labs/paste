import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import { useUIDSeed } from '@twilio-paste/uid-library';
import * as React from 'react';

import { LIStyles, ULStyles } from './styles';
import type { PaginationItemsProps } from './types';

const PaginationItems = React.forwardRef<HTMLUListElement, PaginationItemsProps>(
  ({ children, element = 'PAGINATION_ITEMS', ...props }, ref) => {
    const [validChildren] = React.useMemo(
      () => [React.Children.toArray(children).filter((child) => React.isValidElement(child))],
      [children],
    );
    const keySeed = useUIDSeed();

    return (
      <Box {...ULStyles} {...safelySpreadBoxProps(props)} ref={ref} element={element} as="ul">
        {validChildren.map((child, index) => {
          return (
            <Box
              {...LIStyles}
              key={keySeed(`pagination-items-${index}`)}
              element={`${element}_ITEM`}
              as="li"
              marginRight="space90"
              _last={{
                marginRight: 'space0',
              }}
            >
              {child}
            </Box>
          );
        })}
      </Box>
    );
  },
);

PaginationItems.displayName = 'PaginationItems';

export { PaginationItems };
