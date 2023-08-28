import * as React from 'react';
import {safelySpreadTextProps} from '@twilio-paste/text';

import {List} from './List';
import type {OrderedListProps} from './types';

const OrderedList = React.forwardRef<HTMLOListElement, OrderedListProps>(
  ({children, element = 'ORDERED_LIST', marginTop, marginBottom = 'space70', ...props}, ref) => {
    return (
      <List
        {...safelySpreadTextProps(props)}
        as="ol"
        element={element}
        marginTop={marginTop}
        marginBottom={marginBottom}
        listStyleType="decimal"
        ref={ref}
      >
        {children}
      </List>
    );
  }
);

OrderedList.displayName = 'OrderedList';

export {OrderedList};
