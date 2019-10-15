import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {ParagraphProps} from './types';

const handlePropValidation = ({children}: ParagraphProps): void => {
  if (children == null) {
    throw new Error(`[Paste: Typography Paragraph] Must have non-null children.`);
  }
};

const Paragraph: React.FC<ParagraphProps> = props => {
  handlePropValidation(props);

  return (
    <Text
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
