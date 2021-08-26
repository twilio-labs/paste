import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {TBodyProps} from './types';
import {TBodyPropTypes} from './types';

const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(({element = 'TBODY', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="tbody"
      backgroundColor="colorBackgroundBody"
      element={element}
    />
  );
});

TBody.displayName = 'TBody';

if (process.env.NODE_ENV === 'development') {
  TBody.propTypes = TBodyPropTypes;
}

export {TBody};
