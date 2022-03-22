import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {Select, Option} from '@twilio-paste/select';
import {Separator} from '@twilio-paste/separator';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';
import {ExportIcon} from '@twilio-paste/icons/esm/ExportIcon';

import {dateRanges, roomTypes, tableData} from '../constants';
import type {RoomTypes, DateRanges, FilterGroupProps} from '../types';
import {filterByDateRange, filterByRoomType, filterBySearchString} from '../helpers';

import {SampleDataGrid} from './SampleDataGrid';
import {EmptyState} from './EmptyState';

export const DefaultFilterGroup: React.FC<FilterGroupProps> = ({defaultRoomType, defaultDateRange}) => {
  const dateRangesId = `quality-${useUID()}`;
  const roomTypesId = `type-${useUID()}`;

  const [filteredTableData, setFilteredTableData] = React.useState(tableData);
  const [searchValue, setSearchValue] = React.useState('');
  const [filterRoomType, setFilterRoomType] = React.useState(defaultRoomType || 'All');
  const [filterDateRange, setFilterDateRange] = React.useState(defaultDateRange || 'all');
  const [areButtonsDisabled, setAreButtonsDisabled] = React.useState(!(defaultRoomType || defaultDateRange));

  const handleApplyFilters = (): void => {
    const filtered = tableData.filter(({uniqueName, sid, roomType, dateCompleted}) => {
      return (
        filterBySearchString(uniqueName, sid, searchValue) &&
        filterByRoomType(roomType, filterRoomType) &&
        filterByDateRange(dateCompleted, filterDateRange)
      );
    });

    setFilteredTableData(filtered);
  };

  const handleClearAll = (): void => {
    setFilterDateRange('all');
    setFilterRoomType('All');
    setSearchValue('');
    setFilteredTableData(tableData);
    setAreButtonsDisabled(true);
  };

  React.useEffect(() => {
    handleApplyFilters();
  }, []);

  React.useEffect(() => {
    setAreButtonsDisabled(filterDateRange === 'all' && filterRoomType === 'All');
  }, [setAreButtonsDisabled, filterDateRange, filterRoomType]);

  return (
    <Box paddingBottom="space70">
      <Box display="flex" alignItems="flex-end" columnGap="space50">
        <Box>
          <Label htmlFor={roomTypesId}>Room type</Label>
          <Select
            id={roomTypesId}
            name="type"
            onChange={(event) => {
              setFilterRoomType(event.target.value as RoomTypes);
            }}
            value={filterRoomType}
          >
            {roomTypes.map((type) => (
              <Option value={type} key={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Box>
        <Box>
          <Label htmlFor={dateRangesId}>Date range</Label>
          <Select
            id={dateRangesId}
            name="range"
            value={filterDateRange}
            onChange={(event) => {
              setFilterDateRange(event.target.value as DateRanges);
            }}
          >
            {dateRanges.map((range) => (
              <Option value={range.value} key={range.value}>
                {range.name}
              </Option>
            ))}
          </Select>
        </Box>
        <Box display="flex" columnGap="space50" paddingLeft="space40">
          <Button
            variant="primary"
            aria-label="Apply filters"
            disabled={areButtonsDisabled}
            onClick={handleApplyFilters}
          >
            <FilterIcon decorative />
            Apply
          </Button>
          <Button variant="link" disabled={areButtonsDisabled} onClick={handleClearAll}>
            Clear all
          </Button>
        </Box>
      </Box>
      <Box paddingY="space50">
        <Separator orientation="horizontal" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box
          width="size40"
          as="form"
          onSubmit={(event: React.SyntheticEvent) => {
            event.preventDefault();
            handleApplyFilters();
          }}
        >
          <Input
            aria-label="Search"
            type="text"
            placeholder="Search by SID or unique name"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            insertAfter={
              <Button variant="link" onClick={handleApplyFilters}>
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
        {filteredTableData.length > 0 ? (
          <SampleDataGrid tableData={filteredTableData} />
        ) : (
          <EmptyState handleClearAll={handleClearAll} />
        )}
      </Box>
    </Box>
  );
};
