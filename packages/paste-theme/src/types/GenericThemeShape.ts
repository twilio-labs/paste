import type {
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
} from '@twilio-paste/design-tokens';

export type BackgroundColorsKeys = keyof typeof backgroundColors;
export type BorderColorsKeys = keyof typeof borderColors;
export type BorderWidthsKeys = keyof typeof borderWidths;
export type ColorsKeys = keyof typeof colors;
export type ColorSchemeKeys = keyof typeof colorSchemes;
export type DataVisualizationKeys = keyof typeof dataVisualization;
export type FontSizesKeys = keyof typeof fontSizes;
export type FontWeightsKeys = keyof typeof fontWeights;
export type FontsKeys = keyof typeof fonts;
export type SizingKeys = keyof typeof sizings;
export type LineHeightsKeys = keyof typeof lineHeights;
export type RadiiKeys = keyof typeof radii;
export type BoxShadowsKeys = keyof typeof boxShadows;
export type SpacingsKeys = keyof typeof spacings;
export type TextColorsKeys = keyof typeof textColors;
export type ZIndicesKeys = keyof typeof zIndices;

// TODO Dynamically type this
export interface GenericThemeShape {
  backgroundColors: Partial<{
    [key in BackgroundColorsKeys]: any;
  }>;
  borderColors: Partial<{
    [key in BorderColorsKeys]: any;
  }>;
  borderWidths: Partial<{
    [key in BorderWidthsKeys]: any;
  }>;
  breakpoints: Partial<{
    [key: string]: any;
  }>;
  colorSchemes: Partial<{
    [key in ColorSchemeKeys]: any;
  }>;
  dataVisualization: Partial<{
    [key in DataVisualizationKeys]: any;
  }>;
  fontSizes: Partial<{
    [key in FontSizesKeys]: any;
  }>;
  fontWeights: Partial<{
    [key in FontWeightsKeys]: any;
  }>;
  fonts: Partial<{
    [key in FontsKeys]: any;
  }>;
  heights: Partial<{
    [key in SizingKeys]: any;
  }>;
  iconSizes: Partial<{
    sizeIcon05: any;
    sizeIcon10: any;
    sizeIcon20: any;
    sizeIcon30: any;
    sizeIcon40: any;
    sizeIcon50: any;
    sizeIcon60: any;
    sizeIcon70: any;
    sizeIcon80: any;
    sizeIcon90: any;
    sizeIcon100: any;
    sizeIcon110: any;
  }>;
  lineHeights: Partial<{
    [key in LineHeightsKeys]: any;
  }>;
  maxHeights: Partial<{
    [key in SizingKeys]: any;
  }>;
  maxWidths: Partial<{
    [key in SizingKeys]: any;
  }>;
  minHeights: Partial<{
    [key in SizingKeys]: any;
  }>;
  minWidths: Partial<{
    [key in SizingKeys]: any;
  }>;
  radii: Partial<{
    [key in RadiiKeys]: any;
  }>;
  shadows: Partial<{
    [key in BoxShadowsKeys]: any;
  }>;
  sizes: Partial<{
    [key in SizingKeys]: any;
  }>;
  space: Partial<{
    [key in SpacingsKeys]: any;
  }>;
  textColors: Partial<{
    [key in TextColorsKeys]: any;
  }>;
  widths: Partial<{
    [key in SizingKeys]: any;
  }>;
  zIndices: Partial<{
    [key in ZIndicesKeys]: any;
  }>;
}
