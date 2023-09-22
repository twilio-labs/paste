import { format } from "date-fns";

// accepts 'HH:ss' OR 'HH:mm:ss' OR 'HH:mm:ss.SSS'
const TIME_REGEX = /^(0\d|1\d|2[0-3]):[0-5]\d(:[0-5]\d)?(.\d{1,3})?$/;

const NEUTRAL_DATE = "2021-06-18T";

/**
 * timeValue must follow the format: 'HH:ss' OR 'HH:mm:ss' OR 'HH:mm:ss.SSS'
 */
type TimeValueType = string;

/**
 * follow https://date-fns.org/v2.21.3/docs/format to define time format
 */
type TimeFormatType = string;

/*
 * Adding an arbitrary date of 2021-06-18 to the timeValue before passing into the formatter
 * because it requires a complete Date object (date + time)
 */

/**
 *formatReturnTime formats a timeValue string of type 'HH:ss' OR 'HH:mm:ss' OR 'HH:mm:ss.SSS' to a pre-defined timeFormat
 *
 * @param {TimeValueType} timeValue 'HH:ss' OR 'HH:mm:ss' OR 'HH:mm:ss.SSS'
 * @param {TimeFormatType} timeFormat
 * @return {*}  {string}
 */
export const formatReturnTime = (timeValue: TimeValueType, timeFormat: TimeFormatType): string => {
  if (timeValue.match(TIME_REGEX)) {
    const datePlusTimeValue = new Date(NEUTRAL_DATE.concat(timeValue));
    return format(datePlusTimeValue, timeFormat);
  }
  throw new Error(
    "[Paste Time Picker]: Please make sure timeValue string matches HH:mm OR HH:mm:ss OR HH:mm:ss.SSS format",
  );
};
