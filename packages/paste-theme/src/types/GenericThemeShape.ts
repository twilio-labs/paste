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
