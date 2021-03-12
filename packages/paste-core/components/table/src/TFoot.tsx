import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TFootProps, TFootPropTypes} from './types';

const TFoot = React.forwardRef<HTMLTableSectionElement, TFootProps>((props, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="tfoot"
      backgroundColor="colorBackground"
      borderTopStyle="solid"
      borderTopWidth="borderWidth20"
      borderTopColor="colorBorderWeaker"
    />
  );
});

TFoot.displayName = 'TFoot';

if (process.env.NODE_ENV === 'development') {
  TFoot.propTypes = TFootPropTypes;
}

export {TFoot};
