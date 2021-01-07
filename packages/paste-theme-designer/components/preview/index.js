import {generateThemeFromTokens} from '@twilio-paste/core/theme';
import {CustomizationProvider} from '@twilio-paste/core/customization';
import {Box} from '@twilio-paste/core/box';
import {Column, Grid} from '@twilio-paste/core/grid';
import {TabbedContent} from './TabbedContent';
import {FormPreview} from './FormPreview';
import {TokenContext} from '../../context/TokenContext';
import {SITE_MASTHEAD_HEIGHT} from '../../constants';

const Preview = () => {
  const {tokens} = React.useContext(TokenContext);

  const customTheme = generateThemeFromTokens(
    tokens.backgroundColors,
    tokens.borderColors,
    tokens.borderWidths,
    tokens.radii,
    tokens.fonts,
    tokens.fontSizes,
    tokens.fontWeights,
    tokens.lineHeights,
    tokens.boxShadows,
    tokens.sizings,
    tokens.spacings,
    tokens.textColors,
    tokens.zIndices
  );

  return (
    <Box width="100%" flexGrow={1} overflow="scroll" display="flex">
      <CustomizationProvider theme={customTheme}>
        <Box backgroundColor="colorBackground">
          <Grid equalColumnHeights>
            <Column span={8}>
              <Box
                backgroundColor="colorBackgroundBody"
                height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`}
                overflow="scroll"
                padding="space60"
                width="100%"
              >
                <TabbedContent />
              </Box>
            </Column>
            <Column span={4}>
              <Box
                backgroundColor="colorBackgroundBody"
                borderLeftColor="colorBorder"
                borderLeftWidth="borderWidth10"
                borderLeftStyle="solid"
                height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`}
                overflow="scroll"
                padding="space60"
                width="100%"
              >
                <FormPreview />
              </Box>
            </Column>
          </Grid>
        </Box>
      </CustomizationProvider>
    </Box>
  );
};

export {Preview};
