import * as React from 'react';
import type {Properties} from 'csstype';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {TextProps} from '@twilio-paste/text';
import type {ThemeShape} from '@twilio-paste/theme';

interface TextExampleProps extends Pick<TextProps, 'lineHeight'> {
  tokenName: string;
  textColor: Properties['color'];
  highlightColor: Properties['backgroundColor'];
}

export const LineHeightExample: React.FC<TextExampleProps> = ({tokenName, lineHeight, textColor, highlightColor}) => {
  const lineHeightValue = tokenName ? tokenName.match(/\d+/) : null;
  const fontSizeValue = `fontSize${lineHeightValue}` as keyof ThemeShape['fontSizes'];

  return (
    <Box style={{backgroundColor: highlightColor}} flex={1} textAlign="center">
      <Text as="p" fontSize={fontSizeValue} lineHeight={lineHeight} style={{color: textColor}} aria-hidden>
        Ag
      </Text>
    </Box>
  );
};
