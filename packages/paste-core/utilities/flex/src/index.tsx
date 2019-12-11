import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ResponsiveValue} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {FlexboxProps} from '@twilio-paste/types';

export type Display = ResponsiveValue<'flex' | 'inline-flex'>;
type VerticalAlignOptions = 'top' | 'center' | 'bottom' | 'stretch';
export type VerticalAlign = ResponsiveValue<VerticalAlignOptions>;
type HorizontalAlignOptions = 'left' | 'center' | 'right' | 'around' | 'between';
export type HorizontalAlign = ResponsiveValue<HorizontalAlignOptions>;
export type Vertical = ResponsiveValue<boolean | 'column' | 'row'>;
export type Grow = ResponsiveValue<boolean | number>;
export type Shrink = ResponsiveValue<boolean | number>;
type BasisOptions = string | number;
export type Basis = ResponsiveValue<BasisOptions>;
export type Wrap = ResponsiveValue<boolean | 'wrap' | 'nowrap'>;

export interface FlexProps {
  display?: Display;
  vertical?: Vertical;
  vAlignContent?: VerticalAlign;
  hAlignContent?: HorizontalAlign;
  grow?: Grow;
  shrink?: Shrink;
  basis?: Basis;
  wrap?: Wrap;
}

const getGrow = ({grow}: FlexProps): {} => {
  if (typeof grow === 'number' || Array.isArray(grow)) {
    return grow;
  }

  if (grow) {
    return 1;
  }

  return 0;
};

const getShrink = ({shrink, basis}: FlexProps): {} => {
  if (typeof shrink === 'number' || Array.isArray(shrink)) {
    return shrink;
  }

  if (typeof shrink === 'boolean') {
    return shrink ? 1 : 0;
  }

  if (basis && basis !== 'auto') {
    return 0;
  }

  return 1;
};

const getSuffix = (item: Basis): {} => {
  const suffix = typeof item === 'number' || String(parseInt(item as string, 10)) === item ? 'px' : '';
  return item + suffix;
};

const getBasis = ({basis}: FlexProps): {} => {
  if (Array.isArray(basis)) {
    return (basis as BasisOptions[]).map((value: BasisOptions) => {
      return getSuffix(value);
    });
  }

  if (basis) {
    return getSuffix(basis);
  }

  return 'auto';
};

const getVertical = ({vertical}: FlexProps): {} => {
  if (Array.isArray(vertical)) {
    return vertical;
  }

  if (vertical) {
    return 'column';
  }

  return 'row';
};

const getWrap = ({wrap}: FlexProps): {} => {
  if (Array.isArray(wrap)) {
    return wrap;
  }

  if (wrap) {
    return 'wrap';
  }

  return 'nowrap';
};

const RemapedVerticalAlignments = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  stretch: 'stretch',
};

const vAlignToProps = ({vAlignContent}: FlexProps): {} => {
  if (Array.isArray(vAlignContent)) {
    return (vAlignContent as VerticalAlignOptions[]).map(value => RemapedVerticalAlignments[value]);
  }

  if (vAlignContent) {
    return RemapedVerticalAlignments[vAlignContent as VerticalAlignOptions];
  }

  return 'flex-start';
};

const RemapedHorizontalAlignments = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  around: 'space-around',
  between: 'space-between',
};

const hAlignToProps = ({hAlignContent}: FlexProps): {} => {
  if (Array.isArray(hAlignContent)) {
    return (hAlignContent as HorizontalAlignOptions[]).map(value => RemapedHorizontalAlignments[value]);
  }

  if (hAlignContent) {
    return RemapedHorizontalAlignments[hAlignContent as HorizontalAlignOptions];
  }

  return 'flex-start';
};

const getFlexStyles = (props: FlexProps): FlexboxProps => {
  // const {basis, vertical, grow, shrink, wrap, hAlignContent, vAlignContent} = props;
  const styles: FlexboxProps = {
    justifyContent: props.vertical ? vAlignToProps(props) : hAlignToProps(props),
    alignItems: props.vertical ? hAlignToProps(props) : vAlignToProps(props),
  };

  if (props.grow || props.shrink || props.basis) {
    styles.flexGrow = getGrow(props);
    styles.flexShrink = getShrink(props);
    styles.flexBasis = getBasis(props);
  }

  if (props.vertical) {
    styles.flexDirection = getVertical(props);
  }

  if (props.wrap) {
    styles.flexWrap = getWrap(props);
  }

  return styles;
};

const Flex: React.FC<FlexProps> = props => {
  return (
    <Box {...getFlexStyles(props)} display={props.display}>
      {props.children}
    </Box>
  );
};

Flex.propTypes = {
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  vertical: PropTypes.bool || PropTypes.oneOf(['column', 'row']),
  vAlignContent: PropTypes.oneOf(['top', 'center', 'bottom', 'stretch']),
  hAlignContent: PropTypes.oneOf(['left', 'center', 'right', 'around', 'between']),
  grow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  shrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrap: PropTypes.bool || PropTypes.oneOf(['wrap', 'nowrap']),
};

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
export {Flex};
