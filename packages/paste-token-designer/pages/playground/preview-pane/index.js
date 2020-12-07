import {StylingGlobals, css, ThemeProvider as StyledThemeProvider} from '@twilio-paste/styling-library';
import {mapTokensToTheme} from './utils/mapTokensToTheme';
import {Box, Button, Alert} from '@twilio-paste/core';

const Test = () => {
  console.log(
    css({
      color: 'red',
    })({})
  );
  return <div>Red</div>;
};

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

export function Viewer({tokens}) {
  const theme = mapTokensToTheme(tokens);
  console.log('new theme', theme);
  return (
    <StyledThemeProvider theme={theme}>
      <StylingGlobals styles={pasteGlobalStyles({theme})} />
      <Box padding="space60" width="100%" backgroundColor="colorBackground">
        <Button variant="primary">Primary Button</Button>
        <Alert variant="error">Do not plunge</Alert>
        <Test />
      </Box>
    </StyledThemeProvider>
  );
}
