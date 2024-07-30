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

import type { DateRangeType, FilterGroupProps, ParticipantsType, selectedFilterProps } from "../types";
import { EmptyState } from "./EmptyState";
import { SampleDataGrid } from "./SampleDataGrid";
import { DateRangeFilter } from "./filters/DateRangeFilter";
import { ParticipantsFilter } from "./filters/ParticipantsFilter";
import { RoomTypeFilter } from "./filters/RoomTypeFilter";

// Note: update the codesandboxes if update this
const PillDisplay: React.FC<{
  label: string;
  selectedType: string | null;
  selectedValue: selectedFilterProps;
}> = ({ label, selectedType, selectedValue }) => {
  if (selectedType === "room-type" && typeof selectedValue === "string") {
    return (
      <span>
        {label}: {selectedValue}
      </span>
    );
  }

  if (selectedType === "participants") {
    const { min, max } = selectedValue as ParticipantsType;

    return (
      <span>
        {label}: {`${min} - ${max}`}
      </span>
    );
  }

  return <span>{label}</span>;
};

export const DefaultFilterGroup: React.FC<React.PropsWithChildren<FilterGroupProps>> = ({ data }) => {
  const [pills] = React.useState(["room-type", "participants", "date-time"]);
  const [selectedFilters, setSelectedFilters] = React.useState<Record<string, selectedFilterProps>>({});
  const pillState = useFormPillState();

  const [filteredTableData, setFilteredTableData] = React.useState(data);

  const handleApplyFilters = (filters: selectedFilterProps): void => {
    let filteredData = [...data];

    Object.entries(filters).forEach(([type, value]) => {
      if (type === "room-type") {
        filteredData = filteredData.filter((item) => item.roomType === value);
      }

      if (type === "participants") {
        const { min, max } = value as unknown as ParticipantsType;

        filteredData = filteredData.filter(
          (item) => item.participants >= parseInt(min, 10) && item.participants <= parseInt(max, 10),
        );
      }

      if (type === "date-time") {
        const { startDate, startTime, endDate, endTime } = value as unknown as DateRangeType;
        const start = new Date(`${startDate}T${startTime}`);
        const end = new Date(`${endDate}T${endTime}`);

        filteredData = filteredData.filter((item) => {
          const itemDate = new Date(item.dateCompleted);

          return itemDate >= start && itemDate <= end;
        });
      }
    });

    setFilteredTableData(filteredData);
  };

  function handleClearAll(): void {
    setSelectedFilters({});
    setFilteredTableData(data);
  }

  const filterMap: {
    [key: string]: {
      label: string;
      component: React.FC<{
        onApply: (type: string, value: selectedFilterProps) => void;
        popover: ReturnType<typeof usePopoverState>;
      }>;
    };
  } = {
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
      component: DateRangeFilter,
    },
  };

  return (
    <Box paddingBottom="space70">
      <Heading as="h1" variant="heading50">
        Filter
      </Heading>

      <FormPillGroup {...pillState} aria-label="Filters:" size="large">
        {pills.map((pill) => {
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
                  <PillDisplay
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

                    setSelectedFilters({
                      ...newFilters,
                      [type]: value,
                    });

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
