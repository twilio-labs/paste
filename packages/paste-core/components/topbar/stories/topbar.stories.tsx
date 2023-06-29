import * as React from 'react';
import {Button} from '@twilio-paste/button';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';
import {UserIcon} from '@twilio-paste/icons/esm/UserIcon';
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
  SidebarFooter,
} from '@twilio-paste/sidebar';
import {
  UserDialog,
  UserDialogUserInfo,
  UserDialogUserName,
  UserDialogUserEmail,
  UserDialogContainer,
} from '@twilio-paste/user-dialog';

import {Topbar, TopbarActions} from '../src';

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
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
        <Topbar>
          <TopbarActions justify="start">Topbar Left</TopbarActions>
          <TopbarActions>
            <UserDialogContainer name="nora krantz" icon={UserIcon} baseId="i-am-user-dialog">
              <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
                <UserDialogUserInfo>
                  <UserDialogUserName>Name</UserDialogUserName>
                  <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
                </UserDialogUserInfo>
              </UserDialog>
            </UserDialogContainer>
            <Button variant="secondary" size="small" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Sidebar
            </Button>
          </TopbarActions>
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
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="compact">
        <Topbar>
          <TopbarActions justify="start">Topbar Left</TopbarActions>
          <TopbarActions>
            <Button variant="secondary" size="small" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Sidebar
            </Button>
          </TopbarActions>
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
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>
      <SidebarOverlayContentWrapper collapsed={overlaySidebarCollapsed} variant="default">
        <Topbar>
          <TopbarActions justify="start">Topbar Left</TopbarActions>
          <TopbarActions>
            <Button
              variant="secondary"
              size="small"
              onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
            >
              Toggle Sidebar
            </Button>
          </TopbarActions>
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
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>
      <SidebarOverlayContentWrapper collapsed={overlaySidebarCollapsed} variant="compact">
        <Topbar>
          <TopbarActions justify="start">Topbar Left</TopbarActions>
          <TopbarActions>
            <Button
              variant="secondary"
              size="small"
              onClick={() => setOverlaySidebarCollapsed(!overlaySidebarCollapsed)}
            >
              Toggle Sidebar
            </Button>
          </TopbarActions>
        </Topbar>
        <TonsOfContent />
      </SidebarOverlayContentWrapper>
    </>
  );
};
OverlayCompactTopbar.parameters = {
  padding: false,
};
