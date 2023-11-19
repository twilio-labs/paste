import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridFoot,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from "../../src";

export const StickyHeaderDataGrid: React.FC<React.PropsWithChildren<{ element?: BoxProps["element"] }>> = ({
  element = "DATA_GRID",
}) => {
  /* eslint-disable react/no-array-index-key */
  return (
    <>
      <DataGrid aria-label="User information table" data-testid="data-grid" element={element}>
        <DataGridHead data-testid="data-grid-head" element={`${element}_HEAD`} stickyHeader>
          <DataGridRow element={`${element}_ROW`}>
            <DataGridHeader element={`${element}_HEADER`}>
              Header should stick on the top while scrolling
            </DataGridHeader>
          </DataGridRow>
        </DataGridHead>
        <DataGridBody data-testid="data-grid-body" element={`${element}_BODY`}>
          {[...new Array(20).keys()].map((rowIndex) => (
            <DataGridRow key={`row-${rowIndex}`} data-testid="data-grid-row" element={`${element}_ROW`}>
              <DataGridCell element={`${element}_CELL`} key="col-0" data-testid="data-grid-cell">
                content
              </DataGridCell>
            </DataGridRow>
          ))}
        </DataGridBody>
        <DataGridFoot data-testid="data-grid-foot" element={`${element}_FOOT`}>
          <DataGridRow>
            <DataGridCell element={`${element}_CELL`}>Footer</DataGridCell>
          </DataGridRow>
        </DataGridFoot>
      </DataGrid>
    </>
  );
  /* eslint-enable react/no-array-index-key */
};
