import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {StoryFn} from '@storybook/react';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';

import {
  Sidebar,
  SidebarHeader,
  SidebarCollapseButton,
  SidebarCollapseButtonWrapper,
  SidebarPushContentWrapper,
  SidebarOverlayContentWrapper,
} from '../src';

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
        SIDEBAR_HEADER: {
          backgroundColor: 'colorBackgroundBrandHighlight',
        },
        SIDEBAR_HEADER_BUTTON: {
          backgroundColor: 'colorBackgroundBrandHighlightWeakest',
        },
        SIDEBAR_HEADER_ICON: {
          color: 'colorText',
        },
        SIDEBAR_HEADER_TEXT: {
          color: 'colorText',
        },
        SIDEBAR_COLLAPSE_BUTTON: {
          padding: 'space40',
        },
        SIDEBAR_COLLAPSE_BUTTON_WRAPPER: {
          padding: 'space40',
        },
        SIDEBAR_PUSH_CONTENT_WRAPPER: {
          backgroundColor: 'colorBackground',
          padding: 'space40',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar aria-label="main" collapsed={pushSidebarCollapsed} variant="default">
          <Stack orientation="vertical" spacing="space100">
            <SidebarHeader>Twilio Console</SidebarHeader>
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
    </CustomizationProvider>
  );
};
WithDefaultElementName.parameters = {
  a11y: {
    // false positives in CI due to hiding button behind sidebar when open
    disable: true,
  },
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
        SIDECAR_HEADER: {
          backgroundColor: 'colorBackgroundBrandHighlight',
        },
        SIDECAR_HEADER_BUTTON: {
          backgroundColor: 'colorBackgroundBrandHighlightWeakest',
        },
        SIDECAR_HEADER_ICON: {
          color: 'colorText',
        },
        SIDECAR_HEADER_TEXT: {
          color: 'colorText',
        },
        SIDECAR_COLLAPSE_BUTTON: {
          padding: 'space40',
        },
        SIDECAR_COLLAPSE_BUTTON_WRAPPER: {
          padding: 'space40',
        },
        SIDECAR_OVERLAY_WRAPPER: {
          backgroundColor: 'colorBackground',
          padding: 'space40',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar aria-label="main" collapsed={pushSidebarCollapsed} variant="compact" element="SIDECAR">
          <Stack orientation="vertical" spacing="space100">
            <SidebarHeader
              element="SIDECAR_HEADER"
              productIcon={<ProductFlexIcon size="sizeIcon20" decorative element="SIDECAR_HEADER_ICON" />}
            >
              Twilio Flex
            </SidebarHeader>
            <SidebarCollapseButtonWrapper element="SIDECAR_COLLAPSE_BUTTON_WRAPPER">
              <SidebarCollapseButton
                element="SIDECAR_COLLAPSE_BUTTON"
                onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
                i18nCollapseLabel="Close sidebar"
                i18nExpandLabel="Open sidebar"
              />
            </SidebarCollapseButtonWrapper>
          </Stack>
        </Sidebar>

        {/* Must wrap content area */}
        <SidebarOverlayContentWrapper
          collapsed={pushSidebarCollapsed}
          variant="compact"
          element="OVERLAY_SIDECAR_WRAPPER"
        >
          <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
            Toggle Push Sidebar
          </Button>
        </SidebarOverlayContentWrapper>
      </Box>
    </CustomizationProvider>
  );
};
WithCustomElementName.parameters = {
  a11y: {
    // false positives in CI due to hiding button behind sidebar when open
    disable: true,
  },
};
