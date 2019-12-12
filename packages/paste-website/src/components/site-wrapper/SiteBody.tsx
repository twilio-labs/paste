import * as React from 'react';
import styled from '@emotion/styled';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {SIDEBAR_WIDTH} from './constants';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {SiteMain, SiteMainInner} from './SiteMain';
import {SiteFooter} from './SiteFooter';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';

interface StyledSiteBodyProps {
  activeTheme: string;
}

/* Wraps the entire doc site page */
const StyledSiteBody = styled.div<StyledSiteBodyProps>`
  position: absolute; /* Absolute so we can only scroll the inner area */
  top: ${props => (props.activeTheme === 'default' ? '32px' : '0')};
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  min-height: 100vh;
  min-width: 240px;
  height: 100vh;
  overflow: hidden;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: ${SIDEBAR_WIDTH} 1fr;
  }
`;

export const SiteBody: React.FC = ({children}) => {
  const {theme: activeTheme} = useActiveSiteTheme();
  return (
    <>
      {activeTheme === 'default' && (
        <Box
          backgroundColor="colorBackgroundWarningLightest"
          borderRadius="borderRadius20"
          padding="space20"
          paddingLeft="space40"
          paddingRight="space40"
        >
          <Text as="p" textAlign="center">
            <strong>WARNING:</strong> The Paste theme is an <em>extremely early</em> preview of future work!!!
          </Text>
        </Box>
      )}
      <StyledSiteBody activeTheme={activeTheme}>
        <Sidebar />
        <SiteHeader />
        <SiteMain id="site-main">
          <ScrollAnchorIntoView />
          <SiteMainInner>{children}</SiteMainInner>
          <SiteFooter />
        </SiteMain>
      </StyledSiteBody>
    </>
  );
};
