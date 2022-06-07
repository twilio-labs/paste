import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

interface BackgroundColorProps {
  value: string;
  name: string;
}

const borderProps = {
  borderWidth: 'borderWidth10' as BoxProps['borderWidth'],
  borderColor: 'colorBorderWeak' as BoxProps['borderColor'],
  borderStyle: 'solid' as BoxProps['borderStyle'],
};

export const BackgroundColor: React.FC<BackgroundColorProps> = ({name, value}) => {
  return (
    <Box
      aria-hidden="true"
      backgroundColor={value as BoxProps['backgroundColor']}
      size="sizeSquare110"
      borderRadius="borderRadius20"
      {...(name === 'colorBackgroundBody' ? borderProps : {})}
    />
  );
};
