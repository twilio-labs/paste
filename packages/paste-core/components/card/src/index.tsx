import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {PaddingProps} from '@twilio-paste/style-props';

export interface CardFooterProps extends React.HTMLAttributes<''>, PaddingProps {}

const CardFooter: React.FunctionComponent<CardFooterProps> = ({
  children,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop = 'space40',
  ...props
}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="footer"
      borderTopWidth="borderWidth10"
      borderBottomWidth="borderWidth0"
      borderLeftWidth="borderWidth0"
      borderRightWidth="borderWidth0"
      marginTop="space40"
      padding={padding}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      borderStyle="solid"
    >
      {children}
    </Box>
  );
};

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
      borderColor="colorBorder"
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

export {Card, CardFooter};
