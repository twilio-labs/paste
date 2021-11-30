import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {LivePreview} from '../src/components/shortcodes/live-preview';

export const SmallLivePreview = (): React.ReactNode => {
  return (
    <LivePreview scope={{Anchor}} language="jsx">
      {`<Anchor href="/components">
  Go to Paste components
</Anchor>`}
    </LivePreview>
  );
};

export const LargeLivePreview = (): React.ReactNode => {
  return (
    <LivePreview scope={{Anchor, Stack}} language="jsx">
      {`<Stack orientation="vertical" spacing="space50">
  <Anchor href="/components">
    Go to Paste components
  </Anchor>
  <Anchor href="/components">
    Go to Paste components
  </Anchor>
</Stack>`}
    </LivePreview>
  );
};

export default {
  title: 'Website/LivePreview',
};
