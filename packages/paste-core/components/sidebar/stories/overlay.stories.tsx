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
  SidebarBetaBadge,
  SidebarBody,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Sidebar/Sidebar/Overlay',
};

export const Default: StoryFn = () => {
  const id = useUID();
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(false);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={overlaySidebarExpanded} variant="default">
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
        </SidebarBody>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="default">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </SidebarOverlayContentWrapper>
    </Box>
  );
};
Default.parameters = {
  padding: false,
};

export const Compact: StoryFn = () => {
  const id = useUID();
  const [overlaySidebarExpanded, setOverlaySidebarExpanded] = React.useState(true);

  return (
    <Box>
      {/* Can be placed anywhere - position fixed */}
      <Sidebar aria-label={id} collapsed={overlaySidebarExpanded} variant="compact">
        <SidebarHeader>
          <SidebarHeaderIconButton as="a" href="#">
            <LogoTwilioIcon size="sizeIcon20" decorative={false} title="Go to Console homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Console</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarBody>
          <SidebarBetaBadge as="button">Beta</SidebarBetaBadge>
        </SidebarBody>
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarOverlayContentWrapper collapsed={overlaySidebarExpanded} variant="compact">
        <Button variant="primary" onClick={() => setOverlaySidebarExpanded(!overlaySidebarExpanded)}>
          Toggle Overlay Sidebar
        </Button>
      </SidebarOverlayContentWrapper>
    </Box>
  );
};
Compact.parameters = {
  padding: false,
};
