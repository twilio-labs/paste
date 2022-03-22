import * as React from 'react';
import {DataGrid, DataGridHead, DataGridRow, DataGridHeader, DataGridBody, DataGridCell} from '@twilio-paste/data-grid';

import {tableHeaders} from '../constants';
import {formatDate} from '../helpers';
import type {TableDataRow} from '../types';

export const SampleDataGrid: React.FC<{tableData: TableDataRow[]}> = ({tableData}) => (
  <DataGrid aria-label="Video rooms">
    <DataGridHead>
      <DataGridRow>
        {tableHeaders.map((header) => (
          <DataGridHeader key={header}>{header}</DataGridHeader>
        ))}
      </DataGridRow>
    </DataGridHead>
    <DataGridBody>
      {tableData.map(({sid, uniqueName, roomType, participants, dateCompleted}) => (
        <DataGridRow key={sid}>
          <DataGridCell>{sid}</DataGridCell>
          <DataGridCell>{uniqueName}</DataGridCell>
          <DataGridCell>{roomType}</DataGridCell>
          <DataGridCell>{participants}</DataGridCell>
          <DataGridCell>{formatDate(dateCompleted)}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGridBody>
  </DataGrid>
);
