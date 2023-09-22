import { css } from '@twilio-paste/styling-library';

export const pasteGlobalStyles = css({
  html: {
    fontSize: 'fontSizeBase',
    fontFamily: 'fontFamilyText',
  },
  'html:lang(ja), html:lang(ja-JP)': {
    '.paste-theme-provider': {
      fontFamily: 'fontFamilyTextJapanese',
    },
  },
  'html:lang(zh-CN)': {
    '.paste-theme-provider': {
      fontFamily: 'fontFamilyTextChineseSimplified',
    },
  },
  'html:lang(zh-TW), html:lang(zh-HK)': {
    '.paste-theme-provider': {
      fontFamily: 'fontFamilyTextChineseTraditional',
    },
  },
  'html:lang(ko)': {
    '.paste-theme-provider': {
      fontFamily: 'fontFamilyTextKorean',
    },
  },
  body: {
    backgroundColor: 'colorBackgroundBody',
    margin: 0,
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
  /*
   * To disable reach/dialog's style warning
   * Issue: https://github.com/twilio-labs/paste/discussions/524
   * Reach Docs Guidance: https://reach.tech/styling#skip-including-styles
   */
  ':root': {
    ['--reach-dialog' as any]: '1',
  },
});
