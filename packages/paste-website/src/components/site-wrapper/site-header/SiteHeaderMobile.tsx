import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {DocSearch} from '@docsearch/react';

import '@docsearch/css';
import {HamburgerToggle} from './HamburgerToggle';
import {SiteHeaderLogo} from './SiteHeaderLogo';
import {MobileNavigation} from './SiteHeaderMobileNavigation';
import {DOCSEARCHV3_APIKEY, DOCSEARCHV3_APPID, DOCSEARCHV3_INDEXNAME} from '../../../constants';

const SiteHeaderMobile = (): JSX.Element => {
  const [navigationOpen, setNavigationOpen] = React.useState(false);

  return (
    <Box
      as="header"
      display={['flex', 'flex', 'none']}
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="colorBackgroundBodyInverse"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <Box margin="space60">
        <DocSearch
          placeholder={`Try "button" or "token"`}
          appId={DOCSEARCHV3_APPID}
          indexName={DOCSEARCHV3_INDEXNAME || ''}
          apiKey={DOCSEARCHV3_APIKEY || ''}
        />
      </Box>
      <SiteHeaderLogo title="Paste" />
      <Box margin="space60">
        <Button
          aria-label="Open main navigation"
          variant="inverse"
          size="icon_small"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <HamburgerToggle toggled={navigationOpen} color="colorTextInverse" />
        </Button>
        <MobileNavigation isOpen={navigationOpen} onClose={() => setNavigationOpen(false)} />
      </Box>
    </Box>
  );
};

export {SiteHeaderMobile};
