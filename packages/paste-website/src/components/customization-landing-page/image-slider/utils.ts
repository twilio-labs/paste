import { MAX_VALUE, MIN_VALUE } from './constants';

export const clampValueToRange = (computedValue: number): number => {
  if (computedValue > MAX_VALUE) {
    return MAX_VALUE;
  }
  if (computedValue < MIN_VALUE) {
    return MIN_VALUE;
  }

  return computedValue;
};

export const convertPositionToInputValue = (width: number, xPosition: number, offset = 0): number => {
  const positionToValue = MAX_VALUE / width;

  return clampValueToRange(Math.round((xPosition + offset) * positionToValue));
};
