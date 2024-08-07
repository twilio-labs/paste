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

export interface ExtendedTableDataRow extends TableDataRow {
  status: "Active" | "Completed" | "Scheduled" | "Cancelled";
  hostName: string;
  department: string;
  platform: string;
  tags: "Training" | "Meeting" | "Support" | "External" | "Urgent" | "Recurring";
}

export type FilterMapType = {
  [key: string]: {
    label: string;
    component: React.FC<{
      onApply: (type: string, value: selectedFilterProps) => void;
      popover: ReturnType<typeof usePopoverState>;
      onRemove?: () => void;
      value?: selectedFilterProps;
    }>;
  };
};

export interface FilterDateTimeProps {
  children?: never;
  data: TableDataRow[];
}
export interface SampleDataGridProps {
  data: TableDataRow[];
  showDateTime?: boolean;
}

export interface ExtendedDataGridProps {
  data: ExtendedTableDataRow[];
  showDateTime?: boolean;
}

export type RoomTypes = "Group" | "WebRTC Go" | "Peer to Peer";
export type ParticipantsType = { min: string; max: string };
export type DateRangeType = { startDate: string; endDate: string };
export type SearchFilterType = { search: string };

export type selectedFilterProps = RoomTypes | ParticipantsType | DateRangeType | SearchFilterType | Item[] | string[];

export type FilterListType = Array<
  | "roomType"
  | "participants"
  | "dateCompleted"
  | "sid"
  | "uniqueName"
  | "hostName"
  | "status"
  | "tags"
  | "platform"
  | "department"
  | "custom"
  | "search"
  | "add-filters"
>;

export interface FilterProps {
  children?: never;
  data: ExtendedTableDataRow[] | TableDataRow[];
  withSearch?: boolean;
  onMoreFiltersClick?: () => void;
  filterList: FilterListType;
  addFiltersList?: FilterListType;
  recommendedFiltersList?: FilterListType;
  extendedTable?: boolean;
  selectedMoreFilters?: Record<string, string | string[]>;
  setSelectedMoreFilters?: React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>;
  selectedFiltersDefault?: Record<string, selectedFilterProps>;
}
