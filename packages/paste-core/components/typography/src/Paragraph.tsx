import * as React from 'react';
import {Text} from '@twilio-paste/text';

interface Paragraph {
  id?: never;
  className?: never;
  children: NonNullable<React.ReactNode>;
}

const handlePropValidation = ({children}: Paragraph): void => {
  if (children == null) {
    throw new Error(`[Paste: Typography Paragraph] Must have non-null children.`);
  }
};

const Paragraph: React.FC<Paragraph> = props => {
  handlePropValidation(props);

  return (
    <Text
      as="p"
      marginBottom="space70"
      fontSize="fontSize20"
      lineHeight="lineHeight20"
      fontWeight="fontWeightNormal"
      textColor="colorText"
    >
      {props.children}
    </Text>
  );
};

Paragraph.displayName = 'Paragraph';
export {Paragraph};
