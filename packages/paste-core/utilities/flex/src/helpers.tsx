import {
  Basis,
  BasisOptions,
  FlexProps,
  GrowOptions,
  HorizontalAlignOptions,
  ShrinkOptions,
  VerticalAlignOptions,
  VerticalOptions,
  WrapOptions,
} from './types';

// Gets grow and returns as an array of grow, the value of grow, 1, or 0
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

// Gets shrink and returns as an array of shrink, the value of shrink, 1, or 0
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

// Function for basis. Adds 'px' if basis is a number.
export const getSuffix = (item: Basis): {} => {
  const suffix = typeof item === 'number' || String(parseInt(item as string, 10)) === item ? 'px' : '';
  return item + suffix;
};

// Gets basis and returns as an array of basis, the value of basis, or auto
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

// Gets vertical and returns as an array of column/row, column, or row
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

// Gets wrap and returns as an array of wrap/nowrap, wrap, or nowrap
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

// Key value pairs for vertical alignments
const RemapedVerticalAlignments = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  stretch: 'stretch',
};

// Gets vAlignContent and returns array of verical key value pairs, a verical key value pair, or flex-start
export const vAlignToProps = ({vAlignContent}: FlexProps): {} => {
  if (Array.isArray(vAlignContent)) {
    return (vAlignContent as VerticalAlignOptions[]).map(value => RemapedVerticalAlignments[value]);
  }

  if (vAlignContent) {
    return RemapedVerticalAlignments[vAlignContent as VerticalAlignOptions];
  }

  return 'flex-start';
};

// Key value pairs for horizontal alignments
const RemapedHorizontalAlignments = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  around: 'space-around',
  between: 'space-between',
};

// Gets hAlignContent and returns array of horizontal key value pairs, a horizontal key value pair, or flex-start
export const hAlignToProps = ({hAlignContent}: FlexProps): {} => {
  if (Array.isArray(hAlignContent)) {
    return (hAlignContent as HorizontalAlignOptions[]).map(value => RemapedHorizontalAlignments[value]);
  }

  if (hAlignContent) {
    return RemapedHorizontalAlignments[hAlignContent as HorizontalAlignOptions];
  }

  return 'flex-start';
};
