import {
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
} from '@twilio-paste/design-tokens/dist/themes/dark/tokens.es6';

import { generateThemeFromTokens } from '../../generateThemeFromTokens';

export const DarkTheme = generateThemeFromTokens({
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
