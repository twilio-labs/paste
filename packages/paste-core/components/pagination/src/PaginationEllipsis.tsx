import * as React from 'react';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import type {PaginationEllipsisProps} from './types';
import {PaginationEllipsisPropTypes} from './proptypes';

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(({label, ...props}, ref) => {
  return (
    <Text
      {...safelySpreadTextProps(props)}
      ref={ref}
      aria-label={label}
      as="span"
      display="inline-block"
      paddingBottom="space20"
      paddingTop="space20"
    >
      &hellip;
    </Text>
  );
});

PaginationEllipsis.displayName = 'PaginationEllipsis';

PaginationEllipsis.propTypes = PaginationEllipsisPropTypes;

export {PaginationEllipsis};
