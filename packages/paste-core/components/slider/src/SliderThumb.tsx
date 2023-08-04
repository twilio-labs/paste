import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';

import {getColorToken} from './helpers';
import type {UIStates} from './types';

export interface SliderThumbProps extends UIStates {
  children?: React.ReactNode;
  left?: string | number;
  element: BoxProps['element'];
}
export const SliderThumb: React.FC<SliderThumbProps> = ({element = 'SLIDER_THUMB', left = '0%', ...props}) => {
  return (
    <Box
      {...props}
      backgroundColor={getColorToken(props)}
      boxShadow={props.dragging || props.focused ? 'shadowFocus' : 'none'}
      borderRadius="borderRadiusCircle"
      width="20px"
      height="20px"
      marginTop="space10"
      cursor="pointer"
      left={left}
      element={element}
    />
  );
};
SliderThumb.displayName = 'SliderThumb';
