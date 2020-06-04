import * as React from 'react';
import styled from '@emotion/styled';
import {compose, space, display, verticalAlign, overflow, typography, system, position, variant} from 'styled-system';
import css from '@styled-system/css';
import {CursorProperty} from 'csstype';
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

interface BaseTextProps
  extends Omit<React.HTMLAttributes<any>, 'color'>,
    SpaceProps,
    OverflowProps,
    PositionProps,
    TypographyProps {
  content?: string;
  href?: string;
  rel?: string;
  target?: string;
  cursor?: CursorProperty;
  display?: Display;
  verticalAlign?: VerticalAlign;
  transition?: string;
  theme?: any;
  variant?: string;
  element?: string;
}

interface PseudoStylesProps {
  _after?: BaseTextProps;
  _before?: BaseTextProps;
  _focus?: BaseTextProps;
  _hover?: BaseTextProps;
  _active?: BaseTextProps;
  _pressed?: BaseTextProps;
  _selected?: BaseTextProps;
  _focusWithin?: BaseTextProps;
  _invalid?: BaseTextProps;
  _disabled?: BaseTextProps;
  _grabbed?: BaseTextProps;
  _expanded?: BaseTextProps;
  _checked?: BaseTextProps;
  _mixed?: BaseTextProps;
  _odd?: BaseTextProps;
  _even?: BaseTextProps;
  _visited?: BaseTextProps;
  _readOnly?: BaseTextProps;
  _first?: BaseTextProps;
  _last?: BaseTextProps;
  _notFirst?: BaseTextProps;
  _notLast?: BaseTextProps;
}

export interface TextProps extends BaseTextProps, PseudoStylesProps {
  as: keyof JSX.IntrinsicElements;
}

const extraConfig = system({
  color: {
    property: 'color',
    scale: 'textColors',
  },
  cursor: true,
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

export const Text: React.FC<TextProps> = ({children, element = 'TEXT', ...props}) => {
  return (
    <StyledText data-paste-element={element} {...props}>
      {children}
    </StyledText>
  );
};

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
