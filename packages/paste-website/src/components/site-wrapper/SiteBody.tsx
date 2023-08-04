import * as React from 'react';
import {useRouter} from 'next/router';
import {StylingGlobals, type CSSObject} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';
import {useWindowSize} from '@twilio-paste/utils';
import {Box} from '@twilio-paste/box';
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarPushContentWrapper,
  SidebarFooter,
  SidebarCollapseButton,
} from '@twilio-paste/sidebar';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {Button} from '@twilio-paste/button';

import {SiteHeader} from './site-header';
import {SiteFooter} from './site-footer';
import {
  PASTE_DOCS_CONTENT_AREA,
  TOKEN_STICKY_FILTER_HEIGHT,
  TOKEN_LIST_PAGE_REGEX,
  PASTE_DOCS_TOPBAR,
  PASTE_DOCS_SIDEBAR_NAV,
  SITE_TOPBAR_HEIGHT,
} from '../../constants';
import {docSearchStyles, docSearchVariable} from '../../styles/docSearch';
import {SiteMain} from './SiteMain';
import {SidebarNavigation} from './sidebar/SidebarNavigation';

// height of the topbar plus a little extra whitespace
const defaultScrollOffset = `calc(${SITE_TOPBAR_HEIGHT}px + 24px)`;

const GlobalScrollBehaviourStyles = (scrollOffset = defaultScrollOffset): CSSObject => ({
  html: {
    scrollBehavior: 'smooth',
    // compensate for the sticky topbar, this offset allows for the jump to links to keep the headings in view when you jump to the section
    scrollPaddingTop: scrollOffset,
  },
});

export const SiteBody: React.FC<React.PropsWithChildren> = ({children}) => {
  const {breakpointIndex} = useWindowSize();
  const themeObject = useTheme();
  const router = useRouter();
  // sidebar is not collapsed by default, most common use case for desktop viewing
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const mobileSidebarCloseButton = React.useRef<HTMLButtonElement>(null);

  /**
   * Handle responsive sidebar collapse state for small screen sizes and initial render for SSR
   */
  React.useEffect(() => {
    // no breakpoints? No Javascript, do nothing, this is initial render
    if (breakpointIndex === undefined) {
      return;
    }
    // if the screen is small, collapse the sidebar on mount
    if (breakpointIndex === 0) {
      setSidebarCollapsed(true);
    } else {
      setSidebarCollapsed(false);
    }
    // track mounted state to help prevent flash of content on SSR
    setMounted(true);
  }, [breakpointIndex]);

  /**
   * Handle user focus on mobile sidebar open, place them in the overlaid Sidebar
   */
  React.useEffect(() => {
    if (!sidebarCollapsed && mobileSidebarCloseButton.current) {
      mobileSidebarCloseButton.current.focus();
    }
  }, [sidebarCollapsed]);

  /**
   * The tokens list page an extra sticky filter bar so the jump to scroll offset needs an extra offset.
   * its the masthead height + the sticky filter height
   */

  let scrollOffset = defaultScrollOffset;

  if (breakpointIndex !== undefined && TOKEN_LIST_PAGE_REGEX.test(router.pathname)) {
    scrollOffset = `calc(${TOKEN_STICKY_FILTER_HEIGHT[breakpointIndex]}px + ${defaultScrollOffset})`;
  }

  return (
    <>
      <StylingGlobals
        styles={{
          ...GlobalScrollBehaviourStyles(scrollOffset),
          ...docSearchStyles({theme: themeObject}),
          ...docSearchVariable(themeObject),
        }}
      />
      {/**
       * No judgement zone
       * To successfully handle a single sidebar that is responsive but also adaptive in it's state handling
       * We need to handle initial render for both mobile and desktop views because the sidebar has inverse initial state
       * - On mobile, the sidebar should start collapsed
       * - On desktop, the sidebar should start expanded
       * We then do a little trickery with opocity and responsive values to stop you seeing the state change flash
       * when it's not mounted we use a transparent sidebar on small screens, after it's mounted we switch to visible,
       * but transition it and delay the transistion start. For desktop, we start visible and never transition.
       */}
      <Box opacity={[!mounted ? '0' : '1', '1']} transitionDelay="50ms" transition="opacity 150ms ease">
        <Sidebar
          variant="default"
          collapsed={sidebarCollapsed}
          mainContentSkipLinkID={PASTE_DOCS_CONTENT_AREA}
          sidebarNavigationSkipLinkID={PASTE_DOCS_SIDEBAR_NAV}
          topbarSkipLinkID={PASTE_DOCS_TOPBAR}
        >
          <SidebarHeader>
            <SidebarHeaderIconButton as="a" href="/">
              <LogoTwilioIcon decorative={false} title="Twilio Paste" />
            </SidebarHeaderIconButton>
            <SidebarHeaderLabel>Twilio Paste</SidebarHeaderLabel>
          </SidebarHeader>
          <SidebarBody>
            <SidebarNavigation />
          </SidebarBody>
          {breakpointIndex === 0 && (
            <SidebarFooter>
              <SidebarCollapseButton
                i18nCollapseLabel="Collapse Site Navigation"
                i18nExpandLabel="Expand Site Navigation"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              />
            </SidebarFooter>
          )}
        </Sidebar>
      </Box>
      <SidebarPushContentWrapper id="styled-site-body">
        <SiteHeader sidebarMobileCollapsed={sidebarCollapsed} setSidebarMobileCollapsed={setSidebarCollapsed} />
        <SiteMain id={PASTE_DOCS_CONTENT_AREA}>{children}</SiteMain>
        <SiteFooter />
      </SidebarPushContentWrapper>
    </>
  );
};
