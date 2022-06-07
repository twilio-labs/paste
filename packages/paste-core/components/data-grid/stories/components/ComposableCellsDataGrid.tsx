import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Input} from '@twilio-paste/input';
import {Menu, useMenuState, MenuButton, MenuItem, MenuSeparator} from '@twilio-paste/menu';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';
import {Select, Option} from '@twilio-paste/select';
import {DataGrid, DataGridHead, DataGridRow, DataGridHeader, DataGridBody, DataGridCell} from '../../src';
import {TableHeaderData, TableBodyData} from './constants';

const ActionMenu: React.FC = () => {
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

export const ComposableCellsDataGrid: React.FC = () => {
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
                  <DataGridCell key={`col-${colIndex}`}>
                    <Input
                      aria-label={TableHeaderData[colIndex]}
                      data-testid={`input-${rowIndex}-${colIndex}`}
                      value={col || ''}
                      type="text"
                      onChange={() => {}}
                    />
                  </DataGridCell>
                );
              }
              if (colIndex === 4) {
                return (
                  <DataGridCell key={`col-${colIndex}`}>
                    <Select defaultValue="dogs" aria-label="Phone">
                      <Option value="cats">(415) 555-CATS</Option>
                      <Option value="dogs">(415) 555-DOGS</Option>
                      <Option value="mice">(415) 555-MICE</Option>
                    </Select>
                  </DataGridCell>
                );
              }
              return <DataGridCell key={`col-${colIndex}`}>{col}</DataGridCell>;
            })}
            <DataGridCell key={`col-5`}>
              <ActionMenu />
            </DataGridCell>
          </DataGridRow>
        ))}
      </DataGridBody>
    </DataGrid>
  );
  /* eslint-enable react/no-array-index-key */
};
