import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {ValueOf} from '@twilio-paste/types';
import {useReducedMotion} from '@twilio-paste/animation-library';
import lottie from 'lottie-web';
import VisibilitySensor from 'react-visibility-sensor';
import HomeHeroIllu from '../../assets/illustrations/home_hero.svg';

const IllustrationStates = {
  UNINITIALIZED: 0, // This is SSR too
  STATIC: 1,
  DYNAMIC: 2,
};
type IllustrationStatesType = ValueOf<typeof IllustrationStates>;

const IllustrationChildren: React.FC<{state: IllustrationStatesType}> = ({state}) => {
  switch (state) {
    case IllustrationStates.STATIC:
      return <HomeHeroIllu />;
    // null for dynamic because lottie injects children
    case IllustrationStates.DYNAMIC:
    case IllustrationStates.UNINITIALIZED:
    default:
      return null;
  }
};

/* Multiple states:
 * - On load, render nothing (null).
 * - When in view, render dynamic.
 * - If dynamic fails, render static.
 * - If prefers reduced motion, render static.
 */
const HomeHeroIllustration: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = React.useRef();
  const [illustrationState, setIllustrationState] = React.useState(IllustrationStates.UNINITIALIZED);

  const handleVisibilityChange = (isVisible: boolean): void => {
    if (illustrationState === IllustrationStates.UNINITIALIZED && isVisible) {
      setIllustrationState(prefersReducedMotion ? IllustrationStates.STATIC : IllustrationStates.DYNAMIC);
    }
  };

  React.useEffect(() => {
    if (!prefersReducedMotion && illustrationState === IllustrationStates.DYNAMIC) {
      // Dynamically import the animation so we don't load a huge json blob for everyone
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
          setIllustrationState(IllustrationStates.STATIC);
        });
    }
  }, [illustrationState, prefersReducedMotion]);

  // Need a minHeight for when we render null children so that the visibilityObserver triggers
  // Also to prevent height fouc when the animation loads
  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility minTopValue={15}>
      <Box
        aria-hidden="true"
        maxWidth="size70"
        height={['400px', '400px', '480px']}
        marginLeft="auto"
        ref={containerRef}
      >
        <IllustrationChildren state={illustrationState} />
      </Box>
    </VisibilitySensor>
  );
};

export {HomeHeroIllustration};
