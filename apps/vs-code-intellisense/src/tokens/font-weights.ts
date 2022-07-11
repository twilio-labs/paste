import {PasteToken} from '../models/paste-token';

export const fontWeights: Record<string, PasteToken> = {
  fontWeightLight: {
    label: 'font-weight-light',
    value: '400',
    description: 'Font weight for light weight',
  },
  fontWeightNormal: {
    label: 'font-weight-normal',
    value: '400',
    description: 'Font weight for normal weight',
  },
  fontWeightMedium: {
    label: 'font-weight-medium',
    value: '500',
    description: 'Font weight for medium weight',
  },
  fontWeightSemibold: {
    label: 'font-weight-semibold',
    value: '600',
    description: 'Font weight for semibold weight',
  },
  fontWeightBold: {
    label: 'font-weight-bold',
    value: '700',
    description: 'Font weight for bold weight',
  },
};
