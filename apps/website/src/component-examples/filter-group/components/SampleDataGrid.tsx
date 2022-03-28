import * as React from 'react';
import {DataGrid, DataGridHead, DataGridRow, DataGridHeader, DataGridBody, DataGridCell} from '@twilio-paste/data-grid';

import {TABLE_HEADERS} from '../constants';
import {formatDate} from '../helpers';
import type {TableDataRow} from '../types';

export const SampleDataGrid: React.FC<{data: TableDataRow[]}> = ({data}) => (
  <DataGrid aria-label="Video rooms">
    <DataGridHead>
      <DataGridRow>
        {TABLE_HEADERS.map((header) => (
          <DataGridHeader key={header}>{header}</DataGridHeader>
        ))}
      </DataGridRow>
    </DataGridHead>
    <DataGridBody>
      {data.map(({sid, uniqueName, roomType, participants, dateCompleted}) => (
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
