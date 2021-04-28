import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Stack} from '@twilio-paste/stack';
import type {asTags as HeadingAsTags} from '@twilio-paste/heading';
import {Heading} from '@twilio-paste/heading';
import type {BorderColor} from '@twilio-paste/style-props';

type CalloutVariants = 'primary' | 'secondary' | 'warning';

const borderColorPartial = (variant?: CalloutVariants): BorderColor => {
  if (variant === 'secondary') {
    return 'colorBorderPrimaryStrong';
  }
  if (variant === 'warning') {
    return 'colorBorderWarning';
  }
  return 'colorBorderPrimaryWeak';
};

interface CalloutTitleProps {
  as: HeadingAsTags;
}

const CalloutTitle: React.FC<CalloutTitleProps> = ({as = 'h3', children}) => (
  <Heading as={as} variant="heading50">
    {children}
  </Heading>
);

const CalloutText: React.FC = ({children}) => <Text as="p">{children}</Text>;

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
      <Stack orientation="vertical" spacing="space30">
        {children}
      </Stack>
    </Box>
  );
};

Callout.defaultProps = {
  variant: 'primary',
};

export {Callout, CalloutTitle, CalloutText};
