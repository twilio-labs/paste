import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface MarginProps {
  margin?: keyof ThemeShape['space'];
  marginTop?: keyof ThemeShape['space'];
  marginRight?: keyof ThemeShape['space'];
  marginBottom?: keyof ThemeShape['space'];
  marginLeft?: keyof ThemeShape['space'];
}

export interface PaddingProps {
  padding?: keyof ThemeShape['space'];
  paddingTop?: keyof ThemeShape['space'];
  paddingRight?: keyof ThemeShape['space'];
  paddingBottom?: keyof ThemeShape['space'];
  paddingLeft?: keyof ThemeShape['space'];
}

export interface SpacingProps extends MarginProps, PaddingProps {}
