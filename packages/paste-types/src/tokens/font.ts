import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface FontFamilyProps {
  fontFamily?: keyof ThemeShape['fonts'] | Array<keyof ThemeShape['fonts']>;
}

export interface FontSizeProps {
  fontSize?: keyof ThemeShape['fontSizes'] | Array<keyof ThemeShape['fontSizes']>;
}

export interface FontWeightProps {
  fontWeight?: keyof ThemeShape['fontWeights'] | Array<keyof ThemeShape['fontWeights']>;
}

export interface LineHeightProps {
  lineHeight?: keyof ThemeShape['lineHeights'] | Array<keyof ThemeShape['lineHeights']>;
}

export interface TextColorProps {
  textColor?: keyof ThemeShape['textColors'] | Array<keyof ThemeShape['textColors']>;
}

export interface FontProps extends FontFamilyProps, FontSizeProps, FontWeightProps, LineHeightProps {}
