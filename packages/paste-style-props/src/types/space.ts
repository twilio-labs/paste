import type { ResponsiveValue } from "@twilio-paste/styling-library";
// https://styled-system.com/api/#space
import type { ThemeShape } from "@twilio-paste/theme";

// Tokens
export type SpaceOptions = keyof ThemeShape["space"];
export type Space = ResponsiveValue<SpaceOptions>;
export type Padding = Space;
export type Margin = Space | "auto";
export type Gap = Space;

// Styled-system groupings
export interface MarginProps {
  /**
   * Responsive prop of Space tokens for the CSS `margin` property
   *
   * @type {Margin}
   * @memberof MarginProps
   */
  margin?: Margin;
  /**
   * Responsive prop of Space tokens for the CSS `margin-top` property
   *
   * @type {Margin}
   * @memberof MarginProps
   */
  marginTop?: Margin;
  /**
   * Responsive prop of Space tokens for the CSS `margin-right` property
   *
   * @type {Margin}
   * @memberof MarginProps
   */
  marginRight?: Margin;
  /**
   * Responsive prop of Space tokens for the CSS `margin-bottom` property
   *
   * @type {Margin}
   * @memberof MarginProps
   */
  marginBottom?: Margin;
  /**
   * Responsive prop of Space tokens for the CSS `margin-left` property
   *
   * @type {Margin}
   * @memberof MarginProps
   */
  marginLeft?: Margin;
  /**
   * Responsive prop of Space tokens for the CSS `margin-left` and `margin-right` properties
   *
   * @type {Margin}
   * @memberof MarginProps
   */
  marginX?: Margin;
  /**
   * Responsive prop of Space tokens for the CSS `margin-top` and `margin-bottom` properties
   *
   * @type {Margin}
   * @memberof MarginProps
   */
  marginY?: Margin;
}

export interface PaddingProps {
  /**
   * Responsive prop of Space tokens for the CSS `padding` property
   *
   * @type {Padding}
   * @memberof PaddingProps
   */
  padding?: Padding;
  /**
   * Responsive prop of Space tokens for the CSS `padding-top` property
   *
   * @type {Padding}
   * @memberof PaddingProps
   */
  paddingTop?: Padding;
  /**
   * Responsive prop of Space tokens for the CSS `padding-right` property
   *
   * @type {Padding}
   * @memberof PaddingProps
   */
  paddingRight?: Padding;
  /**
   * Responsive prop of Space tokens for the CSS `padding-bottom` property
   *
   * @type {Padding}
   * @memberof PaddingProps
   */
  paddingBottom?: Padding;
  /**
   * Responsive prop of Space tokens for the CSS `padding-left` property
   *
   * @type {Padding}
   * @memberof PaddingProps
   */
  paddingLeft?: Padding;
  /**
   * Responsive prop of Space tokens for the CSS `padding-left` and `padding-right` properties
   *
   * @type {Padding}
   * @memberof PaddingProps
   */
  paddingX?: Padding;
  /**
   * Responsive prop of Space tokens for the CSS `padding-top` and `padding-bottom` properties
   *
   * @type {Padding}
   * @memberof PaddingProps
   */
  paddingY?: Padding;
}

export interface GapProps {
  /**
   * Responsive prop of Space tokens for the CSS `column-gap` property
   *
   * @type {Gap}
   * @memberof GapProps
   */
  columnGap?: Gap;

  rowGap?: Gap;
}

export interface SpaceProps extends MarginProps, PaddingProps, GapProps {}
