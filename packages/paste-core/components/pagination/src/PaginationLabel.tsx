import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';

import type {PaginationLabelProps} from './types';
import {PaginationLabelPropTypes} from './proptypes';

const PaginationLabel = React.forwardRef<HTMLDivElement, PaginationLabelProps>(
  ({children, element = 'PAGINATION_LABEL', ...props}, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        ref={ref}
        element={element}
        as="div"
        color="colorTextWeak"
        paddingBottom="space20"
        paddingTop="space20"
        textAlign="center"
        fontWeight="fontWeightNormal"
      >
        {children}
      </Text>
    );
  }
);

PaginationLabel.displayName = 'PaginationLabel';

PaginationLabel.propTypes = PaginationLabelPropTypes;

export {PaginationLabel};
