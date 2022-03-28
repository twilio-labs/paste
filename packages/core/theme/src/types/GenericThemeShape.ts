import type {
  backgroundColors as BackgroundColors,
  borderColors as BorderColors,
  borderWidths as BorderWidths,
  radii as Radii,
  fonts as Fonts,
  fontSizes as FontSizes,
  fontWeights as FontWeights,
  lineHeights as LineHeights,
  boxShadows as BoxShadows,
  sizings as Sizings,
  spacings as Spacings,
  textColors as TextColors,
  zIndices as ZIndices,
  colors as Colors,
} from '@twilio-paste/design-tokens';

export type BackgroundColorsKeys = keyof typeof BackgroundColors;
export type BorderColorsKeys = keyof typeof BorderColors;
export type BorderWidthsKeys = keyof typeof BorderWidths;
export type ColorsKeys = keyof typeof Colors;
export type FontSizesKeys = keyof typeof FontSizes;
export type FontWeightsKeys = keyof typeof FontWeights;
export type FontsKeys = keyof typeof Fonts;
export type SizingKeys = keyof typeof Sizings;
export type LineHeightsKeys = keyof typeof LineHeights;
export type RadiiKeys = keyof typeof Radii;
export type BoxShadowsKeys = keyof typeof BoxShadows;
export type SpacingsKeys = keyof typeof Spacings;
export type TextColorsKeys = keyof typeof TextColors;
export type ZIndicesKeys = keyof typeof ZIndices;

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
    sizeIcon10: typeof Sizings['sizeIcon10'];
    sizeIcon20: typeof Sizings['sizeIcon20'];
    sizeIcon30: typeof Sizings['sizeIcon30'];
    sizeIcon40: typeof Sizings['sizeIcon40'];
    sizeIcon50: typeof Sizings['sizeIcon50'];
    sizeIcon60: typeof Sizings['sizeIcon60'];
    sizeIcon70: typeof Sizings['sizeIcon70'];
    sizeIcon80: typeof Sizings['sizeIcon80'];
    sizeIcon90: typeof Sizings['sizeIcon90'];
    sizeIcon100: typeof Sizings['sizeIcon100'];
    sizeIcon110: typeof Sizings['sizeIcon110'];
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
