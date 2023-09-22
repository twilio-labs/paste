import * as React from 'react';
import { Button } from '@twilio-paste/button';
import { Box } from '@twilio-paste/box';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';
import type { StoryFn } from '@storybook/react';
import { ProductFlexIcon } from '@twilio-paste/icons/esm/ProductFlexIcon';
// ONLY for storybook stacked view not to complain on duplicates. aria-label should be carefully selected strings
import { useUID } from '@twilio-paste/uid-library';

import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarPushContentWrapper,
  SidebarOverlayContentWrapper,
  SidebarBetaBadge,
  SidebarBody,
  SidebarNavigation,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Sidebar/Customization',
};

export const WithDefaultElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

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
        SIDEBAR_FOOTER: {
          boxShadow: 'shadowBorder',
        },
        SIDEBAR_COLLAPSE_BUTTON: {
          padding: 'space60',
        },
        SIDEBAR_PUSH_CONTENT_WRAPPER: {
          backgroundColor: 'colorBackground',
          padding: 'space40',
        },
        SIDEBAR_BETA_BADGE: {
          padding: 'space40',
        },
        SIDEBAR_NAVIGATION: {
          background: 'none',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar
          sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
          topbarSkipLinkID={topbarSkipLinkID}
          mainContentSkipLinkID={mainContentSkipLinkID}
          collapsed={pushSidebarCollapsed}
          variant="default"
        >
          <SidebarHeader>
            <SidebarHeaderIconButton as="button">
              <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarBody>
            <SidebarNavigation aria-label="main">
              <></>
            </SidebarNavigation>
            <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
          </SidebarBody>
          <SidebarFooter>
            <SidebarCollapseButton
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarFooter>
        </Sidebar>

        {/* Must wrap content area */}
        <SidebarPushContentWrapper collapsed={pushSidebarCollapsed} variant="default">
          <div id={topbarSkipLinkID} />
          <div id={mainContentSkipLinkID}>
            <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Push Sidebarrrr
            </Button>
          </div>
        </SidebarPushContentWrapper>
      </Box>
    </CustomizationProvider>
  );
};
WithDefaultElementName.parameters = {
  padding: false,
};

export const WithCustomElementName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  const [pushSidebarCollapsed, setPushSidebarCollapsed] = React.useState(false);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

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
        SIDECAR_COLLAPSE_BUTTON_WRAPPER: {
          boxShadow: 'shadowBorder',
        },
        SIDECAR_COLLAPSE_BUTTON: {
          padding: 'space60',
        },
        SIDECAR_OVERLAY_WRAPPER: {
          backgroundColor: 'colorBackground',
          padding: 'space40',
        },
        SIDECAR_BETA_BADGE: {
          padding: 'space40',
        },
        SIDECAR_NAVIGATION: {
          background: 'none',
        },
      }}
    >
      <Box>
        {/* Can be placed anywhere - position fixed */}
        <Sidebar
          sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
          topbarSkipLinkID={topbarSkipLinkID}
          mainContentSkipLinkID={mainContentSkipLinkID}
          collapsed={pushSidebarCollapsed}
          variant="compact"
          element="SIDECAR"
        >
          <SidebarHeader element="SIDECAR_HEADER">
            <SidebarHeaderIconButton as="button" element="SIDECAR_HEADER_ICON_BUTTON">
              <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel element="SIDECAR_HEADER_LABEL">Twilio Flex</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarBody element="SIDECAR_NAVIGATION">
            <SidebarNavigation aria-label="main">
              <></>
            </SidebarNavigation>
            <SidebarBetaBadge as="button" element="SIDECAR_BETA_BADGE">
              Beta
            </SidebarBetaBadge>
          </SidebarBody>
          <SidebarFooter element="SIDECAR_COLLAPSE_BUTTON_WRAPPER">
            <SidebarCollapseButton
              element="SIDECAR_COLLAPSE_BUTTON"
              onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </SidebarFooter>
        </Sidebar>

        {/* Must wrap content area */}
        <SidebarOverlayContentWrapper
          collapsed={pushSidebarCollapsed}
          variant="compact"
          element="OVERLAY_SIDECAR_WRAPPER"
        >
          <div id={topbarSkipLinkID} />
          <div id={mainContentSkipLinkID}>
            <Button variant="primary" onClick={() => setPushSidebarCollapsed(!pushSidebarCollapsed)}>
              Toggle Push Sidebar
            </Button>
          </div>
        </SidebarOverlayContentWrapper>
      </Box>
    </CustomizationProvider>
  );
};
WithCustomElementName.parameters = {
  padding: false,
};
