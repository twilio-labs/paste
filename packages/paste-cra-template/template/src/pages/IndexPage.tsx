import * as React from 'react';
import {styled} from '@twilio-paste/core/styling-library';
import {Box, BoxStyleProps} from '@twilio-paste/core/box';
import {Anchor} from '@twilio-paste/core/anchor';
import {Button} from '@twilio-paste/core/button';
import {Heading} from '@twilio-paste/core/heading';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';

interface FancyBoxProps {
  padding: BoxStyleProps['padding'];
}
const FancyBox: React.FC<FancyBoxProps> = styled(Box)({
  width: '40%',
});

export const IndexPage: React.FC = () => {
  return (
    <Box margin="space60">
      <Heading as="h1" variant="heading10">
        Start here.
      </Heading>
      <Button variant="primary">
        <PlusIcon decorative />
        Primary button
      </Button>
      <FancyBox padding="space90">Fancy box</FancyBox>
      <Anchor href="https://paste.twilio.design" showExternal>
        Paste Design System
      </Anchor>
    </Box>
  );
};
