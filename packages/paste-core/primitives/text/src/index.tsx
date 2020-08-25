import * as React from 'react';
import {
  styled,
  css,
  compose,
  space,
  display,
  verticalAlign,
  overflow,
  typography,
  system,
  position,
  variant,
} from '@twilio-paste/styling-library';
import {CursorProperty, TextTransformProperty, TransitionProperty} from 'csstype';
import {
  SpaceProps,
  Display,
  VerticalAlign,
  OverflowProps,
  PositionProps,
  TypographyProps,
} from '@twilio-paste/style-props';
import {PseudoPropStyles} from './PseudoPropStyles';
import {TextPropTypes} from './TextPropTypes';

interface TextStyleProps extends SpaceProps, OverflowProps, PositionProps, TypographyProps {
  content?: string;
  cursor?: CursorProperty;
  display?: Display;
  verticalAlign?: VerticalAlign;
  transition?: TransitionProperty;
  // Do not document, we prefer if folks do not use this property for i18n.
  textTransform?: TextTransformProperty;
  theme?: any;
  variant?: string;
  element?: string;
  ref?: any | null;
}

interface PseudoStylesProps {
  _after?: TextStyleProps;
  _before?: TextStyleProps;
  _focus?: TextStyleProps;
  _hover?: TextStyleProps;
  _active?: TextStyleProps;
  _pressed?: TextStyleProps;
  _selected?: TextStyleProps;
  _focusWithin?: TextStyleProps;
  _invalid?: TextStyleProps;
  _disabled?: TextStyleProps;
  _grabbed?: TextStyleProps;
  _expanded?: TextStyleProps;
  _checked?: TextStyleProps;
  _mixed?: TextStyleProps;
  _odd?: TextStyleProps;
  _even?: TextStyleProps;
  _visited?: TextStyleProps;
  _readOnly?: TextStyleProps;
  _first?: TextStyleProps;
  _last?: TextStyleProps;
  _notFirst?: TextStyleProps;
  _notLast?: TextStyleProps;
}

export interface TextElementProps extends Omit<React.HTMLAttributes<any>, 'color'> {
  as: keyof JSX.IntrinsicElements;
  href?: string;
  rel?: string;
  target?: string;
}

export interface TextProps extends TextElementProps, TextStyleProps, PseudoStylesProps {}

const extraConfig = system({
  color: {
    property: 'color',
    scale: 'textColors',
  },
  cursor: true,
  transition: true,
  textTransform: true,
});

const textDecoration = system({textDecoration: true});

const getPseudoStyles = (props: TextProps): {} => {
  const pseudoProps = Object.keys(props).filter(propName => propName.startsWith('_'));

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles = {};
  pseudoProps.forEach(pseudoProp => {
    pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
  });

  return css(pseudoStyles);
};

const getThemeStyles = (props: TextProps): {} => {
  if (
    props != null &&
    props.theme != null &&
    props.theme.elements != null &&
    props.theme.CUSTOMIZATION_OPT_IN_OVERRIDE_DO_NOT_USE
  ) {
    const customStyles = Object.keys(props.theme.elements).reduce((styles, key): {} => {
      if (props['data-paste-element'] === key) {
        return {...styles, ...props.theme.elements[key]};
      }
      return {...styles};
    }, {});
    return css(customStyles);
  }
  return {};
};

const getThemeVariants = (props: TextProps): {} => {
  if (
    props != null &&
    props.theme != null &&
    props.theme.elements != null &&
    props.theme.CUSTOMIZATION_OPT_IN_OVERRIDE_DO_NOT_USE
  ) {
    const variants = Object.keys(props.theme.elements).reduce((styles, key): {} => {
      if (props['data-paste-element'] === key) {
        return {...styles, ...props.theme.elements[key].variants};
      }
      return {...styles};
    }, {});
    return variant({variants});
  }
  return {};
};

/* eslint-disable emotion/syntax-preference */
// @ts-ignore
const StyledText = styled.span(
  {
    margin: 0,
    padding: 0,
  },
  compose(
    space,
    display,
    verticalAlign,
    overflow,
    position,
    textDecoration,
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
) as React.FC<TextProps>;
/* eslint-enable */

export const Text = React.forwardRef<HTMLElement, TextProps>(({children, element = 'TEXT', ...props}, ref) => (
  <StyledText data-paste-element={element} ref={ref} {...props}>
    {children}
  </StyledText>
));

Text.displayName = 'Text';

Text.defaultProps = {
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight30',
  color: 'colorText',
};

if (process.env.NODE_ENV === 'development') {
  Text.propTypes = TextPropTypes;
}

export * from './SafelySpreadProps';
