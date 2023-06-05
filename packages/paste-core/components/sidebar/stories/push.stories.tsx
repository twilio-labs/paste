import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import {useUID} from '@twilio-paste/uid-library';

import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarCollapseButtonWrapper,
  SidebarPushContentWrapper,
  SidebarBetaBadge,
  SidebarNavigation,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Push',
};

export const Default: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="default">
        <SidebarHeader>
          <SidebarHeaderIconButton>
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarNavigation>
          <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
        </SidebarNavigation>
        <SidebarCollapseButtonWrapper>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarCollapseButtonWrapper>
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
  padding: false,
};

export const Compact: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton>
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarNavigation>
          <SidebarBetaBadge as="button">Beta</SidebarBetaBadge>
        </SidebarNavigation>
        <SidebarCollapseButtonWrapper>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarCollapseButtonWrapper>
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
  padding: false,
};
