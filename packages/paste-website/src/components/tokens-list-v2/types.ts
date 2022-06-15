import type {DefaultTheme, DarkTheme} from '@twilio-paste/website/internal/tokens-list';

export type TokenFormats = 'js' | 'css';
export type TokenValueFormatter = (name: string) => string;

export type ThemeKeys = 'default' | 'dark';

export type BackgroundColors = DefaultTheme.KebabCase['background-colors'] | DarkTheme.KebabCase['background-colors'];
export type BorderColors = DefaultTheme.KebabCase['border-colors'] | DarkTheme.KebabCase['border-colors'];
export type BorderWidths = DefaultTheme.KebabCase['border-widths'] | DarkTheme.KebabCase['border-widths'];
export type BoxShadows = DefaultTheme.KebabCase['box-shadows'] | DarkTheme.KebabCase['box-shadows'];
export type Colors = DefaultTheme.KebabCase['colors'] | DarkTheme.KebabCase['colors'];
export type Fonts = DefaultTheme.KebabCase['fonts'] | DarkTheme.KebabCase['fonts'];
export type FontSizes = DefaultTheme.KebabCase['font-sizes'] | DarkTheme.KebabCase['font-sizes'];
export type FontWeights = DefaultTheme.KebabCase['font-weights'] | DarkTheme.KebabCase['font-weights'];
export type LineHeights = DefaultTheme.KebabCase['line-heights'] | DarkTheme.KebabCase['line-heights'];
export type Radii = DefaultTheme.KebabCase['radii'] | DarkTheme.KebabCase['radii'];
export type Sizings = DefaultTheme.KebabCase['sizings'] | DarkTheme.KebabCase['sizings'];
export type Spacings = DefaultTheme.KebabCase['spacings'] | DarkTheme.KebabCase['spacings'];
export type TextColors = DefaultTheme.KebabCase['text-colors'] | DarkTheme.KebabCase['text-colors'];
export type ZIndices = DefaultTheme.KebabCase['z-indices'] | DarkTheme.KebabCase['z-indices'];

export interface Token<TokenKey = string, TokenValue = string> {
  name: TokenKey;
  value: TokenValue;
  comment: string;
  category: string;
  type: string;
  deprecated: boolean;
}

export type DecoratedToken = {
  name: Token['name'];
  value: Token['value'];
  comment: Token['comment'];
  category: Token['category'];
  type?: Token['type'] | undefined;
  deprecated?: Token['deprecated'] | undefined;
  contrastRating: string | null;
  backgroundColor: BackgroundColors['color-background-body'] | BackgroundColors['color-background-body-inverse'];
};

export const TokenCategories = {
  BorderColors: 'border-colors',
  BorderWidths: 'border-widths',
  BoxShadows: 'box-shadows',
  Colors: 'colors',
  Fonts: 'fonts',
  FontSizes: 'font-sizes',
  FontWeights: 'font-weights',
  LineHeights: 'line-heights',
  Radii: 'radii',
  Sizings: 'sizings',
  Spacings: 'spacings',
  TextColors: 'text-colors',
  ZIndices: 'z-indices',
} as const;

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
  [TokenCategories.ZIndices]: Token<typeof TokenCategories['ZIndices'], ZIndices>[];
}

export type TokenCategoryKeys = Readonly<keyof TokensByCategory>;

export type ThemeTokens = {
  dark: TokensByCategory;
  default: TokensByCategory;
};
