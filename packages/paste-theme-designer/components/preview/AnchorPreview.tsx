import { Anchor } from '@twilio-paste/core/anchor';
import { Stack } from '@twilio-paste/core/stack';
import * as React from 'react';

const AnchorPreview = (): JSX.Element => {
  return (
    <Stack orientation="horizontal" spacing="space60">
      <Anchor href="#">Anchor text</Anchor>
      <Anchor href="#" showExternal>
        Anchor text
      </Anchor>
    </Stack>
  );
};

export { AnchorPreview };
