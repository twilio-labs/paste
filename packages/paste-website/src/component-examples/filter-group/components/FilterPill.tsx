import { FormPill, type useFormPillState } from "@twilio-paste/form-pill-group";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Popover, PopoverButton, PopoverContainer, usePopoverState } from "@twilio-paste/popover";
import React from "react";

import type { FilterMapType, ParticipantsType, selectedFilterProps } from "../types";

const FilterPillView: React.FC<{
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

  if (selectedType === "date-time") {
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

  return <span>{label}</span>;
};

export const FilterPill: React.FC<{
  pill: string;
  selectedFilters: Record<string, selectedFilterProps>;
  filterMap: FilterMapType;
  pillState: ReturnType<typeof useFormPillState>;
  onDismiss?: () => void;
  onApply: (type: string, value: selectedFilterProps) => void;
}> = ({ pill, selectedFilters, filterMap, pillState, onDismiss, onApply }) => {
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
                  onDismiss?.();

                  e.stopPropagation();
                  popover.hide();
                }
              : undefined
          }
        >
          {!isSelected ? <PlusIcon decorative /> : null}
          <FilterPillView
            label={filterMap[pill].label}
            selectedType={isSelected ? pill : null}
            selectedValue={selectedFilters[pill]}
          />
        </FormPill>
      </PopoverButton>

      <Popover aria-label={pill} width="size40">
        <PopoverComponent onApply={onApply} popover={popover} />
      </Popover>
    </PopoverContainer>
  );
};
