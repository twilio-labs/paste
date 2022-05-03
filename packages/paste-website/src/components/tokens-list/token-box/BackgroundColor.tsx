import * as React from 'react';
import {Box, BoxProps} from '@twilio-paste/box';

interface BackgroundColorProps {
  value: BoxProps['backgroundColor'];
}

export const BackgroundColor: React.FC<BackgroundColorProps> = ({value}) => {
  return <Box backgroundColor={value} size="sizeSquare110" />;
};
