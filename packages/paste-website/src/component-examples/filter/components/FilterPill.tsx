import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { type useFormPillState } from "@twilio-paste/form-pill-group";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Popover, PopoverContainer, PopoverFormPillButton, usePopoverState } from "@twilio-paste/popover";
import React from "react";

import type { FilterMapType, ParticipantsType, selectedFilterProps } from "../types";

const multipleSelectFilterList = new Set(["sid", "uniqueName", "hostName", "tags", "department", "platform"]);

const FilterPillView: React.FC<{
  label: string;
  selectedType: string | null;
  selectedValue: selectedFilterProps;
}> = ({ label, selectedType, selectedValue }) => {
  if (selectedType === "roomType" && typeof selectedValue === "string") {
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

  if (selectedType === "dateCompleted" || selectedType === "custom") {
    const { startDate, endDate } = selectedValue as { startDate: string; endDate: string };

    if (endDate === "") {
      return (
        <span>
          {label}: {startDate}
        </span>
      );
    }

    if (startDate === "") {
      return (
        <span>
          {label}: {endDate}
        </span>
      );
    }

    return (
      <span>
        {label}: {startDate} - {endDate}
      </span>
    );
  }

  if (selectedType && multipleSelectFilterList.has(selectedType)) {
    const value = selectedValue as string[];

    return (
      <Box display="flex" alignItems="center" columnGap="space20">
        {label}
        {value.length === 1 ? (
          `: ${value[0]}`
        ) : (
          <Badge as="span" variant="neutral_counter" size="small">
            <Box textAlign="center" minWidth="12px">
              {value.length}
            </Box>
          </Badge>
        )}
      </Box>
    );
  }

  return <span>{label}</span>;
};

export const FilterPill: React.FC<{
  pill: string;
  selectedFilters: Record<string, selectedFilterProps>;
  filterMap: FilterMapType;
  pillState: ReturnType<typeof useFormPillState>;
  onDismiss?: () => void;
  onApply: (type: string, value: selectedFilterProps) => void;
  onRemove?: () => void;
}> = ({ pill, selectedFilters, filterMap, pillState, onDismiss, onApply, onRemove }) => {
  const popover = usePopoverState({ baseId: pill });

  const isSelected = pill in selectedFilters;
  const PopoverComponent = filterMap[pill].component;
  const value = selectedFilters[pill];

  return (
    <PopoverContainer key={pill} state={popover}>
      <PopoverFormPillButton
        {...pillState}
        selected={isSelected}
        onDismiss={
          isSelected
            ? (e) => {
                onDismiss?.();

                e.stopPropagation();
                popover.hide();
              }
            : undefined
        }
      >
        {!isSelected ? <PlusIcon decorative /> : null}
        <FilterPillView label={filterMap[pill].label} selectedType={isSelected ? pill : null} selectedValue={value} />
      </PopoverFormPillButton>

      <Popover aria-label={pill} width="size40">
        <PopoverComponent value={value} onApply={onApply} popover={popover} onRemove={onRemove} />
      </Popover>
    </PopoverContainer>
  );
};
