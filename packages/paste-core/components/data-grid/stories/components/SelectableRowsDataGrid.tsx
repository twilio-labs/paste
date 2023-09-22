import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { ScreenReaderOnly } from '@twilio-paste/screen-reader-only';
import { CheckboxGroup, Checkbox } from '@twilio-paste/checkbox';
import { useUIDSeed } from '@twilio-paste/uid-library';

import { DataGrid, DataGridHead, DataGridRow, DataGridHeader, DataGridBody, DataGridCell } from '../../src';
import { TableHeaderData, TableBodyData } from './constants';

interface CheckboxCellProps {
  onClick: (checked: boolean) => void;
  id: string;
  checked: boolean;
  label: string;
  indeterminate?: boolean;
}
const CheckboxCell: React.FC<React.PropsWithChildren<CheckboxCellProps>> = ({
  onClick,
  id,
  indeterminate,
  checked,
  label,
}) => {
  const checkboxRef = React.createRef<HTMLInputElement>();

  const handleClick = React.useCallback(() => {
    if (checkboxRef.current == null) {
      return undefined;
    }
    return onClick(!checkboxRef.current.checked);
  }, [onClick, checkboxRef]);
  const handleKeyDown = React.useCallback(
    (event: any) => {
      if (checkboxRef.current == null) {
        return undefined;
      }
      if (event.keyCode === 32 || event.keyCode === 13) {
        return onClick(!checkboxRef.current.checked);
      }

      return undefined;
    },
    [onClick, checkboxRef],
  );

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={handleClick}
      cursor="pointer"
    >
      <Box marginLeft="space20">
        <Checkbox id={id} checked={checked} onKeyDown={handleKeyDown} ref={checkboxRef} indeterminate={indeterminate}>
          <ScreenReaderOnly>{label}</ScreenReaderOnly>
        </Checkbox>
      </Box>
    </Box>
  );
};

export const SelectableRowsDataGrid = (): JSX.Element => {
  const seed = useUIDSeed();
  // Array of length 10 rows, all unchecked
  const [checkedItems, setCheckedItems] = React.useState([
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
  ]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  /* eslint-disable react/no-array-index-key */
  return (
    <CheckboxGroup name="items" legend="Select which user to promote">
      <DataGrid aria-label="example grid" striped>
        <DataGridHead>
          <DataGridRow>
            <DataGridHeader width="55px">
              <CheckboxCell
                onClick={(checked: boolean) => {
                  const newCheckedItems = checkedItems.map(() => checked);
                  setCheckedItems(newCheckedItems);
                }}
                id={seed('select-all')}
                checked={allChecked}
                indeterminate={indeterminate}
                label="Select all"
              />
            </DataGridHeader>
            <DataGridHeader>{TableHeaderData[0]}</DataGridHeader>
            <DataGridHeader>{TableHeaderData[1]}</DataGridHeader>
            <DataGridHeader>{TableHeaderData[2]}</DataGridHeader>
            <DataGridHeader>{TableHeaderData[3]}</DataGridHeader>
            <DataGridHeader>{TableHeaderData[4]}</DataGridHeader>
          </DataGridRow>
        </DataGridHead>
        <DataGridBody>
          {TableBodyData.map((row, rowIndex) => (
            <DataGridRow key={`row-${rowIndex}`} selected={checkedItems[rowIndex]}>
              <DataGridCell>
                <CheckboxCell
                  onClick={(checked: boolean) => {
                    const newCheckedItems = [...checkedItems];
                    newCheckedItems[rowIndex] = checked;
                    setCheckedItems(newCheckedItems);
                  }}
                  id={seed(`row-${rowIndex}-checkbox`)}
                  checked={checkedItems[rowIndex]}
                  label={`Select row ${rowIndex}`}
                />
              </DataGridCell>
              {row.map((col, colIndex) => (
                <DataGridCell key={`col-${colIndex}`}>{col}</DataGridCell>
              ))}
            </DataGridRow>
          ))}
        </DataGridBody>
      </DataGrid>
    </CheckboxGroup>
  );
  /* eslint-enable react/no-array-index-key */
};
