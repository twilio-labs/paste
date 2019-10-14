import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

type Spacing = ResponsiveValue<keyof ThemeShape['space']>;

export interface MarginProps {
  margin?: Spacing;
  marginTop?: Spacing;
  marginRight?: Spacing | 'auto';
  marginBottom?: Spacing;
  marginLeft?: Spacing | 'auto';
}

export interface PaddingProps {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
}

export interface SpacingProps extends MarginProps, PaddingProps {}
