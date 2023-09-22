import { Box } from '@twilio-paste/box';
import * as React from 'react';

import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridHeaderSort,
  DataGridRow,
} from '../../src';
import type { SortDirection } from '../../src';
import { I18nTableBodyData, I18nTableHeaderData } from './constants';

// Sorting function
const simpleComparator = (a: string[], b: string[], ascending: boolean, columnId: number): number => {
  if (a[columnId] === b[columnId]) {
    return 0;
  }
  if (a[columnId] > b[columnId]) {
    return ascending ? 1 : -1;
  }
  return ascending ? -1 : 1;
};

const numColumns = I18nTableHeaderData.length;
const initialHeaderData = [...new Array(numColumns)].map((_, index) => (index === 0 ? 'ascending' : 'none'));
const initialBodyData = I18nTableBodyData.sort((a, b) => simpleComparator(a, b, true, 0));

export const I18nDataGrid = (): React.ReactNode => {
  const [sortedColumns, setSortedColumns] = React.useState<Array<SortDirection>>(initialHeaderData);
  const [sortedData, setSortedData] = React.useState(initialBodyData);

  // Handle sorting behavior
  const handleSortingColumn = (columnId: number): void => {
    // Update the state of the sort direction in column headers
    const newSortedColumns: Array<SortDirection> = sortedColumns.map(() => 'none');
    if (sortedColumns[columnId] === 'ascending') {
      newSortedColumns[columnId] = 'descending';
    } else {
      newSortedColumns[columnId] = 'ascending';
    }
    setSortedColumns(newSortedColumns);

    // Update the table data to be sorted correctly
    setSortedData(
      I18nTableBodyData.sort((a, b) => simpleComparator(a, b, newSortedColumns[columnId] === 'ascending', columnId)),
    );
  };

  /* eslint-disable react/no-array-index-key */
  return (
    <DataGrid aria-label="User information table" striped>
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader aria-sort={sortedColumns[0]} data-testid="header">
            <Box display="flex" alignItems="center" columnGap="space20">
              {I18nTableHeaderData[0]}
              <DataGridHeaderSort
                direction={sortedColumns[0]}
                onClick={() => handleSortingColumn(0)}
                data-testid="header-sort"
              />
            </Box>
          </DataGridHeader>
          <DataGridHeader aria-sort={sortedColumns[1]}>
            <Box display="flex" alignItems="center" columnGap="space20">
              {I18nTableHeaderData[1]}
              <DataGridHeaderSort direction={sortedColumns[1]} onClick={() => handleSortingColumn(1)} />
            </Box>
          </DataGridHeader>
          <DataGridHeader aria-sort={sortedColumns[2]}>
            <Box display="flex" alignItems="center" columnGap="space20">
              {I18nTableHeaderData[2]}
              <DataGridHeaderSort direction={sortedColumns[2]} onClick={() => handleSortingColumn(2)} />
            </Box>
          </DataGridHeader>
          <DataGridHeader aria-sort={sortedColumns[3]}>
            <Box display="flex" alignItems="center" columnGap="space20">
              {I18nTableHeaderData[3]}
              <DataGridHeaderSort direction={sortedColumns[3]} onClick={() => handleSortingColumn(3)} />
            </Box>
          </DataGridHeader>
          <DataGridHeader aria-sort={sortedColumns[4]}>
            <Box display="flex" alignItems="center" columnGap="space20">
              {I18nTableHeaderData[4]}
              <DataGridHeaderSort direction={sortedColumns[4]} onClick={() => handleSortingColumn(4)} />
            </Box>
          </DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        {sortedData.map((row) => (
          <DataGridRow key={`${row[0]}-${row[1]}`}>
            {row.map((col, colIndex) => (
              <DataGridCell key={`${col}-${colIndex}`}>{col}</DataGridCell>
            ))}
          </DataGridRow>
        ))}
      </DataGridBody>
    </DataGrid>
  );
  /* eslint-enable react/no-array-index-key */
};

I18nDataGrid.storyName = 'i18n Data Grid';
