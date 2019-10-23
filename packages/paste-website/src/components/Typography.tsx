import * as React from 'react';
import styled from '@emotion/styled';
import {Text} from '@twilio-paste/text';
import {themeGet} from 'styled-system';

export interface PProps {
  variant?: 'default' | 'lead';
}
export const P: React.FC<PProps> = ({children, variant}) => {
  return (
    <Text
      as="p"
      marginTop="space50"
      marginBottom="space50"
      lineHeight={variant === 'lead' ? 'lineHeight30' : 'lineHeight20'}
      fontSize={variant === 'lead' ? 'fontSize40' : undefined}
    >
      {children}
    </Text>
  );
};

export const UL: React.FC<{}> = props => {
  return (
    <Text as="ul" marginTop="space50" marginBottom="space50" lineHeight="lineHeight20">
      {props.children}
    </Text>
  );
};

export const OL: React.FC<{}> = props => {
  return (
    <Text as="ol" marginTop="space50" marginBottom="space50" lineHeight="lineHeight20">
      {props.children}
    </Text>
  );
};

export const LI: React.FC<{}> = props => {
  return (
    <Text as="li" marginLeft="space60" lineHeight="lineHeight20">
      {props.children}
    </Text>
  );
};

export const InlineCode = styled.code<{}>`
  background-color: ${themeGet('backgroundColors.colorBackground')};
  border-radius: ${themeGet('radii.borderRadius20')};
  color: ${themeGet('textColors.colorText')};
  padding: ${themeGet('space.space20')} ${themeGet('space.space30')};
`;
