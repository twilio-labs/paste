import {
  boxShadow,
  compose,
  css,
  display,
  overflow,
  position,
  space,
  styled,
  system,
  typography,
  verticalAlign,
} from '@twilio-paste/styling-library';
import type {CursorProperty, OutlineProperty, TextTransformProperty, TransitionProperty} from 'csstype';
import type {
  Display,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  VerticalAlign,
} from '@twilio-paste/style-props';
import {isDeprecatedBoxShadowTokenProp, isDeprecatedTextColorTokenProp} from '@twilio-paste/style-props';
import {PseudoPropStyles} from './PseudoPropStyles';

export interface TextStyleProps extends OverflowProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {
  content?: string;
  cursor?: CursorProperty;
  display?: Display;
  outline?: OutlineProperty<string>;
  // Do not document, we prefer if folks do not use this property for i18n.
  textTransform?: TextTransformProperty;
  transition?: TransitionProperty;
  verticalAlign?: VerticalAlign;
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
  /** Typed as any because Text can literally be any HTML element */
  ref?: any | null;
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
  outline: true,
  transition: true,
  textTransform: true,
  wordBreak: true,
  wordWrap: true,
});

const textDecoration = system({textDecoration: true});

// eslint-disable-next-line @typescript-eslint/ban-types
const getPseudoStyles = (props: TextProps): {} => {
  const pseudoProps = Object.keys(props).filter((propName) => propName.startsWith('_')) as Array<
    keyof typeof PseudoPropStyles
  >;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: {[key: string]: any} = {};
  pseudoProps.forEach((pseudoProp) => {
    pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
  });

  return css(pseudoStyles);
};

/* eslint-disable emotion/syntax-preference */
// @ts-ignore
export const Text = styled.span(
  {
    margin: 0,
    padding: 0,
  },
  compose(boxShadow, display, overflow, position, space, textDecoration, typography, verticalAlign, extraConfig),
  getPseudoStyles
  // we do this because the default typings of emotion styled
  // means Text gets typed as a span, and can't be extended
  // correctly to utilise the as prop. The new HTML element attributes
  // always clash with the span html attributes. To override this,
  // we retype as a basic functional component which is easy to extend
) as React.FC<TextProps>;
/* eslint-enable */

Text.displayName = 'Text';

Text.defaultProps = {
  color: 'colorText',
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight30',
};

Text.propTypes = {
  boxShadow: isDeprecatedBoxShadowTokenProp,
  color: isDeprecatedTextColorTokenProp,
};

export * from './SafelySpreadProps';
