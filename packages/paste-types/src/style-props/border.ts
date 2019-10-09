import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue, BorderStyleProps} from 'styled-system';

type Radii = ResponsiveValue<keyof ThemeShape['radii']>;

export interface BorderRadiusProps {
  borderRadius?: Radii;
  borderBottomLeftRadius?: Radii;
  borderBottomRightRadius?: Radii;
  borderTopLeftRadius?: Radii;
  borderTopRightRadius?: Radii;
}

type BorderWidths = ResponsiveValue<keyof ThemeShape['borderWidths']>;

export interface BorderWidthProps {
  borderWidth?: BorderWidths;
  borderBottomWidth?: BorderWidths;
  borderLeftWidth?: BorderWidths;
  borderRightWidth?: BorderWidths;
  borderTopWidth?: BorderWidths;
}

type BorderColors = ResponsiveValue<keyof ThemeShape['borderColors']>;

export interface BorderColorProps {
  borderColor?: BorderColors;
  borderBottomColor?: BorderColors;
  borderLeftColor?: BorderColors;
  borderRightColor?: BorderColors;
  borderTopColor?: BorderColors;
}

export interface BorderProps extends BorderWidthProps, BorderStyleProps, BorderRadiusProps, BorderColorProps {}
