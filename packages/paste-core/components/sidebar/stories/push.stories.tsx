import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';

import {Sidebar, PushSidebarContentWrapper} from '../src';

// Fix for docs page examples overflowing the container
const styles = {
  transform: 'scale(1)',
  height: '100vh',
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Push',
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export const Default: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label="main" collapsed={pushSidebarCollapsed} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <Box color="colorTextInverse">Sidebar header</Box>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <PushSidebarContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </PushSidebarContentWrapper>
    </Box>
  );
};
Default.parameters = {
  a11y: {
    // false positives in CI due to hiding button behind sidebar when open
    disable: true,
  },
};

export const Compact: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label="main" collapsed={pushSidebarCollapsed} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <Box color="colorTextInverse">Sidebar header</Box>
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <PushSidebarContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </PushSidebarContentWrapper>
    </Box>
  );
};
Compact.parameters = {
  a11y: {
    // false positives in CI due to hiding button behind sidebar when open
    disable: true,
  },
};
