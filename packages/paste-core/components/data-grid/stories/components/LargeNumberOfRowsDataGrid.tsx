import {DataGridCell, DataGridHead, DataGridHeader, DataGridRow} from '../../src';

import {Box} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import React from 'react';
import {VirtualizedDataGrid} from '../../src/VirtualizedDataGrid';

const recordTemplate = {id: 0, col1: 'Column 1', col2: 'Column 2', col3: 'Column 3', col4: 'Column 4'};
const records = new Array(50000)
  .fill(recordTemplate)
  .map((record, index) => ({...record, id: index} as typeof recordTemplate));

export const LargeNumberOfRowsDataGrid: React.FC = () => {
  const rowTemplate = (row: typeof recordTemplate): React.ReactNode => {
    return (
      <DataGridRow key={`row-${row.id}`}>
        <DataGridCell>{row.id.toString()}</DataGridCell>
        <DataGridCell>{row.col1}</DataGridCell>
        <DataGridCell>{row.col2}</DataGridCell>
        <DataGridCell>{row.col3}</DataGridCell>
        <DataGridCell>{row.col4}</DataGridCell>
      </DataGridRow>
    );
  };

  return (
    <Box>
      <Paragraph>Showing {records.length} records.</Paragraph>

      <VirtualizedDataGrid<typeof recordTemplate>
        aria-label="Large Number of Rows"
        striped
        rows={records}
        tableHeight={560}
        rowHeight={45}
        headerHeight={45.5}
        rowTemplate={rowTemplate}
        columnsCount={5}
      >
        <DataGridHead>
          <DataGridRow>
            <DataGridHeader>Id</DataGridHeader>
            <DataGridHeader>Col 1</DataGridHeader>
            <DataGridHeader>Col 2</DataGridHeader>
            <DataGridHeader>Col 3</DataGridHeader>
            <DataGridHeader>Col 4</DataGridHeader>
          </DataGridRow>
        </DataGridHead>
      </VirtualizedDataGrid>
    </Box>
  );
};
