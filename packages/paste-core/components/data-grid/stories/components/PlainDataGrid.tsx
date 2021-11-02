import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import type {BoxProps} from '@twilio-paste/box';
import {Paragraph} from '@twilio-paste/paragraph';
import {DataGrid, DataGridHead, DataGridRow, DataGridHeader, DataGridBody, DataGridCell, DataGridFoot} from '../../src';
import {TableHeaderData, TableBodyData} from './constants';

export const PlainDataGrid: React.FC<{element?: BoxProps['element']}> = ({element = 'DATA_GRID'}) => {
  /* eslint-disable react/no-array-index-key */
  return (
    <>
      <Paragraph>
        Note: for DataGrids with no interactivity, use the{' '}
        <Anchor href="https://paste.twilio.design/components/table">Table component</Anchor> instead!
      </Paragraph>
      <DataGrid aria-label="User information table" data-testid="data-grid" element={element} striped>
        <DataGridHead data-testid="data-grid-head" element={`${element}_HEAD`}>
          <DataGridRow element={`${element}_ROW`}>
            <DataGridHeader data-testid="data-grid-header" element={`${element}_HEADER`}>
              {TableHeaderData[0]}
            </DataGridHeader>
            <DataGridHeader element={`${element}_HEADER`}>{TableHeaderData[1]}</DataGridHeader>
            <DataGridHeader element={`${element}_HEADER`}>{TableHeaderData[2]}</DataGridHeader>
            <DataGridHeader element={`${element}_HEADER`}>{TableHeaderData[3]}</DataGridHeader>
            <DataGridHeader element={`${element}_HEADER`}>{TableHeaderData[4]}</DataGridHeader>
          </DataGridRow>
        </DataGridHead>
        <DataGridBody data-testid="data-grid-body" element={`${element}_BODY`}>
          {TableBodyData.map((row, rowIndex) => (
            <DataGridRow
              key={`row-${rowIndex}`}
              data-testid={rowIndex === 0 ? 'data-grid-row' : null}
              element={`${element}_ROW`}
            >
              {row.map((col, colIndex) => (
                <DataGridCell
                  element={`${element}_CELL`}
                  key={`col-${colIndex}`}
                  data-testid={rowIndex === 0 && colIndex === 0 ? 'data-grid-cell' : null}
                >
                  {col}
                </DataGridCell>
              ))}
            </DataGridRow>
          ))}
        </DataGridBody>
        <DataGridFoot data-testid="data-grid-foot" element={`${element}_FOOT`}>
          <DataGridRow>
            <DataGridCell element={`${element}_CELL`}>{TableHeaderData[0]}</DataGridCell>
            <DataGridCell element={`${element}_CELL`}>{TableHeaderData[1]}</DataGridCell>
            <DataGridCell element={`${element}_CELL`}>{TableHeaderData[2]}</DataGridCell>
            <DataGridCell element={`${element}_CELL`}>{TableHeaderData[3]}</DataGridCell>
            <DataGridCell element={`${element}_CELL`}>{TableHeaderData[4]}</DataGridCell>
          </DataGridRow>
        </DataGridFoot>
      </DataGrid>
    </>
  );
  /* eslint-enable react/no-array-index-key */
};
