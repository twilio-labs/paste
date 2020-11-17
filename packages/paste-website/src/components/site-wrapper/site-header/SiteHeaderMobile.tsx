import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {HamburgerToggle} from './HamburgerToggle';
import {SiteHeaderLogo} from './SiteHeaderLogo';
import {MobileNavigation} from './SiteHeaderMobileNavigation';

interface SiteHeaderMobileProps {
  searchValue: string;
  onSearchChange: (newSearchValue: string) => void;
}

const SiteHeaderMobile: React.FC<SiteHeaderMobileProps> = ({searchValue, onSearchChange}) => {
  const [sidebarOpen, onSidebarToggle] = React.useState(false);

  return (
    <Box
      as="aside"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="colorBackgroundPrimaryDarkest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <Box margin="space60" display="flex">
        <HamburgerToggle toggled={sidebarOpen} onToggle={onSidebarToggle} />
      </Box>
      <SiteHeaderLogo title="Paste" />
      <Box margin="space60" display="flex">
        <HamburgerToggle toggled={sidebarOpen} onToggle={onSidebarToggle} />
        <MobileNavigation isOpen={sidebarOpen} handleClose={() => onSidebarToggle(false)} />
      </Box>
    </Box>
  );
};

export {SiteHeaderMobile};
