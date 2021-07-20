import type {ResponsiveValue} from '@twilio-paste/styling-library';
import type {Margin, Padding, Space, SpaceOptions} from '@twilio-paste/style-props';
import type {
  ColumnOffset,
  ColumnOffsetOptions,
  ColumnProps,
  ColumnSpanOptions,
  ColumnMinWidth,
  ColumnWidthSpan,
} from './types';

type Vertical = ResponsiveValue<boolean>;

const getVerticalSpacing = (prefix: string, spacing: Margin | Padding): {[x: string]: Margin | Padding} => ({
  [`${prefix}Top`]: spacing,
  [`${prefix}Bottom`]: spacing,
});
const getHorizontalSpacing = (prefix: string, spacing: Margin | Padding): {[x: string]: Margin | Padding} => ({
  [`${prefix}Right`]: spacing,
  [`${prefix}Left`]: spacing,
});

export const getSpacing = (
  vertical: boolean,
  prefix: 'margin' | 'padding',
  spacing: Margin | Padding
): {[x: string]: Margin | Padding} => {
  const DEFAULT = {
    [`${prefix}Top`]: 'space0',
    [`${prefix}Bottom`]: 'space0',
    [`${prefix}Right`]: 'space0',
    [`${prefix}Left`]: 'space0',
  };
  const margins = vertical ? getVerticalSpacing(prefix, spacing) : getHorizontalSpacing(prefix, spacing);

  return {...DEFAULT, ...margins};
};

// Gets the gutter and returns the value to be used as negative margin to Grid
export const getOuterGutterPull = (gutter?: Space): Margin => {
  if (Array.isArray(gutter)) {
    return (gutter as SpaceOptions[]).map((value: SpaceOptions) => {
      if (value !== 'space0') {
        return value.replace('space', 'spaceNegative') as SpaceOptions;
      }
      if (value === 'space0') {
        return 'space0' as SpaceOptions;
      }
      return null;
    });
  }

  if (gutter === 'space0') {
    return 'space0';
  }

  if (gutter && typeof gutter === 'string') {
    return gutter.replace('space', 'spaceNegative') as SpaceOptions;
  }

  return 'auto';
};

export const getResponsiveSpacing = (vertical: boolean[], prefix: string, spacing) => {
  const styles = {
    [`${prefix}Top`]: ['space0', 'space0', 'space0'],
    [`${prefix}Bottom`]: ['space0', 'space0', 'space0'],
    [`${prefix}Right`]: ['space0', 'space0', 'space0'],
    [`${prefix}Left`]: ['space0', 'space0', 'space0'],
  };

  vertical.forEach((isVertical, idx) => {
    if (isVertical) {
      styles[`${prefix}Top`][idx] = spacing;
      styles[`${prefix}Bottom`][idx] = spacing;
    } else {
      styles[`${prefix}Right`][idx] = spacing;
      styles[`${prefix}Left`][idx] = spacing;
    }
  });

  return styles;
};

// Gets the vertical prop and returns 100% or 0 to be used as Column minWidths
export const getStackedColumns = (vertical: Vertical): ColumnMinWidth => {
  if (Array.isArray(vertical)) {
    return (vertical as Vertical[]).map((value: Vertical) => {
      if (typeof value === 'boolean') {
        return value === true ? '100%' : '0';
      }
      return null;
    });
  }

  if (vertical) {
    return '100%';
  }

  return '0';
};

// Gets the Column span prop, calculates, and returns the value to be used as the Column width
export const getColumnSpan = ({count, span}: ColumnProps): ColumnWidthSpan => {
  if (Array.isArray(span) && count) {
    return (span as ColumnSpanOptions[]).map((value: ColumnSpanOptions) => {
      return `${(value / 12) * 100}%`;
    });
  }

  if (typeof span === 'number' && count && count <= 12) {
    return `${(span / 12) * 100}%`;
  }

  if (count !== undefined) {
    return `${(1 / count) * 100}%`;
  }

  return `${(1 / 12) * 100}%`;
};

// Gets the Column offset prop, calculates, and returns the value to be used as the Column marginLeft
export const getColumnOffset = (offset: ColumnOffset): ResponsiveValue<string> => {
  if (Array.isArray(offset)) {
    return (offset as ColumnOffsetOptions[]).map((value: ColumnOffsetOptions) => {
      return `${(value / 12) * 100}%`;
    });
  }

  return `${((offset as ColumnOffsetOptions) / 12) * 100}%`;
};
