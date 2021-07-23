import type {ResponsiveValue} from '@twilio-paste/styling-library';
import type {Margin, Padding, Space, SpaceOptions} from '@twilio-paste/style-props';
import type {
  ColumnOffset,
  ColumnOffsetOptions,
  ColumnProps,
  ColumnSpanOptions,
  ColumnMinWidth,
  ColumnWidthSpan,
  ColumnPadding,
} from './types';

type Vertical = ResponsiveValue<boolean>;

const getSpaceDefault = (responsive = false): 'space0'[] | 'space0' =>
  responsive ? new Array(3).fill('space0') : 'space0';

const initDefaultSpacing = ({
  prefix,
  responsive,
}: {
  prefix: string;
  responsive: boolean;
}): {[x: string]: Margin | Padding} => ({
  [`${prefix}Top`]: getSpaceDefault(responsive),
  [`${prefix}Bottom`]: getSpaceDefault(responsive),
  [`${prefix}Right`]: getSpaceDefault(responsive),
  [`${prefix}Left`]: getSpaceDefault(responsive),
});

export const getSpacing = (
  vertical: boolean,
  prefix: 'margin' | 'padding',
  spacing: Margin | Padding | undefined
): {[x: string]: Margin | Padding} => {
  const computedSpacing = initDefaultSpacing({prefix, responsive: false});

  if (spacing === undefined) {
    return computedSpacing;
  }
  if (vertical) {
    computedSpacing[`${prefix}Top`] = spacing;
    computedSpacing[`${prefix}Bottom`] = spacing;
  } else {
    computedSpacing[`${prefix}Right`] = spacing;
    computedSpacing[`${prefix}Left`] = spacing;
  }

  return computedSpacing;
};

export const getResponsiveSpacing = (
  vertical: boolean[],
  prefix: string,
  spacing: (Margin | Padding) | (Margin[] | Padding[]) | undefined
): {[x: string]: (Margin | Padding)[]} => {
  const styles = {
    [`${prefix}Top`]: ['space0', 'space0', 'space0'] as (Margin | Padding)[],
    [`${prefix}Bottom`]: ['space0', 'space0', 'space0'] as (Margin | Padding)[],
    [`${prefix}Right`]: ['space0', 'space0', 'space0'] as (Margin | Padding)[],
    [`${prefix}Left`]: ['space0', 'space0', 'space0'] as (Margin | Padding)[],
  };

  const spacingIsEmptyArray = Array.isArray(spacing) && spacing.length === 0;

  if (spacing === undefined || spacingIsEmptyArray) {
    return styles;
  }

  vertical.forEach((isVertical: boolean, screenSize) => {
    const spacingForScreenSize = Array.isArray(spacing) ? spacing[screenSize] : spacing;
    if (isVertical) {
      styles[`${prefix}Top`][screenSize] = spacingForScreenSize;
      styles[`${prefix}Bottom`][screenSize] = spacingForScreenSize;
    } else {
      styles[`${prefix}Right`][screenSize] = spacingForScreenSize;
      styles[`${prefix}Left`][screenSize] = spacingForScreenSize;
    }
  });

  return styles;
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

export const getColumnPadding = ({vertical, gutter}: ColumnProps): ColumnPadding => {
  return Array.isArray(vertical)
    ? getResponsiveSpacing(vertical as boolean[], 'padding', gutter as SpaceOptions[])
    : getSpacing(vertical as boolean, 'padding', gutter as SpaceOptions);
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
