import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';
import {Margin, Space, SpaceOptions} from '@twilio-paste/style-props';
import {Vertical} from '@twilio-paste/flex';
import {
  ColumnOffset,
  ColumnOffsetOptions,
  ColumnProps,
  ColumnSpanOptions,
  ColumnMinWidth,
  ColumnWidthSpan,
} from './types';

export const getNegativeMargin = (theme: ThemeShape, gutter?: Space): Margin => {
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

export const getFlexDirection = (vertical: Vertical): ColumnMinWidth => {
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

export const getColumnOffset = (offset: ColumnOffset): ResponsiveValue<string> => {
  if (Array.isArray(offset)) {
    return (offset as ColumnOffsetOptions[]).map((value: ColumnOffsetOptions) => {
      return `${(value / 12) * 100}%`;
    });
  }

  return `${((offset as ColumnOffsetOptions) / 12) * 100}%`;
};
