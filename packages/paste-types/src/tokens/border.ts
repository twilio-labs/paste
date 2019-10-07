import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface BorderRadiusProps {
  borderRadius?: keyof ThemeShape['radii'];
  borderBottomLeftRadius?: keyof ThemeShape['radii'];
  borderBottomRightRadius?: keyof ThemeShape['radii'];
  borderTopLeftRadius?: keyof ThemeShape['radii'];
  borderTopRightRadius?: keyof ThemeShape['radii'];
}

export interface BorderWidthProps {
  borderWidth?: keyof ThemeShape['borderWidths'];
  borderBottomWidth?: keyof ThemeShape['borderWidths'];
  borderLeftWidth?: keyof ThemeShape['borderWidths'];
  borderRightWidth?: keyof ThemeShape['borderWidths'];
  borderTopWidth?: keyof ThemeShape['borderWidths'];
}

export interface BorderStyleProps {
  borderStyle?: CSS.BorderStyleProperty;
}

export interface BorderColorProps {
  borderColor?: keyof ThemeShape['borderColors'];
  borderBottomColor?: keyof ThemeShape['borderColors'];
  borderLeftColor?: keyof ThemeShape['borderColors'];
  borderRightColor?: keyof ThemeShape['borderColors'];
  borderTopColor?: keyof ThemeShape['borderColors'];
}

export interface BorderProps extends BorderWidthProps, BorderStyleProps, BorderRadiusProps, BorderColorProps {}
