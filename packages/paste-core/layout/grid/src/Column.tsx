import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ResponsiveProp} from '@twilio-paste/style-props';
import type {Space} from '@twilio-paste/style-props';
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
    columnStyles.marginLeft = getColumnOffset(offset) as Space;
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

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({as, children, count, element = 'COLUMN', gutter, offset, span, stretchColumnContent, vertical, ...props}, ref) => {
    const ColumnStyles = React.useMemo(
      () => getColumnStyles({count, gutter, offset, span, stretchColumnContent, vertical}),
      [count, gutter, offset, span, stretchColumnContent, vertical]
    );
    return (
      <Box {...safelySpreadBoxProps(props)} {...ColumnStyles} as={as} element={element} ref={ref}>
        {children}
      </Box>
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
