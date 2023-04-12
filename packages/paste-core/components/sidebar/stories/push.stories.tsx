import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';

import {Sidebar, PushSidebarContentWrapper} from '../src';

// Fix for docs page examples overflowing the container
const styles = {};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Push',
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export const Default: StoryFn = () => {
  const [pushSidebarExpanded, setPushSidebarExpanded] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={pushSidebarExpanded} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
            Toggle Push Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <PushSidebarContentWrapper collapsed={pushSidebarExpanded} variant="default">
        <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
          Toggle Push Sidebar
        </Button>
      </PushSidebarContentWrapper>
    </Box>
  );
};

export const DefaultInverse: StoryFn = () => {
  const [pushSidebarExpanded, setPushSidebarExpanded] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={pushSidebarExpanded} variant="inverse">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
            Toggle Push Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <PushSidebarContentWrapper collapsed={pushSidebarExpanded} variant="inverse">
        <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
          Toggle Push Sidebar
        </Button>
      </PushSidebarContentWrapper>
    </Box>
  );
};

export const Compact: StoryFn = () => {
  const [pushSidebarExpanded, setPushSidebarExpanded] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={pushSidebarExpanded} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
            Toggle Push Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <PushSidebarContentWrapper collapsed={pushSidebarExpanded} variant="compact">
        <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
          Toggle Push Sidebar
        </Button>
      </PushSidebarContentWrapper>
    </Box>
  );
};

export const CompactInverse: StoryFn = () => {
  const [pushSidebarExpanded, setPushSidebarExpanded] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={pushSidebarExpanded} variant="compact_inverse">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
            Toggle Push Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <PushSidebarContentWrapper collapsed={pushSidebarExpanded} variant="compact_inverse">
        <Button variant="primary" onClick={() => setPushSidebarExpanded(!pushSidebarExpanded)}>
          Toggle Push Sidebar
        </Button>
      </PushSidebarContentWrapper>
    </Box>
  );
};
