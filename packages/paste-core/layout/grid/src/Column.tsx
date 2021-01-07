import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, compose, flexbox, layout, space} from '@twilio-paste/styling-library';
import {ResponsiveProp} from '@twilio-paste/style-props';
import {ColumnProps, ColumnStyleProps} from './types';
import {getStackedColumns, getColumnOffset, getColumnSpan} from './utils';

export const getColumnStyles = (props: ColumnProps): ColumnStyleProps => {
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

  if (props.stretchColumnContent) {
    columnStyles.alignContent = 'stretch';
    columnStyles.display = 'flex';
  }

  return columnStyles;
};

const StyledColumn = styled.div(
  compose(
    space,
    flexbox,
    layout
  )
) as React.FC<ColumnProps>;

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({as, children, count, gutter, offset, span, stretchColumnContent, vertical}, ref) => {
    const ColumnStyles = React.useMemo(
      () => getColumnStyles({count, gutter, offset, span, stretchColumnContent, vertical}),
      [count, gutter, offset, span, stretchColumnContent, vertical]
    );
    return (
      <StyledColumn {...ColumnStyles} as={as} ref={ref}>
        {children}
      </StyledColumn>
    );
  }
);
Column.displayName = 'Column';

if (process.env.NODE_ENV === 'development') {
  Column.propTypes = {
    as: PropTypes.string as any,
    offset: ResponsiveProp(PropTypes.number),
    span: ResponsiveProp(PropTypes.number),
  };
}

export {Column};
