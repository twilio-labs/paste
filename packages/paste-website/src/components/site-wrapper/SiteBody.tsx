import * as React from 'react';
import {styled} from '@twilio-paste/styling-library';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Alert} from '@twilio-paste/alert';
import {Text} from '@twilio-paste/text';
import {SIDEBAR_WIDTH} from '../../constants';
import {SiteBodyContext} from './SiteBodyContext';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {SiteMain, SiteMainInner} from './SiteMain';
import {SiteFooter} from './SiteFooter';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';

/* Wraps the entire doc site page */
const StyledSiteBody = styled.div`
  display: flex;
  min-width: 240px;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: ${SIDEBAR_WIDTH} 1fr;
  }
`;

const PsaAlert: React.FC = () => {
  const externalUrl = 'https://en.wikipedia.org/wiki/John_Lewis_(civil_rights_leader)';
  return (
    <Box
      backgroundColor="colorBackgroundBodyInverse"
      paddingLeft="space70"
      paddingRight="space70"
      paddingTop="space40"
      paddingBottom="space30"
      role="status"
      display="flex"
      justifyContent="center"
      top="0"
      zIndex="zIndex90"
    >
      <Text as="span" fontWeight="fontWeightBold" color="colorTextBrandInverse" marginRight="space30">
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Text as="span" role="img" aria-label="Raised fist">
          ✊🏾
        </Text>{' '}
        Rest in power, John Lewis.
      </Text>
      <Text
        as="a"
        href={externalUrl}
        {...secureExternalLink(externalUrl)}
        color="colorTextBrandInverse"
        textDecoration="underline"
        _hover={{textDecoration: 'none'}}
      >
        We&rsquo;ll keep the good trouble going.
      </Text>
    </Box>
  );
};

const PasteThemeAlert: React.FC = () => {
  const {isPasteTheme} = React.useContext(SiteBodyContext);
  if (!isPasteTheme) {
    return null;
  }

  return (
    <Alert variant="warning">
      <Text as="p">
        <strong>Heads up!</strong> This is an <em>early</em> preview of the Unified Design Language. We only recommend
        using it for early adopters and testing.
      </Text>
    </Alert>
  );
};

export const SiteBody: React.FC = ({children}) => {
  const {theme: activeTheme} = useActiveSiteTheme();
  const isPasteTheme = activeTheme === 'default';
  return (
    <SiteBodyContext.Provider value={{isPasteTheme}}>
      <Box position="sticky" top="0" zIndex="zIndex20">
        <PsaAlert />
        <PasteThemeAlert />
      </Box>
      <StyledSiteBody>
        <Sidebar />
        <Box minWidth="size0">
          <SiteHeader />
          <SiteMain id="site-main" role="main">
            <ScrollAnchorIntoView />
            <SiteMainInner>{children}</SiteMainInner>
            <SiteFooter />
          </SiteMain>
        </Box>
      </StyledSiteBody>
    </SiteBodyContext.Provider>
  );
};
