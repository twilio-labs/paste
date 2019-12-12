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
type VerticalOptions = boolean | 'column' | 'row';
export type Vertical = ResponsiveValue<VerticalOptions>;
type GrowOptions = boolean | number;
export type Grow = ResponsiveValue<GrowOptions>;
type ShrinkOptions = boolean | number;
export type Shrink = ResponsiveValue<ShrinkOptions>;
type BasisOptions = string | number;
export type Basis = ResponsiveValue<BasisOptions>;
type WrapOptions = boolean | 'wrap' | 'nowrap';
export type Wrap = ResponsiveValue<WrapOptions>;

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

export const getGrow = ({grow}: FlexProps): {} => {
  if (Array.isArray(grow)) {
    return (grow as GrowOptions[]).map((value: GrowOptions) => {
      return Number(value);
    });
  }

  if (typeof grow === 'number') {
    return grow;
  }

  if (grow) {
    return 1;
  }

  return 0;
};

export const getShrink = ({shrink, basis}: FlexProps): {} => {
  if (Array.isArray(shrink)) {
    return (shrink as ShrinkOptions[]).map((value: ShrinkOptions) => {
      return Number(value);
    });
  }

  if (typeof shrink === 'number') {
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

export const getSuffix = (item: Basis): {} => {
  const suffix = typeof item === 'number' || String(parseInt(item as string, 10)) === item ? 'px' : '';
  return item + suffix;
};

export const getBasis = ({basis}: FlexProps): {} => {
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

export const getVertical = ({vertical}: FlexProps): {} => {
  if (Array.isArray(vertical)) {
    return (vertical as VerticalOptions[]).map((value: VerticalOptions) => {
      if (typeof value === 'boolean') {
        return value === true ? 'column' : 'row';
      }
      return value;
    });
  }

  if (vertical) {
    return 'column';
  }

  return 'row';
};

export const getWrap = ({wrap}: FlexProps): {} => {
  if (Array.isArray(wrap)) {
    return (wrap as WrapOptions[]).map((value: WrapOptions) => {
      if (typeof value === 'boolean') {
        return value === true ? 'wrap' : 'nowrap';
      }
      return value;
    });
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

export const vAlignToProps = ({vAlignContent}: FlexProps): {} => {
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

export const hAlignToProps = ({hAlignContent}: FlexProps): {} => {
  if (Array.isArray(hAlignContent)) {
    return (hAlignContent as HorizontalAlignOptions[]).map(value => RemapedHorizontalAlignments[value]);
  }

  if (hAlignContent) {
    return RemapedHorizontalAlignments[hAlignContent as HorizontalAlignOptions];
  }

  return 'flex-start';
};

const getFlexStyles = (props: FlexProps): FlexboxProps => {
  const styles: FlexboxProps = {
    justifyContent: props.vertical
      ? React.useMemo(() => vAlignToProps(props), [props])
      : React.useMemo(() => hAlignToProps(props), [props]),
    alignItems: props.vertical
      ? React.useMemo(() => hAlignToProps(props), [props])
      : React.useMemo(() => vAlignToProps(props), [props]),
  };

  if (props.grow || props.shrink || props.basis) {
    styles.flexGrow = React.useMemo(() => getGrow(props), [props]);
    styles.flexShrink = React.useMemo(() => getShrink(props), [props]);
    styles.flexBasis = React.useMemo(() => getBasis(props), [props]);
  }

  if (props.vertical) {
    styles.flexDirection = React.useMemo(() => getVertical(props), [props]);
  }

  if (props.wrap) {
    styles.flexWrap = React.useMemo(() => getWrap(props), [props]);
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
