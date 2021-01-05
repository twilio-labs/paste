import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ResponsiveProp} from '@twilio-paste/style-props';
import type {MarginProps, Space} from '@twilio-paste/style-props';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {GridProps} from './types';
import {getOuterGutterPull} from './utils';

const getGutterStyles = (gutter?: Space): MarginProps => {
  const marginStyles: MarginProps = {
    marginRight: getOuterGutterPull(gutter),
    marginLeft: getOuterGutterPull(gutter),
  };

  return marginStyles;
};

// Returns an array of column/row, column, or row based on setting grid as vertical
type GetFlexDirectionReturn = 'column' | 'row';
const getFlexDirection = (vertical: GridProps['vertical']): GetFlexDirectionReturn[] | GetFlexDirectionReturn => {
  if (Array.isArray(vertical)) {
    return vertical.map((value) => {
      if (typeof value === 'boolean') {
        return value === true ? 'column' : 'row';
      }
      return 'row';
    });
  }

  if (vertical) {
    return 'column';
  }

  return 'row';
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({as, children, equalColumnHeights, gutter, marginTop, marginBottom, vertical, ...props}, ref) => {
    const GridColumns = React.useMemo(
      () =>
        React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                count: React.Children.count(children),
                gutter,
                vertical,
                stretchColumnContent: equalColumnHeights,
              })
            : child
        ),
      [children]
    );

    const gutterStyles = React.useMemo(() => getGutterStyles(gutter), [gutter]);
    const flexDirection = React.useMemo(() => getFlexDirection(vertical), [vertical]);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as={as}
        alignItems={equalColumnHeights ? 'stretch' : null}
        flexDirection={flexDirection}
        flexWrap="wrap"
        display="flex"
        marginTop={marginTop}
        marginBottom={marginBottom}
        {...gutterStyles}
        minWidth="size0"
      >
        {GridColumns}
      </Box>
    );
  }
);
Grid.displayName = 'Grid';

Grid.defaultProps = {
  vertical: false,
};

if (process.env.NODE_ENV === 'development') {
  Grid.propTypes = {
    as: PropTypes.string as any,
    children: PropTypes.node.isRequired,
    vertical: ResponsiveProp(PropTypes.bool),
    equalColumnHeights: PropTypes.bool,
  };
}

export {Grid};
