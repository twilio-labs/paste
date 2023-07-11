import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
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
  SidebarOverlayContentWrapper,
  SidebarBody,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Sidebar/Overlay',
};

export const Default: StoryFn = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(false);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box>
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={overlaySidebarExpanded}
        variant="default"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <div id={sidebarNavigationSkipLinkID} />
        </SidebarBody>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>
      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="default">
        <div id={topbarSkipLinkID} />
        <Box padding="space70" id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </Box>
      </SidebarOverlayContentWrapper>
    </Box>
  );
};
Default.parameters = {
  padding: false,
};

export const Compact: StoryFn = () => {
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(true);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        collapsed={overlaySidebarExpanded}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <div id={sidebarNavigationSkipLinkID} />
        </SidebarBody>
        <SidebarFooter>
          <Box padding="space70">
            <SidebarCollapseButton
              onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
              i18nCollapseLabel="Close sidebar"
              i18nExpandLabel="Open sidebar"
            />
          </Box>
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="compact">
        <div id={topbarSkipLinkID} />
        <div id={mainContentSkipLinkID}>
          <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
            Toggle Overlay Sidebar
          </Button>
        </div>
      </SidebarOverlayContentWrapper>
    </Box>
  );
};
Compact.parameters = {
  padding: false,
};
