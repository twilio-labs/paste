import type {
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
} from '../dist/tokens.common';

export type GenericBackgroundColors = Partial<{[key in keyof typeof backgroundColors]: any}>;
export type GenericBorderColors = Partial<{[key in keyof typeof borderColors]: any}>;
export type GenericBorderWidths = Partial<{[key in keyof typeof borderWidths]: any}>;
export type GenericRadii = Partial<{[key in keyof typeof radii]: any}>;
export type GenericColors = Partial<{[key in keyof typeof colors]: any}>;
export type GenericFonts = Partial<{[key in keyof typeof fonts]: any}>;
export type GenericFontSizes = Partial<{[key in keyof typeof fontSizes]: any}>;
export type GenericFontWeights = Partial<{[key in keyof typeof fontWeights]: any}>;
export type GenericLineHeights = Partial<{[key in keyof typeof lineHeights]: any}>;
export type GenericBoxShadows = Partial<{[key in keyof typeof boxShadows]: any}>;
export type GenericSizings = Partial<{[key in keyof typeof sizings]: any}>;
export type GenericSpacings = Partial<{[key in keyof typeof spacings]: any}>;
export type GenericTextColors = Partial<{[key in keyof typeof textColors]: any}>;
export type GenericZIndices = Partial<{[key in keyof typeof zIndices]: any}>;

/** Flat list of all Paste Design Tokens with generic values */
export type AllGenericTokens = GenericBackgroundColors &
  GenericBorderColors &
  GenericBorderWidths &
  GenericRadii &
  GenericColors &
  GenericFonts &
  GenericFontSizes &
  GenericFontWeights &
  GenericLineHeights &
  GenericBoxShadows &
  GenericSizings &
  GenericSpacings &
  GenericTextColors &
  GenericZIndices;

/** Categorized list of Design Tokens with generic values */
export interface GenericTokensShape {
  backgroundColors: GenericBackgroundColors;
  borderColors: GenericBorderColors;
  borderWidths: GenericBorderWidths;
  radii: GenericRadii;
  colors: GenericColors;
  fonts: GenericFonts;
  fontSizes: GenericFontSizes;
  fontWeights: GenericFontWeights;
  lineHeights: GenericLineHeights;
  boxShadows: GenericBoxShadows;
  sizings: GenericSizings;
  spacings: GenericSpacings;
  textColors: GenericTextColors;
  zIndices: GenericZIndices;
}
