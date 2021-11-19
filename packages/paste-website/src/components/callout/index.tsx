import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {asTags as HeadingAsTags} from '@twilio-paste/heading';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';

type CalloutVariants = 'info' | 'warning';

interface CalloutTitleProps {
  as: HeadingAsTags;
}

const CalloutTitle: React.FC<CalloutTitleProps> = ({as = 'h3', children}) => (
  <Text as={as} color="currentColor" marginBottom="space30" lineHeight="lineHeight40">
    {children}
  </Text>
);

const CalloutText: React.FC = ({children}) => (
  <Text as="p" color="currentColor" lineHeight="lineHeight40" marginBottom="space40">
    {children}
  </Text>
);

interface CalloutProps {
  variant?: CalloutVariants;
}

const Callout: React.FC<CalloutProps> = ({variant, children}) => {
  const backgroundColor = variant === 'warning' ? 'colorBackgroundWarningWeakest' : 'colorBackgroundNeutralWeakest';
  const color = variant === 'warning' ? 'colorTextWarning' : 'colorTextNeutral';
  const icon =
    variant === 'warning' ? (
      <WarningIcon decorative={false} title="Warning icon" />
    ) : (
      <NeutralIcon decorative={false} title="Information icon" />
    );

  return (
    <Box
      display="flex"
      marginTop="space60"
      marginBottom="space60"
      paddingTop="space70"
      paddingRight="space70"
      paddingBottom="space70"
      paddingLeft="space70"
      borderRadius="borderRadius20"
      backgroundColor={backgroundColor}
      color={color}
    >
      <Box marginRight="space40" paddingTop="space10">
        {icon}
      </Box>
      <Box flex="1">{children}</Box>
    </Box>
  );
};

Callout.defaultProps = {
  variant: 'info',
};

export {Callout, CalloutTitle, CalloutText};
