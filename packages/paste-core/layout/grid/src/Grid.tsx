import * as React from 'react';

import type {MarginProps, Space} from '@twilio-paste/style-props';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import type {ColumnProps, GridProps} from './types';
import {getOuterGutterPull, getSpacing, getResponsiveSpacing} from './utils';

export const getGutterStyles = (
  gutter?: Space,
  vertical: GridProps['vertical'] = false
): MarginProps | MarginProps[] => {
  const margin = getOuterGutterPull(gutter);

  if (Array.isArray(vertical)) {
    return getResponsiveSpacing(vertical as boolean[], 'margin', margin);
  }

  return getSpacing(vertical as boolean, 'margin', margin);
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
  (
    {as, children, element = 'GRID', equalColumnHeights, gutter, marginTop, marginBottom, vertical = false, ...props},
    ref
  ) => {
    const GridColumns = React.useMemo(
      () =>
        React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<ColumnProps>, {
                count: React.Children.count(children),
                gutter,
                vertical,
                stretchColumnContent: equalColumnHeights,
              })
            : child
        ),
      [children, vertical, equalColumnHeights, gutter]
    );

    const gutterStyles = React.useMemo(() => getGutterStyles(gutter, vertical), [gutter, vertical]);
    const flexDirection = React.useMemo(() => getFlexDirection(vertical), [vertical]);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as={as}
        alignItems={equalColumnHeights ? 'stretch' : null}
        element={element}
        flexDirection={flexDirection}
        flexWrap="wrap"
        display="flex"
        {...gutterStyles}
        marginTop={marginTop}
        marginBottom={marginBottom}
        minWidth="size0"
      >
        {GridColumns}
      </Box>
    );
  }
);

Grid.displayName = 'Grid';

export {Grid};
