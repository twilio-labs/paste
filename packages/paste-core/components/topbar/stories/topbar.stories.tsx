import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Button} from '@twilio-paste/button';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
import {Paragraph} from '@twilio-paste/paragraph';
import {
  Sidebar,
  SidebarPushContentWrapper,
  SidebarOverlayContentWrapper,
  SidebarHeader,
  SidebarCollapseButton,
  SidebarCollapseButtonWrapper,
} from '@twilio-paste/sidebar';

import {Topbar} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar',
};

const TonsOfContent: React.FC = () => {
  const content = [];
  for (let i = 0; i < 10; i++) {
    content.push(<Paragraph key={i}>Dummy content</Paragraph>);
  }
  return <>{content}</>;
};

export const PushDefaultTopbar: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
  return (
    <>
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
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Topbar>
          <Box display="flex" justifyContent="space-between">
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

export const PushCompactTopbar: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(true);
  return (
    <>
      <Sidebar aria-label="main" collapsed={pushSidebarCollapsed} variant="compact">
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
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Topbar>
          <Box display="flex" justifyContent="space-between">
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

export const OverlayDefaultTopbar: StoryFn = () => {
  const [overlaySidebarCollapsed, setOverlaySidebarCollapsed] = React.useState(false);
  return (
    <>
      <Sidebar aria-label="main" collapsed={overlaySidebarCollapsed} variant="default">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader productIcon={<ProductFlexIcon size="sizeIcon20" decorative />}>Twilio Flex</SidebarHeader>
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
          <Box display="flex" justifyContent="space-between">
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

export const OverlayCompactTopbar: StoryFn = () => {
  const [overlaySidebarCollapsed, setOverlaySidebarCollapsed] = React.useState(false);
  return (
    <>
      <Sidebar aria-label="main" collapsed={overlaySidebarCollapsed} variant="compact">
        <Stack orientation="vertical" spacing="space100">
          <SidebarHeader productIcon={<ProductFlexIcon size="sizeIcon20" decorative />}>Twilio Flex</SidebarHeader>
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
          <Box display="flex" justifyContent="space-between">
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
