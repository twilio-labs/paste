// https://styled-system.com/api/#typography
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

// Tokens
export type FontFamily = ResponsiveValue<keyof ThemeShape['fonts']>;
export type FontSize = ResponsiveValue<keyof ThemeShape['fontSizes']>;
export type FontWeight = ResponsiveValue<keyof ThemeShape['fontWeights']>;
export type LineHeight = ResponsiveValue<keyof ThemeShape['lineHeights']>;
export type TextColor = ResponsiveValue<keyof ThemeShape['textColors'] | 'currentColor'>;

// CSS native
export type LetterSpacing = ResponsiveValue<CSS.LetterSpacingProperty<TLengthStyledSystem>>;
export type TextAlign = ResponsiveValue<CSS.TextAlignProperty>;
export type FontStyle = ResponsiveValue<CSS.FontStyleProperty>;
export type TextDecoration = ResponsiveValue<CSS.TextDecorationProperty<CSS.TextDecorationLineProperty>>;
export type TextOverflow = ResponsiveValue<CSS.TextOverflowProperty>;
export type WhiteSpace = ResponsiveValue<CSS.WhiteSpaceProperty>;

/* Styled-system grouping
 * ---
 * We add `textColor` here, not in the `color` interface grouping like styled-system does
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
  // Our custom addition
  textColor?: TextColor;
  textDecoration?: TextDecoration;
  textOverflow?: TextOverflow;
  whiteSpace?: WhiteSpace;
}
