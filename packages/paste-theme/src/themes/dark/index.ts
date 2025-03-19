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
} from "@twilio-paste/design-tokens/dist/themes/dark/tokens.es6.js";

import { generateThemeFromTokens } from "../../generateThemeFromTokens";

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
