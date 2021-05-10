import * as React from 'react';
import {styled, themeGet, StylingGlobals} from '@twilio-paste/styling-library';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Sidebar} from './sidebar';
import {SiteHeader} from './site-header';
import {SiteFooter} from './site-footer';
import {useWindowSize} from '../../hooks/useWindowSize';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';
import {PASTE_DOCS_CONTENT_AREA, SITE_BREAKPOINTS} from '../../constants';
import {docSearchStyles} from '../../styles/docSearch';

/* Wraps the entire doc site page */
const StyledSiteBody = styled.div`
  display: flex;
  min-width: 240px;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: ${SITE_BREAKPOINTS[1]}) {
      grid-template-columns: ${themeGet('sizes.sizeSidebar')} 1fr;
    }
  }
`;

export const SiteBody: React.FC = ({children}) => {
  const {breakpointIndex} = useWindowSize();
  const themeObject = useTheme();

  return (
    <>
      <StylingGlobals styles={docSearchStyles({theme: themeObject})} />
      <SiteHeader />
      <StyledSiteBody>
        {breakpointIndex === undefined || breakpointIndex > 1 ? <Sidebar /> : null}
        <Box flex="1" minWidth="size0">
          <main id={PASTE_DOCS_CONTENT_AREA}>
            <ScrollAnchorIntoView />
            {children}
          </main>
          <SiteFooter />
        </Box>
      </StyledSiteBody>
    </>
  );
};
