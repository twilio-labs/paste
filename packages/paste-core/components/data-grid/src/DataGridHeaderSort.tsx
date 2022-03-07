import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {ArrowDownIcon} from '@twilio-paste/icons/esm/ArrowDownIcon';
import {ArrowUpIcon} from '@twilio-paste/icons/esm/ArrowUpIcon';
import {UnsortedIcon} from '@twilio-paste/icons/esm/UnsortedIcon';

export type SortDirection = 'ascending' | 'descending' | 'none';

interface DataGridHeaderSortIconProps {
  direction: SortDirection;
  element?: BoxProps['element'];
  i18nAscendingLabel?: string;
  i18nDescendingLabel?: string;
  i18nUnsortedLabel?: string;
}

const DataGridHeaderSortIcon: React.FC<DataGridHeaderSortIconProps> = ({direction, element}) => {
  switch (direction) {
    case 'ascending':
      return <ArrowUpIcon decorative element={element} />;
    case 'descending':
      return <ArrowDownIcon decorative element={element} />;
    case 'none':
      return <UnsortedIcon decorative element={element} />;
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
  i18nAscendingLabel = 'Sort ascending',
  i18nDescendingLabel = 'Sort descending',
  i18nUnsortedLabel = 'Unsorted',
  ...props
}) => {
  const i18nLabelDirectionMap = {
    ascending: i18nAscendingLabel,
    descending: i18nDescendingLabel,
    none: i18nUnsortedLabel,
  };

  return (
    <Button element={element} variant="reset" size="reset" onClick={onClick} {...props}>
      <DataGridHeaderSortIcon element={`${element}_ICON`} direction={direction} />
      <ScreenReaderOnly>{i18nLabelDirectionMap[direction]}</ScreenReaderOnly>
    </Button>
  );
};

DataGridHeaderSort.displayName = 'DataGridHeaderSort';
DataGridHeaderSort.propTypes = {
  direction: PropTypes.oneOf<SortDirection>(['ascending', 'descending', 'none']).isRequired,
  onClick: PropTypes.func,
  element: PropTypes.string,
};
