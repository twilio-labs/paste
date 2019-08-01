import * as React from 'react';
import {Text} from '@twilio-paste/text';

interface LabelProps {
  htmlFor: string;
}
export const Label: React.FC<LabelProps> = ({children, htmlFor}) => {
  return (
    <Text as="label" display="block" htmlFor={htmlFor} my="space20">
      {children}
    </Text>
  );
};
