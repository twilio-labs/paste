import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {useTheme, ThemeShape} from '@twilio-paste/theme';
import {ResponsiveProp} from '@twilio-paste/style-props';
import {compose, layout, space} from 'styled-system';
import {ColumnProps, ColumnStyleProps} from './types';
import {getStackedColumns, getColumnGutters, getColumnOffset, getColumnSpan} from './helpers';

const getColumnStyles = (theme: ThemeShape, props: ColumnProps): ColumnStyleProps => {
  const columnStyles: ColumnStyleProps = {
    width: getColumnSpan(props),
  };

  if (props.gutter) {
    columnStyles.paddingLeft = getColumnGutters(theme, props.gutter);
    columnStyles.paddingRight = getColumnGutters(theme, props.gutter);
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
  const theme = useTheme();

  const ColumnStyles = React.useMemo(() => getColumnStyles(theme, {count, gutter, offset, span, vertical}), [
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
