import * as React from 'react';
import {styled} from '@twilio-paste/styling-library';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Alert} from '@twilio-paste/alert';
import {Text} from '@twilio-paste/text';
import {SIDEBAR_WIDTH} from './constants';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {SiteMain, SiteMainInner} from './SiteMain';
import {SiteFooter} from './SiteFooter';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';

interface StyledSiteBodyProps {
  isPasteTheme: boolean;
}

const PSAAlertHeight = 44;
const PasteThemeAlertHeight = 46;

// The body area needs to be set to a specific height otherwise tabbing through the page
// will cause the browser to automatically scroll it upwards, hiding the header area behind
// the alerts.
const getSiteBodyHeight = (isPasteTheme: boolean): string => {
  let topOffset = PSAAlertHeight;
  if (isPasteTheme) {
    topOffset += PasteThemeAlertHeight;
  }

  return `calc(100vh - ${topOffset}px)`;
};

/* Wraps the entire doc site page */
const StyledSiteBody = styled.div<StyledSiteBodyProps>`
  display: flex;
  min-width: 240px;
  height: ${props => getSiteBodyHeight(props.isPasteTheme)};

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
      position="sticky"
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

const PasteThemeAlert: React.FC<{isPasteTheme: boolean}> = ({isPasteTheme}) => {
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
    <>
      <PsaAlert />
      <PasteThemeAlert isPasteTheme={isPasteTheme} />
      <StyledSiteBody isPasteTheme={isPasteTheme}>
        <Sidebar />
        <Box height="100vh" overflow="auto">
          <SiteHeader />
          <SiteMain id="site-main" tabIndex={-1} role="main">
            <ScrollAnchorIntoView />
            <SiteMainInner>{children}</SiteMainInner>
            <SiteFooter />
          </SiteMain>
        </Box>
      </StyledSiteBody>
    </>
  );
};
