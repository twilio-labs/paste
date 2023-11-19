import isEmpty from "lodash/isEmpty";

/**
 * Converts an array to a comma separated string
 * @param {string[]} value
 * @returns {string}
 */
export const arrayToCsv = (value: string[]): string => {
  /*
   * Accept only array values + ensure there values inside the array, otherwise
   * there's nothing to join
   */
  if (!Array.isArray(value) || isEmpty(value)) {
    return "";
  }

  return value.join(",");
};
