import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {SiteFooterIllustration} from './SiteFooterIllustration';
import {SiteFooterNav} from './SiteFooterNav';
import {SiteFooterTopAngle} from './SiteFooterTopAngle';
import {SITE_CONTENT_MAX_WIDTH} from '../../../constants';

const SiteFooter: React.FC<{}> = () => {
  return (
    <Box margin="space70" marginTop="space200" paddingTop="space200" position="relative">
      <SiteFooterTopAngle />
      <Box borderRadius="borderRadius20" backgroundColor="colorBackgroundPrimaryDarker">
        <Box maxWidth={SITE_CONTENT_MAX_WIDTH} padding={['space90', 'space180']} marginTop="space10">
          <SiteFooterIllustration />
          <SiteFooterNav />
        </Box>
      </Box>
    </Box>
  );
};

export {SiteFooter};
