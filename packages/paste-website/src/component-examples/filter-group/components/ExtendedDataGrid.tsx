/* DISCLAIMER: this is an example, not meant to be used in production */

import { Badge } from "@twilio-paste/badge";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from "@twilio-paste/data-grid";
import * as React from "react";

import { EXTENDED_TABLE_HEADERS } from "../constants";
import { formatDate, formatDateTime } from "../helpers";
import type { ExtendedDataGridProps } from "../types";

export const ExtendedDataGrid: React.FC<React.PropsWithChildren<ExtendedDataGridProps>> = ({
  data,
  showDateTime = false,
}) => {
  const [renderDates, setRenderDates] = React.useState(false);
  React.useEffect(() => {
    setRenderDates(true);
  }, []);

  return (
    <DataGrid aria-label="Video rooms" scrollHorizontally noWrap>
      <DataGridHead>
        <DataGridRow>
          {EXTENDED_TABLE_HEADERS.map((header) => (
            <DataGridHeader key={header}>{header}</DataGridHeader>
          ))}
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        {data.map(
          ({
            sid,
            uniqueName,
            roomType,
            participants,
            dateCompleted,
            status,
            hostName,
            department,
            platform,
            tags,
          }) => (
            <DataGridRow key={sid}>
              <DataGridCell>{sid}</DataGridCell>
              <DataGridCell>{uniqueName}</DataGridCell>
              <DataGridCell>{roomType}</DataGridCell>
              <DataGridCell>{participants}</DataGridCell>
              {renderDates && (
                <DataGridCell>{showDateTime ? formatDateTime(dateCompleted) : formatDate(dateCompleted)}</DataGridCell>
              )}
              <DataGridCell>{status}</DataGridCell>
              <DataGridCell>{hostName}</DataGridCell>
              <DataGridCell>{department}</DataGridCell>
              <DataGridCell>{platform}</DataGridCell>
              <DataGridCell>
                <Badge as="span" variant="decorative10">
                  {tags}
                </Badge>
              </DataGridCell>
            </DataGridRow>
          ),
        )}
      </DataGridBody>
    </DataGrid>
  );
};
