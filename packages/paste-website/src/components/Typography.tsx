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
      my="space50"
      lineHeight={variant === 'lead' ? 'lineHeight50' : 'lineHeight40'}
      fontSize={variant === 'lead' ? 'fontSize30' : undefined}
    >
      {children}
    </Text>
  );
};

export const UL: React.FC<{}> = props => {
  return (
    <Text as="ul" my="space50" lineHeight="lineHeight40">
      {props.children}
    </Text>
  );
};

export const OL: React.FC<{}> = props => {
  return (
    <Text as="ol" my="space50" lineHeight="lineHeight40">
      {props.children}
    </Text>
  );
};

export const LI: React.FC<{}> = props => {
  return (
    <Text as="li" ml="space60" lineHeight="lineHeight40">
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
