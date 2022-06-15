import camelCase from 'lodash/camelCase';
import get from 'lodash/get';

import type {Token} from '../../../types/design-tokens';
import {isLightToken, getContrastRating} from '../../utils/color-contrast';

export const checkIsInverse = {
  'box-shadows': (name: Token['name']): boolean => {
    return (
      name.includes('inverse') ||
      name.includes('light') ||
      name.includes('lighter') ||
      name.includes('weak') ||
      name.includes('weaker')
    );
  },
  'text-colors': (name: Token['name'], value: Token['value']): boolean => isLightToken(name, value),
  'border-color': (name: Token['name']): boolean => name.includes('inverse'),
};

export const getTokensFromTheme = (theme, path = '') => get(theme, path, theme);

const getCategoryKeys = (theme) => Object.keys(getTokensFromTheme(theme));

export const backgroundColors = (themeTokens) =>
  themeTokens['background-colors']
    .filter(({name}) => name.includes('body'))
    .reduce((accum, {name, value}) => ({...accum, [camelCase(name)]: value}), {});

export const annotate = (theme) =>
  getCategoryKeys(theme).reduce((accum, cat: string) => {
    const tokens = theme[cat]
      .filter(({deprecated = false}) => !deprecated)
      .map(({name, value, ...rest}) => {
        return {
          name,
          value,
          isInverse: checkIsInverse.hasOwnProperty(cat)
            ? checkIsInverse[cat as keyof typeof checkIsInverse](name, value)
            : false,
          ...rest,
        };
      })
      .map(({isInverse, ...rest}) => {
        const key = isInverse ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody';
        const backgroundColor = backgroundColors(theme)[key];
        return {...rest, isInverse, backgroundColor};
      })
      .map(({value, backgroundColor, ...rest}) => {
        return {
          ...rest,
          value,
          backgroundColor,
          contrastRating: cat === 'text-colors' ? getContrastRating(value, backgroundColor) : null,
        };
      });

    return {...accum, [cat]: tokens};
  }, {});
