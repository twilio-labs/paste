// https://styled-system.com/api/#typography
import type * as CSS from 'csstype';
import type {ThemeShape} from '@twilio-paste/theme';
import type {ResponsiveValue, TLengthStyledSystem} from '@twilio-paste/styling-library';

// Tokens
export type FontFamilyOptions = keyof ThemeShape['fonts'] | 'inherit';
export type FontSizeOptions = keyof ThemeShape['fontSizes'] | '100%' | 'inherit';
export type FontWeightOptions = keyof ThemeShape['fontWeights'] | 'inherit';
export type LineHeightOptions = keyof ThemeShape['lineHeights'] | 'unset' | 'inherit';
export type TextColorOptions = keyof ThemeShape['textColors'] | 'currentColor' | 'inherit' | 'transparent';

export type FontFamily = ResponsiveValue<FontFamilyOptions>;
export type FontSize = ResponsiveValue<FontSizeOptions>;
export type FontWeight = ResponsiveValue<FontWeightOptions>;
export type LineHeight = ResponsiveValue<LineHeightOptions>;
export type TextColor = ResponsiveValue<TextColorOptions>;

// CSS native
export type LetterSpacingOptions = CSS.LetterSpacingProperty<TLengthStyledSystem>;
export type TextAlignOptions = CSS.TextAlignProperty;
export type FontStyleOptions = CSS.FontStyleProperty;
export type WhiteSpaceOptions = CSS.WhiteSpaceProperty;
export type WordBreakOptions = CSS.WordBreakProperty;
export type WordWrapOptions = CSS.WordWrapProperty;
export type OverflowWrapOptions = CSS.OverflowWrapProperty;
export type TextDecorationOptions = CSS.TextDecorationProperty<CSS.TextDecorationLineProperty>;
export type TextOverflowOptions = CSS.TextOverflowProperty;
export type TextTransformOptions = CSS.TextTransformProperty;

export type LetterSpacing = ResponsiveValue<LetterSpacingOptions>;
export type TextAlign = ResponsiveValue<TextAlignOptions>;
export type FontStyle = ResponsiveValue<FontStyleOptions>;
export type WhiteSpace = ResponsiveValue<WhiteSpaceOptions>;
export type WordBreak = ResponsiveValue<WordBreakOptions>;
export type WordWrap = ResponsiveValue<WordWrapOptions>;
export type OverflowWrap = ResponsiveValue<OverflowWrapOptions>;
export type TextDecoration = ResponsiveValue<TextDecorationOptions>;
export type TextOverflow = ResponsiveValue<TextOverflowOptions>;
export type TextTransform = ResponsiveValue<TextTransformOptions>;

/* Styled-system grouping
 * ---
 * We add `color` here, not in the `color` interface grouping like styled-system does
 * We also add `whiteSpace` and `textOverflow` to allow for ellipsis text.
 */
export interface TypographyProps {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  textAlign?: TextAlign;
  fontStyle?: FontStyle;
  color?: TextColor;
  // Our custom addition
  textDecoration?: TextDecoration;
  textOverflow?: TextOverflow;
  textTransform?: TextTransform;
  whiteSpace?: WhiteSpace;
  wordBreak?: WordBreak;
  wordWrap?: WordWrap;
  overflowWrap?: OverflowWrap;
}
