// https://styled-system.com/api/#border
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme';
import {ResponsiveValue} from 'styled-system';

// Tokens
export type BorderRadiusOptions = keyof ThemeShape['radii'];
export type BorderWidthOptions = keyof ThemeShape['borderWidths'];
export type BorderColorOptions = keyof ThemeShape['borderColors'];

export type BorderRadius = ResponsiveValue<BorderRadiusOptions>;
export type BorderWidth = ResponsiveValue<BorderWidthOptions>;
export type BorderColor = ResponsiveValue<BorderColorOptions>;

export interface BorderRadiusProps {
  borderRadius?: BorderRadius;
  borderBottomLeftRadius?: BorderRadius;
  borderBottomRightRadius?: BorderRadius;
  borderTopLeftRadius?: BorderRadius;
  borderTopRightRadius?: BorderRadius;
}

export interface BorderWidthProps {
  borderWidth?: BorderWidth;
  borderBottomWidth?: BorderWidth;
  borderLeftWidth?: BorderWidth;
  borderRightWidth?: BorderWidth;
  borderTopWidth?: BorderWidth;
}

export interface BorderColorProps {
  borderColor?: BorderColor;
  borderBottomColor?: BorderColor;
  borderLeftColor?: BorderColor;
  borderRightColor?: BorderColor;
  borderTopColor?: BorderColor;
}

// CSS native
export type BorderStyleOptions = CSS.BorderStyleProperty;
export type BorderTopStyleOptions = CSS.BorderTopStyleProperty;
export type BorderRightStyleOptions = CSS.BorderRightStyleProperty;
export type BorderBottomStyleOptions = CSS.BorderBottomStyleProperty;
export type BorderLeftStyleOptions = CSS.BorderLeftStyleProperty;

export type BorderStyle = ResponsiveValue<BorderStyleOptions>;
export type BorderTopStyle = ResponsiveValue<BorderTopStyleOptions>;
export type BorderRightStyle = ResponsiveValue<BorderRightStyleOptions>;
export type BorderBottomStyle = ResponsiveValue<BorderBottomStyleOptions>;
export type BorderLeftStyle = ResponsiveValue<BorderLeftStyleOptions>;

export interface BorderStyleProps {
  borderStyle?: BorderStyle;
  borderTopStyle?: BorderTopStyle;
  borderRightStyle?: BorderRightStyle;
  borderBottomStyle?: BorderBottomStyle;
  borderLeftStyle?: BorderLeftStyle;
}

// Styled-system grouping
export interface BorderProps extends BorderWidthProps, BorderStyleProps, BorderColorProps, BorderRadiusProps {
  border?: never;
  borderTop?: never;
  borderRight?: never;
  borderBottom?: never;
  borderLeft?: never;
}
