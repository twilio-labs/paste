/* DISCLAIMER: this is an example, not meant to be used in production */

import type { FieldError, UseFormRegister, UseFormReturn } from 'react-hook-form';

export type RoomTypes = 'All' | 'Group' | 'WebRTC Go' | 'Peer to Peer';
export type DateRanges = 'all' | 'day' | 'oneWeek' | 'twoWeeks';
export type DateTimeRanges = 'all' | '12hours' | 'day' | 'threeDays' | 'custom';
export type CustomDateInputNames =
  | 'customDate.startDate'
  | 'customDate.startTime'
  | 'customDate.endDate'
  | 'customDate.endTime';

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
  onApply: (callback: VoidFunction) => ReturnType<UseFormReturn['handleSubmit']>;
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

export interface FilterGroupProps {
  children?: never;
  data: TableDataRow[];
  defaultRoomType?: RoomTypes;
  defaultDateRange?: DateRanges;
}

export interface FilterGroupDateTimeProps {
  children?: never;
  data: TableDataRow[];
}
export interface SampleDataGridProps {
  data: TableDataRow[];
  showDateTime?: boolean;
}
