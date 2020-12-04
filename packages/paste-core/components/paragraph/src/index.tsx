import * as React from 'react';
import {Text} from '@twilio-paste/text';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  id?: never;
  className?: never;
  marginBottom?: 'space0';
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(({children, marginBottom}, ref) => {
  return (
    <Text
      as="p"
      marginBottom={marginBottom || 'space70'}
      fontSize="fontSize30"
      lineHeight="lineHeight40"
      fontWeight="fontWeightNormal"
      color="colorText"
      ref={ref}
    >
      {children}
    </Text>
  );
});

Paragraph.displayName = 'Paragraph';
export {Paragraph};
