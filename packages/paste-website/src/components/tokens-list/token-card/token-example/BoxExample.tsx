import { Box } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import * as React from 'react';

type BoxExampleProps = Pick<
  BoxProps,
  'borderColor' | 'boxShadow' | 'borderRadius' | 'size' | 'height' | 'backgroundColor'
>;

export const BoxExample: React.FC<React.PropsWithChildren<BoxExampleProps>> = ({
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
