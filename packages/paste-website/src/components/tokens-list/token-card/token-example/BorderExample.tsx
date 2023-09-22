import * as React from 'react';
import { Box } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';

type BorderExampleProps = Pick<BoxProps, 'borderWidth'>;

export const BorderExample: React.FC<React.PropsWithChildren<BorderExampleProps>> = ({ borderWidth }) => {
  return (
    <Box
      borderRadius="borderRadius20"
      borderTopStyle="solid"
      borderTopColor="colorBorder"
      borderTopWidth={borderWidth}
      width="100%"
    />
  );
};
