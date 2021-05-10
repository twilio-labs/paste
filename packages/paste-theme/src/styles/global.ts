import {css} from '@twilio-paste/styling-library';

export const pasteGlobalStyles = css({
  html: {
    fontSize: '100%',
  },
  body: {
    backgroundColor: 'colorBackgroundBody',
    margin: 0,
    fontSize: 'fontSize30',
  },
  '*, *::after, *::before': {
    boxSizing: 'border-box',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      animationDuration: '0 !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0 !important',
      scrollBehavior: 'auto !important',
    },
  },
  // To disable reach/dialog's style warning
  // Issue: https://github.com/twilio-labs/paste/discussions/524
  // Reach Docs Guidance: https://reach.tech/styling#skip-including-styles
  ':root': {
    ['--reach-dialog' as any]: '1',
  },
});
