import {css} from '@twilio-paste/styling-library';

export const pasteGlobalStyles = css({
  html: {
    fontSize: '100%',
    fontFamily: 'fontFamilyText',
  },
  'html:lang(ja), html:lang(ja-JP)': {
    '.paste-theme-provider, .paste-theme-provider input, .paste-theme-provider button, .paste-theme-provider textarea, .paste-theme-provider select, .paste-theme-provider ::placeholder': {
      fontFamily: 'fontFamilyTextJa',
    },
  },
  'html:lang(zh-CN)': {
    '.paste-theme-provider, .paste-theme-provider input, .paste-theme-provider button, .paste-theme-provider textarea, .paste-theme-provider select, .paste-theme-provider ::placeholder': {
      fontFamily: 'fontFamilyTextZhSimplified',
    },
  },
  'html:lang(zh-TW), html:lang(zh-HK)': {
    '.paste-theme-provider, .paste-theme-provider input, .paste-theme-provider button, .paste-theme-provider textarea, .paste-theme-provider select, .paste-theme-provider ::placeholder': {
      fontFamily: 'fontFamilyTextZhTraditional',
    },
  },
  'html:lang(ko)': {
    '.paste-theme-provider, .paste-theme-provider input, .paste-theme-provider button, .paste-theme-provider textarea, .paste-theme-provider select, .paste-theme-provider ::placeholder': {
      fontFamily: 'fontFamilyTextKo',
    },
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
