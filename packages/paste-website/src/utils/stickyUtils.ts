import {PSA_ALERT_HEIGHT, PASTE_THEME_ALERT_HEIGHT, SITE_MASTHEAD_HEIGHT} from '../constants';

export const getMainContentComputedOffset = (isPasteTheme: boolean): number => {
  if (isPasteTheme) {
    return PSA_ALERT_HEIGHT + PASTE_THEME_ALERT_HEIGHT;
  }
  return PSA_ALERT_HEIGHT;
};

export const getStickyColumnComputedOffset = (isPasteTheme: boolean, topPad: number = 20): number => {
  if (isPasteTheme) {
    return topPad + PASTE_THEME_ALERT_HEIGHT + PSA_ALERT_HEIGHT + SITE_MASTHEAD_HEIGHT;
  }
  return topPad + PSA_ALERT_HEIGHT + SITE_MASTHEAD_HEIGHT;
};
