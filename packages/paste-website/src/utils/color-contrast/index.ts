import Color from 'color';
import type {GatsbyTokens} from '@twilio-paste/website__tokens-list';

import type {ColorCombinationAccessibility} from '../../utils/color-combos';
import ColorCombos from '../../utils/color-combos';
import colorRating from '../../utils/color-rating';

export const isLightToken = (
  tokenName: GatsbyTokens.TokenDTO['name'],
  tokenValue: GatsbyTokens.TokenDTO['value']
): boolean => {
  const colorFn = Color(tokenValue);

  return tokenName === 'color-text-weaker' ? false : colorFn.isLight();
};

export const computeContrastRating = (acc: ColorCombinationAccessibility): string => {
  const rating = colorRating(acc);
  return rating.small;
};

// @TODO
export const getAccessibilityData = (
  textColor: string,
  backgroundColor: string
): {
  aa: boolean;
  aaLarge: boolean;
  aaa: boolean;
  aaaLarge: boolean;
} => {
  const colorCombos = ColorCombos([textColor, backgroundColor]);

  return (
    (colorCombos !== false && colorCombos[1]?.combinations[0]?.accessibility) || {
      aa: false,
      aaLarge: false,
      aaa: false,
      aaaLarge: false,
    }
  );
};

export const getContrastRating = (
  textColor: string,
  backgroundColor: string
): ReturnType<typeof computeContrastRating> => {
  return computeContrastRating(getAccessibilityData(textColor, backgroundColor));
};
