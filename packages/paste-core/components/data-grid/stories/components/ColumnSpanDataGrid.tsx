import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

import { DataGrid, DataGridBody, DataGridCell, DataGridHead, DataGridHeader, DataGridRow } from "../../src";
import { TableBodyData } from "./constants";

export const ColumnSpanDataGrid: React.FC<React.PropsWithChildren<{ element?: BoxProps["element"] }>> = ({
  element = "DATA_GRID",
}) => {
  return (
    <DataGrid aria-label="User information table" data-testid="data-grid" element={element} striped>
      <DataGridHead data-testid="data-grid-head" element={`${element}_HEAD`}>
        <DataGridRow element={`${element}_ROW`}>
          <DataGridHeader colSpan={5} data-testid="data-grid-header" element={`${element}_HEADER`}>
            User Information
          </DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody data-testid="data-grid-body" element={`${element}_BODY`}>
        {TableBodyData.map((row, rowIndex) => (
          <DataGridRow
            key={`row-${rowIndex}`}
            data-testid={rowIndex === 0 ? "data-grid-row" : null}
            element={`${element}_ROW`}
          >
            {row.map((col, colIndex) => (
              <DataGridCell
                element={`${element}_CELL`}
                key={`col-${colIndex}`}
                data-testid={rowIndex === 0 && colIndex === 0 ? "data-grid-cell" : null}
                textAlign={colIndex === 4 ? "right" : "left"}
              >
                {col}
              </DataGridCell>
            ))}
          </DataGridRow>
        ))}
      </DataGridBody>
    </DataGrid>
  );
};
