import type {
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
  colors,
} from '@twilio-paste/design-tokens';

export type BackgroundColorsKeys = keyof typeof backgroundColors;
export type BorderColorsKeys = keyof typeof borderColors;
export type BorderWidthsKeys = keyof typeof borderWidths;
export type ColorsKeys = keyof typeof colors;
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
  backgroundColors: Partial<
    {
      [key in BackgroundColorsKeys]: any;
    }
  >;
  borderColors: Partial<
    {
      [key in BorderColorsKeys]: any;
    }
  >;
  borderWidths: Partial<
    {
      [key in BorderWidthsKeys]: any;
    }
  >;
  breakpoints: Partial<{
    [key: string]: any;
  }>;
  dataVisualization: Partial<
    {
      [key in ColorsKeys]: any;
    }
  >;
  fontSizes: Partial<
    {
      [key in FontSizesKeys]: any;
    }
  >;
  fontWeights: Partial<
    {
      [key in FontWeightsKeys]: any;
    }
  >;
  fonts: Partial<
    {
      [key in FontsKeys]: any;
    }
  >;
  heights: Partial<
    {
      [key in SizingKeys]: any;
    }
  >;
  iconSizes: {
    sizeIcon10: typeof sizings['sizeIcon10'];
    sizeIcon20: typeof sizings['sizeIcon20'];
    sizeIcon30: typeof sizings['sizeIcon30'];
    sizeIcon40: typeof sizings['sizeIcon40'];
    sizeIcon50: typeof sizings['sizeIcon50'];
    sizeIcon60: typeof sizings['sizeIcon60'];
    sizeIcon70: typeof sizings['sizeIcon70'];
    sizeIcon80: typeof sizings['sizeIcon80'];
    sizeIcon90: typeof sizings['sizeIcon90'];
    sizeIcon100: typeof sizings['sizeIcon100'];
    sizeIcon110: typeof sizings['sizeIcon110'];
  };
  lineHeights: Partial<
    {
      [key in LineHeightsKeys]: any;
    }
  >;
  maxHeights: Partial<
    {
      [key in SizingKeys]: any;
    }
  >;
  maxWidths: Partial<
    {
      [key in SizingKeys]: any;
    }
  >;
  minHeights: Partial<
    {
      [key in SizingKeys]: any;
    }
  >;
  minWidths: Partial<
    {
      [key in SizingKeys]: any;
    }
  >;
  radii: Partial<
    {
      [key in RadiiKeys]: any;
    }
  >;
  shadows: Partial<
    {
      [key in BoxShadowsKeys]: any;
    }
  >;
  sizes: Partial<
    {
      [key in SizingKeys]: any;
    }
  >;
  space: Partial<
    {
      [key in SpacingsKeys]: any;
    }
  >;
  textColors: Partial<
    {
      [key in TextColorsKeys]: any;
    }
  >;
  widths: Partial<
    {
      [key in SizingKeys]: any;
    }
  >;
  zIndices: Partial<
    {
      [key in ZIndicesKeys]: any;
    }
  >;
}
