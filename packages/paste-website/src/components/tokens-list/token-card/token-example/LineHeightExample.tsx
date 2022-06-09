import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {TextProps} from '@twilio-paste/text';
import {ThemeShape} from '@twilio-paste/theme';

interface TextExampleProps extends Pick<TextProps, 'lineHeight'> {
  tokenName: string;
}

export const LineHeightExample: React.FC<TextExampleProps> = ({tokenName, lineHeight}) => {
  const lineHeightValue = tokenName ? tokenName.toString().match(/\d+/) : null;
  const fontSizeValue = `fontSize${lineHeightValue}` as keyof ThemeShape['fontSizes'];

  return (
    <Box backgroundColor="colorBackgroundStrong" flex={1} textAlign="center">
      <Text as="p" fontSize={fontSizeValue} lineHeight={lineHeight}>
        Ag
      </Text>
    </Box>
  );
};
