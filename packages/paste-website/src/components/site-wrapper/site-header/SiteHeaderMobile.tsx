import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {HamburgerToggle} from './HamburgerToggle';
import {SiteHeaderLogo} from './SiteHeaderLogo';
import {MobileNavigation} from './SiteHeaderMobileNavigation';

interface SiteHeaderMobileProps {
  searchValue: string;
  onSearchChange: (newSearchValue: string) => void;
}

const SiteHeaderMobile: React.FC<SiteHeaderMobileProps> = (/* {searchValue, onSearchChange} */) => {
  const [sidebarOpen, onSidebarToggle] = React.useState(false);

  return (
    <Box
      as="aside"
      display={['flex', 'flex', 'none']}
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="colorBackgroundPrimaryDarkest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <Box margin="space60" display="flex">
        <Button variant="inverse" size="icon_small" onClick={() => onSidebarToggle(!sidebarOpen)}>
          <HamburgerToggle toggled={sidebarOpen} />
        </Button>
      </Box>
      <SiteHeaderLogo title="Paste" />
      <Box margin="space60" display="flex">
        <Button variant="inverse" size="icon_small" onClick={() => onSidebarToggle(!sidebarOpen)}>
          <HamburgerToggle toggled={sidebarOpen} />
        </Button>
        <MobileNavigation isOpen={sidebarOpen} handleClose={() => onSidebarToggle(false)} />
      </Box>
    </Box>
  );
};

export {SiteHeaderMobile};
