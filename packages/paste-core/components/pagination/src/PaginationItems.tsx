import * as React from 'react';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ULStyles, LIStyles} from './styles';
import type {PaginationItemsProps} from './types';
import {PaginationItemsPropTypes} from './proptypes';

const PaginationItems = React.forwardRef<HTMLUListElement, PaginationItemsProps>(({children, ...props}, ref) => {
  const [validChildren] = React.useMemo(
    () => [React.Children.toArray(children).filter((child) => React.isValidElement(child))],
    [children]
  );
  const keySeed = useUIDSeed();

  return (
    <Box {...ULStyles} {...safelySpreadBoxProps(props)} ref={ref} as="ul">
      {validChildren.map((child, index) => {
        return (
          <Box
            {...LIStyles}
            key={keySeed(`pagination-items-${index}`)}
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
});

PaginationItems.displayName = 'PaginationItems';

PaginationItems.propTypes = PaginationItemsPropTypes;

export {PaginationItems};
