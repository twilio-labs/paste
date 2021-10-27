import {MAX_VALUE, MIN_VALUE} from './constants';

export const convertPositionToInputValue = (width: number, xPosition: number, offset: number): number => {
  const positionToValue = MAX_VALUE / width;

  return Math.floor((xPosition + offset) * positionToValue);
};

export const clampValueToRange = (computedValue: number): number => {
  let newValue = computedValue;

  if (computedValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  } else if (computedValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }

  return newValue;
};
