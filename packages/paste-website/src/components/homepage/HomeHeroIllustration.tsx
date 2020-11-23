import * as React from 'react';
import {Box} from '@twilio-paste/box';
import lottie from 'lottie-web';
import HomeHeroIllu from '../../assets/illustrations/home_hero.svg';

const HomeHeroIllustration: React.FC = () => {
  const [fallbackHeroChild, setFallbackHeroChild] = React.useState<React.ReactNode>(null);
  const containerRef = React.useRef();

  React.useEffect(() => {
    import('../../assets/animations/HeroAnimation')
      .then(({HeroAnimation}) => {
        if (containerRef.current != null) {
          lottie.loadAnimation({
            // @ts-ignore
            container: containerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: HeroAnimation,
          });
          return true;
        }
        return false;
      })
      .catch(() => {
        setFallbackHeroChild(HomeHeroIllu);
      });
  }, []);

  return (
    <Box maxWidth="size70" marginLeft="auto" ref={containerRef}>
      {fallbackHeroChild}
    </Box>
  );
};

export {HomeHeroIllustration};
