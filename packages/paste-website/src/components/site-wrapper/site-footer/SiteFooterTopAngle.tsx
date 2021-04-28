import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useSlantedSkew} from '../../SlantedBackgroundGradient';

const SiteFooterTopAngle: React.FC = () => {
  const [skewOffset] = useSlantedSkew();

  return (
    <Box
      backgroundColor="colorBackgroundPrimaryStronger"
      borderRadius="borderRadius20"
      height="75%"
      position="absolute"
      top={skewOffset}
      right={0}
      bottom={0}
      left={0}
      transform="skewY(-9deg)"
      transformOrigin="85% 0"
    />
  );
};

export {SiteFooterTopAngle};
