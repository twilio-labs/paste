import {MAX_VALUE} from './constants';

export const convertPositionToInputValue = (width: number, xPosition: number, offset: number): number => {
  const positionToValue = MAX_VALUE / width;

  return Math.floor((xPosition + offset) * positionToValue);
};
