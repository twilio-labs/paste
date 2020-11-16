import * as React from 'react';
import {Box} from '@twilio-paste/core/box';
import {SiteFooterIllustration} from './SiteFooterIllustration';
import {SiteFooterNav} from './SiteFooterNav';
import {SiteFooterTopAngle} from './SiteFooterTopAngle';

const SiteFooter: React.FC<{}> = () => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      margin="space70"
      paddingTop="space200"
      position="relative"
      overflow="hidden"
    >
      <SiteFooterTopAngle />
      <Box
        borderRadius="borderRadius20"
        marginTop={['space0', 'space0', 'space60', 'space160']}
        padding={['space90', 'space180']}
        paddingTop={['space90', 'space200']}
        position="relative"
      >
        <SiteFooterIllustration />
        <SiteFooterNav />
      </Box>
    </Box>
  );
};

export {SiteFooter};
