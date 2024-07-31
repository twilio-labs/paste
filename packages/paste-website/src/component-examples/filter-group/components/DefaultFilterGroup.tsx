/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { DetailText } from "@twilio-paste/detail-text";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Heading } from "@twilio-paste/heading";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import { usePopoverState } from "@twilio-paste/reakit-library";
import * as React from "react";

import { applyFilters } from "../helpers";
import type { FilterGroupProps, FilterMapType, selectedFilterProps } from "../types";
import { EmptyState } from "./EmptyState";
import { FilterPill } from "./FilterPill";
import { SampleDataGrid } from "./SampleDataGrid";
import { DateRangeFilter } from "./filters/DateRangeFilter";
import { DateTimeRangeFilter } from "./filters/DateTimeRangeFilter";
import { ParticipantsFilter } from "./filters/ParticipantsFilter";
import { RoomTypeFilter } from "./filters/RoomTypeFilter";
import { SearchFilter } from "./filters/SearchFilter";

// Note: update the codesandboxes if update this
export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({
  data,
  withSearch,
  filterList,
}) => {
  const [selectedFilters, setSelectedFilters] = React.useState<Record<string, selectedFilterProps>>({});
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
    "date-time": {
      label: "Date/time range",
      component: DateTimeRangeFilter,
    },
    "date-range": {
      label: "Date range",
      component: DateRangeFilter,
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
          const popover = usePopoverState({ baseId: pill });
          const isSelected = pill in selectedFilters;
          const PopoverComponent = filterMap[pill].component;

          return (
            <PopoverContainer key={pill} state={popover}>
              <PopoverButton
                variant="reset"
                size="reset"
                // @ts-expect-error types are wrong
                borderRadius="borderRadiusPill"
              >
                <FormPill
                  {...pillState}
                  selected={isSelected}
                  onDismiss={
                    isSelected
                      ? (e) => {
                          const newFilters = { ...selectedFilters };
                          delete newFilters[pill];
                          setSelectedFilters(newFilters);
                          handleApplyFilters(newFilters as selectedFilterProps);

                          e.stopPropagation();
                          popover.hide();
                        }
                      : undefined
                  }
                >
                  {!isSelected ? <PlusIcon decorative /> : null}
                  <FilterPill
                    label={filterMap[pill].label}
                    selectedType={isSelected ? pill : null}
                    selectedValue={selectedFilters[pill]}
                  />
                </FormPill>
              </PopoverButton>

              <Popover aria-label={pill} width="size40">
                <PopoverComponent
                  onApply={(type: string, value) => {
                    const newFilters = { ...selectedFilters, [type]: value };
                    setSelectedFilters(newFilters);
                    handleApplyFilters(newFilters as selectedFilterProps);
                  }}
                  popover={popover}
                />
              </Popover>
            </PopoverContainer>
          );
        })}
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
