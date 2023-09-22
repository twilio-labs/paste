import type { BackgroundColor } from '@twilio-paste/style-props';

import type { UIStates } from './types';

export const getColorToken = (states: UIStates): BackgroundColor => {
  if (states.disabled) {
    return 'colorBackgroundStrong';
  } else if (states.error) {
    if (states.hovered) {
      return 'colorBackgroundErrorStrong';
    }
    return 'colorBackgroundError';
  } else if (states.dragging) {
    return 'colorBackgroundPrimary';
  } else if (states.focused) {
    return 'colorBackgroundPrimaryStronger';
  } else if (states.hovered) {
    return 'colorBackgroundPrimary';
  }
  return 'colorBackgroundPrimaryStronger';
};
