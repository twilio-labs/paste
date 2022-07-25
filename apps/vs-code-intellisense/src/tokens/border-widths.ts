import {PasteToken} from '../models/paste-token';

export const borderWidths: Record<string, PasteToken> = {
  borderWidth0: {
    label: 'border-width-0',
    value: '0',
    description: 'Border width reset',
  },
  borderWidth10: {
    label: 'border-width-10',
    value: '1px',
    description: 'Constant border width token for border width 10',
  },
  borderWidth20: {
    label: 'border-width-20',
    value: '2px',
    description: 'Constant border width token for border width 20',
  },
  borderWidth30: {
    label: 'border-width-30',
    value: '4px',
    description: 'Constant border width token for border width 30',
  },
  borderWidth40: {
    label: 'border-width-40',
    value: '8px',
    description: 'Constant border width token for border width 40',
  },
};
