import * as React from 'react';
import {styled, themeGet, StylingGlobals} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
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
} from '../../constants';
import {docSearchStyles, docSearchVariable} from '../../styles/docSearch';
import {SidebarNavigation} from './sidebar/SidebarNavigation';

/* Wraps the main region and footer on the doc site page */
const StyledSiteBody = styled.div`
  min-width: 240px;
  background-color: ${themeGet('backgroundColors.colorBackgroundBody')};
  /* note: needed for scrollspy, removing position breaks site layout  */
  position: relative;
  scroll-behavior: smooth;
`;

const SiteMain: React.FC<React.PropsWithChildren<Omit<React.HTMLAttributes<HTMLElement>, 'color'>>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      element="SITE_MAIN"
      paddingTop={['space40', 'space140', 'space200']}
      paddingX={['space70', 'space200', 'space200']}
      backgroundColor="colorBackgroundBody"
      marginX="auto"
      maxWidth="size100"
      boxSizing="content-box"
      {...props}
    >
      {children}
    </Box>
  );
};

export const SiteBody: React.FC<React.PropsWithChildren> = ({children}) => {
  const {breakpointIndex} = useWindowSize();
  const themeObject = useTheme();
  const router = useRouter();

  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  /**
   * The Tokens List page has a sticky filter when scrolled, which means that we need to set a
   * CSS property called 'scrollPaddingTop' to adjust where the page scrolls to on jump links,
   * so the content doesn't appear underneath the sticky filter.
   *
   * We have a global array, 'TOKEN_STICKY_FILTER_HEIGHT' that returns a value for the height
   * of the filter (different breakpoints have different heights), and we use that, combined
   * with router awareness of our current location, to determine the value to set for scrollPaddingTop.
   *
   * We also have a default value set to optimize the scroll jump so there's some space above the content.
   */

  const defaultScrollOffset = 16;
  let scrollOffset = defaultScrollOffset;

  if (breakpointIndex !== undefined && TOKEN_LIST_PAGE_REGEX.test(router.pathname)) {
    scrollOffset = TOKEN_STICKY_FILTER_HEIGHT[breakpointIndex] + defaultScrollOffset;
  }

  return (
    <>
      <StylingGlobals styles={{...docSearchStyles({theme: themeObject}), ...docSearchVariable(themeObject)}} />
      <Sidebar
        variant="compact"
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
        {breakpointIndex === undefined || breakpointIndex > 1 ? (
          <>
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
          </>
        ) : null}
      </Sidebar>
      <SidebarPushContentWrapper collapsed={sidebarCollapsed}>
        <StyledSiteBody id="styled-site-body" css={{scrollPaddingTop: `${scrollOffset}px`}}>
          <SiteHeader />
          <SiteMain id={PASTE_DOCS_CONTENT_AREA}>{children}</SiteMain>
          <SiteFooter />
        </StyledSiteBody>
      </SidebarPushContentWrapper>
    </>
  );
};
