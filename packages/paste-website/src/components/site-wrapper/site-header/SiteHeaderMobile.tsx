import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';
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
      as="header"
      display={['flex', 'flex', 'none']}
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="colorBackgroundPrimaryDarkest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <Box margin="space60">
        <Button variant="inverse" size="icon_small" onClick={() => onSidebarToggle(!sidebarOpen)}>
          <Box paddingX="space20">
            <SearchIcon size="sizeIcon50" decorative={false} title="Search all documentation" />
          </Box>
        </Button>
      </Box>
      <SiteHeaderLogo title="Paste" />
      <Box margin="space60">
        <Button
          aria-label={sidebarOpen ? 'Close main navigation' : 'Open main navigation'}
          variant="inverse"
          size="icon_small"
          onClick={() => onSidebarToggle(!sidebarOpen)}
        >
          <HamburgerToggle
            aria-hidden
            toggled={sidebarOpen}
            color={sidebarOpen ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
          />
        </Button>
        <MobileNavigation isOpen={sidebarOpen} handleClose={() => onSidebarToggle(false)} />
      </Box>
    </Box>
  );
};

export {SiteHeaderMobile};
