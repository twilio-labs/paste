import { Box } from "@twilio-paste/box";
import { EditableCodeBlock } from "@twilio-paste/editable-code-block";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from "@twilio-paste/menu";
import { Option, Select } from "@twilio-paste/select";
import { TextArea } from "@twilio-paste/textarea";
import * as React from "react";
import type { JSX } from "react";

import { DataGrid, DataGridBody, DataGridCell, DataGridHead, DataGridHeader, DataGridRow } from "../../src";
import { TableBodyData, TableHeaderData } from "./constants";

const ActionMenu = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <Box display="flex" justifyContent="center">
      <MenuButton {...menu} variant="reset" size="reset">
        <MoreIcon decorative={false} title="More options" />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} href="https://google.com">
          Settings
        </MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </Box>
  );
};

const InputCell: React.FC<{ colIndex: number; rowIndex: number; value: string | null }> = ({
  colIndex,
  rowIndex,
  value: originalValue,
}): JSX.Element => {
  const [value, setValue] = React.useState<string | null>(originalValue);
  return (
    <DataGridCell key={`col-${colIndex}`}>
      <TextArea
        aria-label={TableHeaderData[colIndex]}
        data-testid={`input-${rowIndex}-${colIndex}`}
        value={value || ""}
        onChange={(change) => {
          setValue(change.target.value);
        }}
        maxRows={6}
        minRows={6}
        id={`text-area-${rowIndex}-${colIndex}`}
      />
    </DataGridCell>
  );
};

export const FixedCellHeightDataGrid = (): JSX.Element => {
  /* eslint-disable react/no-array-index-key */
  return (
    <DataGrid aria-label="User list" data-testid="data-grid" striped>
      <DataGridHead>
        <DataGridRow>
          <DataGridHeader data-testid="header-1">{TableHeaderData[0]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[1]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[2]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[3]}</DataGridHeader>
          <DataGridHeader>{TableHeaderData[4]}</DataGridHeader>
          <DataGridHeader>Actions</DataGridHeader>
        </DataGridRow>
      </DataGridHead>
      <DataGridBody>
        {TableBodyData.map((row, rowIndex) => (
          <DataGridRow key={`row-${rowIndex}`}>
            {row.map((col, colIndex) => {
              if (colIndex === 0 || colIndex === 1) {
                return (
                  <InputCell
                    key={`input-cell-${rowIndex}-${colIndex}`}
                    colIndex={colIndex}
                    rowIndex={rowIndex}
                    value={col}
                  />
                );
              }
              if (colIndex === 3) {
                return (
                  <DataGridCell key={`col-${colIndex}`}>
                    <EditableCodeBlock
                      width="300px"
                      // calculated height based on min row number (20px) * number of rows (6) + padding (2 * 8px)
                      height="136px"
                      defaultLanguage="typescript"
                      defaultValue={`const user: User = new UserAccount("${row[colIndex]}");`}
                    />
                  </DataGridCell>
                );
              }
              if (colIndex === 4) {
                return (
                  <DataGridCell key={`col-${colIndex}`}>
                    <Select key={`select-${rowIndex}-${colIndex}`} defaultValue="dogs" aria-label="Phone">
                      <Option value="cats">(415) 555-CATS</Option>
                      <Option value="dogs">(415) 555-DOGS</Option>
                      <Option value="mice">(415) 555-MICE</Option>
                    </Select>
                  </DataGridCell>
                );
              }
              return <DataGridCell key={`col-${colIndex}`}>{col}</DataGridCell>;
            })}
            <DataGridCell key="col-5">
              <ActionMenu />
            </DataGridCell>
          </DataGridRow>
        ))}
      </DataGridBody>
    </DataGrid>
  );
  /* eslint-enable react/no-array-index-key */
};
