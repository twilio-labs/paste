import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {Text} from '@twilio-paste/text';

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

export const Pre: React.FC<{}> = props => {
  return (
    <Text as="pre" marginBottom="space70" lineHeight="lineHeight20">
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
