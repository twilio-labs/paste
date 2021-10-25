import {MAX_VALUE, MAX_VALUE_IN_RANGE, MIN_VALUE_IN_RANGE} from './constants';

export const convertPositionToInputValue = (width: number, xPosition: number, offset: number): number => {
  const positionToValue = MAX_VALUE / width;

  return Math.floor((xPosition + offset) * positionToValue);
};

export const getValueInRange = (computedValue: number): number => {
  let newValue = computedValue;

  if (computedValue > MAX_VALUE_IN_RANGE) {
    newValue = MAX_VALUE_IN_RANGE;
  } else if (computedValue < MIN_VALUE_IN_RANGE) {
    newValue = MIN_VALUE_IN_RANGE;
  }

  return newValue;
};
