import type { GenericTokensShape } from "@twilio-paste/design-tokens/types/GenericTokensShape";

import type { GenericThemeShape } from "./types/GenericThemeShape";

interface GenerateTokensFromTheme {
  backgroundColors: GenericThemeShape["backgroundColors"];
  borderColors: GenericThemeShape["borderColors"];
  borderWidths: GenericThemeShape["borderWidths"];
  colorSchemes: GenericThemeShape["colorSchemes"];
  radii: GenericThemeShape["radii"];
  fonts: GenericThemeShape["fonts"];
  fontSizes: GenericThemeShape["fontSizes"];
  fontWeights: GenericThemeShape["fontWeights"];
  lineHeights: GenericThemeShape["lineHeights"];
  shadows: GenericThemeShape["shadows"];
  // there are some sizes we expect must appear to generate breakpoints and icons sizes
  sizes: GenericThemeShape["sizes"];
  space: GenericThemeShape["space"];
  textColors: GenericThemeShape["textColors"];
  zIndices: GenericThemeShape["zIndices"];
  dataVisualization: GenericThemeShape["dataVisualization"];
}

export const generateTokensFromTheme = ({
  backgroundColors,
  borderColors,
  borderWidths,
  colorSchemes,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  shadows,
  sizes,
  space,
  textColors,
  zIndices,
  dataVisualization,
}: GenerateTokensFromTheme): Partial<GenericTokensShape> => {
  return {
    boxShadows: shadows,
    borderWidths,
    radii,
    textColors,
    borderColors,
    backgroundColors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    sizings: sizes,
    spacings: space,
    zIndices,
    colorSchemes,
    // The `colors` bucket currently holds tokens, but we do not expose them
    colors: {},
    dataVisualization,
  };
};
