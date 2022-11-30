import * as React from 'react';
import {styled, themeGet, StylingGlobals} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {useWindowSize} from '@twilio-paste/utils';

import {Sidebar} from './sidebar';
import {SiteHeader} from './site-header';
import {SiteFooter} from './site-footer';
import {
  PASTE_DOCS_CONTENT_AREA,
  SITE_BREAKPOINTS,
  TOKEN_STICKY_FILTER_HEIGHT,
  TOKEN_LIST_PAGE_REGEX,
} from '../../constants';
import {docSearchStyles, docSearchVariable} from '../../styles/docSearch';

/* Wraps the main region and footer on the doc site page */
const StyledSiteBody = styled.div`
  display: flex;
  min-width: 240px;
  background-color: ${themeGet('backgroundColors.colorBackgroundBody')};
  overflow: auto;
  /* note: needed for scrollspy, removing position breaks site layout  */
  position: relative;

  @supports (scroll-behavior: smooth) {
    scroll-behavior: smooth;
  }

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: ${SITE_BREAKPOINTS[1]}) {
      grid-template-columns: ${themeGet('sizes.sizeSidebar')} 1fr;
    }
  }
`;

export const SiteBody: React.FC<React.PropsWithChildren<{pathname: string}>> = ({children, pathname}) => {
  const {breakpointIndex} = useWindowSize();
  const themeObject = useTheme();

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

  if (breakpointIndex !== undefined && TOKEN_LIST_PAGE_REGEX.test(pathname)) {
    scrollOffset = TOKEN_STICKY_FILTER_HEIGHT[breakpointIndex] + defaultScrollOffset;
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <StylingGlobals styles={{...docSearchStyles({theme: themeObject}), ...docSearchVariable(themeObject)}} />
      <SiteHeader />
      <StyledSiteBody id="styled-site-body" css={{scrollPaddingTop: `${scrollOffset}px`}}>
        {breakpointIndex === undefined || breakpointIndex > 1 ? <Sidebar /> : null}
        <Box flex="1" minWidth="size0">
          <main id={PASTE_DOCS_CONTENT_AREA}>{children}</main>
          <SiteFooter />
        </Box>
      </StyledSiteBody>
    </Box>
  );
};
