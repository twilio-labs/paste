/*
 * Credits:
 * https://github.com/infiniteluke/react-reduce-motion
 * https://joshwcomeau.com/react/prefers-reduced-motion/#the-hook
 */
import * as React from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/*
 * Due to a bug in how terser is compiling these functions,
 * we're getting into situations where SSR is checking for window.matchMedia.
 * Wrapping the second return in an else fixes how terser compiles the code.
 */
/* eslint-disable no-else-return */
export const isRenderingOnServer = (() => {
  if (typeof window == 'undefined' || !window.location || !window.location.href || !window.matchMedia) {
    return true;
  }
  return false;
})();

// eslint-disable-next-line @typescript-eslint/ban-types
const getMediaQueryList = (): { matches: boolean; addListener: Function; removeListener: Function } => {
  if (isRenderingOnServer) {
    return {
      matches: true, // When SSR, true === disable animations
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: () => {},
    };
  }
  return window.matchMedia(REDUCED_MOTION_QUERY);
};
/* eslint-enable no-else-return */

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(getMediaQueryList().matches);

  React.useEffect((): (() => void) => {
    const mediaQueryList = getMediaQueryList();

    const handleChange = (): void => {
      setPrefersReducedMotion(mediaQueryList.matches);
    };

    mediaQueryList.addListener(handleChange);
    return () => {
      mediaQueryList.removeListener(handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
