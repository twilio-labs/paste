import React from "react";

import type { ParticipantsType, selectedFilterProps } from "../types";

export const FilterPill: React.FC<{
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
