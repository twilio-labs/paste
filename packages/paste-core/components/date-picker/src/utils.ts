import date from 'date-and-time';

// require('little-time')

export const returnDateFormatter = (dateValue: string, format: string): string => {
  return date.format(dateValue, format);
};
