/* DISCLAIMER: this is an example, not meant to be used in production */

import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DetailText } from "@twilio-paste/detail-text";
import { FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { applyFilters, slugify } from "../helpers";
import type {
  ExtendedTableDataRow,
  FilterGroupProps,
  FilterListType,
  FilterMapType,
  selectedFilterProps,
} from "../types";
import { EmptyState } from "./EmptyState";
import { ExtendedDataGrid } from "./ExtendedDataGrid";
import { FilterPill } from "./FilterPill";
import { SampleDataGrid } from "./SampleDataGrid";
import { AddFilters } from "./filters/AddFilters";
import { CustomFilter } from "./filters/CustomFilter";
import { DateRangeFilter } from "./filters/DateRangeFilter";
import { DepartmentFilter } from "./filters/DepartmentFilter";
import { ParticipantsFilter } from "./filters/ParticipantsFilter";
import { PlatformFilter } from "./filters/PlatformFilter";
import { RoomSidFilter } from "./filters/RoomSidFilter";
import { RoomTypeFilter } from "./filters/RoomTypeFilter";
import { SearchFilter } from "./filters/SearchFilter";
import { UniqueNameFilter } from "./filters/UniqueNameFilter";

function countMoreFilters(selectedMoreFilters: Record<string, string | string[]>): number {
  let count = 0;
  for (const key in selectedMoreFilters) {
    if (Array.isArray(selectedMoreFilters[key])) {
      if (selectedMoreFilters[key].length > 0) count += 1;
    } else {
      count += 1;
    }
  }

  return count;
}

// Note: update the codesandboxes if update this
export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({
  data,
  withSearch,
  filterList,
  addFiltersList,
  recommendedFiltersList,
  onMoreFiltersClick,
  extendedTable,
  selectedMoreFilters,
  setSelectedMoreFilters,
}) => {
  const [selectedFilters, setSelectedFilters] = React.useState<Record<string, selectedFilterProps>>({});
  const [addedFilters, setAddedFilters] = React.useState<FilterListType>([]);
  const pillState = useFormPillState();

  const [filteredTableData, setFilteredTableData] = React.useState(data);

  const handleApplyFilters = (filters: selectedFilterProps): void => {
    const filteredData = applyFilters(filters, data as ExtendedTableDataRow[]);
    setFilteredTableData(filteredData);
  };

  function handleClearAll(): void {
    setSelectedFilters({});
    setSelectedMoreFilters?.({});
    setFilteredTableData(data);
  }

  React.useEffect(() => {
    if (selectedMoreFilters) {
      handleApplyFilters({ ...selectedFilters, ...selectedMoreFilters } as selectedFilterProps);
    }
  }, [selectedMoreFilters]);

  const filterMap: FilterMapType = {
    roomType: {
      label: "Room type",
      component: RoomTypeFilter,
    },
    participants: {
      label: "Participants",
      component: ParticipantsFilter,
    },
    dateCompleted: {
      label: "Date range",
      component: DateRangeFilter,
    },
    custom: {
      label: "Date range",
      component: CustomFilter,
    },
    sid: {
      label: "Room SID",
      component: RoomSidFilter,
    },
    uniqueName: {
      label: "Unique Name",
      component: UniqueNameFilter,
    },
    department: {
      label: "Department",
      component: DepartmentFilter,
    },
    platform: {
      label: "Platform",
      component: PlatformFilter,
    },
  };

  return (
    <Box padding="space50">
      {withSearch ? (
        <Box marginBottom="space50" maxWidth="size30">
          <SearchFilter
            onChange={(e) => {
              const newFilters = { ...selectedFilters, search: e.target.value };

              if (newFilters.search === "") {
                const { search: _, ...rest } = newFilters;

                setSelectedFilters(rest as Record<string, selectedFilterProps>);
                handleApplyFilters(rest as selectedFilterProps);
                return;
              }

              setSelectedFilters(newFilters as Record<string, selectedFilterProps>);
              handleApplyFilters(newFilters as selectedFilterProps);
            }}
            value={(selectedFilters.search as string) || ""}
          />
        </Box>
      ) : null}

      <Heading as="h1" variant="heading50">
        Filter
      </Heading>

      <FormPillGroup {...pillState} aria-label="Filters:" size="large">
        {filterList.map((pill) => {
          return (
            <FilterPill
              key={pill}
              pill={pill}
              selectedFilters={selectedFilters}
              filterMap={filterMap}
              pillState={pillState}
              onDismiss={() => {
                const newFilters = { ...selectedFilters };
                const { [pill]: _, ...rest } = newFilters;

                setSelectedFilters(rest);
                handleApplyFilters(rest as selectedFilterProps);
              }}
              onApply={(type: string, value) => {
                const newFilters = { ...selectedFilters, [type]: value };
                setSelectedFilters(newFilters);
                handleApplyFilters(newFilters as selectedFilterProps);
              }}
            />
          );
        })}

        {addedFilters.length > 0
          ? addedFilters.map((pill: string) => {
              return (
                <FilterPill
                  key={pill}
                  pill={pill}
                  selectedFilters={selectedFilters}
                  filterMap={filterMap}
                  pillState={pillState}
                  onDismiss={() => {
                    const newFilters = { ...selectedFilters };
                    const { [pill]: _, ...rest } = newFilters;

                    setSelectedFilters(rest);
                    handleApplyFilters(rest as selectedFilterProps);
                  }}
                  onApply={(type: string, value) => {
                    const newFilters = { ...selectedFilters, [type]: value };
                    setSelectedFilters(newFilters);
                    handleApplyFilters(newFilters as selectedFilterProps);
                  }}
                  onRemove={() => {
                    const newFilters = addedFilters.filter((item) => item !== pill);
                    setAddedFilters(newFilters);

                    const newSelectedFilters = { ...selectedFilters };
                    const { [pill]: _, ...rest } = newSelectedFilters;

                    setSelectedFilters(rest);
                  }}
                />
              );
            })
          : null}

        {addFiltersList && addFiltersList.length > 0 ? (
          <AddFilters
            onApply={(_: string, value) => {
              const sluggedList = (value as FilterListType).map((item) => slugify(item));
              setAddedFilters(sluggedList as FilterListType);
            }}
            addFiltersList={addFiltersList}
            filterMap={filterMap}
            recommendedFiltersList={recommendedFiltersList}
            value={addedFilters}
          />
        ) : null}

        {onMoreFiltersClick ? (
          <Button variant="secondary" size="rounded_small" onClick={onMoreFiltersClick}>
            <Box display="flex" alignItems="center" columnGap="space20">
              More filters
              {selectedMoreFilters && countMoreFilters(selectedMoreFilters) > 0 ? (
                <Badge as="span" variant="neutral_counter" size="small">
                  {countMoreFilters(selectedMoreFilters)}
                </Badge>
              ) : null}
            </Box>
          </Button>
        ) : null}
      </FormPillGroup>

      <Box display="flex" justifyContent="space-between" alignItems="center" columnGap="space30" marginTop="space50">
        <Box display="flex" columnGap="space30">
          <DetailText marginTop="space0">
            <Text as="span" color="colorTextWeak" fontSize="fontSize30">
              {filteredTableData.length} result{filteredTableData.length !== 1 && "s"}
            </Text>
          </DetailText>
          {filteredTableData.length !== data.length ? (
            <Button variant="link" onClick={handleClearAll}>
              Clear all
            </Button>
          ) : null}
        </Box>

        <ButtonGroup>
          <Button variant="secondary" size="small">
            <ExportIcon decorative />
            Export CSV
          </Button>
          <Button variant="secondary" size="icon_small">
            <MoreIcon decorative={false} title="More options" />
          </Button>
        </ButtonGroup>
      </Box>
      <Box marginTop="space60">
        {filteredTableData.length > 0 ? (
          extendedTable ? (
            <ExtendedDataGrid data={filteredTableData as ExtendedTableDataRow[]} showDateTime />
          ) : (
            <SampleDataGrid data={filteredTableData} showDateTime />
          )
        ) : (
          <EmptyState handleClearAll={handleClearAll} />
        )}
      </Box>
    </Box>
  );
};
