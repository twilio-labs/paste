import * as React from 'react';
import PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';
import {isMarginTokenProp} from '@twilio-paste/style-props';

import type {AsTags, BaseListProps} from './types';

const List = React.forwardRef<HTMLOListElement | HTMLUListElement, BaseListProps>(
  ({as, children, element = 'LIST', ...props}, ref) => {
    return (
      <Text
        {...props}
        as={as}
        color="colorText"
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight40"
        marginLeft="space70"
        ref={ref}
      >
        {children}
      </Text>
    );
  }
);

List.displayName = 'List';

List.propTypes = {
  as: PropTypes.oneOf(['ol', 'ul'] as AsTags[]).isRequired,
  element: PropTypes.string,
  marginTop: isMarginTokenProp,
  marginBottom: isMarginTokenProp,
};

export {List};
