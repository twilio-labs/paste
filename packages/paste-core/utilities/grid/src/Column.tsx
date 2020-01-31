import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {compose, layout, space, flexbox, ResponsiveValue} from 'styled-system';
import {FlexboxProps, LayoutProps, PaddingProps, Space} from '@twilio-paste/style-props';
import {FlexProps, Vertical} from '@twilio-paste/flex';

type ColumnMinWidth = ResponsiveValue<'100%' | '0'>;
type ColumnWidthSpan = ResponsiveValue<string>;
type ColumnOffsetOptions = number;
export type ColumnOffset = ResponsiveValue<ColumnOffsetOptions>;
type ColumnSpanOptions = number;
export type ColumnSpan = ResponsiveValue<ColumnSpanOptions>;

interface ColumnStyles extends Omit<LayoutProps, 'minWidth' | 'width'>, FlexboxProps, PaddingProps {
  marginLeft?: ResponsiveValue<string>;
  minWidth?: ColumnMinWidth;
  width?: ColumnWidthSpan;
}

export interface ColumnProps extends Omit<FlexProps, 'display' | 'width' | 'minWidth' | 'marginLeft'>, ColumnStyles {
  count?: number;
  gutter?: Space;
  offset?: ColumnOffset;
  span?: ColumnSpan;
  vertical?: Vertical;
}

const getVertical = (vertical: Vertical): ColumnMinWidth => {
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

const getSpan = ({count, span}: ColumnProps): ColumnWidthSpan => {
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

const getOffset = (offset: ColumnOffset): ResponsiveValue<string> => {
  if (Array.isArray(offset)) {
    return (offset as ColumnOffsetOptions[]).map((value: ColumnOffsetOptions) => {
      return `${(value / 12) * 100}%`;
    });
  }

  return `${((offset as ColumnOffsetOptions) / 12) * 100}%`;
};

const getColumnStyles = (props: ColumnProps): ColumnStyles => {
  const columnStyles: ColumnStyles = {
    width: getSpan(props),
  };

  if (props.gutter) {
    columnStyles.paddingLeft = props.gutter;
    columnStyles.paddingRight = props.gutter;
  }

  if (!props.offset) {
    columnStyles.flexGrow = 1;
    columnStyles.flexShrink = 1;
    columnStyles.flexBasis = 'auto';
  }

  if (props.offset) {
    columnStyles.marginLeft = getOffset(props.offset);
  }

  if (props.vertical && !props.offset) {
    columnStyles.minWidth = getVertical(props.vertical);
    columnStyles.marginLeft = 'space0';
  }

  return columnStyles;
};

const StyledColumn = styled.div(
  compose(
    space,
    layout,
    flexbox
  )
) as React.FC<ColumnProps>;

const Column: React.FC<ColumnProps> = ({children, count, gutter, offset, span, vertical}) => {
  const ColumnStyles = React.useMemo(() => getColumnStyles({count, gutter, offset, span, vertical}), [
    count,
    gutter,
    offset,
    span,
    vertical,
  ]);
  return (
    <StyledColumn {...ColumnStyles} display="flex">
      {children}
    </StyledColumn>
  );
};

Column.propTypes = {
  offset: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.number]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
  ] as any),
  span: PropTypes.oneOfType([
    PropTypes.oneOfType([PropTypes.number]),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
  ] as any),
};

Column.displayName = 'Column';

export {Column};
