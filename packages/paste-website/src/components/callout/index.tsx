import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import {BorderColor} from '@twilio-paste/types';
import {Box} from '@twilio-paste/box';
import {CalloutProps, CalloutTitleProps, CalloutTextProps, CalloutVariants} from './types';

const borderColorPartial = (variant?: CalloutVariants): BorderColor => {
  if (variant === 'secondary') {
    return 'colorBorderPrimaryDark';
  }
  if (variant === 'warning') {
    return 'colorBorderWarning';
  }
  return 'colorBorderPrimaryLight';
};

const CalloutTitle: React.FC<CalloutTitleProps> = ({as = 'h3', children}) => (
  <Heading as={as} variant="heading50">
    {children}
  </Heading>
);

const CalloutText: React.FC<CalloutTextProps> = ({as = 'p', children, marginTop, marginBottom}) => (
  <Text as={as} marginTop={marginTop} marginBottom={marginBottom}>
    {children}
  </Text>
);

const Callout: React.FC<CalloutProps> = props => {
  return (
    <Box
      css={{
        borderLeftWidth: '8px',
      }}
      position="relative"
      borderWidth="borderWidth20"
      borderStyle="solid"
      borderColor={borderColorPartial(props.variant)}
      marginTop="space60"
      marginBottom="space60"
      paddingTop="space40"
      paddingRight="space60"
      paddingBottom="space40"
      paddingLeft="space60"
    >
      {props.children}
    </Box>
  );
};

Callout.defaultProps = {
  variant: 'primary',
};

export {Callout, CalloutTitle, CalloutText};
