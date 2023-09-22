import { format } from 'date-fns';

// https://stackoverflow.com/questions/22061723/regex-date-validation-for-yyyy-mm-dd/22061800
const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

const NEUTRAL_TIME = 'T12:00:00-00:00';

/**
 * dateValue must follow the format: 'YYYY-MM-DD'
 */
type DateValueType = string;

/**
 * follow https://date-fns.org/v2.21.3/docs/format to define date format
 */
type DateFormatType = string;

/*
 * Adding a time of 12:00:00 UTC+0 to the dateValue in order to avoid the timezone conversions
 * that lead to the date value being off by 1 day.
 */

/**
 * formatReturnDate formats a dateValue string of type 'YYYY-MM-DD' to a pre-defined dateFormat
 *
 * @param {DateValueType} dateValue 'YYYY-MM-DD'
 * @param {string} dateFormat
 * @return {*}  {string}
 */
export const formatReturnDate = (dateValue: DateValueType, dateFormat: DateFormatType): string => {
  if (dateValue.match(DATE_REGEX)) {
    const datePlusNoonUTC = new Date(dateValue.concat(NEUTRAL_TIME));
    return format(datePlusNoonUTC, dateFormat);
  }
  throw new Error('[Paste Date Picker]: Please make sure dateValue string matches YYYY-MM-DD format');
};
