import {
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  boxShadows,
  sizings,
  spacings,
  textColors,
  zIndices,
} from '@twilio-paste/design-tokens';

// TODO Dynamically type this
export interface GenericThemeShape {
  backgroundColors: Partial<
    {
      [key in keyof typeof backgroundColors]: any;
    }
  >;
  borderColors: Partial<
    {
      [key in keyof typeof borderColors]: any;
    }
  >;
  borderWidths: Partial<
    {
      [key in keyof typeof borderWidths]: any;
    }
  >;
  breakpoints: Partial<{
    [key: string]: any;
  }>;
  colors: Partial<
    {
      [key in
        | keyof typeof colors
        | keyof typeof backgroundColors
        | keyof typeof borderColors
        | keyof typeof textColors]: any;
    }
  >;
  fontSizes: Partial<
    {
      [key in keyof typeof fontSizes]: any;
    }
  >;
  fontWeights: Partial<
    {
      [key in keyof typeof fontWeights]: any;
    }
  >;
  fonts: Partial<
    {
      [key in keyof typeof fonts]: any;
    }
  >;
  heights: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  iconSizes: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  lineHeights: Partial<
    {
      [key in keyof typeof lineHeights]: any;
    }
  >;
  maxHeights: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  maxWidths: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  minHeights: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  minWidths: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  radii: Partial<
    {
      [key in keyof typeof radii]: any;
    }
  >;
  shadows: Partial<
    {
      [key in keyof typeof boxShadows]: any;
    }
  >;
  sizes: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  space: Partial<
    {
      [key in keyof typeof spacings]: any;
    }
  >;
  textColors: Partial<
    {
      [key in keyof typeof textColors]: any;
    }
  >;
  widths: Partial<
    {
      [key in keyof typeof sizings]: any;
    }
  >;
  zIndices: Partial<
    {
      [key in keyof typeof zIndices]: any;
    }
  >;
}
