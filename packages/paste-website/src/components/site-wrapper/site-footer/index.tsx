import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {SiteFooterIllustration} from './SiteFooterIllustration';
import {SiteFooterNav} from './SiteFooterNav';
import {SiteFooterTopAngle} from './SiteFooterTopAngle';
import {SITE_CONTENT_MAX_WIDTH} from '../../../constants';

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
        maxWidth={SITE_CONTENT_MAX_WIDTH}
        marginLeft="auto"
        marginRight="auto"
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
