import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Button} from '@twilio-paste/button';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
import {Paragraph} from '@twilio-paste/paragraph';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import {useUID} from '@twilio-paste/uid-library';
import {
  Sidebar,
  SidebarPushContentWrapper,
  SidebarOverlayContentWrapper,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarCollapseButtonWrapper,
} from '@twilio-paste/sidebar';

import {Topbar} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar',
};

const TonsOfContent: React.FC = () => {
  const content: React.ReactNode[] = [];
  for (let i = 0; i < 10; i++) {
    content.push(<Paragraph key={i}>Dummy content</Paragraph>);
  }
  return <>{content}</>;
};

export const PushDefaultTopbar: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
  return (
    <>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>
            <SidebarHeaderIconButton>
              <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Topbar>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <div>Topbar Left</div>

            <Button variant="secondary" size="small" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Sidebar
            </Button>
          </Box>
        </Topbar>
        <TonsOfContent />
      </SidebarPushContentWrapper>
    </>
  );
};
PushDefaultTopbar.parameters = {
  padding: false,
};

export const PushCompactTopbar: StoryFn = () => {
  const id = useUID();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);
  return (
    <>
      <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>
            <SidebarHeaderIconButton>
              <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Topbar>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <div>Topbar Left</div>
            <Button variant="secondary" size="small" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Sidebar
            </Button>
          </Box>
        </Topbar>
        <TonsOfContent />
      </SidebarPushContentWrapper>
    </>
  );
};
PushCompactTopbar.parameters = {
  padding: false,
};

export const OverlayDefaultTopbar: StoryFn = () => {
  const id = useUID();
  const [overlaySidebarCollapsed, setOverlaySidebarCollapsed] = React.useState(false);
  return (
    <>
      <Sidebar aria-label={id} collapsed={overlaySidebarCollapsed} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>
            <SidebarHeaderIconButton>
              <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>
      <SidebarOverlayContentWrapper collapsed={overlaySidebarCollapsed} variant="default">
        <Topbar>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <div>Topbar Left</div>
            <Button
              variant="secondary"
              size="small"
              onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
            >
              Toggle Sidebar
            </Button>
          </Box>
        </Topbar>
        <TonsOfContent />
      </SidebarOverlayContentWrapper>
    </>
  );
};
OverlayDefaultTopbar.parameters = {
  padding: false,
};

export const OverlayCompactTopbar: StoryFn = () => {
  const id = useUID();
  const [overlaySidebarCollapsed, setOverlaySidebarCollapsed] = React.useState(false);
  return (
    <>
      <Sidebar aria-label={id} collapsed={overlaySidebarCollapsed} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader>
            <SidebarHeaderIconButton>
              <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarCollapseButtonWrapper>
            <SidebarCollapseButton
              onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarCollapseButtonWrapper>
        </Stack>
      </Sidebar>
      <SidebarOverlayContentWrapper collapsed={overlaySidebarCollapsed} variant="compact">
        <Topbar>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <div>Topbar Left</div>
            <Button
              variant="secondary"
              size="small"
              onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
            >
              Toggle Sidebar
            </Button>
          </Box>
        </Topbar>
        <TonsOfContent />
      </SidebarOverlayContentWrapper>
    </>
  );
};
OverlayCompactTopbar.parameters = {
  padding: false,
};
