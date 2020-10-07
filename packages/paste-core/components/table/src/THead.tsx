import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {THeadProps, THeadPropTypes} from './types';

const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>((props, ref) => {
  return <Box {...safelySpreadBoxProps(props)} ref={ref} as="thead" />;
});

THead.displayName = 'THead';

if (process.env.NODE_ENV === 'development') {
  THead.propTypes = THeadPropTypes;
}

export {THead};
