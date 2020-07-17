import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, compose, layout, space} from '@twilio-paste/styling-library';
import {ResponsiveProp} from '@twilio-paste/style-props';
import {ColumnProps, ColumnStyleProps} from './types';
import {getStackedColumns, getColumnOffset, getColumnSpan} from './utils';

const getColumnStyles = (props: ColumnProps): ColumnStyleProps => {
  const columnStyles: ColumnStyleProps = {
    width: getColumnSpan(props),
  };

  if (props.gutter) {
    columnStyles.paddingLeft = props.gutter;
    columnStyles.paddingRight = props.gutter;
  }

  if (props.offset) {
    columnStyles.marginLeft = getColumnOffset(props.offset);
  }

  if (props.vertical && !props.offset) {
    columnStyles.minWidth = getStackedColumns(props.vertical);
    columnStyles.marginLeft = 'space0';
  }

  return columnStyles;
};

const StyledColumn = styled.div(
  compose(
    space,
    layout
  )
) as React.FC<ColumnProps>;

const Column: React.FC<ColumnProps> = ({as, children, count, gutter, offset, span, vertical}) => {
  const ColumnStyles = React.useMemo(() => getColumnStyles({count, gutter, offset, span, vertical}), [
    count,
    gutter,
    offset,
    span,
    vertical,
  ]);
  return (
    <StyledColumn {...ColumnStyles} as={as}>
      {children}
    </StyledColumn>
  );
};
Column.displayName = 'Column';

if (process.env.NODE_ENV === 'development') {
  Column.propTypes = {
    as: PropTypes.string as any,
    offset: ResponsiveProp(PropTypes.number),
    span: ResponsiveProp(PropTypes.number),
  };
}

export {Column};
