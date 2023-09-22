import * as React from 'react';
import { Box, type BoxProps } from '@twilio-paste/box';

import { getColorToken } from './helpers';
import type { UIStates } from './types';

export interface SliderThumbProps extends UIStates {
  children?: React.ReactNode;
  left?: string | number;
  element: BoxProps['element'];
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const SliderThumb: React.FC<SliderThumbProps> = ({ element = 'SLIDER_THUMB', left = '0%', ...props }) => {
  return (
    <Box
      {...props}
      backgroundColor={getColorToken(props)}
      boxShadow={props.dragging || props.focused ? 'shadowFocus' : 'none'}
      borderRadius="borderRadiusCircle"
      transition="background-color 150ms ease, box-shadow 150ms ease"
      width="20px"
      height="20px"
      marginTop="space10"
      cursor={props.disabled ? 'not-allowed' : 'pointer'}
      left={left}
      element={element}
    />
  );
};
SliderThumb.displayName = 'SliderThumb';
