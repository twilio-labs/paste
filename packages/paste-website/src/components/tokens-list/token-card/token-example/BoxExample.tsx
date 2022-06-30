import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

type BoxExampleProps = Pick<BoxProps, 'backgroundColor' | 'borderColor' | 'boxShadow' | 'borderRadius' | 'size'>;

export const BoxExample: React.FC<BoxExampleProps> = ({
  backgroundColor,
  borderColor,
  boxShadow,
  borderRadius = 'borderRadius20',
  size = 'sizeSquare110',
}) => {
  return (
    <Box
      aria-hidden="true"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderColor ? 'borderWidth20' : null}
      borderStyle={borderColor ? 'solid' : null}
      size={size}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    />
  );
};
