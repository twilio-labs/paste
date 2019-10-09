import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

export interface FontFamilyProps {
  fontFamily?: ResponsiveValue<keyof ThemeShape['fonts']>;
}

export interface FontSizeProps {
  fontSize?: ResponsiveValue<keyof ThemeShape['fontSizes']>;
}

export interface FontWeightProps {
  fontWeight?: ResponsiveValue<keyof ThemeShape['fontWeights']>;
}

export interface LineHeightProps {
  lineHeight?: ResponsiveValue<keyof ThemeShape['lineHeights']>;
}

export interface TextColorProps {
  textColor?: ResponsiveValue<keyof ThemeShape['textColors']>;
}

export interface FontProps extends FontFamilyProps, FontSizeProps, FontWeightProps, LineHeightProps {}
