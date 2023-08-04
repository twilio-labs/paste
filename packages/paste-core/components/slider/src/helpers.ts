import type {UIStates, BackgroundColorTokens} from './types';

export const getColorToken = (states: UIStates): BackgroundColorTokens => {
  if (states.disabled) {
    return 'colorBackgroundStrong';
  } else if (states.error) {
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
