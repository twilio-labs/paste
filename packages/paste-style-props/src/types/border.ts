import type { ResponsiveValue } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
// https://styled-system.com/api/#border
import type { Properties } from "csstype";

import type { StyleReset } from "./helpers";

// Tokens
export type BorderRadiusOptions = keyof ThemeShape["radii"];
export type BorderWidthOptions = keyof ThemeShape["borderWidths"];
export type BorderColorOptions = keyof ThemeShape["borderColors"] | "transparent" | "inherit";

export type BorderRadius = ResponsiveValue<BorderRadiusOptions>;
export type BorderWidth = ResponsiveValue<BorderWidthOptions>;
export type BorderColor = ResponsiveValue<BorderColorOptions>;

export interface BorderRadiusProps {
  /**
   * Responsive prop of BorderRadius tokens for the CSS `border-radius` property
   *
   * @type {BorderRadius}
   * @memberof BorderRadiusProps
   */
  borderRadius?: BorderRadius;
  /**
   * Responsive prop of BorderRadius tokens for the CSS `border-bottom-left-radius` property
   *
   * @type {BorderRadius}
   * @memberof BorderRadiusProps
   */
  borderBottomLeftRadius?: BorderRadius;
  /**
   * Responsive prop of BorderRadius tokens for the CSS `border-bottom-right-radius` property
   *
   * @type {BorderRadius}
   * @memberof BorderRadiusProps
   */
  borderBottomRightRadius?: BorderRadius;
  /**
   * Responsive prop of BorderRadius tokens for the CSS `border-top-left-radius` property
   *
   * @type {BorderRadius}
   * @memberof BorderRadiusProps
   */
  borderTopLeftRadius?: BorderRadius;
  /**
   * Responsive prop of BorderRadius tokens for the CSS `border-top-right-radius` property
   *
   * @type {BorderRadius}
   * @memberof BorderRadiusProps
   */
  borderTopRightRadius?: BorderRadius;
}

export interface BorderWidthProps {
  /**
   * Responsive prop of BorderWidth tokens for the CSS `border-width` property
   *
   * @type {BorderWidth}
   * @memberof BorderWidthProps
   */
  borderWidth?: BorderWidth;
  /**
   * Responsive prop of BorderWidth tokens for the CSS `border-bottom-width` property
   *
   * @type {BorderWidth}
   * @memberof BorderWidthProps
   */
  borderBottomWidth?: BorderWidth;
  /**
   * Responsive prop of BorderWidth tokens for the CSS `border-left-width` property
   *
   * @type {BorderWidth}
   * @memberof BorderWidthProps
   */
  borderLeftWidth?: BorderWidth;
  /**
   * Responsive prop of BorderWidth tokens for the CSS `border-right-width` property
   *
   * @type {BorderWidth}
   * @memberof BorderWidthProps
   */
  borderRightWidth?: BorderWidth;
  /**
   * Responsive prop of BorderWidth tokens for the CSS `border-top-width` property
   *
   * @type {BorderWidth}
   * @memberof BorderWidthProps
   */
  borderTopWidth?: BorderWidth;
}

export interface BorderColorProps {
  /**
   * Responsive prop of BorderColor tokens for the CSS `border-color` property
   *
   * @type {BorderColor}
   * @memberof BorderColorProps
   */
  borderColor?: BorderColor;
  /**
   * Responsive prop of BorderColor tokens for the CSS `border-bottom-color` property
   *
   * @type {BorderColor}
   * @memberof BorderColorProps
   */
  borderBottomColor?: BorderColor;
  /**
   * Responsive prop of BorderColor tokens for the CSS `border-left-color` property
   *
   * @type {BorderColor}
   * @memberof BorderColorProps
   */
  borderLeftColor?: BorderColor;
  /**
   * Responsive prop of BorderColor tokens for the CSS `border-right-color` property
   *
   * @type {BorderColor}
   * @memberof BorderColorProps
   */
  borderRightColor?: BorderColor;
  /**
   * Responsive prop of BorderColor tokens for the CSS `border-top-color` property
   *
   * @type {BorderColor}
   * @memberof BorderColorProps
   */
  borderTopColor?: BorderColor;
}

// CSS native
export type BorderStyleOptions = Properties["borderStyle"];

export type BorderTopStyleOptions = Properties["borderStyle"];
export type BorderRightStyleOptions = Properties["borderStyle"];
export type BorderBottomStyleOptions = Properties["borderStyle"];
export type BorderLeftStyleOptions = Properties["borderStyle"];

export type BorderStyle = ResponsiveValue<BorderStyleOptions>;
export type BorderTopStyle = ResponsiveValue<BorderTopStyleOptions>;
export type BorderRightStyle = ResponsiveValue<BorderRightStyleOptions>;
export type BorderBottomStyle = ResponsiveValue<BorderBottomStyleOptions>;
export type BorderLeftStyle = ResponsiveValue<BorderLeftStyleOptions>;

export interface BorderStyleProps {
  /**
   * Responsive prop for the CSS `border-style` property
   *
   * @type {BorderStyle}
   * @memberof BorderStyleProps
   */
  borderStyle?: BorderStyle;
  /**
   * Responsive prop for the CSS `border-top-style` property
   *
   * @type {BorderTopStyle}
   * @memberof BorderStyleProps
   */
  borderTopStyle?: BorderTopStyle;
  /**
   * Responsive prop for the CSS `border-right-style` property
   *
   * @type {BorderRightStyle}
   * @memberof BorderStyleProps
   */
  borderRightStyle?: BorderRightStyle;
  /**
   * Responsive prop for the CSS `border-bottom-style` property
   *
   * @type {BorderBottomStyle}
   * @memberof BorderStyleProps
   */
  borderBottomStyle?: BorderBottomStyle;
  /**
   * Responsive prop for the CSS `border-left-style` property
   *
   * @type {BorderLeftStyle}
   * @memberof BorderStyleProps
   */
  borderLeftStyle?: BorderLeftStyle;
}

export type BorderCollapseProperty = Properties["borderCollapse"];
export type BorderCollapse = ResponsiveValue<BorderCollapseProperty>;

export type BorderSpacingProperty = Properties["borderSpacing"];
export type BorderSpacing = ResponsiveValue<BorderSpacingProperty>;

// Styled-system grouping
export interface BorderProps extends BorderWidthProps, BorderStyleProps, BorderColorProps, BorderRadiusProps {
  /**
   * Style prop for the CSS `border` property
   *
   * @type {StyleReset}
   * @memberof BorderProps
   */
  border?: StyleReset;
  /**
   * Style prop for the CSS `border-top` property
   *
   * @type {StyleReset}
   * @memberof BorderProps
   */
  borderTop?: StyleReset;
  /**
   * Style prop for the CSS `border-right` property
   *
   * @type {StyleReset}
   * @memberof BorderProps
   */
  borderRight?: StyleReset;
  /**
   * Style prop for the CSS `border-bottom` property
   *
   * @type {StyleReset}
   * @memberof BorderProps
   */
  borderBottom?: StyleReset;
  /**
   * Style prop for the CSS `border-left` property
   *
   * @type {StyleReset}
   * @memberof BorderProps
   */
  borderLeft?: StyleReset;
  /**
   * Responsive prop for the CSS `border-collapse` property
   *
   * @type {BorderCollapse}
   * @memberof BorderProps
   */
  borderCollapse?: BorderCollapse;
  /**
   * Responsive prop for the CSS `border-spacing` property
   *
   * @type {BorderSpacing}
   * @memberof BorderProps
   */
  borderSpacing?: BorderSpacing;
}
