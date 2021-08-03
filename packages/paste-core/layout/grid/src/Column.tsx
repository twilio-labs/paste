import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {StyledBoxProps} from '@twilio-paste/box';
import {safelySpreadBoxProps, getCustomElementStyles} from '@twilio-paste/box';
import {styled, compose, flexbox, layout, space} from '@twilio-paste/styling-library';
import type {StyledComponent} from '@twilio-paste/styling-library';
import {ResponsiveProp} from '@twilio-paste/style-props';
import type {ColumnProps, ColumnStyleProps} from './types';
import {getStackedColumns, getColumnOffset, getColumnSpan, getColumnPadding} from './utils';

export const getColumnStyles = ({
  count,
  span,
  gutter,
  offset,
  vertical,
  stretchColumnContent,
}: ColumnProps): ColumnStyleProps => {
  const columnStyles: ColumnStyleProps = {
    width: getColumnSpan({count, span}),
    ...getColumnPadding({gutter, vertical}),
  };

  if (offset) {
    columnStyles.marginLeft = getColumnOffset(offset);
  }

  if (vertical && !offset) {
    columnStyles.minWidth = getStackedColumns(vertical);
    columnStyles.marginLeft = 'space0';
  }

  if (stretchColumnContent) {
    columnStyles.alignContent = 'stretch';
    columnStyles.display = 'flex';
  }

  return columnStyles;
};

// @ts-ignore can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
const StyledColumn = styled.div<StyledBoxProps>(
  compose(space, flexbox, layout),
  getCustomElementStyles
) as StyledComponent<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, 'color'>,
  ColumnProps,
  Record<string, unknown>
>;

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({as, children, count, element = 'COLUMN', gutter, offset, span, stretchColumnContent, vertical, ...props}, ref) => {
    const ColumnStyles = React.useMemo(
      () => getColumnStyles({count, gutter, offset, span, stretchColumnContent, vertical}),
      [count, gutter, offset, span, stretchColumnContent, vertical]
    );
    return (
      <StyledColumn {...safelySpreadBoxProps(props)} {...ColumnStyles} as={as} data-paste-element={element} ref={ref}>
        {children}
      </StyledColumn>
    );
  }
);

Column.displayName = 'Column';

Column.propTypes = {
  as: PropTypes.string as any,
  element: PropTypes.string,
  offset: ResponsiveProp(PropTypes.number),
  span: ResponsiveProp(PropTypes.number),
};

export {Column};
