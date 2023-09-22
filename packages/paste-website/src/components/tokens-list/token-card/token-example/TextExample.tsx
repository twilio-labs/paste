import * as React from 'react';
import type { Properties } from 'csstype';
import { Text } from '@twilio-paste/text';
import type { TextProps } from '@twilio-paste/text';
import type { LineHeight } from '@twilio-paste/style-props';
import { ScreenReaderOnly } from '@twilio-paste/screen-reader-only';

type TextExampleProps = Pick<TextProps, 'fontFamily' | 'fontSize' | 'fontWeight' | 'style' | 'color'> & {
  textShadow?: Properties['textShadow'];
};

export const TextExample: React.FC<React.PropsWithChildren<TextExampleProps>> = ({
  fontFamily,
  fontSize = 'fontSize60',
  fontWeight,
  color,
  textShadow,
}) => {
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
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        color={color}
        css={{
          textShadow,
        }}
        aria-hidden
      >
        Ag
      </Text>
    </>
  );
};
