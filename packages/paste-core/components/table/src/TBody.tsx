import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TBodyProps, TBodyPropTypes} from './types';

const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>((props, ref) => {
  return <Box {...safelySpreadBoxProps(props)} ref={ref} as="tbody" backgroundColor="colorBackgroundBody" />;
});

TBody.displayName = 'TBody';

if (process.env.NODE_ENV === 'development') {
  TBody.propTypes = TBodyPropTypes;
}

export {TBody};
