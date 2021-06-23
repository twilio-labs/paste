import type {
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  PositionProps,
  FlexboxProps,
  TypographyProps,
} from '@twilio-paste/style-props';
import type {CustomTheme} from '@twilio-paste/customization';
import type {
  CursorProperty,
  AppearanceProperty,
  AnimationProperty,
  TransformProperty,
  TransformOriginProperty,
  VisibilityProperty,
  UserSelectProperty,
  PointerEventsProperty,
  BoxSizingProperty,
  ResizeProperty,
  TransitionProperty,
  ListStyleTypeProperty,
  ListStylePositionProperty,
  ListStyleImageProperty,
  ObjectFitProperty,
  ObjectPositionProperty,
  OutlineProperty,
  FloatProperty,
  WillChangeProperty,
  ClipProperty,
  OpacityProperty,
  BorderCollapseProperty,
  BorderSpacingProperty,
  TableLayoutProperty,
  FontVariantNumericProperty,
} from 'csstype';
import type {PseudoPropStyles} from './PseudoPropStyles';

export interface BoxBaseStyleProps
  extends LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    TypographyProps,
    FlexboxProps {
  content?: string;
  cursor?: CursorProperty;
  appearance?: AppearanceProperty;
  transition?: TransitionProperty;
  transform?: TransformProperty;
  animation?: AnimationProperty;
  transformOrigin?: TransformOriginProperty<string>;
  visibility?: VisibilityProperty;
  userSelect?: UserSelectProperty;
  pointerEvents?: PointerEventsProperty;
  boxSizing?: BoxSizingProperty;
  resize?: ResizeProperty;
  listStyleType?: ListStyleTypeProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleImage?: ListStyleImageProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty<string>;
  outline?: OutlineProperty<string>;
  float?: FloatProperty;
  willChange?: WillChangeProperty;
  clip?: ClipProperty;
  opacity?: OpacityProperty;
  borderCollapse?: BorderCollapseProperty;
  borderSpacing?: BorderSpacingProperty<string>;
  tableLayout?: TableLayoutProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
}

export type BoxPseudoStyleProps = {
  [key in keyof typeof PseudoPropStyles]?: BoxBaseStyleProps;
};

export interface BoxStyleProps extends BoxBaseStyleProps, BoxPseudoStyleProps {}

// Omits potential clashes from our style props with HTMLAttributes (i.e.: color)
export interface BoxElementProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof BoxBaseStyleProps> {
  as?: keyof JSX.IntrinsicElements;
  type?: string;
  /** Typed as any because Box can literally be any HTML element */
  ref?: any | null;
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
}

export interface BoxProps extends BoxElementProps, BoxStyleProps {}

export type StyledBoxProps = BoxProps & {'data-paste-element': string; theme: CustomTheme};
