import {StylingGlobals, css, ThemeProvider as StyledThemeProvider} from '@twilio-paste/core/styling-library';
import {Box} from '@twilio-paste/core/box';
import {Content} from './Content';
import {mapTokensToTheme} from './utils/mapTokensToTheme';

const pasteGlobalStyles = css({
  html: {
    fontSize: '100%',
  },
  body: {
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
});

export function PreviewPane({tokens}) {
  const theme = mapTokensToTheme(tokens);
  console.log('new theme', theme);
  return (
    <StyledThemeProvider theme={theme}>
      <StylingGlobals styles={pasteGlobalStyles({theme})} />
      <Box
        padding="space60"
        width="100%"
        backgroundColor="colorBackground"
        borderLeftWidth="borderWidth10"
        borderLeftColor="colorBorderDark"
        borderLeftStyle="solid"
        overflow="scroll"
      >
        <Content />
      </Box>
    </StyledThemeProvider>
  );
}
