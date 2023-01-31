/**
 * Appends a px equivalent (based on 1 rem = 16px) for a value that includes the string 'rem'
 * If the value is not a rem unit, it returns the original value.
 */
export const remToPx = (value: string): string => {
  if (!value.includes('rem')) {
    return value;
  }

  const remValue = Number(value.replace('rem', '').trim());
  if (isNaN(remValue)) {
    return value;
  }

  const pxValue = remValue * 16;

  return `${remValue}rem (${pxValue}px)`;
};
