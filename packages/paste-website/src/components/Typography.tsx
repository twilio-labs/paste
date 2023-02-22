import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface PProps {
  variant?: 'default' | 'lead';
}
export const P: React.FC<React.PropsWithChildren<PProps>> = ({children, variant}) => {
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

export const Pre: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Text as="pre" fontSize="fontSize20" marginBottom="space70" lineHeight="lineHeight30">
      {props.children}
    </Text>
  );
};

export const InlineCode: React.FC<React.PropsWithChildren<BoxProps>> = (props) => {
  return (
    <Box
      as="code"
      backgroundColor="colorBackground"
      borderWidth="borderWidth10"
      borderColor="colorBorderWeaker"
      borderStyle="solid"
      borderRadius="borderRadius20"
      color="inherit"
      fontFamily="fontFamilyCode"
      fontSize="fontSize20"
      lineHeight="lineHeight20"
      paddingY="space10"
      paddingX="space20"
      {...props}
    />
  );
};
