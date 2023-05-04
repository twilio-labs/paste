import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
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
  SidebarOverlayContentWrapper,
  SidebarBetaBadge,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Customization',
};

export const WithDefaultElementName: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const id = useUID();
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
          padding: 'space40',
        },
        SIDEBAR_HEADER_ICON_BUTTON: {
          padding: 'space40',
        },
        SIDEBAR_HEADER_LABEL: {
          fontWeight: 'fontWeightNormal',
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
        SIDEBAR_BETA_BADGE: {
          padding: 'space40',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="default">
          <Stack orientation="vertical" spacing="space100">
            <SidebarHeader>
              <SidebarHeaderIconButton>
                <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
              </SidebarHeaderIconButton>
              <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
            </SidebarHeader>
            <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
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
  padding: false,
};

export const WithCustomElementName: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const id = useUID();
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
          padding: 'space40',
        },
        SIDECAR_HEADER_ICON_BUTTON: {
          padding: 'space40',
        },
        SIDECAR_HEADER_LABEL: {
          padding: 'space40',
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
        SIDECAR_BETA_BADGE: {
          padding: 'space40',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar aria-label={id} collapsed={pushSidebarCollapsed} variant="compact" element="SIDECAR">
          <Stack orientation="vertical" spacing="space100">
            <SidebarHeader element="SIDECAR_HEADER">
              <SidebarHeaderIconButton element="SIDECAR_HEADER_ICON_BUTTON">
                <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
              </SidebarHeaderIconButton>
              <SidebarHeaderLabel element="SIDECAR_HEADER_LABEL">Twilio Flex</SidebarHeaderLabel>
            </SidebarHeader>
            <SidebarBetaBadge as="button" element="SIDECAR_BETA_BADGE">
              Beta
            </SidebarBetaBadge>
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
  padding: false,
};
