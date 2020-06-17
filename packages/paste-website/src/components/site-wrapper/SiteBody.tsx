import * as React from 'react';
import {styled} from '@twilio-paste/styling-library';
import {Anchor, secureExternalLink} from '@twilio-paste/anchor';
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

const BLMAlertHeight = 44;
const PasteThemeAlertHeight = 46;

// The body area needs to be set to a specific height otherwise tabbing through the page
// will cause the browser to automatically scroll it upwards, hiding the header area behind
// the alerts.
const getSiteBodyHeight = (isPasteTheme: boolean): string => {
  let topOffset = BLMAlertHeight;
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

const BlackLivesMatterAlert: React.FC = () => {
  const tweetUrl = 'https://twitter.com/twilio/status/1266444750065934337';
  return (
    <Box
      backgroundColor="colorBackgroundInverse"
      paddingLeft="space70"
      paddingRight="space70"
      paddingTop="space40"
      paddingBottom="space30"
      role="status"
      display="flex"
      justifyContent="center"
      position="sticky"
      top="0"
      zIndex="zIndex20"
    >
      <Text as="span" fontWeight="fontWeightBold" color="colorTextBrandInverse" marginRight="space30">
        Black Lives Matter.
      </Text>
      <Text
        as="a"
        href={tweetUrl}
        {...secureExternalLink(tweetUrl)}
        color="colorTextBrandInverse"
        textDecoration="underline"
        _hover={{textDecoration: 'none'}}
      >
        We stand with the Black community
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
        <strong>WARNING:</strong> The Paste theme is an <em>extremely early</em> preview of future work!{' '}
        <Anchor
          href="https://docs.google.com/document/d/1H2Rj3NEmVSv0yxMBRjYOjruQllO__uj2-I_ibIoumZs/edit?usp=sharing"
          target="_blank"
        >
          Read the FAQ
        </Anchor>{' '}
        for more information.
      </Text>
    </Alert>
  );
};

export const SiteBody: React.FC = ({children}) => {
  const {theme: activeTheme} = useActiveSiteTheme();
  const isPasteTheme = activeTheme === 'default';
  return (
    <>
      <BlackLivesMatterAlert />
      <PasteThemeAlert isPasteTheme={isPasteTheme} />
      <StyledSiteBody isPasteTheme={isPasteTheme}>
        <Sidebar />
        <Box height="100vh" overflow="auto">
          <SiteHeader />
          <SiteMain id="site-main" tabIndex={0} role="main">
            <ScrollAnchorIntoView />
            <SiteMainInner>{children}</SiteMainInner>
            <SiteFooter />
          </SiteMain>
        </Box>
      </StyledSiteBody>
    </>
  );
};
