import * as React from 'react';
import {Box} from '@twilio-paste/box';

const SiteFooterTopAngle: React.FC<{}> = () => {
  return (
    <Box borderRadius="borderRadius20" position="absolute" top={0} right={0} bottom={0} left={0}>
      <Box
        backgroundColor="colorBackgroundPrimaryDarker"
        borderRadius="borderRadius20"
        height="100%"
        left={0}
        position="relative"
        top={0}
        transform="skewY(-5deg)"
        transformOrigin="100% 0"
        width="100%"
      />
    </Box>
  );
};

export {SiteFooterTopAngle};
