import type {
  backgroundColors,
  borderColors,
  borderWidths,
  boxShadows,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  sizings,
  spacings,
  textColors,
  zIndices,
} from '@twilio-paste/design-tokens';

export interface Token<TokenKey = string, TokenValue = string> {
  name: TokenKey;
  value: TokenValue;
  comment: string;
  category: string;
  type: string;
  deprecated: boolean;
}

export type BackgroundColors = Readonly<typeof backgroundColors>;

export const TokenCategories = {
  BorderColors: 'borderColors',
  BorderWidths: 'borderWidths',
  BoxShadows: 'boxShadows',
  Colors: 'colors',
  Fonts: 'fonts',
  FontSizes: 'fontSizes',
  FontWeights: 'fontWeights',
  LineHeights: 'lineHeights',
  Radii: 'radii',
  Sizings: 'sizings',
  Spacings: 'spacings',
  TextColors: 'textColors',
  ZIndeces: 'zIndeces',
} as const;

export type BorderColors = Readonly<typeof borderColors>;
export type BorderWidths = Readonly<typeof borderWidths>;
export type BoxShadows = Readonly<typeof boxShadows>;
export type Colors = Readonly<typeof colors>;
export type Fonts = Readonly<typeof fonts>;
export type FontSizes = Readonly<typeof fontSizes>;
export type FontWeights = Readonly<typeof fontWeights>;
export type LineHeights = Readonly<typeof lineHeights>;
export type Radii = Readonly<typeof radii>;
export type Sizings = Readonly<typeof sizings>;
export type Spacings = Readonly<typeof spacings>;
export type TextColors = Readonly<typeof textColors>;
export type ZIndeces = Readonly<typeof zIndices>;

export interface TokensByCategory {
  [TokenCategories.BorderColors]: Token<typeof TokenCategories['BorderColors'], BorderColors>[];
  [TokenCategories.BorderWidths]: Token<typeof TokenCategories['BorderWidths'], BorderWidths>[];
  [TokenCategories.BoxShadows]: Token<typeof TokenCategories['BoxShadows'], BoxShadows>[];
  [TokenCategories.Colors]: Token<typeof TokenCategories['Colors'], Colors>[];
  [TokenCategories.Fonts]: Token<typeof TokenCategories['BorderColors'], BorderColors>[];
  [TokenCategories.FontSizes]: Token<typeof TokenCategories['FontSizes'], FontSizes>[];
  [TokenCategories.LineHeights]: Token<typeof TokenCategories['LineHeights'], LineHeights>[];
  [TokenCategories.Radii]: Token<typeof TokenCategories['Radii'], Radii>[];
  [TokenCategories.Sizings]: Token<typeof TokenCategories['Sizings'], Sizings>[];
  [TokenCategories.Spacings]: Token<typeof TokenCategories['Spacings'], Spacings>[];
  [TokenCategories.TextColors]: Token<typeof TokenCategories['TextColors'], TextColors>[];
  [TokenCategories.ZIndeces]: Token<typeof TokenCategories['ZIndeces'], ZIndeces>[];
}

export type TokenCategoryKeys = Readonly<keyof TokensByCategory>;

export type ThemeTokens = {
  dark: TokensByCategory;
  default: TokensByCategory;
};
