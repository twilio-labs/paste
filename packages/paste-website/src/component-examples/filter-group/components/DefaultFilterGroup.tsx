/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Item } from "@twilio-paste/combobox/dist/types";
import { DetailText } from "@twilio-paste/detail-text";
import { FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import * as React from "react";

import { applyFilters, slugify } from "../helpers";
import type { FilterGroupProps, FilterListType, FilterMapType, selectedFilterProps } from "../types";
import { EmptyState } from "./EmptyState";
import { FilterPill } from "./FilterPill";
import { SampleDataGrid } from "./SampleDataGrid";
import { AddFilters } from "./filters/AddFilters";
import { CustomFilter } from "./filters/CustomFilter";
import { DateRangeFilter } from "./filters/DateRangeFilter";
import { ParticipantsFilter } from "./filters/ParticipantsFilter";
import { RoomSidFilter } from "./filters/RoomSidFilter";
import { RoomTypeFilter } from "./filters/RoomTypeFilter";
import { SearchFilter } from "./filters/SearchFilter";
import { UniqueNameFilter } from "./filters/UniqueNameFilter";

// Note: update the codesandboxes if update this
export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({
  data,
  withSearch,
  filterList,
  addFiltersList,
  recommendedFiltersList,
}) => {
  const [selectedFilters, setSelectedFilters] = React.useState<Record<string, selectedFilterProps>>({});
  const [addedFilters, setAddedFilters] = React.useState<FilterListType>([]);
  const pillState = useFormPillState();

  const [filteredTableData, setFilteredTableData] = React.useState(data);

  const handleApplyFilters = (filters: selectedFilterProps): void => {
    const filteredData = applyFilters(filters, data);
    setFilteredTableData(filteredData);
  };

  function handleClearAll(): void {
    setSelectedFilters({});
    setFilteredTableData(data);
  }

  const filterMap: FilterMapType = {
    "room-type": {
      label: "Room type",
      component: RoomTypeFilter,
    },
    participants: {
      label: "Participants",
      component: ParticipantsFilter,
    },
    "date-range": {
      label: "Date range",
      component: DateRangeFilter,
    },
    custom: {
      label: "Date range",
      component: CustomFilter,
    },
    "room-sid": {
      label: "Room SID",
      component: RoomSidFilter,
    },
    "unique-name": {
      label: "Unique Name",
      component: UniqueNameFilter,
    },
  };

  return (
    <Box paddingBottom="space70">
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
      </FormPillGroup>

      <Box display="flex" justifyContent="space-between" alignItems="center" columnGap="space30" marginTop="space50">
        <Box display="flex" columnGap="space30">
          <DetailText marginTop="space0">
            {filteredTableData.length} result{filteredTableData.length !== 1 && "s"}
          </DetailText>
          {Object.keys(selectedFilters).length > 0 ? (
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
          <SampleDataGrid data={filteredTableData} showDateTime />
        ) : (
          <EmptyState handleClearAll={handleClearAll} />
        )}
      </Box>
    </Box>
  );
};
