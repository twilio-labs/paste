import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {SiteFooterIllustration} from './SiteFooterIllustration';
import {SiteFooterNav} from './SiteFooterNav';
import {SiteFooterTopAngle} from './SiteFooterTopAngle';
import {useNavigationContext} from '../../../context/NavigationContext';
import {SITE_CONTENT_MAX_WIDTH} from '../../../constants';

const SiteFooter: React.FC = () => {
  const {pathname} = useNavigationContext();
  return (
    <Box as="footer" margin="space70" marginTop="space200" paddingTop="space200" position="relative">
      {pathname === '/' && <SiteFooterTopAngle />}
      <Box
        borderRadius="borderRadius20"
        backgroundColor="colorBackgroundPrimaryStronger"
        marginTop={['space0', 'space0', 'space0', 'space0', 'space200']}
        paddingTop={['space0', 'space0', 'space0', 'space0', 'space200']}
      >
        <Box
          maxWidth={SITE_CONTENT_MAX_WIDTH}
          padding={['space90', 'space180']}
          marginTop="space10"
          marginLeft="auto"
          marginRight="auto"
          position="relative"
        >
          <SiteFooterIllustration />
          <SiteFooterNav />
        </Box>
      </Box>
    </Box>
  );
};

export {SiteFooter};
