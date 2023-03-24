import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  AnimationProperty,
  AppearanceProperty,
  BoxSizingProperty,
  ClipProperty,
  CursorProperty,
  FloatProperty,
  ObjectFitProperty,
  ObjectPositionProperty,
  OpacityProperty,
  OutlineProperty,
  PointerEventsProperty,
  ResizeProperty,
  TableLayoutProperty,
  TransformOriginProperty,
  TransformProperty,
  TransitionProperty,
  UserSelectProperty,
  VisibilityProperty,
  WillChangeProperty,
} from '@twilio-paste/style-props';
import type {CustomTheme} from '@twilio-paste/customization';

import type {PseudoPropStyles} from './PseudoPropStyles';

export interface BoxBaseStyleProps
  extends LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    FlexboxProps,
    GridProps {
  animation?: AnimationProperty;
  appearance?: AppearanceProperty;
  boxSizing?: BoxSizingProperty;
  clip?: ClipProperty;
  content?: string;
  cursor?: CursorProperty;
  float?: FloatProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty;
  opacity?: OpacityProperty;
  outline?: OutlineProperty;
  pointerEvents?: PointerEventsProperty;
  resize?: ResizeProperty;
  tableLayout?: TableLayoutProperty;
  transform?: TransformProperty;
  transformOrigin?: TransformOriginProperty;
  transition?: TransitionProperty;
  userSelect?: UserSelectProperty;
  visibility?: VisibilityProperty;
  willChange?: WillChangeProperty;
  '-webkit-text-fill-color'?: string;
  '-webkit-opacity'?: string;
}

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

export type StyledBoxProps = BoxProps & {'data-paste-element': string; theme: CustomTheme};
