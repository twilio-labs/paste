import {useState, useEffect} from 'react';
import {useTheme} from '@twilio-paste/theme';
import findIndex from 'lodash.findindex';
import debounce from 'lodash.debounce';

interface WindowSizeState {
  width: number | undefined;
  height: number | undefined;
  breakpointIndex: number | undefined;
}

function useWindowSize(): WindowSizeState {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSizeState>({
    width: undefined,
    height: undefined,
    breakpointIndex: undefined,
  });
  const {breakpoints} = useTheme();

  // Get breakpoint widths as numbers
  const breakpointNumbers = breakpoints.map((bp: string): number => Number.parseInt(bp.replace(/\D+/g, ''), 10));

  useEffect(() => {
    const getBreakpointIndex = (windowWidth: number): number => {
      const index = findIndex(breakpointNumbers, (bp: number): boolean => windowWidth < bp);
      if (index === -1) {
        // Window width is bigger than all bps, so return last index
        return breakpointNumbers.length - 1;
      }
      return index;
    };

    // Handler to call on window resize, debounced for perf
    const handleResize = debounce(
      () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          breakpointIndex: getBreakpointIndex(window.innerWidth),
        });
      },
      50,
      {leading: false, trailing: true, maxWait: 150}
    );

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export {useWindowSize};
