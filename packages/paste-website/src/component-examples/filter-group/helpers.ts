import type {RoomTypes, DateRanges} from './types';

export const formatDate = (date: Date): string => date.toISOString().slice(0, 10);

export const filterBySearchString = (uniqueName: string, sid: string, searchValue: string): boolean => {
  const lowerCaseName = uniqueName.toLocaleLowerCase();
  const lowerCaseSid = sid.toLocaleLowerCase();

  return lowerCaseName.includes(searchValue) || lowerCaseSid.includes(searchValue);
};

export const filterByRoomType = (roomType: RoomTypes, filterValue: RoomTypes): boolean => {
  if (filterValue === 'All') return true;
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
