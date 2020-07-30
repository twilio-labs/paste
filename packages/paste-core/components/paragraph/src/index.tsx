import * as React from 'react';
import { Text } from '@twilio-paste/text';

export interface ParagraphProps {
  id?: never;
  className?: never;
  marginBottom?: 'space0';
}

const Paragraph: React.FC<ParagraphProps> = ({ children, marginBottom }) => {
  return (
    <Text
      as="p"
      marginBottom={marginBottom || 'space70'}
      fontSize="fontSize30"
      lineHeight="lineHeight40"
      fontWeight="fontWeightNormal"
      color="colorText"
    >
      {children}
    </Text>
  );
};

Paragraph.displayName = 'Paragraph';
export { Paragraph };
