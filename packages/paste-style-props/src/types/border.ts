// https://styled-system.com/api/#border
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

// Tokens
export type BorderRadius = ResponsiveValue<keyof ThemeShape['radii']>;
export type BorderWidth = ResponsiveValue<keyof ThemeShape['borderWidths']>;
export type BorderColor = ResponsiveValue<keyof ThemeShape['borderColors']>;

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
export type BorderStyle = ResponsiveValue<CSS.BorderStyleProperty>;
export type BorderTopStyle = ResponsiveValue<CSS.BorderTopStyleProperty>;
export type BorderRightStyle = ResponsiveValue<CSS.BorderRightStyleProperty>;
export type BorderBottomStyle = ResponsiveValue<CSS.BorderBottomStyleProperty>;
export type BorderLeftStyle = ResponsiveValue<CSS.BorderLeftStyleProperty>;

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
