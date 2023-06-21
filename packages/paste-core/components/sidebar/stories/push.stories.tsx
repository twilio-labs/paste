import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import type {StoryFn} from '@storybook/react';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import {useUID} from '@twilio-paste/uid-library';

import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarPushContentWrapper,
  SidebarBetaBadge,
  SidebarNavigation,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Sidebar/Push',
};

export const Default: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>
            <SidebarHeaderIconButton as="a" href="#">
              <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarNavigation>
            <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
          </SidebarNavigation>
          <SidebarFooter>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarFooter>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Box padding="space70">
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};
Default.parameters = {
  padding: false,
};

export const Compact: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>
            <SidebarHeaderIconButton as="a" href="#">
              <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarNavigation>
            <SidebarBetaBadge as="button">Beta</SidebarBetaBadge>
          </SidebarNavigation>
          <SidebarFooter>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarFooter>
        </Stack>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Box padding="space70">
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </Box>
      </SidebarPushContentWrapper>
    </Box>
  );
};
Compact.parameters = {
  padding: false,
};
