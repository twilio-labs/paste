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
  SidebarOverlayContentWrapper,
  SidebarBetaBadge,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Overlay',
};

export const Default: StoryFn = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label="main" collapsed={overlaySidebarExpanded} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>Twilio Console</SidebarHeader>
          <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="default">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </SidebarOverlayContentWrapper>
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
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label="main" collapsed={overlaySidebarExpanded} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader productIcon={<ProductFlexIcon size="sizeIcon20" decorative />}>Twilio Flex</SidebarHeader>
          <SidebarBetaBadge as="button">Beta</SidebarBetaBadge>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="compact">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </SidebarOverlayContentWrapper>
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
