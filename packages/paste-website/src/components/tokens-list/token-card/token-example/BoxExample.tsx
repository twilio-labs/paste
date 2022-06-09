import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

type BoxExampleProps = Pick<BoxProps, 'backgroundColor' | 'borderColor' | 'boxShadow' | 'borderRadius'>;

export const BoxExample: React.FC<BoxExampleProps> = ({
  backgroundColor,
  borderColor,
  boxShadow,
  borderRadius = 'borderRadius20',
}) => {
  const appliedBorderColor = borderColor
    ? borderColor
    : backgroundColor === ('rgb(255, 255, 255)' as BoxProps['backgroundColor']) // todo: better logic here
    ? 'colorBorderWeak'
    : null;

  console.log('bg', backgroundColor);

  return (
    <Box
      aria-hidden="true"
      backgroundColor={backgroundColor}
      borderColor={appliedBorderColor}
      borderWidth={appliedBorderColor ? 'borderWidth20' : null}
      borderStyle={appliedBorderColor ? 'solid' : null}
      size="sizeSquare110"
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    />
  );
};
