import * as React from 'react';
import {Text, TextProps, safelySpreadTextProps} from '@twilio-paste/text';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, Pick<TextProps, 'element'> {
  id?: never;
  className?: never;
  marginBottom?: 'space0';
}

const Paragraph: React.FC<ParagraphProps> = ({children, marginBottom, ...props}) => {
  return (
    <Text
      element="PARAGRAPH"
      {...safelySpreadTextProps(props)}
      as="p"
      marginBottom={marginBottom || 'space70'}
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      fontWeight="fontWeightNormal"
      color="colorText"
    >
      {children}
    </Text>
  );
};

Paragraph.displayName = 'Paragraph';
export {Paragraph};
