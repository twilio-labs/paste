import type { ResponsiveValue } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
// https://styled-system.com/api/#typography
import type { Properties } from "csstype";

// Tokens
export type FontFamilyOptions = keyof ThemeShape["fonts"] | "inherit";
export type FontSizeOptions = keyof ThemeShape["fontSizes"] | "100%" | "inherit";
export type FontWeightOptions = keyof ThemeShape["fontWeights"] | "inherit";
export type LineHeightOptions = keyof ThemeShape["lineHeights"] | "unset" | "inherit";
export type TextColorOptions = keyof ThemeShape["textColors"] | "currentColor" | "inherit" | "transparent";

export type FontFamily = ResponsiveValue<FontFamilyOptions>;
export type FontSize = ResponsiveValue<FontSizeOptions>;
export type FontWeight = ResponsiveValue<FontWeightOptions>;
export type LineHeight = ResponsiveValue<LineHeightOptions>;
export type TextColor = ResponsiveValue<TextColorOptions>;

// CSS native
export type LetterSpacingOptions = Properties["letterSpacing"];
export type TextAlignOptions = Properties["textAlign"];
export type FontStyleOptions = Properties["fontStyle"];
export type WhiteSpaceOptions = Properties["whiteSpace"];
export type WordBreakOptions = Properties["wordBreak"];
export type WordWrapOptions = Properties["wordWrap"];
export type OverflowWrapOptions = Properties["overflowWrap"];
export type TextDecorationOptions = Properties["textDecoration"];
export type TextOverflowOptions = Properties["textOverflow"];
export type TextTransformOptions = Properties["textTransform"];
export type FontVariantNumericProperty = Properties["fontVariantNumeric"];
export type ListStyleImageProperty = Properties["listStyleImage"];
export type ListStylePositionProperty = Properties["listStylePosition"];
export type ListStyleTypeProperty = Properties["listStyleType"];

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
export type FontVariantNumeric = ResponsiveValue<FontVariantNumericProperty>;
export type ListStyleImage = ResponsiveValue<ListStyleImageProperty>;
export type ListStylePosition = ResponsiveValue<ListStylePositionProperty>;
export type ListStyleType = ResponsiveValue<ListStyleTypeProperty>;

/*
 * Styled-system grouping
 * ---
 * We add `color` here, not in the `color` interface grouping like styled-system does
 * We also add `whiteSpace` and `textOverflow` to allow for ellipsis text.
 */
export interface TypographyProps {
  fontFamily?: FontFamily;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  fontVariantNumeric?: FontVariantNumeric;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  textAlign?: TextAlign;
  fontStyle?: FontStyle;
  color?: TextColor;
  // Our custom addition
  textDecoration?: TextDecoration;
  textOverflow?: TextOverflow;
  // Do not document, we prefer if folks do not use this property for i18n.
  textTransform?: TextTransform;
  whiteSpace?: WhiteSpace;
  wordBreak?: WordBreak;
  wordWrap?: WordWrap;
  overflowWrap?: OverflowWrap;
  listStyleImage?: ListStyleImage;
  listStylePosition?: ListStylePosition;
  listStyleType?: ListStyleType;
}
