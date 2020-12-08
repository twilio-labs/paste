import {ThemeShape} from '@twilio-paste/theme';

// TODO Dynamically type this
export type CustomTheme = Partial<{
  backgroundColors: Partial<
    {
      [key in keyof ThemeShape['backgroundColors']]: any;
    }
  >;
  borderColors: Partial<
    {
      [key in keyof ThemeShape['borderColors']]: any;
    }
  >;
  borderWidths: Partial<
    {
      [key in keyof ThemeShape['borderWidths']]: any;
    }
  >;
  breakpoints: Partial<
    {
      [key in keyof ThemeShape['breakpoints']]: any;
    }
  >;
  colors: Partial<
    {
      [key in keyof ThemeShape['colors']]: any;
    }
  >;
  fontSizes: Partial<
    {
      [key in keyof ThemeShape['fontSizes']]: any;
    }
  >;
  fontWeights: Partial<
    {
      [key in keyof ThemeShape['fontWeights']]: any;
    }
  >;
  fonts: Partial<
    {
      [key in keyof ThemeShape['fonts']]: any;
    }
  >;
  heights: Partial<
    {
      [key in keyof ThemeShape['heights']]: any;
    }
  >;
  iconSizes: Partial<
    {
      [key in keyof ThemeShape['iconSizes']]: any;
    }
  >;
  lineHeights: Partial<
    {
      [key in keyof ThemeShape['lineHeights']]: any;
    }
  >;
  maxHeights: Partial<
    {
      [key in keyof ThemeShape['maxHeights']]: any;
    }
  >;
  maxWidths: Partial<
    {
      [key in keyof ThemeShape['maxWidths']]: any;
    }
  >;
  minHeights: Partial<
    {
      [key in keyof ThemeShape['minHeights']]: any;
    }
  >;
  minWidths: Partial<
    {
      [key in keyof ThemeShape['minWidths']]: any;
    }
  >;
  radii: Partial<
    {
      [key in keyof ThemeShape['radii']]: any;
    }
  >;
  shadows: Partial<
    {
      [key in keyof ThemeShape['shadows']]: any;
    }
  >;
  sizes: Partial<
    {
      [key in keyof ThemeShape['sizes']]: any;
    }
  >;
  space: Partial<
    {
      [key in keyof ThemeShape['space']]: any;
    }
  >;
  textColors: Partial<
    {
      [key in keyof ThemeShape['textColors']]: any;
    }
  >;
  widths: Partial<
    {
      [key in keyof ThemeShape['widths']]: any;
    }
  >;
  zIndices: Partial<
    {
      [key in keyof ThemeShape['zIndices']]: any;
    }
  >;
}>;
