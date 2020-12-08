import {StylingGlobals, css, ThemeProvider as StyledThemeProvider} from '@twilio-paste/core/styling-library';
import {Box} from '@twilio-paste/core/box';
import {TokenContext} from '../../../context/TokenContext';
// import {Tabs, TabList, TabPanel, TabPanels, Tab} from '@twilio-paste/core/tabs';
// import {Content} from './Content';
import {Preview} from '../../../components/preview';
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

export function PreviewPane() {
  const {tokens} = React.useContext(TokenContext);
  const theme = mapTokensToTheme(tokens);

  return (
    <StyledThemeProvider theme={theme}>
      <StylingGlobals styles={pasteGlobalStyles({theme})} />
      <Box
        // padding="space60"
        width="100%"
        backgroundColor="colorBackground"
        borderLeftWidth="borderWidth10"
        borderLeftColor="colorBorderDark"
        borderLeftStyle="solid"
        overflow="scroll"
      >
        {/* <Tabs>
          <TabList aria-label="Select among different previews">
            <Tab>Preview</Tab>
            <Tab>Another Preview</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Content />
            </TabPanel>
            <TabPanel>Another preview here</TabPanel>
          </TabPanels>
        </Tabs> */}
        <Preview />
      </Box>
    </StyledThemeProvider>
  );
}
