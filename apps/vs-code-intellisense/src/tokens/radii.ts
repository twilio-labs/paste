import {PasteToken} from '../models/paste-token';

export const radii: Record<string, PasteToken> = {
  borderRadius0: {
    label: 'border-radius-0',
    value: '0',
    description: 'Border radius reset',
  },
  borderRadius10: {
    label: 'border-radius-10',
    value: '2px',
    description: 'Small border radius',
  },
  borderRadius20: {
    label: 'border-radius-20',
    value: '4px',
    description: 'Large border radius',
  },
  borderRadius30: {
    label: 'border-radius-30',
    value: '8px',
    description: 'Larger border radius',
  },
  borderRadiusCircle: {
    label: 'border-radius-circle',
    value: '50%',
    description: 'Circular border radius',
  },
  borderRadiusPill: {
    label: 'border-radius-pill',
    value: '100px',
    description: 'Pill border radius',
  },
};
