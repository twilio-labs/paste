import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
import type { BoxProps } from '@twilio-paste/box';
import type { ThemeShape } from '@twilio-paste/theme';

type LineHeightExampleProps = Pick<BoxProps, 'lineHeight' | 'color' | 'backgroundColor'> & {
  tokenName: string;
};

export const LineHeightExample: React.FC<React.PropsWithChildren<LineHeightExampleProps>> = ({
  tokenName,
  lineHeight,
  color,
  backgroundColor,
}) => {
  const lineHeightValue = tokenName ? tokenName.match(/\d+/) : null;
  const fontSizeValue = `fontSize${lineHeightValue}` as keyof ThemeShape['fontSizes'];

  return (
    <Box backgroundColor={backgroundColor} flex={1} textAlign="center">
      <Text as="p" fontSize={fontSizeValue} lineHeight={lineHeight} color={color} aria-hidden>
        Ag
      </Text>
    </Box>
  );
};
