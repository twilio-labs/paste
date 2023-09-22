// https://styled-system.com/api/#border
import type { Properties } from 'csstype';
import type { ThemeShape } from '@twilio-paste/theme';
import type { ResponsiveValue } from '@twilio-paste/styling-library';

import type { StyleReset } from './helpers';

// Tokens
export type BorderRadiusOptions = keyof ThemeShape['radii'];
export type BorderWidthOptions = keyof ThemeShape['borderWidths'];
export type BorderColorOptions = keyof ThemeShape['borderColors'] | 'transparent' | 'inherit';

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
export type BorderStyleOptions = Properties['borderStyle'];

export type BorderTopStyleOptions = Properties['borderStyle'];
export type BorderRightStyleOptions = Properties['borderStyle'];
export type BorderBottomStyleOptions = Properties['borderStyle'];
export type BorderLeftStyleOptions = Properties['borderStyle'];

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

export type BorderCollapseProperty = Properties['borderCollapse'];
export type BorderCollapse = ResponsiveValue<BorderCollapseProperty>;

export type BorderSpacingProperty = Properties['borderSpacing'];
export type BorderSpacing = ResponsiveValue<BorderSpacingProperty>;

// Styled-system grouping
export interface BorderProps extends BorderWidthProps, BorderStyleProps, BorderColorProps, BorderRadiusProps {
  border?: StyleReset;
  borderTop?: StyleReset;
  borderRight?: StyleReset;
  borderBottom?: StyleReset;
  borderLeft?: StyleReset;
  borderCollapse?: BorderCollapse;
  borderSpacing?: BorderSpacing;
}
