import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ResponsiveValue} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {FlexboxProps} from '@twilio-paste/types';

export type DisplayOptions = ResponsiveValue<'flex' | 'inline-flex'>;
export type vAlignOptions = ResponsiveValue<'top' | 'center' | 'bottom' | 'stretch'>;
export type hAlignOptions = ResponsiveValue<'left' | 'center' | 'right' | 'around' | 'between'>;
export type AlignOptions = 'top' | 'center' | 'bottom' | 'stretch' | 'left' | 'center' | 'right' | 'around' | 'between';
export type VerticalOptions = ResponsiveValue<boolean | 'column' | 'row'>;
export type GrowOptions = ResponsiveValue<boolean | number>;
export type ShrinkOptions = ResponsiveValue<boolean | number>;
export type BasisOptions = ResponsiveValue<string | number>;
export type WrapOptions = ResponsiveValue<boolean | 'wrap' | 'nowrap'>;

export interface FlexProps {
  display?: DisplayOptions;
  vertical?: VerticalOptions;
  vAlignContent?: vAlignOptions;
  hAlignContent?: hAlignOptions;
  grow?: GrowOptions;
  shrink?: ShrinkOptions;
  basis?: BasisOptions;
  wrap?: WrapOptions;
}

function getGrow({grow}: FlexProps): {} {
  if (typeof grow === 'number' || Array.isArray(grow)) {
    return grow;
  }

  if (grow) {
    return 1;
  }

  return 0; // default
}

function getShrink({shrink, basis}: FlexProps): {} {
  if (typeof shrink === 'number' || Array.isArray(shrink)) {
    return shrink;
  }

  if (shrink) {
    return 1;
  }

  if (shrink === false) {
    return 0;
  }

  if (basis && basis !== 'auto') {
    return 0;
  }

  return 1; // default
}

function getBasis({basis}: FlexProps): {} {
  if (Array.isArray(basis)) {
    return basis.map(value => {
      // make this a function
      const suffix = typeof value === 'number' || String(parseInt(value as string, 10)) === value ? 'px' : '';
      return value + suffix;
    });
  }

  if (basis) {
    const suffix = typeof basis === 'number' || String(parseInt(basis as string, 10)) === basis ? 'px' : '';
    return basis + suffix;
  }

  return 'auto'; // default
}

function getVertical({vertical}: FlexProps): {} {
  if (Array.isArray(vertical)) {
    return vertical;
  }

  if (vertical) {
    return 'column';
  }

  return 'row'; // default
}

function getWrap({wrap}: FlexProps): {} {
  if (Array.isArray(wrap)) {
    return wrap;
  }

  if (wrap) {
    return 'wrap';
  }

  return 'nowrap'; // default
}

function getAlign(alignment: AlignOptions) {
  const alignOptions: {[key in AlignOptions]: string} = {
    center: 'center',
    bottom: 'flex-end',
    right: 'flex-end',
    stretch: 'stretch',
    around: 'space-around',
    between: 'space-between',
    top: 'flex-start',
    left: 'flex-start',
  };
  return alignOptions[alignment] || alignOptions['default'];
}

function alignPropToFlex(align: vAlignOptions | hAlignOptions): {} {
  if (Array.isArray(align)) {
    const alignment = (align as Array<vAlignOptions | hAlignOptions>).map(function(
      value: vAlignOptions | hAlignOptions
    ) {
      return getAlign(value);
    });
    return alignment;
  }

  if (align) {
    return getAlign(align);
  }

  return 'flex-start'; // default
}

function getFlexStyles(props: FlexProps): FlexboxProps {
  const {basis, vertical, grow, shrink, wrap, hAlignContent, vAlignContent} = props;
  const styles: FlexboxProps = {
    justifyContent: alignPropToFlex(vertical ? vAlignContent : hAlignContent),
    alignItems: alignPropToFlex(vertical ? hAlignContent : vAlignContent),
  };

  if (grow || shrink || basis) {
    styles.flexGrow = getGrow(props);
    styles.flexShrink = getShrink(props);
    styles.flexBasis = getBasis(props);
  }

  if (vertical) {
    styles.flexDirection = getVertical(props);
  }

  if (wrap) {
    styles.flexWrap = getWrap(props);
  }

  return styles;
}

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
