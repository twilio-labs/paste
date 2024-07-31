/* DISCLAIMER: this is an example, not meant to be used in production */

import { add, format, isAfter, isBefore } from "date-fns";
import type { Duration } from "date-fns";

import type {
  DateRangeType,
  DateRanges,
  DateTimeRanges,
  ParticipantsType,
  RoomTypes,
  TableDataRow,
  selectedFilterProps,
} from "./types";

export const formatDate = (date: Date): string => format(date, "yyyy-MM-dd");
export const formatDateTime = (date: Date): string => format(date, "HH:mm:ss 'UTC' yyyy-MM-dd");

export const filterBySearchString = (uniqueName: string, sid: string, searchValue: string): boolean => {
  const lowerCaseName = uniqueName.toLocaleLowerCase();
  const lowerCaseSid = sid.toLocaleLowerCase();

  return lowerCaseName.includes(searchValue) || lowerCaseSid.includes(searchValue);
};

export const filterByRoomType = (roomType: RoomTypes, filterValue: RoomTypes): boolean => {
  return roomType === filterValue;
};

export const dateDifference = (date1: Date, date2: Date): number =>
  Math.round((date1.valueOf() - date2.valueOf()) / (1000 * 60 * 60 * 24));

export const filterByDateRange = (dateCompleted: Date, filterValue: DateRanges): boolean => {
  const today = new Date();
  const rangeMap: Record<DateRanges, number> = {
    day: 1,
    oneWeek: 7,
    twoWeeks: 14,
    all: Infinity,
  };

  return dateDifference(today, dateCompleted) <= rangeMap[filterValue];
};

export const filterByDateTimeRange = (
  dateCompleted: Date,
  filterValue: DateTimeRanges,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
): boolean => {
  if (filterValue === "all") return true;
  if (filterValue !== "custom") {
    const rangeMap: Record<"12hours" | "day" | "threeDays", Duration> = {
      "12hours": { hours: -12 },
      day: { days: -1 },
      threeDays: { days: -3 },
    };
    const computedStart = add(new Date(), rangeMap[filterValue]);

    return isAfter(dateCompleted, computedStart);
  }

  const computedCustomStart = new Date(`${startDate}T${startTime}`);
  const computedCustomEnd = new Date(`${endDate}T${endTime}`);

  return isAfter(dateCompleted, computedCustomStart) && isBefore(dateCompleted, computedCustomEnd);
};

export const isEndDateBeforeStartDate = (
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
): boolean => {
  const computedStart = new Date(`${startDate}T${startTime}`);
  const computedEnd = new Date(`${endDate}T${endTime}`);

  return isBefore(computedEnd, computedStart);
};

export const applyFilters = (filters: selectedFilterProps, data: TableDataRow[]): TableDataRow[] => {
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

    if (type === "date-range") {
      const { startDate, endDate } = value as unknown as DateRangeType;

      filteredData = filteredData.filter((item) => {
        const itemDate = new Date(item.dateCompleted);

        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      });
    }

    if (type === "search") {
      const search = value as string;

      filteredData = filteredData.filter((item) => {
        const { uniqueName, roomType, participants, dateCompleted, sid } = item;

        return (
          uniqueName.toLowerCase().includes(search.toLowerCase()) ||
          roomType.toLowerCase().includes(search.toLowerCase()) ||
          participants.toString().includes(search) ||
          dateCompleted.toString().includes(search) ||
          sid.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
  });

  return filteredData;
};
