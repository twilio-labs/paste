import type {AlignItems, FlexDirection} from '@twilio-paste/style-props';

import type {StackOrientation} from './types';

export const getDirection = (orientation: StackOrientation): FlexDirection => {
  if (Array.isArray(orientation)) {
    return orientation.map((value) => {
      if (value === 'horizontal') {
        return 'row';
      }

      return 'column';
    });
  }

  if (orientation === 'horizontal') {
    return 'row';
  }

  return 'column';
};

export const getAlignment = (orientation: StackOrientation): AlignItems => {
  if (Array.isArray(orientation)) {
    return orientation.map((value) => {
      if (value === 'horizontal') {
        return 'center';
      }

      return 'stretch';
    });
  }

  if (orientation === 'horizontal') {
    return 'center';
  }

  return 'stretch';
};
