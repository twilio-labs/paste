import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {GithubLink} from './GithubLink';
import {SiteHeaderDesktopSearch} from './SiteHeaderDesktopSearch';
import {SiteHeaderLogo} from './SiteHeaderLogo';
import {ThemeSwitcher} from '../../ThemeSwitcher';
import {useNavigationContext} from '../../../context/NavigationContext';

interface SiteHeaderDesktopProps {
  searchValue: string;
  onSearchChange: (newSearchValue: string) => void;
}

const SiteHeaderDesktop: React.FC<SiteHeaderDesktopProps> = ({searchValue, onSearchChange}) => {
  const {pathname} = useNavigationContext();
  // TODO: only keep the '/' check when we are done with the /new page
  const isHomepage = pathname === '/' || pathname === '/new' || pathname === '/new/';
  return (
    <Box
      as="aside"
      display={['none', 'none', 'flex']}
      alignItems="center"
      backgroundColor="colorBackgroundPrimaryDarkest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <SiteHeaderLogo title="Paste" subtitle="Design System" />
      <Box
        display="flex"
        justifyContent={isHomepage ? 'flex-end' : 'space-between'}
        alignItems="center"
        flexDirection="row"
        borderLeftColor="colorBorderInverseDarker"
        borderLeftStyle="solid"
        borderLeftWidth="borderWidth10"
        paddingTop="space60"
        paddingRight="space70"
        paddingBottom="space60"
        paddingLeft="space70"
        width="100%"
      >
        {isHomepage ? null : <ThemeSwitcher />}
        <Box marginTop="space0">
          <Stack orientation="horizontal" spacing="space60">
            <SiteHeaderDesktopSearch value={searchValue} onChange={onSearchChange} />
            <GithubLink />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export {SiteHeaderDesktop};
