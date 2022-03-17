import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/core/button';
import {
  DataGrid,
  DataGridHead,
  DataGridRow,
  DataGridHeader,
  DataGridBody,
  DataGridCell,
} from '@twilio-paste/core/data-grid';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {Select, Option} from '@twilio-paste/core/select';
import {Separator} from '@twilio-paste/core/separator';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';
import {ExportIcon} from '@twilio-paste/icons/esm/ExportIcon';

const roomTypes = ['All', 'Group', 'WebRTC Go', 'Peer to Peer'];
const dateRanges = ['All', 'Last 24 hours', 'Last 7 days', 'Last 14 days'];
const tableHeaders = ['Room SID', 'Unique Name', 'Room Type', 'Participants', 'Date Completed'];

interface TableDataRow {
  sid: string;
  uniqueName: string;
  roomType: typeof roomTypes[number];
  participants: number;
  dateCompleted: Date;
}

const today = new Date();
const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
const fourWeeksAgo = new Date();
fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);

const tableData: TableDataRow[] = [
  {
    sid: 'RM76426b3e9986878d6316a22bf02d6fc3',
    uniqueName: 'Test Room',
    roomType: 'Group',
    participants: 50,
    dateCompleted: today,
  },
  {
    sid: 'RMmg889qwslt6bijmzfjxleq4fn3eyxwdj6',
    uniqueName: 'Quick Sync',
    roomType: 'Peer to Peer',
    participants: 3,
    dateCompleted: fourWeeksAgo,
  },
  {
    sid: 'RM8fcu56sr0tz6cf9a2phf5zo8vv5m65697',
    uniqueName: 'My 1:1',
    roomType: 'WebRTC Go',
    participants: 2,
    dateCompleted: today,
  },
  {
    sid: 'RM1z17xfzcjdgwf254jk3k0gtu3r7xzxo0l',
    uniqueName: 'Team Meeting',
    roomType: 'Group',
    participants: 23,
    dateCompleted: oneWeekAgo,
  },
  {
    sid: 'RMx2fw108pgls48zzf4oh6uzl4ly4s4j6b8',
    uniqueName: 'All Hands',
    roomType: 'Group',
    participants: 41,
    dateCompleted: twoWeeksAgo,
  },
  {
    sid: 'RMwwxh0rskqqy2wzg7t7f3ha4haavymbnqt',
    uniqueName: 'Project Meeting',
    roomType: 'Group',
    participants: 6,
    dateCompleted: twoWeeksAgo,
  },
  {
    sid: 'RMi2or733rf2vd6lziwe8g66smzykqkoplf',
    uniqueName: 'Test Room 2',
    roomType: 'WebRTC Go',
    participants: 1,
    dateCompleted: fourWeeksAgo,
  },
];

const formatDate = (date: Date): string => date.toISOString().slice(0, 10);
const filterBySearchString = ({uniqueName, sid}: TableDataRow, searchValue: string): boolean => {
  const lowerCaseName = uniqueName.toLocaleLowerCase();
  const lowerCaseSid = sid.toLocaleLowerCase();

  return lowerCaseName.includes(searchValue) || lowerCaseSid.includes(searchValue);
};

export const DefaultFilterGroup: React.FC = () => {
  const dateRangesId = `quality-${useUID()}`;
  const roomTypesId = `type-${useUID()}`;

  const [filteredTableData, setFilteredTableData] = React.useState(tableData);
  const [searchValue, setSearchValue] = React.useState<string | undefined>();
  // const [filterRoomType, setFilterRoomType] = React.useState('');
  // const [filterDateRange, setFilterDateRange] = React.useState('');

  const applySearch = (): void => {
    const filtered = searchValue
      ? filteredTableData.filter((row) => filterBySearchString(row, searchValue))
      : tableData;

    setFilteredTableData(filtered);
  };

  // const applyFilters = (): void => {
  //   const filteredData =
  // };

  return (
    <Box paddingBottom="space70">
      <Box display="flex" alignItems="flex-end" columnGap="space50">
        <Box>
          <Label htmlFor={roomTypesId}>Room type</Label>
          <Select id={roomTypesId} name="type">
            {roomTypes.map((type) => (
              <Option value={type} key={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Box>
        <Box>
          <Label htmlFor={dateRangesId}>Date range</Label>
          <Select id={dateRangesId} name="range">
            {dateRanges.map((range) => (
              <Option value={range} key={range}>
                {range}
              </Option>
            ))}
          </Select>
        </Box>
        <Box display="flex" columnGap="space50" paddingLeft="space40">
          <Button variant="primary" aria-label="Apply filters" disabled>
            <FilterIcon decorative />
            Apply
          </Button>
          <Button variant="link" disabled>
            Clear all
          </Button>
        </Box>
      </Box>
      <Box paddingY="space50">
        <Separator orientation="horizontal" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box width="size40">
          <Input
            aria-label="Search"
            type="text"
            placeholder="Search by SID or unique name"
            // value={searchValue}
            onChange={(event) => {
              const {value} = event.target;
              setSearchValue(value.length > 0 ? value.toLocaleLowerCase() : undefined);
            }}
            insertAfter={
              <Button variant="link" onClick={applySearch}>
                <SearchIcon decorative={false} title="Search" />
              </Button>
            }
          />
        </Box>
        <Button variant="secondary">
          <ExportIcon decorative />
          Export CSV
        </Button>
      </Box>
      <Box paddingTop="space50">
        <DataGrid aria-label="Video rooms" striped>
          <DataGridHead>
            <DataGridRow>
              {tableHeaders.map((header) => (
                <DataGridHeader key={header}>{header}</DataGridHeader>
              ))}
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            {filteredTableData.map(({sid, uniqueName, roomType, participants, dateCompleted}) => (
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
      </Box>
    </Box>
  );
};
