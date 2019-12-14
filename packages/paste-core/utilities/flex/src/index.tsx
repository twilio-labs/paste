import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ResponsiveValue} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {FlexboxProps} from '@twilio-paste/style-props';

type DisplayOptions = 'flex' | 'inline-flex';
export type Display = ResponsiveValue<DisplayOptions>;
type VerticalAlignOptions = 'top' | 'center' | 'bottom' | 'stretch';
export type VerticalAlign = ResponsiveValue<VerticalAlignOptions>;
type HorizontalAlignOptions = 'left' | 'center' | 'right' | 'around' | 'between';
export type HorizontalAlign = ResponsiveValue<HorizontalAlignOptions>;
type VerticalOptions = boolean;
export type Vertical = ResponsiveValue<VerticalOptions>;
type GrowOptions = boolean | number;
export type Grow = ResponsiveValue<GrowOptions>;
type ShrinkOptions = boolean | number;
export type Shrink = ResponsiveValue<ShrinkOptions>;
type BasisOptions = string | number;
export type Basis = ResponsiveValue<BasisOptions>;
type WrapOptions = boolean;
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
  const FlexStyles = React.useMemo(() => getFlexStyles(props), [props]);
  return (
    <Box {...FlexStyles} display={props.display}>
      {props.children}
    </Box>
  );
};

Flex.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.oneOf(['flex', 'inline-flex']),
    PropTypes.arrayOf(PropTypes.oneOf(['flex', 'inline-flex'])),
  ] as any),
  vertical: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.bool]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])),
  ] as any),
  vAlignContent: PropTypes.oneOfType([
    PropTypes.oneOf(['top', 'center', 'bottom', 'stretch']),
    PropTypes.arrayOf(PropTypes.oneOf(['top', 'center', 'bottom', 'stretch'])),
  ] as any),
  hAlignContent: PropTypes.oneOfType([
    PropTypes.oneOf(['left', 'center', 'right', 'around', 'between']),
    PropTypes.arrayOf(PropTypes.oneOf(['left', 'center', 'right', 'around', 'between'])),
  ] as any),
  grow: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
  ] as any),
  shrink: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
  ] as any),
  basis: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ] as any),
  wrap: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.bool]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool])),
  ] as any),
};

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
export {Flex};
