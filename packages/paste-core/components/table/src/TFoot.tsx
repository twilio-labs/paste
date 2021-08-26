import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {TFootProps} from './types';
import {TFootPropTypes} from './types';

const TFoot = React.forwardRef<HTMLTableSectionElement, TFootProps>(({element = 'TFOOT', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="tfoot"
      backgroundColor="colorBackground"
      borderTopStyle="solid"
      borderTopWidth="borderWidth20"
      borderTopColor="colorBorderWeaker"
      element={element}
    />
  );
});

TFoot.displayName = 'TFoot';

if (process.env.NODE_ENV === 'development') {
  TFoot.propTypes = TFootPropTypes;
}

export {TFoot};
