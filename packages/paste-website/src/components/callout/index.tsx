import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Heading, asTags as HeadingAsTags} from '@twilio-paste/heading';
import {BorderColor} from '@twilio-paste/style-props';

type CalloutVariants = 'primary' | 'secondary' | 'warning';

const borderColorPartial = (variant?: CalloutVariants): BorderColor => {
  if (variant === 'secondary') {
    return 'colorBorderPrimaryDark';
  }
  if (variant === 'warning') {
    return 'colorBorderWarning';
  }
  return 'colorBorderPrimaryLight';
};

interface CalloutTitleProps {
  as: HeadingAsTags;
}

const CalloutTitle: React.FC<CalloutTitleProps> = ({as = 'h3', children}) => (
  <Heading as={as} variant="heading50">
    {children}
  </Heading>
);

const CalloutText: React.FC = ({children}) => (
  <Text as="p" marginTop="space30">
    {children}
  </Text>
);

interface CalloutProps {
  variant?: CalloutVariants;
}

const Callout: React.FC<CalloutProps> = ({variant, children}) => {
  return (
    <Box
      position="relative"
      borderWidth="borderWidth20"
      borderLeftWidth="borderWidth40"
      borderStyle="solid"
      borderColor={borderColorPartial(variant)}
      marginTop="space60"
      marginBottom="space60"
      paddingTop="space40"
      paddingRight="space60"
      paddingBottom="space40"
      paddingLeft="space60"
    >
      {children}
    </Box>
  );
};

Callout.defaultProps = {
  variant: 'primary',
};

export {Callout, CalloutTitle, CalloutText};
