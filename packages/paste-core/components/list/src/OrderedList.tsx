import * as React from 'react';
import PropTypes from 'prop-types';
import {safelySpreadTextProps} from '@twilio-paste/text';
import {isMarginTokenProp} from '@twilio-paste/style-props';

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
        ref={ref}
      >
        {children}
      </List>
    );
  }
);

OrderedList.displayName = 'OrderedList';

OrderedList.propTypes = {
  element: PropTypes.string,
  marginTop: isMarginTokenProp,
  marginBottom: isMarginTokenProp,
};

export {OrderedList};
