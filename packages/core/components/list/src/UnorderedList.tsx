import * as React from 'react';
import * as PropTypes from 'prop-types';
import {safelySpreadTextProps} from '@twilio-paste/text';
import {isMarginTokenProp} from '@twilio-paste/style-props';
import {List} from './List';
import type {UnorderedListProps} from './types';

const UnorderedList = React.forwardRef<HTMLUListElement, UnorderedListProps>(
  ({children, element = 'UNORDERED_LIST', marginTop, marginBottom = 'space70', ...props}, ref) => {
    return (
      <List
        {...safelySpreadTextProps(props)}
        as="ul"
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

UnorderedList.displayName = 'UnorderedList';

UnorderedList.propTypes = {
  element: PropTypes.string,
  marginTop: isMarginTokenProp,
  marginBottom: isMarginTokenProp,
};

export {UnorderedList};
