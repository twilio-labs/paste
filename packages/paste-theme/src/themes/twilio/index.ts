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
} from "@twilio-paste/design-tokens/dist/themes/twilio/tokens.es6.js";

import { generateThemeFromTokens } from "../../generateThemeFromTokens";

export const TwilioTheme = generateThemeFromTokens({
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
