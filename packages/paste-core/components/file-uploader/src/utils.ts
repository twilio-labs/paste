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

/**
 * 
 * Checks if a file's mime type matches any of the accepted types, including wildcard types
 * @param fileType: string
 * @param acceptedTypes: string[]
 * @returns boolean
 */
export const isValidMimeType = (fileType: string, acceptedTypes: string[]): boolean => {
  return acceptedTypes.some((acceptedType: string) => {
    if (acceptedType.endsWith('/*')) {
      const baseType = acceptedType.slice(0, -2);
      return fileType.startsWith(baseType + '/');
    }

    return fileType === acceptedType;
  })
}