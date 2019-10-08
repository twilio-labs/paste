import {ThemeShape} from '@twilio-paste/theme-tokens';

type Spacing = keyof ThemeShape['space'] | Array<keyof ThemeShape['space']>;

export interface MarginProps {
  margin?: Spacing;
  marginTop?: Spacing;
  marginRight?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
}

export interface PaddingProps {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
}

export interface SpacingProps extends MarginProps, PaddingProps {}
