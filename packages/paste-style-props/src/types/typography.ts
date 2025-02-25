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
  /**
   * Responsive style prop of Font Family tokens for the CSS `font-family` property
   *
   * @type {FontFamily}
   * @memberof TypographyProps
   */
  fontFamily?: FontFamily;
  /**
   * Responsive style prop of Font Size tokens for the CSS `font-size` property
   *
   * @type {FontSize}
   * @memberof TypographyProps
   */
  fontSize?: FontSize;
  /**
   * Responsive style prop of Font Weight tokens for the CSS `font-weight` property
   *
   * @type {FontWeight}
   * @memberof TypographyProps
   */
  fontWeight?: FontWeight;
  fontVariantNumeric?: FontVariantNumeric;
  /**
   * Responsive style prop of Line Height tokens for the CSS `line-height` property
   *
   * @type {LineHeight}
   * @memberof TypographyProps
   */
  lineHeight?: LineHeight;
  /**
   * Responsive style prop for the CSS `letter-spacing` property
   *
   * @type {LetterSpacing}
   * @memberof TypographyProps
   */
  letterSpacing?: LetterSpacing;
  /**
   * Responsive style prop for the CSS `text-align` property
   *
   * @type {TextAlign}
   * @memberof TypographyProps
   */
  textAlign?: TextAlign;
  /**
   * Responsive style prop for the CSS `font-style` property
   *
   * @type {FontStyle}
   * @memberof TypographyProps
   */
  fontStyle?: FontStyle;
  /**
   * Responsive style prop of Text Color tokens for the CSS `color` property
   *
   * @type {TextColor}
   * @memberof TypographyProps
   */
  color?: TextColor;
  /**
   * Responsive style prop for the CSS `text-decoration` property
   *
   * @type {TextDecoration}
   * @memberof TypographyProps
   */
  textDecoration?: TextDecoration;
  /**
   * Responsive style prop for the CSS `text-overflow` property
   *
   * @type {TextOverflow}
   * @memberof TypographyProps
   */
  textOverflow?: TextOverflow;
  /**
   * Responsive style prop for the CSS `text-transform` property. Avoid using this prop if possible, as it can have implications for screen readers and internationalization.
   *
   * @type {TextTransform}
   * @memberof TypographyProps
   */
  textTransform?: TextTransform;
  /**
   * Responsive style prop for the CSS `white-space` property
   *
   * @type {WhiteSpace}
   * @memberof TypographyProps
   */
  whiteSpace?: WhiteSpace;
  /**
   * Responsive style prop for the CSS `word-break` property
   *
   * @type {WordBreak}
   * @memberof TypographyProps
   */
  wordBreak?: WordBreak;
  /**
   * Responsive style prop for the CSS `word-wrap` property
   *
   * @type {WordWrap}
   * @memberof TypographyProps
   */
  wordWrap?: WordWrap;
  /**
   * Responsive style prop for the CSS `overflow-wrap` property
   *
   * @type {OverflowWrap}
   * @memberof TypographyProps
   */
  overflowWrap?: OverflowWrap;
  /**
   * Responsive style prop for the CSS `list-style-image` property
   *
   * @type {ListStyleImage}
   * @memberof TypographyProps
   */
  listStyleImage?: ListStyleImage;
  /**
   * Responsive style prop for the CSS `list-style-position` property
   *
   * @type {ListStylePosition}
   * @memberof TypographyProps
   */
  listStylePosition?: ListStylePosition;
  /**
   * Responsive style prop for the CSS `list-style-type` property
   *
   * @type {ListStyleType}
   * @memberof TypographyProps
   */
  listStyleType?: ListStyleType;
  /**
   * Responsive style prop for the CSS `text-underline-offset` property
   *
   * @type {ListStyleType}
   * @memberof TypographyProps
   */
  textUnderlineOffset?: ListStyleType;
}
