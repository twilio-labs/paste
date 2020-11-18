import * as React from 'react';
import {Box} from '@twilio-paste/box';
import HomeHero from '../../assets/illustrations/home_hero.svg';

const SiteHeroIllustration: React.FC = () => {
  return (
    <Box maxWidth="size70" marginLeft="auto">
      <HomeHero />
    </Box>
  );
};

export {SiteHeroIllustration};
