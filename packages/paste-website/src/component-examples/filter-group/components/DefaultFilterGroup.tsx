/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { FilterIcon } from "@twilio-paste/icons/esm/FilterIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Option, Select } from "@twilio-paste/select";
import { Separator } from "@twilio-paste/separator";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { DATE_RANGES, ROOM_TYPES } from "../constants";
import { filterByDateRange, filterByRoomType, filterBySearchString } from "../helpers";
import type { DateRanges, FilterGroupProps, RoomTypes } from "../types";
import { EmptyState } from "./EmptyState";
import { SampleDataGrid } from "./SampleDataGrid";

// Note: update the codesandboxes if update this
export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({
  data,
  defaultRoomType,
  defaultDateRange,
}) => {
  const dateRangesId = `quality-${useUID()}`;
  const roomTypesId = `type-${useUID()}`;

  const [filteredTableData, setFilteredTableData] = React.useState(data);
  const [searchValue, setSearchValue] = React.useState("");
  const [filterRoomType, setFilterRoomType] = React.useState(defaultRoomType || "All");
  const [filterDateRange, setFilterDateRange] = React.useState(defaultDateRange || "all");
  const [areButtonsDisabled, setAreButtonsDisabled] = React.useState(!(defaultRoomType || defaultDateRange));

  const handleApplyFilters = React.useCallback((): void => {
    const filtered = data.filter(({ uniqueName, sid, roomType, dateCompleted }) => {
      return (
        filterBySearchString(uniqueName, sid, searchValue) &&
        filterByRoomType(roomType, filterRoomType) &&
        filterByDateRange(dateCompleted, filterDateRange)
      );
    });

    setFilteredTableData(filtered);
  }, [data, filterDateRange, filterRoomType, searchValue]);

  const handleClearAll = (): void => {
    setFilterDateRange("all");
    setFilterRoomType("All");
    setSearchValue("");
    setFilteredTableData(data);
    setAreButtonsDisabled(true);
  };

  React.useEffect(() => {
    handleApplyFilters();
  }, [handleApplyFilters]);

  React.useEffect(() => {
    setAreButtonsDisabled(filterDateRange === "all" && filterRoomType === "All");
  }, [setAreButtonsDisabled, filterDateRange, filterRoomType]);

  return (
    <Box paddingBottom="space70">
      <Box display="flex" alignItems="flex-end" columnGap="space50">
        <Box>
          <Label htmlFor={roomTypesId}>Room type</Label>
          <Select
            id={roomTypesId}
            name="type"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFilterRoomType(event.target.value as RoomTypes);
            }}
            value={filterRoomType}
          >
            {ROOM_TYPES.map((type) => (
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
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFilterDateRange(event.target.value as DateRanges);
            }}
          >
            {DATE_RANGES.map((range) => (
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
            data-cy="filter-group-apply-button"
          >
            <FilterIcon decorative />
            Apply
          </Button>
          <Button
            variant="link"
            disabled={areButtonsDisabled}
            onClick={handleClearAll}
            data-cy="filter-group-clear-button"
          >
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
            name="search"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            insertAfter={
              <Button variant="link" onClick={handleApplyFilters} data-cy="filter-group-search-button">
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
          <SampleDataGrid data={filteredTableData} />
        ) : (
          <EmptyState handleClearAll={handleClearAll} />
        )}
      </Box>
    </Box>
  );
};
