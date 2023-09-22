import { Anchor } from '@twilio-paste/anchor';
import { Stack } from '@twilio-paste/stack';
import * as React from 'react';

import { LivePreview } from '../src/components/shortcodes/live-preview';
import { PreviewThemeContext } from '../src/context/PreviewThemeContext';

export const SmallLivePreview = (): React.ReactNode => {
  const [previewTheme, setPreviewTheme] = React.useState('twilio');
  return (
    <PreviewThemeContext.Provider value={{ theme: previewTheme, selectTheme: setPreviewTheme }}>
      <LivePreview scope={{ Anchor }} language="jsx">
        {`<Anchor href="/components">
  Go to Paste components
</Anchor>`}
      </LivePreview>
    </PreviewThemeContext.Provider>
  );
};
SmallLivePreview.parameters = {
  a11y: {
    // Cannot provide the textarea a label.
    disable: true,
  },
};

export const LargeLivePreview = (): React.ReactNode => {
  const [previewTheme, setPreviewTheme] = React.useState('twilio');
  return (
    <PreviewThemeContext.Provider value={{ theme: previewTheme, selectTheme: setPreviewTheme }}>
      <LivePreview scope={{ Anchor, Stack }} language="jsx">
        {`<Stack orientation="vertical" spacing="space50">
  <Anchor href="/components">
    Go to Paste components
  </Anchor>
  <Anchor href="/components">
    Go to Paste components
  </Anchor>
</Stack>`}
      </LivePreview>
    </PreviewThemeContext.Provider>
  );
};
LargeLivePreview.parameters = {
  a11y: {
    // Cannot provide the textarea a label.
    disable: true,
  },
};

export default {
  title: 'Website/LivePreview',
};
