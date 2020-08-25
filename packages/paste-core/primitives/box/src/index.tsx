import * as React from 'react';
import {
  styled,
  css,
  compose,
  layout,
  space,
  background,
  typography,
  border,
  boxShadow,
  position,
  flexbox,
  system,
  variant,
} from '@twilio-paste/styling-library';
import {
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  PositionProps,
  FlexboxProps,
  TypographyProps,
} from '@twilio-paste/style-props';
import {
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
} from 'csstype';
import {PseudoPropStyles} from './PseudoPropStyles';
import {BoxPropTypes} from './BoxPropTypes';

interface BoxBaseStyleProps
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
}

export type BoxPseudoStyleProps = {
  [key in keyof typeof PseudoPropStyles]?: BoxBaseStyleProps;
};

export interface BoxStyleProps extends BoxBaseStyleProps, BoxPseudoStyleProps {}

// Omits potential clashes from our style props with HTMLAttributes (i.e.: color)
export interface BoxElementProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof BoxBaseStyleProps> {
  as?: keyof JSX.IntrinsicElements | React.ReactNode;
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
  theme?: any;
  variant?: string;
  element?: string;
}

export interface BoxProps extends BoxElementProps, BoxStyleProps {}

const extraConfig = system({
  color: {
    property: 'color',
    scale: 'textColors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'backgroundColors',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'borderColors',
  },
  content: true,
  cursor: true,
  appearance: true,
  transition: true,
  transform: true,
  animation: true,
  transformOrigin: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  boxSizing: true,
  resize: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  objectFit: true,
  objectPosition: true,
  outline: true,
  float: true,
  willChange: true,
  clip: true,
  backgroundAttachment: true,
  textAlign: true,
  textTransform: true,
  textDecoration: true,
  textOverflow: true,
  whiteSpace: true,
  opacity: true,
});

const getPseudoStyles = (props: BoxProps): {} => {
  const pseudoProps = Object.keys(props).filter(propName => propName.startsWith('_'));

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles = {};
  pseudoProps.forEach(pseudoProp => {
    if (PseudoPropStyles[pseudoProp] != null) {
      pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
    }
  });

  return css(pseudoStyles);
};

const getThemeStyles = (props: BoxProps): {} => {
  console.log(
    `[BOX][${props['data-paste-element']}] element styles: Checking theme for custom element styles to apply`
  );
  console.log(`[BOX][${props['data-paste-element']}] element styles: Is there a theme on props?`, props.theme != null);
  console.log(
    `[BOX][${props['data-paste-element']}] element styles: Is there an elements object on the theme?`,
    props.theme.elements != null
  );
  if (
    props != null &&
    props.theme != null &&
    props.theme.elements != null &&
    props.theme.CUSTOMIZATION_OPT_IN_OVERRIDE_DO_NOT_USE
  ) {
    console.log(
      `[BOX][${props['data-paste-element']}] element styles: Found a theme, found an elements object, and allowed to customize`
    );
    const customStyles = Object.keys(props.theme.elements).reduce((styles, key): {} => {
      if (props['data-paste-element'] === key) {
        console.log(`[BOX][${props['data-paste-element']}] element styles: Found a matching element key`);
        console.log(
          `[BOX][${props['data-paste-element']}] element styles: Custom styles object`,
          props.theme.elements[key]
        );
        return {...styles, ...props.theme.elements[key]};
      }
      console.log(`[BOX][${props['data-paste-element']}] element styles: No custom element styles`);
      return {...styles};
    }, {});
    return css(customStyles);
  }
  console.log(
    `[BOX][${props['data-paste-element']}] element styles: Either no theme, no elements on theme or no customization flag`
  );
  return {};
};

const getThemeVariants = (props: BoxProps): {} => {
  console.log(
    `[BOX][${props['data-paste-element']}] variant styles: Checking theme for custom variant styles to apply`
  );
  console.log(`[BOX][${props['data-paste-element']}] variant styles: Is there a theme on props?`, props.theme != null);
  console.log(
    `[BOX][${props['data-paste-element']}] variant styles: Is there an elements object on the theme?`,
    props.theme.elements != null
  );
  if (
    props != null &&
    props.theme != null &&
    props.theme.elements != null &&
    props.theme.CUSTOMIZATION_OPT_IN_OVERRIDE_DO_NOT_USE
  ) {
    console.log(
      `[BOX][${props['data-paste-element']}] variant styles: Found a theme, found an elements object, and allowed to customize`
    );
    const variants = Object.keys(props.theme.elements).reduce((styles, key): {} => {
      if (props['data-paste-element'] === key) {
        console.log(`[BOX][${props['data-paste-element']}] variant styles: Found a matching element key`);
        console.log(
          `[BOX][${props['data-paste-element']}] variant styles: Custom variants object`,
          props.theme.elements[key].variants
        );
        return {...styles, ...props.theme.elements[key].variants};
      }
      console.log(`[BOX][${props['data-paste-element']}] variant styles: No custom variant styles`);
      return {...styles};
    }, {});
    return variant({variants});
  }
  console.log(
    `[BOX][${props['data-paste-element']}] variant styles: Either no theme, no elements on theme or no customization flag`
  );
  return {};
};

// @ts-ignore
const StyledBox = styled.div(
  {
    boxSizing: 'border-box',
  },
  compose(
    space,
    layout,
    flexbox,
    background,
    border,
    boxShadow,
    position,
    typography,
    extraConfig
  ),
  getPseudoStyles,
  getThemeStyles,
  getThemeVariants
  // we do this because the default typings of emotion styled
  // means Text gets typed as a span, and can't be extended
  // correctly to utilise the as prop. The new HTML element attributes
  // always clash with the span html attributes. To override this,
  // we retype as a basic functional component which is easy to extend
) as React.FC<BoxProps>;

export const Box = React.forwardRef<HTMLElement, BoxProps>(({children, element = 'BOX', ...props}, ref) => (
  <StyledBox data-paste-element={element} ref={ref} {...props}>
    {children}
  </StyledBox>
));

Box.displayName = 'Box';

if (process.env.NODE_ENV === 'development') {
  Box.propTypes = BoxPropTypes;
}

export * from './SafelySpreadProps';
