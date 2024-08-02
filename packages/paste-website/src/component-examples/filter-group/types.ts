/* DISCLAIMER: this is an example, not meant to be used in production */

import type { Item } from "@twilio-paste/combobox/dist/types";
import type { usePopoverState } from "@twilio-paste/popover";
import type { FieldError, UseFormRegister, UseFormReturn } from "react-hook-form";

export type DateRanges = "all" | "day" | "oneWeek" | "twoWeeks";
export type DateTimeRanges = "all" | "12hours" | "day" | "threeDays" | "custom";
export type CustomDateInputNames =
  | "customDate.startDate"
  | "customDate.startTime"
  | "customDate.endDate"
  | "customDate.endTime";

export interface DateTimeFormValues {
  range: DateTimeRanges;
  type: RoomTypes;
  search: string;
  customDate: {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
  };
}

export interface DateTimeFormErrors {
  range?: FieldError;
  type?: FieldError;
  search?: FieldError;
  customDate?: {
    startDate?: FieldError;
    startTime?: FieldError;
    endDate?: FieldError;
    endTime?: FieldError;
  };
}

export interface DateTimePopoverProps {
  onApply: (callback: VoidFunction) => ReturnType<UseFormReturn["handleSubmit"]>;
  register: UseFormRegister<DateTimeFormValues>;
  errors: DateTimeFormErrors;
}
export interface TableDataRow {
  sid: string;
  uniqueName: string;
  roomType: RoomTypes;
  participants: number;
  dateCompleted: Date;
}

export type FilterMapType = {
  [key: string]: {
    label: string;
    component: React.FC<{
      onApply: (type: string, value: selectedFilterProps) => void;
      popover: ReturnType<typeof usePopoverState>;
    }>;
  };
};

export interface FilterGroupDateTimeProps {
  children?: never;
  data: TableDataRow[];
}
export interface SampleDataGridProps {
  data: TableDataRow[];
  showDateTime?: boolean;
}

export type RoomTypes = "Group" | "WebRTC Go" | "Peer to Peer";
export type ParticipantsType = { min: string; max: string };
export type DateRangeType = { startDate: string; endDate: string };
export type SearchFilterType = { search: string };

export type selectedFilterProps = RoomTypes | ParticipantsType | DateRangeType | SearchFilterType | Item[];

export type FilterListType = Array<
  "room-type" | "participants" | "date-range" | "search" | "custom" | "add-filters" | "room-sid" | "unique-name"
>;

export interface FilterGroupProps {
  children?: never;
  data: TableDataRow[];
  withSearch?: boolean;
  filterList: FilterListType;
  addFiltersList?: FilterListType;
  recommendedFiltersList?: FilterListType;
}
