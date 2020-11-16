import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {Box} from '@twilio-paste/box';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {SiteMain, SiteMainInner} from './SiteMain';
import {SiteFooter} from './site-footer/SiteFooter';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';

/* Wraps the entire doc site page */
const StyledSiteBody = styled.div`
  display: flex;
  min-width: 240px;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 1024px) {
      grid-template-columns: ${themeGet('sizes.sizeSidebar')} 1fr;
    }
  }
`;

export const SiteBody: React.FC = ({children}) => {
  return (
    <>
      <SiteHeader />
      <StyledSiteBody>
        <Sidebar />
        <Box minWidth="size0">
          <SiteMain role="main">
            <ScrollAnchorIntoView />
            <SiteMainInner>{children}</SiteMainInner>
            <SiteFooter />
          </SiteMain>
        </Box>
      </StyledSiteBody>
    </>
  );
};
