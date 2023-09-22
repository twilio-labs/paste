import type { CustomTheme } from '@twilio-paste/customization';
import type {
  BackgroundProps,
  BorderProps,
  CSSProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from '@twilio-paste/style-props';

import type { PseudoPropStyles } from './PseudoPropStyles';

export interface BoxBaseStyleProps
  extends LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    FlexboxProps,
    GridProps,
    CSSProps {}

export type BoxPseudoStyleProps = Partial<Record<keyof typeof PseudoPropStyles, BoxBaseStyleProps>>;

export interface BoxStyleProps extends BoxBaseStyleProps, BoxPseudoStyleProps {}

// Omits potential clashes from our style props with HTMLAttributes (i.e.: color)
export interface BoxElementProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof BoxBaseStyleProps> {
  accept?: string;
  as?: keyof JSX.IntrinsicElements;
  type?: string;
  // image props
  alt?: string;
  src?: string;
  // link props
  href?: string;
  rel?: string;
  target?: string;
  //  select props
  multiple?: boolean;
  // optgroup props
  label?: string;
  datetime?: string;
  /** element identifier for customization */
  element?: string;
  /** variant for variant styling */
  variant?: string;
  disabled?: boolean;
}

export interface BoxProps extends BoxElementProps, BoxStyleProps {}

export type StyledBoxProps = BoxProps & { 'data-paste-element': string; theme: CustomTheme };
