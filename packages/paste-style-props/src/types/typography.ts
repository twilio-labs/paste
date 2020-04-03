// https://styled-system.com/api/#typography
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

// Tokens
export type FontFamilyOptions = keyof ThemeShape['fonts'];
export type FontSizeOptions = keyof ThemeShape['fontSizes'];
export type FontWeightOptions = keyof ThemeShape['fontWeights'];
export type LineHeightOptions = keyof ThemeShape['lineHeights'];
export type TextColorOptions = keyof ThemeShape['textColors'] | 'currentColor';

export type FontFamily = ResponsiveValue<FontFamilyOptions>;
export type FontSize = ResponsiveValue<FontSizeOptions>;
export type FontWeight = ResponsiveValue<FontWeightOptions>;
export type LineHeight = ResponsiveValue<LineHeightOptions>;
export type TextColor = ResponsiveValue<TextColorOptions>;

// CSS native
export type LetterSpacingOptions = CSS.LetterSpacingProperty<TLengthStyledSystem>;
export type TextAlignOptions = CSS.TextAlignProperty;
export type FontStyleOptions = CSS.FontStyleProperty;
export type TextDecorationOptions = CSS.TextDecorationProperty<CSS.TextDecorationLineProperty>;
export type TextOverflowOptions = CSS.TextOverflowProperty;
export type WhiteSpaceOptions = CSS.WhiteSpaceProperty;

export type LetterSpacing = ResponsiveValue<LetterSpacingOptions>;
export type TextAlign = ResponsiveValue<TextAlignOptions>;
export type FontStyle = ResponsiveValue<FontStyleOptions>;
export type TextDecoration = ResponsiveValue<TextDecorationOptions>;
export type TextOverflow = ResponsiveValue<TextOverflowOptions>;
export type WhiteSpace = ResponsiveValue<WhiteSpaceOptions>;

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
  whiteSpace?: WhiteSpace;
}
