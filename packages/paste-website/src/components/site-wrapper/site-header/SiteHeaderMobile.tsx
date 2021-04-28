import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';
import {HamburgerToggle} from './HamburgerToggle';
import {SiteHeaderLogo} from './SiteHeaderLogo';
import {MobileNavigation} from './SiteHeaderMobileNavigation';
import {MobileSearch} from './SiteHeaderMobileSearch';

interface SiteHeaderMobileProps {
  searchValue: string;
  onSearchChange: (newSearchValue: string) => void;
}

const SiteHeaderMobile: React.FC<SiteHeaderMobileProps> = ({searchValue, onSearchChange}) => {
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <Box
      as="header"
      display={['flex', 'flex', 'none']}
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="colorBackgroundPrimaryStrongest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <Box margin="space60">
        <Button variant="inverse" size="icon_small" onClick={() => setSearchOpen(!searchOpen)}>
          <Box paddingX="space20">
            <SearchIcon size="sizeIcon50" decorative={false} title="Search all documentation" />
          </Box>
        </Button>
        <MobileSearch
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          value={searchValue}
          onChange={onSearchChange}
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
          <HamburgerToggle
            aria-hidden
            toggled={navigationOpen}
            color={navigationOpen ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'}
          />
        </Button>
        <MobileNavigation isOpen={navigationOpen} onClose={() => setNavigationOpen(false)} />
      </Box>
    </Box>
  );
};

export {SiteHeaderMobile};
