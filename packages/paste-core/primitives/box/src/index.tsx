import styled from '@emotion/styled';
import {compose, layout, space, background, border, boxShadow, position, flexbox, system} from 'styled-system';
import css from '@styled-system/css';
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
  WhiteSpaceProperty,
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
  BackgroundAttachmentProperty,
  OutlineProperty,
  FloatProperty,
  WillChangeProperty,
  TextOverflowProperty,
} from 'csstype';
import {PseudoPropStyles} from './PseudoPropStyles';
import {BoxPropTypes} from './BoxPropTypes';

export interface BaseBoxProps
  extends React.HTMLAttributes<any>,
    LayoutProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    FlexboxProps {
  as?: keyof JSX.IntrinsicElements;
  content?: string;
  cursor?: CursorProperty;
  appearance?: AppearanceProperty;
  animation?: AnimationProperty;
  transform?: TransformProperty;
  transformOrigin?: TransformOriginProperty<string>;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  textOverflow?: TextOverflowProperty;
  userSelect?: UserSelectProperty;
  pointerEvents?: PointerEventsProperty;
  boxSizing?: BoxSizingProperty;
  resize?: ResizeProperty;
  transition?: TransitionProperty;
  listStyleType?: ListStyleTypeProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleImage?: ListStyleImageProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty<string>;
  backgroundAttachment?: BackgroundAttachmentProperty;
  outline?: OutlineProperty<string>;
  float?: FloatProperty;
  willChange?: WillChangeProperty;
  textDecoration?: TypographyProps['textDecoration'];
  /** Typed as any because Box can literally be any HTML element */
  ref?: any | null;
}

interface PseudoStylesProps {
  _after?: BaseBoxProps;
  _before?: BaseBoxProps;
  _focus?: BaseBoxProps;
  _hover?: BaseBoxProps;
  _active?: BaseBoxProps;
  _pressed?: BaseBoxProps;
  _selected?: BaseBoxProps;
  _focusWithin?: BaseBoxProps;
  _invalid?: BaseBoxProps;
  _disabled?: BaseBoxProps;
  _grabbed?: BaseBoxProps;
  _expanded?: BaseBoxProps;
  _checked?: BaseBoxProps;
  _mixed?: BaseBoxProps;
  _odd?: BaseBoxProps;
  _even?: BaseBoxProps;
  _visited?: BaseBoxProps;
  _readOnly?: BaseBoxProps;
  _first?: BaseBoxProps;
  _last?: BaseBoxProps;
  _groupHover?: BaseBoxProps;
  _notFirst?: BaseBoxProps;
  _notLast?: BaseBoxProps;
  _placeholder?: BaseBoxProps;
}

export interface BoxProps extends BaseBoxProps, PseudoStylesProps {}

const extraConfig = system({
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'backgroundColors',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'borderColors',
  },
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  textOverflow: true,
  userSelect: true,
  pointerEvents: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: 'backgroundAttachment',
  },
  outline: true,
  float: true,
  willChange: true,
  textDecoration: true,
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

/* eslint-disable emotion/syntax-preference */
export const Box = styled.div(
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
    extraConfig
  ),
  getPseudoStyles
) as React.FC<BoxProps>;
/* eslint-enable */

Box.displayName = 'Box';

if (process.env.NODE_ENV === 'development') {
  Box.propTypes = BoxPropTypes;
}

export * from './SafelySpreadProps';
