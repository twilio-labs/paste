import * as React from 'react';
import type {Properties} from 'csstype';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

type BoxExampleProps = Pick<
  BoxProps,
  'borderColor' | 'boxShadow' | 'borderRadius' | 'size' | 'height' | 'backgroundColor'
> & {
  highlightColor?: Properties['backgroundColor'];
};

export const BoxExample: React.FC<BoxExampleProps> = ({
  highlightColor,
  backgroundColor,
  borderColor,
  boxShadow,
  borderRadius = 'borderRadius20',
  size = 'sizeSquare110',
  height,
}) => {
  return (
    <Box
      aria-hidden="true"
      backgroundColor={backgroundColor}
      style={{backgroundColor: highlightColor}}
      borderColor={borderColor}
      borderWidth={borderColor ? 'borderWidth20' : null}
      borderStyle={borderColor ? 'solid' : null}
      height={height || size}
      width={size}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    />
  );
};
