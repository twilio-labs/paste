import * as React from 'react';
import { useUIDSeed } from '@twilio-paste/uid-library';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';

import { PaginationLabel } from './PaginationLabel';
import { ULStyles, LIStyles } from './styles';
import type { PaginationNumbersProps } from './types';

const PaginationNumbers = React.forwardRef<HTMLUListElement, PaginationNumbersProps>(
  ({ children, element = 'PAGINATION_NUMBERS', pageLabel, ...props }, ref) => {
    const [validChildren] = React.useMemo(
      () => [React.Children.toArray(children).filter((child) => React.isValidElement(child))],
      [children],
    );
    const keySeed = useUIDSeed();

    return (
      <>
        <Box
          {...ULStyles}
          {...safelySpreadBoxProps(props)}
          element={element}
          ref={ref}
          as="ul"
          justifyContent="center"
          paddingLeft="space40"
          paddingRight="space40"
          paddingBottom="space20"
          width="100%"
        >
          {validChildren.map((child, index) => {
            return (
              <Box
                {...LIStyles}
                key={keySeed(`pagination-numbers-${index}`)}
                element={`${element}_ITEM`}
                as="li"
                marginRight="space30"
                _last={{
                  marginRight: 'space0',
                }}
              >
                {child}
              </Box>
            );
          })}
        </Box>
        {pageLabel ? <PaginationLabel>{pageLabel}</PaginationLabel> : null}
      </>
    );
  },
);

PaginationNumbers.displayName = 'PaginationNumbers';

export { PaginationNumbers };
