import * as React from 'react';
import {Box} from '@twilio-paste/core/box';
import {SiteHeaderLogo} from './SiteHeaderLogo';

const TopBar: React.FC = () => {
  return (
    <Box
      as="header"
      alignItems="center"
      display="flex"
      backgroundColor="colorBackgroundPrimaryStrongest"
      position="sticky"
      top="0px"
      zIndex="zIndex80"
    >
      <SiteHeaderLogo title="Paste" subtitle="Theme Designer" />
    </Box>
  );
};

export {TopBar};
