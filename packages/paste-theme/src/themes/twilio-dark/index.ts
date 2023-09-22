import {
  backgroundColors,
  borderColors,
  borderWidths,
  boxShadows,
  colorSchemes,
  colors,
  dataVisualization,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  sizings,
  spacings,
  textColors,
  zIndices,
} from '@twilio-paste/design-tokens/dist/themes/twilio-dark/tokens.es6';

import { generateThemeFromTokens } from '../../generateThemeFromTokens';

export const TwilioDarkTheme = generateThemeFromTokens({
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  boxShadows,
  sizings,
  spacings,
  textColors,
  zIndices,
  dataVisualization,
  colors,
  colorSchemes,
});
