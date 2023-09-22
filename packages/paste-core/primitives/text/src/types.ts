import type { CustomTheme } from '@twilio-paste/customization';
import type {
  Display,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  VerticalAlign,
  CursorProperty,
  OutlineProperty,
  TransitionProperty,
  TransitionDelayProperty,
} from '@twilio-paste/style-props';

import type { PseudoPropStyles } from './PseudoPropStyles';

export interface TextBaseStyleProps extends OverflowProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {
  content?: string;
  cursor?: CursorProperty;
  display?: Display;
  outline?: OutlineProperty;
  transition?: TransitionProperty;
  transitionDelay?: TransitionDelayProperty;
  verticalAlign?: VerticalAlign;
}

export type TextPseudoStyleProps = {
  [key in keyof typeof PseudoPropStyles]?: TextStyleProps;
};

export interface TextStyleProps extends TextBaseStyleProps, TextPseudoStyleProps {}

export interface TextElementProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  as: keyof JSX.IntrinsicElements;
  href?: string;
  rel?: string;
  target?: string;
  dateTime?: string;
  /** element identifier for customization */
  element?: string;
  /** variant for variant styling */
  variant?: string;
}

export interface TextProps extends TextElementProps, TextStyleProps {}

export type StyledTextProps = TextProps & { 'data-paste-element': string; theme: CustomTheme };
