import * as React from 'react';
import {Text} from '@twilio-paste/text';

interface Paragraph {
  id?: never;
  className?: never;
}

const Paragraph: React.FC<Paragraph> = props => {
  return (
    <Text
      as="p"
      marginBottom="space70"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      fontWeight="fontWeightNormal"
      textColor="colorText"
    >
      {props.children}
    </Text>
  );
};

Paragraph.displayName = 'Paragraph';
export {Paragraph};
