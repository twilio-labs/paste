import * as React from 'react';
import { safelySpreadTextProps } from '@twilio-paste/text';

import { List } from './List';
import type { UnorderedListProps } from './types';

const UnorderedList = React.forwardRef<HTMLUListElement, UnorderedListProps>(
  ({ children, element = 'UNORDERED_LIST', marginTop, marginBottom = 'space70', ...props }, ref) => {
    return (
      <List
        {...safelySpreadTextProps(props)}
        as="ul"
        element={element}
        marginTop={marginTop}
        marginBottom={marginBottom}
        ref={ref}
        listStyleType="disc"
      >
        {children}
      </List>
    );
  },
);

UnorderedList.displayName = 'UnorderedList';

export { UnorderedList };
