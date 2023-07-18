import * as React from 'react';
import {StylingGlobals, type CSSObject} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';
import {useWindowSize} from '@twilio-paste/utils';
import {SidebarPushContentWrapper} from '@twilio-paste/sidebar';
import {useRouter} from 'next/router';

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
import {SiteMain} from './SiteMain';
import {SidebarDesktop} from './sidebar/SidebarDesktop';
import {SidebarMobile} from './sidebar/SidebarMobile';

// height of the topbar plus a little extra whitespace
const defaultScrollOffset = `calc(${SITE_MASTHEAD_HEIGHT}px + 24px)`;

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

  const [sidebarMobileCollapsed, setSidebarMobileCollapsed] = React.useState(true);

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
      <SidebarDesktop
        mainContentSkipLinkID={PASTE_DOCS_CONTENT_AREA}
        sidebarNavigationSkipLinkID={PASTE_DOCS_SIDEBAR_NAV}
        topbarSkipLinkID={PASTE_DOCS_TOPBAR}
      />
      <SidebarMobile
        collapsed={sidebarMobileCollapsed}
        setCollapsed={setSidebarMobileCollapsed}
        mainContentSkipLinkID={PASTE_DOCS_CONTENT_AREA}
        sidebarNavigationSkipLinkID={PASTE_DOCS_SIDEBAR_NAV}
        topbarSkipLinkID={PASTE_DOCS_TOPBAR}
      />
      <SidebarPushContentWrapper id="styled-site-body">
        <SiteHeader
          sidebarMobileCollapsed={sidebarMobileCollapsed}
          setSidebarMobileCollapsed={setSidebarMobileCollapsed}
        />
        <SiteMain id={PASTE_DOCS_CONTENT_AREA}>{children}</SiteMain>
        <SiteFooter />
      </SidebarPushContentWrapper>
    </>
  );
};
