import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {useTheme} from '@twilio-paste/theme';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {compose, layout, space, flexbox} from 'styled-system';
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

  if (!props.offset) {
    columnStyles.flexGrow = 1;
    columnStyles.flexShrink = 1;
    columnStyles.flexBasis = 'auto';
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
    layout,
    flexbox
  )
) as React.FC<ColumnProps>;

const Column: React.FC<ColumnProps> = ({children, count, gutter, offset, span, vertical}) => {
  const theme = useTheme();

  const ColumnStyles = React.useMemo(() => getColumnStyles(theme, {count, gutter, offset, span, vertical}), [
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
