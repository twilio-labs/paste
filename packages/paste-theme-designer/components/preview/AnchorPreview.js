import {Anchor} from '@twilio-paste/core/anchor';
import {Stack} from '@twilio-paste/core/stack';

const AnchorPreview = () => {
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
