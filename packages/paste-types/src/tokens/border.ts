import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';

type Radii = keyof ThemeShape['radii'] | Array<keyof ThemeShape['radii']>;

export interface BorderRadiusProps {
  borderRadius?: Radii;
  borderBottomLeftRadius?: Radii;
  borderBottomRightRadius?: Radii;
  borderTopLeftRadius?: Radii;
  borderTopRightRadius?: Radii;
}

type BorderWidths = keyof ThemeShape['borderWidths'] | Array<keyof ThemeShape['borderWidths']>;

export interface BorderWidthProps {
  borderWidth?: BorderWidths;
  borderBottomWidth?: BorderWidths;
  borderLeftWidth?: BorderWidths;
  borderRightWidth?: BorderWidths;
  borderTopWidth?: BorderWidths;
}

export interface BorderStyleProps {
  borderStyle?: CSS.BorderStyleProperty | Array<CSS.BorderStyleProperty>;
}

type BorderColors = keyof ThemeShape['borderColors'] | Array<keyof ThemeShape['borderColors']>;

export interface BorderColorProps {
  borderColor?: BorderColors;
  borderBottomColor?: BorderColors;
  borderLeftColor?: BorderColors;
  borderRightColor?: BorderColors;
  borderTopColor?: BorderColors;
}

export interface BorderProps extends BorderWidthProps, BorderStyleProps, BorderRadiusProps, BorderColorProps {}
