import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {Sidebar} from './sidebar';
import {SiteHeader} from './site-header';
import {SiteFooter} from './site-footer';
import {useWindowSize} from '../../hooks/useWindowSize';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';
import {SITE_BREAKPOINTS} from '../../constants';

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

  return (
    <>
      <SiteHeader />
      <StyledSiteBody>
        {breakpointIndex === undefined || breakpointIndex > 1 ? <Sidebar /> : null}
        <Box as="main" role="main" flex="1" minWidth="size0">
          <ScrollAnchorIntoView />
          {children}
          <SiteFooter />
        </Box>
      </StyledSiteBody>
    </>
  );
};
