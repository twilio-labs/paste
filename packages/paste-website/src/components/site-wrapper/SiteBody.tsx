import * as React from 'react';
import {styled, themeGet, StylingGlobals, type CSSObject} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';
import {useWindowSize} from '@twilio-paste/utils';
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarPushContentWrapper,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarCollapseButton,
} from '@twilio-paste/sidebar';
import {useRouter} from 'next/router';
import {LogoTwilioIcon} from '@twilio-paste/icons/esm/LogoTwilioIcon';

import {SiteHeader} from './site-header';
import {SiteFooter} from './site-footer';
import {
  PASTE_DOCS_CONTENT_AREA,
  TOKEN_STICKY_FILTER_HEIGHT,
  TOKEN_LIST_PAGE_REGEX,
  PASTE_DOCS_TOPBAR,
  PASTE_DOCS_SIDEBAR_NAV,
  SITE_MASTHEAD_HEIGHT,
} from '../../constants';
import {docSearchStyles, docSearchVariable} from '../../styles/docSearch';
import {SidebarNavigation} from './sidebar/SidebarNavigation';

// height of the topbar plus a little extra whitespace
const defaultScrollOffset = `calc(${SITE_MASTHEAD_HEIGHT}px + 24px)`;

const GlobalScrollBehaviourStyles = (scrollOffset = defaultScrollOffset): CSSObject => ({
  html: {
    scrollBehavior: 'smooth',
    // compensate for the sticky topbar, this offset allows for the jump to links to keep the headings in view when you jump to the section
    scrollPaddingTop: scrollOffset,
  },
});

/* Wraps the main region and footer on the doc site page */
const StyledSiteBody = styled.div`
  min-width: 240px;
  background-color: ${themeGet('backgroundColors.colorBackgroundBody')};
  /* note: needed for scrollspy, removing position breaks site layout  */
  position: relative;
`;

export const SiteBody: React.FC<React.PropsWithChildren> = ({children}) => {
  const {breakpointIndex} = useWindowSize();
  const themeObject = useTheme();
  const router = useRouter();

  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(breakpointIndex === undefined || breakpointIndex > 1);

  React.useEffect(() => {
    setSidebarCollapsed(breakpointIndex === undefined || breakpointIndex < 1);
  }, [breakpointIndex]);

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
        <SidebarFooter>
          <SidebarCollapseButton
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            i18nCollapseLabel="Close sidebar"
            i18nExpandLabel="Open sidebar"
          />
        </SidebarFooter>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={sidebarCollapsed}>
        <StyledSiteBody id="styled-site-body">
          <SiteHeader />
          <main id={PASTE_DOCS_CONTENT_AREA}>{children}</main>
          <SiteFooter />
        </StyledSiteBody>
      </SidebarPushContentWrapper>
    </>
  );
};
