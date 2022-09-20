import * as React from 'react';
import {Anchor} from '@twilio-paste/core/anchor';
import {Stack} from '@twilio-paste/core/stack';

const AnchorPreview: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <Stack orientation="horizontal" spacing="space60">
      <Anchor href="#">Anchor text</Anchor>
      <Anchor href="#" showExternal>
        Anchor text
      </Anchor>
    </Stack>
  );
};

export {AnchorPreview};
