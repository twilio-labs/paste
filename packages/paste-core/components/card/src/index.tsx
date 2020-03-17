import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {PaddingProps, isSpaceTokenProp} from '@twilio-paste/style-props';

export interface CardProps extends React.HTMLAttributes<HTMLElement>, PaddingProps {}

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

if (process.env.NODE_ENV === 'development') {
  Card.propTypes = {
    padding: isSpaceTokenProp,
    paddingTop: isSpaceTokenProp,
    paddingRight: isSpaceTokenProp,
    paddingBottom: isSpaceTokenProp,
    paddingLeft: isSpaceTokenProp,
  };
}

Card.displayName = 'Card';

export {Card};
