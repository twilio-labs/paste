import * as React from 'react';
import { SkeletonLoader } from '@twilio-paste/skeleton-loader';

import {
  DataGrid,
  DataGridHead,
  DataGridRow,
  DataGridHeader,
  DataGridBody,
  DataGridCell,
  DataGridFoot,
} from '../../src';
import { TableHeaderData, TableBodyData } from './constants';

export const LoadingDataGrid = (): JSX.Element => {
  // Used for random looking column widths
  const widths = [67, 53, 79, 59, 73, 61, 89, 97, 71, 83];
  const widthsLength = widths.length;
  /* eslint-disable react/no-array-index-key */
  return (
    <DataGrid aria-label="User information table">
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader>{TableHeaderData[0]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[1]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[2]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[3]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[4]}</DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        {TableBodyData.map((row, rowIndex) => (
          <DataGridRow key={`row-${rowIndex}`}>
            {row.map((_, colIndex) => (
              <DataGridCell key={`col-${colIndex}`}>
                <SkeletonLoader width={`${widths[(rowIndex + colIndex) % widthsLength]}%`} />
              </DataGridCell>
            ))}
          </DataGridRow>
        ))}
      </DataGridBody>
      <DataGridFoot>
        <DataGridRow>
          <DataGridCell>{TableHeaderData[0]}</DataGridCell>
          <DataGridCell>{TableHeaderData[1]}</DataGridCell>
          <DataGridCell>{TableHeaderData[2]}</DataGridCell>
          <DataGridCell>{TableHeaderData[3]}</DataGridCell>
          <DataGridCell>{TableHeaderData[4]}</DataGridCell>
        </DataGridRow>
      </DataGridFoot>
    </DataGrid>
  );
  /* eslint-enable react/no-array-index-key */
};
