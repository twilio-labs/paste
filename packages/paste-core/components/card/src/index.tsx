import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {PaddingProps} from '@twilio-paste/style-props';

export interface CardProps extends React.HTMLAttributes<''>, PaddingProps {}

const Card: React.FunctionComponent<CardProps> = ({
  children,
  padding = 'space60',
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  ...props
}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="article"
      borderWidth="borderWidth20"
      borderColor="colorBorderLight"
      borderStyle="solid"
      borderRadius="borderRadius20"
      padding={padding}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      backgroundColor="colorBackgroundBody"
    >
      {children}
    </Box>
  );
};

export {Card};
