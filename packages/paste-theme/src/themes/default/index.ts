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
  dataVisualizations,
} from '@twilio-paste/design-tokens';

import {generateThemeFromTokens} from '../../generateThemeFromTokens';

export const DefaultTheme = generateThemeFromTokens({
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
  dataVisualizations,
});
