import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
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
        <Topbar>Topbar</Topbar>
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
        <Topbar>Topbar</Topbar>
        <TonsOfContent />
      </SidebarPushContentWrapper>
    </>
  );
};

export const OverlayDefaultTopbar: StoryFn = () => {
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
      <SidebarOverlayContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Topbar>Topbar</Topbar>
        <TonsOfContent />
      </SidebarOverlayContentWrapper>
    </>
  );
};

export const OverlayCompactTopbar: StoryFn = () => {
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
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
      <SidebarOverlayContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Topbar>Topbar</Topbar>
        <TonsOfContent />
      </SidebarOverlayContentWrapper>
    </>
  );
};
