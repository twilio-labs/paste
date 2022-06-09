import * as React from 'react';
import {Text} from '@twilio-paste/text';
import type {TextProps} from '@twilio-paste/text';
import type {LineHeight} from '@twilio-paste/style-props';

type TextExampleProps = Pick<TextProps, 'fontFamily' | 'fontSize' | 'fontWeight' | 'color'>;

export const TextExample: React.FC<TextExampleProps> = ({fontFamily, fontSize, fontWeight, color}) => {
  let lineHeight: LineHeight = 'lineHeight70';
  if (fontSize != null && typeof fontSize === 'string') {
    lineHeight = `lineHeight${fontSize.replace('fontSize', '')}` as LineHeight;
  }

  return (
    <Text
      as="p"
      fontFamily={fontFamily}
      fontSize={fontSize || 'fontSize60'}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
    >
      Ag
    </Text>
  );
};
