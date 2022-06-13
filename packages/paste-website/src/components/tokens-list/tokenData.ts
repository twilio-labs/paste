import darkTheme from '@twilio-paste/design-tokens/dist/themes/dark/tokens.gatsby';
import defaultTheme from '@twilio-paste/design-tokens/dist/tokens.gatsby';
import Color from 'color';
import kebabCase from 'lodash/kebabCase';

import type {ColorCombinationAccessibility} from '../../utils/color-combos';
import ColorCombos from '../../utils/color-combos';
import colorRating from '../../utils/color-rating';

const getContrastRating = (acc: ColorCombinationAccessibility): string => {
  const rating = colorRating(acc);
  return rating.small;
};

const getTokenBucketFromTheme = (theme, name) => theme[kebabCase(name)] || {};

// @TODO type these.
export const initGetContrastRatings = (theme) => (tokenValue, tokenName) => {
  const colorFn = Color(tokenValue);
  const isInverse = tokenName === 'colorTextWeaker' ? false : colorFn.isLight();
  const backgroundColors = getTokenBucketFromTheme(theme, 'backgroundColors');

  const backgroundColorValue = isInverse
    ? backgroundColors.colorBackgroundBodyInverse
    : backgroundColors.colorBackgroundBody;

  const colorCombos = ColorCombos([tokenValue, backgroundColorValue]);
  let accessibility = {aa: false, aaLarge: false, aaa: false, aaaLarge: false};

  if (colorCombos !== false && colorCombos[1] != null && colorCombos[1].combinations[0] != null) {
    accessibility = colorCombos[1].combinations[0].accessibility;
  }

  return getContrastRating(accessibility);
};

const decorateWithContrastRating = (theme) => {
  const {['text-colors']: textColorTokens, ...otherCategories} = theme;
  const textColorsWithContrastRatings = textColorTokens.map(({value, name, ...rest}) => {
    return {...rest, value, name, contrastRating: initGetContrastRatings(theme)(value, name)};
  });

  return {...otherCategories, ['text-colors']: textColorsWithContrastRatings};
};

export const ThemeTokens = {
  dark: decorateWithContrastRating(darkTheme.tokens),
  default: decorateWithContrastRating(defaultTheme.tokens),
};
