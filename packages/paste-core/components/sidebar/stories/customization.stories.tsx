import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {StoryFn} from '@storybook/react';

import {Sidebar, PushSidebarContentWrapper, OverlaySidebarContentWrapper} from '../src';

// Fix for docs page examples overflowing the container
const styles = {
  transform: 'scale(1)',
  height: '100vh',
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Customization',
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
};

export const WithDefaultElementName: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        SIDEBAR: {
          backgroundColor: 'colorBackgroundBrand',
        },
        PUSH_SIDEBAR_CONTENT_WRAPPER: {
          backgroundColor: 'colorBackground',
          padding: 'space40',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar collapsed={pushSidebarCollapsed} variant="default">
          <Stack orientation="vertical" spacing="space100">
            <Box color="colorTextInverse">Sidebar header</Box>
            <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Push Sidebar
            </Button>
          </Stack>
        </Sidebar>

        {/* Must wrap content area */}
        <PushSidebarContentWrapper collapsed={pushSidebarCollapsed} variant="default">
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </PushSidebarContentWrapper>
      </Box>
    </CustomizationProvider>
  );
};

export const WithCustomElementName: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        SIDECAR: {
          backgroundColor: 'colorBackgroundBrand',
        },
        OVERLAY_SIDECAR_WRAPPER: {
          backgroundColor: 'colorBackground',
          padding: 'space40',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar collapsed={pushSidebarCollapsed} variant="compact" element="SIDECAR">
          <Stack orientation="vertical" spacing="space100">
            <Box color="colorTextInverse">Sidebar header</Box>
            <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Push Sidebar
            </Button>
          </Stack>
        </Sidebar>

        {/* Must wrap content area */}
        <OverlaySidebarContentWrapper
          collapsed={pushSidebarCollapsed}
          variant="compact"
          element="OVERLAY_SIDECAR_WRAPPER"
        >
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </OverlaySidebarContentWrapper>
      </Box>
    </CustomizationProvider>
  );
};
