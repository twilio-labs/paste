export const getTokenNumberValue = value => Number.parseFloat(value.split(/(\d+\.?\d*)/).filter(Boolean)[0]);
