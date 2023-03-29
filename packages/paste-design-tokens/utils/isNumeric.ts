export const isNumeric = (value: string): boolean => {
  // To check if a string is a number, we check if it isn't a number
  // eslint-disable-next-line no-restricted-globals,unicorn/prefer-number-properties
  return !isNaN(value as unknown as number);
};
