import * as React from 'react';
import {styled, themeGet} from '@twilio-paste/styling-library';
import {secureExternalLink} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {SiteMain, SiteMainInner} from './SiteMain';
import {SiteFooter} from './SiteFooter';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';

/* Wraps the entire doc site page */
const StyledSiteBody = styled.div`
  display: flex;
  min-width: 240px;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: ${themeGet('sizes.sizeSidebar')} 1fr;
  }
`;

const PsaAlert: React.FC = () => {
  const externalUrl = 'https://en.wikipedia.org/wiki/Ruth_Bader_Ginsburg';
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
        Thank you, RBG.
      </Text>
      <Text
        as="a"
        href={externalUrl}
        {...secureExternalLink(externalUrl)}
        color="colorTextBrandInverse"
        textDecoration="underline"
        _hover={{textDecoration: 'none'}}
      >
        May her memory be a blessing and a revolution.
      </Text>
    </Box>
  );
};

export const SiteBody: React.FC = ({children}) => {
  return (
    <>
      <Box position="sticky" top="0" zIndex="zIndex20">
        <PsaAlert />
      </Box>
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
