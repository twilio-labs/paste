import * as React from 'react';
import type {Properties} from 'csstype';
import {Text} from '@twilio-paste/text';
import type {TextProps} from '@twilio-paste/text';
import type {LineHeight} from '@twilio-paste/style-props';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';

type TextExampleProps = Pick<TextProps, 'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'style'> & {
  textColor?: Properties['color'];
};

export const TextExample: React.FC<TextExampleProps> = ({fontFamily, fontSize, fontWeight, color, textColor}) => {
  let lineHeight: LineHeight = 'lineHeight70';

  if (fontSize != null && typeof fontSize === 'string') {
    lineHeight = `lineHeight${fontSize.replace('fontSize', '')}` as LineHeight;
  }

  return (
    <>
      <ScreenReaderOnly>Example text: </ScreenReaderOnly>
      <Text
        as="p"
        fontFamily={fontFamily}
        fontSize={fontSize || 'fontSize60'}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        style={{color: textColor}}
        color={color}
        aria-hidden
      >
        Ag
      </Text>
    </>
  );
};
