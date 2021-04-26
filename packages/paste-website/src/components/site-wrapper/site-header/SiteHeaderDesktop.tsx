import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {GithubLink} from './GithubLink';
import {SiteHeaderSearch} from './SiteHeaderSearch';
import {SiteHeaderLogo} from './SiteHeaderLogo';

interface SiteHeaderDesktopProps {
  searchValue: string;
  onSearchChange: (newSearchValue: string) => void;
}

const SiteHeaderDesktop: React.FC<SiteHeaderDesktopProps> = ({searchValue, onSearchChange}) => {
  return (
    <Box
      as="header"
      display={['none', 'none', 'flex']}
      alignItems="center"
      backgroundColor="colorBackgroundPrimaryDarkest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <SiteHeaderLogo title="Paste" subtitle="UX Platform" />
      <Box
        display="flex"
        justifyContent="flex-end"
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
        <Stack orientation="horizontal" spacing="space60">
          <SiteHeaderSearch value={searchValue} onChange={onSearchChange} />
          <GithubLink />
        </Stack>
      </Box>
    </Box>
  );
};

export {SiteHeaderDesktop};
