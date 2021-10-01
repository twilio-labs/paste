import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ArrowDownIcon} from '@twilio-paste/icons/esm/ArrowDownIcon';
import {ArrowUpIcon} from '@twilio-paste/icons/esm/ArrowUpIcon';
import {UnsortedIcon} from '@twilio-paste/icons/esm/UnsortedIcon';

export type SortDirection = 'ascending' | 'descending' | 'none';

interface DataGridHeaderSortIconProps {
  direction: SortDirection;
  element?: BoxProps['element'];
}

const DataGridHeaderSortIcon: React.FC<DataGridHeaderSortIconProps> = ({direction, element}) => {
  switch (direction) {
    case 'ascending':
      return <ArrowUpIcon decorative={false} element={element} title="Sort ascending" />;
    case 'descending':
      return <ArrowDownIcon decorative={false} element={element} title="Sort descending" />;
    case 'none':
      return <UnsortedIcon decorative={false} element={element} title="Unsorted" />;
    default:
      return null;
  }
};

export interface DataGridHeaderSortProps extends DataGridHeaderSortIconProps {
  onClick?: () => void;
}

/**
 * DataGrid sort button component. Must be placed in a DataGridHeader
 *
 * @param {"ascending" | "descending" | "none"} direction - provided to determine which icon to render
 * @param {function} onClick - callback for when the button is clicked
 * @param {string} element - customization element
 */
export const DataGridHeaderSort: React.FC<DataGridHeaderSortProps> = ({
  direction,
  onClick,
  element = 'DATA_GRID_HEADER_SORT',
  ...props
}) => {
  return (
    // @ts-ignore fixme when button accepts element
    <Button element={element} variant="reset" size="reset" onClick={onClick} {...props}>
      <DataGridHeaderSortIcon element={`${element}_ICON`} direction={direction} />
    </Button>
  );
};

DataGridHeaderSort.displayName = 'DataGridHeaderSort';
DataGridHeaderSort.propTypes = {
  direction: PropTypes.oneOf<SortDirection>(['ascending', 'descending', 'none']).isRequired,
  onClick: PropTypes.func,
  element: PropTypes.string,
};
