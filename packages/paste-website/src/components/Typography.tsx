import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';

export interface PProps {
  variant?: 'default' | 'lead';
}
export const P: React.FC<PProps> = ({children, variant}) => {
  return (
    <Text
      as="p"
      marginBottom="space70"
      lineHeight={variant === 'lead' ? 'lineHeight40' : 'lineHeight30'}
      fontSize={variant === 'lead' ? 'fontSize40' : undefined}
    >
      {children}
    </Text>
  );
};

export const Pre: React.FC = (props) => {
  return (
    <Text as="pre" fontSize="fontSize20" marginBottom="space70" lineHeight="lineHeight30">
      {props.children}
    </Text>
  );
};

export const InlineCode: React.FC = (props) => {
  return (
    <Box
      as="code"
      backgroundColor="colorBackground"
      borderRadius="borderRadius20"
      color="colorText"
      fontFamily="fontFamilyCode"
      fontSize="fontSize20"
      lineHeight="lineHeight20"
      paddingY="space20"
      paddingX="space30"
      {...props}
    />
  );
};
