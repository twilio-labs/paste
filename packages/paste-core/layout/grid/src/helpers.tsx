import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';
import {Margin, Padding, Space, SpaceOptions} from '@twilio-paste/style-props';
import {
  ColumnOffset,
  ColumnOffsetOptions,
  ColumnProps,
  ColumnSpanOptions,
  ColumnMinWidth,
  ColumnWidthSpan,
} from './types';

type Vertical = ResponsiveValue<boolean>;

// Gets the gutter and returns the value to be used as negative margin to Grid
export const getOuterGutterPull = (theme: ThemeShape, gutter?: Space): Margin => {
  if (Array.isArray(gutter)) {
    return (gutter as SpaceOptions[]).map((value: SpaceOptions) => {
      return `-${theme.space[value]}` as SpaceOptions;
    });
  }

  if (gutter) {
    return `-${theme.space[gutter as SpaceOptions]}` as SpaceOptions;
  }

  return 'auto';
};

// Gets the gutter and returns the value to be used as padding for Columns
export const getColumnGutters = (theme: ThemeShape, gutter?: Space): Padding => {
  if (Array.isArray(gutter)) {
    return (gutter as SpaceOptions[]).map((value: SpaceOptions) => {
      return `${theme.space[value]}` as SpaceOptions;
    });
  }

  if (gutter) {
    return `${theme.space[gutter as SpaceOptions]}` as SpaceOptions;
  }

  return `${theme.space[0]}` as SpaceOptions;
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
