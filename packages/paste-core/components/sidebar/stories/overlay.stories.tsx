import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';

import {Sidebar, OverlaySidebarContentWrapper} from '../src';

// Fix for docs page examples overflowing the container
const styles = {};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Overlay',
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export const Default: StoryFn = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={overlaySidebarExpanded} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <OverlaySidebarContentWrapper collapsed={overlaySidebarExpanded} variant="default">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </OverlaySidebarContentWrapper>
    </Box>
  );
};

export const DefaultInverse: StoryFn = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={overlaySidebarExpanded} variant="inverse">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <OverlaySidebarContentWrapper collapsed={overlaySidebarExpanded} variant="inverse">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </OverlaySidebarContentWrapper>
    </Box>
  );
};

export const Compact: StoryFn = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={overlaySidebarExpanded} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <OverlaySidebarContentWrapper collapsed={overlaySidebarExpanded} variant="compact">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </OverlaySidebarContentWrapper>
    </Box>
  );
};

export const CompactInverse: StoryFn = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={overlaySidebarExpanded} variant="compact_inverse">
        <Stack orientation="vertical" spacing="space100">
          <div>Sidebar header</div>
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <OverlaySidebarContentWrapper collapsed={overlaySidebarExpanded} variant="compact_inverse">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </OverlaySidebarContentWrapper>
    </Box>
  );
};
