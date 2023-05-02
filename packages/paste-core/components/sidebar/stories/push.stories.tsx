import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';

import {
  Sidebar,
  SidebarHeader,
  SidebarCollapseButton,
  SidebarCollapseButtonWrapper,
  SidebarPushContentWrapper,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Push',
};

export const Default: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label="main" collapsed={pushSidebarCollapsed} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader productIcon={<ProductFlexIcon size="sizeIcon20" decorative />}>Twilio Flex</SidebarHeader>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
};
Default.parameters = {
  a11y: {
    // false positives in CI due to hiding button behind sidebar when open
    disable: true,
  },
  padding: false,
};

export const Compact: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label="main" collapsed={pushSidebarCollapsed} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>Twilio Console is the best console</SidebarHeader>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Box>
  );
};
Compact.parameters = {
  a11y: {
    // false positives in CI due to hiding button behind sidebar when open
    disable: true,
  },
  padding: false,
};
