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
} from "@twilio-paste/design-tokens/dist/tokens.es6";

import { GenerateThemeFromTokensArgs, generateThemeFromTokens } from "../../generateThemeFromTokens";

const convertToCSSVariables = (
  tokens: GenerateThemeFromTokensArgs | object,
): Partial<Record<keyof GenerateThemeFromTokensArgs, string | object>> => {
  const cssVariables: Partial<Record<keyof GenerateThemeFromTokensArgs, string | object>> = {};

  for (const [key, value] of Object.entries(tokens) as Array<[keyof GenerateThemeFromTokensArgs, string | object]>) {
    if (typeof value === "object") {
      cssVariables[key] = convertToCSSVariables(value);
    } else {
      // Convert the key to a CSS variable name colorBagroundPrimary -> --color-background-primary size10 -> --size-10
      const cssVariableName = `--${key.replace(/([A-Z])/g, "-$1").replace(/(\d+)/g, "-$1").toLowerCase()}`;
      cssVariables[key] = `var(${cssVariableName})`;
    }
  }

  return cssVariables;
};

export const CSSVariablesTheme = generateThemeFromTokens(
  convertToCSSVariables({
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
  }) as GenerateThemeFromTokensArgs,
);
