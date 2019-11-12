import * as React from 'react';
import styled from '@emotion/styled';
import {Text} from '@twilio-paste/text';
import {themeGet} from '@styled-system/theme-get';

export interface PProps {
  variant?: 'default' | 'lead';
}
export const P: React.FC<PProps> = ({children, variant}) => {
  return (
    <Text
      as="p"
      marginTop="space50"
      marginBottom="space50"
      lineHeight={variant === 'lead' ? 'lineHeight40' : 'lineHeight30'}
      fontSize={variant === 'lead' ? 'fontSize40' : undefined}
    >
      {children}
    </Text>
  );
};

export const UL: React.FC<{}> = props => {
  return (
    <Text as="ul" marginTop="space50" marginBottom="space50">
      {props.children}
    </Text>
  );
};

export const OL: React.FC<{}> = props => {
  return (
    <Text as="ol" marginTop="space50" marginBottom="space50">
      {props.children}
    </Text>
  );
};

export const LI: React.FC<{}> = props => {
  return (
    <Text as="li" marginLeft="space60" marginBottom="space20">
      {props.children}
    </Text>
  );
};

export const InlineCode = styled.code<{}>`
  background-color: ${themeGet('backgroundColors.colorBackground')};
  border-radius: ${themeGet('radii.borderRadius20')};
  color: ${themeGet('textColors.colorText')};
  font-size: ${themeGet('fontSizes.fontSize30')};
  line-height: ${themeGet('lineHeights.lineHeight20')};
  padding: ${themeGet('space.space20')} ${themeGet('space.space30')};
`;
