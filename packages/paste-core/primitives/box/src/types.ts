import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from '@twilio-paste/style-props';
import type {CustomTheme} from '@twilio-paste/customization';
import type {
  AnimationProperty,
  AppearanceProperty,
  BorderCollapseProperty,
  BorderSpacingProperty,
  BoxSizingProperty,
  ClipProperty,
  CursorProperty,
  FloatProperty,
  FontVariantNumericProperty,
  ListStyleImageProperty,
  ListStylePositionProperty,
  ListStyleTypeProperty,
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
  animation?: AnimationProperty;
  appearance?: AppearanceProperty;
  borderCollapse?: BorderCollapseProperty;
  borderSpacing?: BorderSpacingProperty<string>;
  boxSizing?: BoxSizingProperty;
  clip?: ClipProperty;
  content?: string;
  cursor?: CursorProperty;
  float?: FloatProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
  listStyleImage?: ListStyleImageProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleType?: ListStyleTypeProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty<string>;
  opacity?: OpacityProperty;
  outline?: OutlineProperty<string>;
  pointerEvents?: PointerEventsProperty;
  resize?: ResizeProperty;
  tableLayout?: TableLayoutProperty;
  transform?: TransformProperty;
  transformOrigin?: TransformOriginProperty<string>;
  transition?: TransitionProperty;
  userSelect?: UserSelectProperty;
  visibility?: VisibilityProperty;
  willChange?: WillChangeProperty;
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
